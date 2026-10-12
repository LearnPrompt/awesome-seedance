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
/** 验收：第二个模型复核后不同意的比例超过这个数，整批不推。 */
export const REVIEW_MAX_DISAGREE_RATIO = 0.15;

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

/**
 * 解读 claude -p --output-format json 的整段输出。
 * 返回 { text, error, fatal }：error 是人话原因；fatal 为 true 表示重试也没用（登录过期、额度、CLI 没装）。
 */
export function interpretModelOutput(raw) {
  let j;
  try {
    j = JSON.parse(raw);
  } catch {
    return { text: null, error: `CLI 输出不是 JSON：${String(raw || "").trim().slice(0, 160) || "(空输出，可能 claude 命令不存在或被杀)"}`, fatal: !raw };
  }
  if (j && j.is_error) {
    const msg = String(j.result || j.error || "unknown error");
    const fatal = /authenticat|oauth|login|logged out|credit|quota|billing|rate limit/i.test(msg);
    return { text: null, error: `模型调用失败：${msg.slice(0, 200)}`, fatal };
  }
  return { text: typeof j?.result === "string" ? j.result : null, error: null, fatal: false };
}

/**
 * 从模型回复里取出 JSON 数组；容忍前后有说明文字或 ```json 围栏，也容忍尾巴里再出现方括号
 * （无头 claude 会受用户级 CLAUDE.md 影响在数组后追加进度条之类的文字）。按括号配对、跳过字符串内容找真正的结尾。
 * 取不出来返回 null。
 */
export function parseLabelResponse(text) {
  if (typeof text !== "string") return null;
  let start = text.indexOf("[");
  while (start >= 0) {
    let depth = 0;
    let inStr = false;
    for (let i = start; i < text.length; i++) {
      const ch = text[i];
      if (inStr) {
        if (ch === "\\") i++;
        else if (ch === '"') inStr = false;
        continue;
      }
      if (ch === '"') inStr = true;
      else if (ch === "[" || ch === "{") depth++;
      else if (ch === "]" || ch === "}") {
        depth--;
        if (depth === 0) {
          try {
            const arr = JSON.parse(text.slice(start, i + 1));
            if (Array.isArray(arr)) return arr;
          } catch {
            /* 这个 [ 不是数组开头，继续找下一个 */
          }
          break;
        }
      }
    }
    start = text.indexOf("[", start + 1);
  }
  return null;
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
  if (r.review) {
    L.push("## 验收（第二个模型独立复核）", "");
    L.push(`模型：${r.review.model}。复核 ${r.review.reviewed} 条，同意 ${r.review.reviewed - r.review.disagreed.length} 条，不同意 ${r.review.disagreed.length} 条，未覆盖 ${r.review.missing.length} 条。不同意的已从本次写入中拿掉。`, "");
    if (r.review.disagreed.length) {
      L.push("| 案例 | 标注员 | 验收员 | 验收员理由 |", "| --- | --- | --- | --- |");
      for (const d of r.review.disagreed.slice(0, 40)) L.push(`| [${d.slug.slice(0, 36)}](https://goodcase.ai/cases/${d.slug}) | ${d.proposed} | ${d.suggested} | ${d.why || ""} |`);
      L.push("");
    }
  }
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

// ---------------------------------------------------------------------------
// 验收：第二个模型独立复核标注员的结果。只给它案例和拟定标签，不给标注员的理由，避免被带着走。
// ---------------------------------------------------------------------------

export function buildReviewPrompt(templates, items) {
  const tpl = templates
    .map((t) => `- ${t.id}｜${t.title?.zh || t.title?.en}｜${clean(t.useWhen?.zh || t.useWhen?.en).slice(0, 120)}`)
    .join("\n");
  return [
    "你是验收员。另一位标注员已经给下面每条 AI 视频案例定了一个模板标签，你独立判断这个标签对不对。只输出一个 JSON 数组，不要任何解释、不要 markdown 围栏。",
    "",
    "现有模板（id｜标题｜适用场景）：",
    tpl,
    "",
    "规则：",
    "1. 按玩法判断：这条视频让观众看到什么、提示语按什么结构写。标签对就 agree，不对就 disagree。",
    "2. disagree 时在 label 里给出你认为正确的模板 id（必须逐字等于列表里的某个 id），确实没有合适的就写 unclear。agree 时 label 原样照抄。",
    "3. 拿不准宁可 disagree，不要顺着标注员。",
    "",
    '输出格式：[{"slug":"…","verdict":"agree|disagree","label":"…","why":"不超过 15 个字"}]，数组长度必须等于输入条数，slug 原样照抄。',
    "",
    "案例（每行一个 JSON，proposed 是标注员定的标签）：",
    ...items.map((c) => JSON.stringify(c)),
  ].join("\n");
}

/** 校验验收输出。返回 { reviews, missing }；reviews 里每条 { slug, verdict, label, why }。 */
export function validateReviews(raw, items, knownIds) {
  const bySlug = new Map(items.map((c) => [c.slug, c]));
  const seen = new Set();
  const reviews = [];
  for (const r of raw || []) {
    if (!r || typeof r.slug !== "string" || !bySlug.has(r.slug) || seen.has(r.slug)) continue;
    const verdict = r.verdict === "agree" ? "agree" : "disagree";
    let label = typeof r.label === "string" ? r.label.trim() : "";
    if (verdict === "agree") label = bySlug.get(r.slug).proposed;
    else if (!knownIds.has(label)) label = "unclear";
    seen.add(r.slug);
    reviews.push({ slug: r.slug, verdict, label, why: clean(r.why).slice(0, 40) });
  }
  return { reviews, missing: items.map((c) => c.slug).filter((s) => !seen.has(s)) };
}

/**
 * 按验收结果修正写入：验收员不同意的从 assign 里拿掉，转入 deferred；验收员没覆盖到的也拿掉（宁缺毋滥）。
 * 返回 { assign, deferred, disagreed, missing }。
 */
export function applyReview(assign, reviews, missing) {
  const next = { ...assign };
  const deferred = [];
  const disagreed = [];
  const verdictBySlug = new Map(reviews.map((r) => [r.slug, r]));
  for (const slug of Object.keys(assign)) {
    if (assign[slug] === null) continue; // 明确留空的不需要验收
    const r = verdictBySlug.get(slug);
    if (!r) { delete next[slug]; deferred.push({ slug, label: assign[slug], confidence: "-", reason: "reviewer did not cover", why: "" }); continue; }
    if (r.verdict === "disagree") {
      delete next[slug];
      disagreed.push({ slug, proposed: assign[slug], suggested: r.label, why: r.why });
      deferred.push({ slug, label: assign[slug], confidence: "-", reason: `reviewer disagrees → ${r.label}`, why: r.why });
    }
  }
  return { assign: next, deferred, disagreed, missing };
}

export function reviewGate(reviewed, disagreed, missing) {
  const total = reviewed + missing.length;
  const ratio = total ? (disagreed.length + missing.length) / total : 0;
  return {
    name: `验收：第二个模型不同意或未覆盖的比例不超过 ${Math.round(REVIEW_MAX_DISAGREE_RATIO * 100)}%`,
    pass: ratio <= REVIEW_MAX_DISAGREE_RATIO,
    detail: `复核 ${reviewed} 条，不同意 ${disagreed.length} 条，未覆盖 ${missing.length} 条（${(ratio * 100).toFixed(1)}%）`,
  };
}
