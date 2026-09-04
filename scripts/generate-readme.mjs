#!/usr/bin/env node
// Generates README.md, README_zh.md, and docs/gallery-seedance-2-0.md from
// data/cases.json + data/style-library.json. Run: node scripts/generate-readme.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  computeStats,
  getFeatured,
  renderCaseEntry,
  renderTemplateCard,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  galleryPartFileName,
  README_SIZE_BUDGET_BYTES,
  V20_INLINE_LIMIT,
} from "./lib/render.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadJson(relPath) {
  return JSON.parse(readFileSync(path.join(ROOT, relPath), "utf8"));
}

const casesData = loadJson("data/cases.json");
const styleData = loadJson("data/style-library.json");
const cases = casesData.cases || [];
const templates = styleData.templates || [];

const stats = computeStats(casesData);
const featured = getFeatured(cases);
const { v25, v20Top, v20Rest, v20All } = partitionAllPrompts(cases, V20_INLINE_LIMIT);

const BADGES = [
  "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)",
  "[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://goodcase.ai/submit)",
  "[![License: MIT (code)](https://img.shields.io/badge/code%20license-MIT-blue.svg)](./LICENSE)",
].join(" ");

const COPY = {
  en: {
    langSwitch: "**[English](./README.md)** | [中文](./README_zh.md)",
    title: "# Awesome Seedance",
    tagline:
      "A curated, verified prompt library for Seedance 2.5 / 2.0 video generation — every case checked against its original source.",
    // goodcase.ai 反链，位置固定在 badges 之后、Install 之前。原是 PR #1 手改进 README 的一行，
    // 不搬进生成器模板的话下次 npm run generate 会把它覆盖掉。
    backlink:
      "More verified AI cases with full prompts → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    installHeading: "## Install",
    installBody: [
      "```bash",
      "npx seedance-prompt-library install",
      "```",
      "",
      "Installs the `seedance-prompt-library` Agent Skill into Claude Code and Codex, so your agent can pull structured prompt templates and write Seedance prompts directly in your editor.",
    ].join("\n"),
    pillarsHeading: "## Why this list",
    pillars: [
      `**Human-verified against the source.** Every prompt here was checked against the creator's original post. Prompts reverse-engineered from the output video only — no source, no submission — are rejected outright, per [goodcase.ai's collection standards](https://goodcase.ai/standards) (in force since 2026-08-05).`,
      `**Full provenance on every entry.** Author, original post link, publish date, and a heat score — a relative percentile among published cases on the same platform. If it didn't rank, it isn't here.`,
      `**Ships as an installable Agent Skill.** \`npx seedance-prompt-library install\` drops a template library straight into Claude Code / Codex so your agent writes Seedance prompts from proven structures, not guesses.`,
    ],
    browseHeading: "## Browse on goodcase.ai",
    browseBody:
      "This README is an index. The full gallery, search, heat-score leaderboard, and retest history live at [goodcase.ai/cases?filter=video](https://goodcase.ai/cases?filter=video).",
    whatHeading: "## What is Seedance 2.5",
    whatBody:
      "Seedance 2.5 is ByteDance's video generation model in Early Access, generating from four input modalities (text, image, video, and audio references), with native lip-sync and voice-driven dialogue. Seedance 2.0 is the prior generation — text/image-to-video without native audio-sync — kept here for reference and comparison.",
    statsHeading: "## Statistics",
    featuredHeading: "## ⭐ Featured",
    featuredIntro: "Top 6 prompts by heat score, across both Seedance versions.",
    templatesHeading: "## 🧩 Prompt Templates",
    templatesIntro:
      "Reusable prompt structures distilled from the highest-performing cases. Each template ships in the installable Skill too.",
    allHeading: "## 🎬 All Prompts",
    allV25Heading: "### Seedance 2.5",
    allV20Heading: "### Seedance 2.0 (Top by Heat)",
    allV20Note: (n, total) =>
      `Showing the top ${n} of ${total} Seedance 2.0(+) cases by heat score. → [See the full Seedance 2.0 gallery](./docs/gallery-seedance-2-0-part-1.md)`,
    contributeHeading: "## How to Contribute",
    contributeBody:
      "This README doesn't take pull requests for new prompts — submissions go through goodcase.ai's review pipeline so provenance and heat score stay verifiable. Submit at [goodcase.ai/submit](https://goodcase.ai/submit); collection standards are at [goodcase.ai/standards](https://goodcase.ai/standards).",
    ackHeading: "## 🙏 Acknowledgements",
    ackBody: [
      "This project's format and Skill-packaging approach were shaped by:",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) — template-library + installable-Skill + marketplace pattern.",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) — README-as-gallery with per-entry attribution.",
      "- [goodcase.ai](https://goodcase.ai) — the source of every case and heat score in this repository.",
    ].join("\n"),
    copyrightHeading: "## Copyright & Takedown Notice",
    copyrightBody: [
      "Code in this repository (scripts, Agent Skill) is MIT licensed — see [LICENSE](./LICENSE).",
      "",
      "Prompt text, summaries, and media references are curated from publicly published creator posts. Copyright in each prompt and its associated media remains with the original creator; this repository's curation and structuring (selection, organization, template extraction) is offered under CC BY 4.0. Every entry links back to its original source and to its goodcase.ai record.",
      "",
      "If you are a rights holder and want an entry removed, open an issue with the entry's slug and source link, or contact goodcase.ai directly — takedown requests are honored on verification.",
    ].join("\n"),
    starHistory: "## Star History",
  },
  zh: {
    langSwitch: "[English](./README.md) | **[中文](./README_zh.md)**",
    title: "# Awesome Seedance",
    tagline: "Seedance 2.5 / 2.0 视频生成提示词精选库，每一条都核对过原帖来源。",
    // goodcase.ai 反链，位置固定在 badges 之后、安装之前，中英各一份，见上方 en 段注释。
    backlink:
      "更多经过验证、带完整 Prompt 的 AI 案例 → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    installHeading: "## 安装",
    installBody: [
      "```bash",
      "npx seedance-prompt-library install",
      "```",
      "",
      "把 seedance-prompt-library 这个 Agent Skill 装进 Claude Code / Codex，让 agent 直接调结构化模板在你的编辑器里写 Seedance prompt。",
    ].join("\n"),
    pillarsHeading: "## 为什么值得收藏这个仓库",
    pillars: [
      "每条 prompt 都人工核对过与原帖一致。只靠成片视频反推出来的 prompt 一律不收，没有原帖来源不收，这是 [goodcase.ai 的收录标准](https://goodcase.ai/standards)（2026-08-05 起生效的红线）。",
      "每条都带完整溯源。作者、原帖链接、发布时间、热度分——热度是同平台已发布案例里的相对分位，上不了榜就不收。",
      "自带可安装的 Agent Skill。`npx seedance-prompt-library install` 一行装进 Claude Code / Codex，agent 用真实验证过的模板结构写 Seedance prompt，不是瞎编。",
    ],
    browseHeading: "## 在 goodcase.ai 上浏览",
    browseBody:
      "这份 README 是索引。完整画廊、搜索、热度榜、复测记录都在 [goodcase.ai/cases?filter=video](https://goodcase.ai/cases?filter=video)。",
    whatHeading: "## 什么是 Seedance 2.5",
    whatBody:
      "Seedance 2.5 是字节跳动的视频生成模型，目前 Early Access，支持文本/图像/视频/音频四种输入模态，原生口型同步和语音驱动对话。Seedance 2.0 是上一代，文生视频/图生视频，没有原生音画同步，这里保留作参考对比。",
    statsHeading: "## 数据统计",
    featuredHeading: "## ⭐ 精选",
    featuredIntro: "跨两个 Seedance 版本，热度分前 6。",
    templatesHeading: "## 🧩 提示词模板",
    templatesIntro: "从表现最好的案例里提炼的可复用 prompt 结构，每套模板也打包进了可安装的 Skill。",
    allHeading: "## 🎬 全部提示词",
    allV25Heading: "### Seedance 2.5",
    allV20Heading: "### Seedance 2.0（热度前列）",
    allV20Note: (n, total) =>
      `按热度展示 Seedance 2.0(+) 全部 ${total} 条中的前 ${n} 条。→ [查看 Seedance 2.0 全量画廊](./docs/gallery-seedance-2-0-part-1.md)`,
    contributeHeading: "## 如何投稿",
    contributeBody:
      "这份 README 不接受新 prompt 的 PR，投稿走 goodcase.ai 的审核管线，这样溯源和热度分才可核验。投稿入口 [goodcase.ai/submit](https://goodcase.ai/submit)，收录标准见 [goodcase.ai/standards](https://goodcase.ai/standards)。",
    ackHeading: "## 🙏 致谢",
    ackBody: [
      "这个项目的格式和 Skill 打包方式参考了：",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) — 模板库 + 可安装 Skill + marketplace 的路子。",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) — README 即画廊、逐条署名的做法。",
      "- [goodcase.ai](https://goodcase.ai) — 本仓库全部案例和热度分的数据来源。",
    ].join("\n"),
    copyrightHeading: "## 版权与下架政策",
    copyrightBody: [
      "本仓库的代码部分（脚本、Agent Skill）采用 MIT 许可，见 [LICENSE](./LICENSE)。",
      "",
      "Prompt 文本、摘要和媒体引用均来自公开发布的创作者原帖，版权归原作者所有；本仓库对内容的筛选、组织和模板提炼采用 CC BY 4.0 授权。每条案例都链回原始来源和对应的 goodcase.ai 记录页。",
      "",
      "如果你是版权方，想要下架某条内容，请提 issue 并附上该条目的 slug 和来源链接，或直接联系 goodcase.ai，核实后会处理下架请求。",
    ].join("\n"),
    starHistory: "## Star History",
  },
};

function renderStatsTable(stats, lang) {
  if (lang === "en") {
    return [
      "| Metric | Value |",
      "| --- | --- |",
      `| Total cases | ${stats.total} |`,
      `| Seedance 2.5 | ${stats.v25Count} |`,
      `| Seedance 2.0 | ${stats.v20Count} |`,
      `| Unique authors | ${stats.authorCount} |`,
      `| Last updated | ${stats.lastUpdated} |`,
    ].join("\n");
  }
  return [
    "| 指标 | 数值 |",
    "| --- | --- |",
    `| 案例总数 | ${stats.total} |`,
    `| Seedance 2.5 | ${stats.v25Count} |`,
    `| Seedance 2.0 | ${stats.v20Count} |`,
    `| 作者数 | ${stats.authorCount} |`,
    `| 最近更新 | ${stats.lastUpdated} |`,
  ].join("\n");
}

function renderStarHistory() {
  const repo = "LearnPrompt/awesome-seedance";
  return `[![Star History Chart](https://api.star-history.com/svg?repos=${repo}&type=Date)](https://star-history.com/#${repo}&Date)`;
}

function buildReadme(lang) {
  const c = COPY[lang];
  const head = [];
  head.push(c.langSwitch);
  head.push("");
  head.push(c.title);
  head.push("");
  head.push(`> ${c.tagline}`);
  head.push("");
  head.push(BADGES);
  head.push("");
  head.push(c.backlink);
  head.push("");
  head.push(c.installHeading);
  head.push("");
  head.push(c.installBody);
  head.push("");
  head.push(c.pillarsHeading);
  head.push("");
  c.pillars.forEach((p, i) => {
    head.push(`${i + 1}. ${p}`);
  });
  head.push("");
  head.push(c.browseHeading);
  head.push("");
  head.push(c.browseBody);
  head.push("");
  head.push(c.whatHeading);
  head.push("");
  head.push(c.whatBody);
  head.push("");
  head.push(c.statsHeading);
  head.push("");
  head.push(renderStatsTable(stats, lang));
  head.push("");
  head.push(c.featuredHeading);
  head.push("");
  head.push(c.featuredIntro);
  head.push("");
  for (const caseObj of featured) {
    head.push(renderCaseEntry(caseObj, lang));
  }
  head.push(c.templatesHeading);
  head.push("");
  head.push(c.templatesIntro);
  head.push("");
  for (const template of templates) {
    head.push(renderTemplateCard(template, lang));
  }
  head.push(c.allHeading);
  head.push("");
  head.push(c.allV25Heading);
  head.push("");
  for (const caseObj of v25) {
    head.push(renderCaseEntry(caseObj, lang));
  }
  head.push(c.allV20Heading);
  head.push("");
  head.push(c.allV20Note(v20Top.length, v20All.length));
  head.push("");

  const headMd = head.join("\n") + "\n";
  const v20Entries = v20Top.map((caseObj) => renderCaseEntry(caseObj, lang) + "\n");

  const tail = [];
  tail.push("");
  tail.push(c.contributeHeading);
  tail.push("");
  tail.push(c.contributeBody);
  tail.push("");
  tail.push(c.ackHeading);
  tail.push("");
  tail.push(c.ackBody);
  tail.push("");
  tail.push(c.copyrightHeading);
  tail.push("");
  tail.push(c.copyrightBody);
  tail.push("");
  tail.push(c.starHistory);
  tail.push("");
  tail.push(renderStarHistory());
  tail.push("");
  const tailMd = tail.join("\n");

  const fitted = fitToSizeBudget(headMd, v20Entries, tailMd, README_SIZE_BUDGET_BYTES);
  return fitted;
}

const enResult = buildReadme("en");
const zhResult = buildReadme("zh");

writeFileSync(path.join(ROOT, "README.md"), enResult.markdown, "utf8");
writeFileSync(path.join(ROOT, "README_zh.md"), zhResult.markdown, "utf8");

const partsEn = renderGalleryParts(v20All, "en");
for (const part of partsEn) {
  writeFileSync(
    path.join(ROOT, "docs", galleryPartFileName("en", part.partNo, part.totalParts)),
    part.markdown,
    "utf8"
  );
}

const partsZh = renderGalleryParts(v20All, "zh");
for (const part of partsZh) {
  writeFileSync(
    path.join(ROOT, "docs", galleryPartFileName("zh", part.partNo, part.totalParts)),
    part.markdown,
    "utf8"
  );
}

console.log(`README.md: ${enResult.bytes} bytes${enResult.truncated ? ` (truncated, dropped ${enResult.droppedCount} inline 2.0 entries)` : ""}`);
console.log(`README_zh.md: ${zhResult.bytes} bytes${zhResult.truncated ? ` (truncated, dropped ${zhResult.droppedCount} inline 2.0 entries)` : ""}`);
console.log(`gallery: ${v20All.length} cases across ${partsEn.length} part(s)`);
console.log(`Stats: ${JSON.stringify(stats)}`);
