import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { renderCaseEntry, renderPromptBlock, renderGalleryParts, sortByHeat, classifySeedance, collapseSeries, renderStatsTable, PROMPT_COLLAPSE_LINES, computeStats } from "./render.mjs";
import {
  buildStatsSnapshot,
  renderBadges,
  renderHeroSvg,
  renderRetestSpotlight,
  pickRetestShowcase,
  SPONSOR_EMAIL,
  renderGalleryIndex,
} from "./sections.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.resolve(__dirname, "../../data/fixtures");
const casesData = JSON.parse(readFileSync(path.join(FIXTURE_ROOT, "cases.fixture.json"), "utf8"));
const cases = casesData.cases;
const casesBySlug = new Map(cases.map((c) => [c.slug, c]));

// 分类/模板的小型内联 fixture（style-library.fixture.json 没有 categories）。
const categories = [
  { id: "foundation", title: { en: "Structural foundations", zh: "结构基础" }, description: { en: "Skeletons.", zh: "骨架。" } },
  { id: "realism", title: { en: "Realism and UGC", zh: "真实感与 UGC" }, description: { en: "Believability.", zh: "真实感。" } },
];
const templates = [
  {
    id: "timeline",
    category: "foundation",
    title: { en: "Timeline script", zh: "时间轴脚本" },
    description: { en: "Timed beats.", zh: "分段。" },
    useWhen: { en: "Clips over 8s.", zh: "超过 8 秒。" },
    exampleCases: [cases[0].slug, cases[1].slug],
    exampleCaseUrls: [cases[0].goodcaseUrl, cases[1].goodcaseUrl],
  },
  {
    id: "ugc",
    category: "realism",
    title: { en: "Handheld UGC", zh: "手持 UGC" },
    description: { en: "Camera flaws.", zh: "相机瑕疵。" },
    useWhen: { en: "Talk-to-camera.", zh: "口播。" },
    exampleCases: [cases[2].slug],
    exampleCaseUrls: [cases[2].goodcaseUrl],
  },
];

const site = { fetchedAt: "2026-09-13", totalCases: 1059, videoCases: 567, creators: 334, videoSkills: { base: 5, creatorVariants: 19, url: "https://goodcase.ai/skills?category=video" } };
const stats = computeStats(casesData);
const snapshot = buildStatsSnapshot(stats, templates, categories, site);

function galleryContext(lang) {
  const sorted = sortByHeat(cases);
  const bucketCases = {
    "2.5": sorted.filter((c) => classifySeedance(c) === "2.5"),
    "2.0": sorted.filter((c) => classifySeedance(c) === "2.0"),
  };
  const parts = {};
  const promptLinks = new Map();
  for (const bucket of ["2.5", "2.0"]) {
    parts[bucket] = bucketCases[bucket].length ? renderGalleryParts(bucketCases[bucket], lang, { bucket, budget: 6000 }) : [];
    for (const p of parts[bucket]) for (const e of p.entries) promptLinks.set(e.slug, `./docs/${p.fileName}#${e.anchor}`);
  }
  return { parts, bucketCases, promptLinks };
}

test("renderPromptBlock keeps short prompts as a plain fence and collapses long ones into <details>", () => {
  const short = renderPromptBlock("a\nb\nc", "en");
  assert.equal(short[0], "```");
  assert.equal(short.at(-1), "```");
  const longPrompt = Array.from({ length: PROMPT_COLLAPSE_LINES + 1 }, (_, i) => `line ${i}`).join("\n");
  const long = renderPromptBlock(longPrompt, "en");
  assert.equal(long[0], "<details>");
  assert.match(long[1], /<summary><b>Full prompt \(6 lines, click to expand\)<\/b><\/summary>/);
  assert.equal(long[2], ""); // details 后空行，GitHub 才把围栏当 Markdown
  assert.equal(long.at(-1), "</details>");
  assert.equal(long.at(-2), "");
  const zh = renderPromptBlock(longPrompt, "zh");
  assert.match(zh[1], /完整 prompt（6 行，点开展开）/);
});

test("renderCaseEntry puts the poster before the prompt and collapses a long prompt", () => {
  const c = { ...cases[0], promptFull: Array.from({ length: 12 }, (_, i) => `beat ${i}`).join("\n") };
  const md = renderCaseEntry(c, "en");
  const imgAt = md.indexOf("<img src=");
  const promptAt = md.indexOf("<details>");
  const authorAt = md.indexOf("**Author:**");
  assert.ok(imgAt > 0 && authorAt > imgAt && promptAt > authorAt, "order: image → author line → collapsed prompt");
  assert.match(md, /Full prompt \(12 lines, click to expand\)/);
  assert.ok(md.trim().endsWith("→](" + c.goodcaseUrl + ")**"), "ends with the goodcase link");
});

test("buildStatsSnapshot exposes the numbers the badges and hero read", () => {
  assert.equal(snapshot.cases, cases.length);
  assert.equal(snapshot.templates, 2);
  assert.equal(snapshot.templateCategories, 2);
  assert.equal(snapshot.retestRuns, casesData.meta.retests.totalRuns);
  assert.equal(snapshot.lastUpdated, "2026-08-20");
  // 站点全量 + AI 视频 Skill 数（站上 5+19，加本仓库 1 个）。
  assert.equal(snapshot.siteTotalCases, 1059);
  assert.equal(snapshot.videoSkillsOnSite, 24);
  assert.equal(snapshot.skills, 25);
  assert.equal(buildStatsSnapshot(stats, templates, categories, null).skills, 1);
  // README 的 Skill 网格有自己的总数（data/skills.json），传进来时以它为准。
  assert.equal(buildStatsSnapshot(stats, templates, categories, site, 26).skills, 26);
});

test("renderBadges uses shields dynamic-json badges that read data/stats.json from main", () => {
  const en = renderBadges("en");
  assert.match(en, /img\.shields\.io\/badge\/dynamic\/json\?url=https%3A%2F%2Fraw\.githubusercontent\.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats\.json&query=%24\.cases/);
  assert.match(en, /query=%24\.retestRuns/);
  assert.match(en, /query=%24\.templates/);
  assert.match(en, /npm\/v\/seedance-prompt-library/);
  assert.match(renderBadges("zh"), /label=%E6%A1%88%E4%BE%8B/); // "案例"
  // 徽章的页内锚点由调用方按当前语言传入，不再硬编码英文锚点（中/日文 README 曾因此全部断链）。
  const zh = renderBadges("zh", { all: "#-全部案例", retests: "#-跨模型复测", templates: "#-分类提示语模板", skills: "#-skill" });
  assert.match(zh, /\]\(#-分类提示语模板\)/);
  assert.match(zh, /\]\(#-skill\)/);
  assert.doesNotMatch(zh, /#-prompt-templates|#-all-prompts|#install/);
  assert.doesNotMatch(renderBadges("ja"), /\]\(#/); // 没传锚点就退回站点链接，绝不猜锚点
});

test("renderHeroSvg is a self-contained SVG with the four numbers and no external resources", () => {
  const svg = renderHeroSvg(snapshot);
  assert.ok(svg.startsWith("<svg xmlns=\"http://www.w3.org/2000/svg\""));
  assert.ok(svg.trim().endsWith("</svg>"));
  assert.match(svg, new RegExp(`>${snapshot.cases}<`));
  assert.match(svg, new RegExp(`>${snapshot.retestRuns}<`));
  assert.match(svg, />VERIFIED CASES</);
  assert.match(svg, />AI VIDEO SKILLS</);
  assert.match(svg, />25</);
  assert.doesNotMatch(svg, /<image|<style|http:\/\/[^w]|@import/);
  assert.match(svg, /#E8541E/); // 单一橙色强调
});

test("pickRetestShowcase returns reproduced cases first and includes one non-reproduced when available", () => {
  const picked = pickRetestShowcase(cases, 3);
  assert.ok(picked.length >= 1 && picked.length <= 3);
  for (const c of picked) assert.ok(c.retestSummary && c.retestSummary.latest.artifactUrl);
  const verdicts = picked.map((c) => c.retestSummary.latest.verdict);
  if (cases.some((c) => c.retestSummary && c.retestSummary.latest.verdict !== "reproduced" && c.retestSummary.latest.artifactUrl)) {
    assert.ok(verdicts.some((v) => v !== "reproduced"), "one non-reproduced example is shown");
  }
});

test("renderRetestSpotlight renders the claim, per-model table, verdict counts, showcase table, screenshot and sponsor link", () => {
  const md = renderRetestSpotlight(cases, casesData.meta, "en");
  assert.match(md, /^## 🔁 Cross-model retests/);
  assert.match(md, /first public prompt library/);
  assert.match(md, /\| Model\s+\| Runs\s+\| Reproduction rate\s+\|/);
  assert.match(md, /Verdicts across all runs: ✅ \d+ reproduced · ⚠️ \d+ degraded · ❌ \d+ failed/);
  assert.match(md, /\| Case\s+\| Original \(Seedance\)\s+\| Retest \(second model\)\s+\| Verdict\s+\|/);
  assert.match(md, new RegExp(`\\[${SPONSOR_EMAIL}\\]\\(mailto:${SPONSOR_EMAIL}\\)`));
  assert.match(md, /▶ output video/);
  assert.match(md, /assets\/goodcase-retest-evidence\.png/);
  assert.match(md, /Sponsor a batch →\]\(https:\/\/github\.com\/LearnPrompt\/awesome-seedance\/issues\/new/);
  assert.doesNotMatch(md, /US\$/); // 没有 meta.retestSpend 就不编数字
  assert.doesNotMatch(md, /\bnull\b|\bundefined\b/);
  const withSpend = renderRetestSpotlight(cases, { ...casesData.meta, retestSpend: { usd: 120, runs: 5, approx: "about" } }, "en");
  assert.match(withSpend, /about US\$120 across 5 runs/);
  // opts.spend（data/retest-spend.json）优先于 meta；默认 over + 牌价说明。
  const listPrice = renderRetestSpotlight(cases, casesData.meta, "en", { spend: { usd: 300, approx: "over", basis: "list-price" } });
  assert.match(listPrice, /over US\$300 across 5 runs so far, at list price with no discounts/);
  assert.match(renderRetestSpotlight(cases, casesData.meta, "zh", { spend: { usd: 300, approx: "over", basis: "list-price" } }), /已超过 300 美元，按公开牌价算/);
  assert.match(renderRetestSpotlight(cases, casesData.meta, "ja", { spend: { usd: 300, approx: "over", basis: "list-price" } }), /US\$300 超（定価ベース/);
  assert.match(renderRetestSpotlight(cases, casesData.meta, "zh"), /^## 🔁 跨模型复测/);
});

test("renderRetestSpotlight returns null without meta.retests (old data)", () => {
  assert.equal(renderRetestSpotlight(cases, {}, "en"), null);
  assert.equal(renderRetestSpotlight(cases, { retests: { totalRuns: 0 } }, "en"), null);
});

test("renderGalleryIndex lists every page with ranges, the side links, and ten recommended entries linking to gallery anchors", () => {
  const ctx = galleryContext("en");
  const md = renderGalleryIndex({ ...ctx, cases }, "en");
  assert.match(md, /^# Awesome Seedance — Gallery Index/);
  assert.match(md, /← \[Back to README\]\(\.\.\/README\.md\)/);
  const partCount = Object.values(ctx.parts).reduce((n, p) => n + p.length, 0);
  assert.equal(md.split("\n").filter((l) => /^- \[Seedance/.test(l)).length, partCount);
  const rec = md.split("## Recommended entries")[1];
  const recLines = rec.split("\n").filter((l) => l.startsWith("- ["));
  assert.equal(recLines.length, Math.min(10, cases.length));
  for (const l of recLines) assert.match(l, /\]\(\.\/gallery-[^)]+#[^)]+\) - /);
  assert.match(renderGalleryIndex({ ...galleryContext("zh"), cases }, "zh"), /^# Awesome Seedance — 画廊总览/);
  const zhIndex = renderGalleryIndex({ ...galleryContext("zh"), cases, templatesAnchor: "#-分类提示语模板", templateIndexHref: "./templates/zh/README.md" }, "zh");
  assert.match(zhIndex, /\[分类提示语模板\]\(\.\.\/README_zh\.md#-分类提示语模板\)/);
  assert.match(zhIndex, /\(\.\/templates\/zh\/README\.md\)/);
  assert.doesNotMatch(zhIndex, /#-prompt-templates/);
});

test("renderGalleryParts reports contiguous case ranges and links to the gallery index", () => {
  const list = sortByHeat(cases);
  const parts = renderGalleryParts(list, "en", { bucket: "2.5", budget: 6000 });
  assert.ok(parts.length > 1, "fixture splits into several parts under a tiny budget");
  let expectedStart = 1;
  for (const p of parts) {
    assert.equal(p.rangeStart, expectedStart);
    assert.equal(p.rangeEnd, expectedStart + p.caseCount - 1);
    expectedStart = p.rangeEnd + 1;
    assert.match(p.markdown, /\[Gallery index\]\(\.\/gallery\.md\)/);
    assert.match(p.markdown, new RegExp(`This page: cases ${p.rangeStart}–${p.rangeEnd} of ${list.length}\\.`));
  }
  assert.equal(parts.at(-1).rangeEnd, list.length);
});

test("renderRetestSpotlight embeds a retest poster frame (linked to the goodcase page) when retestPosterFor returns one", () => {
  const withPoster = renderRetestSpotlight(cases, casesData.meta, "en", { retestPosterFor: (c) => `./assets/retests/${c.slug}.jpg` });
  const first = pickRetestShowcase(cases, 3)[0];
  assert.match(withPoster, new RegExp(`\\[<img src="\\./assets/retests/${first.slug}\\.jpg" width="160" alt="[^"]+">\\]\\(${first.goodcaseUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)<br>`));
  const without = renderRetestSpotlight(cases, casesData.meta, "en");
  assert.doesNotMatch(without, /assets\/retests\//);
});

test("collapseSeries folds same-creator prompt variants (same opening, ≥0.2 trigram overlap) to the earliest post and leaves unrelated cases alone", () => {
  const base = "Create a 30-second, 1080p ultra-realistic personal home-video showing an ordinary summer evening in the life of a young Korean woman. No reference image. MAIN SUBJECT Young Korean woman in her early 20s, naturally pretty, realistic skin texture, minimal makeup, long black hair loosely tied. SETTING A quiet older Seoul residential neighborhood during a warm summer afternoon.";
  const variant = base.replace("summer evening", "summer afternoon") + " EXTRA She walks to the corner shop, buys a drink, waves at a neighbour and heads home as the light fades.";
  const original = { slug: "orig", creator: "@a", sourcePublishedAt: "2026-08-27", heatScore: 99, promptFull: base };
  const repost = { slug: "repost", creator: "@a", sourcePublishedAt: "2026-09-05", heatScore: 99, promptFull: `Prompt: ${variant}` };
  // 同一作者的固定开场白（前 70 字相同）+ 完全不同的正文：不能被判成同一系列。
  const sameOpeningOnly = {
    slug: "other",
    creator: "@a",
    sourcePublishedAt: "2026-07-31",
    heatScore: 99,
    promptFull:
      base.slice(0, 70) +
      " CAMERA handheld mini DV camcorder footage shot by the main character herself, slight hand shake, occasional focus hunting, imperfect framing, natural zoom adjustments, soft tape-like image quality, subtle grain, bright kitchen morning light with real auto-exposure fluctuations. SCENE a quiet espresso ritual: grinding beans into the hopper, tamping the portafilter, locking it in, the machine hissing, crema pouring into a warm ceramic mug, steaming milk in a steel jug, pouring a simple heart, wiping the counter with a dishcloth, tapping the spoon on the saucer, first sip by the window. SOUND ASMR list: grinder burr, tamp thud, lever click, steam wand hiss, cup clink, spoon tap, water tap, quiet breathing, distant birds. STYLE no commercial look, no AI look, like a real home camcorder morning.",
  };
  const otherCreator = { slug: "copycat", creator: "@b", sourcePublishedAt: "2026-09-01", heatScore: 50, promptFull: base };
  const { kept, collapsed } = collapseSeries([original, repost, sameOpeningOnly, otherCreator]);
  assert.deepEqual(collapsed, [{ slug: "repost", keptSlug: "orig" }]);
  assert.deepEqual(kept.map((c) => c.slug), ["orig", "other", "copycat"]);
  assert.deepEqual(collapseSeries([]).kept, []);
});

test("renderStatsTable appends goodcase.ai site-wide rows when site is given, and none otherwise", () => {
  const withSite = renderStatsTable(stats, "en", site);
  assert.match(withSite, /\| Seedance cases in this repo\s+\| 10\s+\|/);
  assert.match(withSite, /\| goodcase\.ai, all categories\s+\| 1059 cases \/ 334 creators\s+\|/);
  assert.match(withSite, /\| goodcase\.ai, AI video\s+\| 567 cases\s+\|/);
  assert.doesNotMatch(renderStatsTable(stats, "en"), /goodcase\.ai, all categories/);
  assert.match(renderStatsTable(stats, "zh", site), /goodcase\.ai 全站（含非 Seedance）\s+\| 1059 条 \/ 334 位创作者/);
  assert.match(renderStatsTable(stats, "ja", site), /goodcase\.ai 全カテゴリ/);
});
