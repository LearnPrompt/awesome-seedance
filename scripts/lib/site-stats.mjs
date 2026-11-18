// goodcase.ai 站点全量数字的取数与解析。
// 2026-11-15 起站点首页、列表页对脚本返回 429 挑战页，从 HTML 正则抓数不再可行；
// llms-full.txt 是站点公开给 Agent 的全量快照（头部自报「案例总数：N」，逐条带 Creator 与 Category），
// 一份文件就能算出案例数、视频案例数、创作者数。任何一项对不上就抛错，宁可不更新也不写错数。

export const LLMS_FULL_URL = "https://goodcase.ai/llms-full.txt";
const USER_AGENT = "awesome-seedance/site-stats";

// 与站点 src/lib/creator-slug.ts 的 normalizeCreatorIdentity 同口径，首页「N 位创作者」按它去重。
export function normalizeCreator(name) {
  return name.normalize("NFKC").trim().replace(/^@(?=[a-z0-9_])/i, "").toLowerCase();
}

const ENTRY_RE = /^URL: (https:\/\/goodcase\.ai\/(?:en\/)?cases\/\S+)\nCreator: (.*)\nCategory: .*\((\w+)\)$/gm;

export function parseLlmsFull(text) {
  const header = text.match(/^案例总数：(\d+)(.*)$/m);
  if (!header) throw new Error("llms-full.txt 里没有「案例总数」行（可能拿到的是挑战页，或站点改了格式）");
  if (header[2].trim()) throw new Error(`llms-full.txt 自报快照不完整：${header[0]}`);
  const declared = Number(header[1]);

  const urls = new Set();
  const creators = new Set();
  let videoCases = 0;
  for (const [, url, creator, category] of text.matchAll(ENTRY_RE)) {
    if (urls.has(url)) continue;
    urls.add(url);
    if (category === "video") videoCases += 1;
    const key = normalizeCreator(creator);
    if (key) creators.add(key);
  }
  // 条目缺 URL/Creator/Category 任一行就匹配不上，条数会和头部对不上，在这里拦下
  if (urls.size !== declared) {
    throw new Error(`llms-full.txt 头部写 ${declared} 条，能完整解析的只有 ${urls.size} 条，不更新`);
  }
  return { totalCases: declared, videoCases, creators: creators.size };
}

export async function fetchSiteStats({ fetchImpl = fetch, timeoutMs = 60_000 } = {}) {
  const res = await fetchImpl(LLMS_FULL_URL, {
    headers: { "user-agent": USER_AGENT },
    signal: AbortSignal.timeout(timeoutMs),
  });
  const mitigated = res.headers.get("x-vercel-mitigated");
  if (!res.ok || mitigated) {
    throw new Error(`${LLMS_FULL_URL} → ${res.status}${mitigated ? ` (x-vercel-mitigated: ${mitigated})` : ""}`);
  }
  return parseLlmsFull(await res.text());
}
