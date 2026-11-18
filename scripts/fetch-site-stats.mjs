#!/usr/bin/env node
// 刷新 data/site.json 里 goodcase.ai 的站点全量数字（公开 API 的列表接口最多 50 条，拿不到总数）。
// 2026-11-19 起改读站点公开的 llms-full.txt（解析与校验见 scripts/lib/site-stats.mjs）：
// 首页、列表页从 2026-11-15 起对脚本回 429 挑战页，原来的 HTML 正则抓数整步失败。
// 取数或校验任何一步失败就退出非零、不写文件，不会把旧值或 0 当成新数字。
// 视频 Skill 的数量和创作者方法不从这里抓，由私仓导出的 data/site-skills.json 提供，生成器直接读它。
// Run: node scripts/fetch-site-stats.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { fetchSiteStats } from "./lib/site-stats.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const FILE = path.join(ROOT, "data/site.json");
const site = JSON.parse(readFileSync(FILE, "utf8"));

const stats = await fetchSiteStats();

const next = {
  ...site,
  // 东八区日期，和 README 里的“最近更新”口径一致
  fetchedAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10),
  totalCases: stats.totalCases,
  videoCases: stats.videoCases,
  creators: stats.creators,
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
    if (!res.ok) console.log(`  ! ${skill.siteSlug}: HTTP ${res.status}, keeping old cover`);
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
