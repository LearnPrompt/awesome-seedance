#!/usr/bin/env node
// Generates README.md, README_zh.md, and the sharded docs/gallery-*.md files from
// data/cases.json + data/style-library.json. Run: node scripts/generate-readme.mjs
//
// README 结构（两种语言相同）：intro → Contents → Install → Why → Browse → What is Seedance →
// Statistics → ⭐ Featured (6 条完整条目) → 🔁 Cross-model retests → 🧩 Templates →
// 🔥 Top 30 by heat（紧凑排行表）→ 🎬 All Prompts（指向 docs/ 全量画廊）→ Contribute →
// Acknowledgements → Copyright → Star History。全量条目只放 docs/，README 控制在 ~120KB。
import { readFileSync, writeFileSync, readdirSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  computeStats,
  getFeatured,
  renderCaseEntry,
  renderTemplateCard,
  renderStatsTable,
  renderCrossModelSection,
  renderTopTable,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  bucketLabel,
  githubSlug,
  SEEDANCE_BUCKETS,
  README_SIZE_BUDGET_BYTES,
  FEATURED_COUNT,
  TOP_INLINE_COUNT,
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
const featured = getFeatured(cases, FEATURED_COUNT);
const partition = partitionAllPrompts(cases, TOP_INLINE_COUNT);
const bucketCases = {
  "2.5": partition.v25,
  "2.0": partition.v20,
  unspecified: partition.unversioned,
};

const AWESOME_BADGE = "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)";
const BADGES = [
  "[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./contributing.md)",
  "[![License: MIT (code)](https://img.shields.io/badge/code%20license-MIT-blue.svg)](./LICENSE)",
  "[![Content: CC BY 4.0 (curation)](https://img.shields.io/badge/curation-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
].join(" ");

const COPY = {
  en: {
    langSwitch: "**[English](./README.md)** | [中文](./README_zh.md)",
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    tagline:
      "A curated, verified prompt library for Seedance 2.5 / 2.0 video generation — every case checked against its original source.",
    // goodcase.ai 反链，位置固定在 badges 之后、Install 之前。原是 PR #1 手改进 README 的一行，
    // 不搬进生成器模板的话下次 npm run generate 会把它覆盖掉。
    backlink:
      "More verified AI cases with full prompts → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## Contents",
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
      "Seedance 2.5 is ByteDance's video generation model in Early Access, generating from four input modalities (text, image, video, and audio references), with native lip-sync and voice-driven dialogue. Seedance 2.0 is the prior generation — text/image-to-video without native audio-sync — kept here for reference and comparison. Cases whose source post names only \"Seedance\" without a version are listed as *version unspecified*.",
    statsHeading: "## Statistics",
    statsNote:
      "Each case is counted once; a case tagged with several Seedance versions counts under the highest one.",
    featuredHeading: "## ⭐ Featured",
    featuredIntro: `Top ${FEATURED_COUNT} prompts by heat score, across all Seedance versions.`,
    templatesHeading: "## 🧩 Prompt Templates",
    templatesIntro:
      "Reusable prompt structures distilled from the highest-performing cases. Each template ships in the installable Skill too.",
    topHeading: `## 🔥 Top ${TOP_INLINE_COUNT} by heat`,
    topIntro: (shown) =>
      `The ${shown} hottest cases across all versions (ranks 1–${FEATURED_COUNT} are also shown in full under ⭐ Featured). *prompt* opens the full entry in the gallery, *source* opens the creator's original post.`,
    allHeading: "## 🎬 All Prompts",
    allIntro: (total) =>
      `All ${total} cases, with full prompts, live in the gallery under \`docs/\` (sharded so GitHub renders every page). Sorted by heat score within each version.`,
    // 文本开头的列表项才不会被 awesome-lint 的 list-item 规则当成条目链接校验（相对链接会被判无效）。
    galleryLink: (label, count, parts) => {
      const partLinks =
        parts.length === 1
          ? `[Full gallery](./docs/${parts[0].fileName})`
          : parts.map((p) => `[Part ${p.partNo}](./docs/${p.fileName})`).join(" · ");
      return `- ${label} - ${count} cases: ${partLinks}.`;
    },
    contributeHeading: "## How to Contribute",
    contributeBody: [
      "This README doesn't take pull requests for new prompts — submissions go through goodcase.ai's review pipeline so provenance and heat score stay verifiable. Submit at [goodcase.ai/submit](https://goodcase.ai/submit); collection standards are at [goodcase.ai/standards](https://goodcase.ai/standards).",
      "",
      "`README.md`, `README_zh.md`, `docs/` and the Skill reference are generated from `data/` — please don't hand-edit them. See [contributing.md](./contributing.md) for the submission standard, what gets rejected, and how the generator works. This project follows the [code of conduct](./code-of-conduct.md).",
    ].join("\n"),
    ackHeading: "## 🙏 Acknowledgements",
    ackBody: [
      "This project's format and Skill-packaging approach were shaped by:",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - Template-library + installable-Skill + marketplace pattern.",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README-as-gallery with per-entry attribution.",
      "- [goodcase.ai](https://goodcase.ai) - The source of every case and heat score in this repository.",
    ].join("\n"),
    copyrightHeading: "## Copyright & Takedown Notice",
    // 段落而不是列表：awesome-lint 会把以粗体开头的列表项当条目链接校验。
    copyrightBody: [
      "This repository carries three kinds of material under three different terms.",
      "",
      "**Code** (generator scripts, Agent Skill, tooling) is released under the MIT License, see the `LICENSE` file. The MIT license covers the code only.",
      "",
      "**Curation** (selection, organization, statistics, template extraction, summaries written by us) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse it with attribution to *awesome-seedance / goodcase.ai*.",
      "",
      "**Prompts and media** remain the copyright of their original creators. Prompt text, creator summaries, poster images and video references are quoted from publicly published posts for documentation and study; every entry links back to its original source and to its goodcase.ai record. Nothing here grants a license to the underlying prompt or media beyond what the original post allows.",
      "",
      "**Takedown process.** If you are a rights holder and want an entry removed or corrected, open a GitHub issue with the entry's slug (from its goodcase.ai URL) and the original source link, or contact goodcase.ai directly. Requests are verified against the original post and honored on verification; the entry is removed from `data/` and disappears from every generated file on the next regeneration.",
    ].join("\n"),
    starHistory: "## Star History",
  },
  zh: {
    langSwitch: "[English](./README.md) | **[中文](./README_zh.md)**",
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    tagline: "Seedance 2.5 / 2.0 视频生成提示词精选库，每一条都核对过原帖来源。",
    // goodcase.ai 反链，位置固定在 badges 之后、安装之前，中英各一份，见上方 en 段注释。
    backlink:
      "更多经过验证、带完整 Prompt 的 AI 案例 → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## 目录",
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
      "**每条 prompt 都人工核对过与原帖一致。** 只靠成片视频反推出来的 prompt 一律不收，没有原帖来源不收，这是 [goodcase.ai 的收录标准](https://goodcase.ai/standards)（2026-08-05 起生效的红线）。",
      "**每条都带完整溯源。** 作者、原帖链接、发布时间、热度分——热度是同平台已发布案例里的相对分位，上不了榜就不收。",
      "**自带可安装的 Agent Skill。** `npx seedance-prompt-library install` 一行装进 Claude Code / Codex，agent 用真实验证过的模板结构写 Seedance prompt，不是瞎编。",
    ],
    browseHeading: "## 在 goodcase.ai 上浏览",
    browseBody:
      "这份 README 是索引。完整画廊、搜索、热度榜、复测记录都在 [goodcase.ai/cases?filter=video](https://goodcase.ai/cases?filter=video)。",
    whatHeading: "## 什么是 Seedance 2.5",
    whatBody:
      "Seedance 2.5 是字节跳动的视频生成模型（Early Access），支持文本、图片、视频、音频四种参考输入，原生口型同步和语音驱动对白。Seedance 2.0 是上一代，文生视频/图生视频、没有原生音画同步，这里一并收录用于对照。原帖只写了 Seedance 没标版本的案例归入“未标版本”。",
    statsHeading: "## 统计",
    statsNote: "每条案例只计一次；同时标了多个 Seedance 版本的案例按最高版本计。",
    featuredHeading: "## ⭐ 精选",
    featuredIntro: `按热度分排序的前 ${FEATURED_COUNT} 条，覆盖全部 Seedance 版本。`,
    templatesHeading: "## 🧩 Prompt 模板",
    templatesIntro: "从最高热度案例里提炼出来的可复用 prompt 结构，可安装的 Skill 里同样包含这些模板。",
    topHeading: `## 🔥 热度 Top ${TOP_INLINE_COUNT}`,
    topIntro: (shown) =>
      `全部版本里热度最高的 ${shown} 条（前 ${FEATURED_COUNT} 名同时在上方 ⭐ 精选里完整展示）。*完整 prompt* 跳到画廊里的完整条目，*原帖* 跳到创作者原帖。`,
    allHeading: "## 🎬 全部案例",
    allIntro: (total) =>
      `全部 ${total} 条案例（含完整 prompt）都在 \`docs/\` 下的画廊里，按版本分文件、超长自动分页以保证 GitHub 能渲染；每个版本内按热度分排序。`,
    galleryLink: (label, count, parts) => {
      const partLinks =
        parts.length === 1
          ? `[完整画廊](./docs/${parts[0].fileName})`
          : parts.map((p) => `[第 ${p.partNo} 页](./docs/${p.fileName})`).join(" · ");
      return `- ${label} - ${count} 条：${partLinks}。`;
    },
    contributeHeading: "## 如何投稿",
    contributeBody: [
      "这份 README 不接受新 prompt 的 PR，投稿走 goodcase.ai 的审核管线，这样溯源和热度分才可核验。投稿入口 [goodcase.ai/submit](https://goodcase.ai/submit)，收录标准见 [goodcase.ai/standards](https://goodcase.ai/standards)。",
      "",
      "`README.md`、`README_zh.md`、`docs/` 和 Skill 参考文件都由 `data/` 生成，请不要手改。投稿标准、拒收规则和生成器说明见 [contributing.md](./contributing.md)，社区行为准则见 [code-of-conduct.md](./code-of-conduct.md)。",
    ].join("\n"),
    ackHeading: "## 🙏 致谢",
    ackBody: [
      "这个项目的格式和 Skill 打包方式参考了：",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - 模板库 + 可安装 Skill + marketplace 的路子。",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README 即画廊、逐条署名的做法。",
      "- [goodcase.ai](https://goodcase.ai) - 本仓库全部案例和热度分的数据来源。",
    ].join("\n"),
    copyrightHeading: "## 版权与下架政策",
    copyrightBody: [
      "本仓库包含三类内容，分别适用三种条款。",
      "",
      "**代码**（生成脚本、Agent Skill、工具）采用 MIT 许可，见 `LICENSE` 文件。MIT 只覆盖代码。",
      "",
      "**策展**（案例筛选、组织、统计、模板提炼、我们撰写的摘要）采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)，注明来源 *awesome-seedance / goodcase.ai* 即可复用。",
      "",
      "**Prompt 与媒体**的版权归原创作者所有。Prompt 文本、创作者摘要、封面图和视频引用均引自公开发布的原帖，用于记录与学习；每条案例都链回原始来源和对应的 goodcase.ai 记录页。本仓库不对 prompt 或媒体本身授予原帖之外的任何许可。",
      "",
      "**下架流程。** 如果你是版权方，想要下架或更正某条内容，请提 GitHub issue 并附上该条目的 slug（见其 goodcase.ai 链接）和原帖链接，或直接联系 goodcase.ai。请求会与原帖核对，核实后处理：条目从 `data/` 移除，下次重新生成时即从所有生成文件中消失。",
    ].join("\n"),
    starHistory: "## Star History",
  },
};

function renderStarHistory() {
  const repo = "LearnPrompt/awesome-seedance";
  return `[![Star History Chart](https://api.star-history.com/svg?repos=${repo}&type=Date)](https://star-history.com/#${repo}&Date)`;
}

/** 先渲染画廊：README 的 Top 榜需要知道每条完整条目落在哪个文件、哪个锚点。 */
function buildGalleries(lang) {
  const parts = {};
  const promptLinks = new Map();
  for (const bucket of SEEDANCE_BUCKETS) {
    const list = bucketCases[bucket];
    const rendered = list.length ? renderGalleryParts(list, lang, { bucket }) : [];
    parts[bucket] = rendered;
    for (const part of rendered) {
      for (const entry of part.entries) {
        promptLinks.set(entry.slug, `./docs/${part.fileName}#${entry.anchor}`);
      }
    }
  }
  return { parts, promptLinks };
}

function renderContents(headings, lang) {
  const c = COPY[lang];
  const lines = [c.contentsHeading, ""];
  for (const h of headings) {
    const text = h.replace(/^##\s+/, "");
    lines.push(`- [${text}](#${githubSlug(text)})`);
  }
  return lines.join("\n") + "\n";
}

function buildReadme(lang) {
  const c = COPY[lang];
  const { parts, promptLinks } = buildGalleries(lang);
  const usedHeadings = new Set();

  // 每个 section: { heading, body: string[] }，heading 为 null 表示不进目录。
  const sections = [];
  sections.push({ heading: c.installHeading, body: [c.installBody] });
  // awesome-lint 的 list-item 规则要求列表项以链接开头，三条卖点改成段落而不是有序列表。
  sections.push({ heading: c.pillarsHeading, body: c.pillars.flatMap((p) => [p, ""]).slice(0, -1) });
  sections.push({ heading: c.browseHeading, body: [c.browseBody] });
  sections.push({ heading: c.whatHeading, body: [c.whatBody] });
  sections.push({ heading: c.statsHeading, body: [renderStatsTable(stats, lang), "", c.statsNote] });

  const featuredBody = [c.featuredIntro, ""];
  for (const caseObj of featured) {
    featuredBody.push(renderCaseEntry(caseObj, lang, { usedHeadings }));
  }
  sections.push({ heading: c.featuredHeading, body: featuredBody });

  // meta.retests 缺失（老数据/私仓导出层还没同步）或 totalRuns 为 0 时返回 null，整节不渲染。
  const crossModelSection = renderCrossModelSection(cases, casesData.meta, lang);
  if (crossModelSection) {
    const [heading, ...rest] = crossModelSection.split("\n");
    sections.push({ heading, body: rest.join("\n").trim().split("\n") });
  }

  const templatesBody = [c.templatesIntro, ""];
  for (const template of templates) {
    templatesBody.push(renderTemplateCard(template, lang, { level: 3 }));
  }
  sections.push({ heading: c.templatesHeading, body: templatesBody });

  // Top 榜是唯一可裁剪的部分：超预算时从表尾裁行，标题/说明按实际行数回填。
  const top = renderTopTable(partition.top, lang, {
    startRank: 1,
    promptLinkFor: (caseObj) => promptLinks.get(caseObj.slug) || null,
  });

  const galleryBody = [c.allIntro(cases.length), ""];
  for (const bucket of SEEDANCE_BUCKETS) {
    const list = bucketCases[bucket];
    if (!list.length) continue;
    galleryBody.push(c.galleryLink(bucketLabel(bucket, lang), list.length, parts[bucket]));
  }
  const gallerySection = { heading: c.allHeading, body: galleryBody };

  const tailSections = [
    gallerySection,
    { heading: c.contributeHeading, body: [c.contributeBody] },
    { heading: c.ackHeading, body: [c.ackBody] },
    { heading: c.copyrightHeading, body: [c.copyrightBody] },
    { heading: c.starHistory, body: [renderStarHistory()] },
  ];

  const allHeadings = [
    c.contentsHeading,
    ...sections.map((s) => s.heading),
    c.topHeading,
    ...tailSections.map((s) => s.heading),
  ];

  // 每个 section 渲染成恰好以一个换行结尾的块，块之间用一个空行分隔——
  // 条目本身已带尾换行，不裁掉会出现连续两个空行（remark no-consecutive-blank-lines）。
  const renderSection = (s) => {
    const md = [s.heading, "", ...s.body].join("\n").replace(/\n+$/, "");
    return `${md}\n`;
  };

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
  head.push(renderContents(allHeadings.slice(1), lang));
  const headMd = head.join("\n") + sections.map(renderSection).join("\n") + "\n";

  const tailMd = tailSections.map(renderSection).join("\n");

  const assembleTop = (rows) =>
    [c.topHeading, "", c.topIntro(rows.length), "", ...top.header, ...rows].join("\n") + "\n\n";

  // fitToSizeBudget 只裁“条目”，这里把表头+说明当 head 的一部分不合适（说明含行数），
  // 所以自己按行裁：先整表试，超预算再逐行去尾。
  let rows = top.rows;
  let markdown = headMd + assembleTop(rows) + tailMd;
  while (Buffer.byteLength(markdown, "utf8") > README_SIZE_BUDGET_BYTES && rows.length > 0) {
    rows = rows.slice(0, -1);
    markdown = headMd + assembleTop(rows) + tailMd;
  }
  const bytes = Buffer.byteLength(markdown, "utf8");
  return {
    markdown,
    bytes,
    keptCount: rows.length,
    droppedCount: top.rows.length - rows.length,
    truncated: rows.length < top.rows.length,
    parts,
  };
}

const enResult = buildReadme("en");
const zhResult = buildReadme("zh");

writeFileSync(path.join(ROOT, "README.md"), enResult.markdown, "utf8");
writeFileSync(path.join(ROOT, "README_zh.md"), zhResult.markdown, "utf8");

// 画廊文件：写新的，删掉本次没生成的旧 gallery-*.md（分页数变化时的残留）。
const docsDir = path.join(ROOT, "docs");
const written = new Set();
for (const result of [enResult, zhResult]) {
  for (const bucket of SEEDANCE_BUCKETS) {
    for (const part of result.parts[bucket]) {
      writeFileSync(path.join(docsDir, part.fileName), part.markdown, "utf8");
      written.add(part.fileName);
    }
  }
}
for (const file of readdirSync(docsDir)) {
  if (/^gallery-.*\.md$/.test(file) && !written.has(file)) {
    unlinkSync(path.join(docsDir, file));
    console.log(`removed stale ${file}`);
  }
}

const describe = (r) =>
  `${r.bytes} bytes${r.truncated ? ` (top table truncated, dropped ${r.droppedCount} rows)` : ""}`;
console.log(`README.md: ${describe(enResult)}`);
console.log(`README_zh.md: ${describe(zhResult)}`);
for (const bucket of SEEDANCE_BUCKETS) {
  console.log(
    `gallery ${bucketLabel(bucket, "en")}: ${bucketCases[bucket].length} cases across ${enResult.parts[bucket].length} part(s)`
  );
}
console.log(`Stats: ${JSON.stringify(stats)}`);
// fitToSizeBudget 仍导出给测试和其他调用方；README 主体已改为按行裁剪。
void fitToSizeBudget;
