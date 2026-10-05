#!/usr/bin/env node
// 刷新 data/site.json 里 goodcase.ai 的站点全量数字（公开 API 的列表接口最多 50 条，拿不到总数）。
// 首页脚注有「N 个案例 / N 位创作者」，案例页有「当前结果 N」；这些都在服务端渲染的 HTML 里，
// 直接 fetch 正则即可。抓不到某一项时保留旧值并提示。
// 视频 Skill 的数量和创作者方法不再从列表页抓（站点改版后列表页只显示带风格标签的创作者方法，会少算），
// 改由私仓导出的 data/site-skills.json 提供，生成器直接读它。
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

const next = {
  ...site,
  // 东八区日期，和 README 里的“最近更新”口径一致
  fetchedAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10),
  totalCases: totalCases ?? site.totalCases,
  videoCases: videoCases ?? site.videoCases,
  creators: creators ?? site.creators,
};
writeFileSync(FILE, JSON.stringify(next, null, 2) + "\n", "utf8");

// ---------------------------------------------------------------------------
// data/skills.json：README 的 Skill 网格。这里只刷新带 siteSlug 的条目的 cover，
// 标题、简介、安装命令都是人工写的，原样保留；创作者方法数由生成器从 data/site-skills.json 现算。抓不到就保留旧值。
// ---------------------------------------------------------------------------
const SKILLS_FILE = path.join(ROOT, "data/skills.json");
const skillsData = JSON.parse(readFileSync(SKILLS_FILE, "utf8"));
for (const skill of skillsData.skills) {
  if (!skill.siteSlug) continue;
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
console.log(`data/skills.json: ${skillsData.skills.length} skills, covers refreshed`);
console.log(`data/site.json: cases ${next.totalCases}, video ${next.videoCases}, creators ${next.creators}`);
