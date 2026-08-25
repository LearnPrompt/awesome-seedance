// Pure rendering logic for awesome-seedance-2.5-prompts.
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
  const lastUpdated = cases.reduce((latest, c) => {
    return !latest || c.sourcePublishedAt > latest ? c.sourcePublishedAt : latest;
  }, null);
  return {
    total: cases.length,
    v25Count: v25.length,
    v20Count: v20.length,
    authorCount: authors.size,
    lastUpdated,
  };
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

export { LABELS };
