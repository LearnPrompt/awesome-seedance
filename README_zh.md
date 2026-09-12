[English](./README.md) | **[中文](./README_zh.md)**

# Awesome Seedance [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Seedance 2.5 / 2.0 视频生成提示词精选库，每一条都核对过原帖来源。

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./contributing.md) [![License: MIT (code)](https://img.shields.io/badge/code%20license-MIT-blue.svg)](./LICENSE) [![Content: CC BY 4.0 (curation)](https://img.shields.io/badge/curation-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

更多经过验证、带完整 Prompt 的 AI 案例 → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)

## 目录

- [安装](#安装)
- [为什么值得收藏这个仓库](#为什么值得收藏这个仓库)
- [在 goodcase.ai 上浏览](#在-goodcaseai-上浏览)
- [什么是 Seedance 2.5](#什么是-seedance-25)
- [统计](#统计)
- [⭐ 精选](#-精选)
- [🔁 跨模型复测](#-跨模型复测)
- [🧩 Prompt 模板](#-prompt-模板)
- [🔥 热度 Top 30](#-热度-top-30)
- [🎬 全部案例](#-全部案例)
- [如何投稿](#如何投稿)
- [🙏 致谢](#-致谢)
- [版权与下架政策](#版权与下架政策)
- [Star History](#star-history)
## 安装

```bash
npx seedance-prompt-library install
```

把 seedance-prompt-library 这个 Agent Skill 装进 Claude Code / Codex，让 agent 直接调结构化模板在你的编辑器里写 Seedance prompt。

## 为什么值得收藏这个仓库

**每条 prompt 都人工核对过与原帖一致。** 只靠成片视频反推出来的 prompt 一律不收，没有原帖来源不收，这是 [goodcase.ai 的收录标准](https://goodcase.ai/standards)（2026-08-05 起生效的红线）。

**每条都带完整溯源。** 作者、原帖链接、发布时间、热度分——热度是同平台已发布案例里的相对分位，上不了榜就不收。

**自带可安装的 Agent Skill。** `npx seedance-prompt-library install` 一行装进 Claude Code / Codex，agent 用真实验证过的模板结构写 Seedance prompt，不是瞎编。

## 在 goodcase.ai 上浏览

这份 README 是索引。完整画廊、搜索、热度榜、复测记录都在 [goodcase.ai/cases?filter=video](https://goodcase.ai/cases?filter=video)。

## 什么是 Seedance 2.5

Seedance 2.5 是字节跳动的视频生成模型（Early Access），支持文本、图片、视频、音频四种参考输入，原生口型同步和语音驱动对白。Seedance 2.0 是上一代，文生视频/图生视频、没有原生音画同步，这里一并收录用于对照。原帖只写了 Seedance 没标版本的案例归入“未标版本”。

## 统计

| 指标             | 数值              |
| -------------- | --------------- |
| 案例总数           | 389             |
| Seedance 2.5   | 43              |
| Seedance 2.0   | 130             |
| Seedance（未标版本） | 216             |
| 作者数            | 156             |
| 跨模型复测          | 247 条 / 257 次   |
| 稳定度分（已测）       | 245 条 / 均分 78.0 |
| 最近更新           | 2026-09-11      |

每条案例只计一次；同时标了多个 Seedance 版本的案例按最高版本计。

## ⭐ 精选

按热度分排序的前 6 条，覆盖全部 Seedance 版本。

### 复古餐厅时间冻结与倒放

> 一份 30 秒的时间冻结加倒放脚本：咖啡打翻的瞬间被锁死，镜头绕悬浮液带走完整圈，再让所有人和物倒回原位，最后一个招手把事故消解掉。

```
Photorealistic cinematic 1950s American diner, chrome stools, red vinyl, neon glow and checkerboard floor, shot with modern lived-in realism and soft natural window light. Subtle handheld texture, warm practicals, rich period detail, heavy film grain.

0-4s: [Medium Wide] A striking young woman in her early 20s sits alone at the counter, calm and slightly amused, slowly sipping a tall thick milkshake through a straw. Behind her a young waitress in classic uniform approaches with a tray of eggs and bacon in one hand and a full glass coffee pot in the other. An older lady starts rising from a nearby booth.

4-8s: [Dynamic Tracking] The older lady collides hard into the waitress. Tray, plate, eggs, bacon and coffee pot explode upward in chaotic slow motion. Coffee erupts into long liquid ribbons and perfect suspended droplets. Camera immediately begins a smooth continuous orbit around the impact. Time locks completely at the peak of the spill. Every face freezes in pure shock. Only the girl at the counter keeps moving, completely unfazed.

8-17s: [Slow 360° Orbital] Camera glides in a full elegant orbit through the frozen diner. Coffee hangs in mid-air as glassy ribbons and spheres with perfect volume and surface tension. Bacon strips, eggs and the spinning tray float weightlessly. Patrons and waitress remain locked in startled expressions. The girl at the counter takes one slow, deliberate sip, eyes half-lidded, almost bored, while the entire frozen world (except her) begins an elegant reverse: every droplet, every piece of food and every person rewinds smoothly back to the exact starting positions.

17-24s: [Medium Shot] Rewind lands perfectly. Waitress stands balanced again with tray and coffee pot. The girl lifts her eyes, raises two fingers in a small casual gesture and softly calls the waitress by name. The waitress turns toward her just before the older lady begins to stand, completely avoiding the collision. A tiny private smile crosses the girl’s face.

24-30s: [Extreme Close-Up] Hard cut to her face as she takes one last slow sip. Soft knowing smile, eyes almost closed in quiet satisfaction, like she has done this a hundred times. Shallow depth of field, creamy bokeh of the neon diner behind her.

Photorealistic, ultra-detailed fluid physics, perfect motion blur only on moving elements, stable characters, cinematic lighting, heavy natural film grain, no artifacts, movie-level temporal coherence, high rewatch value.
```

[<img src="https://media.goodcase.ai/media/poster/seedance-25-diner-frozen-time-rewind.jpg" width="600" alt="复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)

**作者:** @techhalla | **来源:** [原帖](https://x.com/techhalla/status/2083389002552664385) | **发布:** 2026-08-01 | **热度:** 100

**稳定度：** 64/100

**复测：** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ 降级 (63.9 分) · [产物](https://media.goodcase.ai/retests/seedance-25-diner-frozen-time-rewind/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)**

### 首尔夏夜 Vlog

> 一份详尽的脚本式提示词，用于创作一段展现首尔夏夜怀旧家庭录像风格的视频。

```
Create a 30-second, 1080p ultra-realistic personal home-video showing an ordinary summer evening in the life of a young Korean woman. No reference image. MAIN SUBJECT Young Korean woman in her early 20s, naturally pretty, realistic skin texture, minimal makeup, relaxed and approachable personality. Long black hair loosely tied into a messy side ponytail with a few loose strands around her face. Wearing a fitted pastel-blue short top, loose cream pajama-style pants, black sneakers and a simple silver necklace. Maintain the same face, hairstyle, clothing, body proportions and overall appearance throughout the entire video. SETTING A quiet older Seoul residential neighborhood during a warm summer evening. Narrow concrete lanes, small houses, potted plants, bicycles, old walls, utility poles, overhead wires, a tiny neighborhood bakery, a public water tap and large leafy trees casting shadows across the street. Everything should feel lived-in, ordinary and peaceful. CAMERA / VISUAL AESTHETIC Raw personal footage casually recorded by a friend on an early-2000s consumer DV camcorder. Strong handheld shake, imperfect framing, autofocus hunting, exposure shifts, occasional motion blur, faded colors, soft digital detail, mild noise, accidental zooms and natural camera imperfections. — OUTSIDE THE HOUSE She steps outside carrying a small reusable shopping bag. She locks the door, adjusts her messy ponytail and looks toward the camera with a relaxed smile. — BAKERY STOP She reaches a tiny neighborhood bakery and buys a warm pastry. She steps outside, takes her first bite and immediately smiles because it tastes good. She notices her friend filming and holds the pastry toward the camera playfully before taking another bite. — WALKING HOME She continues down the narrow street while eating. A neighborhood cat follows her for a few steps. She notices it, crouches down and gently pets it. — SMALL ACCIDENT She walks beneath a large tree when a few leaves fall onto her hair. She stops, looks confused, then realizes what happened and laughs. — QUIET MOMENT She reaches a low concrete wall beside the street and sits down for a moment. — FINAL MOMENT She stands up and continues walking home.
```

[<img src="https://media.goodcase.ai/media/poster/vlog-c8171f712492.jpg" width="600" alt="首尔夏夜 Vlog">](https://goodcase.ai/cases/vlog-c8171f712492)

**作者:** @AIwithkhan | **来源:** [原帖](https://x.com/AIwithkhan/status/2092971211169100048) | **发布:** 2026-08-27 | **热度:** 99

**稳定度：** 76/100

**复测：** MiniMax H3 Max 768p · 2026-09-07 · ✅ 复现 (75.7 分) · [产物](https://media.goodcase.ai/retests/vlog-c8171f712492/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/vlog-c8171f712492)**

### 双人 K-pop MV 逐镜分镜

> 把 30 秒切成十几段两到四秒的镜头，每段写死机位、景别、背景和动作，两个女生用粉发和黑发做外观锚点贯穿全片。值钱的是这套时间码排镜法。

```
30-second ultra-realistic K-pop MV featuring two young East Asian women with flawless synchronization, cinematic lighting, glossy skin, realistic hair and fabric physics, natural body motion, and 4K live-action quality. Vibrant hot pink, electric blue, and silver color palette. 0–2s: Wide shot in a bright circular pink studio with reflective floor. Pink-haired woman (left) and black-haired woman (right) perform energetic opening pose and synchronized dance. 2–4s: Medium close-up of the black-haired woman on a blue spotlight stage, confidently pointing at the camera. 4–6s: Pink-haired woman dances before shimmering blue-silver tinsel curtains, dramatic hair flip and fluid arm movements. 6–8s: Back to the pink studio. Both perform synchronized choreography with sharp arm waves, hip sways, and strong formations. 8–10s: Extreme close-up of both faces against a blue background, glossy makeup, subtle smiles, and direct eye contact. 10–14s: Solo shots at the tinsel backdrop. Pink-haired woman mouths lyrics and gestures confidently, followed by the black-haired woman with relaxed jacket styling. 14–18s: Pink studio. Coordinated jacket choreography, hair flips, powerful synchronized dance, ending hands-on-hips. 18–22s: Glamour close-ups. Black-haired woman under glittering bokeh lights, then pink-haired woman with wind-blown hair against a soft pink background. 22–24s: Blue spotlight stage. Mirrored black-haired performer effect with synchronized spins and flowing hair. 24–26s: Both walk confidently toward the camera in front of shimmering tinsel curtains, reflections visible on the floor. 26–29s: Final synchronized dance and ending pose in the pink circular studio, standing together and looking into the camera. Style: Hyper-realistic live action, Seedance 2.5-quality motion realism, perfect lip sync, natural weight shifts, flowing hair, realistic fabric simulation, polished K-pop music video cinematography.
```

[<img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="600" alt="双人 K-pop MV 逐镜分镜">](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)

**作者:** @Just_sharon7 | **来源:** [原帖](https://x.com/Just_sharon7/status/2083422886686031982) | **发布:** 2026-08-01 | **热度:** 99

**稳定度：** 74/100

**复测：** MiniMax H3 Max 768p · 2026-09-07 · ⚠️ 降级 (74.2 分) · [产物](https://media.goodcase.ai/retests/seedance-25-kpop-mv-dual-idol/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)**

### mini DV 咖啡 ASMR vlog

> 用家用摄像机的缺陷反向做真实感：手抖、来回找焦、曝光漂移、磁带颗粒全写进提示词，再配一份 ASMR 声音清单和每段三秒的分镜节奏。

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

[<img src="https://media.goodcase.ai/media/poster/seedance-25-minidv-coffee-asmr-vlog.jpg" width="600" alt="mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)

**作者:** @Strength04_X | **来源:** [原帖](https://x.com/Strength04_X/status/2083094742682787939) | **发布:** 2026-07-31 | **热度:** 99

**稳定度：** 77/100

**复测：** MiniMax H3 Max 768p · 2026-09-07 · ✅ 复现 (77.3 分) · [产物](https://media.goodcase.ai/retests/seedance-25-minidv-coffee-asmr-vlog/video-minimax-h3-768p-20260907-phase1/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)**

### Create a 30-second, 1080p ultra-realistic personal home-video showing…

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

[<img src="https://media.goodcase.ai/media/poster/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe.jpg" width="600" alt="Create a 30-second, 1080p ultra-realistic personal home-video showing…">](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe)

**作者:** @AIwithkhan | **来源:** [原帖](https://x.com/AIwithkhan/status/2096095608268280198) | **发布:** 2026-09-05 | **热度:** 99

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe)**

### Create a 30-second, 1080p ultra-realistic emotional live-action scene…

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

[<img src="https://media.goodcase.ai/cases/4727d059893d.jpg" width="600" alt="Create a 30-second, 1080p ultra-realistic emotional live-action scene…">](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)

**作者:** @AIwithSynthia | **来源:** [原帖](https://x.com/AIwithSynthia/status/2096439253970395531) | **发布:** 2026-09-06 | **热度:** 95

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b)**

## 🔁 跨模型复测

每条 prompt 都会在其他视频模型上重跑，结论与产物公开，记录在 goodcase.ai 的复测日志里。没有终评分的记录显示为“无评分”。

| 模型                  | 次数  | 复现率 |
| ------------------- | --- | --- |
| MiniMax H3 Max 768p | 246 | 73% |
| MiniMax H3 768p     | 11  | 82% |

## 🧩 Prompt 模板

从最高热度案例里提炼出来的可复用 prompt 结构，可安装的 Skill 里同样包含这些模板。

### 逐秒时间轴分镜脚本

把片子切成首尾相接的时间段，每段带一个机位、一个主要动作和一行音效。整个案例库里承重最强的结构。

**适用场景:** 长度超过 8 秒，或者某件事必须发生在某个时刻。207 条里 63 条（30%）用了时间分段，在 Seedance 2.5 案例里这个比例升到 45%。

**要点:**

- 段长控制在 2 到 5 秒。纪实跟拍两秒一段，广告三秒一段，有音频驱动的 MV 可以细到亚秒级锚点。段越短，越要给可见的动作动词，别给情绪形容词。
- 时间写成闭区间并首尾相接（`0-4s` 接 `4-8s`），且总和等于声明的时长。写 30 秒却只列到 24 秒，模型会把最后一段拉长填满。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)

### 参考图身份锁定

给每张参考图一个稳定 token，逐条列出要继承什么，再单独列出不许继承什么。能不能生效，差别就在后面那条不继承声明。

**适用场景:** 任何需要一张脸、一套衣服、一个产品或一套 UI 布局跨镜头存活的片子。2.0 和 2.5 都适用，2.5 还能用同一套 token 语法引用音频和视频。

**要点:**

- 按角色拆参考图，分别锁定。GoPro 钓鱼那条把 `@location1` 用于河流场景、`@hands1` 用于前臂和工具器物，每个后面各跟一句 100% matches reference。
- 继承清单要逐条枚举，别写保持一致。男友视角那条列了十三项：身份、五官、脸型、肤色、年龄感、发型、发色、身高、体型、身体比例、服装、鞋履、整体气质。

**示例:** [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

### 手持 UGC vlog

用相机缺陷换真实感。指名一个具体的消费级器材年代，把它的毛病写成要求，再手动关掉电影感。

**适用场景:** 要私人感的素材：日常、旅拍、健身、做饭、出门前准备。目标是像真有人拍的，而不是像很贵的时候用这套。

**要点:**

- 把相机缺陷当真实感开关：手抖、对焦来回找、曝光呼吸、构图漂移、变焦不匀、偶尔切掉半张脸。案例库里 23 条靠这套词表拿到手机实拍质感。
- 指名器材年代，不要笼统要求真实：mini DV 家用摄像机、16mm、VHS、iPhone 16 Pro、胸挂运动相机。一个具体型号带着整套光学特征，realistic 这个词带不来。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) [#2](https://goodcase.ai/cases/16mm-analog-morning-vlog) [#3](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9) [#4](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)

### 第一人称一镜到底

执法记录仪、GoPro、FPV 和车把视角。相机挂在身体上，运动必须从身体推导，每一次剪辑都得手动声明。

**适用场景:** 要观众就是操作者的沉浸素材：破门突入、极限运动、厨师视角做饭、无人机飞行。207 条里 32 条属于这类。

**要点:**

- 声明挂载位置和高度，模型才能推出该怎么晃：胸挂在破门手身上、POV 保持胸到眼的高度、只随身体移动。
- 拒绝空首帧。GoPro 钓鱼那条写 `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`，把死掉的第一秒省掉了。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

### UGC 口播测评带货

创作者对着镜头开箱、上手、种草。要两把独立的锁——一把锁人，一把锁产品——台词焊进动作里。

**适用场景:** 带货型产品视频、开箱和创作者测评：产品要在被拿起、旋转、佩戴的过程中始终认得出来。

**要点:**

- 产品锁和人物锁分开写，并把产品拆成结构件。太阳镜测评那条点名了镜框形状、镜片、铰链、颜色、材质、比例，还把零售盒和皮套各自当独立参考锁住。
- 台词写在它发生的那一拍里。咖啡机广告把 `I finally tried this coffee machine` 放在创作者走进厨房的那一秒，不另开对白区。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106) [#2](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9) [#3](https://goodcase.ai/cases/case-b157d9c072bc)

### 电影级产品广告分镜

8 到 20 秒的精修广告：开头写死广告美学，中间是编号或计时的分镜拆解，结尾一个英雄镜头，最后甩一段关键词。

**适用场景:** 美妆、饮品、珠宝、汽车、香水这类要读成投放级制作、不能读成创作者视频的广告。

**要点:**

- 分镜之前先写广告美学词：premium beauty-commercial aesthetics、luxury advertising aesthetic、变形宽银幕镜头、体积光。它决定后面每个镜头的光线逻辑。
- 每个微距和慢动作都指名拍什么：泡沫质地、液体飘带、钻石色散、金属反光扫过包装。不指名的微距只会给一个通用虚化特写。

**示例:** [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b)

### 对白与表演节拍

声明对白语种、标出说话人、把反应写成因果链而不是表情清单，每一拍以一个明确的结束状态收尾。

**适用场景:** 台词要被听见而不是被暗示的时候。207 条里 78 条把台词直接写进正文（38%），16 条显式管理口型。Seedance 2.5 还支持用上传的音轨驱动口型。

**要点:**

- 语种单独成行写在台词之前，写成 `セリフ言語: 日本語` 或 `Natural English dialogue only`，并把台词包进花括号或引号，避免被当成场景描述读。
- 有上传音轨时，写明口型依据音频里的真实人声而不是文字，并要求无人声段落闭唇。同时限定只有一个人对口型，背景人物别跟着张嘴。

**示例:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

### 电影级叙事短片

15 到 60 秒的多幕叙事。每幕带标题，角色卡写在幕之前，反转写成具体画面而不是一句会让人震惊。

**适用场景:** 预告片、迷你剧、灾难段落、科幻悬念、爱情短片——观众要跟剧情而不是看质感的场合。

**要点:**

- 给每一幕起标题。浪漫预告那条把幕命名为 The Message 和 Running Through the City，标题本身就约束了这一幕能装多少信息。
- 角色卡控制在五格——发型、上衣、下装、鞋、随身物。够模型认人，又不会吃光身份预算。

**示例:** [#1](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951) [#2](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100) [#3](https://goodcase.ai/cases/mermaid-rescue-cinematic-story) [#4](https://goodcase.ai/cases/youmind-1980s-slasher-yacht-octopus)

### 动漫与风格化画风固定

把画风写成可测量参数，再附一份相邻画风的排除清单。没有排除清单，动漫会塌成通用 3D 脸。

**适用场景:** 赛璐珞动作戏、吉卜力味日常、3D 卡通 RPG 战斗、2D 手绘烹饪。案例库里大约四分之一是各类风格化动画。

**要点:**

- 画风写成参数：细而有色的轮廓线、二到三段赛璐珞阴影加透明感中间影、瞳孔与头发的多层高光、布革金属宝石湿地面玻璃各自不同的反射与粗糙度。
- 一定要附排除清单。动漫剑戟那条排除了粗黑轮廓、单层平涂阴影、低成本 TV 动画感、通用 3D 美少女脸、塑料 CG 感、半写实、写实、低密度背景和浑浊色彩。

**示例:** [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e)

### 定格动画与步进节奏

定格首先是时间规格，其次才是质感。写死帧率和保持帧数，指名工艺材质，再禁掉那三样会悄悄把它抹平的东西。

**适用场景:** 黏土、剪纸、会动的油画、拼贴、台面物件动画。案例库里 24 条属于这一族。

**要点:**

- 节奏用数字写死：`True 12fps, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding`。
- 指名材质的同时排除相邻材质。狼群袭击那条写的是手绘 2D 质感、会动的油画，NOT clay、NOT puppets、NOT 3D。

**示例:** [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff)

### 流程与变换蒙太奇

烹饪步骤、改造延时、蓝图变房子、微缩城市组装。这类的手艺在于先声明什么不许变，再把变化按空间顺序排开。

**适用场景:** 主角是过程而不是人的片子：菜谱、建造、组装、前后对比。案例库里 35 条。

**要点:**

- 拿一整段写不变量。改造那条锁了机位、角度、焦段、透视、构图，再单独锁了房间尺寸、墙、窗、门、层高和结构布局。
- 变化按空间顺序排，不要含糊。地面从左到右铺开，然后墙和天花板同时变，然后家具落位——这比 gradually transforms 强得多。

**示例:** [#1](https://goodcase.ai/cases/case-429309e40d97) [#2](https://goodcase.ai/cases/case-778d0c927488) [#3](https://goodcase.ai/cases/case-8bdac964f9d4) [#4](https://goodcase.ai/cases/case-179a06586ce5)

### 打斗编排

打斗要成立，靠的是生物力学、接触点和连招链。写 epic fight 只会得到两个人互相挥空。

**适用场景:** 武术、剑戟、街头格斗、超能力位移和特技段落。案例库里 40 条，真人和动漫处理大致对半。

**要点:**

- 指名流派和它的生物力学。authentic Taekwondo biomechanics、真实解剖、重量、重力、动量，读起来跟 epic fight scene 完全是两回事。
- 招式写成链：直拳接勾拳接低扫，对方格挡、滑步下潜、封挡，随即反击体踢。再补一句双方持续进攻，不待机、不摆架子、不重置、不瞬移、不跳位。

**示例:** [#1](https://goodcase.ai/cases/just-sharon7-seedance-ai-8085c03efbb0) [#2](https://goodcase.ai/cases/yourplugai-seedance-ai-fb797edfc8e4) [#3](https://goodcase.ai/cases/case-f7e7c1862f38) [#4](https://goodcase.ai/cases/case-1a9a2c659866)

### 音乐卡点 MV

从 BPM 推出节拍锚点，把每一次剪辑、甩发和队形变化钉在真实重拍上，再把伴舞约束住，别让他们抢走视觉中心。

**适用场景:** K-pop MV、翻跳、卡点健身剪辑、俱乐部演出片段。带音频锚点的写法只在 Seedance 2.5 上用，它接受音轨作为输入模态。

**要点:**

- 先算节拍间隔再写镜头。Y2K 那条写约 128 BPM、每拍约 0.469 秒，然后列了九个命名锚点——2.78 秒第一个强重拍、6.06 秒第一次换景、14.02 秒能量下降、21.07 秒高潮副歌、24.82 秒音乐抽空——并把每次剪辑、甩发、转身和队形变化都钉上去。
- 伴舞按人数和权限双重约束：允许二到六名，不给面部特写、不对口型、不遮挡主角、不成为第二视觉中心。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

### 时间冻结与倒放奇观

五拍骨架——日常、碰撞、峰值锁死、环绕、精确倒放——只留一个人不受冻结影响。案例库里同一作者换了物理材质把这套骨架重跑一遍，这就是它可迁移的直接证据。

**适用场景:** 靠物理奇观而不是剧情撑起来的高互动短片。餐厅那版是整个案例库里互动最高的一条。

**要点:**

- 保留五拍，换掉物理材质。案例库里有咖啡和餐具版、有假发飞起版，跑的是同一套骨架，这才让它成为模板而不是一次性作品。
- 指名那个豁免角色并给他一个态度——从容、略带笑意、几乎有点无聊。这个态度是整套效果的叙事支点。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind) [#2](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze) [#3](https://goodcase.ai/cases/90s-diner-time-freeze-effect)

## 🔥 热度 Top 30

全部版本里热度最高的 30 条（前 6 名同时在上方 ⭐ 精选里完整展示）。*完整 prompt* 跳到画廊里的完整条目，*原帖* 跳到创作者原帖。

| #   | 案例                                                                                                                                                                                                       | 版本   | 热度  | 复测             | 链接                                                                                                                                                                                                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | --- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [复古餐厅时间冻结与倒放](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)                                                                                                                            | 2.5  | 100 | ⚠️ 降级 (63.9 分) | [完整 prompt](./docs/gallery-seedance-2-5.zh.md#复古餐厅时间冻结与倒放) · [原帖](https://x.com/techhalla/status/2083389002552664385)                                                                             |
| 2   | [首尔夏夜 Vlog](https://goodcase.ai/cases/vlog-c8171f712492)                                                                                                                                                 | 2.5  | 99  | ✅ 复现 (75.7 分)  | [完整 prompt](./docs/gallery-seedance-2-5.zh.md#首尔夏夜-vlog) · [原帖](https://x.com/AIwithkhan/status/2092971211169100048)                                                                              |
| 3   | [双人 K-pop MV 逐镜分镜](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)                                                                                                                              | 2.5  | 99  | ⚠️ 降级 (74.2 分) | [完整 prompt](./docs/gallery-seedance-2-5.zh.md#双人-k-pop-mv-逐镜分镜) · [原帖](https://x.com/Just_sharon7/status/2083422886686031982)                                                                     |
| 4   | [mini DV 咖啡 ASMR vlog](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)                                                                                                                    | 2.5  | 99  | ✅ 复现 (77.3 分)  | [完整 prompt](./docs/gallery-seedance-2-5.zh.md#mini-dv-咖啡-asmr-vlog) · [原帖](https://x.com/Strength04_X/status/2083094742682787939)                                                                 |
| 5   | [Create a 30-second, 1080p ultra-realistic personal home-video showing…](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe)  | 未标版本 | 99  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#create-a-30-second-1080p-ultra-realistic-personal-home-video-showing) · [原帖](https://x.com/AIwithkhan/status/2096095608268280198)    |
| 6   | [Create a 30-second, 1080p ultra-realistic emotional live-action scene…](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene-about-a-y-8c4cbeb0026b) | 未标版本 | 95  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#create-a-30-second-1080p-ultra-realistic-emotional-live-action-scene) · [原帖](https://x.com/AIwithSynthia/status/2096439253970395531) |
| 7   | [Seedance 原生 UGC 竖屏手机跟拍短片](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)                                                                                                                | 未标版本 | 95  | ⚠️ 降级 (71.2 分) | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#seedance-原生-ugc-竖屏手机跟拍短片) · [原帖](https://x.com/mightyking/status/2089299068514148655)                                                |
| 8   | [Seedance 2.5 印尼女生日常写实短片](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)                                                                                                                   | 未标版本 | 95  | ✅ 复现 (77.5 分)  | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#seedance-25-印尼女生日常写实短片) · [原帖](https://x.com/RishuaVR/status/2089204108175741157)                                                    |
| 9   | [金发少女在高中走廊释放超能力](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)                                                                                                                        | 未标版本 | 94  | ✅ 复现 (81.6 分)  | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#金发少女在高中走廊释放超能力) · [原帖](https://x.com/AiwithElisia/status/2092119695201837059)                                                        |
| 10  | [智能手机拍摄的海滩一日游回忆](https://goodcase.ai/cases/smartphone-beach-day-memories)                                                                                                                                | 2.0  | 93  | -              | [完整 prompt](./docs/gallery-seedance-2-0-part-1.zh.md#智能手机拍摄的海滩一日游回忆) · [原帖](https://x.com/Goodmanprotocol/status/2079189509586260101)                                                             |
| 11  | [不会有人认为这是真的吧？😄](https://goodcase.ai/cases/seedance-269d1fc95820)                                                                                                                                        | 未标版本 | 92  | ⚠️ 降级 (50.9 分) | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#不会有人认为这是真的吧) · [原帖](https://x.com/johnAGI168/status/2095025524586193105)                                                             |
| 12  | [Use the uploaded reference image as the exact character reference](https://goodcase.ai/cases/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf)                   | 未标版本 | 92  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#use-the-uploaded-reference-image-as-the-exact-character-reference) · [原帖](https://x.com/AIwithkhan/status/2094997895187673489)       |
| 13  | [狐狸在森林溪流边自拍漫游](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259)                                                                                                                              | 未标版本 | 92  | ⚠️ 降级 (74.5 分) | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#狐狸在森林溪流边自拍漫游) · [原帖](https://x.com/MrDasOnX/status/2089969922617266257)                                                              |
| 14  | [手绘 2D 日本料理动画](https://goodcase.ai/cases/2d-38a41133eab1)                                                                                                                                                | 2.0  | 91  | ⚠️ 降级 (55.9 分) | [完整 prompt](./docs/gallery-seedance-2-0-part-1.zh.md#手绘-2d-日本料理动画) · [原帖](https://x.com/riotboy2024/status/2092217560788000816)                                                                   |
| 15  | [电影感巴黎时尚广告大片：五镜头街拍](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear)                                                                                                                 | 2.0  | 90  | ✅ 复现 (81.8 分)  | [完整 prompt](./docs/gallery-seedance-2-0-part-1.zh.md#电影感巴黎时尚广告大片五镜头街拍) · [原帖](https://x.com/Just_sharon7/status/2083793251132186998)                                                              |
| 16  | [梅林元素功夫表演](https://goodcase.ai/cases/real-case-06-aimikoda)                                                                                                                                              | 2.0  | 90  | -              | [完整 prompt](./docs/gallery-seedance-2-0-part-1.zh.md#梅林元素功夫表演) · [原帖](https://x.com/aimikoda/status/2054460932068200517)                                                                          |
| 17  | [Seedance 2.0 电影感东亚女性生活方式短片](https://goodcase.ai/cases/aiwithelisia-seedance-ai-e7e817c4c4b8)                                                                                                            | 未标版本 | 90  | ✅ 复现 (86.8 分)  | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#seedance-20-电影感东亚女性生活方式短片) · [原帖](https://x.com/AiwithElisia/status/2088846290130190784)                                             |
| 18  | [Boa Hancock Water Obstacle Race Prompt](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)                                                                                               | 2.5  | 89  | ⚠️ 降级 (66.3 分) | [完整 prompt](./docs/gallery-seedance-2-5.zh.md#boa-hancock-water-obstacle-race-prompt) · [原帖](https://x.com/Chengzilhy/status/2087458506123465088)                                                 |
| 19  | [猫咪自拍记录温馨的一天](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867)                                                                                                                              | 未标版本 | 89  | ⚠️ 降级 (70.2 分) | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#猫咪自拍记录温馨的一天) · [原帖](https://x.com/ZaraIrahh/status/2091385137133219971)                                                              |
| 20  | [Seedance 双角色 2D 动漫：小风筝的十四秒冒险](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55)                                                                                                            | 未标版本 | 89  | ✅ 复现 (90.4 分)  | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#seedance-双角色-2d-动漫小风筝的十四秒冒险) · [原帖](https://x.com/Lianaalane/status/2089563357074559014)                                             |
| 21  | [十秒自救的女巫把自己变成了鸭子](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7597faa7285f)                                                                                                                      | 未标版本 | 89  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#十秒自救的女巫把自己变成了鸭子) · [原帖](https://x.com/AIwithNatalia/status/2089170554725265625)                                                      |
| 22  | [Seedance 2.5 超写实微距延时：种子发芽十秒](https://goodcase.ai/cases/yesandyou-seedance-ai-d92a0a788b85)                                                                                                              | 未标版本 | 89  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#seedance-25-超写实微距延时种子发芽十秒) · [原帖](https://x.com/Yesandyou_/status/2088998841395921185)                                               |
| 23  | [手持感旅行 Vlog：从公寓到海滩](https://goodcase.ai/cases/youmind-travel-vlog-city-to-beach)                                                                                                                         | 2.5  | 88  | -              | [完整 prompt](./docs/gallery-seedance-2-5.zh.md#手持感旅行-vlog从公寓到海滩) · [原帖](https://x.com/BubbleBrain/status/2083659648108990925)                                                                      |
| 24  | [Erling Haaland 黏土动画园艺](https://goodcase.ai/cases/erling-haaland-525acabe78da)                                                                                                                           | 2.0  | 88  | ✅ 复现 (83.3 分)  | [完整 prompt](./docs/gallery-seedance-2-0-part-1.zh.md#erling-haaland-黏土动画园艺) · [原帖](https://x.com/noorwithwifi/status/2079818537137475762)                                                         |
| 25  | [A cinematic 30-second tropical travel vlog montage featuring a…](https://goodcase.ai/cases/seedance-a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a-beautiful-20-yea-6af38a792806)       | 未标版本 | 88  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a) · [原帖](https://x.com/eshal__ai/status/2096840505355370629)           |
| 26  | [泥土中诞生的罐中小鸟](https://goodcase.ai/cases/yesandyou-seedance-ai-2a9dc20c947d)                                                                                                                               | 未标版本 | 88  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#泥土中诞生的罐中小鸟) · [原帖](https://x.com/Yesandyou_/status/2090075447195480403)                                                              |
| 27  | [Seedance 灾难现场拍还是跑：第一视角短片](https://goodcase.ai/cases/just-sharon7-seedance-ai-9c64e481a51d)                                                                                                              | 未标版本 | 88  | ✅ 复现 (79.3 分)  | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#seedance-灾难现场拍还是跑第一视角短片) · [原帖](https://x.com/Just_sharon7/status/2089578815219785888)                                               |
| 28  | [Korean Fantasy Romance Drama](https://goodcase.ai/cases/korean-fantasy-romance-drama)                                                                                                                   | 2.0  | 87  | ⚠️ 降级 (73.7 分) | [完整 prompt](./docs/gallery-seedance-2-0-part-1.zh.md#korean-fantasy-romance-drama) · [原帖](https://x.com/JuliaClarky/status/2079586851862835248)                                                   |
| 29  | [Create a 21-second vertical 9:16 cinematic stop-motion animation](https://goodcase.ai/cases/seedance-create-a-21-second-vertical-9-16-cinematic-stop-motion-animation-557fa2797476)                     | 未标版本 | 87  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#create-a-21-second-vertical-916-cinematic-stop-motion-animation) · [原帖](https://x.com/arsalannazir07/status/2096791786807275583)     |
| 30  | [Realism that makes ordinary life feel special](https://goodcase.ai/cases/seedance-realism-that-makes-ordinary-life-feel-special-aa5751af1eff)                                                           | 未标版本 | 87  | -              | [完整 prompt](./docs/gallery-seedance-unversioned-part-1.zh.md#realism-that-makes-ordinary-life-feel-special) · [原帖](https://x.com/Just_sharon7/status/2096109540924141746)                         |

## 🎬 全部案例

全部 389 条案例（含完整 prompt）都在 `docs/` 下的画廊里，按版本分文件、超长自动分页以保证 GitHub 能渲染；每个版本内按热度分排序。

- Seedance 2.5 - 43 条：[完整画廊](./docs/gallery-seedance-2-5.zh.md)。
- Seedance 2.0 - 130 条：[第 1 页](./docs/gallery-seedance-2-0-part-1.zh.md) · [第 2 页](./docs/gallery-seedance-2-0-part-2.zh.md)。
- Seedance（未标版本） - 216 条：[第 1 页](./docs/gallery-seedance-unversioned-part-1.zh.md) · [第 2 页](./docs/gallery-seedance-unversioned-part-2.zh.md) · [第 3 页](./docs/gallery-seedance-unversioned-part-3.zh.md)。

## 如何投稿

这份 README 不接受新 prompt 的 PR，投稿走 goodcase.ai 的审核管线，这样溯源和热度分才可核验。投稿入口 [goodcase.ai/submit](https://goodcase.ai/submit)，收录标准见 [goodcase.ai/standards](https://goodcase.ai/standards)。

`README.md`、`README_zh.md`、`docs/` 和 Skill 参考文件都由 `data/` 生成，请不要手改。投稿标准、拒收规则和生成器说明见 [contributing.md](./contributing.md)，社区行为准则见 [code-of-conduct.md](./code-of-conduct.md)。

## 🙏 致谢

这个项目的格式和 Skill 打包方式参考了：

- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) - 模板库 + 可安装 Skill + marketplace 的路子。
- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) - README 即画廊、逐条署名的做法。
- [goodcase.ai](https://goodcase.ai) - 本仓库全部案例和热度分的数据来源。

## 版权与下架政策

本仓库包含三类内容，分别适用三种条款。

**代码**（生成脚本、Agent Skill、工具）采用 MIT 许可，见 `LICENSE` 文件。MIT 只覆盖代码。

**策展**（案例筛选、组织、统计、模板提炼、我们撰写的摘要）采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)，注明来源 *awesome-seedance / goodcase.ai* 即可复用。

**Prompt 与媒体**的版权归原创作者所有。Prompt 文本、创作者摘要、封面图和视频引用均引自公开发布的原帖，用于记录与学习；每条案例都链回原始来源和对应的 goodcase.ai 记录页。本仓库不对 prompt 或媒体本身授予原帖之外的任何许可。

**下架流程。** 如果你是版权方，想要下架或更正某条内容，请提 GitHub issue 并附上该条目的 slug（见其 goodcase.ai 链接）和原帖链接，或直接联系 goodcase.ai。请求会与原帖核对，核实后处理：条目从 `data/` 移除，下次重新生成时即从所有生成文件中消失。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LearnPrompt/awesome-seedance&type=Date)](https://star-history.com/#LearnPrompt/awesome-seedance&Date)
