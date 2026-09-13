#!/usr/bin/env node
// Generates README.md, README_zh.md, docs/gallery.md (index), the sharded docs/gallery-*.md
// files, assets/hero.svg and data/stats.json from data/cases.json + data/style-library.json.
// Run: node scripts/generate-readme.mjs
//
// README 结构（两种语言相同，2026-09-13 对标 awesome-gpt-image-2 定稿）：
// hero.svg → 标题 + 带数量的一句话 → 动态徽章 → goodcase 反链 → Quick Links → Contents →
// Install → Why → 🔁 Cross-model retests（聚焦区，前置）→ ⭐ Featured → 🗂 Category Overview →
// 🧩 Prompt Templates（按分类紧凑表）→ 🔥 Top 30（带预览图）→ 🎬 All Prompts → 🌐 Browse on goodcase.ai →
// Statistics → 🚀 How to use → Contribute → Acknowledgements → Copyright → Star History → License。
// 全量条目只放 docs/，README 控制在 ~120KB。
import { readFileSync, writeFileSync, readdirSync, unlinkSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  computeStats,
  getFeatured,
  renderCaseEntry,
  renderStatsTable,
  renderTopTable,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  bucketLabel,
  githubSlug,
  galleryIndexFileName,
  SEEDANCE_BUCKETS,
  README_SIZE_BUDGET_BYTES,
  FEATURED_COUNT,
  TOP_INLINE_COUNT,
} from "./lib/render.mjs";
import {
  buildStatsSnapshot,
  renderBadges,
  renderHeroSvg,
  renderQuickLinks,
  renderRetestSpotlight,
  buildCategoryGroups,
  renderCategoryOverview,
  renderTemplateTables,
  renderGalleryIndex,
  LIVE_SITE_URL,
} from "./lib/sections.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadJson(relPath) {
  return JSON.parse(readFileSync(path.join(ROOT, relPath), "utf8"));
}

const casesData = loadJson("data/cases.json");
const styleData = loadJson("data/style-library.json");
const cases = casesData.cases || [];
const templates = styleData.templates || [];
const categories = styleData.categories || [];
const casesBySlug = new Map(cases.map((c) => [c.slug, c]));

const stats = computeStats(casesData);
const snapshot = buildStatsSnapshot(stats, templates, categories);
const featured = getFeatured(cases, FEATURED_COUNT);
const partition = partitionAllPrompts(cases, TOP_INLINE_COUNT);
const bucketCases = {
  "2.5": partition.v25,
  "2.0": partition.v20,
  unspecified: partition.unversioned,
};
const categoryGroups = buildCategoryGroups(templates, categories, casesBySlug);

const AWESOME_BADGE = "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)";

const COPY = {
  en: {
    langSwitch: "**[English](./README.md)** | [中文](./README_zh.md)",
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    heroAlt: "Awesome Seedance: verified Seedance prompts, cross-model retests, templates and an agent skill",
    // 一句话卖点 + 数量，数量随数据走；徽章行里的数字另走 shields 动态 JSON，每天自动变。
    tagline: (s) =>
      `**Verified Seedance 2.5 / 2.0 prompt library: ${s.cases} cases checked against their original posts, ${s.retestRuns} cross-model retests, ${s.templates} reusable templates and one installable Agent Skill. Synced from goodcase.ai, new cases land daily.**`,
    backlink:
      "More verified AI cases with full prompts → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## Contents",
    installHeading: "## Install",
    installBody: [
      "```bash",
      "npx seedance-prompt-library install",
      "```",
      "",
      "Installs the `seedance-prompt-library` Agent Skill into Claude Code and Codex, so your agent can pull structured prompt templates and write Seedance prompts directly in your editor. Prefer the [skills CLI](https://github.com/vercel-labs/skills)? `npx skills add LearnPrompt/awesome-seedance --skill seedance-prompt-library` installs the same skill.",
    ].join("\n"),
    pillarsHeading: "## Why this list",
    pillars: [
      `**Human-verified against the source.** Every prompt here was checked against the creator's original post. Prompts reverse-engineered from the output video only, with no source and no submission, are rejected outright, per [goodcase.ai's collection standards](https://goodcase.ai/standards) (in force since 2026-08-05).`,
      `**Re-run on a second model.** Most cases have been re-generated on another video model, with the verdict, score and output published. See [Cross-model retests](#-cross-model-retests).`,
      `**Full provenance on every entry.** Author, original post link, publish date, and a heat score, a relative percentile among published cases on the same platform. If it didn't rank, it isn't here.`,
      `**Ships as an installable Agent Skill.** \`npx seedance-prompt-library install\` drops a template library straight into Claude Code / Codex so your agent writes Seedance prompts from proven structures, not guesses.`,
    ],
    featuredHeading: "## ⭐ Featured",
    featuredIntro: `Top ${FEATURED_COUNT} prompts by heat score, across all Seedance versions. Long prompts are collapsed; click to expand.`,
    templatesHeading: "## 🧩 Prompt Templates",
    topHeading: `## 🔥 Top ${TOP_INLINE_COUNT} by heat`,
    topIntro: (shown) =>
      `The ${shown} hottest cases across all versions (ranks 1–${FEATURED_COUNT} are also shown in full under ⭐ Featured). *prompt* opens the full entry in the gallery, *source* opens the creator's original post.`,
    allHeading: "## 🎬 All Prompts",
    allIntro: (total) =>
      `All ${total} cases, with full prompts, live in the gallery under \`docs/\` (sharded so GitHub renders every page). Start from the [gallery index](./docs/gallery.md), or jump to a version:`,
    galleryLink: (label, count, parts) => {
      const partLinks =
        parts.length === 1
          ? `[Full gallery](./docs/${parts[0].fileName})`
          : parts.map((p) => `[Part ${p.partNo} (cases ${p.rangeStart}–${p.rangeEnd})](./docs/${p.fileName})`).join(" · ");
      return `- ${label} - ${count} cases: ${partLinks}.`;
    },
    browseHeading: "## 🌐 Browse on goodcase.ai",
    browseBody: [
      `This README is an index. The full experience lives at [goodcase.ai](${LIVE_SITE_URL}): search across every case, the heat leaderboard, the stability ranking, per-case retest logs with output videos, and the installable Skills that grow out of the cases. Every entry here links back to its goodcase.ai record.`,
      "",
      `[<img src="./assets/goodcase-seedance-gallery.png" width="800" alt="Seedance cases on goodcase.ai">](${LIVE_SITE_URL})`,
    ].join("\n"),
    statsHeading: "## Statistics",
    statsNote:
      "Each case is counted once; a case tagged with several Seedance versions counts under the highest one.",
    howToHeading: "## 🚀 How to use this repository",
    howToBody: [
      "1. Start from [⭐ Featured](#-featured) or [🔥 Top 30](#-top-30-by-heat) and decide what kind of clip you want: vlog, ad, dialogue, action, stylized.",
      "2. Open that category in the [🗂️ Category Overview](#%EF%B8%8F-category-overview) or the full [gallery](./docs/gallery.md), read two or three neighbouring cases, and copy the *structure* first (timeline, shot list, identity lock), then the style words.",
      "3. Install the Skill (`npx seedance-prompt-library install`) or open the [template tables](#-prompt-templates) and fill your own subject, setting and beats into the matching template. Check the case's retest verdict before you commit budget to it.",
    ].join("\n"),
    contributeHeading: "## How to Contribute",
    contributeBody: [
      "**New prompt cases** go through goodcase.ai's review pipeline so provenance and heat score stay verifiable: submit at [goodcase.ai/submit](https://goodcase.ai/submit) (collection standards: [goodcase.ai/standards](https://goodcase.ai/standards)). Prefer GitHub? Open a pull request that adds one JSON file under [`submissions/`](./submissions/) following [`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json); a maintainer pushes it through the same review, and it lands in `data/` on the next export.",
      "",
      "**Pull requests are welcome** for template fixes in `data/style-library.json`, generator and Skill code under `scripts/` and `agents/`, and corrections to English titles or summaries. `README.md`, `README_zh.md`, `docs/` and the Skill reference are generated from `data/`, so please don't hand-edit them: change the source, run `npm test && npm run generate`, and commit the regenerated files in the same PR. See [contributing.md](./contributing.md) for the submission standard, what gets rejected, and how the generator works. This project follows the [code of conduct](./code-of-conduct.md).",
    ].join("\n"),
    ackHeading: "## 🙏 Acknowledgements",
    ackBody: [
      "This project's format and Skill-packaging approach were shaped by:",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - Template-library + installable-Skill + marketplace pattern.",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README-as-gallery with per-entry attribution.",
      "- [goodcase.ai](https://goodcase.ai) - The source of every case, heat score and retest in this repository.",
    ].join("\n"),
    copyrightHeading: "## Copyright & Takedown Notice",
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
    licenseHeading: "## License",
    licenseBody:
      "Code in this repository is open source under the [MIT License](./LICENSE): use it, modify it, build on it, keep the license notice. Curation is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); prompts and media stay with their creators. Details above under [Copyright & Takedown Notice](#copyright--takedown-notice).",
  },
  zh: {
    langSwitch: "[English](./README.md) | **[中文](./README_zh.md)**",
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    heroAlt: "Awesome Seedance：已验证的 Seedance 提示词、跨模型复测、模板与 Agent Skill",
    tagline: (s) =>
      `**Seedance 2.5 / 2.0 提示词验证库：${s.cases} 条案例逐条核对过原帖，${s.retestRuns} 次跨模型复测，${s.templates} 个可复用模板，外加一个可安装的 Agent Skill。数据来自 goodcase.ai，每天都有新案例进来。**`,
    backlink:
      "更多经过验证、带完整 Prompt 的 AI 案例 → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## 目录",
    installHeading: "## 安装",
    installBody: [
      "```bash",
      "npx seedance-prompt-library install",
      "```",
      "",
      "把 seedance-prompt-library 这个 Agent Skill 装进 Claude Code / Codex，让 agent 直接调结构化模板在你的编辑器里写 Seedance prompt。习惯用 [skills CLI](https://github.com/vercel-labs/skills) 的话，`npx skills add LearnPrompt/awesome-seedance --skill seedance-prompt-library` 装的是同一个 Skill。",
    ].join("\n"),
    pillarsHeading: "## 为什么值得收藏这个仓库",
    pillars: [
      "**每条 prompt 都人工核对过与原帖一致。** 只靠成片视频反推出来的 prompt 一律不收，没有原帖来源不收，这是 [goodcase.ai 的收录标准](https://goodcase.ai/standards)（2026-08-05 起生效的红线）。",
      "**在第二个模型上重跑过。** 大部分案例都拿到另一个视频模型上重新生成，结论、评分和产物都公开，见[跨模型复测](#-跨模型复测)。",
      "**每条都带完整溯源。** 作者、原帖链接、发布时间、热度分，热度是同平台已发布案例里的相对分位，上不了榜就不收。",
      "**自带可安装的 Agent Skill。** `npx seedance-prompt-library install` 一行装进 Claude Code / Codex，agent 用真实验证过的模板结构写 Seedance prompt，不是瞎编。",
    ],
    featuredHeading: "## ⭐ 精选",
    featuredIntro: `按热度分排序的前 ${FEATURED_COUNT} 条，覆盖全部 Seedance 版本。长 prompt 默认折叠，点开展开。`,
    templatesHeading: "## 🧩 Prompt 模板",
    topHeading: `## 🔥 热度 Top ${TOP_INLINE_COUNT}`,
    topIntro: (shown) =>
      `全部版本里热度最高的 ${shown} 条（前 ${FEATURED_COUNT} 名同时在上方 ⭐ 精选里完整展示）。*完整 prompt* 跳到画廊里的完整条目，*原帖* 跳到创作者原帖。`,
    allHeading: "## 🎬 全部案例",
    allIntro: (total) =>
      `全部 ${total} 条案例（含完整 prompt）都在 \`docs/\` 下的画廊里，按版本分文件、超长自动分页以保证 GitHub 能渲染。从[画廊总览](./docs/gallery.zh.md)进，或直接跳到某个版本：`,
    galleryLink: (label, count, parts) => {
      const partLinks =
        parts.length === 1
          ? `[完整画廊](./docs/${parts[0].fileName})`
          : parts.map((p) => `[第 ${p.partNo} 页（第 ${p.rangeStart}–${p.rangeEnd} 条）](./docs/${p.fileName})`).join(" · ");
      return `- ${label} - ${count} 条：${partLinks}。`;
    },
    browseHeading: "## 🌐 在 goodcase.ai 上浏览",
    browseBody: [
      `这份 README 是索引。完整体验在 [goodcase.ai](${LIVE_SITE_URL})：全库搜索、热度榜、稳定度榜、每条案例带产出视频的复测记录，以及从案例里长出来的可安装 Skill。这里每一条都链回它在 goodcase.ai 的记录页。`,
      "",
      `[<img src="./assets/goodcase-seedance-gallery.png" width="800" alt="goodcase.ai 上的 Seedance 案例">](${LIVE_SITE_URL})`,
    ].join("\n"),
    statsHeading: "## 统计",
    statsNote: "每条案例只计一次；同时标了多个 Seedance 版本的案例按最高版本计。",
    howToHeading: "## 🚀 怎么用这个仓库",
    howToBody: [
      "1. 从 [⭐ 精选](#-精选) 或 [🔥 热度 Top 30](#-热度-top-30) 开始，先定你要的片型：vlog、广告、对白、动作、风格化。",
      "2. 在 [🗂️ 分类总览](#%EF%B8%8F-分类总览) 或完整[画廊](./docs/gallery.zh.md)里打开那一类，读两三条相邻案例，先抄*结构*（时间轴、分镜、身份锁定），再抄风格词。",
      "3. 装上 Skill（`npx seedance-prompt-library install`）或打开[模板表](#-prompt-模板)，把你的主体、场景和节拍填进对应模板。花预算之前先看一眼这条案例的复测结论。",
    ].join("\n"),
    contributeHeading: "## 如何投稿",
    contributeBody: [
      "**新案例**走 goodcase.ai 的审核管线，这样溯源和热度分才可核验：投稿入口 [goodcase.ai/submit](https://goodcase.ai/submit)，收录标准见 [goodcase.ai/standards](https://goodcase.ai/standards)。更习惯 GitHub 的话，提一个 PR，往 [`submissions/`](./submissions/) 下按 [`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json) 加一个 JSON 文件，维护者会把它推进同一套审核，通过后下次导出就进 `data/`。",
      "",
      "**欢迎 PR** 修 `data/style-library.json` 里的模板、`scripts/` 与 `agents/` 下的生成器和 Skill 代码，以及英文标题和摘要的纠错。`README.md`、`README_zh.md`、`docs/` 和 Skill 参考文件都由 `data/` 生成，请不要手改：改源头，跑 `npm test && npm run generate`，把重新生成的文件放进同一个 PR。投稿标准、拒收规则和生成器说明见 [contributing.md](./contributing.md)，社区行为准则见 [code-of-conduct.md](./code-of-conduct.md)。",
    ].join("\n"),
    ackHeading: "## 🙏 致谢",
    ackBody: [
      "这个项目的格式和 Skill 打包方式参考了：",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - 模板库 + 可安装 Skill + marketplace 的路子。",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README 即画廊、逐条署名的做法。",
      "- [goodcase.ai](https://goodcase.ai) - 本仓库全部案例、热度分和复测的数据来源。",
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
    licenseHeading: "## License",
    licenseBody:
      "本仓库代码基于 [MIT 许可证](./LICENSE)开源：可以自由使用、修改、分发并在此基础上构建，保留许可声明即可。策展内容为 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)；prompt 与媒体版权归原作者。详见上方[版权与下架政策](#版权与下架政策)。",
  },
};

function renderStarHistory() {
  const repo = "LearnPrompt/awesome-seedance";
  return `[![Star History Chart](https://api.star-history.com/svg?repos=${repo}&type=Date)](https://star-history.com/#${repo}&Date)`;
}

/** 先渲染画廊：README 的 Top 榜和画廊总览需要知道每条完整条目落在哪个文件、哪个锚点。 */
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

  // 每个 section: { heading, body: string[] }。
  const sections = [];
  sections.push({ heading: c.installHeading, body: [c.installBody] });
  // awesome-lint 的 list-item 规则要求列表项以链接开头，卖点改成段落而不是列表。
  sections.push({ heading: c.pillarsHeading, body: c.pillars.flatMap((p) => [p, ""]).slice(0, -1) });

  // 复测聚焦区前置：meta.retests 缺失或 totalRuns 为 0 时返回 null，整节不渲染。
  const spotlight = renderRetestSpotlight(cases, casesData.meta, lang);
  if (spotlight) {
    const [heading, ...rest] = spotlight.split("\n");
    sections.push({ heading, body: rest.join("\n").trim().split("\n") });
  }

  const featuredBody = [c.featuredIntro, ""];
  for (const caseObj of featured) {
    featuredBody.push(renderCaseEntry(caseObj, lang, { usedHeadings }));
  }
  sections.push({ heading: c.featuredHeading, body: featuredBody });

  const overview = renderCategoryOverview(categoryGroups, lang);
  {
    const [heading, ...rest] = overview.split("\n");
    sections.push({ heading, body: rest.join("\n").trim().split("\n") });
  }

  sections.push({ heading: c.templatesHeading, body: renderTemplateTables(categoryGroups, lang).split("\n") });

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

  const tailSections = [
    { heading: c.allHeading, body: galleryBody },
    { heading: c.browseHeading, body: [c.browseBody] },
    { heading: c.statsHeading, body: [renderStatsTable(stats, lang), "", c.statsNote] },
    { heading: c.howToHeading, body: [c.howToBody] },
    { heading: c.contributeHeading, body: [c.contributeBody] },
    { heading: c.ackHeading, body: [c.ackBody] },
    { heading: c.copyrightHeading, body: [c.copyrightBody] },
    { heading: c.starHistory, body: [renderStarHistory()] },
    { heading: c.licenseHeading, body: [c.licenseBody] },
  ];

  const quickLinks = renderQuickLinks({ parts, bucketCases, templates, categories, stats }, lang);
  const quickLinksHeading = quickLinks.split("\n")[0];

  const allHeadings = [
    quickLinksHeading,
    c.contentsHeading,
    ...sections.map((s) => s.heading),
    c.topHeading,
    ...tailSections.map((s) => s.heading),
  ];

  // 每个 section 渲染成恰好以一个换行结尾的块，块之间用一个空行分隔。
  const renderSection = (s) => {
    const md = [s.heading, "", ...s.body].join("\n").replace(/\n+$/, "");
    return `${md}\n`;
  };

  const head = [];
  head.push(c.langSwitch);
  head.push("");
  head.push(`[<img src="./assets/hero.svg" width="100%" alt="${c.heroAlt}">](${LIVE_SITE_URL})`);
  head.push("");
  head.push(c.title);
  head.push("");
  head.push(c.tagline(snapshot));
  head.push("");
  head.push(renderBadges(lang));
  head.push("");
  head.push(c.backlink);
  head.push("");
  head.push(quickLinks);
  head.push("");
  head.push(renderContents(allHeadings.slice(2), lang));
  const headMd = head.join("\n") + sections.map(renderSection).join("\n") + "\n";

  const tailMd = tailSections.map(renderSection).join("\n");

  const assembleTop = (rows) =>
    [c.topHeading, "", c.topIntro(rows.length), "", ...top.header, ...rows].join("\n") + "\n\n";

  let rows = top.rows;
  let markdown = headMd + assembleTop(rows) + tailMd;
  while (Buffer.byteLength(markdown, "utf8") > README_SIZE_BUDGET_BYTES && rows.length > 0) {
    rows = rows.slice(0, -1);
    markdown = headMd + assembleTop(rows) + tailMd;
  }
  const bytes = Buffer.byteLength(markdown, "utf8");
  const galleryIndex = renderGalleryIndex({ parts, bucketCases, cases, promptLinks }, lang);
  return {
    markdown,
    bytes,
    keptCount: rows.length,
    droppedCount: top.rows.length - rows.length,
    truncated: rows.length < top.rows.length,
    parts,
    galleryIndex,
  };
}

const enResult = buildReadme("en");
const zhResult = buildReadme("zh");

writeFileSync(path.join(ROOT, "README.md"), enResult.markdown, "utf8");
writeFileSync(path.join(ROOT, "README_zh.md"), zhResult.markdown, "utf8");

// 徽章读的统计快照 + 横幅 SVG（数字随数据走）。
writeFileSync(path.join(ROOT, "data/stats.json"), JSON.stringify(snapshot, null, 2) + "\n", "utf8");
mkdirSync(path.join(ROOT, "assets"), { recursive: true });
writeFileSync(path.join(ROOT, "assets/hero.svg"), renderHeroSvg(snapshot) + "\n", "utf8");

// 画廊文件：写新的，删掉本次没生成的旧 gallery-*.md（分页数变化时的残留）。
const docsDir = path.join(ROOT, "docs");
const written = new Set();
for (const [lang, result] of [["en", enResult], ["zh", zhResult]]) {
  for (const bucket of SEEDANCE_BUCKETS) {
    for (const part of result.parts[bucket]) {
      writeFileSync(path.join(docsDir, part.fileName), part.markdown, "utf8");
      written.add(part.fileName);
    }
  }
  const indexName = galleryIndexFileName(lang);
  writeFileSync(path.join(docsDir, indexName), result.galleryIndex, "utf8");
  written.add(indexName);
}
for (const file of readdirSync(docsDir)) {
  if (/^gallery.*\.md$/.test(file) && !written.has(file)) {
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
console.log(`Stats: ${JSON.stringify(snapshot)}`);
// fitToSizeBudget 仍导出给测试和其他调用方；README 主体已改为按行裁剪。
void fitToSizeBudget;
