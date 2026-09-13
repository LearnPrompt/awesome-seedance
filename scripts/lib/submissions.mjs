// 投稿文件（submissions/<slug>.json）的校验规则。纯函数，供 CLI 和测试共用。
const REQUIRED = ["title", "sourceUrl", "creator", "sourcePublishedAt", "models", "promptFull", "mediaUrl"];
const MODEL_RE = /^Seedance(?: 2\.[05])?$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*\.json$/;
const AGGREGATOR_HOSTS = ["github.com", "goodcase.ai", "youmind.com", "prompthero.com"];

function isUrl(value) {
  try {
    const u = new URL(String(value));
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

function looksLikeTemplate(value) {
  return /<[^>]+>|\.\.\.|\(the creator's ORIGINAL post|Short descriptive title|verbatim from the source post|direct link to the output/i.test(String(value));
}

/**
 * 返回问题列表（空数组 = 通过）。opts.fileName 用来校验文件名；opts.knownSources 是库内已有的 sourceUrl 集合。
 */
export function validateSubmission(data, opts = {}) {
  const problems = [];
  if (!data || typeof data !== "object" || Array.isArray(data)) return ["top level must be a JSON object"];
  if (opts.fileName && !SLUG_RE.test(opts.fileName)) {
    problems.push(`file name must be a kebab-case slug ending in .json (got ${opts.fileName})`);
  }
  for (const key of REQUIRED) {
    const v = data[key];
    const empty = v == null || (typeof v === "string" && !v.trim()) || (Array.isArray(v) && !v.length);
    if (empty) problems.push(`missing required field: ${key}`);
    else if (typeof v === "string" && looksLikeTemplate(v)) problems.push(`${key} still contains the TEMPLATE placeholder text`);
  }
  if (data.sourceUrl && !isUrl(data.sourceUrl)) problems.push("sourceUrl must be an http(s) URL");
  if (data.sourceUrl && isUrl(data.sourceUrl)) {
    const host = new URL(data.sourceUrl).hostname.replace(/^www\./, "");
    if (AGGREGATOR_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))) {
      problems.push(`sourceUrl must be the creator's original post, not an aggregator (${host})`);
    }
    if (opts.knownSources && opts.knownSources.has(String(data.sourceUrl).trim())) {
      problems.push("a case with this sourceUrl is already in data/cases.json");
    }
  }
  if (data.mediaUrl && !isUrl(data.mediaUrl)) problems.push("mediaUrl must be an http(s) URL");
  if (data.sourcePublishedAt && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.sourcePublishedAt))) {
    problems.push("sourcePublishedAt must be YYYY-MM-DD");
  }
  if (Array.isArray(data.models)) {
    for (const m of data.models) {
      if (!MODEL_RE.test(String(m))) problems.push(`models entry "${m}" must be "Seedance 2.5", "Seedance 2.0" or "Seedance"`);
    }
  } else if (data.models != null) {
    problems.push("models must be an array");
  }
  if (typeof data.promptFull === "string" && data.promptFull.trim().length < 40) {
    problems.push("promptFull is suspiciously short (< 40 characters)");
  }
  if (typeof data.creator === "string" && data.creator.trim() && !/^@?[\w.\-]+$/u.test(data.creator.trim()) && data.creator.trim().length > 60) {
    problems.push("creator should be the handle as shown on the source platform");
  }
  return problems;
}
