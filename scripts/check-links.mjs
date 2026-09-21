#!/usr/bin/env node
// 校验生成物里的站内链接：README 三语 + docs/**/*.md。
//   - 相对路径指向的文件必须存在
//   - 页内锚点、跨文件锚点必须等于目标文件里某个标题按 GitHub 规则算出的锚点（含重名的 -1、-2 后缀）
// Run: npm run check:links（先跑 npm run generate）。有断链时退出码为 1。
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { githubSlug } from "./lib/render.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : name.endsWith(".md") ? [full] : [];
  });
}

const anchorCache = new Map();
function anchorsOf(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const seen = new Map();
  const anchors = new Set();
  let fence = null;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const f = line.match(/^\s*(`{3,}|~{3,})/);
    if (f) {
      if (!fence) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length) fence = null;
      continue;
    }
    if (fence) continue;
    const h = line.match(/^#{1,6}\s+(.*?)\s*#*\s*$/);
    if (!h) continue;
    // 标题里的 markdown 链接/图片只留可见文字，和 GitHub 渲染后的文本一致
    const text = h[1].replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[`*]/g, "");
    const base = githubSlug(text);
    const n = seen.get(base) || 0;
    seen.set(base, n + 1);
    anchors.add(n === 0 ? base : `${base}-${n}`);
  }
  anchorCache.set(file, anchors);
  return anchors;
}

const files = [...["README.md", "README_zh.md", "README_ja.md"].map((f) => path.join(ROOT, f)), ...walk(path.join(ROOT, "docs"))];
const broken = [];
let checked = 0;
for (const file of files) {
  let fence = null;
  for (const [i, line] of readFileSync(file, "utf8").split("\n").entries()) {
    const f = line.match(/^\s*(`{3,}|~{3,})/);
    if (f) {
      if (!fence) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length) fence = null;
      continue;
    }
    if (fence) continue;
    const targets = [...line.matchAll(/\]\(([^)\s]+)\)/g), ...line.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (const raw of targets) {
      if (/^(https?:|mailto:)/.test(raw)) continue;
      checked += 1;
      const [rel, frag] = raw.split("#");
      const target = rel ? path.resolve(path.dirname(file), rel) : file;
      const where = `${path.relative(ROOT, file)}:${i + 1}`;
      if (!existsSync(target)) {
        broken.push(`${where}  missing file  ${raw}`);
        continue;
      }
      if (frag != null && frag !== "" && target.endsWith(".md")) {
        const want = decodeURIComponent(frag);
        if (!anchorsOf(target).has(want)) broken.push(`${where}  missing anchor  ${raw}`);
      }
    }
  }
}
console.log(`${files.length} files, ${checked} internal links checked, ${broken.length} broken`);
for (const b of broken) console.log(`  ${b}`);
process.exit(broken.length ? 1 : 0);
