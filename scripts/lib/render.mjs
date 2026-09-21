// Pure rendering logic for awesome-seedance.
// No I/O in this file — everything takes data in, returns strings out,
// so it can be unit-tested without touching the filesystem.

// README 体积目标：GitHub 超过 512KB 拒渲染，旧版 300KB 上限下 README 仍有 307KB，
// 全球发布审计要求压到 ~120KB 以内。超预算时从 Top 榜表格尾部裁行（见 fitToSizeBudget）。
export const README_SIZE_BUDGET_BYTES = 120 * 1024;
export const TOP_INLINE_COUNT = 30;
/** prompt 超过这个行数就折叠进 <details>，README 和画廊里都生效（批注：超过五行的可以折叠展开）。 */
export const PROMPT_COLLAPSE_LINES = 5;
/** Top 榜和分类总览里的缩略图宽度。 */
export const THUMB_WIDTH = 120;
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
    fullPrompt: (n) => `Full prompt (${n} lines, click to expand)`,
    preview: "Preview",
  },
  zh: {
    author: "作者",
    source: "来源",
    published: "发布",
    heat: "热度",
    original: "原帖",
    viewOnGoodcase: "🔍 在 goodcase.ai 查看（复测记录/稳定分）→",
    fullPrompt: (n) => `完整 prompt（${n} 行，点开展开）`,
    preview: "预览",
  },
  ja: {
    author: "作者",
    source: "出典",
    published: "公開日",
    heat: "ヒート",
    original: "元投稿",
    viewOnGoodcase: "🔍 goodcase.ai で見る（再テスト記録 / 安定度スコア）→",
    fullPrompt: (n) => `プロンプト全文（${n} 行、クリックで展開）`,
    preview: "プレビュー",
  },
};

// 复测 verdict → 图标 + 中英文案。case.retestSummary.latest.verdict 取值固定这四种，
// 未知值兜底成 inconclusive 图标，不让渲染直接炸。
const RETEST_VERDICT = {
  reproduced: { icon: "✅", en: "reproduced", zh: "复现", ja: "再現" },
  degraded: { icon: "⚠️", en: "degraded", zh: "降级", ja: "劣化" },
  failed: { icon: "❌", en: "failed", zh: "失败", ja: "失敗" },
  inconclusive: { icon: "➖", en: "inconclusive", zh: "不确定", ja: "判定不能" },
};

export const LANGS = ["en", "zh", "ja"];

function assertLang(lang) {
  if (!LANGS.includes(lang)) {
    throw new Error(`Unsupported lang: ${lang}`);
  }
}

/** 三语文案选择：ja 缺失时回落 en（数据里的 title/description 等只有 en/zh）。 */
export function t(lang, texts) {
  assertLang(lang);
  const v = texts[lang];
  if (v != null) return v;
  return texts.en;
}

/** 数据对象里的多语字段（{en, zh} 形状）：ja 没有就用 en。 */
export function pickLang(obj, lang) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] ?? obj.en ?? obj.zh ?? "";
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
// 但这里必须大小写不敏感、容忍连字符，两档互斥：2.5 / 2.0（裸标按原帖文案落档，兜底 2.0）。
// 一条 case 同时列了多个 Seedance 版本时按最高版本计，保证每条只算一次。
// ---------------------------------------------------------------------------

const SEEDANCE_MODEL_RE = /^\s*seedance(?:[\s_-]*(\d+(?:\.\d+)?))?\s*(.*)$/i;

// case 级只有两档；标签级的 seedanceVersionOf 仍可能返回 "unspecified"（裸标），由 classifySeedance 落档。
export const SEEDANCE_BUCKETS = ["2.5", "2.0"];
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

// 原帖标题 / 文案里写的版本。只认紧跟在 Seedance 后面的版本号，不读 prompt 正文
// （正文里常同时提到多个版本做对比，会误判）。
const SEEDANCE_TEXT_VERSION_RE = /seedance[\s_-]*(\d+(?:\.\d+)?)/gi;

/** 从一段文字里读 Seedance 版本档，多处提及取最高；没提到返回 null。 */
export function seedanceVersionInText(text) {
  if (typeof text !== "string" || !text) return null;
  let best = null;
  for (const m of text.matchAll(SEEDANCE_TEXT_VERSION_RE)) {
    const v = Number.parseFloat(m[1]) >= 2.5 ? "2.5" : "2.0";
    if (best == null || BUCKET_RANK[v] > BUCKET_RANK[best]) best = v;
  }
  return best;
}

/**
 * 整条 case 的版本档，只有 "2.5" | "2.0" 两档，每条只算一次。
 * 优先级：models 里的明确版本（多个取最高）> 标题与原帖文案里写的版本 > 兜底 2.0。
 * 上游仍会导出不带版本的 "Seedance" 裸标，这里负责把它们落到具体版本，README 不再出现“未标版本”。
 */
export function classifySeedance(caseObj) {
  let best = null;
  for (const model of (caseObj && caseObj.models) || []) {
    const v = seedanceVersionOf(model);
    if (v == null || v === "unspecified") continue;
    if (best == null || BUCKET_RANK[v] > BUCKET_RANK[best]) best = v;
  }
  if (best) return best;
  const c = caseObj || {};
  return seedanceVersionInText(`${c.title || ""}\n${c.summary || ""}`) ?? "2.0";
}

/** True if a case belongs to the Seedance 2.5 line. */
export function isSeedance25(caseObj) {
  return classifySeedance(caseObj) === "2.5";
}

export function isSeedance20(caseObj) {
  return classifySeedance(caseObj) === "2.0";
}

export function bucketLabel(bucket, lang) {
  assertLang(lang);
  if (bucket === "2.5") return "Seedance 2.5";
  if (bucket === "2.0") return "Seedance 2.0";
  throw new Error(`Unknown Seedance bucket: ${bucket}`);
}

/** 短版本标签，用于 Top 榜表格。 */
export function bucketShortLabel(bucket, lang) {
  assertLang(lang);
  if (bucket === "2.5") return "2.5";
  if (bucket === "2.0") return "2.0";
  throw new Error(`Unknown Seedance bucket: ${bucket}`);
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
  // ja 没有专门的标题字段，跟 en 一样优先英文。
  const raw =
    lang === "zh" ? pickText(caseObj.title, caseObj.titleEn) : pickText(caseObj.titleEn, caseObj.title);
  return cleanHeadingTitle(raw || caseObj.slug || "");
}

/** README 里显示的摘要：en 用 summaryEn ?? summary，zh 用 summary（缺失时回落 summaryEn）。 */
export function displaySummary(caseObj, lang) {
  assertLang(lang);
  const raw =
    lang === "zh"
      ? pickText(caseObj.summary, caseObj.summaryEn)
      : pickText(caseObj.summaryEn, caseObj.summary);
  return collapseWhitespace(raw);
}

/** GitHub 风格的标题锚点（近似 github-slugger）：小写、去标点、空格转连字符。 */
export function githubSlug(text) {
  // 与 GitHub 一致：先 trim 再去标点/emoji，所以 "🔥 Top 30" → "-top-30"（保留前导连字符）。
  // \p{M}（组合记号，含 emoji 变体选择符 U+FE0F）GitHub 会保留，这里也必须保留，
  // 否则 "🗂️ 标题" 这类带 FE0F 的 emoji 标题算出来的锚点跳不过去。标题本身另有测试保证不含 FE0F。
  return collapseWhitespace(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, "")
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

/** ISO 时间戳 → 东八区日期 "YYYY-MM-DD"；不可解析时回退成前 10 位。 */
export function dateInShanghai(iso) {
  const ms = Date.parse(iso);
  if (Number.isNaN(ms)) return String(iso).slice(0, 10);
  return new Date(ms + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function computeStats(data) {
  const cases = data.cases || [];
  const v25 = cases.filter(isSeedance25);
  const v20 = cases.filter(isSeedance20);
  const authors = new Set(cases.map((c) => c.creator));
  // "Last updated" 取数据导出时间（data/cases.json 顶层 meta.exportedAt），
  // 不再取案例里最新的 sourcePublishedAt——那只反映内容年代，不反映数据本身多久没刷新过。
  // 导出时间是 UTC 的 ISO 串（每天 23:26Z 跑），直接截日期会显示成前一天；
  // 项目和读者主体在东八区，按 Asia/Shanghai 取日期。
  const exportedAt = data.meta && data.meta.exportedAt;
  const lastUpdated = exportedAt ? dateInShanghai(exportedAt) : null;
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

/** Statistics 表。两档 Seedance 版本互斥，加总等于案例总数；有 retestBatchNote 时表下加一行说明。 */
export function renderStatsTable(stats, lang, site = null) {
  assertLang(lang);
  const avg = stats.stabilityAvg != null ? stats.stabilityAvg.toFixed(1) : "-";
  const lastUpdated = stats.lastUpdated ?? "-";
  // goodcase.ai 站点全量（含非 Seedance 的图像/编程/文案案例）放在表尾，口径与 Seedance 行分开。
  const siteRows = site && site.totalCases
    ? t(lang, {
        en: [
          ["goodcase.ai, all categories", `${site.totalCases} cases / ${site.creators ?? "-"} creators`],
          ["goodcase.ai, AI video", `${site.videoCases ?? "-"} cases`],
        ],
        zh: [
          ["goodcase.ai 全站（含非 Seedance）", `${site.totalCases} 条 / ${site.creators ?? "-"} 位创作者`],
          ["goodcase.ai AI 视频", `${site.videoCases ?? "-"} 条`],
        ],
        ja: [
          ["goodcase.ai 全カテゴリ", `${site.totalCases} 件 / クリエイター ${site.creators ?? "-"} 人`],
          ["goodcase.ai AI 動画", `${site.videoCases ?? "-"} 件`],
        ],
      })
    : [];
  let table;
  if (lang === "en") {
    table = renderTable(
      ["Metric", "Value"],
      [
        ["Seedance cases in this repo", stats.total],
        ["Seedance 2.5", stats.v25Count],
        ["Seedance 2.0", stats.v20Count],
        ["Unique authors", stats.authorCount],
        ["Re-run on other models", `${stats.retestCases} cases / ${stats.retestRuns} runs`],
        ["Stability score (measured)", `${stats.stabilityCases} cases / avg ${avg}`],
        ["Last updated", lastUpdated],
        ...siteRows,
      ]
    );
  } else if (lang === "ja") {
    table = renderTable(
      ["指標", "値"],
      [
        ["このリポジトリの Seedance ケース", stats.total],
        ["Seedance 2.5", stats.v25Count],
        ["Seedance 2.0", stats.v20Count],
        ["作者数", stats.authorCount],
        ["他モデルでの再テスト", `${stats.retestCases} 件 / ${stats.retestRuns} 回`],
        ["安定度スコア（測定済み）", `${stats.stabilityCases} 件 / 平均 ${avg}`],
        ["最終更新", lastUpdated],
        ...siteRows,
      ]
    );
  } else {
    table = renderTable(
      ["指标", "数值"],
      [
        ["本仓库 Seedance 案例", stats.total],
        ["Seedance 2.5", stats.v25Count],
        ["Seedance 2.0", stats.v20Count],
        ["作者数", stats.authorCount],
        ["跨模型复测", `${stats.retestCases} 条 / ${stats.retestRuns} 次`],
        ["稳定度分（已测）", `${stats.stabilityCases} 条 / 均分 ${avg}`],
        ["最近更新", lastUpdated],
        ...siteRows,
      ]
    );
  }
  const note = pickText(stats.retestBatchNote, "");
  if (!note) return table;
  const noteLine = t(lang, {
    en: `*Retest batch note: ${note}*`,
    zh: `*复测批次说明：${note}*`,
    ja: `*再テストのバッチ注記: ${note}*`,
  });
  return `${table}\n\n${noteLine}`;
}


const SERIES_PREFIX_LEN = 60;
const SERIES_JACCARD_MIN = 0.2;

function normalizePromptText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/^\s*(seedance\s*[：:]\s*)?(prompt\s*[：:]\s*)+/, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function trigrams(text) {
  const words = normalizePromptText(text).split(" ").filter(Boolean);
  const set = new Set();
  for (let i = 0; i + 2 < words.length; i += 1) set.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  return set;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
}

/**
 * 同一作者反复发的同一套 prompt（同一系列的变体帖）在精选和 Top 榜里只留一条。
 * 判定：同一作者 + prompt 开头 60 字相同 + 全文词三元组 Jaccard ≥ 0.2。
 * 只看开头会把同作者的固定开场白（"handheld mini DV camcorder footage…"）误判成同系列，
 * 只看 Jaccard 又会把同题材不同帖子拉进来，所以两条都要满足。
 * 每个系列保留先发布的那条（原帖），并列取热度高的。画廊和统计不受影响。
 * 返回 { kept, collapsed:[{slug, keptSlug}] }。
 */
export function collapseSeries(cases) {
  const groups = new Map();
  for (const c of cases) {
    const prefix = normalizePromptText(c.promptFull).slice(0, SERIES_PREFIX_LEN);
    const key = prefix ? `${String(c.creator || "").toLowerCase()}|${prefix}` : `__solo__${c.slug}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(c);
  }
  const keptSet = new Set();
  const collapsed = [];
  for (const group of groups.values()) {
    if (group.length === 1) {
      keptSet.add(group[0].slug);
      continue;
    }
    // 组内按 Jaccard 连通：并查集，阈值以上的两两相连才算同一系列。
    const parent = group.map((_, i) => i);
    const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
    const grams = group.map((c) => trigrams(c.promptFull));
    for (let i = 0; i < group.length; i += 1) {
      for (let j = i + 1; j < group.length; j += 1) {
        if (jaccard(grams[i], grams[j]) >= SERIES_JACCARD_MIN) parent[find(i)] = find(j);
      }
    }
    const clusters = new Map();
    group.forEach((c, i) => {
      const r = find(i);
      if (!clusters.has(r)) clusters.set(r, []);
      clusters.get(r).push(c);
    });
    for (const cluster of clusters.values()) {
      const sorted = [...cluster].sort(
        (a, b) =>
          String(a.sourcePublishedAt || "9999").localeCompare(String(b.sourcePublishedAt || "9999")) ||
          (b.heatScore || 0) - (a.heatScore || 0)
      );
      keptSet.add(sorted[0].slug);
      for (const dup of sorted.slice(1)) collapsed.push({ slug: dup.slug, keptSlug: sorted[0].slug });
    }
  }
  return { kept: cases.filter((c) => keptSet.has(c.slug)), collapsed };
}

export function fenceForPrompt(prompt) {
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
    return t(lang, { en: `(score ${finalScore})`, zh: `(${finalScore} 分)`, ja: `(スコア ${finalScore})` });
  }
  return t(lang, { en: "(score n/a)", zh: "(无评分)", ja: "(スコア n/a)" });
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
    parts.push(`[${t(lang, { en: "output", zh: "产物", ja: "出力" })}](${run.artifactUrl})`);
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
        ? t(lang, {
            en: ` (latest ${sorted.length} shown)`,
            zh: `（仅列最近 ${sorted.length} 次）`,
            ja: `（直近 ${sorted.length} 回のみ表示）`,
          })
        : "";
    const header = t(lang, {
      en: `**Retests:** ${total} runs${shownNote}`,
      zh: `**复测：** 共 ${total} 次${shownNote}`,
      ja: `**再テスト:** 計 ${total} 回${shownNote}`,
    });
    return [header, "", ...sorted.map((r) => `- ${formatRetestRun(r, lang)}`)];
  }
  const prefix = t(lang, { en: "**Retest:**", zh: "**复测：**", ja: "**再テスト:**" });
  const runsPart = total > 1 ? t(lang, { en: ` · ${total} runs`, zh: ` · 共 ${total} 次`, ja: ` · 計 ${total} 回` }) : "";
  return [`${prefix} ${formatRetestRun(summary.latest, lang)}${runsPart}`];
}

/**
 * 单条案例的稳定度行。stabilityScore 0（含没有这个字段的老数据，undefined 按 0 处理）
 * 表示还没测量,直接返回 null 让调用方跳过整行——保证未测案例渲染结果不变。
 */
function renderStabilityLine(stabilityScore, lang) {
  if (!(stabilityScore > 0)) return null;
  const prefix = t(lang, { en: "**Stability:**", zh: "**稳定度：**", ja: "**安定度:**" });
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
  const lines = [];
  lines.push(`${"#".repeat(level)} ${title}`);
  lines.push("");
  if (summary) {
    lines.push(`> ${summary}`);
    lines.push("");
  }
  // 顺序：封面 → 署名行 → 稳定度/复测 → prompt（超长折叠）→ goodcase 链接。
  // 封面先于 prompt，读者先看到效果再决定要不要展开几十行的 prompt。
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
  lines.push(...renderPromptBlock(caseObj.promptFull || "", lang));
  lines.push("");
  lines.push(`**[${t.viewOnGoodcase}](${caseObj.goodcaseUrl})**`);
  lines.push("");
  return lines.join("\n");
}

/**
 * prompt 代码块。超过 PROMPT_COLLAPSE_LINES 行的包进 <details>（summary 写明行数），
 * 短 prompt 直接给围栏块。<details> 内外各留空行，GitHub 才会把里面的围栏当 Markdown 渲染。
 */
export function renderPromptBlock(prompt, lang) {
  assertLang(lang);
  const text = String(prompt || "").trim();
  const fence = fenceForPrompt(text);
  const lineCount = text ? text.split("\n").length : 0;
  const block = [fence, text, fence];
  if (lineCount <= PROMPT_COLLAPSE_LINES) return block;
  return [
    "<details>",
    `<summary><b>${LABELS[lang].fullPrompt(lineCount)}</b></summary>`,
    "",
    ...block,
    "",
    "</details>",
  ];
}

export function renderTemplateCard(template, lang, opts = {}) {
  assertLang(lang);
  const level = opts.level || 4;
  const title = pickLang(template.title, lang);
  const desc = pickLang(template.description, lang);
  const useWhen = pickLang(template.useWhen, lang);
  // 规范形状是 {en:[...], zh:[...]}（goodcase 蒸馏层定的），不是逐项双语对象；ja 回落 en。
  const guidance = (pickLang(template.guidance, lang) || []).slice(0, 2);
  const exampleUrls = template.exampleCaseUrls || [];
  const lines = [];
  lines.push(`${"#".repeat(level)} ${title}`);
  lines.push("");
  lines.push(desc);
  lines.push("");
  lines.push(`${t(lang, { en: "**Use when:**", zh: "**适用场景:**", ja: "**使いどころ:**" })} ${useWhen}`);
  lines.push("");
  if (guidance.length) {
    lines.push(t(lang, { en: "**Guidance:**", zh: "**要点:**", ja: "**ポイント:**" }));
    lines.push("");
    for (const g of guidance) lines.push(`- ${g}`);
    lines.push("");
  }
  if (exampleUrls.length) {
    const label = t(lang, { en: "Examples", zh: "示例", ja: "例" });
    const links = exampleUrls.map((u, i) => `[#${i + 1}](${u})`).join(" ");
    lines.push(`**${label}:** ${links}`);
    lines.push("");
  }
  return lines.join("\n");
}

/**
 * 按三档版本拆分并各自按热度排序。
 * 返回 { v25, v20, top, all }：top 是全体按热度的前 topCount 条。
 */
export function partitionAllPrompts(cases, topCount = TOP_INLINE_COUNT) {
  const sorted = sortByHeat(cases);
  return {
    v25: sorted.filter(isSeedance25),
    v20: sorted.filter(isSeedance20),
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

/** 表格里的缩略图单元：封面链到 goodcase 记录页；没有封面给 "-"。 */
export function thumbCell(caseObj, alt = "", width = THUMB_WIDTH) {
  const src = caseObj.posterUrl || (caseObj.mediaType === "image" ? caseObj.mediaUrl : null);
  if (!src) return "-";
  return `[<img src="${src}" width="${width}" alt="${escapeAttr(alt)}">](${caseObj.goodcaseUrl})`;
}

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
  const headers = t(lang, {
    en: ["#", "Preview", "Case", "Version", "Heat", "Retest", "Links"],
    zh: ["#", "预览", "案例", "版本", "热度", "复测", "链接"],
    ja: ["#", "プレビュー", "ケース", "バージョン", "ヒート", "再テスト", "リンク"],
  });
  const rows = cases.map((c, i) => {
    const title = displayTitle(c, lang);
    const thumb = thumbCell(c, title);
    const promptHref = promptLinkFor(c);
    const links = [
      promptHref ? `[${t(lang, { en: "prompt", zh: "完整 prompt", ja: "プロンプト" })}](${promptHref})` : null,
      c.sourceUrl ? `[${t(lang, { en: "source", zh: "原帖", ja: "元投稿" })}](${c.sourceUrl})` : null,
    ]
      .filter(Boolean)
      .join(" · ");
    return [
      String(startRank + i),
      thumb,
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
};

/** 画廊总览页文件名：docs/gallery.md / docs/gallery.zh.md。 */
/** 各语言 README 文件名。 */
export function readmeFileName(lang) {
  return t(lang, { en: "README.md", zh: "README_zh.md", ja: "README_ja.md" });
}

export function galleryIndexFileName(lang) {
  assertLang(lang);
  return t(lang, { en: "gallery.md", zh: "gallery.zh.md", ja: "gallery.ja.md" });
}

export function galleryFileBase(bucket) {
  return GALLERY_FILE_BASE[bucket] || GALLERY_FILE_BASE["2.0"];
}

/** 单页时不带 -part-N，多页时带；两种语言的命名规则一致。base 默认沿用旧的 2.0 文件名。 */
export function galleryPartFileName(lang, partNo, totalParts, base = GALLERY_FILE_BASE["2.0"]) {
  const suffix = t(lang, { en: "md", zh: "zh.md", ja: "ja.md" });
  const name = totalParts === 1 ? base : `${base}-part-${partNo}`;
  return `${name}.${suffix}`;
}

/**
 * 把某一档的全部案例渲染成分片画廊。
 * opts.bucket: "2.5" | "2.0"（决定标题与文件名）；opts.budget: 单片字节上限。
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
  let offset = 0;
  return chunks.map((items, index) => {
    const partNo = index + 1;
    const rangeStart = offset + 1;
    const rangeEnd = offset + items.length;
    offset = rangeEnd;
    const pageTag =
      totalParts > 1
        ? t(lang, {
            en: ` (Part ${partNo}/${totalParts})`,
            zh: `（第 ${partNo}/${totalParts} 页）`,
            ja: `（Part ${partNo}/${totalParts}）`,
          })
        : "";
    const title = t(lang, {
      en: `# ${label} — Full Gallery${pageTag}`,
      zh: `# ${label} — 全量案例${pageTag}`,
      ja: `# ${label} — 全ケース${pageTag}`,
    });
    const intro = t(lang, {
      en: `All ${cases.length} ${label} prompt cases, sorted by heat score. Generated from data/cases.json — do not hand-edit.`,
      zh: `${label} 全部 ${cases.length} 条案例，按热度分排序。由 data/cases.json 生成，请勿手改。`,
      ja: `${label} の全 ${cases.length} ケースをヒートスコア順に掲載。data/cases.json から生成、手編集不可。`,
    });
    const readmeName = readmeFileName(lang);
    const indexName = galleryIndexFileName(lang);
    const back = t(lang, {
      en: `← [Back to README](../${readmeName}) · [Gallery index](./${indexName})`,
      zh: `← [返回 README](../${readmeName}) · [画廊总览](./${indexName})`,
      ja: `← [README に戻る](../${readmeName}) · [ギャラリー索引](./${indexName})`,
    });
    const nav =
      totalParts > 1
        ? Array.from({ length: totalParts }, (_, i) => {
            const n = i + 1;
            const file = galleryPartFileName(lang, n, totalParts, base);
            return n === partNo ? `**Part ${n}**` : `[Part ${n}](./${file})`;
          }).join(" · ")
        : null;
    const navLine = nav ? `${back} · ${nav}` : back;
    const rangeLine =
      totalParts > 1
        ? t(lang, {
            en: `This page: cases ${rangeStart}–${rangeEnd} of ${cases.length}.`,
            zh: `本页：第 ${rangeStart}–${rangeEnd} 条，共 ${cases.length} 条。`,
            ja: `このページ: ${cases.length} 件中 ${rangeStart}–${rangeEnd} 件目。`,
          })
        : null;
    const lines = [title, "", intro, ...(rangeLine ? ["", rangeLine] : []), "", navLine, "", ...items.map((it) => it.markdown), "", navLine, ""];
    return {
      markdown: lines.join("\n"),
      partNo,
      totalParts,
      caseCount: items.length,
      rangeStart,
      rangeEnd,
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
export function aggregateRetestsByModel(cases, meta = null) {
  // 导出层给了全量的按模型结论汇总（meta.retests.byModelVerdicts）就直接用：
  // 它对原始复测行统计，不受每条 case 只保留最近 5 条明细的影响，和站内口径一致。
  const full = meta && meta.retests && meta.retests.byModelVerdicts;
  if (full && typeof full === "object" && Object.keys(full).length) {
    const byModel = new Map();
    for (const [model, v] of Object.entries(full)) {
      const runs = Number(v.runs ?? v.total ?? 0);
      const reproduced = Number(v.reproduced ?? 0);
      if (!model || !runs) continue;
      byModel.set(model, { runs, reproduced });
    }
    if (byModel.size) return byModel;
  }
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
  const perModel = aggregateRetestsByModel(cases, meta);
  if (perModel.size === 0) return null;

  const heading = t(lang, { en: "## 🔁 Cross-model retests", zh: "## 🔁 跨模型复测", ja: "## 🔁 クロスモデル再テスト" });
  const intro = t(lang, {
    en: "Every prompt here is re-run on other video models; verdicts and output artifacts are public, logged in goodcase.ai's retest history. Runs without a final score show as `score n/a`.",
    zh: "每条 prompt 都会在其他视频模型上重跑，结论与产物公开，记录在 goodcase.ai 的复测日志里。没有终评分的记录显示为“无评分”。",
    ja: "各プロンプトは他の動画モデルでも再生成され、判定と出力は goodcase.ai の再テスト履歴で公開されます。最終スコアのない実行は `スコア n/a` と表示されます。",
  });
  const headers = t(lang, { en: ["Model", "Runs", "Reproduction rate"], zh: ["模型", "次数", "复现率"], ja: ["モデル", "回数", "再現率"] });
  const rows = Array.from(perModel.entries())
    .sort((a, b) => b[1].runs - a[1].runs)
    .map(([model, { runs, reproduced }]) => {
      const rate = runs > 0 ? `${Math.round((reproduced / runs) * 100)}%` : "-";
      return [model, String(runs), rate];
    });
  return [heading, "", intro, "", renderTable(headers, rows), ""].join("\n");
}

export { LABELS };
