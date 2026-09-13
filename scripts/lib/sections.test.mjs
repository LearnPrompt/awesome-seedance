import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { renderCaseEntry, renderPromptBlock, renderGalleryParts, sortByHeat, classifySeedance, PROMPT_COLLAPSE_LINES, computeStats } from "./render.mjs";
import {
  buildStatsSnapshot,
  renderBadges,
  renderHeroSvg,
  renderQuickLinks,
  renderRetestSpotlight,
  pickRetestShowcase,
  buildCategoryGroups,
  renderCategoryOverview,
  renderTemplateTables,
  renderGalleryIndex,
  categoryHeading,
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

const stats = computeStats(casesData);
const snapshot = buildStatsSnapshot(stats, templates, categories);

function galleryContext(lang) {
  const sorted = sortByHeat(cases);
  const bucketCases = {
    "2.5": sorted.filter((c) => classifySeedance(c) === "2.5"),
    "2.0": sorted.filter((c) => classifySeedance(c) === "2.0"),
    unspecified: sorted.filter((c) => classifySeedance(c) === "unspecified"),
  };
  const parts = {};
  const promptLinks = new Map();
  for (const bucket of ["2.5", "2.0", "unspecified"]) {
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
});

test("renderBadges uses shields dynamic-json badges that read data/stats.json from main", () => {
  const en = renderBadges("en");
  assert.match(en, /img\.shields\.io\/badge\/dynamic\/json\?url=https%3A%2F%2Fraw\.githubusercontent\.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats\.json&query=%24\.cases/);
  assert.match(en, /query=%24\.retestRuns/);
  assert.match(en, /query=%24\.templates/);
  assert.match(en, /npm\/v\/seedance-prompt-library/);
  assert.match(renderBadges("zh"), /label=%E6%A1%88%E4%BE%8B/); // "案例"
});

test("renderHeroSvg is a self-contained SVG with the four numbers and no external resources", () => {
  const svg = renderHeroSvg(snapshot);
  assert.ok(svg.startsWith("<svg xmlns=\"http://www.w3.org/2000/svg\""));
  assert.ok(svg.trim().endsWith("</svg>"));
  assert.match(svg, new RegExp(`>${snapshot.cases}<`));
  assert.match(svg, new RegExp(`>${snapshot.retestRuns}<`));
  assert.match(svg, />VERIFIED CASES</);
  assert.match(svg, />AGENT SKILL</);
  assert.doesNotMatch(svg, /<image|<style|http:\/\/[^w]|@import/);
  assert.match(svg, /#E8541E/); // 单一橙色强调
});

test("renderQuickLinks lists every gallery page with its case range, plus templates, skill, live site, contributing, license", () => {
  const ctx = galleryContext("en");
  const md = renderQuickLinks({ ...ctx, templates, categories, stats }, "en");
  assert.match(md, /^## Quick Links/);
  assert.match(md, /\[Gallery index\]\(\.\/docs\/gallery\.md\)/);
  const partCount = Object.values(ctx.parts).reduce((n, p) => n + p.length, 0);
  const pageLines = md.split("\n").filter((l) => /^- \[Seedance/.test(l));
  assert.equal(pageLines.length, partCount);
  assert.match(md, /\[Prompt templates\]\(#-prompt-templates\) - 2 reusable structures in 2 categories\./);
  assert.match(md, /npx seedance-prompt-library install/);
  assert.match(md, /\[Live site on goodcase\.ai\]/);
  assert.match(md, /\[License\]\(#license\)/);
  for (const line of md.split("\n").filter((l) => l.startsWith("- "))) {
    assert.match(line, /^- \[/, `list items start with a link (awesome-lint): ${line}`);
  }
  assert.match(renderQuickLinks({ ...galleryContext("zh"), templates, categories, stats }, "zh"), /^## 快速入口/);
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
  assert.match(md, /\| Case\s+\| Original \(Seedance\)\s+\| Retest\s+\| Verdict\s+\|/);
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

test("buildCategoryGroups resolves example slugs to cases, dedupes them, and picks the hottest as cover", () => {
  const groups = buildCategoryGroups(templates, categories, casesBySlug);
  assert.equal(groups.length, 2);
  assert.equal(groups[0].templates.length, 1);
  assert.equal(groups[0].cases.length, 2);
  assert.equal(groups[0].cover.slug, sortByHeat(groups[0].cases)[0].slug);
  assert.equal(groups[1].cases.length, 1);
});

test("renderCategoryOverview renders an HTML grid whose 'View templates' anchors match the template section headings", () => {
  const groups = buildCategoryGroups(templates, categories, casesBySlug);
  const md = renderCategoryOverview(groups, "en");
  assert.match(md, /^## 🗂️ Category Overview/);
  assert.equal((md.match(/<td /g) || []).length, 2);
  assert.match(md, /2 verified cases/);
  assert.match(md, /<img src="[^"]+" width="260"/);
  const tables = renderTemplateTables(groups, "en");
  for (const g of groups) {
    const heading = categoryHeading(g, "en").replace(/^###\s+/, "");
    assert.ok(tables.includes(`### ${heading}`), `template section has heading ${heading}`);
  }
  assert.match(md, /href="#-structural-foundations-1-template"/);
  assert.match(renderCategoryOverview(groups, "zh"), /^## 🗂️ 分类总览/);
});

test("renderTemplateTables renders one table per category with a row per template linking into the Skill reference", () => {
  const groups = buildCategoryGroups(templates, categories, casesBySlug);
  const md = renderTemplateTables(groups, "en");
  assert.match(md, /\[Skill reference\]\(\.\/agents\/skills\/seedance-prompt-library\/references\/style-library\.md\)/);
  assert.match(md, /\| Template\s+\| Use when\s+\| Examples\s+\|/);
  assert.match(md, /\*\*\[Timeline script\]\(\.\/agents\/skills\/seedance-prompt-library\/references\/style-library\.md#timeline-script\)\*\*/);
  assert.match(md, /\[#1\]\(https:\/\/goodcase\.ai\/cases\/[^)]+\) \[#2\]/);
  assert.doesNotMatch(md, /\n{3,}/);
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
