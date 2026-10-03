// 每周归类任务的纯逻辑：提示语、解析模型输出、闸门判定、报告渲染。
// IO（调模型、读写盘、git）在 scripts/weekly-taxonomy.mjs。
//
// 设计约束（2026-10-03）：
//   - 只把高/中置信度、且落在现有模板 id 里的标签写进 data/case-taxonomy.json
//   - 低置信度留到下轮；模型提的新类（new:<name>）不建模板，只在报告里提名，由人决定
//   - 任何一道闸门不过就不推，只出报告

export const SHARD_SIZE = 40;
export const LOW_CONFIDENCE_MAX_RATIO = 0.2;
export const NEW_CLASS_MIN_CASES = 5;
/** 单个模板一周新增超过这个数、且超过原有条数时视为异常（多半是标注跑偏）。 */
export const SPIKE_MIN_ADDED = 15;

const clean = (s) => (s || "").replace(/\s+/g, " ").trim();
const JUNK_TAG = /^(source-|author-display:|prompt-public|auto-approved|human-reviewed|youmind|seedance|query-|trial-)/i;

export function digestCase(c) {
  return {
    slug: c.slug,
    heat: c.heatScore ?? null,
    title: clean(c.title).slice(0, 120),
    tags: (c.tags || []).filter((t) => !JUNK_TAG.test(t)),
    summary: clean(c.summary).slice(0, 220),
    prompt: clean(c.promptFull).slice(0, 650),
  };
}

export function chunk(list, size = SHARD_SIZE) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

export function buildLabelPrompt(templates, cases) {
  const tpl = templates
    .map((t) => `- ${t.id}｜${t.title?.zh || t.title?.en}｜${clean(t.useWhen?.zh || t.useWhen?.en).slice(0, 120)}`)
    .join("\n");
  return [
    "你是一个标注员。任务：给下面每条 AI 视频案例打一个分类标签。只输出一个 JSON 数组，不要任何解释、不要 markdown 围栏。",
    "",
    "现有模板（id｜标题｜适用场景）：",
    tpl,
    "",
    "规则：",
    "1. 按玩法分类：这条视频让观众看到什么、提示语按什么结构写。每条只给一个最贴切的标签。",
    "2. 现有模板能装下就用它的 id，必须逐字等于上面列表里的某个 id。",
    "3. 都不贴切才用新类，写成 new:<kebab-case 英文名>。",
    "4. prompt 为空或太短、确实判断不了的标 unclear，不要硬猜。",
    "5. confidence 取 high、med、low 之一。拿不准就老实标 low。",
    "",
    '输出格式：[{"slug":"…","label":"…","confidence":"high|med|low","why":"不超过 15 个字"}]，数组长度必须等于输入条数，slug 原样照抄。',
    "",
    "案例（每行一个 JSON）：",
    ...cases.map((c) => JSON.stringify(c)),
  ].join("\n");
}

/** 从模型回复里取出 JSON 数组；容忍前后有说明文字或 ```json 围栏。取不出来返回 null。 */
export function parseLabelResponse(text) {
  if (typeof text !== "string") return null;
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start < 0 || end <= start) return null;
  try {
    const arr = JSON.parse(text.slice(start, end + 1));
    return Array.isArray(arr) ? arr : null;
  } catch {
    return null;
  }
}

/**
 * 校验并归一一片标签。只接受这片里出现过的 slug；label 必须是已知模板 id、new:<kebab> 或 unclear。
 * 返回 { rows, missing, rejected }。
 */
export function validateLabels(raw, shardSlugs, knownIds) {
  const want = new Set(shardSlugs);
  const seen = new Set();
  const rows = [];
  const rejected = [];
  for (const r of raw || []) {
    if (!r || typeof r.slug !== "string" || !want.has(r.slug) || seen.has(r.slug)) {
      rejected.push({ slug: r && r.slug, reason: "unknown or duplicate slug" });
      continue;
    }
    const label = typeof r.label === "string" ? r.label.trim() : "";
    const ok = knownIds.has(label) || label === "unclear" || /^new:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(label);
    if (!ok) {
      rejected.push({ slug: r.slug, reason: `bad label "${label}"` });
      continue;
    }
    const confidence = ["high", "med", "low"].includes(r.confidence) ? r.confidence : "low";
    seen.add(r.slug);
    rows.push({ slug: r.slug, label, confidence, why: clean(r.why).slice(0, 40) });
  }
  const missing = shardSlugs.filter((s) => !seen.has(s));
  return { rows, missing, rejected };
}

/**
 * 把标签变成决定。
 *  - 已知模板 + high/med → 写入
 *  - unclear + high/med → 写 null（明确留空，下轮不再问）
 *  - low，或 new:* → 不写，留到下轮；new:* 另外计入候选新类
 */
export function decide(rows, knownIds) {
  const assign = {};
  const deferred = [];
  const candidates = {};
  for (const r of rows) {
    if (r.label.startsWith("new:")) {
      (candidates[r.label.slice(4)] ??= []).push(r.slug);
      deferred.push({ ...r, reason: "new class" });
    } else if (r.confidence === "low") {
      deferred.push({ ...r, reason: "low confidence" });
    } else if (r.label === "unclear") {
      assign[r.slug] = null;
    } else if (knownIds.has(r.label)) {
      assign[r.slug] = r.label;
    }
  }
  return { assign, deferred, candidates };
}

/** 闸门。返回 [{ name, pass, detail }]；全部 pass 才允许推。 */
export function evaluateGates({ todoCount, rows, missing, assign, beforeCounts }) {
  const gates = [];
  gates.push({ name: "覆盖率：每条新案例都拿到了标签", pass: missing.length === 0, detail: `${rows.length}/${todoCount} 条有标签，缺 ${missing.length} 条` });
  const low = rows.filter((r) => r.confidence === "low").length;
  const ratio = rows.length ? low / rows.length : 0;
  gates.push({
    name: `低置信度占比不超过 ${Math.round(LOW_CONFIDENCE_MAX_RATIO * 100)}%`,
    pass: ratio <= LOW_CONFIDENCE_MAX_RATIO,
    detail: `${low}/${rows.length}（${(ratio * 100).toFixed(1)}%）`,
  });
  const added = {};
  for (const v of Object.values(assign)) if (v) added[v] = (added[v] || 0) + 1;
  const spikes = Object.entries(added).filter(([id, n]) => n >= SPIKE_MIN_ADDED && n > (beforeCounts[id] || 0));
  gates.push({
    name: "没有模板异常暴涨",
    pass: spikes.length === 0,
    detail: spikes.length ? spikes.map(([id, n]) => `${id} +${n}（原 ${beforeCounts[id] || 0}）`).join("，") : "无",
  });
  return { gates, added };
}

export function renderReport(r) {
  const L = [];
  const ok = r.gates.every((g) => g.pass) && r.checks.every((c) => c.pass);
  L.push(`# awesome-seedance 每周归类报告 · ${r.date}`);
  L.push("");
  L.push(`**结论：${r.pushed ? `已推送（${r.commit}）` : ok ? (r.pushEnabled ? "闸门全过，但推送失败，见下" : "闸门全过，自动推送未开启，本次只出报告") : "有闸门未过，未推送"}**`);
  L.push("");
  L.push(`本周新同步未归类 ${r.todoCount} 条；写入 ${Object.keys(r.assign).length} 条（其中明确留空 ${Object.values(r.assign).filter((v) => v === null).length} 条）；留到下轮 ${r.deferred.length} 条。归类后全库 ${r.totalCases} 条中已归入模板 ${r.filedAfter} 条。`);
  L.push("");
  L.push("## 闸门");
  L.push("");
  L.push("| 项 | 结果 | 明细 |", "| --- | --- | --- |");
  for (const g of [...r.gates, ...r.checks]) L.push(`| ${g.name} | ${g.pass ? "通过" : "**未过**"} | ${String(g.detail).replace(/\|/g, "\\|")} |`);
  L.push("");
  L.push("## 各模板本周新增");
  L.push("");
  const rows = Object.entries(r.added).sort((a, b) => b[1] - a[1]);
  if (rows.length) {
    L.push("| 模板 | 新增 | 原有 |", "| --- | --- | --- |");
    for (const [id, n] of rows) L.push(`| ${id} | ${n} | ${r.beforeCounts[id] || 0} |`);
  } else L.push("无。");
  L.push("");
  L.push("## 候选新类（只提名，不自动建模板）");
  L.push("");
  const cand = Object.entries(r.candidates).sort((a, b) => b[1].length - a[1].length);
  if (cand.length) {
    L.push(`够 ${NEW_CLASS_MIN_CASES} 条的可以考虑做成模板和 Skill，需要人拍板。`, "");
    L.push("| 新类 | 本周条数 | 够量 | 案例 |", "| --- | --- | --- | --- |");
    for (const [name, slugs] of cand) L.push(`| ${name} | ${slugs.length} | ${slugs.length >= NEW_CLASS_MIN_CASES ? "是" : "否"} | ${slugs.slice(0, 5).map((s) => `[${s.slice(0, 28)}](https://goodcase.ai/cases/${s})`).join(" · ")} |`);
  } else L.push("无。");
  L.push("");
  L.push("## 留到下轮的案例");
  L.push("");
  if (r.deferred.length) {
    L.push("| 案例 | 模型给的标签 | 置信度 | 原因 | 说明 |", "| --- | --- | --- | --- | --- |");
    for (const d of r.deferred.slice(0, 60)) L.push(`| [${d.slug.slice(0, 36)}](https://goodcase.ai/cases/${d.slug}) | ${d.label} | ${d.confidence} | ${d.reason} | ${d.why || ""} |`);
    if (r.deferred.length > 60) L.push("", `其余 ${r.deferred.length - 60} 条略。`);
  } else L.push("无。");
  L.push("");
  if (r.notes.length) {
    L.push("## 运行记录", "");
    for (const n of r.notes) L.push(`- ${n}`);
    L.push("");
  }
  return L.join("\n");
}
