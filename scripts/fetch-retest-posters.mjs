#!/usr/bin/env node
// 给复测聚焦区的样例抽一帧复测视频当封面：assets/retests/<slug>.jpg。
// 需要本机有 ffmpeg；CI 不跑这个脚本（生成器在没有封面文件时回落成纯链接）。
// Run: node scripts/fetch-retest-posters.mjs [--force]
import { readFileSync, existsSync, mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pickRetestShowcase } from "./lib/sections.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "assets", "retests");
const force = process.argv.includes("--force");

const data = JSON.parse(readFileSync(path.join(ROOT, "data/cases.json"), "utf8"));
const showcase = pickRetestShowcase(data.cases || [], 3);
mkdirSync(OUT_DIR, { recursive: true });

for (const c of showcase) {
  const url = c.retestSummary?.latest?.artifactUrl;
  if (!url) continue;
  const out = path.join(OUT_DIR, `${c.slug}.jpg`);
  if (existsSync(out) && !force) {
    console.log(`skip (exists): ${path.relative(ROOT, out)}`);
    continue;
  }
  const tmp = path.join(OUT_DIR, `${c.slug}.tmp.mp4`);
  console.log(`fetch ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`  ✗ ${res.status}`);
    continue;
  }
  writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
  // 取第 2 秒的一帧（开头常是黑场/淡入），宽 640，质量 4。
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", "2", "-i", tmp, "-frames:v", "1", "-vf", "scale=640:-2", "-q:v", "4", out]);
  unlinkSync(tmp);
  console.log(`  ✓ ${path.relative(ROOT, out)}`);
}
