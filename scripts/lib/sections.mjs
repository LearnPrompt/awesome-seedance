// README 新增区块的渲染器（2026-09-13 对标 awesome-gpt-image-2 的最后一轮修改）：
// 横幅 SVG、动态徽章、Quick Links、复测聚焦区、分类总览、模板紧凑表、画廊总览页。
// 和 render.mjs 一样：只吃数据吐字符串，不碰文件系统。
import {
  renderTable,
  displayTitle,
  displaySummary,
  sortByHeat,
  thumbCell,
  githubSlug,
  aggregateRetestsByModel,
  classifySeedance,
  bucketShortLabel,
  galleryIndexFileName,
  THUMB_WIDTH,
} from "./render.mjs";

const REPO = "LearnPrompt/awesome-seedance";
const RAW_STATS_URL = `https://raw.githubusercontent.com/${REPO}/main/data/stats.json`;
export const LIVE_SITE_URL = "https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance";

function assertLang(lang) {
  if (lang !== "en" && lang !== "zh") throw new Error(`Unsupported lang: ${lang}`);
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------------------------------------------------------------------------
// 统计快照 + 动态徽章
// ---------------------------------------------------------------------------

/**
 * data/stats.json 的内容：shields.io 的 dynamic/json 徽章直接读 raw.githubusercontent 上的这个文件，
 * 所以 README 顶部的数字随每天的数据同步自动变，不用重新生成徽章 URL。
 */
export function buildStatsSnapshot(stats, templates, categories) {
  return {
    cases: stats.total,
    seedance25: stats.v25Count,
    seedance20: stats.v20Count,
    unversioned: stats.unversionedCount,
    authors: stats.authorCount,
    retestRuns: stats.retestRuns,
    retestCases: stats.retestCases,
    stabilityCases: stats.stabilityCases,
    stabilityAvg: stats.stabilityAvg,
    templates: templates.length,
    templateCategories: categories.length,
    lastUpdated: stats.lastUpdated,
  };
}

function dynamicBadge(query, label, color, href) {
  const url =
    `https://img.shields.io/badge/dynamic/json?url=${encodeURIComponent(RAW_STATS_URL)}` +
    `&query=${encodeURIComponent(query)}&label=${encodeURIComponent(label)}&color=${color}&style=flat-square`;
  return `[![${label}](${url})](${href})`;
}

/** 顶部徽章行：案例数 / 复测次数 / 模板数 / 最近更新 走动态 JSON，Skill 版本走 npm，其余静态。 */
export function renderBadges(lang) {
  assertLang(lang);
  const en = lang === "en";
  return [
    dynamicBadge("$.cases", en ? "cases" : "案例", "e8541e", "#-all-prompts"),
    dynamicBadge("$.retestRuns", en ? "cross-model retests" : "跨模型复测", "111111", "#-cross-model-retests"),
    dynamicBadge("$.templates", en ? "templates" : "模板", "111111", "#-prompt-templates"),
    dynamicBadge("$.lastUpdated", en ? "updated" : "更新", "555555", LIVE_SITE_URL),
    `[![npm](https://img.shields.io/npm/v/seedance-prompt-library?label=${encodeURIComponent(en ? "agent skill" : "Agent Skill")}&color=111111&style=flat-square)](https://www.npmjs.com/package/seedance-prompt-library)`,
    "[![License: MIT (code)](https://img.shields.io/badge/code-MIT-lightgrey.svg?style=flat-square)](./LICENSE)",
    "[![Content: CC BY 4.0 (curation)](https://img.shields.io/badge/curation-CC%20BY%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by/4.0/)",
    "[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-lightgrey.svg?style=flat-square)](./contributing.md)",
  ].join(" ");
}

// ---------------------------------------------------------------------------
// 横幅 SVG（goodcase.ai 视觉：米白底、黑字、单一橙色强调、1px 边框、0 圆角、Swiss grid）
// ---------------------------------------------------------------------------

export function renderHeroSvg(snapshot) {
  const W = 1200;
  const H = 400;
  const bg = "#F4F1EA";
  const ink = "#111111";
  const accent = "#E8541E";
  const muted = "#6B675F";
  const sans = "Helvetica Neue, Helvetica, Arial, 'PingFang SC', sans-serif";
  const mono = "SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";
  const cells = [
    { n: snapshot.cases, label: "VERIFIED CASES" },
    { n: snapshot.retestRuns, label: "CROSS-MODEL RETESTS" },
    { n: snapshot.templates, label: "PROMPT TEMPLATES" },
    { n: 1, label: "AGENT SKILL" },
  ];
  const cellW = (W - 80) / cells.length;
  const cellY = 268;
  const cellH = 92;
  const cellSvg = cells
    .map((c, i) => {
      const x = 40 + i * cellW;
      return [
        `<rect x="${x}" y="${cellY}" width="${cellW}" height="${cellH}" fill="${bg}" stroke="${ink}" stroke-width="1"/>`,
        `<text x="${x + 20}" y="${cellY + 48}" font-family="${sans}" font-size="40" font-weight="700" fill="${ink}">${escapeXml(c.n ?? "-")}</text>`,
        `<text x="${x + 20}" y="${cellY + 74}" font-family="${mono}" font-size="12" letter-spacing="1.5" fill="${muted}">${escapeXml(c.label)}</text>`,
      ].join("");
    })
    .join("");
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Awesome Seedance: ${snapshot.cases} verified cases, ${snapshot.retestRuns} cross-model retests, ${snapshot.templates} prompt templates, 1 agent skill">`,
    `<rect width="${W}" height="${H}" fill="${bg}"/>`,
    // 网格线（Swiss grid 的暗示，很淡）
    ...Array.from({ length: 12 }, (_, i) => `<line x1="${(i * W) / 12}" y1="0" x2="${(i * W) / 12}" y2="${H}" stroke="${ink}" stroke-opacity="0.05" stroke-width="1"/>`),
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="${ink}" stroke-width="1"/>`,
    // 顶栏
    `<rect x="40" y="36" width="12" height="12" fill="${accent}"/>`,
    `<text x="62" y="47" font-family="${mono}" font-size="13" letter-spacing="2" fill="${ink}">GOODCASE.AI · OPEN DATA</text>`,
    `<text x="${W - 40}" y="47" text-anchor="end" font-family="${mono}" font-size="13" letter-spacing="2" fill="${muted}">SYNCED ${escapeXml(snapshot.lastUpdated || "")} · DAILY</text>`,
    `<line x1="40" y1="64" x2="${W - 40}" y2="64" stroke="${ink}" stroke-width="1"/>`,
    // 标题
    `<text x="40" y="150" font-family="${sans}" font-size="84" font-weight="800" letter-spacing="-3" fill="${ink}">Awesome <tspan fill="${accent}">Seedance</tspan></text>`,
    `<text x="40" y="196" font-family="${sans}" font-size="24" fill="${ink}">Verified Seedance 2.5 / 2.0 video prompts, each checked against its original post,</text>`,
    `<text x="40" y="228" font-family="${sans}" font-size="24" fill="${ink}">then re-run on a second model so you can see which ones actually hold up.</text>`,
    cellSvg,
    `<text x="40" y="${H - 18}" font-family="${mono}" font-size="11" letter-spacing="1.5" fill="${muted}">github.com/${REPO}</text>`,
    `<text x="${W - 40}" y="${H - 18}" text-anchor="end" font-family="${mono}" font-size="11" letter-spacing="1.5" fill="${muted}">npx seedance-prompt-library install</text>`,
    `</svg>`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Quick Links：和 Contents 的分工——Contents 是本页章节，Quick Links 是带数量的资产入口。
// ---------------------------------------------------------------------------

export function renderQuickLinks({ parts, bucketCases, templates, categories, stats }, lang) {
  assertLang(lang);
  const en = lang === "en";
  const lines = [];
  lines.push(en ? "## Quick Links" : "## 快速入口");
  lines.push("");
  lines.push(
    en
      ? "Jump straight to the assets. The Contents list below is the section map of this page."
      : "直接跳到资产。下面的目录是本页章节地图。"
  );
  lines.push("");
  lines.push(
    `- [${en ? "Gallery index" : "画廊总览"}](./docs/${galleryIndexFileName(lang)}) - ${
      en ? `all ${stats.total} cases with full prompts, every page in one place.` : `全部 ${stats.total} 条案例（含完整 prompt），所有分页一处可达。`
    }`
  );
  for (const bucket of ["2.5", "2.0", "unspecified"]) {
    const list = bucketCases[bucket];
    if (!list || !list.length) continue;
    const label = bucket === "unspecified" ? (en ? "Seedance (version unspecified)" : "Seedance（未标版本）") : `Seedance ${bucket}`;
    for (const p of parts[bucket]) {
      const range = p.totalParts > 1 ? (en ? `cases ${p.rangeStart}–${p.rangeEnd}` : `第 ${p.rangeStart}–${p.rangeEnd} 条`) : en ? `${list.length} cases` : `${list.length} 条`;
      const partTag = p.totalParts > 1 ? (en ? `, part ${p.partNo}/${p.totalParts}` : `，第 ${p.partNo}/${p.totalParts} 页`) : "";
      lines.push(`- [${label}${partTag}](./docs/${p.fileName}) - ${range}.`);
    }
  }
  lines.push(
    `- [${en ? "Prompt templates" : "Prompt 模板"}](#-prompt-templates) - ${
      en ? `${templates.length} reusable structures in ${categories.length} categories.` : `${categories.length} 类共 ${templates.length} 个可复用结构。`
    }`
  );
  lines.push(
    `- [${en ? "Agent Skill" : "Agent Skill"}](./agents/skills/seedance-prompt-library/) - ${
      en ? "`npx seedance-prompt-library install` for Claude Code / Codex." : "`npx seedance-prompt-library install` 装进 Claude Code / Codex。"
    }`
  );
  lines.push(
    `- [${en ? "Live site on goodcase.ai" : "goodcase.ai 在线站"}](${LIVE_SITE_URL}) - ${
      en ? "search, heat leaderboard, stability ranking, retest logs." : "搜索、热度榜、稳定度榜、复测记录。"
    }`
  );
  lines.push(`- [${en ? "Contributing" : "投稿与贡献"}](./contributing.md) - ${en ? "how to submit a case or open a PR." : "怎么投案例、怎么提 PR。"}`);
  lines.push(`- [${en ? "License" : "许可证"}](#license) - ${en ? "MIT code, CC BY 4.0 curation, prompts stay with their creators." : "代码 MIT，策展 CC BY 4.0，prompt 版权归原作者。"}`);
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// 🔁 复测聚焦区：往前提到 Featured 之前。说明我们是谁、复测了什么、结果如何、钱和赞助。
// ---------------------------------------------------------------------------

const VERDICT_LABEL = {
  reproduced: { icon: "✅", en: "reproduced", zh: "复现" },
  degraded: { icon: "⚠️", en: "degraded", zh: "降级" },
  failed: { icon: "❌", en: "failed", zh: "失败" },
  inconclusive: { icon: "➖", en: "inconclusive", zh: "不确定" },
};

function verdictCounts(cases) {
  const counts = { reproduced: 0, degraded: 0, failed: 0, inconclusive: 0 };
  for (const c of cases) {
    for (const r of c.retests || []) {
      const key = VERDICT_LABEL[r.verdict] ? r.verdict : "inconclusive";
      counts[key] += 1;
    }
  }
  return counts;
}

/** 挑复测样例：热度最高的 2 条复现 + 1 条降级/失败，让读者同时看到成功和不成功。 */
export function pickRetestShowcase(cases, count = 3) {
  const withRetest = sortByHeat(cases).filter((c) => c.retestSummary && c.retestSummary.latest && c.retestSummary.latest.artifactUrl);
  const ok = withRetest.filter((c) => c.retestSummary.latest.verdict === "reproduced");
  const notOk = withRetest.filter((c) => c.retestSummary.latest.verdict !== "reproduced");
  const picked = [...ok.slice(0, Math.max(1, count - 1)), ...notOk.slice(0, 1)].slice(0, count);
  if (picked.length < count) {
    for (const c of withRetest) {
      if (picked.length >= count) break;
      if (!picked.includes(c)) picked.push(c);
    }
  }
  return picked;
}

export function renderRetestSpotlight(cases, meta, lang, opts = {}) {
  assertLang(lang);
  const en = lang === "en";
  const retestsMeta = meta && meta.retests;
  if (!retestsMeta || !retestsMeta.totalRuns) return null;
  const perModel = aggregateRetestsByModel(cases);
  if (perModel.size === 0) return null;
  const counts = verdictCounts(cases);
  const runs = retestsMeta.totalRuns;
  const casesWith = retestsMeta.casesWithRetests || 0;
  const screenshot = opts.screenshot || "./assets/goodcase-retest-evidence.png";

  const lines = [];
  lines.push(en ? "## 🔁 Cross-model retests" : "## 🔁 跨模型复测");
  lines.push("");
  lines.push(
    en
      ? `**As far as we know, this is the first public prompt library that re-runs its video prompts on a second model at scale and publishes the result either way.** ${casesWith} of the cases here have been re-run (${runs} runs so far), each with a verdict, a judge score and the generated output. A prompt that only ever worked once, for its author, on one model, is a screenshot; a prompt that survives a re-run is a method.`
      : `**据我们所知，这是第一个把视频提示词批量拿到第二个模型上重跑、成败都公开的提示词库。** 这里已有 ${casesWith} 条案例被重跑过（累计 ${runs} 次），每次都带结论、评分和生成产物。只在作者手里、只在一个模型上成功过一次的 prompt 是截图；能扛住重跑的 prompt 才是方法。`
  );
  lines.push("");
  const headers = en ? ["Model", "Runs", "Reproduction rate"] : ["模型", "次数", "复现率"];
  const rows = Array.from(perModel.entries())
    .sort((a, b) => b[1].runs - a[1].runs)
    .map(([model, { runs: n, reproduced }]) => [model, String(n), n > 0 ? `${Math.round((reproduced / n) * 100)}%` : "-"]);
  lines.push(renderTable(headers, rows));
  lines.push("");
  const verdictLine = ["reproduced", "degraded", "failed"]
    .map((k) => `${VERDICT_LABEL[k].icon} ${counts[k]} ${VERDICT_LABEL[k][lang]}`)
    .join(" · ");
  lines.push(
    en
      ? `Verdicts across all runs: ${verdictLine}. Runs without a final score show as \`score n/a\`. Per-case verdicts, scores and output videos are on each case's goodcase.ai page; the model labels and batch dates are explained under [Statistics](#statistics).`
      : `全部复测的结论分布：${verdictLine}。没有终评分的记录显示为“无评分”。每条案例的结论、评分和产出视频都在它的 goodcase.ai 页面上；模型标签和批次日期的说明见[统计](#统计)。`
  );
  lines.push("");

  // 样例对比表：原作封面 vs 复测产物
  const showcase = pickRetestShowcase(cases, 3);
  if (showcase.length) {
    lines.push(en ? "**Same prompt, second model.** Three examples, including one that did not hold up:" : "**同一段 prompt，换一个模型。** 三个样例，其中一个没扛住：");
    lines.push("");
    const h = en ? ["Case", "Original (Seedance)", "Retest", "Verdict"] : ["案例", "原作（Seedance）", "复测", "结论"];
    const r = showcase.map((c) => {
      const latest = c.retestSummary.latest;
      const v = VERDICT_LABEL[latest.verdict] || VERDICT_LABEL.inconclusive;
      const score = latest.finalScore != null && latest.finalScore !== "" ? (en ? `score ${latest.finalScore}` : `${latest.finalScore} 分`) : en ? "score n/a" : "无评分";
      const title = displayTitle(c, lang);
      return [
        `[${title}](${c.goodcaseUrl})<br>${bucketShortLabel(classifySeedance(c), lang)} · ${en ? "heat" : "热度"} ${c.heatScore ?? "-"}`,
        thumbCell(c, title, 160),
        `${latest.model}<br>[${en ? "▶ output video" : "▶ 复测视频"}](${latest.artifactUrl})`,
        `${v.icon} ${v[lang]} (${score})`,
      ];
    });
    lines.push(renderTable(h, r));
    lines.push("");
  }

  lines.push(`[<img src="${screenshot}" width="800" alt="${en ? "Retest evidence block on a goodcase.ai case page" : "goodcase.ai 案例页上的复测证据区"}">](https://goodcase.ai/cases/${encodeURIComponent(showcase[0]?.slug || "")})`);
  lines.push("");

  // 钱与赞助：meta.retestSpend 由私仓导出层提供时才渲染具体数字，没有就只给赞助入口。
  const spend = meta.retestSpend;
  const spendLine =
    spend && spend.usd != null
      ? en
        ? `Every run costs real inference money: about US$${spend.usd} across ${spend.runs ?? runs} runs so far, published whether or not the result flatters the prompt.`
        : `每次复测都是真金白银的推理费：到目前为止约 US$${spend.usd}，共 ${spend.runs ?? runs} 次，结果好坏都照发。`
      : en
        ? "Every run costs real inference money, and we publish the result whether or not it flatters the prompt."
        : "每次复测都是真金白银的推理费，结果好坏我们都照发。";
  lines.push(
    `${spendLine} ${
      en
        ? `Want Kling, Veo, Hailuo or the Seedance 2.5 API added to the retest matrix? [Sponsor a batch →](https://github.com/${REPO}/issues/new?title=Sponsor%20a%20retest%20batch&labels=sponsor)`
        : `想把可灵、Veo、海螺或 Seedance 2.5 API 加进复测矩阵？[赞助一批复测 →](https://github.com/${REPO}/issues/new?title=Sponsor%20a%20retest%20batch&labels=sponsor)`
    }`
  );
  lines.push("");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// 🗂 分类总览：Featured 之后的一屏，按模板分类给缩略图 + 数量 + 入口。
// ---------------------------------------------------------------------------

const CATEGORY_ICON = {
  foundation: "🏗️",
  realism: "📱",
  commercial: "🛍️",
  narrative: "🎭",
  stylized: "🎨",
  motion: "💥",
};

/** 每个分类：模板列表、去重后的示例案例（按热度）、封面案例。 */
export function buildCategoryGroups(templates, categories, casesBySlug) {
  return categories.map((cat) => {
    const tpls = templates.filter((t) => t.category === cat.id);
    const slugs = new Set();
    for (const t of tpls) for (const s of t.exampleCases || []) slugs.add(s);
    const cases = sortByHeat(Array.from(slugs).map((s) => casesBySlug.get(s)).filter(Boolean));
    return { category: cat, templates: tpls, cases, cover: cases[0] || null };
  });
}

export function categoryHeading(group, lang) {
  const icon = CATEGORY_ICON[group.category.id] || "🧩";
  const n = group.templates.length;
  const title = group.category.title[lang];
  return lang === "en" ? `### ${icon} ${title} (${n} ${n === 1 ? "template" : "templates"})` : `### ${icon} ${title}（${n} 个模板）`;
}

export function renderCategoryOverview(groups, lang) {
  assertLang(lang);
  const en = lang === "en";
  const lines = [];
  lines.push(en ? "## 🗂️ Category Overview" : "## 🗂️ 分类总览");
  lines.push("");
  lines.push(
    en
      ? "Start from the look you want, then open that category's templates to turn it into a reusable structure. Each tile links to the templates below and to the verified cases behind them."
      : "先从想要的画面类型入手，再打开该分类的模板，把它变成可复用的结构。每格都链到下方的模板和它背后的已验证案例。"
  );
  lines.push("");
  const cols = 3;
  lines.push('<table>');
  for (let i = 0; i < groups.length; i += cols) {
    lines.push("<tr>");
    for (const g of groups.slice(i, i + cols)) {
      const icon = CATEGORY_ICON[g.category.id] || "🧩";
      const title = g.category.title[lang];
      const anchor = `#${githubSlug(categoryHeading(g, lang).replace(/^###\s+/, ""))}`;
      const cover = g.cover;
      const img = cover
        ? `<a href="${cover.goodcaseUrl}"><img src="${cover.posterUrl}" width="260" alt="${escapeXml(displayTitle(cover, lang))}"></a>`
        : "";
      const countLine = en
        ? `${g.templates.length} ${g.templates.length === 1 ? "template" : "templates"} · ${g.cases.length} verified cases`
        : `${g.templates.length} 个模板 · ${g.cases.length} 条已验证案例`;
      const desc = g.category.description[lang];
      const links = `<a href="${anchor}">${en ? "View templates" : "查看模板"}</a>${cover ? ` · <a href="${cover.goodcaseUrl}">${en ? "Top case" : "热度最高案例"}</a>` : ""}`;
      lines.push(
        `<td width="33%" valign="top" align="center"><b>${icon} ${escapeXml(title)}</b><br><sub>${escapeXml(countLine)}</sub><br><br>${img}<br><sub>${escapeXml(desc)}</sub><br>${links}</td>`
      );
    }
    lines.push("</tr>");
  }
  lines.push("</table>");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// 🧩 模板：按分类分组的紧凑表（模板 | 适用场景 | 示例），完整文本在 Skill 参考里。
// ---------------------------------------------------------------------------

export function renderTemplateTables(groups, lang, opts = {}) {
  assertLang(lang);
  const en = lang === "en";
  const refPath = opts.referencePath || "./agents/skills/seedance-prompt-library/references/style-library.md";
  const lines = [];
  lines.push(
    en
      ? `Reusable prompt structures distilled from the highest-performing cases, grouped by category. Each row is one template; the full structure, guidance and pitfalls for every template live in the [Skill reference](${refPath}) and ship with \`npx seedance-prompt-library install\`.`
      : `从最高热度案例里提炼出来的可复用 prompt 结构，按分类分组。每行一个模板；每个模板的完整结构、要点和坑都在 [Skill 参考文档](${refPath}) 里，\`npx seedance-prompt-library install\` 会一起装上。`
  );
  lines.push("");
  for (const g of groups) {
    lines.push(categoryHeading(g, lang));
    lines.push("");
    lines.push(g.category.description[lang]);
    lines.push("");
    const headers = en ? ["Template", "Use when", "Examples"] : ["模板", "适用场景", "示例"];
    const rows = g.templates.map((t) => {
      const title = t.title[lang];
      const anchor = `${refPath}#${githubSlug(title)}`;
      const useWhen = t.useWhen[lang];
      const examples = (t.exampleCaseUrls || []).map((u, i) => `[#${i + 1}](${u})`).join(" ");
      return [`**[${title}](${anchor})**<br><sub>${t.description[lang]}</sub>`, useWhen, examples || "-"];
    });
    lines.push(renderTable(headers, rows));
    lines.push("");
  }
  return lines.join("\n").replace(/\n+$/, "");
}

// ---------------------------------------------------------------------------
// docs/gallery.md：画廊总览页（返回首页、每页区间、模板、声明、推荐入口）
// ---------------------------------------------------------------------------

export function renderGalleryIndex({ parts, bucketCases, cases, promptLinks }, lang) {
  assertLang(lang);
  const en = lang === "en";
  const readmeName = en ? "README.md" : "README_zh.md";
  const lines = [];
  lines.push(en ? "# Awesome Seedance — Gallery Index" : "# Awesome Seedance — 画廊总览");
  lines.push("");
  lines.push(
    en
      ? `All ${cases.length} cases with full prompts, split per Seedance version and paged so GitHub renders every file. Generated from data/cases.json — do not hand-edit.`
      : `全部 ${cases.length} 条案例（含完整 prompt），按 Seedance 版本分文件、超长分页以保证 GitHub 能渲染。由 data/cases.json 生成，请勿手改。`
  );
  lines.push("");
  lines.push(en ? `← [Back to README](../${readmeName})` : `← [返回 README](../${readmeName})`);
  lines.push("");
  lines.push(en ? "## Pages" : "## 分页");
  lines.push("");
  for (const bucket of ["2.5", "2.0", "unspecified"]) {
    const list = bucketCases[bucket];
    if (!list || !list.length) continue;
    const label = bucket === "unspecified" ? (en ? "Seedance (version unspecified)" : "Seedance（未标版本）") : `Seedance ${bucket}`;
    for (const p of parts[bucket]) {
      const partTag = p.totalParts > 1 ? (en ? ` · Part ${p.partNo}/${p.totalParts}` : ` · 第 ${p.partNo}/${p.totalParts} 页`) : "";
      const range = p.totalParts > 1 ? (en ? `cases ${p.rangeStart}–${p.rangeEnd} of ${list.length}` : `第 ${p.rangeStart}–${p.rangeEnd} 条，共 ${list.length} 条`) : en ? `${list.length} cases` : `${list.length} 条`;
      lines.push(`- [${label}${partTag}](./${p.fileName}) - ${range}.`);
    }
  }
  lines.push("");
  lines.push(en ? "## Also in this repository" : "## 仓库里的其他入口");
  lines.push("");
  lines.push(`- [${en ? "Prompt templates" : "Prompt 模板"}](../${readmeName}#-prompt-templates)`);
  lines.push(`- [${en ? "Agent Skill reference (full template text)" : "Agent Skill 参考（模板全文）"}](../agents/skills/seedance-prompt-library/references/style-library.md)`);
  lines.push(`- [${en ? "Copyright & takedown notice" : "版权与下架政策"}](../${readmeName}#${en ? "copyright--takedown-notice" : "版权与下架政策"})`);
  lines.push(`- [${en ? "Live site on goodcase.ai" : "goodcase.ai 在线站"}](${LIVE_SITE_URL})`);
  lines.push("");
  lines.push(en ? "## Recommended entries" : "## 推荐入口");
  lines.push("");
  lines.push(en ? "The ten hottest cases across all versions; each link opens the full entry on its gallery page." : "全部版本里热度最高的十条；每个链接直达画廊分页里的完整条目。");
  lines.push("");
  for (const c of sortByHeat(cases).slice(0, 10)) {
    const href = promptLinks.get(c.slug);
    const title = displayTitle(c, lang);
    const summary = displaySummary(c, lang);
    lines.push(`- [${title}](${href ? href.replace(/^\.\/docs\//, "./") : c.goodcaseUrl}) - ${summary}`);
  }
  lines.push("");
  lines.push(en ? `← [Back to README](../${readmeName})` : `← [返回 README](../${readmeName})`);
  lines.push("");
  return lines.join("\n");
}

export { REPO, THUMB_WIDTH };
