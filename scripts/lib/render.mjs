// Pure rendering logic for awesome-seedance.
// No I/O in this file — everything takes data in, returns strings out,
// so it can be unit-tested without touching the filesystem.

export const README_SIZE_BUDGET_BYTES = 300 * 1024; // 300KB hard cap (GitHub refuses >512KB)
export const FEATURED_COUNT = 6;
export const V20_INLINE_LIMIT = 60;

const LABELS = {
  en: {
    author: "Author",
    source: "Source",
    published: "Published",
    heat: "Heat",
    original: "Original",
    viewOnGoodcase: "🔍 View on goodcase.ai (retest log / stability score) →",
  },
  zh: {
    author: "作者",
    source: "来源",
    published: "发布",
    heat: "热度",
    original: "原帖",
    viewOnGoodcase: "🔍 在 goodcase.ai 查看（复测记录/稳定分）→",
  },
};

// 复测 verdict → 图标 + 中英文案。case.retestSummary.latest.verdict 取值固定这四种，
// 未知值兜底成 inconclusive 图标，不让渲染直接炸。
const RETEST_VERDICT = {
  reproduced: { icon: "✅", en: "reproduced", zh: "复现" },
  degraded: { icon: "⚠️", en: "degraded", zh: "降级" },
  failed: { icon: "❌", en: "failed", zh: "失败" },
  inconclusive: { icon: "➖", en: "inconclusive", zh: "不确定" },
};

function assertLang(lang) {
  if (lang !== "en" && lang !== "zh") {
    throw new Error(`Unsupported lang: ${lang}`);
  }
}

/** Sort cases by heatScore descending. Stable: ties keep original relative order. */
export function sortByHeat(cases) {
  return cases
    .map((c, i) => ({ c, i }))
    .sort((a, b) => (b.c.heatScore - a.c.heatScore) || (a.i - b.i))
    .map((x) => x.c);
}

/** True if a case belongs to the Seedance 2.5 line. */
export function isSeedance25(caseObj) {
  return (caseObj.models || []).some((m) => m.startsWith("Seedance 2.5"));
}

/** Everything not 2.5 (2.0, and any older Seedance versions) is bucketed as "2.0 and earlier". */
export function isSeedance20OrEarlier(caseObj) {
  return !isSeedance25(caseObj);
}

export function computeStats(data) {
  const cases = data.cases || [];
  const v25 = cases.filter(isSeedance25);
  const v20 = cases.filter(isSeedance20OrEarlier);
  const authors = new Set(cases.map((c) => c.creator));
  // "Last updated" 取数据导出时间（data/cases.json 顶层 meta.exportedAt），
  // 不再取案例里最新的 sourcePublishedAt——那只反映内容年代，不反映数据本身多久没刷新过。
  const exportedAt = data.meta && data.meta.exportedAt;
  const lastUpdated = exportedAt ? exportedAt.slice(0, 10) : null;
  // meta.retests 是私仓导出层正在同步加的新字段，老数据/老导出没有这一层，
  // 缺失时必须退化成 0 而不是 undefined——Statistics 表要能一直显示这一行。
  const retests = data.meta && data.meta.retests;
  const retestCases = (retests && retests.casesWithRetests) || 0;
  const retestRuns = (retests && retests.totalRuns) || 0;
  // stabilityScore: 0 表示未测量（含没有这个字段的老数据，取 || 0 兜底），
  // 均分只在已测量的子集上算，一位小数；没有任何已测案例时 stabilityAvg 为 null，
  // 渲染层据此显示占位符而不是 NaN。
  const scored = cases.filter((c) => (c.stabilityScore || 0) > 0);
  const stabilityCases = scored.length;
  const stabilityAvg =
    stabilityCases > 0
      ? Number((scored.reduce((sum, c) => sum + c.stabilityScore, 0) / stabilityCases).toFixed(1))
      : null;
  return {
    total: cases.length,
    v25Count: v25.length,
    v20Count: v20.length,
    authorCount: authors.size,
    lastUpdated,
    retestCases,
    retestRuns,
    stabilityCases,
    stabilityAvg,
  };
}

/** Statistics 表。从 generate-readme.mjs 挪过来变成纯函数，方便单测覆盖新增的复测行。 */
export function renderStatsTable(stats, lang) {
  assertLang(lang);
  if (lang === "en") {
    return [
      "| Metric | Value |",
      "| --- | --- |",
      `| Total cases | ${stats.total} |`,
      `| Seedance 2.5 | ${stats.v25Count} |`,
      `| Seedance 2.0 | ${stats.v20Count} |`,
      `| Unique authors | ${stats.authorCount} |`,
      `| Re-run on other models | ${stats.retestCases} cases / ${stats.retestRuns} runs |`,
      `| Stability score (measured) | ${stats.stabilityCases} cases / avg ${stats.stabilityAvg != null ? stats.stabilityAvg.toFixed(1) : "-"} |`,
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
    `| 跨模型复测 | ${stats.retestCases} 条 / ${stats.retestRuns} 次 |`,
    `| 稳定度分（已测） | ${stats.stabilityCases} 条 / 均分 ${stats.stabilityAvg != null ? stats.stabilityAvg.toFixed(1) : "-"} |`,
    `| 最近更新 | ${stats.lastUpdated} |`,
  ].join("\n");
}

export function getFeatured(cases, count = FEATURED_COUNT) {
  return sortByHeat(cases).slice(0, count);
}

function fenceForPrompt(prompt) {
  // Bump fence length if the prompt itself contains a run of backticks.
  let longestRun = 0;
  let current = 0;
  for (const ch of prompt) {
    if (ch === "`") {
      current += 1;
      longestRun = Math.max(longestRun, current);
    } else {
      current = 0;
    }
  }
  const fenceLen = Math.max(3, longestRun + 1);
  return "`".repeat(fenceLen);
}

/**
 * 单条案例的复测摘要行。caseObj.retestSummary 是私仓导出层正在同步的新字段，
 * 老数据/老 case 没有这个字段——必须返回 null 让调用方直接跳过整行，
 * 保证没有复测数据的老案例渲染结果逐字节不变。
 */
function renderRetestLine(retestSummary, lang) {
  if (!retestSummary || !retestSummary.latest) return null;
  const { latest, runs } = retestSummary;
  const verdictInfo = RETEST_VERDICT[latest.verdict] || RETEST_VERDICT.inconclusive;
  const verdictLabel = verdictInfo[lang];
  const scorePart =
    latest.finalScore != null
      ? lang === "en"
        ? ` (score ${latest.finalScore})`
        : ` (${latest.finalScore} 分)`
      : "";
  const linkPart = latest.artifactUrl
    ? lang === "en"
      ? ` · [output](${latest.artifactUrl})`
      : ` · [产物](${latest.artifactUrl})`
    : "";
  const runsPart =
    runs > 1 ? (lang === "en" ? ` · ${runs} runs` : ` · 共 ${runs} 次`) : "";
  const prefix = lang === "en" ? "**Retest:**" : "**复测：**";
  return `${prefix} ${latest.model} · ${dateOnly(latest.testedAt)} · ${verdictInfo.icon} ${verdictLabel}${scorePart}${linkPart}${runsPart}`;
}

/**
 * 单条案例的稳定度行。stabilityScore 0（含没有这个字段的老数据，undefined 按 0 处理）
 * 表示还没测量,直接返回 null 让调用方跳过整行——保证未测案例渲染结果不变。
 */
function renderStabilityLine(stabilityScore, lang) {
  if (!(stabilityScore > 0)) return null;
  const prefix = lang === "en" ? "**Stability:**" : "**稳定度：**";
  return `${prefix} ${stabilityScore}/100`;
}

/** Render a single case entry in the YouMind-style one-block footer format. */
export function renderCaseEntry(caseObj, lang) {
  assertLang(lang);
  const t = LABELS[lang];
  const title = caseObj.title;
  const summary = caseObj.summary;
  const fence = fenceForPrompt(caseObj.promptFull || "");
  const lines = [];
  lines.push(`### ${title}`);
  lines.push("");
  lines.push(`> ${summary}`);
  lines.push("");
  lines.push(`${fence}`);
  lines.push((caseObj.promptFull || "").trim());
  lines.push(`${fence}`);
  lines.push("");
  const imgSrc = caseObj.posterUrl || (caseObj.mediaType === "image" ? caseObj.mediaUrl : null);
  if (imgSrc) {
    lines.push(`[<img src="${imgSrc}" width="600" alt="${title}">](${caseObj.goodcaseUrl})`);
    lines.push("");
  }
  lines.push(
    `**${t.author}:** ${caseObj.creator} | **${t.source}:** [${t.original}](${caseObj.sourceUrl}) | **${t.published}:** ${dateOnly(caseObj.sourcePublishedAt)} | **${t.heat}:** ${caseObj.heatScore}`
  );
  const stabilityLine = renderStabilityLine(caseObj.stabilityScore, lang);
  if (stabilityLine) lines.push(stabilityLine);
  const retestLine = renderRetestLine(caseObj.retestSummary, lang);
  if (retestLine) lines.push(retestLine);
  lines.push("");
  lines.push(`**[${t.viewOnGoodcase}](${caseObj.goodcaseUrl})**`);
  lines.push("");
  return lines.join("\n");
}

export function renderTemplateCard(template, lang) {
  assertLang(lang);
  const title = template.title[lang];
  const desc = template.description[lang];
  const useWhen = template.useWhen[lang];
  // 规范形状是 {en:[...], zh:[...]}（goodcase 蒸馏层定的），不是逐项双语对象。
  const guidance = (template.guidance?.[lang] || []).slice(0, 2);
  const exampleUrls = template.exampleCaseUrls || [];
  const lines = [];
  lines.push(`#### ${title}`);
  lines.push("");
  lines.push(desc);
  lines.push("");
  lines.push(lang === "en" ? `**Use when:** ${useWhen}` : `**适用场景:** ${useWhen}`);
  lines.push("");
  if (guidance.length) {
    lines.push(lang === "en" ? "**Guidance:**" : "**要点:**");
    for (const g of guidance) lines.push(`- ${g}`);
    lines.push("");
  }
  if (exampleUrls.length) {
    const label = lang === "en" ? "Examples" : "示例";
    const links = exampleUrls.map((u, i) => `[#${i + 1}](${u})`).join(" ");
    lines.push(`**${label}:** ${links}`);
    lines.push("");
  }
  return lines.join("\n");
}

/**
 * Split cases into: full Seedance 2.5 list, top-N Seedance 2.0(+earlier) list,
 * and the remainder of 2.0(+earlier) that overflows into the gallery doc.
 */
export function partitionAllPrompts(cases, v20Limit = V20_INLINE_LIMIT) {
  const v25 = sortByHeat(cases.filter(isSeedance25));
  const v20Sorted = sortByHeat(cases.filter(isSeedance20OrEarlier));
  const v20Top = v20Sorted.slice(0, v20Limit);
  const v20Rest = v20Sorted.slice(v20Limit);
  return { v25, v20Top, v20Rest, v20All: v20Sorted };
}

function byteLength(str) {
  return Buffer.byteLength(str, "utf8");
}

/**
 * Enforce the README size budget. If the assembled markdown exceeds
 * README_SIZE_BUDGET_BYTES, progressively drop 2.0 entries from the tail
 * (they still live in the gallery doc) until it fits, and report what
 * got moved so the caller can note it.
 */
export function fitToSizeBudget(headMd, v20TopEntries, tailMd, budget = README_SIZE_BUDGET_BYTES) {
  let kept = v20TopEntries.length;
  const assemble = (n) => headMd + v20TopEntries.slice(0, n).join("\n") + tailMd;
  let assembled = assemble(kept);
  while (byteLength(assembled) > budget && kept > 0) {
    kept -= 1;
    assembled = assemble(kept);
  }
  return {
    markdown: assembled,
    keptCount: kept,
    droppedCount: v20TopEntries.length - kept,
    bytes: byteLength(assembled),
    truncated: kept < v20TopEntries.length,
  };
}

/** 单个 gallery 文件的体积上限。GitHub 超过 512KB 直接拒渲染（只给下载链接），
 *  174 条 2.0 案例单文件实测 702KB，必须像 freestylefly 的 gallery-part-N 一样分片。
 *  350KB 留出余量，条目变长也不至于立刻撞墙。 */
/** footer 只显示到日：完整 ISO 时间戳在列表里是噪音，且 README 语言无时区语境。 */
function dateOnly(iso) {
  return typeof iso === "string" && iso.length >= 10 ? iso.slice(0, 10) : iso ?? "-";
}

export const GALLERY_PART_BUDGET_BYTES = 350 * 1024;

export function renderGalleryParts(v20Cases, lang, budget = GALLERY_PART_BUDGET_BYTES) {
  assertLang(lang);
  // 先按预算把条目分桶，再补页眉页脚——页头需要知道总页数，只能两遍。
  const chunks = [];
  let current = [];
  let currentBytes = 0;
  for (const c of v20Cases) {
    const entry = renderCaseEntry(c, lang);
    const entryBytes = byteLength(entry) + 1;
    if (current.length > 0 && currentBytes + entryBytes > budget) {
      chunks.push(current);
      current = [];
      currentBytes = 0;
    }
    current.push(entry);
    currentBytes += entryBytes;
  }
  if (current.length > 0) chunks.push(current);

  const totalParts = chunks.length;
  return chunks.map((entries, index) => {
    const partNo = index + 1;
    const title =
      lang === "en"
        ? `# Seedance 2.0 & Earlier — Full Gallery (Part ${partNo}/${totalParts})`
        : `# Seedance 2.0 及更早版本 — 全量案例（第 ${partNo}/${totalParts} 页）`;
    const intro =
      lang === "en"
        ? "All Seedance 2.0 (and earlier) prompt cases that didn't fit in the main README, sorted by heat score."
        : "主 README 放不下的全部 Seedance 2.0（及更早版本）案例，按热度分排序。";
    const nav = Array.from({ length: totalParts }, (_, i) => {
      const n = i + 1;
      const file = galleryPartFileName(lang, n, totalParts);
      return n === partNo ? `**Part ${n}**` : `[Part ${n}](./${file})`;
    }).join(" · ");
    const lines = [title, "", intro, "", nav, "", ...entries, "", nav, ""];
    return { markdown: lines.join("\n"), partNo, totalParts, caseCount: entries.length };
  });
}

/** 单页时保留旧文件名，多页时带 -part-N；两种语言的命名规则一致。 */
export function galleryPartFileName(lang, partNo, totalParts) {
  const suffix = lang === "en" ? "md" : "zh.md";
  const base = totalParts === 1 ? "gallery-seedance-2-0" : `gallery-seedance-2-0-part-${partNo}`;
  return `${base}.${suffix}`;
}

/**
 * 按模型聚合每条 case 的 case.retests[]（倒序最多 5 条），算出每个模型的复测次数
 * 和复现次数，用来算按模型的复现率。meta.retests.byVerdict 只有全局汇总，算不出
 * 按模型的复现率——所以这里从 case 级明细重新聚合，而不是读 meta.retests.byModel。
 * 注意：单条 case 的 retests 最多保留 5 条，模型总次数可能比 meta.retests.totalRuns
 * 里的真实次数少；这是已知的近似，spec 里明确接受。
 */
export function aggregateRetestsByModel(cases) {
  const byModel = new Map();
  for (const c of cases || []) {
    for (const r of c.retests || []) {
      if (!r || !r.model) continue;
      if (!byModel.has(r.model)) byModel.set(r.model, { runs: 0, reproduced: 0 });
      const entry = byModel.get(r.model);
      entry.runs += 1;
      if (r.verdict === "reproduced") entry.reproduced += 1;
    }
  }
  return byModel;
}

/**
 * “🔁 Cross-model retests” 小节：一句话说明 + 按模型的次数/复现率表。
 * meta.retests 缺失或 totalRuns 为 0 时返回 null，调用方据此整节不渲染
 * ——老数据（data/cases.json 还没同步这层字段）必须完全不受影响。
 */
export function renderCrossModelSection(cases, meta, lang) {
  assertLang(lang);
  const retestsMeta = meta && meta.retests;
  if (!retestsMeta || !retestsMeta.totalRuns) return null;
  const perModel = aggregateRetestsByModel(cases);
  if (perModel.size === 0) return null;

  const heading = lang === "en" ? "## 🔁 Cross-model retests" : "## 🔁 跨模型复测";
  const intro =
    lang === "en"
      ? "Every prompt here is re-run on other video models; verdicts and output artifacts are public, logged in goodcase.ai's retest history."
      : "每条 prompt 都会在其他视频模型上重跑，结论与产物公开，记录在 goodcase.ai 的复测日志里。";
  const tableHeader =
    lang === "en"
      ? ["| Model | Runs | Reproduction rate |", "| --- | --- | --- |"]
      : ["| 模型 | 次数 | 复现率 |", "| --- | --- | --- |"];
  const rows = Array.from(perModel.entries())
    .sort((a, b) => b[1].runs - a[1].runs)
    .map(([model, { runs, reproduced }]) => {
      const rate = runs > 0 ? `${Math.round((reproduced / runs) * 100)}%` : "-";
      return `| ${model} | ${runs} | ${rate} |`;
    });

  return [heading, "", intro, "", ...tableHeader, ...rows, ""].join("\n");
}

export { LABELS };
