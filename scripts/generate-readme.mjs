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
import { readFileSync, writeFileSync, readdirSync, unlinkSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  computeStats,
  sortByHeat,
  collapseSeries,
  renderStatsTable,
  renderTopTable,
  partitionAllPrompts,
  fitToSizeBudget,
  renderGalleryParts,
  bucketLabel,
  githubSlug,
  galleryIndexFileName,
  readmeFileName,
  LANGS,
  SEEDANCE_BUCKETS,
  README_SIZE_BUDGET_BYTES,
  TOP_INLINE_COUNT,
} from "./lib/render.mjs";
import {
  buildStatsSnapshot,
  renderBadges,
  renderHeroSvg,
  renderRetestSpotlight,
  retestHeading,
  renderGalleryIndex,
  LIVE_SITE_URL,
} from "./lib/sections.mjs";
import { loadLibrary, buildTemplateIndex } from "./lib/library.mjs";
import {
  TEMPLATE_DOC_LANGS,
  anchorOf,
  countSkills,
  orderedTemplates,
  renderSkillGrid,
  renderStartHere,
  renderTemplateDoc,
  renderTemplateGrid,
  renderTemplateIndex,
  templateDocLang,
  templatesHeading,
  skillsHeading,
} from "./lib/templates.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadJson(relPath) {
  return JSON.parse(readFileSync(path.join(ROOT, relPath), "utf8"));
}

const casesData = loadJson("data/cases.json");
// 模板库 = data/style-library.json（上游蒸馏导出）叠加 data/templates-local.json（本仓手写），
// 再配 data/case-taxonomy.json（全量 case → 模板 的归类）。
const { library, taxonomy } = loadLibrary(ROOT);
// 站点全量数字与复测花费（data/site.json，人工/脚本刷新）；文件缺失时相关行不渲染、花费只说“花真钱”。
let site = null;
try {
  site = loadJson("data/site.json");
} catch {
  site = null;
}
const retestSpend = site?.retestSpend ?? null;
// README 的 Skill 网格（data/skills.json）；文件缺失时整节不渲染。
let skillsData = null;
try {
  skillsData = loadJson("data/skills.json");
} catch {
  skillsData = null;
}
// 复测样例的产物封面（scripts/fetch-retest-posters.mjs 抽帧），没有就退回纯链接。
const retestPosterFor = (caseObj) => {
  const rel = `assets/retests/${caseObj.slug}.jpg`;
  return existsSync(path.join(ROOT, rel)) ? `./${rel}` : null;
};
const cases = casesData.cases || [];
const templates = library.templates || [];
const categories = library.categories || [];
const casesBySlug = new Map(cases.map((c) => [c.slug, c]));

const stats = computeStats(casesData);
const templateIndex = buildTemplateIndex(templates, taxonomy, cases);
const snapshot = buildStatsSnapshot(stats, templates, categories, site, skillsData ? countSkills(skillsData) : null);
// Top 榜按“系列”折叠：同一作者反复发的同一套 prompt 只留原帖那条；画廊与统计仍是全量。
const series = collapseSeries(cases);
const partition = partitionAllPrompts(cases, TOP_INLINE_COUNT);
const topPartition = partitionAllPrompts(series.kept, TOP_INLINE_COUNT);
const bucketCases = {
  "2.5": partition.v25,
  "2.0": partition.v20,
};
// Skill 格子的封面：coverCases（手填 slug 列表）> 对应模板名下热度最高的案例 > 全库热度最高的案例，取前 4 张拼 2×2。
const topByHeat = sortByHeat(cases);
const skillCoverCases = (skill) => {
  if (Array.isArray(skill.coverCases) && skill.coverCases.length) {
    return skill.coverCases.map((slug) => casesBySlug.get(slug)).filter(Boolean);
  }
  const tplId = skill.templateId || skill.coverTemplateId;
  if (tplId) return templateIndex.byTemplate.get(tplId) || [];
  if (skill.coverCase && casesBySlug.get(skill.coverCase)) return [casesBySlug.get(skill.coverCase)];
  return topByHeat;
};

const AWESOME_BADGE = "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)";

const LANG_LABELS = { en: "English", zh: "中文", ja: "日本語" };
function renderLangSwitch(lang) {
  return LANGS.map((l) => {
    const link = `[${LANG_LABELS[l]}](./${readmeFileName(l)})`;
    return l === lang ? `**${link}**` : link;
  }).join(" | ");
}

const COPY = {
  en: {
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    heroAlt: "Awesome Seedance: verified Seedance prompts, cross-model retests, templates and an agent skill",
    // 一句话卖点 + 数量，数量随数据走；徽章行里的数字另走 shields 动态 JSON，每天自动变。
    tagline: (s) =>
      `**Verified Seedance 2.5 / 2.0 prompt library.** ${s.cases} cases checked against their original posts, ${s.retestRuns} cross-model retests, ${s.templates} reusable templates and ${s.skills} installable AI-video Skills${
        s.siteTotalCases ? `, drawn from goodcase.ai's ${s.siteTotalCases} verified AI cases across video, image, UI and copy` : ""
      }. Synced daily, new cases land every day.`,
    backlink:
      "More verified AI cases with full prompts → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## Contents",
    pillarsHeading: "## Why this list",
    pillars: [
      `**Human-verified against the source.** Every prompt here was checked against the creator's original post. Prompts reverse-engineered from the output video only, with no source and no submission, are rejected outright, per [goodcase.ai's collection standards](https://goodcase.ai/standards) (in force since 2026-08-05).`,
      `**Re-run on a second model.** Most cases have been re-generated on another video model, with the verdict, score and output published. See [Cross-model retests](#-cross-model-retests).`,
      `**Full provenance on every entry.** Author, original post link, publish date, and a heat score, a relative percentile among published cases on the same platform. If it didn't rank, it isn't here.`,
      `**Ships as an installable Agent Skill.** \`npx seedance-prompt-library install\` drops a template library straight into Claude Code / Codex so your agent writes Seedance prompts from proven structures, not guesses.`,
    ],
    topHeading: `## 🔥 Top ${TOP_INLINE_COUNT} by heat`,
    topIntro: (shown) =>
      `The ${shown} hottest cases across all versions. *prompt* opens the full entry in the gallery, *source* opens the creator's original post.`,
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
    contributeHeading: "## How to Contribute",
    contributeBody: [
      "**New prompt cases** go through goodcase.ai's review pipeline so provenance and heat score stay verifiable: submit at [goodcase.ai/submit](https://goodcase.ai/submit) (collection standards: [goodcase.ai/standards](https://goodcase.ai/standards)). Prefer GitHub? Open a pull request that adds one JSON file under [`submissions/`](./submissions/) following [`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json); a maintainer pushes it through the same review, and it lands in `data/` on the next export.",
      "",
      "**Pull requests are welcome** for template fixes and new templates in `data/templates-local.json`, generator and Skill code under `scripts/` and `agents/`, and corrections to English titles or summaries. `README.md`, `README_zh.md`, `docs/` and the Skill reference are generated from `data/`, so please don't hand-edit them: change the source, run `npm test && npm run generate`, and commit the regenerated files in the same PR. See [contributing.md](./contributing.md) for the submission standard, what gets rejected, and how the generator works. This project follows the [code of conduct](./code-of-conduct.md).",
    ].join("\n"),
    ackHeading: "## 🙏 Acknowledgements",
    ackBody: [
      "This project's format and Skill-packaging approach were shaped by:",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - Template-library + installable-Skill + marketplace pattern.",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README-as-gallery with per-entry attribution.",
      "- [goodcase.ai](https://goodcase.ai) - The source of every case, heat score and retest in this repository.",
    ].join("\n"),
    authorHeading: "## 👤 Author",
    authorBody: [
      "**Carl (@卡尔的AI沃茨)** started GoodCase and maintains this list. Six years of large-model R&D at ByteDance, Alibaba and Baidu before turning to AI video, then a run of AI shorts that made it onto Chinese TV: *I Am the Tile Cat* (CCTV), *When the Stars Shine: AI Bonus* (Hunan TV), *I Miss You So Much* (Zhejiang TV) and *Does Birth Decide Fate? I Refuse* (Bilibili), each past a million plays. 500k+ followers across platforms, speaker at WAIC and GDPS, guest lecturer on AI at the Communication University of China.",
      "",
      "Every case here is something he or the GoodCase reviewers checked against the original post. Follow along on [X @aiwarts](https://x.com/aiwarts) or the WeChat official account [卡尔的AI沃茨](https://mp.weixin.qq.com/s/bNtxe27sQfGVig40VCAd_Q) (Chinese). Questions, corrections and collaborations: [carl@goodcase.ai](mailto:carl@goodcase.ai).",
      "",
      "<table><tr><td align=\"center\"><img src=\"https://goodcase.ai/community/feishu-group-qr.png\" width=\"180\" alt=\"GoodCase Feishu group QR code\"><br><sub>Scan to join the GoodCase Feishu group (Chinese): new cases, retest results, template drops.</sub></td></tr></table>",
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
    licenseHeading: "## License & Reuse",
    licenseBody:
      "Code in this repository is open source under the [MIT License](./LICENSE): use it, modify it, build on it, keep the license notice. Curation is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); prompts and media stay with their creators. Details above under [Copyright & Takedown Notice](#copyright--takedown-notice).",
  },
  zh: {
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    heroAlt: "Awesome Seedance：已验证的 Seedance 提示词、跨模型复测、模板与 Agent Skill",
    tagline: (s) =>
      `**Seedance 2.5 / 2.0 提示词验证库。** ${s.cases} 条案例逐条核对过原帖，${s.retestRuns} 次跨模型复测，${s.templates} 个可复用模板，${s.skills} 个可安装的 AI 视频 Skill${
        s.siteTotalCases ? `，背后是 goodcase.ai 横跨视频、图像、UI、文案的 ${s.siteTotalCases} 条已验证 AI 案例` : ""
      }。每天同步，每天都有新案例进来。`,
    backlink:
      "更多经过验证、带完整 Prompt 的 AI 案例 → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## 目录",
    pillarsHeading: "## 为什么值得收藏这个仓库",
    pillars: [
      "**每条 prompt 都人工核对过与原帖一致。** 只靠成片视频反推出来的 prompt 一律不收，没有原帖来源不收，这是 [goodcase.ai 的收录标准](https://goodcase.ai/standards)（2026-08-05 起生效的红线）。",
      "**在第二个模型上重跑过。** 大部分案例都拿到另一个视频模型上重新生成，结论、评分和产物都公开，见[跨模型复测](#-跨模型复测)。",
      "**每条都带完整溯源。** 作者、原帖链接、发布时间、热度分，热度是同平台已发布案例里的相对分位，上不了榜就不收。",
      "**自带可安装的 Agent Skill。** `npx seedance-prompt-library install` 一行装进 Claude Code / Codex，agent 用真实验证过的模板结构写 Seedance prompt，不是瞎编。",
    ],
    topHeading: `## 🔥 热度 Top ${TOP_INLINE_COUNT}`,
    topIntro: (shown) =>
      `全部版本里热度最高的 ${shown} 条。*完整 prompt* 跳到画廊里的完整条目，*原帖* 跳到创作者原帖。`,
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
    contributeHeading: "## 如何投稿",
    contributeBody: [
      "**新案例**走 goodcase.ai 的审核管线，这样溯源和热度分才可核验：投稿入口 [goodcase.ai/submit](https://goodcase.ai/submit)，收录标准见 [goodcase.ai/standards](https://goodcase.ai/standards)。更习惯 GitHub 的话，提一个 PR，往 [`submissions/`](./submissions/) 下按 [`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json) 加一个 JSON 文件，维护者会把它推进同一套审核，通过后下次导出就进 `data/`。",
      "",
      "**欢迎 PR** 修 `data/templates-local.json` 里的模板或补新模板、`scripts/` 与 `agents/` 下的生成器和 Skill 代码，以及英文标题和摘要的纠错。`README.md`、`README_zh.md`、`docs/` 和 Skill 参考文件都由 `data/` 生成，请不要手改：改源头，跑 `npm test && npm run generate`，把重新生成的文件放进同一个 PR。投稿标准、拒收规则和生成器说明见 [contributing.md](./contributing.md)，社区行为准则见 [code-of-conduct.md](./code-of-conduct.md)。",
    ].join("\n"),
    ackHeading: "## 🙏 致谢",
    ackBody: [
      "这个项目的格式和 Skill 打包方式参考了：",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - 模板库 + 可安装 Skill + marketplace 的路子。",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README 即画廊、逐条署名的做法。",
      "- [goodcase.ai](https://goodcase.ai) - 本仓库全部案例、热度分和复测的数据来源。",
    ].join("\n"),
    authorHeading: "## 👤 作者",
    authorBody: [
      "**卡尔（@卡尔的AI沃茨）**，GoodCase 项目发起人，本仓库维护者。做过 6 年大模型算法研发，先后在字节、阿里、百度，后来转做 AI 视频，拍了几支上过电视的 AI 短片：央视《我是瓦猫》、湖南卫视《群星闪耀时 AI 番外》、浙江卫视《我好想你》、B 站《出身决定命运？我不服》，单片播放都过了百万。全平台粉丝 50 万+，WAIC、GDPS 等 AI 峰会演讲嘉宾，中国传媒大学 AI 专题特邀讲师。",
      "",
      "这里的每一条案例都是他和 GoodCase 审核团队对着原帖核过的。公众号 [卡尔的AI沃茨](https://mp.weixin.qq.com/s/bNtxe27sQfGVig40VCAd_Q)、X [@aiwarts](https://x.com/aiwarts)。提问、纠错、合作：[carl@goodcase.ai](mailto:carl@goodcase.ai)。",
      "",
      "<table><tr><td align=\"center\"><img src=\"https://goodcase.ai/community/feishu-group-qr.png\" width=\"180\" alt=\"GoodCase 飞书群二维码\"><br><sub>扫码进 GoodCase 飞书群：新案例、复测结果、模板更新都先发在群里。</sub></td></tr></table>",
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
    licenseHeading: "## 许可与复用",
    licenseBody:
      "本仓库代码基于 [MIT 许可证](./LICENSE)开源：可以自由使用、修改、分发并在此基础上构建，保留许可声明即可。策展内容为 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)；prompt 与媒体版权归原作者。详见上方[版权与下架政策](#版权与下架政策)。",
  },
  ja: {
    title: `# Awesome Seedance ${AWESOME_BADGE}`,
    heroAlt: "Awesome Seedance：検証済み Seedance プロンプト、クロスモデル再テスト、テンプレート、Agent Skill",
    tagline: (s) =>
      `**検証済み Seedance 2.5 / 2.0 プロンプトライブラリ。** ${s.cases} ケースをすべて元投稿と照合、${s.retestRuns} 回のクロスモデル再テスト、${s.templates} 個の再利用可能テンプレート、${s.skills} 個のインストール可能な AI 動画 Skill${
        s.siteTotalCases ? `。母体は goodcase.ai の動画・画像・UI・コピーにまたがる ${s.siteTotalCases} 件の検証済み AI ケース` : ""
      }。毎日同期し、新しいケースが毎日追加されます。`,
    backlink:
      "プロンプト全文付きの検証済み AI ケースをもっと見る → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)",
    contentsHeading: "## 目次",
    pillarsHeading: "## このリストの特徴",
    pillars: [
      "**元投稿と人手で照合済み。** ここにあるプロンプトはすべて作者の元投稿と突き合わせています。出力動画から逆算しただけで出典も投稿もないプロンプトは、[goodcase.ai の収録基準](https://goodcase.ai/standards)（2026-08-05 施行）に従い一律で却下します。",
      "**別モデルで再生成済み。** 大半のケースは別の動画モデルで再生成し、判定・スコア・出力を公開しています。[クロスモデル再テスト](#-クロスモデル再テスト)を参照。",
      "**全エントリに完全な出典。** 作者、元投稿リンク、公開日、そして同一プラットフォーム上の公開ケースにおける相対パーセンタイルであるヒートスコア。ランクインしなかったものはここにありません。",
      "**インストール可能な Agent Skill として提供。** `npx seedance-prompt-library install` でテンプレートライブラリがそのまま Claude Code / Codex に入り、エージェントは当て推量ではなく実証済みの構造から Seedance プロンプトを書きます。",
    ],
    topHeading: `## 🔥 ヒート Top ${TOP_INLINE_COUNT}`,
    topIntro: (shown) =>
      `全バージョンでヒートが高い ${shown} 件。*プロンプト* はギャラリーの完全なエントリ、*元投稿* は作者のオリジナル投稿を開きます。`,
    allHeading: "## 🎬 全プロンプト",
    allIntro: (total) =>
      `全 ${total} ケースのプロンプト全文は \`docs/\` 配下のギャラリーにあります（GitHub が描画できるようページ分割）。[ギャラリー索引](./docs/gallery.ja.md)から入るか、バージョンへ直接ジャンプ:`,
    galleryLink: (label, count, parts) => {
      const partLinks =
        parts.length === 1
          ? `[全ギャラリー](./docs/${parts[0].fileName})`
          : parts.map((p) => `[Part ${p.partNo}（${p.rangeStart}–${p.rangeEnd} 件目）](./docs/${p.fileName})`).join(" · ");
      return `- ${label} - ${count} 件: ${partLinks}。`;
    },
    browseHeading: "## 🌐 goodcase.ai で閲覧",
    browseBody: [
      `この README は索引です。フル機能は [goodcase.ai](${LIVE_SITE_URL}) にあります: 全ケース横断検索、ヒートランキング、安定度ランキング、出力動画付きのケース別再テスト記録、そしてケースから育ったインストール可能な Skill。ここの各エントリは goodcase.ai のレコードにリンクしています。`,
      "",
      `[<img src="./assets/goodcase-seedance-gallery.png" width="800" alt="goodcase.ai 上の Seedance ケース">](${LIVE_SITE_URL})`,
    ].join("\n"),
    statsHeading: "## 統計",
    statsNote: "各ケースは 1 回だけ数えます。複数の Seedance バージョンが付いたケースは最上位バージョンに計上します。",
    contributeHeading: "## コントリビュート",
    contributeBody: [
      "**新しいプロンプトケース**は出典とヒートスコアを検証可能に保つため goodcase.ai のレビューパイプラインを通します: [goodcase.ai/submit](https://goodcase.ai/submit) から投稿（収録基準: [goodcase.ai/standards](https://goodcase.ai/standards)）。GitHub 派なら、[`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json) に従って [`submissions/`](./submissions/) に JSON を 1 件追加するプルリクエストを開いてください。メンテナが同じレビューに回し、次回のエクスポートで `data/` に入ります。",
      "",
      "**プルリクエスト歓迎**: `data/templates-local.json` のテンプレート修正や追加、`scripts/` と `agents/` のジェネレータ・Skill コード、英語タイトルや要約の訂正。`README.md`、`README_zh.md`、`README_ja.md`、`docs/`、Skill リファレンスは `data/` から生成されるので手で編集しないでください。ソースを直し、`npm test && npm run generate` を実行し、再生成されたファイルを同じ PR に含めます。投稿基準、却下されるもの、ジェネレータの仕組みは [contributing.md](./contributing.md) を参照。本プロジェクトは[行動規範](./code-of-conduct.md)に従います。",
    ].join("\n"),
    ackHeading: "## 🙏 謝辞",
    ackBody: [
      "本プロジェクトのフォーマットと Skill のパッケージングは以下を参考にしました:",
      "",
      "- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - テンプレートライブラリ + インストール可能 Skill + マーケットプレイスのパターン。",
      "- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README をギャラリーにし、エントリごとに出典を付ける方式。",
      "- [goodcase.ai](https://goodcase.ai) - 本リポジトリの全ケース、ヒートスコア、再テストの出所。",
    ].join("\n"),
    authorHeading: "## 👤 作者",
    authorBody: [
      "**Carl（@卡尔的AI沃茨）**、GoodCase の発起人でこのリストのメンテナー。ByteDance、Alibaba、Baidu で 6 年間大規模モデルの研究開発に携わった後、AI 動画に転向。CCTV『我是瓦猫』、湖南テレビ『群星閃耀時 AI 番外』、浙江テレビ『我好想你』、Bilibili『出身決定命運？我不服』など、テレビで放送された AI 短編を制作し、いずれも再生 100 万回超。全プラットフォームで 50 万人以上のフォロワー、WAIC・GDPS などの AI サミットで登壇、中国伝媒大学 AI 特別講師。",
      "",
      "ここにあるケースはすべて、本人と GoodCase のレビュアーが元投稿と照合したものです。[X @aiwarts](https://x.com/aiwarts) と WeChat 公式アカウント [卡尔的AI沃茨](https://mp.weixin.qq.com/s/bNtxe27sQfGVig40VCAd_Q)（中国語）で発信中。質問、訂正、コラボレーション: [carl@goodcase.ai](mailto:carl@goodcase.ai)。",
      "",
      "<table><tr><td align=\"center\"><img src=\"https://goodcase.ai/community/feishu-group-qr.png\" width=\"180\" alt=\"GoodCase Feishu グループ QR コード\"><br><sub>GoodCase の Feishu グループ（中国語）に参加: 新しいケース、再テスト結果、テンプレート更新が最初に届きます。</sub></td></tr></table>",
    ].join("\n"),
    copyrightHeading: "## 著作権と削除申請",
    copyrightBody: [
      "本リポジトリには 3 種類の素材があり、それぞれ異なる条件で提供されます。",
      "",
      "**コード**（ジェネレータスクリプト、Agent Skill、ツール）は MIT License で公開しています。`LICENSE` ファイルを参照。MIT はコードのみを対象とします。",
      "",
      "**キュレーション**（選定、構成、統計、テンプレート抽出、私たちが書いた要約）は [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja) です。*awesome-seedance / goodcase.ai* のクレジットを付けて再利用できます。",
      "",
      "**プロンプトとメディア**の著作権は元の作者に帰属します。プロンプト本文、作者の要約、ポスター画像、動画参照は、記録と学習のために公開投稿から引用したものです。各エントリは元の出典と goodcase.ai のレコードにリンクしています。元投稿が許す範囲を超えて、プロンプトやメディアそのものに関するライセンスを付与するものではありません。",
      "",
      "**削除の手順。** 権利者でエントリの削除や訂正を希望する場合は、そのエントリの slug（goodcase.ai の URL から取得）と元の出典リンクを添えて GitHub issue を開くか、goodcase.ai に直接ご連絡ください。元投稿と照合し、確認できしだい対応します。エントリは `data/` から削除され、次回の再生成ですべての生成ファイルから消えます。",
    ].join("\n"),
    starHistory: "## Star History",
    licenseHeading: "## ライセンスと再利用",
    licenseBody:
      "本リポジトリのコードは [MIT License](./LICENSE) のオープンソースです。ライセンス表記を残せば自由に使用・改変・配布・派生できます。キュレーションは [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja)、プロンプトとメディアの権利は作者に帰属します。詳細は上の[著作権と削除申請](#著作権と削除申請)を参照。",
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

  // 跨节锚点一律从当前语言的标题算出来，不硬编码（中/日文标题的锚点和英文不同）。
  const anchors = {
    templates: anchorOf(templatesHeading(lang)),
    skills: anchorOf(skillsHeading(lang)),
    top: anchorOf(c.topHeading),
    all: anchorOf(c.allHeading),
    retests: anchorOf(retestHeading(lang)),
  };

  // 每个 section: { heading, body: string[] }。目录之后第一节是新手路径，然后模板、Skill。
  const sections = [];
  const pushRendered = (md) => {
    const [heading, ...rest] = md.split("\n");
    sections.push({ heading, body: rest.join("\n").trim().split("\n") });
  };
  pushRendered(
    renderStartHere(lang, anchors, {
      templates: orderedTemplates(library).length,
      skills: skillsData ? countSkills(skillsData) : snapshot.skills,
      cases: cases.length,
    })
  );
  pushRendered(renderTemplateGrid(library, lang, templateIndex));
  if (skillsData) pushRendered(renderSkillGrid(skillsData, lang, casesBySlug, { coverCasesFor: skillCoverCases }));

  // Top 榜是唯一可裁剪的部分：超预算时从表尾裁行，标题/说明按实际行数回填。
  const top = renderTopTable(topPartition.top, lang, {
    startRank: 1,
    promptLinkFor: (caseObj) => promptLinks.get(caseObj.slug) || null,
  });

  const galleryBody = [c.allIntro(cases.length), ""];
  for (const bucket of SEEDANCE_BUCKETS) {
    const list = bucketCases[bucket];
    if (!list.length) continue;
    galleryBody.push(c.galleryLink(bucketLabel(bucket, lang), list.length, parts[bucket]));
  }

  // 复测聚焦区：meta.retests 缺失或 totalRuns 为 0 时返回 null，整节不渲染。
  const spotlight = renderRetestSpotlight(cases, casesData.meta, lang, { spend: retestSpend, retestPosterFor });
  const spotlightSection = spotlight
    ? [{ heading: spotlight.split("\n")[0], body: spotlight.split("\n").slice(1).join("\n").trim().split("\n") }]
    : [];

  const tailSections = [
    ...spotlightSection,
    { heading: c.allHeading, body: galleryBody },
    { heading: c.browseHeading, body: [c.browseBody] },
    // awesome-lint 的 list-item 规则要求列表项以链接开头，卖点写成段落而不是列表。
    { heading: c.pillarsHeading, body: c.pillars.flatMap((p) => [p, ""]).slice(0, -1) },
    { heading: c.statsHeading, body: [renderStatsTable(stats, lang, site), "", c.statsNote] },
    { heading: c.contributeHeading, body: [c.contributeBody] },
    { heading: c.ackHeading, body: [c.ackBody] },
    { heading: c.authorHeading, body: [c.authorBody] },
    { heading: c.copyrightHeading, body: [c.copyrightBody] },
    { heading: c.starHistory, body: [renderStarHistory()] },
    { heading: c.licenseHeading, body: [c.licenseBody] },
  ];

  // awesome-lint 的 awesome-toc 要求目录是第一个小节。
  // 版权、Star History、许可三节留在正文里，但不进目录：读者不需要这三项的快速跳转。
  const tocExcluded = new Set([c.copyrightHeading, c.starHistory, c.licenseHeading]);
  const allHeadings = [
    c.contentsHeading,
    ...sections.map((s) => s.heading),
    c.topHeading,
    ...tailSections.map((s) => s.heading).filter((h) => !tocExcluded.has(h)),
  ];

  // 每个 section 渲染成恰好以一个换行结尾的块，块之间用一个空行分隔。
  const renderSection = (s) => {
    const md = [s.heading, "", ...s.body].join("\n").replace(/\n+$/, "");
    return `${md}\n`;
  };

  const head = [];
  head.push(renderLangSwitch(lang));
  head.push("");
  head.push(`[<img src="./assets/hero.svg" width="100%" alt="${c.heroAlt}">](${LIVE_SITE_URL})`);
  head.push("");
  head.push(c.title);
  head.push("");
  head.push(c.tagline(snapshot));
  head.push("");
  head.push(renderBadges(lang, { all: anchors.all, retests: spotlight ? anchors.retests : null, templates: anchors.templates, skills: anchors.skills }));
  head.push("");
  head.push(c.backlink);
  head.push("");
  head.push(renderContents(allHeadings.slice(1), lang));
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
  const galleryIndex = renderGalleryIndex(
    { parts, bucketCases, cases, promptLinks, templatesAnchor: anchors.templates, templateIndexHref: `./templates/${templateDocLang(lang)}/README.md` },
    lang
  );
  return {
    markdown,
    bytes,
    keptCount: rows.length,
    droppedCount: top.rows.length - rows.length,
    truncated: rows.length < top.rows.length,
    parts,
    galleryIndex,
    templatesAnchor: anchors.templates,
  };
}

const results = Object.fromEntries(LANGS.map((lang) => [lang, buildReadme(lang)]));
const enResult = results.en;
for (const lang of LANGS) {
  writeFileSync(path.join(ROOT, readmeFileName(lang)), results[lang].markdown, "utf8");
}

// 徽章读的统计快照 + 横幅 SVG（数字随数据走）。
writeFileSync(path.join(ROOT, "data/stats.json"), JSON.stringify(snapshot, null, 2) + "\n", "utf8");
mkdirSync(path.join(ROOT, "assets"), { recursive: true });
writeFileSync(path.join(ROOT, "assets/hero.svg"), renderHeroSvg(snapshot) + "\n", "utf8");

// 画廊文件：写新的，删掉本次没生成的旧 gallery-*.md（分页数变化时的残留）。
const docsDir = path.join(ROOT, "docs");
const written = new Set();
for (const [lang, result] of Object.entries(results)) {
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

// 模板文件：docs/templates/{zh,en}/<id>.md + 每种语言一个 README.md 索引；删掉库里已不存在的旧模板文件。
const ordered = orderedTemplates(library);
for (const lang of TEMPLATE_DOC_LANGS) {
  const dir = path.join(docsDir, "templates", lang);
  mkdirSync(dir, { recursive: true });
  const readmeAnchor = results[lang].templatesAnchor;
  const writtenDocs = new Set(["README.md"]);
  writeFileSync(path.join(dir, "README.md"), renderTemplateIndex(library, lang, templateIndex, readmeAnchor), "utf8");
  ordered.forEach((tp, i) => {
    const md = renderTemplateDoc(tp, lang, {
      cases: templateIndex.byTemplate.get(tp.id) || [],
      prev: ordered[i - 1] || null,
      next: ordered[i + 1] || null,
      readmeAnchor,
    });
    writeFileSync(path.join(dir, `${tp.id}.md`), md, "utf8");
    writtenDocs.add(`${tp.id}.md`);
  });
  for (const file of readdirSync(dir)) {
    if (file.endsWith(".md") && !writtenDocs.has(file)) {
      unlinkSync(path.join(dir, file));
      console.log(`removed stale templates/${lang}/${file}`);
    }
  }
}

const describe = (r) =>
  `${r.bytes} bytes${r.truncated ? ` (top table truncated, dropped ${r.droppedCount} rows)` : ""}`;
for (const lang of LANGS) console.log(`${readmeFileName(lang)}: ${describe(results[lang])}`);
for (const bucket of SEEDANCE_BUCKETS) {
  console.log(
    `gallery ${bucketLabel(bucket, "en")}: ${bucketCases[bucket].length} cases across ${enResult.parts[bucket].length} part(s)`
  );
}
console.log(`Stats: ${JSON.stringify(snapshot)}`);
const filedCount = cases.length - templateIndex.unassigned.length;
console.log(`Templates: ${ordered.length} (${filedCount} cases filed, ${templateIndex.unassigned.length} not yet filed; run \`npm run taxonomy:todo\` to list them)`);
if (series.collapsed.length) {
  console.log(`Series collapsed in Top (${series.collapsed.length}): ${series.collapsed.map((x) => `${x.slug} → ${x.keptSlug}`).join("; ")}`);
}
// fitToSizeBudget 仍导出给测试和其他调用方；README 主体已改为按行裁剪。
void fitToSizeBudget;
