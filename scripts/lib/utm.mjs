// goodcase.ai 链接的 UTM 标记：所有生成文件里指向 goodcase.ai 网页的超链接，统一从这里加参数。
//
// 约定（站点读标准 UTM 参数，用来区分从本仓库哪个文件、哪个章节点过去的人）：
//   utm_source   固定 awesome-seedance
//   utm_medium   固定 github
//   utm_campaign 按输出文件区分（UTM_CAMPAIGNS）
//   utm_content  按文件里的章节区分（UTM_CONTENTS），同一章节内所有链接用同一个值
//
// utm_campaign 取值（按输出文件）：
//   readme-en / readme-zh / readme-ja   README.md / README_zh.md / README_ja.md
//   gallery                             docs/gallery*.md（画廊总览 + 各分页，三种语言共用）
//   skills                              docs/skills*.md（goodcase.ai 全部视频 Skill 总表）
//   templates                           docs/templates/{zh,en}/*.md（单模板文件）
//   不属于本表的生成物（agents/skills/*/references/*.md）本次不打标记。
//
// utm_content 取值（按章节）：
//   README 内：hero（顶部横幅、徽章、导语回链）、why（Why this list）、templates（分类模板网格）、
//     skills-grid（Skill 网格）、retests（跨模型复测）、top30（Top 30 榜）、browse（Browse on goodcase.ai）、
//     submit（How to Contribute）、footer（Acknowledgements）
//   画廊内：entry（每条案例的封面链接和 View on goodcase.ai）、index（画廊总览页的入口列表）
//   Skill 总表内：intro（页首说明）、official（官方 Skill 的 Open on goodcase.ai）、methods（创作者方法表）
//   单模板文件内：strip（页首封面条）、cases（案例表和表尾的 goodcase.ai 链接）
//
// 不打标记的链接：图片地址（img src、![]()、/media/ /community/ 等资源路径、图片/视频扩展名）、
// 媒体 CDN（media.goodcase.ai）、mailto、goodcase.ai 以外的域名、相对路径和页内锚点。
// 只吃字符串吐字符串，不读盘不联网。

export const UTM_SOURCE = "awesome-seedance";
export const UTM_MEDIUM = "github";

export const UTM_CAMPAIGNS = Object.freeze(["readme-en", "readme-zh", "readme-ja", "gallery", "skills", "templates"]);

export const UTM_CONTENTS = Object.freeze([
  "hero", "why", "templates", "skills-grid", "retests", "top30", "browse", "submit", "footer",
  "entry", "index",
  "intro", "official", "methods",
  "strip", "cases",
]);

/** README 的语言 → utm_campaign。 */
export function readmeCampaign(lang) {
  const campaign = `readme-${lang}`;
  if (!UTM_CAMPAIGNS.includes(campaign)) throw new Error(`utm: no README campaign for lang "${lang}"`);
  return campaign;
}

// 只有这两个 host 是 goodcase.ai 的网页；media.goodcase.ai 等子域是媒体 CDN，不打。
const PAGE_HOSTS = new Set(["goodcase.ai", "www.goodcase.ai"]);
// 站内静态资源路径和资源扩展名：就算 host 是 goodcase.ai 也是图片/视频地址，不是页面。
const ASSET_PATH = /^\/(?:media|community|assets|static|_next|api)(?:\/|$)/i;
const ASSET_EXT = /\.(?:png|jpe?g|gif|webp|avif|svg|ico|bmp|mp4|webm|mov|m4v|mp3|wav|pdf)$/i;

/** 这个 URL 是不是 goodcase.ai 的一个网页（打标记的唯一入口判断）。 */
export function isGoodcasePage(url) {
  let u;
  try {
    u = new URL(url);
  } catch {
    return false;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return false;
  if (!PAGE_HOSTS.has(u.hostname.toLowerCase())) return false;
  return !ASSET_PATH.test(u.pathname) && !ASSET_EXT.test(u.pathname);
}

function assertToken(kind, value, allowed) {
  if (!allowed.includes(value)) {
    throw new Error(`utm: unknown ${kind} "${value}" (allowed: ${allowed.join(", ")})`);
  }
}

/**
 * 给指向 goodcase.ai 网页的 URL 加 UTM 参数；其他任何东西原样返回（相对路径、锚点、mailto、
 * 别的域名、媒体 CDN、图片地址）。
 * 用 URL/URLSearchParams 合并：已有的查询参数（filter、q 等）保留，已有的 utm_* 被覆盖而不是重复，
 * 片段（#xxx）留在最后，所以对同一个 URL 重复调用结果不变。
 * campaign / content 不传就不带对应参数；传了必须是 UTM_CAMPAIGNS / UTM_CONTENTS 里登记过的值，写错直接抛错。
 */
export function withUtm(url, { campaign, content } = {}) {
  if (typeof url !== "string" || !isGoodcasePage(url)) return url;
  if (campaign != null) assertToken("campaign", campaign, UTM_CAMPAIGNS);
  if (content != null) assertToken("content", content, UTM_CONTENTS);
  const u = new URL(url);
  u.searchParams.set("utm_source", UTM_SOURCE);
  u.searchParams.set("utm_medium", UTM_MEDIUM);
  if (campaign) u.searchParams.set("utm_campaign", campaign);
  if (content) u.searchParams.set("utm_content", content);
  return u.toString();
}

/**
 * 渲染函数用的链接器：campaign 没传就返回恒等函数（不打标记），传了就返回 url => withUtm(url, { campaign, content })。
 * content 由各渲染函数按自己所在的章节写死，campaign 由 generate-readme.mjs 按输出文件传进来。
 */
export function utmLinker(campaign, content) {
  if (!campaign) return (url) => url;
  return (url) => withUtm(url, { campaign, content });
}

/**
 * 给一段静态 Markdown/HTML 文案里的 goodcase.ai 超链接批量打标记：只改 `](url)` 和 `href="url"` 的目标，
 * 其余文字（含 img src）不碰；非 goodcase.ai 页面的目标由 withUtm 原样放行。
 * 用于 generate-readme.mjs 里手写在 COPY 表中的文案，不用在含代码围栏的整篇文档上。
 */
export function tagGoodcaseLinks(markdown, { campaign, content } = {}) {
  if (!campaign) return markdown;
  return String(markdown)
    .replace(/\]\((https?:\/\/[^\s)]+)\)/g, (_m, url) => `](${withUtm(url, { campaign, content })})`)
    .replace(/href="(https?:\/\/[^"\s]+)"/g, (_m, url) => `href="${withUtm(url, { campaign, content })}"`);
}
