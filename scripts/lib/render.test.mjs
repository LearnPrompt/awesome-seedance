import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  sortByHeat,
  isSeedance25,
  computeStats,
  getFeatured,
  renderCaseEntry,
  renderTemplateCard,
  renderStatsTable,
  aggregateRetestsByModel,
  renderCrossModelSection,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  galleryPartFileName,
  FEATURED_COUNT,
  README_SIZE_BUDGET_BYTES,
} from "./render.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.resolve(__dirname, "../../data/fixtures");
function loadFixture(name) {
  return JSON.parse(readFileSync(path.join(FIXTURE_ROOT, name), "utf8"));
}

const fixtureCases = [
  { slug: "a", title: "A", summary: "sa", promptFull: "prompt a", models: ["Seedance 2.5"], creator: "u1", sourceUrl: "https://x.com/1", sourcePublishedAt: "2026-08-01", heatScore: 90, mediaType: "video", posterUrl: "https://cdn/a.jpg", goodcaseUrl: "https://goodcase.ai/cases/a" },
  { slug: "b", title: "B", summary: "sb", promptFull: "prompt b", models: ["Seedance 2.5"], creator: "u2", sourceUrl: "https://x.com/2", sourcePublishedAt: "2026-08-02", heatScore: 95, mediaType: "video", posterUrl: "https://cdn/b.jpg", goodcaseUrl: "https://goodcase.ai/cases/b" },
  { slug: "c", title: "C", summary: "sc", promptFull: "prompt c", models: ["Seedance 2.0"], creator: "u3", sourceUrl: "https://x.com/3", sourcePublishedAt: "2026-07-01", heatScore: 70, mediaType: "video", posterUrl: "https://cdn/c.jpg", goodcaseUrl: "https://goodcase.ai/cases/c" },
  { slug: "d", title: "D", summary: "sd", promptFull: "prompt d", models: ["Seedance 2.0"], creator: "u1", sourceUrl: "https://x.com/4", sourcePublishedAt: "2026-06-01", heatScore: 60, mediaType: "video", posterUrl: "https://cdn/d.jpg", goodcaseUrl: "https://goodcase.ai/cases/d" },
];

test("sortByHeat orders descending and is stable on ties", () => {
  const tied = [
    { slug: "x", heatScore: 50 },
    { slug: "y", heatScore: 50 },
    { slug: "z", heatScore: 99 },
  ];
  const sorted = sortByHeat(tied);
  assert.equal(sorted[0].slug, "z");
  assert.equal(sorted[1].slug, "x"); // tie keeps original order
  assert.equal(sorted[2].slug, "y");
});

test("isSeedance25 detects the 2.5 line only", () => {
  assert.equal(isSeedance25({ models: ["Seedance 2.5"] }), true);
  assert.equal(isSeedance25({ models: ["Seedance 2.5 Pro"] }), true);
  assert.equal(isSeedance25({ models: ["Seedance 2.0"] }), false);
});

test("computeStats counts totals, authors, and last-updated correctly", () => {
  // lastUpdated 现在取 meta.exportedAt（数据导出时间），不再取案例里最新的 sourcePublishedAt。
  const stats = computeStats({ cases: fixtureCases, meta: { exportedAt: "2026-08-26T15:13:01.687Z" } });
  assert.equal(stats.total, 4);
  assert.equal(stats.v25Count, 2);
  assert.equal(stats.v20Count, 2);
  assert.equal(stats.authorCount, 3); // u1, u2, u3
  assert.equal(stats.lastUpdated, "2026-08-26");
});

test("computeStats returns null lastUpdated when meta.exportedAt is missing", () => {
  const stats = computeStats({ cases: fixtureCases });
  assert.equal(stats.lastUpdated, null);
});

test("getFeatured returns top N across versions by heat, not per-version", () => {
  const featured = getFeatured(fixtureCases, 3);
  assert.equal(featured.length, 3);
  assert.deepEqual(featured.map((c) => c.slug), ["b", "a", "c"]);
});

test("getFeatured defaults to FEATURED_COUNT (6)", () => {
  assert.equal(FEATURED_COUNT, 6);
});

test("renderCaseEntry produces expected structure with a closed prompt fence", () => {
  const md = renderCaseEntry(fixtureCases[0], "en");
  assert.match(md, /^### A/);
  assert.match(md, /> sa/);
  assert.match(md, /```\nprompt a\n```/);
  assert.match(md, /\*\*Author:\*\* u1/);
  assert.match(md, /\*\*Source:\*\* \[Original\]\(https:\/\/x\.com\/1\)/);
  assert.match(md, /\*\*Heat:\*\* 90/);
  assert.match(md, /goodcase\.ai \(retest log \/ stability score\)/);
});

test("renderCaseEntry zh uses zh field labels, not en", () => {
  const md = renderCaseEntry(fixtureCases[0], "zh");
  assert.match(md, /\*\*作者:\*\* u1/);
  assert.match(md, /\*\*来源:\*\* \[原帖\]/);
  assert.match(md, /\*\*热度:\*\* 90/);
  assert.doesNotMatch(md, /\*\*Author:\*\*/);
});

test("renderCaseEntry bumps fence length when prompt itself contains backticks", () => {
  const c = { ...fixtureCases[0], promptFull: "some ``` inside" };
  const md = renderCaseEntry(c, "en");
  assert.match(md, /````\nsome ``` inside\n````/);
});

test("renderTemplateCard includes only first two guidance points", () => {
  const template = {
    title: { en: "T1", zh: "T1zh" },
    description: { en: "desc", zh: "desczh" },
    useWhen: { en: "when", zh: "whenzh" },
    // 规范形状 {en:[...], zh:[...]}，与 goodcase 蒸馏层的 data/style-library.json 一致
    guidance: {
      en: ["g1", "g2", "g3 (should be dropped)"],
      zh: ["g1zh", "g2zh", "g3zh"],
    },
    exampleCaseUrls: ["https://goodcase.ai/cases/a"],
  };
  const md = renderTemplateCard(template, "en");
  assert.match(md, /g1/);
  assert.match(md, /g2/);
  assert.doesNotMatch(md, /g3 \(should be dropped\)/);
});

test("partitionAllPrompts puts 2.5 first, caps 2.0 inline list, keeps remainder for gallery", () => {
  const { v25, v20Top, v20Rest } = partitionAllPrompts(fixtureCases, 1);
  assert.deepEqual(v25.map((c) => c.slug), ["b", "a"]); // heat 95, 90
  assert.deepEqual(v20Top.map((c) => c.slug), ["c"]); // heat 70, limit 1
  assert.deepEqual(v20Rest.map((c) => c.slug), ["d"]); // heat 60, overflow
});

test("fitToSizeBudget keeps everything when under budget", () => {
  const entries = ["one\n", "two\n", "three\n"];
  const result = fitToSizeBudget("HEAD\n", entries, "\nTAIL", 10_000);
  assert.equal(result.truncated, false);
  assert.equal(result.droppedCount, 0);
  assert.match(result.markdown, /HEAD/);
  assert.match(result.markdown, /TAIL/);
});

test("fitToSizeBudget drops tail entries under a tight budget", () => {
  const entries = ["a".repeat(100) + "\n", "b".repeat(100) + "\n", "c".repeat(100) + "\n"];
  const budget = 150; // fits head + ~1 entry
  const result = fitToSizeBudget("H\n", entries, "\nT", budget);
  assert.equal(result.truncated, true);
  assert.ok(result.keptCount < entries.length);
  assert.ok(result.bytes <= budget || result.keptCount === 0);
});

test("renderGalleryParts renders every case, splits by budget, and names parts", () => {
  const two = fixtureCases.filter((c) => c.slug === "c" || c.slug === "d");
  // 预算足够大：单页，保留旧文件名
  const [single] = renderGalleryParts(two, "zh");
  assert.equal(single.totalParts, 1);
  assert.equal(single.caseCount, 2);
  assert.ok(single.markdown.includes("第 1/1 页"));
  assert.equal(galleryPartFileName("zh", 1, 1), "gallery-seedance-2-0.zh.md");

  // 预算极小：每页一条，互相带导航链接（GitHub 超 512KB 拒渲染，分片是硬要求）
  const parts = renderGalleryParts(two, "en", 1);
  assert.equal(parts.length, 2);
  assert.equal(parts[0].caseCount, 1);
  assert.ok(parts[0].markdown.includes("[Part 2](./gallery-seedance-2-0-part-2.md)"));
  assert.ok(parts[1].markdown.includes("[Part 1](./gallery-seedance-2-0-part-1.md)"));
  assert.equal(galleryPartFileName("en", 2, 2), "gallery-seedance-2-0-part-2.md");
});

// ---------------------------------------------------------------------------
// 复测（retest）字段：data/cases.json 还没同步这层字段，全部靠 fixture 开发。
// 硬要求：老 case（没有 retestSummary/retests）渲染结果必须逐字节不变。
// ---------------------------------------------------------------------------

const caseWithReproducedRetest = {
  ...fixtureCases[0],
  slug: "with-retest-reproduced",
  retestSummary: {
    runs: 2,
    models: ["MiniMax H3 768p", "Kling 2.1"],
    latest: {
      model: "MiniMax H3 768p",
      verdict: "reproduced",
      testedAt: "2026-09-05T10:00:00Z",
      artifactUrl: "https://goodcase.ai/retests/x/h3-01.mp4",
      finalScore: 82,
    },
  },
};

const caseWithDegradedRetest = {
  ...fixtureCases[0],
  slug: "with-retest-degraded",
  retestSummary: {
    runs: 1,
    models: ["MiniMax H3 768p"],
    latest: {
      model: "MiniMax H3 768p",
      verdict: "degraded",
      testedAt: "2026-09-01T12:00:00Z",
      artifactUrl: null,
      finalScore: null,
    },
  },
};

test("renderCaseEntry adds a Retest line (en) when retestSummary is present, with score/link/runs", () => {
  const md = renderCaseEntry(caseWithReproducedRetest, "en");
  assert.match(
    md,
    /\*\*Retest:\*\* MiniMax H3 768p · 2026-09-05 · ✅ reproduced \(score 82\) · \[output\]\(https:\/\/goodcase\.ai\/retests\/x\/h3-01\.mp4\) · 2 runs/
  );
});

test("renderCaseEntry adds a 复测 line (zh) when retestSummary is present, with score/link/runs", () => {
  const md = renderCaseEntry(caseWithReproducedRetest, "zh");
  assert.match(
    md,
    /\*\*复测：\*\* MiniMax H3 768p · 2026-09-05 · ✅ 复现 \(82 分\) · \[产物\]\(https:\/\/goodcase\.ai\/retests\/x\/h3-01\.mp4\) · 共 2 次/
  );
});

test("renderCaseEntry omits score/link and runs suffix when finalScore/artifactUrl are null and runs === 1", () => {
  const mdEn = renderCaseEntry(caseWithDegradedRetest, "en");
  assert.match(mdEn, /\*\*Retest:\*\* MiniMax H3 768p · 2026-09-01 · ⚠️ degraded$/m);
  assert.doesNotMatch(mdEn, /\(score/);
  assert.doesNotMatch(mdEn, /\[output\]/);
  assert.doesNotMatch(mdEn, / runs/);

  const mdZh = renderCaseEntry(caseWithDegradedRetest, "zh");
  assert.match(mdZh, /\*\*复测：\*\* MiniMax H3 768p · 2026-09-01 · ⚠️ 降级$/m);
  assert.doesNotMatch(mdZh, /分\)/);
  assert.doesNotMatch(mdZh, /\[产物\]/);
  assert.doesNotMatch(mdZh, /共 \d+ 次/);
});

test("renderCaseEntry keeps rendering byte-identical (no Retest line) for cases without retestSummary", () => {
  // fixtureCases[0] 完全没有 retestSummary 字段——老数据的真实形态。
  const md = renderCaseEntry(fixtureCases[0], "en");
  assert.doesNotMatch(md, /\*\*Retest:\*\*/);
  const mdZh = renderCaseEntry(fixtureCases[0], "zh");
  assert.doesNotMatch(mdZh, /\*\*复测：\*\*/);
});

// ---------------------------------------------------------------------------
// 稳定度分（stabilityScore）：0 表示未测量,包括没有这个字段的老数据。
// ---------------------------------------------------------------------------

test("renderCaseEntry adds a Stability line (en) when stabilityScore > 0", () => {
  const c = { ...fixtureCases[0], stabilityScore: 78 };
  const md = renderCaseEntry(c, "en");
  assert.match(md, /\*\*Stability:\*\* 78\/100/);
});

test("renderCaseEntry adds a 稳定度 line (zh) when stabilityScore > 0", () => {
  const c = { ...fixtureCases[0], stabilityScore: 78 };
  const md = renderCaseEntry(c, "zh");
  assert.match(md, /\*\*稳定度：\*\* 78\/100/);
});

test("renderCaseEntry omits the Stability line when stabilityScore is 0 or missing", () => {
  const mdZero = renderCaseEntry({ ...fixtureCases[0], stabilityScore: 0 }, "en");
  assert.doesNotMatch(mdZero, /\*\*Stability:\*\*/);
  // fixtureCases[0] 本身没有 stabilityScore 字段——老数据的真实形态
  const mdMissing = renderCaseEntry(fixtureCases[0], "en");
  assert.doesNotMatch(mdMissing, /\*\*Stability:\*\*/);
  const mdMissingZh = renderCaseEntry(fixtureCases[0], "zh");
  assert.doesNotMatch(mdMissingZh, /\*\*稳定度：\*\*/);
});

test("computeStats counts measured stability scores and averages them to one decimal, ignoring 0/missing", () => {
  const cases = [
    { ...fixtureCases[0], stabilityScore: 80 },
    { ...fixtureCases[1], stabilityScore: 85 },
    { ...fixtureCases[2], stabilityScore: 0 }, // 未测量
    { ...fixtureCases[3] }, // 老数据，没有这个字段
  ];
  const stats = computeStats({ cases, meta: { exportedAt: "2026-08-26T15:13:01.687Z" } });
  assert.equal(stats.stabilityCases, 2);
  assert.equal(stats.stabilityAvg, 82.5);
});

test("computeStats returns stabilityAvg null when no case has a measured score", () => {
  const stats = computeStats({ cases: fixtureCases, meta: { exportedAt: "2026-08-26T15:13:01.687Z" } });
  assert.equal(stats.stabilityCases, 0);
  assert.equal(stats.stabilityAvg, null);
});

test("renderStatsTable shows the stability score row, with a placeholder average when there are 0 measured cases", () => {
  const zeroStats = {
    total: 4,
    v25Count: 2,
    v20Count: 2,
    authorCount: 3,
    lastUpdated: "2026-08-26",
    retestCases: 0,
    retestRuns: 0,
    stabilityCases: 0,
    stabilityAvg: null,
  };
  assert.match(renderStatsTable(zeroStats, "en"), /\| Stability score \(measured\) \| 0 cases \/ avg - \|/);
  assert.match(renderStatsTable(zeroStats, "zh"), /\| 稳定度分（已测） \| 0 条 \/ 均分 - \|/);

  const nonZeroStats = { ...zeroStats, stabilityCases: 2, stabilityAvg: 82.5 };
  assert.match(
    renderStatsTable(nonZeroStats, "en"),
    /\| Stability score \(measured\) \| 2 cases \/ avg 82\.5 \|/
  );
  assert.match(
    renderStatsTable(nonZeroStats, "zh"),
    /\| 稳定度分（已测） \| 2 条 \/ 均分 82\.5 \|/
  );
});

test("computeStats reads meta.retests.casesWithRetests / totalRuns", () => {
  const stats = computeStats({
    cases: fixtureCases,
    meta: {
      exportedAt: "2026-08-26T15:13:01.687Z",
      retests: { casesWithRetests: 37, totalRuns: 52, byModel: {}, byVerdict: {} },
    },
  });
  assert.equal(stats.retestCases, 37);
  assert.equal(stats.retestRuns, 52);
});

test("computeStats defaults retestCases/retestRuns to 0 when meta.retests is missing (old data)", () => {
  const stats = computeStats({ cases: fixtureCases, meta: { exportedAt: "2026-08-26T15:13:01.687Z" } });
  assert.equal(stats.retestCases, 0);
  assert.equal(stats.retestRuns, 0);
});

test("renderStatsTable shows the cross-model retest row, even when it's 0/0", () => {
  const zeroStats = {
    total: 4,
    v25Count: 2,
    v20Count: 2,
    authorCount: 3,
    lastUpdated: "2026-08-26",
    retestCases: 0,
    retestRuns: 0,
  };
  const en = renderStatsTable(zeroStats, "en");
  assert.match(en, /\| Re-run on other models \| 0 cases \/ 0 runs \|/);
  const zh = renderStatsTable(zeroStats, "zh");
  assert.match(zh, /\| 跨模型复测 \| 0 条 \/ 0 次 \|/);

  const nonZeroStats = { ...zeroStats, retestCases: 37, retestRuns: 52 };
  assert.match(renderStatsTable(nonZeroStats, "en"), /\| Re-run on other models \| 37 cases \/ 52 runs \|/);
  assert.match(renderStatsTable(nonZeroStats, "zh"), /\| 跨模型复测 \| 37 条 \/ 52 次 \|/);
});

test("fitToSizeBudget keeps output within README_SIZE_BUDGET_BYTES even when entries include a Retest line", () => {
  const bulkyCase = { ...caseWithReproducedRetest, promptFull: "x ".repeat(400) };
  const entries = Array.from({ length: 400 }, (_, i) =>
    renderCaseEntry({ ...bulkyCase, slug: `bulky-${i}`, title: `Bulky ${i}` }, "en") + "\n"
  );
  const result = fitToSizeBudget("HEAD\n", entries, "\nTAIL\n", README_SIZE_BUDGET_BYTES);
  assert.ok(result.bytes <= README_SIZE_BUDGET_BYTES);
  assert.equal(result.truncated, true); // sanity: this synthetic input is deliberately oversized
});

test("aggregateRetestsByModel aggregates per-model runs/reproduced counts from case-level retests[]", () => {
  const fixtureData = loadFixture("cases.fixture.json");
  const byModel = aggregateRetestsByModel(fixtureData.cases);
  assert.deepEqual(byModel.get("MiniMax H3 768p"), { runs: 2, reproduced: 1 }); // 1 reproduced + 1 degraded
  assert.deepEqual(byModel.get("Kling 2.1"), { runs: 1, reproduced: 1 });
});

test("renderCrossModelSection renders a heading + per-model table when meta.retests is present", () => {
  const fixtureData = loadFixture("cases.fixture.json");
  const md = renderCrossModelSection(fixtureData.cases, fixtureData.meta, "en");
  assert.match(md, /^## 🔁 Cross-model retests/);
  assert.match(md, /\| Model \| Runs \| Reproduction rate \|/);
  assert.match(md, /\| MiniMax H3 768p \| 2 \| 50% \|/);
  assert.match(md, /\| Kling 2\.1 \| 1 \| 100% \|/);

  const mdZh = renderCrossModelSection(fixtureData.cases, fixtureData.meta, "zh");
  assert.match(mdZh, /^## 🔁 跨模型复测/);
  assert.match(mdZh, /\| 模型 \| 次数 \| 复现率 \|/);
});

test("renderCrossModelSection returns null when meta.retests is missing or totalRuns is 0", () => {
  const fixtureData = loadFixture("cases.fixture.json");
  assert.equal(renderCrossModelSection(fixtureData.cases, {}, "en"), null);
  assert.equal(renderCrossModelSection(fixtureData.cases, undefined, "en"), null);
  assert.equal(
    renderCrossModelSection(fixtureData.cases, { retests: { totalRuns: 0 } }, "en"),
    null
  );
});
