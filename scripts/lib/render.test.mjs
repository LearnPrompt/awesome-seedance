import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  sortByHeat,
  isSeedance25,
  isSeedance20,
  isSeedanceUnversioned,
  classifySeedance,
  seedanceVersionOf,
  normalizeModelLabel,
  computeStats,
  getFeatured,
  renderCaseEntry,
  renderTemplateCard,
  renderStatsTable,
  renderTable,
  renderTopTable,
  aggregateRetestsByModel,
  renderCrossModelSection,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  galleryPartFileName,
  galleryFileBase,
  displayTitle,
  displaySummary,
  cleanHeadingTitle,
  truncateAtBoundary,
  pickText,
  githubSlug,
  formatRetestRun,
  renderRetestBlock,
  FEATURED_COUNT,
  TOP_INLINE_COUNT,
  HEADING_MAX_LEN,
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

// ---------------------------------------------------------------------------
// 版本三分类：2.5 / 2.0 / 未标版本。大小写、连字符不敏感；多版本取最高；每条只算一次。
// ---------------------------------------------------------------------------

test("seedanceVersionOf is case-insensitive, tolerates hyphens, and returns null for non-Seedance models", () => {
  assert.equal(seedanceVersionOf("Seedance 2.5"), "2.5");
  assert.equal(seedanceVersionOf("seedance-2.5"), "2.5");
  assert.equal(seedanceVersionOf("SEEDANCE 2.0"), "2.0");
  assert.equal(seedanceVersionOf("Seedance 2"), "2.0");
  assert.equal(seedanceVersionOf("Seedance"), "unspecified");
  assert.equal(seedanceVersionOf("seedance "), "unspecified");
  assert.equal(seedanceVersionOf("Kling"), null);
  assert.equal(seedanceVersionOf(null), null);
});

test("normalizeModelLabel canonicalizes legacy labels", () => {
  assert.equal(normalizeModelLabel("seedance-2.5"), "Seedance 2.5");
  assert.equal(normalizeModelLabel("SEEDANCE 2.0"), "Seedance 2.0");
  assert.equal(normalizeModelLabel("seedance"), "Seedance");
  assert.equal(normalizeModelLabel("Kling 2.1"), "Kling 2.1");
});

test("classifySeedance is three-way and picks the highest version when several are listed", () => {
  assert.equal(classifySeedance({ models: ["Seedance 2.5"] }), "2.5");
  assert.equal(classifySeedance({ models: ["Seedance 2.0"] }), "2.0");
  assert.equal(classifySeedance({ models: ["Seedance"] }), "unspecified");
  assert.equal(classifySeedance({ models: ["Kling", "Seedance"] }), "unspecified");
  assert.equal(classifySeedance({ models: ["Seedance", "Seedance 2.0"] }), "2.0");
  assert.equal(classifySeedance({ models: ["Seedance 2.0", "seedance-2.5"] }), "2.5");
  assert.equal(classifySeedance({ models: [] }), "unspecified");
  assert.equal(classifySeedance({}), "unspecified");
  const c = { models: ["Seedance", "Seedance 2.5"] };
  assert.equal([isSeedance25(c), isSeedance20(c), isSeedanceUnversioned(c)].filter(Boolean).length, 1);
});

test("computeStats counts totals, authors, and last-updated correctly", () => {
  // lastUpdated 现在取 meta.exportedAt（数据导出时间），不再取案例里最新的 sourcePublishedAt。
  const stats = computeStats({ cases: fixtureCases, meta: { exportedAt: "2026-08-26T15:13:01.687Z" } });
  assert.equal(stats.total, 4);
  assert.equal(stats.v25Count, 2);
  assert.equal(stats.v20Count, 2);
  assert.equal(stats.unversionedCount, 0);
  assert.equal(stats.authorCount, 3); // u1, u2, u3
  assert.equal(stats.lastUpdated, "2026-08-26");
});

test("computeStats three-way version counts add up to the total, each case counted once", () => {
  const cases = [
    { models: ["Seedance 2.5"], creator: "a", heatScore: 1 },
    { models: ["seedance-2.5"], creator: "a", heatScore: 1 },
    { models: ["Seedance 2.0"], creator: "a", heatScore: 1 },
    { models: ["Seedance"], creator: "a", heatScore: 1 },
    { models: ["Seedance", "Kling"], creator: "a", heatScore: 1 },
    { models: ["Seedance", "Seedance 2.0"], creator: "a", heatScore: 1 },
  ];
  const stats = computeStats({ cases, meta: {} });
  assert.equal(stats.v25Count, 2);
  assert.equal(stats.v20Count, 2);
  assert.equal(stats.unversionedCount, 2);
  assert.equal(stats.v25Count + stats.v20Count + stats.unversionedCount, stats.total);
});

test("renderStatsTable has three Seedance rows in both languages and no '2.0(+)' wording", () => {
  const stats = computeStats(loadFixture("cases.fixture.json"));
  const en = renderStatsTable(stats, "en");
  assert.match(en, /\|\s*Seedance 2\.5\s*\|\s*6\s*\|/);
  assert.match(en, /\|\s*Seedance 2\.0\s*\|\s*3\s*\|/);
  assert.match(en, /\|\s*Seedance \(version unspecified\)\s*\|\s*1\s*\|/);
  assert.doesNotMatch(en, /2\.0\(\+\)/);
  const zh = renderStatsTable(stats, "zh");
  assert.match(zh, /\|\s*Seedance（未标版本）\s*\|\s*1\s*\|/);
  assert.doesNotMatch(zh, /2\.0\(\+\)/);
});

test("renderStatsTable appends meta.retestBatchNote under the table when present, and nothing when null", () => {
  const withNote = computeStats(loadFixture("cases.fixture.json"));
  assert.match(renderStatsTable(withNote, "en"), /\n\n\*Retest batch note: Runs before 2026-09-01/);
  assert.match(renderStatsTable(withNote, "zh"), /\n\n\*复测批次说明：Runs before 2026-09-01/);
  const withoutNote = computeStats({ cases: fixtureCases, meta: { exportedAt: "2026-08-26T00:00:00Z", retestBatchNote: null } });
  assert.equal(withoutNote.retestBatchNote, null);
  assert.doesNotMatch(renderStatsTable(withoutNote, "en"), /batch note|null|undefined/);
});

test("renderTable pads cells so pipes align (awesome-lint table-pipe-alignment)", () => {
  const md = renderTable(["A", "Long header"], [["x", "y"], ["longer cell", "z"]]);
  const lines = md.split("\n");
  assert.equal(new Set(lines.map((l) => l.length)).size, 1);
  assert.match(lines[1], /^\| -+ \| -+ \|$/);
  // 宽度按 UTF-16 码元数算：astral emoji 占 2，和 remark 的列偏移一致
  const emoji = renderTable(["A"], [["😄"], ["ab"], ["abc"]]).split("\n");
  assert.equal(new Set(emoji.map((l) => l.length)).size, 1);
});

// ---------------------------------------------------------------------------
// 标题 / 摘要：英文 README 用 titleEn/summaryEn，缺失回落；中文 README 用 title/summary。
// ---------------------------------------------------------------------------

test("pickText falls back on null/undefined/empty and never yields 'null' or 'undefined'", () => {
  assert.equal(pickText("A", "B"), "A");
  assert.equal(pickText(null, "B"), "B");
  assert.equal(pickText(undefined, "B"), "B");
  assert.equal(pickText("  ", "B"), "B");
  assert.equal(pickText(null, undefined), "");
});

test("displayTitle/displaySummary prefer English fields in en and native fields in zh", () => {
  const c = { title: "霓虹小巷雨夜追逐", titleEn: "Neon Alley Chase", summary: "中文摘要", summaryEn: "English summary" };
  assert.equal(displayTitle(c, "en"), "Neon Alley Chase");
  assert.equal(displayTitle(c, "zh"), "霓虹小巷雨夜追逐");
  assert.equal(displaySummary(c, "en"), "English summary");
  assert.equal(displaySummary(c, "zh"), "中文摘要");
});

test("displayTitle/displaySummary fall back to title/summary when titleEn/summaryEn are null or missing", () => {
  const nulls = { title: "只有中文标题", titleEn: null, summary: "只有中文摘要", summaryEn: null };
  assert.equal(displayTitle(nulls, "en"), "只有中文标题");
  assert.equal(displaySummary(nulls, "en"), "只有中文摘要");
  const missing = { title: "Old schema", summary: "old summary" };
  assert.equal(displayTitle(missing, "en"), "Old schema");
  assert.equal(displaySummary(missing, "en"), "old summary");
  // zh 缺 title 时也回落到 titleEn，而不是渲染成 "null"
  const zhFallback = { title: null, titleEn: "Only English", summary: null, summaryEn: "only en" };
  assert.equal(displayTitle(zhFallback, "zh"), "Only English");
  assert.equal(displaySummary(zhFallback, "zh"), "only en");
});

test("renderCaseEntry en uses titleEn/summaryEn from the fixture, zh keeps title/summary", () => {
  const data = loadFixture("cases.fixture.json");
  const neon = data.cases.find((c) => c.slug === "neon-alley-chase-25");
  const en = renderCaseEntry(neon, "en");
  assert.match(en, /^### Neon Alley Chase\n/);
  assert.match(en, /^> A motorcycle courier weaves/m);
  assert.doesNotMatch(en, /霓虹小巷/);
  const zh = renderCaseEntry(neon, "zh");
  assert.match(zh, /^### 霓虹小巷雨夜追逐\n/);
  assert.match(zh, /^> 深夜雨后的霓虹小巷/m);
  assert.doesNotMatch(zh, /Neon Alley Chase/);
});

test("renderCaseEntry never prints 'null' or 'undefined' for a case with all-null English fields", () => {
  const data = loadFixture("cases.fixture.json");
  const tokyo = data.cases.find((c) => c.slug === "tokyo-crosswalk-unversioned");
  for (const lang of ["en", "zh"]) {
    const md = renderCaseEntry(tokyo, lang);
    assert.doesNotMatch(md, /\bnull\b|\bundefined\b/);
    assert.match(md, /^### 东京雨夜十字路口穿行\n/);
  }
});

test("cleanHeadingTitle strips the exporter's 'Seedance：' / 'Prompt:' prefix and shortens >80-char prompt titles", () => {
  const ugly =
    "Seedance：Prompt: Create a 30-second, 1080p ultra-realistic personal home-video showing a…";
  const cleaned = cleanHeadingTitle(ugly);
  assert.doesNotMatch(cleaned, /^Seedance/);
  assert.doesNotMatch(cleaned, /^Prompt/);
  assert.ok(cleaned.length <= HEADING_MAX_LEN + 1, `too long: ${cleaned}`); // +1 for the ellipsis
  assert.match(cleaned, /…$/);
  assert.match(cleaned, /^Create a 30-second/);
  // 模型标签带版本号也算前缀；短标题只剥前缀不截断
  assert.equal(cleanHeadingTitle("Seedance 2.5：Made with seedance 2.5"), "Made with seedance 2.5");
  // 普通标题原样保留（去掉尾部英文标点，awesome-lint no-heading-punctuation）
  assert.equal(cleanHeadingTitle("Seedance 2.5 真实骑行 Vlog:运动相机+前摄+跟拍混剪 30 秒"), "Seedance 2.5 真实骑行 Vlog:运动相机+前摄+跟拍混剪 30 秒");
  assert.equal(cleanHeadingTitle("Rooftop Drone Reveal."), "Rooftop Drone Reveal");
  // 图片引用占位符不进标题
  const withRef = "Seedance：@[Image1](image-0442b9e3-3e54-49fa-95ab-1dd25868733f) HYPERSONIC SONÍDO — SPACE RACE ANTHEM opening sequence with chrome cars…";
  assert.doesNotMatch(cleanHeadingTitle(withRef), /\[Image1\]/);
});

test("truncateAtBoundary cuts at sentence, clause, or word boundaries within maxLen", () => {
  assert.deepEqual(truncateAtBoundary("Short title", 70), { text: "Short title", truncated: false });
  const sentence = truncateAtBoundary("First sentence ends here early. Second sentence keeps going on and on and on and on.", 70);
  assert.equal(sentence.text, "First sentence ends here early");
  assert.equal(sentence.truncated, true);
  const words = truncateAtBoundary("word ".repeat(30).trim(), 20);
  assert.ok(words.text.length <= 20);
  assert.doesNotMatch(words.text, /\s$/);
});

test("renderCaseEntry uses the cleaned heading for the fixture's legacy-label case", () => {
  const data = loadFixture("cases.fixture.json");
  const legacy = data.cases.find((c) => c.slug === "legacy-label-home-video-25");
  const en = renderCaseEntry(legacy, "en");
  assert.match(en, /^### Create a 30-second, 1080p ultra-realistic personal home-video showing[^\n]*…\n/);
  assert.match(en, /^> A 30-second DV-style home video/m); // summaryEn wins in en
  const zh = renderCaseEntry(legacy, "zh");
  assert.match(zh, /^> Prompt: Create a 30-second/m); // zh keeps summary
});

test("renderCaseEntry dedupes identical headings within one document via opts.usedHeadings", () => {
  const used = new Set();
  const a = renderCaseEntry({ ...fixtureCases[0], slug: "dup-1" }, "en", { usedHeadings: used });
  const b = renderCaseEntry({ ...fixtureCases[0], slug: "dup-2" }, "en", { usedHeadings: used });
  assert.match(a, /^### A\n/);
  assert.match(b, /^### A \(2\)\n/);
});

test("githubSlug matches GitHub heading anchors for ascii, emoji and CJK headings", () => {
  assert.equal(githubSlug("⭐ Featured"), "-featured"); // GitHub keeps the hyphen left by the emoji's space
  assert.equal(githubSlug("Copyright & Takedown Notice"), "copyright--takedown-notice");
  assert.equal(githubSlug("What is Seedance 2.5"), "what-is-seedance-25");
  assert.equal(githubSlug("不会有人认为这是真的吧？😄"), "不会有人认为这是真的吧");
  assert.equal(githubSlug("Neon Alley Chase (2)"), "neon-alley-chase-2");
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

test("partitionAllPrompts splits by version bucket (heat-sorted) and exposes the overall top N", () => {
  const cases = [...fixtureCases, { ...fixtureCases[0], slug: "u", models: ["Seedance"], heatScore: 80 }];
  const { v25, v20, unversioned, top, all } = partitionAllPrompts(cases, 3);
  assert.deepEqual(v25.map((c) => c.slug), ["b", "a"]); // heat 95, 90
  assert.deepEqual(v20.map((c) => c.slug), ["c", "d"]); // heat 70, 60
  assert.deepEqual(unversioned.map((c) => c.slug), ["u"]);
  assert.deepEqual(top.map((c) => c.slug), ["b", "a", "u"]); // overall top 3 across versions
  assert.equal(all.length, 5);
  assert.equal(TOP_INLINE_COUNT, 30);
});

test("renderTopTable ranks cases, links title to goodcase and prompt to the gallery anchor, shows retest cells", () => {
  const data = loadFixture("cases.fixture.json");
  const cases = sortByHeat(data.cases).slice(0, 3);
  const { header, rows, markdown } = renderTopTable(cases, "en", {
    startRank: 1,
    promptLinkFor: (c) => `./docs/gallery-seedance-2-5.md#${githubSlug(displayTitle(c, "en"))}`,
  });
  assert.equal(header.length, 2);
  assert.equal(rows.length, 3);
  assert.match(rows[0], /^\| 1\s+\| \[Neon Alley Chase\]\(https:\/\/goodcase\.ai\/cases\/neon-alley-chase-25\)/);
  assert.match(rows[0], /\| 2\.5\s+\| 98\s+\|/);
  assert.match(rows[0], /\[prompt\]\(\.\/docs\/gallery-seedance-2-5\.md#neon-alley-chase\)/);
  assert.match(rows[0], /\[source\]\(https:\/\/x\.com\/wenjie_frames/);
  assert.doesNotMatch(markdown, /\bnull\b|\bundefined\b/);
  const zh = renderTopTable(cases, "zh", { startRank: 7 });
  assert.match(zh.rows[0], /^\| 7\s+\|/);
  assert.match(zh.header[0], /\| 案例\s+\| 版本\s+\| 热度\s+\| 复测\s+\| 链接\s+\|/);
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
  assert.ok(single.markdown.startsWith("# Seedance 2.0 — 全量案例\n"));
  assert.equal(single.fileName, "gallery-seedance-2-0.zh.md");
  assert.equal(galleryPartFileName("zh", 1, 1), "gallery-seedance-2-0.zh.md");

  // 预算极小：每页一条，互相带导航链接（GitHub 超 512KB 拒渲染，分片是硬要求）
  const parts = renderGalleryParts(two, "en", 1);
  assert.equal(parts.length, 2);
  assert.equal(parts[0].caseCount, 1);
  assert.ok(parts[0].markdown.includes("[Part 2](./gallery-seedance-2-0-part-2.md)"));
  assert.ok(parts[1].markdown.includes("[Part 1](./gallery-seedance-2-0-part-1.md)"));
  assert.ok(parts[0].markdown.includes("(Part 1/2)"));
  assert.equal(galleryPartFileName("en", 2, 2), "gallery-seedance-2-0-part-2.md");
});

test("renderGalleryParts names files per version bucket and reports heading anchors", () => {
  assert.equal(galleryFileBase("2.5"), "gallery-seedance-2-5");
  assert.equal(galleryFileBase("unspecified"), "gallery-seedance-unversioned");
  const data = loadFixture("cases.fixture.json");
  const v25 = data.cases.filter(isSeedance25);
  const [part] = renderGalleryParts(v25, "en", { bucket: "2.5" });
  assert.equal(part.fileName, "gallery-seedance-2-5.md");
  assert.ok(part.markdown.startsWith("# Seedance 2.5 — Full Gallery\n"));
  assert.ok(part.markdown.includes("[Back to README](../README.md)"));
  const neon = part.entries.find((e) => e.slug === "neon-alley-chase-25");
  assert.deepEqual(neon, { slug: "neon-alley-chase-25", heading: "Neon Alley Chase", anchor: "neon-alley-chase" });
  const unversioned = data.cases.filter(isSeedanceUnversioned);
  const [u] = renderGalleryParts(unversioned, "zh", { bucket: "unspecified" });
  assert.equal(u.fileName, "gallery-seedance-unversioned.zh.md");
  assert.ok(u.markdown.startsWith("# Seedance（未标版本） — 全量案例\n"));
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

test("renderCaseEntry renders 'score n/a' / '无评分' for a null finalScore, with no dangling separator", () => {
  const mdEn = renderCaseEntry(caseWithDegradedRetest, "en");
  assert.match(mdEn, /\*\*Retest:\*\* MiniMax H3 768p · 2026-09-01 · ⚠️ degraded \(score n\/a\)$/m);
  assert.doesNotMatch(mdEn, /\[output\]/);
  assert.doesNotMatch(mdEn, / runs/);
  assert.doesNotMatch(mdEn, /· *$/m);

  const mdZh = renderCaseEntry(caseWithDegradedRetest, "zh");
  assert.match(mdZh, /\*\*复测：\*\* MiniMax H3 768p · 2026-09-01 · ⚠️ 降级 \(无评分\)$/m);
  assert.doesNotMatch(mdZh, /\[产物\]/);
  assert.doesNotMatch(mdZh, /共 \d+ 次/);
  assert.doesNotMatch(mdZh, /· *$/m);
});

test("formatRetestRun never ends with a separator, whatever combination of nulls it gets", () => {
  const combos = [
    { model: "M", verdict: "reproduced", testedAt: "2026-09-05T10:00:00Z", artifactUrl: null, finalScore: null },
    { model: "M", verdict: "reproduced", testedAt: null, artifactUrl: null, finalScore: null },
    { model: "M", verdict: "weird-unknown", testedAt: "2026-09-05", artifactUrl: "https://a/b.mp4", finalScore: 0 },
  ];
  for (const run of combos) {
    for (const lang of ["en", "zh"]) {
      const line = formatRetestRun(run, lang);
      assert.doesNotMatch(line, /·\s*$/);
      assert.doesNotMatch(line, /\bnull\b|\bundefined\b/);
    }
  }
  assert.match(formatRetestRun(combos[0], "en"), /✅ reproduced \(score n\/a\)$/);
  assert.match(formatRetestRun(combos[2], "en"), /➖ inconclusive \(score 0\) · \[output\]\(https:\/\/a\/b\.mp4\)$/);
});

test("renderRetestBlock lists every run with dates when a case was retested twice on the same model", () => {
  const data = loadFixture("cases.fixture.json");
  const legacy = data.cases.find((c) => c.slug === "legacy-label-home-video-25");
  const en = renderRetestBlock(legacy, "en");
  assert.equal(en[0], "**Retests:** 2 runs");
  assert.equal(en[1], "");
  assert.equal(en[2], "- MiniMax H3 Max 768p · 2026-09-07 · ✅ reproduced (score 80.5) · [output](https://goodcase.ai/retests/legacy-label-home-video-25/h3max-02.mp4)");
  assert.equal(en[3], "- MiniMax H3 Max 768p · 2026-08-11 · ⚠️ degraded (score n/a) · [output](https://goodcase.ai/retests/legacy-label-home-video-25/h3max-01.mp4)");
  const zh = renderRetestBlock(legacy, "zh");
  assert.equal(zh[0], "**复测：** 共 2 次");
  assert.match(zh[3], /^- MiniMax H3 Max 768p · 2026-08-11 · ⚠️ 降级 \(无评分\)/);
  // 整条 entry 里也不能有悬空分隔符
  const md = renderCaseEntry(legacy, "en");
  assert.doesNotMatch(md, /· *$/m);
  assert.match(md, /\*\*Retests:\*\* 2 runs\n\n- MiniMax/);
});

test("renderRetestBlock notes when retests[] holds fewer runs than retestSummary.runs", () => {
  const c = {
    ...fixtureCases[0],
    retests: [
      { model: "A", verdict: "reproduced", testedAt: "2026-09-02", artifactUrl: null, finalScore: 70 },
      { model: "A", verdict: "failed", testedAt: "2026-09-01", artifactUrl: null, finalScore: null },
    ],
    retestSummary: { runs: 7, models: ["A"], latest: { model: "A", verdict: "reproduced", testedAt: "2026-09-02", artifactUrl: null, finalScore: 70 } },
  };
  assert.equal(renderRetestBlock(c, "en")[0], "**Retests:** 7 runs (latest 2 shown)");
  assert.equal(renderRetestBlock(c, "zh")[0], "**复测：** 共 7 次（仅列最近 2 次）");
  // 没有 retestSummary 的老数据：空数组
  assert.deepEqual(renderRetestBlock(fixtureCases[0], "en"), []);
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
  assert.match(renderStatsTable(zeroStats, "en"), /\| Stability score \(measured\)\s+\| 0 cases \/ avg -\s+\|/);
  assert.match(renderStatsTable(zeroStats, "zh"), /\| 稳定度分（已测）\s+\| 0 条 \/ 均分 -\s+\|/);

  const nonZeroStats = { ...zeroStats, stabilityCases: 2, stabilityAvg: 82.5 };
  assert.match(
    renderStatsTable(nonZeroStats, "en"),
    /\| Stability score \(measured\)\s+\| 2 cases \/ avg 82\.5\s+\|/
  );
  assert.match(
    renderStatsTable(nonZeroStats, "zh"),
    /\| 稳定度分（已测）\s+\| 2 条 \/ 均分 82\.5\s+\|/
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
  assert.match(en, /\| Re-run on other models\s+\| 0 cases \/ 0 runs\s+\|/);
  const zh = renderStatsTable(zeroStats, "zh");
  assert.match(zh, /\| 跨模型复测\s+\| 0 条 \/ 0 次\s+\|/);

  const nonZeroStats = { ...zeroStats, retestCases: 37, retestRuns: 52 };
  assert.match(renderStatsTable(nonZeroStats, "en"), /\| Re-run on other models\s+\| 37 cases \/ 52 runs\s+\|/);
  assert.match(renderStatsTable(nonZeroStats, "zh"), /\| 跨模型复测\s+\| 37 条 \/ 52 次\s+\|/);
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
  assert.match(md, /\| Model\s+\| Runs\s+\| Reproduction rate\s+\|/);
  assert.match(md, /\| MiniMax H3 768p\s+\| 2\s+\| 50%\s+\|/);
  assert.match(md, /\| Kling 2\.1\s+\| 1\s+\| 100%\s+\|/);
  assert.match(md, /\| MiniMax H3 Max 768p\s+\| 2\s+\| 50%\s+\|/);

  const mdZh = renderCrossModelSection(fixtureData.cases, fixtureData.meta, "zh");
  assert.match(mdZh, /^## 🔁 跨模型复测/);
  assert.match(mdZh, /\| 模型\s+\| 次数\s+\| 复现率\s+\|/);
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
