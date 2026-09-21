#!/usr/bin/env node
// 刷新 data/site.json 里 goodcase.ai 的站点全量数字（公开 API 的列表接口最多 50 条，拿不到总数）。
// 首页脚注有「N 个案例 / N 位创作者」，案例页有「当前结果 N」，Skills 页按分类列出 Skill 卡片；
// 这些都在服务端渲染的 HTML 里，直接 fetch 正则即可。抓不到某一项时保留旧值并提示。
// Run: node scripts/fetch-site-stats.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const FILE = path.join(ROOT, "data/site.json");
const site = JSON.parse(readFileSync(FILE, "utf8"));

async function html(url) {
  const res = await fetch(url, { headers: { "user-agent": "awesome-seedance/site-stats" } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return (await res.text()).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

function num(text, re, label) {
  const m = text.match(re);
  if (!m) {
    console.log(`  ! ${label}: not found, keeping ${JSON.stringify(site[label] ?? null)}`);
    return null;
  }
  return Number(m[1]);
}

const home = await html("https://goodcase.ai/");
const totalCases = num(home, /(\d+)\s*个案例/, "totalCases");
const creators = num(home, /(\d+)\s*位创作者/, "creators");

const video = await html("https://goodcase.ai/cases?filter=video");
const videoCases = num(video, /当前结果\s*(\d+)/, "videoCases");

const skillsPage = await fetch("https://goodcase.ai/skills?category=video", { headers: { "user-agent": "awesome-seedance/site-stats" } });
const skillsHtml = skillsPage.ok ? await skillsPage.text() : "";
const hrefs = new Set([...skillsHtml.matchAll(/href="(\/skills\/[a-z0-9-]+)"/g)].map((m) => m[1]));
const base = [...hrefs].filter((h) => !/-by-[a-z0-9]+$/.test(h)).length;
const variants = [...hrefs].filter((h) => /-by-[a-z0-9]+$/.test(h)).length;

const next = {
  ...site,
  // 东八区日期，和 README 里的“最近更新”口径一致
  fetchedAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10),
  totalCases: totalCases ?? site.totalCases,
  videoCases: videoCases ?? site.videoCases,
  creators: creators ?? site.creators,
  videoSkills: {
    ...site.videoSkills,
    base: hrefs.size ? base : site.videoSkills.base,
    creatorVariants: hrefs.size ? variants : site.videoSkills.creatorVariants,
  },
};
writeFileSync(FILE, JSON.stringify(next, null, 2) + "\n", "utf8");

// ---------------------------------------------------------------------------
// data/skills.json：README 的 Skill 网格。这里只刷新带 siteSlug 的条目的 variants 和 cover，
// 标题、简介、安装命令都是人工写的，原样保留。抓不到就保留旧值。
// 列表页每张变体卡片的文字形如「作者名 · 基础款名」，href 形如 /skills/<base>-by-<id>。
// ---------------------------------------------------------------------------
const SKILLS_FILE = path.join(ROOT, "data/skills.json");
const skillsData = JSON.parse(readFileSync(SKILLS_FILE, "utf8"));
const decode = (str) => str.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const cards = [...skillsHtml.matchAll(/<a[^>]+href="(\/skills\/[a-z0-9-]+)"[^>]*>([\s\S]*?)<\/a>/g)]
  .map((m) => ({ href: m[1], text: decode(m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()) }))
  .filter((c) => c.text);
for (const skill of skillsData.skills) {
  if (!skill.siteSlug) continue;
  const prefix = `/skills/${skill.siteSlug}-by-`;
  const seen = new Set();
  const variants = [];
  for (const c of cards) {
    if (!c.href.startsWith(prefix) || seen.has(c.href)) continue;
    seen.add(c.href);
    variants.push({ creator: c.text.split(" · ")[0].trim(), url: `https://goodcase.ai${c.href}` });
  }
  if (variants.length) skill.variants = variants.sort((a, b) => a.creator.localeCompare(b.creator, "en", { sensitivity: "base" }));
  try {
    const res = await fetch(`https://goodcase.ai/skills/${skill.siteSlug}`, { headers: { "user-agent": "awesome-seedance/site-stats" } });
    const page = res.ok ? await res.text() : "";
    const poster = page.match(/https:\/\/media\.goodcase\.ai\/(?:media\/poster|cases)\/[^"\\ ?]+\.jpg/);
    if (poster) skill.cover = { src: poster[0] };
  } catch (err) {
    console.log(`  ! ${skill.siteSlug}: ${err.message}, keeping old cover`);
  }
}
writeFileSync(SKILLS_FILE, JSON.stringify(skillsData, null, 2) + "\n", "utf8");
const variantTotal = skillsData.skills.reduce((n, sk) => n + (sk.variants || []).length, 0);
console.log(`data/skills.json: ${skillsData.skills.length} skills, ${variantTotal} creator variants`);
console.log(`data/site.json: cases ${next.totalCases}, video ${next.videoCases}, creators ${next.creators}, video skills ${next.videoSkills.base}+${next.videoSkills.creatorVariants}`);
