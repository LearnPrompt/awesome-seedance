import { test } from "node:test";
import assert from "node:assert/strict";
import {
  sortByHeat,
  isSeedance25,
  computeStats,
  getFeatured,
  renderCaseEntry,
  renderTemplateCard,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  galleryPartFileName,
  FEATURED_COUNT,
} from "./render.mjs";

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
