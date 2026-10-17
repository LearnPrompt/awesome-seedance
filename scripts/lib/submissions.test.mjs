import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateSubmission } from "./submissions.mjs";

const good = {
  title: "Rainy Tokyo crosswalk one-take",
  sourceUrl: "https://x.com/someone/status/2090000000000000000",
  creator: "@someone",
  sourcePublishedAt: "2026-09-01",
  models: ["Seedance 2.5"],
  promptFull: "Ultra-realistic handheld one-take of a woman crossing Shibuya at night in the rain, neon reflections on wet asphalt, 16:9, 30 seconds.",
  mediaUrl: "https://video.twimg.com/ext_tw_video/1/pu/vid/720x1280/abc.mp4",
};

test("a filled-in submission passes", () => {
  assert.deepEqual(validateSubmission(good, { fileName: "rainy-tokyo-crosswalk.json", knownSources: new Set() }), []);
});

test("the untouched TEMPLATE fails on placeholders", () => {
  const template = {
    title: "Short descriptive title (English or Chinese)",
    sourceUrl: "https://x.com/<creator>/status/<id>  (the creator's ORIGINAL post; aggregators are rejected)",
    creator: "@handle as shown on the source platform",
    sourcePublishedAt: "2026-09-01",
    models: ["Seedance 2.5"],
    promptFull: "The full prompt text, verbatim from the source post.",
    mediaUrl: "https://... direct link to the output video or poster shown in the source post",
  };
  const problems = validateSubmission(template, { fileName: "my-case.json" });
  assert.ok(problems.some((p) => p.includes("TEMPLATE placeholder")));
  assert.ok(problems.some((p) => p.startsWith("sourceUrl")), "sourceUrl placeholder is flagged");
  assert.ok(problems.some((p) => p.startsWith("mediaUrl")), "mediaUrl placeholder is flagged");
});

test("missing fields, bad model names, aggregator sources, duplicates and bad file names are reported", () => {
  const problems = validateSubmission(
    { ...good, promptFull: "", models: ["Kling 2.1"], sourceUrl: "https://goodcase.ai/cases/x", sourcePublishedAt: "Sept 1" },
    { fileName: "Bad Name.json", knownSources: new Set(["https://goodcase.ai/cases/x"]) }
  );
  assert.ok(problems.some((p) => p === "missing required field: promptFull"));
  assert.ok(problems.some((p) => p.includes('"Kling 2.1"')));
  assert.ok(problems.some((p) => p.includes("aggregator")));
  assert.ok(problems.some((p) => p.includes("already in data/cases.json")));
  assert.ok(problems.some((p) => p.includes("kebab-case")));
  assert.ok(problems.some((p) => p.includes("YYYY-MM-DD")));
});

test("non-object input is rejected", () => {
  assert.deepEqual(validateSubmission([]), ["top level must be a JSON object"]);
  assert.deepEqual(validateSubmission(null), ["top level must be a JSON object"]);
});

test("creator accepts Unicode handles, platform display names and emoji", () => {
  for (const creator of ["@someone", "卡尔", "@你好", "映像クリエイター", "Jane Doe", "导演 🎬", "  袋鼠帝  "]) {
    assert.deepEqual(validateSubmission({ ...good, creator }), [], creator);
  }
});

test("creator length is independently limited to 60 Unicode code points", () => {
  for (const character of ["a", "中", "🎬"]) {
    assert.deepEqual(validateSubmission({ ...good, creator: character.repeat(60) }), []);
    assert.deepEqual(validateSubmission({ ...good, creator: character.repeat(61) }), [
      "creator must be at most 60 Unicode code points",
    ]);
  }
  assert.deepEqual(validateSubmission({ ...good, creator: `  ${"🎬".repeat(60)}  ` }), []);
});

test("creator rejects non-string values and reports empty values only once", () => {
  for (const creator of [42, true, false, {}, ["someone"]]) {
    assert.deepEqual(validateSubmission({ ...good, creator }), ["creator must be a string"]);
  }
  for (const creator of [undefined, null, "", "   ", []]) {
    assert.deepEqual(validateSubmission({ ...good, creator }), ["missing required field: creator"]);
  }
});

test("creator rejects C0 and C1 controls, including those trimmed from the edges", () => {
  for (const code of [...Array.from({ length: 32 }, (_, i) => i), ...Array.from({ length: 33 }, (_, i) => i + 127)]) {
    const control = String.fromCodePoint(code);
    for (const creator of [`Name${control}Here`, `${control}Name`, `Name${control}`]) {
      assert.deepEqual(validateSubmission({ ...good, creator }), ["creator must not contain control characters"], `U+${code.toString(16)}`);
    }
  }
});

test("all existing case creators remain accepted", () => {
  const { cases } = JSON.parse(readFileSync(new URL("../../data/cases.json", import.meta.url), "utf8"));
  for (const { slug, creator } of cases) {
    assert.deepEqual(validateSubmission({ ...good, creator }), [], slug);
  }
});
