**[English](./README.md)** | [中文](./README_zh.md)

# Awesome Seedance [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, verified prompt library for Seedance 2.5 / 2.0 video generation — every case checked against its original source.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./contributing.md) [![License: MIT (code)](https://img.shields.io/badge/code%20license-MIT-blue.svg)](./LICENSE) [![Content: CC BY 4.0 (curation)](https://img.shields.io/badge/curation-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

More verified AI cases with full prompts → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)

## Contents

- [Install](#install)
- [Why this list](#why-this-list)
- [Browse on goodcase.ai](#browse-on-goodcaseai)
- [What is Seedance 2.5](#what-is-seedance-25)
- [Statistics](#statistics)
- [⭐ Featured](#-featured)
- [🔁 Cross-model retests](#-cross-model-retests)
- [🧩 Prompt Templates](#-prompt-templates)
- [🔥 Top 30 by heat](#-top-30-by-heat)
- [🎬 All Prompts](#-all-prompts)
- [How to Contribute](#how-to-contribute)
- [🙏 Acknowledgements](#-acknowledgements)
- [Copyright & Takedown Notice](#copyright--takedown-notice)
- [Star History](#star-history)
## Install

```bash
npx seedance-prompt-library install
```

Installs the `seedance-prompt-library` Agent Skill into Claude Code and Codex, so your agent can pull structured prompt templates and write Seedance prompts directly in your editor.

## Why this list

**Human-verified against the source.** Every prompt here was checked against the creator's original post. Prompts reverse-engineered from the output video only — no source, no submission — are rejected outright, per [goodcase.ai's collection standards](https://goodcase.ai/standards) (in force since 2026-08-05).

**Full provenance on every entry.** Author, original post link, publish date, and a heat score — a relative percentile among published cases on the same platform. If it didn't rank, it isn't here.

**Ships as an installable Agent Skill.** `npx seedance-prompt-library install` drops a template library straight into Claude Code / Codex so your agent writes Seedance prompts from proven structures, not guesses.

## Browse on goodcase.ai

This README is an index. The full gallery, search, heat-score leaderboard, and retest history live at [goodcase.ai/cases?filter=video](https://goodcase.ai/cases?filter=video).

## What is Seedance 2.5

Seedance 2.5 is ByteDance's video generation model in Early Access, generating from four input modalities (text, image, video, and audio references), with native lip-sync and voice-driven dialogue. Seedance 2.0 is the prior generation — text/image-to-video without native audio-sync — kept here for reference and comparison. Cases whose source post names only "Seedance" without a version are listed as *version unspecified*.

## Statistics

| Metric                         | Value                |
| ------------------------------ | -------------------- |
| Total cases                    | 389                  |
| Seedance 2.5                   | 43                   |
| Seedance 2.0                   | 130                  |
| Seedance (version unspecified) | 216                  |
| Unique authors                 | 156                  |
| Re-run on other models         | 247 cases / 257 runs |
| Stability score (measured)     | 245 cases / avg 78.0 |
| Last updated                   | 2026-09-12           |

*Retest batch note: Retest runs carry two MiniMax labels on purpose. The 2026-08 batches (runIds video-minimax-h3-768p-20260809-phase1 / -20260811-top-heat) ran on Flova's MiniMax H3 768p; the 2026-09 batches (video-minimax-h3-768p-20260906-phase1 / -20260907-phase1) ran on fal.ai's minimax/h3-max/text-to-video endpoint, which only existed from 2026-09-03. They are different model tiers on different platforms, so the labels are kept distinct rather than merged. The 2026-08 entries show finalScore: null because a later human-review pass overwrote their structured evidence notes with a prose verdict; those rows carry a human-reviewed verdict instead, and the original judge scores remain in the private eval evidence manifest.*

Each case is counted once; a case tagged with several Seedance versions counts under the highest one.

## ⭐ Featured

Top 6 prompts by heat score, across all Seedance versions.

### Frozen Time and Rewind in a 1950s Diner

> A 30-second Seedance 2.5 script that locks a diner spill at its peak, orbits the suspended coffee ribbons for a full circle, rewinds every person and droplet back to the exact starting positions, then erases the accident with a single casual wave.

```
Photorealistic cinematic 1950s American diner, chrome stools, red vinyl, neon glow and checkerboard floor, shot with modern lived-in realism and soft natural window light. Subtle handheld texture, warm practicals, rich period detail, heavy film grain.

0-4s: [Medium Wide] A striking young woman in her early 20s sits alone at the counter, calm and slightly amused, slowly sipping a tall thick milkshake through a straw. Behind her a young waitress in classic uniform approaches with a tray of eggs and bacon in one hand and a full glass coffee pot in the other. An older lady starts rising from a nearby booth.

4-8s: [Dynamic Tracking] The older lady collides hard into the waitress. Tray, plate, eggs, bacon and coffee pot explode upward in chaotic slow motion. Coffee erupts into long liquid ribbons and perfect suspended droplets. Camera immediately begins a smooth continuous orbit around the impact. Time locks completely at the peak of the spill. Every face freezes in pure shock. Only the girl at the counter keeps moving, completely unfazed.

8-17s: [Slow 360° Orbital] Camera glides in a full elegant orbit through the frozen diner. Coffee hangs in mid-air as glassy ribbons and spheres with perfect volume and surface tension. Bacon strips, eggs and the spinning tray float weightlessly. Patrons and waitress remain locked in startled expressions. The girl at the counter takes one slow, deliberate sip, eyes half-lidded, almost bored, while the entire frozen world (except her) begins an elegant reverse: every droplet, every piece of food and every person rewinds smoothly back to the exact starting positions.

17-24s: [Medium Shot] Rewind lands perfectly. Waitress stands balanced again with tray and coffee pot. The girl lifts her eyes, raises two fingers in a small casual gesture and softly calls the waitress by name. The waitress turns toward her just before the older lady begins to stand, completely avoiding the collision. A tiny private smile crosses the girl’s face.

24-30s: [Extreme Close-Up] Hard cut to her face as she takes one last slow sip. Soft knowing smile, eyes almost closed in quiet satisfaction, like she has done this a hundred times. Shallow depth of field, creamy bokeh of the neon diner behind her.

Photorealistic, ultra-detailed fluid physics, perfect motion blur only on moving elements, stable characters, cinematic lighting, heavy natural film grain, no artifacts, movie-level temporal coherence, high rewatch value.
```

[<img src="https://media.goodcase.ai/media/poster/seedance-25-diner-frozen-time-rewind.jpg" width="600" alt="Frozen Time and Rewind in a 1950s Diner">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)

**Author:** @techhalla | **Source:** [Original](https://x.com/techhalla/status/2083389002552664385) | **Published:** 2026-08-01 | **Heat:** 100

**Stability:** 64/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ degraded (score 63.9) · [output](https://media.goodcase.ai/retests/seedance-25-diner-frozen-time-rewind/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)**

### Seoul Summer Night Vlog

> A thorough scripted prompt for a nostalgic home-video-style clip of a summer night in Seoul.

```
Create a 30-second, 1080p ultra-realistic personal home-video showing an ordinary summer evening in the life of a young Korean woman. No reference image. MAIN SUBJECT Young Korean woman in her early 20s, naturally pretty, realistic skin texture, minimal makeup, relaxed and approachable personality. Long black hair loosely tied into a messy side ponytail with a few loose strands around her face. Wearing a fitted pastel-blue short top, loose cream pajama-style pants, black sneakers and a simple silver necklace. Maintain the same face, hairstyle, clothing, body proportions and overall appearance throughout the entire video. SETTING A quiet older Seoul residential neighborhood during a warm summer evening. Narrow concrete lanes, small houses, potted plants, bicycles, old walls, utility poles, overhead wires, a tiny neighborhood bakery, a public water tap and large leafy trees casting shadows across the street. Everything should feel lived-in, ordinary and peaceful. CAMERA / VISUAL AESTHETIC Raw personal footage casually recorded by a friend on an early-2000s consumer DV camcorder. Strong handheld shake, imperfect framing, autofocus hunting, exposure shifts, occasional motion blur, faded colors, soft digital detail, mild noise, accidental zooms and natural camera imperfections. — OUTSIDE THE HOUSE She steps outside carrying a small reusable shopping bag. She locks the door, adjusts her messy ponytail and looks toward the camera with a relaxed smile. — BAKERY STOP She reaches a tiny neighborhood bakery and buys a warm pastry. She steps outside, takes her first bite and immediately smiles because it tastes good. She notices her friend filming and holds the pastry toward the camera playfully before taking another bite. — WALKING HOME She continues down the narrow street while eating. A neighborhood cat follows her for a few steps. She notices it, crouches down and gently pets it. — SMALL ACCIDENT She walks beneath a large tree when a few leaves fall onto her hair. She stops, looks confused, then realizes what happened and laughs. — QUIET MOMENT She reaches a low concrete wall beside the street and sits down for a moment. — FINAL MOMENT She stands up and continues walking home.
```

[<img src="https://media.goodcase.ai/media/poster/vlog-c8171f712492.jpg" width="600" alt="Seoul Summer Night Vlog">](https://goodcase.ai/cases/vlog-c8171f712492)

**Author:** @AIwithkhan | **Source:** [Original](https://x.com/AIwithkhan/status/2092971211169100048) | **Published:** 2026-08-27 | **Heat:** 99

**Stability:** 76/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ✅ reproduced (score 75.7) · [output](https://media.goodcase.ai/retests/vlog-c8171f712492/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/vlog-c8171f712492)**

### Two-Idol K-pop MV, Shot by Shot

> A 30-second K-pop music video cut into a dozen two-to-four-second beats, each pinning down camera distance, backdrop and choreography, with pink hair and black hair used as identity anchors so the two performers stay consistent across every cut.

```
30-second ultra-realistic K-pop MV featuring two young East Asian women with flawless synchronization, cinematic lighting, glossy skin, realistic hair and fabric physics, natural body motion, and 4K live-action quality. Vibrant hot pink, electric blue, and silver color palette. 0–2s: Wide shot in a bright circular pink studio with reflective floor. Pink-haired woman (left) and black-haired woman (right) perform energetic opening pose and synchronized dance. 2–4s: Medium close-up of the black-haired woman on a blue spotlight stage, confidently pointing at the camera. 4–6s: Pink-haired woman dances before shimmering blue-silver tinsel curtains, dramatic hair flip and fluid arm movements. 6–8s: Back to the pink studio. Both perform synchronized choreography with sharp arm waves, hip sways, and strong formations. 8–10s: Extreme close-up of both faces against a blue background, glossy makeup, subtle smiles, and direct eye contact. 10–14s: Solo shots at the tinsel backdrop. Pink-haired woman mouths lyrics and gestures confidently, followed by the black-haired woman with relaxed jacket styling. 14–18s: Pink studio. Coordinated jacket choreography, hair flips, powerful synchronized dance, ending hands-on-hips. 18–22s: Glamour close-ups. Black-haired woman under glittering bokeh lights, then pink-haired woman with wind-blown hair against a soft pink background. 22–24s: Blue spotlight stage. Mirrored black-haired performer effect with synchronized spins and flowing hair. 24–26s: Both walk confidently toward the camera in front of shimmering tinsel curtains, reflections visible on the floor. 26–29s: Final synchronized dance and ending pose in the pink circular studio, standing together and looking into the camera. Style: Hyper-realistic live action, Seedance 2.5-quality motion realism, perfect lip sync, natural weight shifts, flowing hair, realistic fabric simulation, polished K-pop music video cinematography.
```

[<img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="600" alt="Two-Idol K-pop MV, Shot by Shot">](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)

**Author:** @Just_sharon7 | **Source:** [Original](https://x.com/Just_sharon7/status/2083422886686031982) | **Published:** 2026-08-01 | **Heat:** 99

**Stability:** 74/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ degraded (score 74.2) · [output](https://media.goodcase.ai/retests/seedance-25-kpop-mv-dual-idol/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)**

### Mini DV Coffee ASMR Vlog

> A cozy espresso-making vlog that manufactures authenticity out of consumer camcorder flaws — hand shake, focus hunting, auto-exposure shifts and tape grain — paired with an ASMR sound list, a three-second-per-beat storyboard and an explicit rule against looking commercial or AI-generated.

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

[<img src="https://media.goodcase.ai/media/poster/seedance-25-minidv-coffee-asmr-vlog.jpg" width="600" alt="Mini DV Coffee ASMR Vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)

**Author:** @Strength04_X | **Source:** [Original](https://x.com/Strength04_X/status/2083094742682787939) | **Published:** 2026-07-31 | **Heat:** 99

**Stability:** 77/100

**Retest:** MiniMax H3 Max 768p · 2026-09-07 · ✅ reproduced (score 77.3) · [output](https://media.goodcase.ai/retests/seedance-25-minidv-coffee-asmr-vlog/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)**

### Ordinary Day, Shot as an Ultra-Real Home Video

> That Baddie again Say NO to Hollywood and YES to AI Seedance 2.5 Prompt : Prompt: Create a 30-second, 1080p ultra-realistic personal home-video showing an ordin…

```
Prompt: Create a 30-second, 1080p ultra-realistic personal home-video showing an ordinary summer afternoon in the life of a young Korean woman. No reference image.
MAIN SUBJECT
Young Korean woman in her early 20s, naturally pretty, realistic skin texture, minimal makeup, relaxed and confident personality.
Long black hair loosely tied into a messy side ponytail with a few loose strands around her face. Wearing a fitted pastel-blue short top, loose cream pajama-style pants, black sneakers and a simple silver necklace.
Maintain the same face, hairstyle, clothing, body proportions and overall appearance throughout the entire video.
SETTING
A quiet older Seoul residential neighborhood during a warm summer afternoon. Narrow concrete lanes, small houses, old walls, potted plants, parked bicycles, utility poles, overhead wires, laundry hanging outside homes, a tiny convenience store and children playing football in the street.
Everything should feel lived-in, ordinary and peaceful. No tourist attractions, advertisements, recognizable brands or commercial activity.
CAMERA / VISUAL AESTHETIC
Raw personal footage casually recorded by a friend on an early-2000s consumer DV camcorder.
Strong handheld shake, imperfect framing, autofocus hunting, exposure shifts, occasional motion blur, faded colors, soft digital detail, mild noise, accidental zooms and natural camera imperfections.
No stabilization, drone footage, gimbal movement, dramatic lighting or polished commercial cinematography.
— OUTSIDE THE HOUSE
She steps outside carrying a small reusable shopping bag.
She locks the door, adjusts her messy ponytail and gives the camera a relaxed smile.
She starts walking down the narrow neighborhood lane.
A light summer breeze moves her hair naturally.
— MEETING THE SCHOOL CHILDREN
A few school children wearing backpacks come walking toward her from the opposite direction.
She recognizes them from the neighborhood.
She smiles, raises her hand and says:
“Hey, aren't you guys late?”
The children laugh and continue walking toward school.
One child briefly waves back at her.
She laughs and continues down the street.
— CHILDREN PLAYING FOOTBALL
A little farther down the lane, several neighborhood children are playing football in the street.
The ball rolls toward her and stops directly in front of her feet.
She looks down at the ball.
Then looks toward the children.
One child calls out:
“Noona! Kick it!”
She smiles.
She gently places one foot beside the ball.
She gives the football one playful kick back toward the children.
The ball rolls smoothly along the concrete toward them.
The children excitedly chase after it.
She laughs and continues walking.
The football remains with the children after she kicks it. It does not disappear, duplicate or suddenly return to her.
— QUIET WALK HOME
She continues walking toward the end of the lane.
She passes a small public water tap and stops briefly to rinse her hands.
She shakes the water from her fingers, fixes a loose strand of hair and looks toward the camera.
A bicycle passes behind her.
She smiles and starts walking again.
— FINAL MOMENT
She reaches the corner of the neighborhood.
The children are now playing football farther behind her.
She turns around and watches them for a moment.
One of the children notices the camera and waves.
She waves back.
She turns toward the camera with a small playful smile and says:
“See you tomorrow.”
She continues walking home.
The camera follows behind her as she disappears around the corner.
The recording abruptly cuts to black.
AUDIO
Natural location sound only: children shouting and laughing, football bouncing against concrete, footsteps, birds, summer insects, bicycle bells, distant scooters, neighborhood conversations, leaves moving in the breeze and subtle camera-handling noise.
No music. No narration. Only the two spoken lines specified above.
```

[<img src="https://media.goodcase.ai/media/poster/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe.jpg" width="600" alt="Ordinary Day, Shot as an Ultra-Real Home Video">](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe)

**Author:** @AIwithkhan | **Source:** [Original](https://x.com/AIwithkhan/status/2096095608268280198) | **Published:** 2026-09-05 | **Heat:** 99

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe)**

### Thirty-Second Emotional Live-Action Discovery Scene

> Pure emotions 😭 Can Hollywood match it ? Seedance 2.5 Prompt : Create a 30-second, 1080p ultra-realistic emotional live-action scene about a young woman discov…

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

[<img src="https://media.goodcase.ai/cases/4727d059893d.jpg" width="600" alt="Thirty-Second Emotional Live-Action Discovery Scene">](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)

**Author:** @AIwithSynthia | **Source:** [Original](https://x.com/AIwithSynthia/status/2096439253970395531) | **Published:** 2026-09-06 | **Heat:** 95

**[🔍 View on goodcase.ai (retest log / stability score) →](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)**

## 🔁 Cross-model retests

Every prompt here is re-run on other video models; verdicts and output artifacts are public, logged in goodcase.ai's retest history. Runs without a final score show as `score n/a`.

| Model               | Runs | Reproduction rate |
| ------------------- | ---- | ----------------- |
| MiniMax H3 Max 768p | 246  | 73%               |
| MiniMax H3 768p     | 11   | 82%               |

## 🧩 Prompt Templates

Reusable prompt structures distilled from the highest-performing cases. Each template ships in the installable Skill too.

### Second-by-second timeline script

Split the clip into contiguous timed segments, each carrying one shot type, one main action and its own sound line. The single most load-bearing structure in the corpus.

**Use when:** Any clip longer than about 8 seconds, or any clip where a specific thing must happen at a specific moment. 63 of 207 cases (30%) use timed segments, and the share rises to 45% among Seedance 2.5 cases.

**Guidance:**

- Keep segments 2-5 seconds. Documentary tracking runs 2s per beat, ads run 3s, and an audio-locked MV can go down to sub-second anchors. The shorter the segment, the more it needs a visible action verb rather than a mood adjective.
- Write closed intervals that touch end to end (`0-4s` then `4-8s`) and make them sum to the stated duration. Declaring 30 seconds but listing only 24 makes the model stretch the last beat to fill the gap.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)

### Reference image identity lock

Name every reference with a stable token, enumerate what to inherit from it, and separately enumerate what must not be inherited. The inherit-nothing-else clause is what separates working locks from broken ones.

**Use when:** Any clip where a face, an outfit, a product or a UI layout must survive across shots. Applies to Seedance 2.0 and 2.5 alike; 2.5 additionally accepts audio and video references under the same token scheme.

**Guidance:**

- Split references by role and lock each separately. The GoPro fishing case declares `@location1` for the river and `@hands1` for the forearms, tools and bottle, each followed by `100% matches reference`.
- Enumerate the inherit list instead of writing keep her consistent. The boyfriend-POV case lists thirteen items: identity, features, face shape, skin tone, apparent age, hairstyle, hair colour, height, build, body proportion, clothing, footwear, overall bearing.

**Examples:** [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

### Handheld UGC vlog

Buy believability with camera defects. Name a specific consumer camera era, list its flaws as requirements, and switch cinematic polish off by hand.

**Use when:** Personal-feeling footage: daily life, travel, gym, cooking, get-ready-with-me. Use it whenever the goal is looks like someone actually filmed this rather than looks expensive.

**Guidance:**

- Use camera defects as the realism switch: hand shake, focus hunting, exposure breathing, drifting composition, uneven zooms, occasional accidental face cropping. 23 cases in the corpus reach phone-footage texture with this vocabulary.
- Name the gear era rather than asking for realism: mini DV camcorder, 16mm, VHS, iPhone 16 Pro, chest-mounted action cam. A named device carries a whole optical signature that the word realistic does not.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) [#2](https://goodcase.ai/cases/16mm-analog-morning-vlog) [#3](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9) [#4](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)

### First-person continuous take

Bodycam, GoPro, FPV and handlebar POV. The camera is mounted on a body, so its motion has to be derived from that body, and every cut has to be declared by hand.

**Use when:** Immersive footage where the viewer is the operator: tactical entry, action sports, cooking from the cook's eyes, drone flight. 32 of 207 cases sit here.

**Guidance:**

- Declare the physical mount and its height so the model can derive the shake: chest-mounted on the point agent, POV chest-to-eye height, moving only with the body.
- Refuse an empty first frame. The GoPro fishing case writes `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`, which removes the dead first second.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

### UGC creator review with spoken lines

A creator unboxes, handles and endorses a product on camera. Two independent locks are needed — one on the person, one on the product — and the spoken lines are welded into the actions.

**Use when:** Affiliate-style product videos, unboxings and creator reviews where the product must stay recognisable while being picked up, rotated and worn.

**Guidance:**

- Lock the product separately from the person and decompose it into parts. The sunglasses review names frame shape, lenses, hinges, colours, materials and proportions, and locks the retail box and leather case as their own references.
- Put each line inline at its moment. The coffee-machine ad places `I finally tried this coffee machine` on the second the creator walks into the kitchen, not in a separate dialogue section.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106) [#2](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9) [#3](https://goodcase.ai/cases/case-b157d9c072bc)

### Cinematic product commercial shot list

A polished 8 to 20 second ad: a stated commercial aesthetic up front, a numbered or timed shot breakdown in the middle, a hero frame at the end, and a keyword tail.

**Use when:** Beauty, beverage, jewellery, automotive and fragrance spots where the look has to read as paid production rather than as a creator video.

**Guidance:**

- Open with the ad-aesthetic vocabulary before any shot: premium beauty-commercial aesthetics, luxury advertising aesthetic, anamorphic lens, volumetric lighting. This sets the light logic for every shot that follows.
- Name the object of every macro and slow-motion beat: foam texture, liquid ribbons, diamond dispersion, metallic reflections across the packaging. Unnamed macro produces a generic blurred close-up.

**Examples:** [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b)

### Dialogue and performance beats

Declare the spoken language, tag the speaker, write the reaction as a causal chain rather than a list of expressions, and close each beat with an explicit end state.

**Use when:** Whenever a line has to be heard rather than implied. 78 of 207 cases carry quoted dialogue inline (38%), and 16 explicitly manage lip sync. Seedance 2.5 additionally supports driving lip sync from an uploaded audio track.

**Guidance:**

- Declare the language on its own line before the line itself, in the form `セリフ言語: 日本語` or `Natural English dialogue only`, and wrap the line in braces or quotes so it is not read as scene description.
- With an uploaded audio track, state that lip sync follows the actual vocal in the audio rather than the written text, and require closed lips during instrumental passages. Also restrict lip sync to one performer so background characters do not start mouthing.

**Examples:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

### Cinematic narrative short

Multi-act storytelling in 15 to 60 seconds. Titled acts, a character card ahead of the acts, and a reveal written as a concrete image rather than as a promise of surprise.

**Use when:** Trailers, mini-dramas, disaster set pieces, sci-fi mysteries and romance shorts — anything where the viewer should follow a plot rather than admire a look.

**Guidance:**

- Title each act. The romance trailer labels its acts The Message and Running Through the City, and the title itself constrains how much information that act carries.
- Keep the character card to five slots — hair, top, bottom, shoes, carried object. That is enough for the model to recognise the person without overloading the identity budget.

**Examples:** [#1](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951) [#2](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100) [#3](https://goodcase.ai/cases/mermaid-rescue-cinematic-story) [#4](https://goodcase.ai/cases/youmind-1980s-slasher-yacht-octopus)

### Anime and stylized style lock

Specify the drawing style as measurable parameters, then attach an exclusion list of the neighbouring styles it must not fall into. Without the exclusion list, anime collapses into a generic 3D face.

**Use when:** Cel-look action, Ghibli-flavoured slice of life, 3D toon RPG battles, 2D hand-drawn cooking. Roughly a quarter of the corpus is stylized animation of some kind.

**Guidance:**

- Write the style as parameters: thin coloured contour lines, two to three steps of cel shading with translucent mid-shadow, multi-layer highlights in irises and hair, and distinct reflectance and roughness for cloth, leather, metal, gems, wet floor and glass.
- Always attach the exclusion list. The anime duel case rules out thick black outlines, flat single-layer cel shadow, low-budget TV-anime look, generic 3D pretty-girl face, smooth plastic CG, semi-photoreal, photoreal, low-density backgrounds and muddy colour.

**Examples:** [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e)

### Stop motion and stepped cadence

Stop motion is a timing spec before it is a look. Pin the frame rate and the hold count, name the craft material, and ban the three things that silently smooth it away.

**Use when:** Claymation, paper-cut, moving-oil-painting, collage and tabletop object animation. 24 cases in the corpus sit in this family.

**Guidance:**

- Pin the cadence numerically: `True 12fps, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding`.
- Name the material and exclude its neighbours in the same breath. The wolf-attack case writes a hand-painted 2D look, a moving oil painting, NOT clay, NOT puppets, NOT 3D.

**Examples:** [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff)

### Process and transformation montage

Cooking steps, renovation timelapse, blueprint-to-house, miniature city assembly. The craft here is declaring what must not change, then ordering the change spatially.

**Use when:** Any clip whose subject is a process rather than a person: recipes, builds, assemblies, before-and-after reveals. 35 cases in the corpus.

**Guidance:**

- Spend a whole paragraph on invariants. The renovation case locks camera position, angle, focal length, perspective and composition, then separately locks room dimensions, walls, windows, doors, ceiling height and structural layout.
- Order the change spatially, not vaguely. Flooring spreads left to right, then walls and ceiling transform simultaneously, then furniture lands — this beats gradually transforms every time.

**Examples:** [#1](https://goodcase.ai/cases/case-429309e40d97) [#2](https://goodcase.ai/cases/case-778d0c927488) [#3](https://goodcase.ai/cases/case-8bdac964f9d4) [#4](https://goodcase.ai/cases/case-179a06586ce5)

### Combat choreography

Fights read as real when the prompt specifies biomechanics, contact points and an attack chain. Adjectives like epic produce two people swinging at air.

**Use when:** Martial arts, swordplay, street fights, superhero traversal and stunt sequences. 40 cases in the corpus, split fairly evenly between live-action and anime treatments.

**Guidance:**

- Name the discipline and its biomechanics. Authentic Taekwondo biomechanics, realistic anatomy, weight, gravity and momentum reads very differently from epic fight scene.
- Write attacks as chains: straight punch into hook into low kick, met with parry, slip under, check, then an immediate counter body kick. Add that both fighters stay aggressive with no passive waiting, idle stance, reset, teleportation or position jumps.

**Examples:** [#1](https://goodcase.ai/cases/just-sharon7-seedance-ai-8085c03efbb0) [#2](https://goodcase.ai/cases/yourplugai-seedance-ai-fb797edfc8e4) [#3](https://goodcase.ai/cases/case-f7e7c1862f38) [#4](https://goodcase.ai/cases/case-1a9a2c659866)

### Beat-synced music video

Derive beat anchors from BPM, pin every cut, hair flip and formation change to a real downbeat, and constrain the backup dancers so they never steal the visual centre.

**Use when:** K-pop MVs, dance covers, beat-cut fitness edits and club performance clips. Use the audio-anchored variant only on Seedance 2.5, which accepts an audio track as an input modality.

**Guidance:**

- Compute the beat interval before writing shots. The Y2K MV states roughly 128 BPM with about 0.469s per beat, then lists nine named anchors — first downbeat at 2.78s, first scene change at 6.06s, energy drop at 14.02s, chorus at 21.07s, music cut-out at 24.82s — and pins every cut, hair flip, turn and formation change to them.
- Constrain backup dancers by count and by permission: two to six allowed, no facial close-ups, no lip sync, never occluding the lead, never becoming a second visual centre.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

### Time freeze and rewind set piece

A five-beat skeleton — normal, collision, freeze at the peak, orbit, precise rewind — with exactly one character exempt from the freeze. The corpus contains the same author reusing this skeleton with a different physical material, which is direct evidence that it transfers.

**Use when:** Short high-engagement set pieces built on a physics spectacle rather than a plot. The diner version is the single highest-engagement case in the whole corpus.

**Guidance:**

- Keep the five beats and swap the physical material. The corpus has coffee-and-crockery and a flying wig running the identical skeleton, which is what makes it a template rather than a one-off.
- Name the exempt character and give them an attitude — calm, slightly amused, almost bored. That attitude is the narrative spine of the whole effect.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind) [#2](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze) [#3](https://goodcase.ai/cases/90s-diner-time-freeze-effect)

## 🔥 Top 30 by heat

The 30 hottest cases across all versions (ranks 1–6 are also shown in full under ⭐ Featured). *prompt* opens the full entry in the gallery, *source* opens the creator's original post.

| #   | Case                                                                                                                                                                                  | Version     | Heat | Retest                    | Links                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Frozen Time and Rewind in a 1950s Diner](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)                                                                             | 2.5         | 100  | ⚠️ degraded (score 63.9)  | [prompt](./docs/gallery-seedance-2-5.md#frozen-time-and-rewind-in-a-1950s-diner) · [source](https://x.com/techhalla/status/2083389002552664385)                                         |
| 2   | [Seoul Summer Night Vlog](https://goodcase.ai/cases/vlog-c8171f712492)                                                                                                                | 2.5         | 99   | ✅ reproduced (score 75.7) | [prompt](./docs/gallery-seedance-2-5.md#seoul-summer-night-vlog) · [source](https://x.com/AIwithkhan/status/2092971211169100048)                                                        |
| 3   | [Two-Idol K-pop MV, Shot by Shot](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)                                                                                            | 2.5         | 99   | ⚠️ degraded (score 74.2)  | [prompt](./docs/gallery-seedance-2-5.md#two-idol-k-pop-mv-shot-by-shot) · [source](https://x.com/Just_sharon7/status/2083422886686031982)                                               |
| 4   | [Mini DV Coffee ASMR Vlog](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)                                                                                             | 2.5         | 99   | ✅ reproduced (score 77.3) | [prompt](./docs/gallery-seedance-2-5.md#mini-dv-coffee-asmr-vlog) · [source](https://x.com/Strength04_X/status/2083094742682787939)                                                     |
| 5   | [Ordinary Day, Shot as an Ultra-Real Home Video](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe)       | unspecified | 99   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#ordinary-day-shot-as-an-ultra-real-home-video) · [source](https://x.com/AIwithkhan/status/2096095608268280198)                   |
| 6   | [Thirty-Second Emotional Live-Action Discovery Scene](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b) | unspecified | 95   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#thirty-second-emotional-live-action-discovery-scene) · [source](https://x.com/AIwithSynthia/status/2096439253970395531)          |
| 7   | [Seedance Native UGC Vertical Phone Follow-Cam Short](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)                                                                  | unspecified | 95   | ⚠️ degraded (score 71.2)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-native-ugc-vertical-phone-follow-cam-short) · [source](https://x.com/mightyking/status/2089299068514148655)             |
| 8   | [Blonde Student Unleashes Superpowers in a High School Hallway](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)                                                      | unspecified | 94   | ✅ reproduced (score 81.6) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#blonde-student-unleashes-superpowers-in-a-high-school-hallway) · [source](https://x.com/AiwithElisia/status/2092119695201837059) |
| 9   | [Seedance 2.5 Photoreal Everyday Short of an Indonesian Girl](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)                                                            | unspecified | 94   | ✅ reproduced (score 77.5) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-25-photoreal-everyday-short-of-an-indonesian-girl) · [source](https://x.com/RishuaVR/status/2089204108175741157)        |
| 10  | [Beach Day Memories Shot on a Smartphone](https://goodcase.ai/cases/smartphone-beach-day-memories)                                                                                    | 2.0         | 93   | -                         | [prompt](./docs/gallery-seedance-2-0-part-1.md#beach-day-memories-shot-on-a-smartphone) · [source](https://x.com/Goodmanprotocol/status/2079189509586260101)                            |
| 11  | [Seedance 2.5 Dance Clip Real Enough to Fool You](https://goodcase.ai/cases/seedance-269d1fc95820)                                                                                    | unspecified | 92   | ⚠️ degraded (score 50.9)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-25-dance-clip-real-enough-to-fool-you) · [source](https://x.com/johnAGI168/status/2095025524586193105)                  |
| 12  | [POV: Korean Baddie Meets Her Boyfriend in the US](https://goodcase.ai/cases/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf)                 | unspecified | 92   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#pov-korean-baddie-meets-her-boyfriend-in-the-us) · [source](https://x.com/AIwithkhan/status/2094997895187673489)                 |
| 13  | [Fox’s Self-Filmed Walk Along a Forest Stream](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259)                                                                           | unspecified | 92   | ⚠️ degraded (score 74.5)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#foxs-self-filmed-walk-along-a-forest-stream) · [source](https://x.com/MrDasOnX/status/2089969922617266257)                       |
| 14  | [Hand-Drawn 2D Japanese Bakery Animation](https://goodcase.ai/cases/2d-38a41133eab1)                                                                                                  | 2.0         | 91   | ⚠️ degraded (score 55.9)  | [prompt](./docs/gallery-seedance-2-0-part-1.md#hand-drawn-2d-japanese-bakery-animation) · [source](https://x.com/riotboy2024/status/2092217560788000816)                                |
| 15  | [Cinematic Paris Fashion Campaign, Five Shots](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear)                                                                   | 2.0         | 90   | ✅ reproduced (score 81.8) | [prompt](./docs/gallery-seedance-2-0-part-1.md#cinematic-paris-fashion-campaign-five-shots) · [source](https://x.com/Just_sharon7/status/2083793251132186998)                           |
| 16  | [Meilin-Element Kung Fu Performance](https://goodcase.ai/cases/real-case-06-aimikoda)                                                                                                 | 2.0         | 90   | -                         | [prompt](./docs/gallery-seedance-2-0-part-1.md#meilin-element-kung-fu-performance) · [source](https://x.com/aimikoda/status/2054460932068200517)                                        |
| 17  | [Seedance 2.0 Cinematic East Asian Lifestyle Short](https://goodcase.ai/cases/aiwithelisia-seedance-ai-e7e817c4c4b8)                                                                  | unspecified | 90   | ✅ reproduced (score 86.8) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-20-cinematic-east-asian-lifestyle-short) · [source](https://x.com/AiwithElisia/status/2088846290130190784)              |
| 18  | [Boa Hancock Water Obstacle Race Prompt](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)                                                                            | 2.5         | 89   | ⚠️ degraded (score 66.3)  | [prompt](./docs/gallery-seedance-2-5.md#boa-hancock-water-obstacle-race-prompt) · [source](https://x.com/Chengzilhy/status/2087458506123465088)                                         |
| 19  | [A Cat's Cozy Day Filmed as a Selfie Vlog](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867)                                                                              | unspecified | 89   | ⚠️ degraded (score 70.2)  | [prompt](./docs/gallery-seedance-unversioned-part-1.md#a-cats-cozy-day-filmed-as-a-selfie-vlog) · [source](https://x.com/ZaraIrahh/status/2091385137133219971)                          |
| 20  | [Seedance Two-Character 2D Anime: Little Kite](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55)                                                                         | unspecified | 89   | ✅ reproduced (score 90.4) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-two-character-2d-anime-little-kite) · [source](https://x.com/Lianaalane/status/2089563357074559014)                     |
| 21  | [A Wizard's Ten-Second Escape Plan: Become a Duck](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7597faa7285f)                                                                  | unspecified | 89   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#a-wizards-ten-second-escape-plan-become-a-duck) · [source](https://x.com/AIwithNatalia/status/2089170554725265625)               |
| 22  | [Seedance 2.5 Macro Time-Lapse: Ten Seconds of Germination](https://goodcase.ai/cases/yesandyou-seedance-ai-d92a0a788b85)                                                             | unspecified | 89   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-25-macro-time-lapse-ten-seconds-of-germination) · [source](https://x.com/Yesandyou_/status/2088998841395921185)         |
| 23  | [Handheld Travel Vlog From Apartment to Beach](https://goodcase.ai/cases/youmind-travel-vlog-city-to-beach)                                                                           | 2.5         | 88   | -                         | [prompt](./docs/gallery-seedance-2-5.md#handheld-travel-vlog-from-apartment-to-beach) · [source](https://x.com/BubbleBrain/status/2083659648108990925)                                  |
| 24  | [Erling Haaland Claymation Gardening](https://goodcase.ai/cases/erling-haaland-525acabe78da)                                                                                          | 2.0         | 88   | ✅ reproduced (score 83.3) | [prompt](./docs/gallery-seedance-2-0-part-1.md#erling-haaland-claymation-gardening) · [source](https://x.com/noorwithwifi/status/2079818537137475762)                                   |
| 25  | [Thirty-Second Tropical Travel Vlog Montage in Bali](https://goodcase.ai/cases/seedance-a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a-beautiful-20-yea-6af38a792806) | unspecified | 88   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#thirty-second-tropical-travel-vlog-montage-in-bali) · [source](https://x.com/eshal__ai/status/2096840505355370629)               |
| 26  | [A Tiny Bird Emerging from Mud in a Glass Jar](https://goodcase.ai/cases/yesandyou-seedance-ai-2a9dc20c947d)                                                                          | unspecified | 88   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#a-tiny-bird-emerging-from-mud-in-a-glass-jar) · [source](https://x.com/Yesandyou_/status/2090075447195480403)                    |
| 27  | [Seedance Film It or Run: A First-Person Disaster Short](https://goodcase.ai/cases/just-sharon7-seedance-ai-9c64e481a51d)                                                             | unspecified | 88   | ✅ reproduced (score 79.3) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#seedance-film-it-or-run-a-first-person-disaster-short) · [source](https://x.com/Just_sharon7/status/2089578815219785888)         |
| 28  | [Korean Fantasy Romance Drama](https://goodcase.ai/cases/korean-fantasy-romance-drama)                                                                                                | 2.0         | 87   | ⚠️ degraded (score 73.7)  | [prompt](./docs/gallery-seedance-2-0-part-1.md#korean-fantasy-romance-drama) · [source](https://x.com/JuliaClarky/status/2079586851862835248)                                           |
| 29  | [Realism That Makes Ordinary Life Feel Special](https://goodcase.ai/cases/seedance-realism-that-makes-ordinary-life-feel-special-aa5751af1eff)                                        | unspecified | 87   | -                         | [prompt](./docs/gallery-seedance-unversioned-part-1.md#realism-that-makes-ordinary-life-feel-special) · [source](https://x.com/Just_sharon7/status/2096109540924141746)                 |
| 30  | [A Girl Cycling Through a Korean Alley in Summer](https://goodcase.ai/cases/aiwithkhan-seedance-ai-9a5c5cbd518b)                                                                      | unspecified | 87   | ✅ reproduced (score 85.4) | [prompt](./docs/gallery-seedance-unversioned-part-1.md#a-girl-cycling-through-a-korean-alley-in-summer) · [source](https://x.com/AIwithkhan/status/2091175465037746522)                 |

## 🎬 All Prompts

All 389 cases, with full prompts, live in the gallery under `docs/` (sharded so GitHub renders every page). Sorted by heat score within each version.

- Seedance 2.5 - 43 cases: [Full gallery](./docs/gallery-seedance-2-5.md).
- Seedance 2.0 - 130 cases: [Part 1](./docs/gallery-seedance-2-0-part-1.md) · [Part 2](./docs/gallery-seedance-2-0-part-2.md).
- Seedance (version unspecified) - 216 cases: [Part 1](./docs/gallery-seedance-unversioned-part-1.md) · [Part 2](./docs/gallery-seedance-unversioned-part-2.md) · [Part 3](./docs/gallery-seedance-unversioned-part-3.md).

## How to Contribute

This README doesn't take pull requests for new prompts — submissions go through goodcase.ai's review pipeline so provenance and heat score stay verifiable. Submit at [goodcase.ai/submit](https://goodcase.ai/submit); collection standards are at [goodcase.ai/standards](https://goodcase.ai/standards).

`README.md`, `README_zh.md`, `docs/` and the Skill reference are generated from `data/` — please don't hand-edit them. See [contributing.md](./contributing.md) for the submission standard, what gets rejected, and how the generator works. This project follows the [code of conduct](./code-of-conduct.md).

## 🙏 Acknowledgements

This project's format and Skill-packaging approach were shaped by:

- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - Template-library + installable-Skill + marketplace pattern.
- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README-as-gallery with per-entry attribution.
- [goodcase.ai](https://goodcase.ai) - The source of every case and heat score in this repository.

## Copyright & Takedown Notice

This repository carries three kinds of material under three different terms.

**Code** (generator scripts, Agent Skill, tooling) is released under the MIT License, see the `LICENSE` file. The MIT license covers the code only.

**Curation** (selection, organization, statistics, template extraction, summaries written by us) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse it with attribution to *awesome-seedance / goodcase.ai*.

**Prompts and media** remain the copyright of their original creators. Prompt text, creator summaries, poster images and video references are quoted from publicly published posts for documentation and study; every entry links back to its original source and to its goodcase.ai record. Nothing here grants a license to the underlying prompt or media beyond what the original post allows.

**Takedown process.** If you are a rights holder and want an entry removed or corrected, open a GitHub issue with the entry's slug (from its goodcase.ai URL) and the original source link, or contact goodcase.ai directly. Requests are verified against the original post and honored on verification; the entry is removed from `data/` and disappears from every generated file on the next regeneration.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LearnPrompt/awesome-seedance&type=Date)](https://star-history.com/#LearnPrompt/awesome-seedance&Date)
