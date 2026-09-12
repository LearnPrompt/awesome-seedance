// Pure rendering logic for awesome-seedance.
// No I/O in this file — everything takes data in, returns strings out,
// so it can be unit-tested without touching the filesystem.

// README 体积目标：GitHub 超过 512KB 拒渲染，旧版 300KB 上限下 README 仍有 307KB，
// 全球发布审计要求压到 ~120KB 以内。超预算时从 Top 榜表格尾部裁行（见 fitToSizeBudget）。
export const README_SIZE_BUDGET_BYTES = 120 * 1024;
export const FEATURED_COUNT = 6;
export const TOP_INLINE_COUNT = 30;
/** @deprecated 旧的 2.0 内联条数上限，README 已不再内联全量条目，仅为兼容保留。 */
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

// ---------------------------------------------------------------------------
// Seedance 版本分类。数据里的模型标签既有规范形 "Seedance 2.5" / "Seedance 2.0"，
// 也有不带版本的 "Seedance" 和历史遗留的 "seedance-2.5"。上游导出层正在改成规范标签，
// 但这里必须大小写不敏感、容忍连字符，三档互斥：2.5 / 2.0 / 未标版本。
// 一条 case 同时列了多个 Seedance 版本时按最高版本计，保证每条只算一次。
// ---------------------------------------------------------------------------

const SEEDANCE_MODEL_RE = /^\s*seedance(?:[\s_-]*(\d+(?:\.\d+)?))?\s*(.*)$/i;

export const SEEDANCE_BUCKETS = ["2.5", "2.0", "unspecified"];
const BUCKET_RANK = { "2.5": 2, "2.0": 1, unspecified: 0 };

/** "seedance-2.5" → "Seedance 2.5"；非 Seedance 标签原样返回（去首尾空白）。 */
export function normalizeModelLabel(model) {
  if (typeof model !== "string") return model;
  const m = model.match(SEEDANCE_MODEL_RE);
  if (!m) return model.trim();
  const [, version, rest] = m;
  return ["Seedance", version, rest.trim()].filter(Boolean).join(" ");
}

/**
 * 单个模型标签的 Seedance 版本档："2.5" | "2.0" | "unspecified"，非 Seedance 返回 null。
 * 2.5 及以上归 2.5，其余带版本号的（2.0、1.x）归 2.0 档——与旧的“2.0 及更早”口径一致。
 */
export function seedanceVersionOf(model) {
  if (typeof model !== "string") return null;
  const m = model.match(SEEDANCE_MODEL_RE);
  if (!m) return null;
  const version = m[1];
  if (!version) return "unspecified";
  return Number.parseFloat(version) >= 2.5 ? "2.5" : "2.0";
}

/** 整条 case 的版本档，多个 Seedance 版本取最高；没有任何 Seedance 标签也归 unspecified。 */
export function classifySeedance(caseObj) {
  let best = null;
  for (const model of (caseObj && caseObj.models) || []) {
    const v = seedanceVersionOf(model);
    if (v == null) continue;
    if (best == null || BUCKET_RANK[v] > BUCKET_RANK[best]) best = v;
  }
  return best ?? "unspecified";
}

/** True if a case belongs to the Seedance 2.5 line. */
export function isSeedance25(caseObj) {
  return classifySeedance(caseObj) === "2.5";
}

export function isSeedance20(caseObj) {
  return classifySeedance(caseObj) === "2.0";
}

export function isSeedanceUnversioned(caseObj) {
  return classifySeedance(caseObj) === "unspecified";
}

export function bucketLabel(bucket, lang) {
  assertLang(lang);
  if (bucket === "2.5") return "Seedance 2.5";
  if (bucket === "2.0") return "Seedance 2.0";
  return lang === "en" ? "Seedance (version unspecified)" : "Seedance（未标版本）";
}

/** 短版本标签，用于 Top 榜表格。 */
export function bucketShortLabel(bucket, lang) {
  assertLang(lang);
  if (bucket === "2.5") return "2.5";
  if (bucket === "2.0") return "2.0";
  return lang === "en" ? "unspecified" : "未标版本";
}

// ---------------------------------------------------------------------------
// 标题 / 摘要选择与清洗。
// 上游导出层正在加 titleEn / summaryEn（string|null）；英文 README 优先用英文字段，
// 缺失时回落到 title / summary。中文 README 保持 title / summary。
// ---------------------------------------------------------------------------

function collapseWhitespace(str) {
  return String(str ?? "").replace(/\s+/g, " ").trim();
}

/** 优先取 primary（非空字符串），否则 fallback；两者都没有返回空串，绝不输出 "null"/"undefined"。 */
export function pickText(primary, fallback) {
  if (typeof primary === "string" && primary.trim()) return primary.trim();
  if (typeof fallback === "string" && fallback.trim()) return fallback.trim();
  return "";
}

export const HEADING_CLEAN_THRESHOLD = 80;
export const HEADING_MAX_LEN = 70;

const MODEL_PREFIX_RE = /^seedance(?:\s*\d+(?:\.\d+)?)?\s*[：:]\s*/i;
const PROMPT_PREFIX_RE = /^prompt\s*[：:]\s*/i;
const TRAILING_ELLIPSIS_RE = /(?:…|\.{3})\s*$/;
const TRAILING_ASCII_PUNCT_RE = /[.,;:!?]+$/;

function lastIndexOfAny(str, chars, minIndex) {
  let best = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (chars.includes(str[i]) && i >= minIndex) best = i;
  }
  return best;
}

/**
 * 把超长文本裁到 maxLen 以内，优先在句末、其次子句边界、再次空格处切，避免切在词中间。
 * 返回 { text, truncated }。
 */
export function truncateAtBoundary(str, maxLen = HEADING_MAX_LEN) {
  const s = collapseWhitespace(str);
  if (s.length <= maxLen) return { text: s, truncated: false };
  const window = s.slice(0, maxLen);
  let idx = lastIndexOfAny(window, ".!?。！？", 20);
  if (idx < 0) idx = lastIndexOfAny(window, ",，;；:：", 40);
  if (idx < 0) idx = lastIndexOfAny(window, " ", 20);
  const text = (idx >= 0 ? window.slice(0, idx) : window).trim();
  return { text: text.replace(TRAILING_ASCII_PUNCT_RE, "").trim(), truncated: true };
}

/**
 * 案例标题 → README 标题。
 * 上游有些案例没有人写的标题，导出层直接把 “Seedance：Prompt: <prompt 前 80 字>…” 当标题，
 * 作为 ### 标题奇丑。规则：以模型标签 + '：' 或 'Prompt:' 开头的一律剥掉前缀；
 * 其中超过 80 字的再去掉图片引用占位符，在 70 字内的句子/子句边界截断并补省略号。
 * 其他标题只做空白折叠和去尾部英文标点（awesome-lint no-heading-punctuation）。
 */
export function cleanHeadingTitle(raw) {
  const t = collapseWhitespace(raw);
  const hasPrefix = MODEL_PREFIX_RE.test(t) || PROMPT_PREFIX_RE.test(t);
  if (!hasPrefix) {
    return t.replace(TRAILING_ASCII_PUNCT_RE, "").trim() || t;
  }
  // 前缀是导出层拼上去的（"Seedance：" + 原帖文案），无论长短都剥掉；
  // 只有超过阈值的才继续截断成 70 字内的短标题。
  let s = collapseWhitespace(t.replace(MODEL_PREFIX_RE, "").replace(PROMPT_PREFIX_RE, ""));
  if (!s) return t;
  if (t.length <= HEADING_CLEAN_THRESHOLD) {
    return s.replace(TRAILING_ASCII_PUNCT_RE, "").trim() || s;
  }
  s = s
    .replace(/@\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/<<<[^>]*>>>/g, " ")
    .replace(/\{\{[^}]*\}\}/g, " ");
  s = collapseWhitespace(s);
  const wasTruncated = TRAILING_ELLIPSIS_RE.test(s);
  s = s.replace(TRAILING_ELLIPSIS_RE, "").trim();
  const cut = truncateAtBoundary(s, HEADING_MAX_LEN);
  const text = cut.text || t.slice(0, HEADING_MAX_LEN);
  return cut.truncated || wasTruncated ? `${text}…` : text;
}

/** README 里显示的标题：en 用 titleEn ?? title，zh 用 title（缺失时回落 titleEn），再清洗。 */
export function displayTitle(caseObj, lang) {
  assertLang(lang);
  const raw =
    lang === "en" ? pickText(caseObj.titleEn, caseObj.title) : pickText(caseObj.title, caseObj.titleEn);
  return cleanHeadingTitle(raw || caseObj.slug || "");
}

/** README 里显示的摘要：en 用 summaryEn ?? summary，zh 用 summary（缺失时回落 summaryEn）。 */
export function displaySummary(caseObj, lang) {
  assertLang(lang);
  const raw =
    lang === "en"
      ? pickText(caseObj.summaryEn, caseObj.summary)
      : pickText(caseObj.summary, caseObj.summaryEn);
  return collapseWhitespace(raw);
}

/** GitHub 风格的标题锚点（近似 github-slugger）：小写、去标点、空格转连字符。 */
export function githubSlug(text) {
  // 与 github-slugger 一致：先 trim 再去标点/emoji，所以 "⭐ Featured" → "-featured"（保留前导连字符）。
  return collapseWhitespace(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/ /g, "-");
}

function escapeAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeTableCell(str) {
  return collapseWhitespace(str).replace(/\|/g, "\\|");
}

// ---------------------------------------------------------------------------
// 统计
// ---------------------------------------------------------------------------

export function computeStats(data) {
  const cases = data.cases || [];
  const v25 = cases.filter(isSeedance25);
  const v20 = cases.filter(isSeedance20);
  const unversioned = cases.filter(isSeedanceUnversioned);
  const authors = new Set(cases.map((c) => c.creator));
  // "Last updated" 取数据导出时间（data/cases.json 顶层 meta.exportedAt），
  // 不再取案例里最新的 sourcePublishedAt——那只反映内容年代，不反映数据本身多久没刷新过。
  const exportedAt = data.meta && data.meta.exportedAt;
  const lastUpdated = exportedAt ? exportedAt.slice(0, 10) : null;
  // meta.retests 是私仓导出层加的字段，老数据/老导出没有这一层，
  // 缺失时必须退化成 0 而不是 undefined——Statistics 表要能一直显示这一行。
  const retests = data.meta && data.meta.retests;
  const retestCases = (retests && retests.casesWithRetests) || 0;
  const retestRuns = (retests && retests.totalRuns) || 0;
  // meta.retestBatchNote: string|null，导出层用来说明某批复测的口径（例如换了评分器）。
  const retestBatchNote = pickText(data.meta && data.meta.retestBatchNote, "") || null;
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
    unversionedCount: unversioned.length,
    authorCount: authors.size,
    lastUpdated,
    retestCases,
    retestRuns,
    retestBatchNote,
    stabilityCases,
    stabilityAvg,
  };
}

/**
 * 管道对齐的 Markdown 表格（awesome-lint 的 table-pipe-alignment 要求列宽一致）。
 * 按 UTF-16 码元数（String.length）补空格——remark 的列偏移就是这么数的，
 * 所以 emoji "😄" 算 2、CJK 算 1；视觉宽度不同但 linter 只认这个。
 */
export function renderTable(headers, rows) {
  const all = [headers, ...rows].map((r) => r.map((cell) => escapeTableCell(String(cell ?? ""))));
  const widths = headers.map((_, col) => Math.max(3, ...all.map((r) => (r[col] ?? "").length)));
  const pad = (cell, col) => cell + " ".repeat(widths[col] - cell.length);
  const line = (r) => `| ${r.map((cell, col) => pad(cell, col)).join(" | ")} |`;
  const sep = `| ${widths.map((w) => "-".repeat(w)).join(" | ")} |`;
  return [line(all[0]), sep, ...all.slice(1).map(line)].join("\n");
}

/** Statistics 表。三档 Seedance 版本互斥，加总等于案例总数；有 retestBatchNote 时表下加一行说明。 */
export function renderStatsTable(stats, lang) {
  assertLang(lang);
  const avg = stats.stabilityAvg != null ? stats.stabilityAvg.toFixed(1) : "-";
  const unversioned = stats.unversionedCount ?? 0;
  const lastUpdated = stats.lastUpdated ?? "-";
  let table;
  if (lang === "en") {
    table = renderTable(
      ["Metric", "Value"],
      [
        ["Total cases", stats.total],
        ["Seedance 2.5", stats.v25Count],
        ["Seedance 2.0", stats.v20Count],
        ["Seedance (version unspecified)", unversioned],
        ["Unique authors", stats.authorCount],
        ["Re-run on other models", `${stats.retestCases} cases / ${stats.retestRuns} runs`],
        ["Stability score (measured)", `${stats.stabilityCases} cases / avg ${avg}`],
        ["Last updated", lastUpdated],
      ]
    );
  } else {
    table = renderTable(
      ["指标", "数值"],
      [
        ["案例总数", stats.total],
        ["Seedance 2.5", stats.v25Count],
        ["Seedance 2.0", stats.v20Count],
        ["Seedance（未标版本）", unversioned],
        ["作者数", stats.authorCount],
        ["跨模型复测", `${stats.retestCases} 条 / ${stats.retestRuns} 次`],
        ["稳定度分（已测）", `${stats.stabilityCases} 条 / 均分 ${avg}`],
        ["最近更新", lastUpdated],
      ]
    );
  }
  const note = pickText(stats.retestBatchNote, "");
  if (!note) return table;
  const noteLine =
    lang === "en" ? `*Retest batch note: ${note}*` : `*复测批次说明：${note}*`;
  return `${table}\n\n${noteLine}`;
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

// ---------------------------------------------------------------------------
// 复测行
// ---------------------------------------------------------------------------

function retestScorePart(finalScore, lang) {
  if (finalScore != null && finalScore !== "") {
    return lang === "en" ? `(score ${finalScore})` : `(${finalScore} 分)`;
  }
  return lang === "en" ? "(score n/a)" : "(无评分)";
}

/** 单次复测 → "模型 · 日期 · ✅ reproduced (score 82) · [output](url)"。各段用 join 拼，绝不留悬空分隔符。 */
export function formatRetestRun(run, lang) {
  assertLang(lang);
  const verdictInfo = RETEST_VERDICT[run.verdict] || RETEST_VERDICT.inconclusive;
  const parts = [
    pickText(run.model, "") || "-",
    dateOnly(run.testedAt),
    `${verdictInfo.icon} ${verdictInfo[lang]} ${retestScorePart(run.finalScore, lang)}`,
  ];
  if (run.artifactUrl) {
    parts.push(lang === "en" ? `[output](${run.artifactUrl})` : `[产物](${run.artifactUrl})`);
  }
  return parts.join(" · ");
}

/**
 * 单条案例的复测块。caseObj.retestSummary 缺失（老数据）返回 []，调用方直接跳过。
 * 只有一次复测：一行 "**Retest:** …"。
 * 多次复测且 case.retests[] 有明细：标题行 + 每次一条列表（按时间倒序、带日期），
 * 同一模型跑两次也能分清；retests[] 最多保留 5 条，少于 runs 时注明只列最近 N 次。
 */
export function renderRetestBlock(caseObj, lang) {
  assertLang(lang);
  const summary = caseObj.retestSummary;
  if (!summary || !summary.latest) return [];
  const runs = Array.isArray(caseObj.retests) ? caseObj.retests.filter((r) => r && r.model) : [];
  const total = Number(summary.runs) || runs.length || 1;
  if (total > 1 && runs.length > 1) {
    const sorted = [...runs].sort((a, b) =>
      String(b.testedAt || "").localeCompare(String(a.testedAt || ""))
    );
    const shownNote =
      sorted.length < total
        ? lang === "en"
          ? ` (latest ${sorted.length} shown)`
          : `（仅列最近 ${sorted.length} 次）`
        : "";
    const header =
      lang === "en" ? `**Retests:** ${total} runs${shownNote}` : `**复测：** 共 ${total} 次${shownNote}`;
    return [header, "", ...sorted.map((r) => `- ${formatRetestRun(r, lang)}`)];
  }
  const prefix = lang === "en" ? "**Retest:**" : "**复测：**";
  const runsPart = total > 1 ? (lang === "en" ? ` · ${total} runs` : ` · 共 ${total} 次`) : "";
  return [`${prefix} ${formatRetestRun(summary.latest, lang)}${runsPart}`];
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

/**
 * 同一文档内标题去重：第二个同名标题加 " (2)"，避免 remark no-duplicate-headings
 * 且让锚点稳定。usedHeadings 由调用方按文档传入。
 */
function uniqueHeading(title, usedHeadings) {
  if (!usedHeadings) return title;
  let candidate = title;
  let n = 2;
  while (usedHeadings.has(candidate)) {
    candidate = `${title} (${n})`;
    n += 1;
  }
  usedHeadings.add(candidate);
  return candidate;
}

/**
 * Render a single case entry in the YouMind-style one-block footer format.
 * opts.usedHeadings: Set，用于同一文档内标题去重；opts.level: 标题级别（默认 3）。
 */
export function renderCaseEntry(caseObj, lang, opts = {}) {
  assertLang(lang);
  const t = LABELS[lang];
  const level = opts.level || 3;
  const title = uniqueHeading(displayTitle(caseObj, lang), opts.usedHeadings);
  const summary = displaySummary(caseObj, lang);
  const fence = fenceForPrompt(caseObj.promptFull || "");
  const lines = [];
  lines.push(`${"#".repeat(level)} ${title}`);
  lines.push("");
  if (summary) {
    lines.push(`> ${summary}`);
    lines.push("");
  }
  lines.push(`${fence}`);
  lines.push((caseObj.promptFull || "").trim());
  lines.push(`${fence}`);
  lines.push("");
  const imgSrc = caseObj.posterUrl || (caseObj.mediaType === "image" ? caseObj.mediaUrl : null);
  if (imgSrc) {
    lines.push(`[<img src="${imgSrc}" width="600" alt="${escapeAttr(title)}">](${caseObj.goodcaseUrl})`);
    lines.push("");
  }
  lines.push(
    `**${t.author}:** ${pickText(caseObj.creator, "") || "-"} | **${t.source}:** [${t.original}](${caseObj.sourceUrl}) | **${t.published}:** ${dateOnly(caseObj.sourcePublishedAt)} | **${t.heat}:** ${caseObj.heatScore ?? "-"}`
  );
  const stabilityLine = renderStabilityLine(caseObj.stabilityScore, lang);
  if (stabilityLine) {
    lines.push("");
    lines.push(stabilityLine);
  }
  const retestBlock = renderRetestBlock(caseObj, lang);
  if (retestBlock.length) {
    lines.push("");
    lines.push(...retestBlock);
  }
  lines.push("");
  lines.push(`**[${t.viewOnGoodcase}](${caseObj.goodcaseUrl})**`);
  lines.push("");
  return lines.join("\n");
}

export function renderTemplateCard(template, lang, opts = {}) {
  assertLang(lang);
  const level = opts.level || 4;
  const title = template.title[lang];
  const desc = template.description[lang];
  const useWhen = template.useWhen[lang];
  // 规范形状是 {en:[...], zh:[...]}（goodcase 蒸馏层定的），不是逐项双语对象。
  const guidance = (template.guidance?.[lang] || []).slice(0, 2);
  const exampleUrls = template.exampleCaseUrls || [];
  const lines = [];
  lines.push(`${"#".repeat(level)} ${title}`);
  lines.push("");
  lines.push(desc);
  lines.push("");
  lines.push(lang === "en" ? `**Use when:** ${useWhen}` : `**适用场景:** ${useWhen}`);
  lines.push("");
  if (guidance.length) {
    lines.push(lang === "en" ? "**Guidance:**" : "**要点:**");
    lines.push("");
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
 * 按三档版本拆分并各自按热度排序。
 * 返回 { v25, v20, unversioned, top }：top 是全体按热度的前 topCount 条（含 featured）。
 */
export function partitionAllPrompts(cases, topCount = TOP_INLINE_COUNT) {
  const sorted = sortByHeat(cases);
  return {
    v25: sorted.filter(isSeedance25),
    v20: sorted.filter(isSeedance20),
    unversioned: sorted.filter(isSeedanceUnversioned),
    top: sorted.slice(0, topCount),
    all: sorted,
  };
}

function byteLength(str) {
  return Buffer.byteLength(str, "utf8");
}

/**
 * Enforce the README size budget. If the assembled markdown exceeds
 * README_SIZE_BUDGET_BYTES, progressively drop trailing inline entries
 * (they still live in the gallery docs) until it fits, and report what
 * got moved so the caller can note it.
 */
export function fitToSizeBudget(headMd, inlineEntries, tailMd, budget = README_SIZE_BUDGET_BYTES) {
  let kept = inlineEntries.length;
  const assemble = (n) => headMd + inlineEntries.slice(0, n).join("\n") + tailMd;
  let assembled = assemble(kept);
  while (byteLength(assembled) > budget && kept > 0) {
    kept -= 1;
    assembled = assemble(kept);
  }
  return {
    markdown: assembled,
    keptCount: kept,
    droppedCount: inlineEntries.length - kept,
    bytes: byteLength(assembled),
    truncated: kept < inlineEntries.length,
  };
}

/** footer 只显示到日：完整 ISO 时间戳在列表里是噪音，且 README 语言无时区语境。 */
function dateOnly(iso) {
  return typeof iso === "string" && iso.length >= 10 ? iso.slice(0, 10) : iso ?? "-";
}

// ---------------------------------------------------------------------------
// Top 榜（README 内联的紧凑排行表）
// ---------------------------------------------------------------------------

function retestCell(caseObj, lang) {
  const summary = caseObj.retestSummary;
  if (!summary || !summary.latest) return "-";
  const info = RETEST_VERDICT[summary.latest.verdict] || RETEST_VERDICT.inconclusive;
  return `${info.icon} ${info[lang]} ${retestScorePart(summary.latest.finalScore, lang)}`;
}

/**
 * "🔥 Top N by heat" 表：一行一条，标题链到 goodcase 记录页，
 * 另给一个 "prompt" 链接跳到 docs/ 画廊里的完整条目（由 promptLinkFor(caseObj) 提供）。
 * 返回 { header: [表头两行], rows: [每条一行] }，方便 fitToSizeBudget 按行裁剪。
 */
export function renderTopTable(cases, lang, opts = {}) {
  assertLang(lang);
  const promptLinkFor = opts.promptLinkFor || (() => null);
  const startRank = opts.startRank || 1;
  const headers =
    lang === "en"
      ? ["#", "Case", "Version", "Heat", "Retest", "Links"]
      : ["#", "案例", "版本", "热度", "复测", "链接"];
  const rows = cases.map((c, i) => {
    const title = displayTitle(c, lang);
    const promptHref = promptLinkFor(c);
    const links = [
      promptHref ? `[${lang === "en" ? "prompt" : "完整 prompt"}](${promptHref})` : null,
      c.sourceUrl ? `[${lang === "en" ? "source" : "原帖"}](${c.sourceUrl})` : null,
    ]
      .filter(Boolean)
      .join(" · ");
    return [
      String(startRank + i),
      `[${title}](${c.goodcaseUrl})`,
      bucketShortLabel(classifySeedance(c), lang),
      String(c.heatScore ?? "-"),
      retestCell(c, lang),
      links || "-",
    ];
  });
  const md = renderTable(headers, rows);
  const lines = md.split("\n");
  return { header: lines.slice(0, 2), rows: lines.slice(2), markdown: md };
}

// ---------------------------------------------------------------------------
// 画廊（docs/gallery-*.md）：三档版本各一套，按预算分片。
// ---------------------------------------------------------------------------

/** 单个 gallery 文件的体积上限。GitHub 超过 512KB 直接拒渲染（只给下载链接），
 *  174 条 2.0 案例单文件实测 702KB，必须像 freestylefly 的 gallery-part-N 一样分片。
 *  350KB 留出余量，条目变长也不至于立刻撞墙。 */
export const GALLERY_PART_BUDGET_BYTES = 350 * 1024;

const GALLERY_FILE_BASE = {
  "2.5": "gallery-seedance-2-5",
  "2.0": "gallery-seedance-2-0",
  unspecified: "gallery-seedance-unversioned",
};

export function galleryFileBase(bucket) {
  return GALLERY_FILE_BASE[bucket] || GALLERY_FILE_BASE["2.0"];
}

/** 单页时不带 -part-N，多页时带；两种语言的命名规则一致。base 默认沿用旧的 2.0 文件名。 */
export function galleryPartFileName(lang, partNo, totalParts, base = GALLERY_FILE_BASE["2.0"]) {
  const suffix = lang === "en" ? "md" : "zh.md";
  const name = totalParts === 1 ? base : `${base}-part-${partNo}`;
  return `${name}.${suffix}`;
}

/**
 * 把某一档的全部案例渲染成分片画廊。
 * opts.bucket: "2.5" | "2.0" | "unspecified"（决定标题与文件名）；opts.budget: 单片字节上限。
 * 返回每片 { markdown, partNo, totalParts, caseCount, fileName, entries:[{slug, heading, anchor}] }，
 * entries 供 README 的 Top 榜生成指向完整条目的锚点链接。
 */
export function renderGalleryParts(cases, lang, budgetOrOpts = GALLERY_PART_BUDGET_BYTES) {
  assertLang(lang);
  const opts = typeof budgetOrOpts === "number" ? { budget: budgetOrOpts } : budgetOrOpts || {};
  const budget = opts.budget ?? GALLERY_PART_BUDGET_BYTES;
  const bucket = opts.bucket || "2.0";
  const base = galleryFileBase(bucket);
  const usedHeadings = new Set();
  // 先按预算把条目分桶，再补页眉页脚——页头需要知道总页数，只能两遍。
  const chunks = [];
  let current = [];
  let currentBytes = 0;
  for (const c of cases) {
    const entry = renderCaseEntry(c, lang, { usedHeadings });
    const heading = entry.split("\n")[0].replace(/^#+\s*/, "");
    const item = { slug: c.slug, heading, anchor: githubSlug(heading), markdown: entry };
    const entryBytes = byteLength(entry) + 1;
    if (current.length > 0 && currentBytes + entryBytes > budget) {
      chunks.push(current);
      current = [];
      currentBytes = 0;
    }
    current.push(item);
    currentBytes += entryBytes;
  }
  if (current.length > 0) chunks.push(current);

  const totalParts = chunks.length;
  const label = bucketLabel(bucket, lang);
  return chunks.map((items, index) => {
    const partNo = index + 1;
    const pageTag =
      totalParts > 1
        ? lang === "en"
          ? ` (Part ${partNo}/${totalParts})`
          : `（第 ${partNo}/${totalParts} 页）`
        : "";
    const title = lang === "en" ? `# ${label} — Full Gallery${pageTag}` : `# ${label} — 全量案例${pageTag}`;
    const intro =
      lang === "en"
        ? `All ${cases.length} ${label} prompt cases, sorted by heat score. Generated from data/cases.json — do not hand-edit.`
        : `${label} 全部 ${cases.length} 条案例，按热度分排序。由 data/cases.json 生成，请勿手改。`;
    const readmeName = lang === "en" ? "README.md" : "README_zh.md";
    const back = lang === "en" ? `← [Back to README](../${readmeName})` : `← [返回 README](../${readmeName})`;
    const nav =
      totalParts > 1
        ? Array.from({ length: totalParts }, (_, i) => {
            const n = i + 1;
            const file = galleryPartFileName(lang, n, totalParts, base);
            return n === partNo ? `**Part ${n}**` : `[Part ${n}](./${file})`;
          }).join(" · ")
        : null;
    const navLine = nav ? `${back} · ${nav}` : back;
    const lines = [title, "", intro, "", navLine, "", ...items.map((it) => it.markdown), "", navLine, ""];
    return {
      markdown: lines.join("\n"),
      partNo,
      totalParts,
      caseCount: items.length,
      fileName: galleryPartFileName(lang, partNo, totalParts, base),
      entries: items.map(({ slug, heading, anchor }) => ({ slug, heading, anchor })),
    };
  });
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
 * meta.retestBatchNote 只在 Statistics 表下方渲染一次（renderStatsTable），这里不重复。
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
      ? "Every prompt here is re-run on other video models; verdicts and output artifacts are public, logged in goodcase.ai's retest history. Runs without a final score show as `score n/a`."
      : "每条 prompt 都会在其他视频模型上重跑，结论与产物公开，记录在 goodcase.ai 的复测日志里。没有终评分的记录显示为“无评分”。";
  const headers =
    lang === "en" ? ["Model", "Runs", "Reproduction rate"] : ["模型", "次数", "复现率"];
  const rows = Array.from(perModel.entries())
    .sort((a, b) => b[1].runs - a[1].runs)
    .map(([model, { runs, reproduced }]) => {
      const rate = runs > 0 ? `${Math.round((reproduced / runs) * 100)}%` : "-";
      return [model, String(runs), rate];
    });
  return [heading, "", intro, "", renderTable(headers, rows), ""].join("\n");
}

export { LABELS };
