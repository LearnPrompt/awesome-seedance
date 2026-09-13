**[English](./README.md)** | [中文](./README_zh.md) | [日本語](./README_ja.md)

[<img src="./assets/hero.svg" width="100%" alt="Awesome Seedance: verified Seedance prompts, cross-model retests, templates and an agent skill">](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance)

# Awesome Seedance [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**Verified Seedance 2.5 / 2.0 prompt library.** 419 cases checked against their original posts, 257 cross-model retests, 14 reusable templates and 25 installable AI-video Skills, drawn from goodcase.ai's 1059 verified AI cases across video, image, UI and copy. Synced daily, new cases land every day.

[![cases](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats.json&query=%24.cases&label=cases&color=e8541e&style=flat-square)](#-all-prompts) [![cross-model retests](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats.json&query=%24.retestRuns&label=cross-model%20retests&color=111111&style=flat-square)](#-cross-model-retests) [![templates](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats.json&query=%24.templates&label=templates&color=111111&style=flat-square)](#-prompt-templates) [![AI video skills](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats.json&query=%24.skills&label=AI%20video%20skills&color=111111&style=flat-square)](#install) [![updated](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats.json&query=%24.lastUpdated&label=updated&color=555555&style=flat-square)](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) [![npm](https://img.shields.io/npm/v/seedance-prompt-library?label=agent%20skill&color=111111&style=flat-square)](https://www.npmjs.com/package/seedance-prompt-library) [![License: MIT (code)](https://img.shields.io/badge/code-MIT-lightgrey.svg?style=flat-square)](./LICENSE) [![Content: CC BY 4.0 (curation)](https://img.shields.io/badge/curation-CC%20BY%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by/4.0/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-lightgrey.svg?style=flat-square)](./contributing.md)

More verified AI cases with full prompts → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)

## Contents

- [Quick Links](#quick-links)
- [Install](#install)
- [Why this list](#why-this-list)
- [🔁 Cross-model retests](#-cross-model-retests)
- [⭐ Featured](#-featured)
- [🗂️ Category Overview](#-category-overview)
- [🧩 Prompt Templates](#-prompt-templates)
- [🔥 Top 30 by heat](#-top-30-by-heat)
- [🎬 All Prompts](#-all-prompts)
- [🌐 Browse on goodcase.ai](#-browse-on-goodcaseai)
- [Statistics](#statistics)
- [🚀 How to use this repository](#-how-to-use-this-repository)
- [How to Contribute](#how-to-contribute)
- [🙏 Acknowledgements](#-acknowledgements)
- [Copyright & Takedown Notice](#copyright--takedown-notice)
- [Star History](#star-history)
- [License & Reuse](#license--reuse)

## Quick Links

Jump straight to the assets. The Contents list below is the section map of this page.

- [Gallery index](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery.md) - All 419 cases with full prompts, every page in one place.
- [Seedance 2.5](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery-seedance-2-5.md) - 43 cases.
- [Seedance 2.0, part 1/2](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery-seedance-2-0-part-1.md) - Cases 1–96.
- [Seedance 2.0, part 2/2](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery-seedance-2-0-part-2.md) - Cases 97–130.
- [Seedance (version unspecified), part 1/3](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery-seedance-unversioned-part-1.md) - Cases 1–94.
- [Seedance (version unspecified), part 2/3](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery-seedance-unversioned-part-2.md) - Cases 95–190.
- [Seedance (version unspecified), part 3/3](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/gallery-seedance-unversioned-part-3.md) - Cases 191–246.
- [Prompt templates](https://github.com/LearnPrompt/awesome-seedance/blob/main/README.md#-prompt-templates) - 14 reusable structures in 6 categories.
- [Agent Skill](https://github.com/LearnPrompt/awesome-seedance/tree/main/agents/skills/seedance-prompt-library) - Install with `npx seedance-prompt-library install` into Claude Code / Codex.
- [More AI-video Skills on goodcase.ai](https://goodcase.ai/skills?category=video) - 24 installable Skills grown out of the video cases.
- [Live site on goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) - Search, heat leaderboard, stability ranking, retest logs.
## Install

```bash
npx seedance-prompt-library install
```

Installs the `seedance-prompt-library` Agent Skill into Claude Code and Codex, so your agent can pull structured prompt templates and write Seedance prompts directly in your editor. Prefer the [skills CLI](https://github.com/vercel-labs/skills)? `npx skills add LearnPrompt/awesome-seedance --skill seedance-prompt-library` installs the same skill.

## Why this list

**Human-verified against the source.** Every prompt here was checked against the creator's original post. Prompts reverse-engineered from the output video only, with no source and no submission, are rejected outright, per [goodcase.ai's collection standards](https://goodcase.ai/standards) (in force since 2026-08-05).

**Re-run on a second model.** Most cases have been re-generated on another video model, with the verdict, score and output published. See [Cross-model retests](#-cross-model-retests).

**Full provenance on every entry.** Author, original post link, publish date, and a heat score, a relative percentile among published cases on the same platform. If it didn't rank, it isn't here.

**Ships as an installable Agent Skill.** `npx seedance-prompt-library install` drops a template library straight into Claude Code / Codex so your agent writes Seedance prompts from proven structures, not guesses.

## 🔁 Cross-model retests

**As far as we know, this is the first public prompt library that re-runs its video prompts on a second model at scale and publishes the result either way.** 247 of the cases here have been re-run (257 runs so far), each with a verdict, a judge score and the generated output. A prompt that only ever worked once, for its author, on one model, is a screenshot; a prompt that survives a re-run is a method.

| Model               | Runs | Reproduction rate |
| ------------------- | ---- | ----------------- |
| MiniMax H3 Max 768p | 246  | 73%               |
| MiniMax H3 768p     | 11   | 82%               |

Verdicts across all runs: ✅ 188 reproduced · ⚠️ 66 degraded · ❌ 3 failed. Runs without a final score show as `score n/a`. Per-case verdicts, scores and output videos are on each case's goodcase.ai page; the model labels and batch dates are explained under [Statistics](#statistics).

**Same prompt, second model.** Three examples, including one that did not hold up:

| Case                                                                                                   | Original (Seedance)                                                                                                                                                                                | Retest (second model)                                                                                                                                                                                                                                                                                                                                                   | Verdict                   |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [首尔夏夜 Vlog](https://goodcase.ai/cases/vlog-c8171f712492)<br>2.5 · heat 99                              | [<img src="https://media.goodcase.ai/media/poster/vlog-c8171f712492.jpg" width="160" alt="首尔夏夜 Vlog">](https://goodcase.ai/cases/vlog-c8171f712492)                                                | [<img src="./assets/retests/vlog-c8171f712492.jpg" width="160" alt="MiniMax H3 Max 768p: 首尔夏夜 Vlog">](https://goodcase.ai/cases/vlog-c8171f712492)<br>MiniMax H3 Max 768p<br>[▶ output video](https://media.goodcase.ai/retests/vlog-c8171f712492/video-minimax-h3-768p-20260907-phase1/generated.mp4)                                                                  | ✅ reproduced (score 75.7) |
| [mini DV 咖啡 ASMR vlog](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)<br>2.5 · heat 99 | [<img src="https://media.goodcase.ai/media/poster/seedance-25-minidv-coffee-asmr-vlog.jpg" width="160" alt="mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) | [<img src="./assets/retests/seedance-25-minidv-coffee-asmr-vlog.jpg" width="160" alt="MiniMax H3 Max 768p: mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)<br>MiniMax H3 Max 768p<br>[▶ output video](https://media.goodcase.ai/retests/seedance-25-minidv-coffee-asmr-vlog/video-minimax-h3-768p-20260907-phase1/generated.mp4) | ✅ reproduced (score 77.3) |
| [复古餐厅时间冻结与倒放](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)<br>2.5 · heat 100        | [<img src="https://media.goodcase.ai/media/poster/seedance-25-diner-frozen-time-rewind.jpg" width="160" alt="复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)        | [<img src="./assets/retests/seedance-25-diner-frozen-time-rewind.jpg" width="160" alt="MiniMax H3 Max 768p: 复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)<br>MiniMax H3 Max 768p<br>[▶ output video](https://media.goodcase.ai/retests/seedance-25-diner-frozen-time-rewind/video-minimax-h3-768p-20260907-phase1/generated.mp4)       | ⚠️ degraded (score 63.9)  |

[<img src="./assets/goodcase-retest-evidence.png" width="800" alt="Retest evidence block on a goodcase.ai case page">](https://goodcase.ai/cases/vlog-c8171f712492)

Every run costs real inference money: over US$300 across 257 runs so far, at list price with no discounts, which is what anyone else would pay to reproduce them. We publish the result whether or not it flatters the prompt. Want Kling, Veo, Hailuo or the Seedance 2.5 API added to the retest matrix? [Sponsor a batch →](https://github.com/LearnPrompt/awesome-seedance/issues/new?title=Sponsor%20a%20retest%20batch&labels=sponsor) or write to [carl@goodcase.ai](mailto:carl@goodcase.ai).

## ⭐ Featured

Top 6 prompts by heat score, across all Seedance versions. Long prompts are collapsed; click to expand.

### 复古餐厅时间冻结与倒放

> 一份 30 秒的时间冻结加倒放脚本：咖啡打翻的瞬间被锁死，镜头绕悬浮液带走完整圈，再让所有人和物倒回原位，最后一个招手把事故消解掉。

[<img src="https://media.goodcase.ai/media/poster/seedance-25-diner-frozen-time-rewind.jpg" width="600" alt="复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)

**Author:** @techhalla | **Source:** [Original](https://x.com/techhalla/status/2083389002552664385) | **Published:** 2026-08-01 | **Heat:** 100

**Stability:** 64/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ degraded (score 63.9) · [output](https://media.goodcase.ai/retests/seedance-25-diner-frozen-time-rewind/video-minimax-h3-768p-20260907-phase1/generated.mp4)

<details>
<summary><b>Full prompt (13 lines, click to expand)</b></summary>

```
Photorealistic cinematic 1950s American diner, chrome stools, red vinyl, neon glow and checkerboard floor, shot with modern lived-in realism and soft natural window light. Subtle handheld texture, warm practicals, rich period detail, heavy film grain.

0-4s: [Medium Wide] A striking young woman in her early 20s sits alone at the counter, calm and slightly amused, slowly sipping a tall thick milkshake through a straw. Behind her a young waitress in classic uniform approaches with a tray of eggs and bacon in one hand and a full glass coffee pot in the other. An older lady starts rising from a nearby booth.

4-8s: [Dynamic Tracking] The older lady collides hard into the waitress. Tray, plate, eggs, bacon and coffee pot explode upward in chaotic slow motion. Coffee erupts into long liquid ribbons and perfect suspended droplets. Camera immediately begins a smooth continuous orbit around the impact. Time locks completely at the peak of the spill. Every face freezes in pure shock. Only the girl at the counter keeps moving, completely unfazed.

8-17s: [Slow 360° Orbital] Camera glides in a full elegant orbit through the frozen diner. Coffee hangs in mid-air as glassy ribbons and spheres with perfect volume and surface tension. Bacon strips, eggs and the spinning tray float weightlessly. Patrons and waitress remain locked in startled expressions. The girl at the counter takes one slow, deliberate sip, eyes half-lidded, almost bored, while the entire frozen world (except her) begins an elegant reverse: every droplet, every piece of food and every person rewinds smoothly back to the exact starting positions.

17-24s: [Medium Shot] Rewind lands perfectly. Waitress stands balanced again with tray and coffee pot. The girl lifts her eyes, raises two fingers in a small casual gesture and softly calls the waitress by name. The waitress turns toward her just before the older lady begins to stand, completely avoiding the collision. A tiny private smile crosses the girl’s face.

24-30s: [Extreme Close-Up] Hard cut to her face as she takes one last slow sip. Soft knowing smile, eyes almost closed in quiet satisfaction, like she has done this a hundred times. Shallow depth of field, creamy bokeh of the neon diner behind her.

Photorealistic, ultra-detailed fluid physics, perfect motion blur only on moving elements, stable characters, cinematic lighting, heavy natural film grain, no artifacts, movie-level temporal coherence, high rewatch value.
```

</details>

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)**

### 首尔夏夜 Vlog

> 一份详尽的脚本式提示词，用于创作一段展现首尔夏夜怀旧家庭录像风格的视频。

[<img src="https://media.goodcase.ai/media/poster/vlog-c8171f712492.jpg" width="600" alt="首尔夏夜 Vlog">](https://goodcase.ai/cases/vlog-c8171f712492)

**Author:** @AIwithkhan | **Source:** [Original](https://x.com/AIwithkhan/status/2092971211169100048) | **Published:** 2026-08-27 | **Heat:** 99

**Stability:** 76/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ✅ reproduced (score 75.7) · [output](https://media.goodcase.ai/retests/vlog-c8171f712492/video-minimax-h3-768p-20260907-phase1/generated.mp4)

```
Create a 30-second, 1080p ultra-realistic personal home-video showing an ordinary summer evening in the life of a young Korean woman. No reference image. MAIN SUBJECT Young Korean woman in her early 20s, naturally pretty, realistic skin texture, minimal makeup, relaxed and approachable personality. Long black hair loosely tied into a messy side ponytail with a few loose strands around her face. Wearing a fitted pastel-blue short top, loose cream pajama-style pants, black sneakers and a simple silver necklace. Maintain the same face, hairstyle, clothing, body proportions and overall appearance throughout the entire video. SETTING A quiet older Seoul residential neighborhood during a warm summer evening. Narrow concrete lanes, small houses, potted plants, bicycles, old walls, utility poles, overhead wires, a tiny neighborhood bakery, a public water tap and large leafy trees casting shadows across the street. Everything should feel lived-in, ordinary and peaceful. CAMERA / VISUAL AESTHETIC Raw personal footage casually recorded by a friend on an early-2000s consumer DV camcorder. Strong handheld shake, imperfect framing, autofocus hunting, exposure shifts, occasional motion blur, faded colors, soft digital detail, mild noise, accidental zooms and natural camera imperfections. — OUTSIDE THE HOUSE She steps outside carrying a small reusable shopping bag. She locks the door, adjusts her messy ponytail and looks toward the camera with a relaxed smile. — BAKERY STOP She reaches a tiny neighborhood bakery and buys a warm pastry. She steps outside, takes her first bite and immediately smiles because it tastes good. She notices her friend filming and holds the pastry toward the camera playfully before taking another bite. — WALKING HOME She continues down the narrow street while eating. A neighborhood cat follows her for a few steps. She notices it, crouches down and gently pets it. — SMALL ACCIDENT She walks beneath a large tree when a few leaves fall onto her hair. She stops, looks confused, then realizes what happened and laughs. — QUIET MOMENT She reaches a low concrete wall beside the street and sits down for a moment. — FINAL MOMENT She stands up and continues walking home.
```

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/vlog-c8171f712492)**

### 双人 K-pop MV 逐镜分镜

> 把 30 秒切成十几段两到四秒的镜头，每段写死机位、景别、背景和动作，两个女生用粉发和黑发做外观锚点贯穿全片。值钱的是这套时间码排镜法。

[<img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="600" alt="双人 K-pop MV 逐镜分镜">](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)

**Author:** @Just_sharon7 | **Source:** [Original](https://x.com/Just_sharon7/status/2083422886686031982) | **Published:** 2026-08-01 | **Heat:** 99

**Stability:** 74/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ degraded (score 74.2) · [output](https://media.goodcase.ai/retests/seedance-25-kpop-mv-dual-idol/video-minimax-h3-768p-20260907-phase1/generated.mp4)

```
30-second ultra-realistic K-pop MV featuring two young East Asian women with flawless synchronization, cinematic lighting, glossy skin, realistic hair and fabric physics, natural body motion, and 4K live-action quality. Vibrant hot pink, electric blue, and silver color palette. 0–2s: Wide shot in a bright circular pink studio with reflective floor. Pink-haired woman (left) and black-haired woman (right) perform energetic opening pose and synchronized dance. 2–4s: Medium close-up of the black-haired woman on a blue spotlight stage, confidently pointing at the camera. 4–6s: Pink-haired woman dances before shimmering blue-silver tinsel curtains, dramatic hair flip and fluid arm movements. 6–8s: Back to the pink studio. Both perform synchronized choreography with sharp arm waves, hip sways, and strong formations. 8–10s: Extreme close-up of both faces against a blue background, glossy makeup, subtle smiles, and direct eye contact. 10–14s: Solo shots at the tinsel backdrop. Pink-haired woman mouths lyrics and gestures confidently, followed by the black-haired woman with relaxed jacket styling. 14–18s: Pink studio. Coordinated jacket choreography, hair flips, powerful synchronized dance, ending hands-on-hips. 18–22s: Glamour close-ups. Black-haired woman under glittering bokeh lights, then pink-haired woman with wind-blown hair against a soft pink background. 22–24s: Blue spotlight stage. Mirrored black-haired performer effect with synchronized spins and flowing hair. 24–26s: Both walk confidently toward the camera in front of shimmering tinsel curtains, reflections visible on the floor. 26–29s: Final synchronized dance and ending pose in the pink circular studio, standing together and looking into the camera. Style: Hyper-realistic live action, Seedance 2.5-quality motion realism, perfect lip sync, natural weight shifts, flowing hair, realistic fabric simulation, polished K-pop music video cinematography.
```

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)**

### mini DV 咖啡 ASMR vlog

> 用家用摄像机的缺陷反向做真实感：手抖、来回找焦、曝光漂移、磁带颗粒全写进提示词，再配一份 ASMR 声音清单和每段三秒的分镜节奏。

[<img src="https://media.goodcase.ai/media/poster/seedance-25-minidv-coffee-asmr-vlog.jpg" width="600" alt="mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)

**Author:** @Strength04_X | **Source:** [Original](https://x.com/Strength04_X/status/2083094742682787939) | **Published:** 2026-07-31 | **Heat:** 99

**Stability:** 77/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ✅ reproduced (score 77.3) · [output](https://media.goodcase.ai/retests/seedance-25-minidv-coffee-asmr-vlog/video-minimax-h3-768p-20260907-phase1/generated.mp4)

<details>
<summary><b>Full prompt (17 lines, click to expand)</b></summary>

```
CAMERA / LOOK: Handheld mini DV camcorder footage filmed by the subject herself. Slight hand shake, occasional focus hunting, imperfect framing, natural zoom adjustments, soft tape-like image quality, subtle grain, realistic auto-exposure shifts from bright kitchen morning light. Natural skin tones, mild motion blur, authentic consumer camcorder aesthetic.
STYLE: Cozy coffee-prep vlog with gentle ASMR elements. Relaxed pacing, minimal dialogue, candid moments. Focus on satisfying sounds: bean grinder whirring, portafilter tamping, steam wand hissing, cup clinking, milk frothing.
SUBJECT: Young man in his mid-20s, plain t-shirt, hair slightly tousled, minimal accessories. Calm, focused energy while making his morning coffee.
SETTING: Small kitchen counter with an espresso machine on a bright morning. Natural daylight, coffee beans and a mug nearby, quiet atmosphere.
STORYBOARD:
→ (3s, propped medium shot) Places camera on the counter, switches on the machine. "Morning coffee, the proper way."
→ (3s, overhead shot) Grinds fresh coffee beans, fine grounds falling into the portafilter.
→ (3s, close-up) Tamps the grounds down firmly and evenly.
→ (3s, handheld shot) Locks the portafilter into the machine. "Here we go."
→ (3s, detail shot) Espresso streams slowly into a small cup. No dialogue.
→ (3s, medium shot) Pours cold milk into a small steel pitcher. "Time for the milk."
→ (3s, macro shot) Steam wand hissing as it froths the milk.
→ (3s, propped shot) Pours frothed milk carefully over the espresso, forming light layers.
→ (3s, warm ending shot) Holds the finished cup, takes a small sip, satisfied smile. "That's exactly what I needed."
→ (3s, final shot) Reaches toward camera, still holding the cup. "See you later." Hand covers lens as recording ends.
AUDIO NOTES: Natural kitchen ambience — grinder whirring, tamping, steam hissing, milk pouring should be clearly audible. Dialogue quiet and casual.
REALISM NOTES: Authentic body language, natural blinking, genuine focused smiles, occasional careful pauses while pouring, imperfect framing, focus breathing, bright morning light shifts. Should resemble a genuine personal coffee vlog on a consumer camcorder, not a commercial or AI-generated production.
```

</details>

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)**

### Create a 30-second, 1080p ultra-realistic emotional live-action scene…

> Pure emotions 😭 Can Hollywood match it ? Seedance 2.5 Prompt : Create a 30-second, 1080p ultra-realistic emotional live-action scene about a young woman discov…

[<img src="https://media.goodcase.ai/cases/4727d059893d.jpg" width="600" alt="Create a 30-second, 1080p ultra-realistic emotional live-action scene…">](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)

**Author:** @AIwithSynthia | **Source:** [Original](https://x.com/AIwithSynthia/status/2096439253970395531) | **Published:** 2026-09-06 | **Heat:** 95

<details>
<summary><b>Full prompt (54 lines, click to expand)</b></summary>

```
Create a 30-second, 1080p ultra-realistic emotional live-action scene about a young woman discovering her boyfriend kissing another woman inside a quiet café. Focus entirely on authentic human emotion, natural crying, subtle facial expressions and believable body language. No melodrama or exaggerated acting.
MAIN CHARACTER
Young Korean woman in her early 20s, naturally beautiful, realistic skin texture, minimal makeup, long black hair loosely styled, wearing a fitted pastel-pink top, casual denim shorts and simple sneakers.
Maintain the exact same face, hairstyle, outfit, body proportions and appearance throughout the entire scene.
LOCATION
A cozy modern café on a rainy evening. Warm interior lighting, large windows covered with rain droplets, wooden tables, soft background chatter, cups and plates, a few customers quietly talking.
SCENE
She enters the café carrying a small handbag, casually looking around for her boyfriend.
She suddenly notices him sitting at a table near the window.
He is kissing another young woman.
She immediately stops walking.
Her expression changes from confusion to disbelief.
She slowly lowers her handbag.
She stares at them silently for a few seconds, struggling to process what she is seeing.
Her eyes begin to fill with tears.
Show realistic tears naturally forming along her lower eyelids, then slowly rolling down her cheeks. No exaggerated crying.
She takes a shaky breath.
She walks toward their table.
Her boyfriend notices her.
His expression immediately changes to shock.
The other woman turns around and becomes uncomfortable.
The girlfriend looks directly at him with trembling eyes and quietly says:
“How could you do this to me?”
Her voice cracks naturally.
She wipes one tear from her cheek, but more tears continue falling.
Her boyfriend stands up and tries to explain.
She shakes her head and takes a small step backward.
She says through tears:
“I trusted you.”
She looks at him for one final moment.
Her expression shows heartbreak, disappointment and disbelief rather than anger.
She turns around and walks toward the café door while quietly crying.
Her boyfriend takes one step after her but stops.
She reaches the door, pauses briefly, wipes her face and leaves.
The camera remains inside the café as the door closes behind her.
CAMERA / VISUAL STYLE
Handheld cinematic camera with subtle natural movement. Start with a medium shot following her into the café, then slowly move closer when she notices the couple.
Use realistic close-ups of her eyes, trembling lips, tears and subtle facial reactions.
Natural shallow depth of field, realistic skin pores, authentic reflections in the café windows, soft rainy evening light, natural motion blur, 24fps, photorealistic live-action.
Do not make her crying look beautiful or glamorous. It should look spontaneous, uncomfortable and emotionally real.
AUDIO
Rain against the café windows, quiet conversations, cups being placed on tables, distant café ambience, footsteps and subtle breathing.
No background music.
No narration.
Dialogue should sound natural with slight pauses, trembling voice and emotional breathing.
EMOTIONAL DIRECTION
The emotion should build gradually:
confusion → realization → shock → disbelief → tears → confrontation → heartbreak → quiet acceptance.
Avoid screaming, physical aggression or exaggerated dramatic gestures.
CONTINUITY / REALISM
Keep tears physically consistent once they appear. Tears should remain visible on her cheeks and naturally accumulate as she continues crying.
Maintain consistent clothing, hairstyle, jewelry and facial identity.
No sudden emotional changes, no disappearing tears, no duplicated people, no changing café layout, no unnatural body movements.
NEGATIVE: plastic skin, fake tears, exaggerated crying, cartoon expressions, melodramatic acting, screaming, physical violence, distorted faces, extra fingers, identity drift, outfit changes, CGI
```

</details>

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)**

### Seedance 原生 UGC 竖屏手机跟拍短片

> Some people still think AI does't look real - This video just ended the argument Made with Seedance 2.5 1080p on maxfusi

[<img src="https://media.goodcase.ai/media/poster/mightyking-seedance-ai-7bbc1d4f9ad9.jpg" width="600" alt="Seedance 原生 UGC 竖屏手机跟拍短片">](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)

**Author:** @mightyking | **Source:** [Original](https://x.com/mightyking/status/2089299068514148655) | **Published:** 2026-08-17 | **Heat:** 95

**Stability:** 71/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ degraded (score 71.2) · [output](https://media.goodcase.ai/retests/mightyking-seedance-ai-7bbc1d4f9ad9/video-minimax-h3-768p-20260907-phase1/generated.mp4)

<details>
<summary><b>Full prompt (29 lines, click to expand)</b></summary>

```
Raw vertical phone video (UGC), handheld throughout, filmed by a friend who walks with the group, casual sway, natural night lighting, wide-angle lens, deep focus.

Characters: The hero is a young woman with long dark hair in a deep-purple one-shoulder dress with a small shoulder bag. Her three friends: one in a dark brown dress, a blonde in a black wrap dress, a blonde in a white mini dress — party dresses and sandals. Laughing, spontaneous night-out energy.

Setting: A luxury marina at night — a stone quay along a narrow water slip flanked on both sides by large moored luxury yachts, big white hulls rising on either side, masts and rigging above, fenders on the hulls. Warm orange street lamps, palm trees, distant city lights. The yachts glow with blue-turquoise underwater LED lights spilling into the water; a yellow mooring line runs to the stone.

[0.0s–4.0s] — Wide tracking shot, eye level, camera moving backward. The camera walks backward ahead of the four women as they stroll toward it down the marina promenade, framed head-to-toe, laughing and chatting in French; warm lamplight and palm trees behind, slight handheld bob.

[4.0s–6.0s] — Medium shot, eye level, backward track + quick left pan. The woman in the purple dress surges ahead of the group toward the lens, one arm raised, hair flying; the camera, on their left, keeps tracking back and pans to hold her.

[6.0s–8.0s] — Medium-wide, camera tilts down-left to follow, whip motion. She reaches the quay edge between the moored luxury yachts and launches headfirst over the edge; the handheld camera whips left and tilts down to chase her off the stone.

[8.0s–10.0s] — High-angle wide, looking down at the water, slight jolt. From up on the quay the camera looks down as she plunges headfirst into the blue-turquoise water in the slip between the big yacht hulls — a big splash, the underwater lights glowing around the impact; the handheld frame jolts slightly with the motion.

[10.0s–13.0s] — High-angle medium, looking down, small handheld drift. She surfaces in the teal water, gasping and laughing up at the camera, hair slicked back, treading water.

[13.0s–16.0s] — Handheld tilt up and back down, slight zoom. The camera lifts off the water and tilts up to a person leaning on the deck railing of one of the moored luxury yachts, watching her in the water, then tilts back down and zooms slightly in on her still treading and laughing.

[16.0s–20.0s] — High-angle medium, tilting to follow her up. She swims to the stone quay wall, reaches up and grabs a thick dark mooring pole, and hauls herself out; the camera tilts upward with her as she rises from the water, legs braced on the stone.

[20.0s–23.0s] — Low/close medium at the quay edge, static handheld. She climbs onto the stone lip, rolls onto her side, soaked dress clinging, then pushes up to her feet; the camera holds close, catching the water running off her.

[23.0s–27.0s] — Medium shot, eye level, loose handheld reframe. Back on the promenade, dripping wet, she flips her long wet hair forward and wrings it out, laughing, as her friends and passing pedestrians move behind her.

[27.0s–30.0s] — Medium shot, eye level, camera settles. Still dripping, she straightens up and strikes a confident, playful pose for the camera — hand on hip, tossing her wet hair back with a big smile — her friends laughing around her; the camera holds on the pose to end.

Audio: Live sync sound — friends laughing and shouting excitedly in French, a scream at the leap, a big water splash, water sloshing against the yacht hulls, wet footsteps on stone, ambient night marina sounds. No music.

Style: Raw amateur vertical phone footage, natural night lighting, warm street lamps mixing with the turquoise underwater yacht glow, authentic handheld motion.
```

</details>

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)**

## 🗂️ Category Overview

Start from the look you want, then open that category's templates to turn it into a reusable structure. Each tile links to the templates below and to the verified cases behind them.

<table>
<tr>
<td width="25%" valign="top" align="center"><b>🏗️ Timeline &amp; shot scripts</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt"><img src="https://media.goodcase.ai/media/poster/boa-hancock-water-obstacle-race-prompt.jpg" width="200" alt="Boa Hancock Water Obstacle Race Prompt"></a><br><sub>Second-by-second timeline script</sub><br><a href="#-structural-foundations-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt">Top case</a></td>
<td width="25%" valign="top" align="center"><b>🏗️ Reference &amp; identity lock</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b"><img src="https://media.goodcase.ai/cases/d0baab1d99c4.jpg" width="200" alt="Seedance 2.5 多参考图锁定人物形象短片"></a><br><sub>Reference image identity lock</sub><br><a href="#-structural-foundations-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b">Top case</a></td>
<td width="25%" valign="top" align="center"><b>📱 Handheld UGC vlog</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog"><img src="https://media.goodcase.ai/media/poster/seedance-25-minidv-coffee-asmr-vlog.jpg" width="200" alt="mini DV 咖啡 ASMR vlog"></a><br><sub>Handheld UGC vlog</sub><br><a href="#-realism-and-ugc-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog">Top case</a></td>
<td width="25%" valign="top" align="center"><b>📱 First-person POV take</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-gopro-94a73eef1dbf.jpg" width="200" alt="Seedance 2.5 生成 GoPro 钓鱼到烤鱼全流程"></a><br><sub>First-person continuous take</sub><br><a href="#-realism-and-ugc-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf">Top case</a></td>
</tr>
<tr>
<td width="25%" valign="top" align="center"><b>🛍️ UGC creator review</b><br><sub>1 template · 3 verified cases</sub><br><br><a href="https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-ugc-69e79f387106.jpg" width="200" alt="Seedance 2.5 太阳镜UGC测评口播视频"></a><br><sub>UGC creator review with spoken lines</sub><br><a href="#-commercial-and-product-3-templates">View templates</a> · <a href="https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106">Top case</a></td>
<td width="25%" valign="top" align="center"><b>🛍️ Product commercial</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/case-e53b614b0f42"><img src="https://media.goodcase.ai/media/poster/case-e53b614b0f42.jpg" width="200" alt="阿马尔菲海岸奢华珠宝广告"></a><br><sub>Cinematic product commercial shot list</sub><br><a href="#-commercial-and-product-3-templates">View templates</a> · <a href="https://goodcase.ai/cases/case-e53b614b0f42">Top case</a></td>
<td width="25%" valign="top" align="center"><b>🛍️ Process &amp; transformation</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/case-429309e40d97"><img src="https://media.goodcase.ai/media/poster/case-429309e40d97.jpg" width="200" alt="建筑空间改造延时摄影"></a><br><sub>Process and transformation montage</sub><br><a href="#-commercial-and-product-3-templates">View templates</a> · <a href="https://goodcase.ai/cases/case-429309e40d97">Top case</a></td>
<td width="25%" valign="top" align="center"><b>🎭 Dialogue &amp; lip-sync</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-b2d98861daf9.jpg" width="200" alt="Seedance 十五秒连续对白健身房 vlog"></a><br><sub>Dialogue and performance beats</sub><br><a href="#-narrative-and-performance-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9">Top case</a></td>
</tr>
<tr>
<td width="25%" valign="top" align="center"><b>🎭 Cinematic narrative short</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951"><img src="https://media.goodcase.ai/media/poster/caden-flux-seedance-ai-8ffb5f062951.jpg" width="200" alt="Nano Banana + Seedance 2.5 六十秒高中初恋微电影"></a><br><sub>Cinematic narrative short</sub><br><a href="#-narrative-and-performance-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951">Top case</a></td>
<td width="25%" valign="top" align="center"><b>🎨 Anime &amp; stop motion</b><br><sub>2 templates · 8 verified cases</sub><br><br><a href="https://goodcase.ai/cases/case-69e5879cc5a7"><img src="https://media.goodcase.ai/media/poster/case-69e5879cc5a7.jpg" width="200" alt="定格动画：狼群袭击序列"></a><br><sub>Anime and stylized style lock · Stop motion and stepped cadence</sub><br><a href="#-stylized-animation-2-templates">View templates</a> · <a href="https://goodcase.ai/cases/case-69e5879cc5a7">Top case</a></td>
<td width="25%" valign="top" align="center"><b>💥 Combat &amp; physics set pieces</b><br><sub>2 templates · 7 verified cases</sub><br><br><a href="https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind"><img src="https://media.goodcase.ai/media/poster/seedance-25-diner-frozen-time-rewind.jpg" width="200" alt="复古餐厅时间冻结与倒放"></a><br><sub>Combat choreography · Time freeze and rewind set piece</sub><br><a href="#-action-dance-and-effects-3-templates">View templates</a> · <a href="https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind">Top case</a></td>
<td width="25%" valign="top" align="center"><b>💥 Beat-synced music video</b><br><sub>1 template · 4 verified cases</sub><br><br><a href="https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol"><img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="200" alt="双人 K-pop MV 逐镜分镜"></a><br><sub>Beat-synced music video</sub><br><a href="#-action-dance-and-effects-3-templates">View templates</a> · <a href="https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol">Top case</a></td>
</tr>
</table>

## 🧩 Prompt Templates

Reusable prompt structures distilled from the highest-performing cases, grouped by category. Each row is one template; the full structure, guidance and pitfalls for every template live in the [Skill reference](./agents/skills/seedance-prompt-library/references/style-library.md) and ship with `npx seedance-prompt-library install`.

### 🏗️ Structural foundations (2 templates)

Cross-cutting skeletons that almost every other template builds on: how to slice a clip into timed beats, and how to pin an identity across those beats.

| Template                                                                                                                                                                                                                                                                                                                                                                 | Use when                                                                                                                                                                                                      | Examples                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[Second-by-second timeline script](./agents/skills/seedance-prompt-library/references/style-library.md#second-by-second-timeline-script)**<br><sub>Split the clip into contiguous timed segments, each carrying one shot type, one main action and its own sound line. The single most load-bearing structure in the corpus.</sub>                                     | Any clip longer than about 8 seconds, or any clip where a specific thing must happen at a specific moment. 63 of 207 cases (30%) use timed segments, and the share rises to 45% among Seedance 2.5 cases.     | [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt) |
| **[Reference image identity lock](./agents/skills/seedance-prompt-library/references/style-library.md#reference-image-identity-lock)**<br><sub>Name every reference with a stable token, enumerate what to inherit from it, and separately enumerate what must not be inherited. The inherit-nothing-else clause is what separates working locks from broken ones.</sub> | Any clip where a face, an outfit, a product or a UI layout must survive across shots. Applies to Seedance 2.0 and 2.5 alike; 2.5 additionally accepts audio and video references under the same token scheme. | [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)       |

### 📱 Realism and UGC (2 templates)

Templates that buy believability by describing camera flaws, body wear and consumer-grade optics instead of asking for quality.

| Template                                                                                                                                                                                                                                                                                                             | Use when                                                                                                                                                                        | Examples                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Handheld UGC vlog](./agents/skills/seedance-prompt-library/references/style-library.md#handheld-ugc-vlog)**<br><sub>Buy believability with camera defects. Name a specific consumer camera era, list its flaws as requirements, and switch cinematic polish off by hand.</sub>                                    | Personal-feeling footage: daily life, travel, gym, cooking, get-ready-with-me. Use it whenever the goal is looks like someone actually filmed this rather than looks expensive. | [#1](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) [#2](https://goodcase.ai/cases/16mm-analog-morning-vlog) [#3](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9) [#4](https://goodcase.ai/cases/seedance-2-5-eba905fedcff) |
| **[First-person continuous take](./agents/skills/seedance-prompt-library/references/style-library.md#first-person-continuous-take)**<br><sub>Bodycam, GoPro, FPV and handlebar POV. The camera is mounted on a body, so its motion has to be derived from that body, and every cut has to be declared by hand.</sub> | Immersive footage where the viewer is the operator: tactical entry, action sports, cooking from the cook's eyes, drone flight. 32 of 207 cases sit here.                        | [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)                       |

### 🛍️ Commercial and product (3 templates)

Ad-shaped structures where a product has to survive macro shots, hand contact and a hero frame without deforming.

| Template                                                                                                                                                                                                                                                                                                                                                     | Use when                                                                                                                                        | Examples                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[UGC creator review with spoken lines](./agents/skills/seedance-prompt-library/references/style-library.md#ugc-creator-review-with-spoken-lines)**<br><sub>A creator unboxes, handles and endorses a product on camera. Two independent locks are needed — one on the person, one on the product — and the spoken lines are welded into the actions.</sub> | Affiliate-style product videos, unboxings and creator reviews where the product must stay recognisable while being picked up, rotated and worn. | [#1](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106) [#2](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9) [#3](https://goodcase.ai/cases/case-b157d9c072bc)                                            |
| **[Cinematic product commercial shot list](./agents/skills/seedance-prompt-library/references/style-library.md#cinematic-product-commercial-shot-list)**<br><sub>A polished 8 to 20 second ad: a stated commercial aesthetic up front, a numbered or timed shot breakdown in the middle, a hero frame at the end, and a keyword tail.</sub>                  | Beauty, beverage, jewellery, automotive and fragrance spots where the look has to read as paid production rather than as a creator video.       | [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b) |
| **[Process and transformation montage](./agents/skills/seedance-prompt-library/references/style-library.md#process-and-transformation-montage)**<br><sub>Cooking steps, renovation timelapse, blueprint-to-house, miniature city assembly. The craft here is declaring what must not change, then ordering the change spatially.</sub>                       | Any clip whose subject is a process rather than a person: recipes, builds, assemblies, before-and-after reveals. 35 cases in the corpus.        | [#1](https://goodcase.ai/cases/case-429309e40d97) [#2](https://goodcase.ai/cases/case-778d0c927488) [#3](https://goodcase.ai/cases/case-8bdac964f9d4) [#4](https://goodcase.ai/cases/case-179a06586ce5)                  |

### 🎭 Narrative and performance (2 templates)

Templates where the payload is a story beat or a line of dialogue rather than a look.

| Template                                                                                                                                                                                                                                                                                                                     | Use when                                                                                                                                                                                                                      | Examples                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Dialogue and performance beats](./agents/skills/seedance-prompt-library/references/style-library.md#dialogue-and-performance-beats)**<br><sub>Declare the spoken language, tag the speaker, write the reaction as a causal chain rather than a list of expressions, and close each beat with an explicit end state.</sub> | Whenever a line has to be heard rather than implied. 78 of 207 cases carry quoted dialogue inline (38%), and 16 explicitly manage lip sync. Seedance 2.5 additionally supports driving lip sync from an uploaded audio track. | [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)                          |
| **[Cinematic narrative short](./agents/skills/seedance-prompt-library/references/style-library.md#cinematic-narrative-short)**<br><sub>Multi-act storytelling in 15 to 60 seconds. Titled acts, a character card ahead of the acts, and a reveal written as a concrete image rather than as a promise of surprise.</sub>     | Trailers, mini-dramas, disaster set pieces, sci-fi mysteries and romance shorts — anything where the viewer should follow a plot rather than admire a look.                                                                   | [#1](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951) [#2](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100) [#3](https://goodcase.ai/cases/mermaid-rescue-cinematic-story) [#4](https://goodcase.ai/cases/youmind-1980s-slasher-yacht-octopus) |

### 🎨 Stylized animation (2 templates)

Non-photoreal looks that collapse into generic CG unless the style is specified as measurable parameters plus an exclusion list.

| Template                                                                                                                                                                                                                                                                                                                                                     | Use when                                                                                                                                                         | Examples                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Anime and stylized style lock](./agents/skills/seedance-prompt-library/references/style-library.md#anime-and-stylized-style-lock)**<br><sub>Specify the drawing style as measurable parameters, then attach an exclusion list of the neighbouring styles it must not fall into. Without the exclusion list, anime collapses into a generic 3D face.</sub> | Cel-look action, Ghibli-flavoured slice of life, 3D toon RPG battles, 2D hand-drawn cooking. Roughly a quarter of the corpus is stylized animation of some kind. | [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e) |
| **[Stop motion and stepped cadence](./agents/skills/seedance-prompt-library/references/style-library.md#stop-motion-and-stepped-cadence)**<br><sub>Stop motion is a timing spec before it is a look. Pin the frame rate and the hold count, name the craft material, and ban the three things that silently smooth it away.</sub>                            | Claymation, paper-cut, moving-oil-painting, collage and tabletop object animation. 24 cases in the corpus sit in this family.                                    | [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff) |

### 💥 Action, dance and effects (3 templates)

Templates driven by body mechanics, beat placement or a physics set-piece rather than by scene description.

| Template                                                                                                                                                                                                                                                                                                                                                                                                                                      | Use when                                                                                                                                                                            | Examples                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Combat choreography](./agents/skills/seedance-prompt-library/references/style-library.md#combat-choreography)**<br><sub>Fights read as real when the prompt specifies biomechanics, contact points and an attack chain. Adjectives like epic produce two people swinging at air.</sub>                                                                                                                                                     | Martial arts, swordplay, street fights, superhero traversal and stunt sequences. 40 cases in the corpus, split fairly evenly between live-action and anime treatments.              | [#1](https://goodcase.ai/cases/just-sharon7-seedance-ai-8085c03efbb0) [#2](https://goodcase.ai/cases/yourplugai-seedance-ai-fb797edfc8e4) [#3](https://goodcase.ai/cases/case-f7e7c1862f38) [#4](https://goodcase.ai/cases/case-1a9a2c659866)                 |
| **[Beat-synced music video](./agents/skills/seedance-prompt-library/references/style-library.md#beat-synced-music-video)**<br><sub>Derive beat anchors from BPM, pin every cut, hair flip and formation change to a real downbeat, and constrain the backup dancers so they never steal the visual centre.</sub>                                                                                                                              | K-pop MVs, dance covers, beat-cut fitness edits and club performance clips. Use the audio-anchored variant only on Seedance 2.5, which accepts an audio track as an input modality. | [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance) |
| **[Time freeze and rewind set piece](./agents/skills/seedance-prompt-library/references/style-library.md#time-freeze-and-rewind-set-piece)**<br><sub>A five-beat skeleton — normal, collision, freeze at the peak, orbit, precise rewind — with exactly one character exempt from the freeze. The corpus contains the same author reusing this skeleton with a different physical material, which is direct evidence that it transfers.</sub> | Short high-engagement set pieces built on a physics spectacle rather than a plot. The diner version is the single highest-engagement case in the whole corpus.                      | [#1](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind) [#2](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze) [#3](https://goodcase.ai/cases/90s-diner-time-freeze-effect)                                                       |

## 🔥 Top 30 by heat

The 30 hottest cases across all versions (ranks 1–6 are also shown in full under ⭐ Featured). *prompt* opens the full entry in the gallery, *source* opens the creator's original post.

| #   | Preview                                                                                                                                                                                                                                                                                                                                                 | Case                                                                                                                                                                                                     | Version     | Heat | Retest                    | Links                                                                                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [<img src="https://media.goodcase.ai/media/poster/seedance-25-diner-frozen-time-rewind.jpg" width="120" alt="复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)                                                                                                                                                             | [复古餐厅时间冻结与倒放](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)                                                                                                                            | 2.5         | 100  | ⚠️ degraded (score 63.9)  | [prompt](./docs/gallery-seedance-2-5.md#复古餐厅时间冻结与倒放) · [source](https://x.com/techhalla/status/2083389002552664385)                                                                             |
| 2   | [<img src="https://media.goodcase.ai/media/poster/vlog-c8171f712492.jpg" width="120" alt="首尔夏夜 Vlog">](https://goodcase.ai/cases/vlog-c8171f712492)                                                                                                                                                                                                     | [首尔夏夜 Vlog](https://goodcase.ai/cases/vlog-c8171f712492)                                                                                                                                                 | 2.5         | 99   | ✅ reproduced (score 75.7) | [prompt](./docs/gallery-seedance-2-5.md#首尔夏夜-vlog) · [source](https://x.com/AIwithkhan/status/2092971211169100048)                                                                              |
| 3   | [<img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="120" alt="双人 K-pop MV 逐镜分镜">](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)                                                                                                                                                                      | [双人 K-pop MV 逐镜分镜](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)                                                                                                                              | 2.5         | 99   | ⚠️ degraded (score 74.2)  | [prompt](./docs/gallery-seedance-2-5.md#双人-k-pop-mv-逐镜分镜) · [source](https://x.com/Just_sharon7/status/2083422886686031982)                                                                     |
| 4   | [<img src="https://media.goodcase.ai/media/poster/seedance-25-minidv-coffee-asmr-vlog.jpg" width="120" alt="mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)                                                                                                                                                      | [mini DV 咖啡 ASMR vlog](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)                                                                                                                    | 2.5         | 99   | ✅ reproduced (score 77.3) | [prompt](./docs/gallery-seedance-2-5.md#mini-dv-咖啡-asmr-vlog) · [source](https://x.com/Strength04_X/status/2083094742682787939)                                                                 |
| 5   | [<img src="https://media.goodcase.ai/cases/4727d059893d.jpg" width="120" alt="Create a 30-second, 1080p ultra-realistic emotional live-action scene…">](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)                                                                 | [Create a 30-second, 1080p ultra-realistic emotional live-action scene…](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b) | unspecified | 95   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene) · [source](https://x.com/AIwithSynthia/status/2096439253970395531) |
| 6   | [<img src="https://media.goodcase.ai/media/poster/mightyking-seedance-ai-7bbc1d4f9ad9.jpg" width="120" alt="Seedance 原生 UGC 竖屏手机跟拍短片">](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)                                                                                                                                                  | [Seedance 原生 UGC 竖屏手机跟拍短片](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)                                                                                                                | unspecified | 95   | ⚠️ degraded (score 71.2)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-原生-ugc-竖屏手机跟拍短片) · [source](https://x.com/mightyking/status/2089299068514148655)                                                |
| 7   | [<img src="https://media.goodcase.ai/media/poster/rishuavr-seedance-ai-ad4e6de3949d.jpg" width="120" alt="Seedance 2.5 印尼女生日常写实短片">](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)                                                                                                                                                       | [Seedance 2.5 印尼女生日常写实短片](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)                                                                                                                   | unspecified | 95   | ✅ reproduced (score 77.5) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-25-印尼女生日常写实短片) · [source](https://x.com/RishuaVR/status/2089204108175741157)                                                    |
| 8   | [<img src="https://media.goodcase.ai/media/poster/aiwithelisia-seedance-ai-b204cdfb3dac.jpg" width="120" alt="金发少女在高中走廊释放超能力">](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)                                                                                                                                                        | [金发少女在高中走廊释放超能力](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)                                                                                                                        | unspecified | 94   | ✅ reproduced (score 81.6) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#金发少女在高中走廊释放超能力) · [source](https://x.com/AiwithElisia/status/2092119695201837059)                                                        |
| 9   | [<img src="https://media.goodcase.ai/media/poster/smartphone-beach-day-memories.jpg" width="120" alt="智能手机拍摄的海滩一日游回忆">](https://goodcase.ai/cases/smartphone-beach-day-memories)                                                                                                                                                                        | [智能手机拍摄的海滩一日游回忆](https://goodcase.ai/cases/smartphone-beach-day-memories)                                                                                                                                | 2.0         | 93   | -                         | [prompt](./docs/gallery-seedance-2-0-part-1.md#智能手机拍摄的海滩一日游回忆) · [source](https://x.com/Goodmanprotocol/status/2079189509586260101)                                                             |
| 10  | [<img src="https://media.goodcase.ai/media/poster/mrdasonx-seedance-ai-ccaa50150259.jpg" width="120" alt="狐狸在森林溪流边自拍漫游">](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259)                                                                                                                                                                  | [狐狸在森林溪流边自拍漫游](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259)                                                                                                                              | unspecified | 93   | ⚠️ degraded (score 74.5)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#狐狸在森林溪流边自拍漫游) · [source](https://x.com/MrDasOnX/status/2089969922617266257)                                                              |
| 11  | [<img src="https://media.goodcase.ai/media/poster/seedance-269d1fc95820.jpg" width="120" alt="不会有人认为这是真的吧？😄">](https://goodcase.ai/cases/seedance-269d1fc95820)                                                                                                                                                                                        | [不会有人认为这是真的吧？😄](https://goodcase.ai/cases/seedance-269d1fc95820)                                                                                                                                        | unspecified | 92   | ⚠️ degraded (score 50.9)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#不会有人认为这是真的吧) · [source](https://x.com/johnAGI168/status/2095025524586193105)                                                             |
| 12  | [<img src="https://media.goodcase.ai/media/poster/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf.jpg" width="120" alt="Use the uploaded reference image as the exact character reference">](https://goodcase.ai/cases/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf) | [Use the uploaded reference image as the exact character reference](https://goodcase.ai/cases/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf)                   | unspecified | 92   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#use-the-uploaded-reference-image-as-the-exact-character-reference) · [source](https://x.com/AIwithkhan/status/2094997895187673489)       |
| 13  | [<img src="https://media.goodcase.ai/media/poster/2d-38a41133eab1.jpg" width="120" alt="手绘 2D 日本料理动画">](https://goodcase.ai/cases/2d-38a41133eab1)                                                                                                                                                                                                      | [手绘 2D 日本料理动画](https://goodcase.ai/cases/2d-38a41133eab1)                                                                                                                                                | 2.0         | 91   | ⚠️ degraded (score 55.9)  | [prompt](./docs/gallery-seedance-2-0-part-1.md#手绘-2d-日本料理动画) · [source](https://x.com/riotboy2024/status/2092217560788000816)                                                                   |
| 14  | [<img src="https://media.goodcase.ai/media/poster/youmind-paris-fashion-campaign-streetwear.jpg" width="120" alt="电影感巴黎时尚广告大片：五镜头街拍">](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear)                                                                                                                                             | [电影感巴黎时尚广告大片：五镜头街拍](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear)                                                                                                                 | 2.0         | 90   | ✅ reproduced (score 81.8) | [prompt](./docs/gallery-seedance-2-0-part-1.md#电影感巴黎时尚广告大片五镜头街拍) · [source](https://x.com/Just_sharon7/status/2083793251132186998)                                                              |
| 15  | [<img src="https://media.goodcase.ai/cases/34deb8da196d.jpg" width="120" alt="Seedance 双角色 2D 动漫：小风筝的十四秒冒险">](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55)                                                                                                                                                                            | [Seedance 双角色 2D 动漫：小风筝的十四秒冒险](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55)                                                                                                            | unspecified | 90   | ✅ reproduced (score 90.4) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-双角色-2d-动漫小风筝的十四秒冒险) · [source](https://x.com/Lianaalane/status/2089563357074559014)                                             |
| 16  | [<img src="https://media.goodcase.ai/media/poster/aiwithelisia-seedance-ai-e7e817c4c4b8.jpg" width="120" alt="Seedance 2.0 电影感东亚女性生活方式短片">](https://goodcase.ai/cases/aiwithelisia-seedance-ai-e7e817c4c4b8)                                                                                                                                            | [Seedance 2.0 电影感东亚女性生活方式短片](https://goodcase.ai/cases/aiwithelisia-seedance-ai-e7e817c4c4b8)                                                                                                            | unspecified | 90   | ✅ reproduced (score 86.8) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-20-电影感东亚女性生活方式短片) · [source](https://x.com/AiwithElisia/status/2088846290130190784)                                             |
| 17  | [<img src="https://media.goodcase.ai/media/poster/boa-hancock-water-obstacle-race-prompt.jpg" width="120" alt="Boa Hancock Water Obstacle Race Prompt">](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)                                                                                                                              | [Boa Hancock Water Obstacle Race Prompt](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)                                                                                               | 2.5         | 89   | ⚠️ degraded (score 66.3)  | [prompt](./docs/gallery-seedance-2-5.md#boa-hancock-water-obstacle-race-prompt) · [source](https://x.com/Chengzilhy/status/2087458506123465088)                                                 |
| 18  | [<img src="https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg" width="120" alt="梅林元素功夫表演">](https://goodcase.ai/cases/real-case-06-aimikoda)                                                                                                                                                                                        | [梅林元素功夫表演](https://goodcase.ai/cases/real-case-06-aimikoda)                                                                                                                                              | 2.0         | 89   | -                         | [prompt](./docs/gallery-seedance-2-0-part-1.md#梅林元素功夫表演) · [source](https://x.com/aimikoda/status/2054460932068200517)                                                                          |
| 19  | [<img src="https://media.goodcase.ai/media/poster/zarairahh-seedance-ai-f89372941867.jpg" width="120" alt="猫咪自拍记录温馨的一天">](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867)                                                                                                                                                                 | [猫咪自拍记录温馨的一天](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867)                                                                                                                              | unspecified | 89   | ⚠️ degraded (score 70.2)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#猫咪自拍记录温馨的一天) · [source](https://x.com/ZaraIrahh/status/2091385137133219971)                                                              |
| 20  | [<img src="https://media.goodcase.ai/media/poster/yesandyou-seedance-ai-2a9dc20c947d.jpg" width="120" alt="泥土中诞生的罐中小鸟">](https://goodcase.ai/cases/yesandyou-seedance-ai-2a9dc20c947d)                                                                                                                                                                  | [泥土中诞生的罐中小鸟](https://goodcase.ai/cases/yesandyou-seedance-ai-2a9dc20c947d)                                                                                                                               | unspecified | 89   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#泥土中诞生的罐中小鸟) · [source](https://x.com/Yesandyou_/status/2090075447195480403)                                                              |
| 21  | [<img src="https://media.goodcase.ai/cases/15792e0fa5ef.jpg" width="120" alt="十秒自救的女巫把自己变成了鸭子">](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7597faa7285f)                                                                                                                                                                                      | [十秒自救的女巫把自己变成了鸭子](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7597faa7285f)                                                                                                                      | unspecified | 89   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#十秒自救的女巫把自己变成了鸭子) · [source](https://x.com/AIwithNatalia/status/2089170554725265625)                                                      |
| 22  | [<img src="https://media.goodcase.ai/media/poster/yesandyou-seedance-ai-d92a0a788b85.jpg" width="120" alt="Seedance 2.5 超写实微距延时：种子发芽十秒">](https://goodcase.ai/cases/yesandyou-seedance-ai-d92a0a788b85)                                                                                                                                                 | [Seedance 2.5 超写实微距延时：种子发芽十秒](https://goodcase.ai/cases/yesandyou-seedance-ai-d92a0a788b85)                                                                                                              | unspecified | 89   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-25-超写实微距延时种子发芽十秒) · [source](https://x.com/Yesandyou_/status/2088998841395921185)                                               |
| 23  | [<img src="https://media.goodcase.ai/media/poster/erling-haaland-525acabe78da.jpg" width="120" alt="Erling Haaland 黏土动画园艺">](https://goodcase.ai/cases/erling-haaland-525acabe78da)                                                                                                                                                                     | [Erling Haaland 黏土动画园艺](https://goodcase.ai/cases/erling-haaland-525acabe78da)                                                                                                                           | 2.0         | 88   | ✅ reproduced (score 83.3) | [prompt](./docs/gallery-seedance-2-0-part-1.md#erling-haaland-黏土动画园艺) · [source](https://x.com/noorwithwifi/status/2079818537137475762)                                                         |
| 24  | [<img src="https://media.goodcase.ai/media/poster/korean-fantasy-romance-drama.jpg" width="120" alt="Korean Fantasy Romance Drama">](https://goodcase.ai/cases/korean-fantasy-romance-drama)                                                                                                                                                            | [Korean Fantasy Romance Drama](https://goodcase.ai/cases/korean-fantasy-romance-drama)                                                                                                                   | 2.0         | 88   | ⚠️ degraded (score 73.7)  | [prompt](./docs/gallery-seedance-2-0-part-1.md#korean-fantasy-romance-drama) · [source](https://x.com/JuliaClarky/status/2079586851862835248)                                                   |
| 25  | [<img src="https://media.goodcase.ai/cases/39b33ab9f88e.jpg" width="120" alt="A cinematic 30-second tropical travel vlog montage featuring a…">](https://goodcase.ai/cases/seedance-a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a-beautiful-20-yea-6af38a792806)                                                                       | [A cinematic 30-second tropical travel vlog montage featuring a…](https://goodcase.ai/cases/seedance-a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a-beautiful-20-yea-6af38a792806)       | unspecified | 88   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a) · [source](https://x.com/eshal__ai/status/2096840505355370629)           |
| 26  | [<img src="https://media.goodcase.ai/media/poster/seedance-realism-that-makes-ordinary-life-feel-special-aa5751af1eff.jpg" width="120" alt="Realism that makes ordinary life feel special">](https://goodcase.ai/cases/seedance-realism-that-makes-ordinary-life-feel-special-aa5751af1eff)                                                             | [Realism that makes ordinary life feel special](https://goodcase.ai/cases/seedance-realism-that-makes-ordinary-life-feel-special-aa5751af1eff)                                                           | unspecified | 88   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#realism-that-makes-ordinary-life-feel-special) · [source](https://x.com/Just_sharon7/status/2096109540924141746)                         |
| 27  | [<img src="https://media.goodcase.ai/cases/9502cf6c6407.jpg" width="120" alt="Seedance 灾难现场拍还是跑：第一视角短片">](https://goodcase.ai/cases/just-sharon7-seedance-ai-9c64e481a51d)                                                                                                                                                                              | [Seedance 灾难现场拍还是跑：第一视角短片](https://goodcase.ai/cases/just-sharon7-seedance-ai-9c64e481a51d)                                                                                                              | unspecified | 88   | ✅ reproduced (score 79.3) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-灾难现场拍还是跑第一视角短片) · [source](https://x.com/Just_sharon7/status/2089578815219785888)                                               |
| 28  | [<img src="https://media.goodcase.ai/media/poster/youmind-travel-vlog-city-to-beach.jpg" width="120" alt="手持感旅行 Vlog：从公寓到海滩">](https://goodcase.ai/cases/youmind-travel-vlog-city-to-beach)                                                                                                                                                             | [手持感旅行 Vlog：从公寓到海滩](https://goodcase.ai/cases/youmind-travel-vlog-city-to-beach)                                                                                                                         | 2.5         | 87   | -                         | [prompt](./docs/gallery-seedance-2-5.md#手持感旅行-vlog从公寓到海滩) · [source](https://x.com/BubbleBrain/status/2083659648108990925)                                                                      |
| 29  | [<img src="https://media.goodcase.ai/cases/70fd0a62397d.jpg" width="120" alt="Create a 30-second ultra-cinematic supernatural fantasy sequence…">](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-cinematic-supernatural-fantasy-sequence-photorealisti-6d87ff7834d3)                                                                      | [Create a 30-second ultra-cinematic supernatural fantasy sequence…](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-cinematic-supernatural-fantasy-sequence-photorealisti-6d87ff7834d3)      | unspecified | 87   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#create-a-30-second-ultra-cinematic-supernatural-fantasy-sequence) · [source](https://x.com/Zyrellix/status/2097594855946113177)          |
| 30  | [<img src="https://media.goodcase.ai/cases/276528e2bcc8.jpg" width="120" alt="It’s the little moments that make AI feel this real">](https://goodcase.ai/cases/seedance-it-s-the-little-moments-that-make-ai-feel-this-real-57c748edf467)                                                                                                               | [It’s the little moments that make AI feel this real](https://goodcase.ai/cases/seedance-it-s-the-little-moments-that-make-ai-feel-this-real-57c748edf467)                                               | unspecified | 87   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#its-the-little-moments-that-make-ai-feel-this-real) · [source](https://x.com/SimplyAnnisa/status/2096931238460178592)                    |

## 🎬 All Prompts

All 419 cases, with full prompts, live in the gallery under `docs/` (sharded so GitHub renders every page). Start from the [gallery index](./docs/gallery.md), or jump to a version:

- Seedance 2.5 - 43 cases: [Full gallery](./docs/gallery-seedance-2-5.md).
- Seedance 2.0 - 130 cases: [Part 1 (cases 1–96)](./docs/gallery-seedance-2-0-part-1.md) · [Part 2 (cases 97–130)](./docs/gallery-seedance-2-0-part-2.md).
- Seedance (version unspecified) - 246 cases: [Part 1 (cases 1–94)](./docs/gallery-seedance-unversioned-part-1.md) · [Part 2 (cases 95–190)](./docs/gallery-seedance-unversioned-part-2.md) · [Part 3 (cases 191–246)](./docs/gallery-seedance-unversioned-part-3.md).

## 🌐 Browse on goodcase.ai

This README is an index. The full experience lives at [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance): search across every case, the heat leaderboard, the stability ranking, per-case retest logs with output videos, and the installable Skills that grow out of the cases. Every entry here links back to its goodcase.ai record.

[<img src="./assets/goodcase-seedance-gallery.png" width="800" alt="Seedance cases on goodcase.ai">](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance)

## Statistics

| Metric                         | Value                     |
| ------------------------------ | ------------------------- |
| Seedance cases in this repo    | 419                       |
| Seedance 2.5                   | 43                        |
| Seedance 2.0                   | 130                       |
| Seedance (version unspecified) | 246                       |
| Unique authors                 | 158                       |
| Re-run on other models         | 247 cases / 257 runs      |
| Stability score (measured)     | 245 cases / avg 78.0      |
| Last updated                   | 2026-09-13                |
| goodcase.ai, all categories    | 1059 cases / 334 creators |
| goodcase.ai, AI video          | 567 cases                 |

Each case is counted once; a case tagged with several Seedance versions counts under the highest one.

## 🚀 How to use this repository

1. Start from [⭐ Featured](#-featured) or [🔥 Top 30](#-top-30-by-heat) and decide what kind of clip you want: vlog, ad, dialogue, action, stylized.
2. Open that category in the [🗂️ Category Overview](#%EF%B8%8F-category-overview) or the full [gallery](./docs/gallery.md), read two or three neighbouring cases, and copy the *structure* first (timeline, shot list, identity lock), then the style words.
3. Install the Skill (`npx seedance-prompt-library install`) or open the [template tables](#-prompt-templates) and fill your own subject, setting and beats into the matching template. Check the case's retest verdict before you commit budget to it.

## How to Contribute

**New prompt cases** go through goodcase.ai's review pipeline so provenance and heat score stay verifiable: submit at [goodcase.ai/submit](https://goodcase.ai/submit) (collection standards: [goodcase.ai/standards](https://goodcase.ai/standards)). Prefer GitHub? Open a pull request that adds one JSON file under [`submissions/`](./submissions/) following [`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json); a maintainer pushes it through the same review, and it lands in `data/` on the next export.

**Pull requests are welcome** for template fixes in `data/style-library.json`, generator and Skill code under `scripts/` and `agents/`, and corrections to English titles or summaries. `README.md`, `README_zh.md`, `docs/` and the Skill reference are generated from `data/`, so please don't hand-edit them: change the source, run `npm test && npm run generate`, and commit the regenerated files in the same PR. See [contributing.md](./contributing.md) for the submission standard, what gets rejected, and how the generator works. This project follows the [code of conduct](./code-of-conduct.md).

## 🙏 Acknowledgements

This project's format and Skill-packaging approach were shaped by:

- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - Template-library + installable-Skill + marketplace pattern.
- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README-as-gallery with per-entry attribution.
- [goodcase.ai](https://goodcase.ai) - The source of every case, heat score and retest in this repository.

## Copyright & Takedown Notice

This repository carries three kinds of material under three different terms.

**Code** (generator scripts, Agent Skill, tooling) is released under the MIT License, see the `LICENSE` file. The MIT license covers the code only.

**Curation** (selection, organization, statistics, template extraction, summaries written by us) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse it with attribution to *awesome-seedance / goodcase.ai*.

**Prompts and media** remain the copyright of their original creators. Prompt text, creator summaries, poster images and video references are quoted from publicly published posts for documentation and study; every entry links back to its original source and to its goodcase.ai record. Nothing here grants a license to the underlying prompt or media beyond what the original post allows.

**Takedown process.** If you are a rights holder and want an entry removed or corrected, open a GitHub issue with the entry's slug (from its goodcase.ai URL) and the original source link, or contact goodcase.ai directly. Requests are verified against the original post and honored on verification; the entry is removed from `data/` and disappears from every generated file on the next regeneration.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LearnPrompt/awesome-seedance&type=Date)](https://star-history.com/#LearnPrompt/awesome-seedance&Date)

## License & Reuse

Code in this repository is open source under the [MIT License](./LICENSE): use it, modify it, build on it, keep the license notice. Curation is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); prompts and media stay with their creators. Details above under [Copyright & Takedown Notice](#copyright--takedown-notice).
