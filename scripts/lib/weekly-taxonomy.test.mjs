import { test } from "node:test";
import assert from "node:assert/strict";
import { buildLabelPrompt, chunk, decide, digestCase, evaluateGates, parseLabelResponse, renderReport, validateLabels, SPIKE_MIN_ADDED } from "./weekly-taxonomy.mjs";

const known = new Set(["handheld-ugc-vlog", "food-asmr"]);

test("parseLabelResponse tolerates prose and code fences around the JSON array", () => {
  const body = '[{"slug":"a","label":"food-asmr","confidence":"high","why":"吃播"}]';
  assert.equal(parseLabelResponse(body).length, 1);
  assert.equal(parseLabelResponse("好的，结果如下：\n```json\n" + body + "\n```\n完成。")[0].slug, "a");
  assert.equal(parseLabelResponse("没有数组"), null);
  assert.equal(parseLabelResponse("[not json]"), null);
  assert.equal(parseLabelResponse(null), null);
});

test("validateLabels only accepts slugs from the shard and labels that are known ids, new:<kebab> or unclear", () => {
  const raw = [
    { slug: "a", label: "food-asmr", confidence: "high", why: "x" },
    { slug: "b", label: "new:night-market", confidence: "med" },
    { slug: "c", label: "unclear", confidence: "bogus" },
    { slug: "d", label: "Food ASMR", confidence: "high" },
    { slug: "zzz", label: "food-asmr", confidence: "high" },
    { slug: "a", label: "handheld-ugc-vlog", confidence: "high" },
  ];
  const { rows, missing, rejected } = validateLabels(raw, ["a", "b", "c", "d", "e"], known);
  assert.deepEqual(rows.map((r) => r.slug), ["a", "b", "c"]);
  assert.equal(rows[2].confidence, "low", "unknown confidence degrades to low, never to high");
  assert.deepEqual(missing, ["d", "e"]);
  assert.equal(rejected.length, 3);
});

test("decide writes only confident known labels; low confidence and new classes wait for a human", () => {
  const rows = [
    { slug: "a", label: "food-asmr", confidence: "high" },
    { slug: "b", label: "handheld-ugc-vlog", confidence: "low" },
    { slug: "c", label: "new:night-market", confidence: "high" },
    { slug: "d", label: "unclear", confidence: "med" },
    { slug: "e", label: "unclear", confidence: "low" },
  ];
  const { assign, deferred, candidates } = decide(rows, known);
  assert.deepEqual(assign, { a: "food-asmr", d: null });
  assert.deepEqual(deferred.map((x) => x.slug), ["b", "c", "e"]);
  assert.deepEqual(candidates, { "night-market": ["c"] });
});

test("evaluateGates fails on missing labels, too many low-confidence rows, or a template spiking", () => {
  const rows = Array.from({ length: 10 }, (_, i) => ({ slug: `s${i}`, label: "food-asmr", confidence: i < 3 ? "low" : "high" }));
  const g1 = evaluateGates({ todoCount: 11, rows, missing: ["x"], assign: {}, beforeCounts: {} });
  assert.equal(g1.gates[0].pass, false);
  assert.equal(g1.gates[1].pass, false, "30% low confidence is over the 20% cap");
  const assign = Object.fromEntries(Array.from({ length: SPIKE_MIN_ADDED }, (_, i) => [`s${i}`, "food-asmr"]));
  const g2 = evaluateGates({ todoCount: SPIKE_MIN_ADDED, rows: Object.keys(assign).map((slug) => ({ slug, label: "food-asmr", confidence: "high" })), missing: [], assign, beforeCounts: { "food-asmr": 6 } });
  assert.equal(g2.gates[2].pass, false, "a template that more than doubles in one week is flagged");
  const g3 = evaluateGates({ todoCount: SPIKE_MIN_ADDED, rows: [], missing: [], assign, beforeCounts: { "food-asmr": 200 } });
  assert.equal(g3.gates[2].pass, true, "the same growth on a big template is normal");
  assert.equal(g3.added["food-asmr"], SPIKE_MIN_ADDED);
});

test("buildLabelPrompt lists every template id and one JSON line per case; digestCase drops pipeline tags", () => {
  const d = digestCase({ slug: "a", title: " T ", tags: ["source-x", "vlog", "auto-approved"], summary: "s", promptFull: "p ".repeat(600), heatScore: 9 });
  assert.deepEqual(d.tags, ["vlog"]);
  assert.ok(d.prompt.length <= 650);
  const p = buildLabelPrompt([{ id: "food-asmr", title: { zh: "美食" }, useWhen: { zh: "吃播" } }], [d]);
  assert.match(p, /- food-asmr｜美食｜吃播/);
  assert.match(p, /\{"slug":"a"/);
  assert.equal(chunk([1, 2, 3, 4, 5], 2).length, 3);
});

test("renderReport states the outcome first and never claims a push that did not happen", () => {
  const base = { date: "2026-10-05", todoCount: 3, assign: { a: "food-asmr" }, deferred: [{ slug: "b", label: "new:x", confidence: "high", reason: "new class", why: "" }], totalCases: 10, filedAfter: 8, added: { "food-asmr": 1 }, beforeCounts: { "food-asmr": 6 }, candidates: { x: ["b"] }, notes: [], gates: [{ name: "g", pass: true, detail: "ok" }], checks: [{ name: "npm test", pass: true, detail: "ok" }] };
  assert.match(renderReport({ ...base, pushed: false, pushEnabled: false }), /\*\*结论：闸门全过，自动推送未开启，本次只出报告\*\*/);
  assert.match(renderReport({ ...base, pushed: true, commit: "abc1234", pushEnabled: true }), /已推送（abc1234）/);
  assert.match(renderReport({ ...base, pushed: false, pushEnabled: true, gates: [{ name: "g", pass: false, detail: "bad" }] }), /有闸门未过，未推送/);
});
