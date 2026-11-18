import test from "node:test";
import assert from "node:assert/strict";
import { fetchSiteStats, parseLlmsFull } from "./site-stats.mjs";

const entry = (slug, creator, category) =>
  `## 标题 ${slug}\nURL: https://goodcase.ai/cases/${slug}\nCreator: ${creator}\nCategory: 标签 (${category})\nPrompt:\n## 不是条目的 Prompt 小标题\n\n---\n`;

const snapshot = (header, entries) => `# GoodCase.ai — 全量案例索引\n\n${header}\n\n## 使用规则\n\n- x\n\n${entries.join("\n")}`;

const OK = snapshot("案例总数：4", [
  entry("a", "@Alice", "video"),
  entry("b", "alice", "image"),
  entry("c", "Bob", "video"),
  entry("d", "王五", "web"),
]);

test("全量快照：案例数、视频数、去重后的创作者数（@ 与大小写同口径）", () => {
  assert.deepEqual(parseLlmsFull(OK), { totalCases: 4, videoCases: 2, creators: 3 });
});

test("没有「案例总数」行（挑战页 HTML）明确失败", () => {
  assert.throws(() => parseLlmsFull("<html><title>Vercel Security Checkpoint</title></html>"), /案例总数/);
});

test("站点自报快照不完整时失败，不拿残缺数当总数", () => {
  const text = OK.replace("案例总数：4", "案例总数：4（库内应有 6 条，2 条取数失败已跳过，本次快照不完整）");
  assert.throws(() => parseLlmsFull(text), /不完整/);
});

test("条目缺 Creator 字段时条数对不上，失败", () => {
  const text = OK.replace("Creator: Bob\n", "");
  assert.throws(() => parseLlmsFull(text), /头部写 4 条，能完整解析的只有 3 条/);
});

test("重复 URL 不重复计数，条数对不上就失败", () => {
  const text = snapshot("案例总数：2", [entry("a", "x", "video"), entry("a", "x", "video")]);
  assert.throws(() => parseLlmsFull(text), /只有 1 条/);
});

const fakeResponse = (status, body, headers = {}) => ({
  ok: status >= 200 && status < 300,
  status,
  headers: new Headers(headers),
  text: async () => body,
});

test("429 挑战页明确失败", async () => {
  const fetchImpl = async () => fakeResponse(429, "challenge", { "x-vercel-mitigated": "challenge" });
  await assert.rejects(fetchSiteStats({ fetchImpl }), /429 \(x-vercel-mitigated: challenge\)/);
});

test("200 但带挑战标记也失败", async () => {
  const fetchImpl = async () => fakeResponse(200, OK, { "x-vercel-mitigated": "challenge" });
  await assert.rejects(fetchSiteStats({ fetchImpl }), /x-vercel-mitigated/);
});

test("超时明确失败", async () => {
  // 真 fetch 有连接撑着事件循环；Node 20/22 的 AbortSignal.timeout 计时器不占循环，假 fetch 得自己占住，否则测试被取消
  const fetchImpl = (_url, { signal }) =>
    new Promise((_, reject) => {
      const keepAlive = setTimeout(() => {}, 5_000);
      signal.addEventListener("abort", () => { clearTimeout(keepAlive); reject(signal.reason); });
    });
  await assert.rejects(fetchSiteStats({ fetchImpl, timeoutMs: 20 }), /timeout|aborted/i);
});

test("正常响应返回解析结果", async () => {
  const fetchImpl = async () => fakeResponse(200, OK, { "content-type": "text/plain" });
  assert.deepEqual(await fetchSiteStats({ fetchImpl }), { totalCases: 4, videoCases: 2, creators: 3 });
});
