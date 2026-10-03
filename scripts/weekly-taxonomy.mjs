#!/usr/bin/env node
// 每周归类任务：把 data/cases.json 里还没进 data/case-taxonomy.json 的案例标到现有模板下。
// 由本机 LaunchAgent 每周一跑一次（scripts/run-weekly-taxonomy.sh 负责把专用 clone 重置到 origin/main）。
//
//   node scripts/weekly-taxonomy.mjs                 只出报告，不提交不推送（默认）
//   node scripts/weekly-taxonomy.mjs --push          闸门全过才 commit + push origin main
//   node scripts/weekly-taxonomy.mjs --limit 20      只标前 20 条（试跑用）
//
// 推送另有一道总开关：~/.awesome-seedance-weekly/auto-push-on 这个文件存在才会真的推；
// 删掉它就回到只出报告。推送范围写死在 PUSH_PATHS，工作区里出现范围外的改动一律拒推。
// 报告落在 ~/Downloads/awesome-seedance-weekly/<日期>.md，成功失败都写。
// 标注用无头 claude（claude -p --model sonnet），走本机订阅，不需要 API key。
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";
import { loadLibrary, buildTemplateIndex } from "./lib/library.mjs";
import { buildLabelPrompt, chunk, decide, digestCase, evaluateGates, parseLabelResponse, renderReport, validateLabels } from "./lib/weekly-taxonomy.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const WANT_PUSH = args.includes("--push");
const LIMIT = args.includes("--limit") ? Number(args[args.indexOf("--limit") + 1]) : Infinity;
const STATE_DIR = path.join(os.homedir(), ".awesome-seedance-weekly");
const REPORT_DIR = path.join(os.homedir(), "Downloads", "awesome-seedance-weekly");
const PUSH_SWITCH = path.join(STATE_DIR, "auto-push-on");
const PUSH_PATHS = ["data/case-taxonomy.json", "data/stats.json", "README.md", "README_zh.md", "README_ja.md", "docs", "agents/skills", "assets/hero.svg"];
const MODEL = process.env.WEEKLY_TAXONOMY_MODEL || "sonnet";
const CONCURRENCY = 3;
const date = new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 10);
const notes = [];

function sh(cmd, argv, opts = {}) {
  const r = spawnSync(cmd, argv, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...opts });
  return { code: r.status, out: (r.stdout || "") + (r.stderr || "") };
}

function callModel(prompt) {
  return new Promise((resolve) => {
    // 在空目录里跑，避免把仓库上下文和项目级 hook 带进标注会话
    const cwd = path.join(os.tmpdir(), "awesome-seedance-weekly-label");
    mkdirSync(cwd, { recursive: true });
    const child = spawn("claude", ["-p", "--model", MODEL, "--output-format", "json"], { cwd, stdio: ["pipe", "pipe", "pipe"] });
    let out = "";
    const timer = setTimeout(() => child.kill("SIGKILL"), 10 * 60 * 1000);
    child.stdout.on("data", (d) => (out += d));
    child.on("close", () => {
      clearTimeout(timer);
      try {
        const j = JSON.parse(out);
        resolve(j.is_error ? null : j.result);
      } catch {
        resolve(null);
      }
    });
    child.on("error", () => { clearTimeout(timer); resolve(null); });
    child.stdin.end(prompt);
  });
}

async function labelShard(shard, templates, knownIds) {
  const slugs = shard.map((c) => c.slug);
  let rows = [];
  let pending = shard;
  // 缺的条目重试一次；仍缺就算覆盖率闸门不过
  for (let attempt = 1; attempt <= 2 && pending.length; attempt++) {
    const text = await callModel(buildLabelPrompt(templates, pending));
    const parsed = parseLabelResponse(text);
    if (!parsed) { notes.push(`一片 ${pending.length} 条第 ${attempt} 次调用没拿到可解析的 JSON`); continue; }
    const v = validateLabels(parsed, pending.map((c) => c.slug), knownIds);
    if (v.rejected.length) notes.push(`丢弃 ${v.rejected.length} 条不合规标签：${v.rejected.slice(0, 3).map((x) => `${x.slug}(${x.reason})`).join("；")}`);
    rows = rows.concat(v.rows);
    pending = pending.filter((c) => v.missing.includes(c.slug));
  }
  return { rows, missing: slugs.filter((s) => !rows.some((r) => r.slug === s)) };
}

async function pool(items, worker, n) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (next < items.length) { const i = next++; results[i] = await worker(items[i], i); }
  }));
  return results;
}

function finish(report) {
  mkdirSync(REPORT_DIR, { recursive: true });
  const file = path.join(REPORT_DIR, `${date}.md`);
  writeFileSync(file, renderReport({ ...report, date, notes }), "utf8");
  console.log(`REPORT ${file}`);
  const title = report.pushed ? "已推送" : "未推送，见报告";
  spawnSync("osascript", ["-e", `display notification "写入 ${Object.keys(report.assign).length} 条，留到下轮 ${report.deferred.length} 条。${title}" with title "awesome-seedance 每周归类"`]);
  return file;
}

// ---------------------------------------------------------------------------
const { cases } = JSON.parse(readFileSync(path.join(ROOT, "data/cases.json"), "utf8"));
const taxFile = path.join(ROOT, "data/case-taxonomy.json");
const tax = JSON.parse(readFileSync(taxFile, "utf8"));
const { library } = loadLibrary(ROOT);
const knownIds = new Set(library.templates.map((t) => t.id));
const before = buildTemplateIndex(library.templates, tax, cases);
const beforeCounts = Object.fromEntries([...before.byTemplate].map(([id, list]) => [id, list.length]));
const todoAll = cases.filter((c) => !(c.slug in tax.assignments)).sort((a, b) => (b.heatScore || 0) - (a.heatScore || 0));
const todo = todoAll.slice(0, LIMIT);
if (todoAll.length > todo.length) notes.push(`--limit ${LIMIT}：本次只标 ${todo.length}/${todoAll.length} 条`);

const empty = { todoCount: todo.length, assign: {}, deferred: [], candidates: {}, added: {}, beforeCounts, totalCases: cases.length, filedAfter: cases.length - before.unassigned.length, gates: [], checks: [], pushed: false, pushEnabled: false };
if (!todo.length) {
  notes.push("没有新的未归类案例，本次无事可做。");
  finish(empty);
  process.exit(0);
}

console.log(`labelling ${todo.length} cases in ${Math.ceil(todo.length / 40)} shard(s) with claude -p --model ${MODEL}`);
const shards = chunk(todo.map(digestCase));
const labelled = await pool(shards, (s) => labelShard(s, library.templates, knownIds), CONCURRENCY);
const rows = labelled.flatMap((x) => x.rows);
const missing = labelled.flatMap((x) => x.missing);
const { assign, deferred, candidates } = decide(rows, knownIds);
const { gates, added } = evaluateGates({ todoCount: todo.length, rows, missing, assign, beforeCounts });

// 写入归类并重新生成，然后跑仓库自己的检查
Object.assign(tax.assignments, assign);
tax.assignments = Object.fromEntries(Object.keys(tax.assignments).sort().map((k) => [k, tax.assignments[k]]));
writeFileSync(taxFile, JSON.stringify(tax, null, 2) + "\n", "utf8");
const checks = [];
const t = sh("npm", ["test"]);
checks.push({ name: "npm test", pass: t.code === 0, detail: (t.out.match(/ℹ pass \d+|ℹ fail \d+/g) || []).join(" ") || `exit ${t.code}` });
const g1 = sh("npm", ["run", "generate"]);
const d1 = sh("git", ["status", "--porcelain"]).out;
const g2 = sh("npm", ["run", "generate"]);
const d2 = sh("git", ["status", "--porcelain"]).out;
checks.push({ name: "npm run generate 连跑两次结果一致", pass: g1.code === 0 && g2.code === 0 && d1 === d2, detail: g1.code || g2.code ? `exit ${g1.code}/${g2.code}` : "一致" });
const l = sh("npm", ["run", "-s", "check:links"]);
checks.push({ name: "站内链接校验", pass: l.code === 0, detail: l.out.split("\n")[0] });
const dirty = d2.split("\n").filter(Boolean).map((x) => x.slice(3));
const outside = dirty.filter((f) => !PUSH_PATHS.some((p) => f === p || f.startsWith(p + "/")));
checks.push({ name: "改动只落在允许推送的路径内", pass: outside.length === 0, detail: outside.length ? outside.slice(0, 5).join("，") : `${dirty.length} 个文件` });

const after = buildTemplateIndex(library.templates, tax, cases);
const report = { ...empty, assign, deferred, candidates, added, gates, checks, filedAfter: cases.length - after.unassigned.length };
const allPass = gates.every((g) => g.pass) && checks.every((c) => c.pass);
const pushEnabled = WANT_PUSH && existsSync(PUSH_SWITCH);
report.pushEnabled = pushEnabled;
if (WANT_PUSH && !existsSync(PUSH_SWITCH)) notes.push(`传了 --push 但总开关 ${PUSH_SWITCH} 不存在，本次只出报告。`);

if (allPass && pushEnabled && Object.keys(assign).length) {
  sh("git", ["add", "--", ...PUSH_PATHS]);
  const msg = `chore(taxonomy): 每周归类 ${date}，新增 ${Object.keys(assign).length} 条\n\n由 scripts/weekly-taxonomy.mjs 自动生成。闸门与明细见本机报告。`;
  const c = sh("git", ["-c", "user.name=LearnPrompt", "-c", "user.email=learnprompt2023@gmail.com", "commit", "-q", "-m", msg]);
  const p = c.code === 0 ? sh("git", ["push", "-q", "origin", "HEAD:main"]) : { code: 1, out: c.out };
  if (p.code === 0) {
    report.pushed = true;
    report.commit = sh("git", ["rev-parse", "--short", "HEAD"]).out.trim();
  } else notes.push(`提交或推送失败：${p.out.trim().slice(0, 300)}`);
}
finish(report);
process.exit(allPass ? 0 : 2);
