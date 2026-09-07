[English](./README.md) | **[中文](./README_zh.md)**

# Awesome Seedance

> Seedance 2.5 / 2.0 视频生成提示词精选库，每一条都核对过原帖来源。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://goodcase.ai/submit) [![License: MIT (code)](https://img.shields.io/badge/code%20license-MIT-blue.svg)](./LICENSE)

更多经过验证、带完整 Prompt 的 AI 案例 → [GoodCase.ai](https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance)

## 安装

```bash
npx seedance-prompt-library install
```

把 seedance-prompt-library 这个 Agent Skill 装进 Claude Code / Codex，让 agent 直接调结构化模板在你的编辑器里写 Seedance prompt。

## 为什么值得收藏这个仓库

1. 每条 prompt 都人工核对过与原帖一致。只靠成片视频反推出来的 prompt 一律不收，没有原帖来源不收，这是 [goodcase.ai 的收录标准](https://goodcase.ai/standards)（2026-08-05 起生效的红线）。
2. 每条都带完整溯源。作者、原帖链接、发布时间、热度分——热度是同平台已发布案例里的相对分位，上不了榜就不收。
3. 自带可安装的 Agent Skill。`npx seedance-prompt-library install` 一行装进 Claude Code / Codex，agent 用真实验证过的模板结构写 Seedance prompt，不是瞎编。

## 在 goodcase.ai 上浏览

这份 README 是索引。完整画廊、搜索、热度榜、复测记录都在 [goodcase.ai/cases?filter=video](https://goodcase.ai/cases?filter=video)。

## 什么是 Seedance 2.5

Seedance 2.5 是字节跳动的视频生成模型，目前 Early Access，支持文本/图像/视频/音频四种输入模态，原生口型同步和语音驱动对话。Seedance 2.0 是上一代，文生视频/图生视频，没有原生音画同步，这里保留作参考对比。

## 数据统计

| 指标 | 数值 |
| --- | --- |
| 案例总数 | 309 |
| Seedance 2.5 | 37 |
| Seedance 2.0 | 272 |
| 作者数 | 172 |
| 跨模型复测 | 11 条 / 11 次 |
| 稳定度分（已测） | 2 条 / 均分 85.5 |
| 最近更新 | 2026-09-06 |

## ⭐ 精选

跨两个 Seedance 版本，热度分前 6。

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

[<img src="https://pbs.twimg.com/amplify_video_thumb/2083357221883158528/img/8ImctZNgvJG1G2Qz.jpg" width="600" alt="复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)

**作者:** TechHalla | **来源:** [原帖](https://x.com/techhalla/status/2083389002552664385) | **发布:** 2026-08-01 | **热度:** 100

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)**

### 双人 K-pop MV 逐镜分镜

> 把 30 秒切成十几段两到四秒的镜头，每段写死机位、景别、背景和动作，两个女生用粉发和黑发做外观锚点贯穿全片。值钱的是这套时间码排镜法。

```
30-second ultra-realistic K-pop MV featuring two young East Asian women with flawless synchronization, cinematic lighting, glossy skin, realistic hair and fabric physics, natural body motion, and 4K live-action quality. Vibrant hot pink, electric blue, and silver color palette. 0–2s: Wide shot in a bright circular pink studio with reflective floor. Pink-haired woman (left) and black-haired woman (right) perform energetic opening pose and synchronized dance. 2–4s: Medium close-up of the black-haired woman on a blue spotlight stage, confidently pointing at the camera. 4–6s: Pink-haired woman dances before shimmering blue-silver tinsel curtains, dramatic hair flip and fluid arm movements. 6–8s: Back to the pink studio. Both perform synchronized choreography with sharp arm waves, hip sways, and strong formations. 8–10s: Extreme close-up of both faces against a blue background, glossy makeup, subtle smiles, and direct eye contact. 10–14s: Solo shots at the tinsel backdrop. Pink-haired woman mouths lyrics and gestures confidently, followed by the black-haired woman with relaxed jacket styling. 14–18s: Pink studio. Coordinated jacket choreography, hair flips, powerful synchronized dance, ending hands-on-hips. 18–22s: Glamour close-ups. Black-haired woman under glittering bokeh lights, then pink-haired woman with wind-blown hair against a soft pink background. 22–24s: Blue spotlight stage. Mirrored black-haired performer effect with synchronized spins and flowing hair. 24–26s: Both walk confidently toward the camera in front of shimmering tinsel curtains, reflections visible on the floor. 26–29s: Final synchronized dance and ending pose in the pink circular studio, standing together and looking into the camera. Style: Hyper-realistic live action, Seedance 2.5-quality motion realism, perfect lip sync, natural weight shifts, flowing hair, realistic fabric simulation, polished K-pop music video cinematography.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2083422025452765184/img/ZFIIYS0hQ9OI5TpK.jpg" width="600" alt="双人 K-pop MV 逐镜分镜">](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)

**作者:** Sharon Riley | **来源:** [原帖](https://x.com/Just_sharon7/status/2083422886686031982) | **发布:** 2026-08-01 | **热度:** 99

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

[<img src="https://pbs.twimg.com/amplify_video_thumb/2083093991860379648/img/W_8tCbKlZj7VvthB.jpg" width="600" alt="mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)

**作者:** 𝐌 | **来源:** [原帖](https://x.com/Strength04_X/status/2083094742682787939) | **发布:** 2026-07-31 | **热度:** 99

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)**

### Seedance 原生 UGC 竖屏手机跟拍短片

> Some people still think AI does't look real - This video just ended the argument Made with Seedance 2.5 1080p on maxfusi

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

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089298453318832128/img/4Lhii1hbWHygYAJ3.jpg" width="600" alt="Seedance 原生 UGC 竖屏手机跟拍短片">](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)

**作者:** @mightyking | **来源:** [原帖](https://x.com/mightyking/status/2089299068514148655) | **发布:** 2026-08-17 | **热度:** 95

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)**

### 金发少女在高中走廊释放超能力

> Made with seedance 2.5 Prompt: Create a cinematic, photorealistic 30-second live-action video set inside a modern Americ

```
Create a cinematic, photorealistic 30-second live-action video set inside a modern American high school hallway lined with beige lockers. A beautiful young blonde female student with tied-back blonde hair, wearing a loose white long-sleeve top, black mini skirt, black backpack and casual shoes, walks through the crowded hallway while several students around her watch and interact with her.

Start with a natural medium shot of the girl walking between other students. Use realistic handheld camera movement, shallow depth of field, soft cinematic lighting, natural skin texture, realistic facial expressions and authentic high-school atmosphere.

As she continues walking, tension suddenly builds. A female student in a dark varsity-style jacket approaches her. The blonde girl raises her hand and mysterious pink-red energy begins glowing around her hands. Small luminous particles and sparks appear in the air. The energy gradually becomes stronger, creating a supernatural aura around her body.

Transition smoothly into an intense superhero-style action sequence in the same school corridor. The blonde girl suddenly moves with extraordinary speed and power, dodging an attacking male student and striking him with glowing pink-red energy. Show dynamic martial-arts-inspired movements, fast footwork, powerful kicks and punches, with energy trails following her movements.

Use cinematic slow motion for the strongest attacks, followed by fast-paced cuts. Show students reacting and moving away in fear as the fight continues down the hallway. The glowing pink-red energy should illuminate the lockers, floor and characters realistically, with subtle volumetric light, sparks, smoke and motion blur.

Include a dramatic moment where the girl performs a powerful spinning kick while surrounded by bright pink-red energy, sending the opponent backward. Keep the choreography physically believable and visually grounded, avoiding cartoonish effects.

Near the end, the hallway becomes quiet. The glowing energy disappears and the girl calmly continues walking toward the camera as if nothing happened. End with a close-up/medium close-up of her face with a confident, serious expression.

Visual style: photorealistic Hollywood superhero movie, cinematic color grading, realistic teenage/high-school environment, detailed faces, natural skin, realistic clothing and hair physics, realistic lighting, subtle film grain, shallow depth of field, professional cinematography, dynamic camera movement, high-detail VFX, realistic particle effects, 4K cinematic quality.

Camera: handheld tracking shots, medium shots, close-ups, low-angle action shots, smooth whip-pans, controlled motion blur, occasional slow motion during attacks.

Aspect ratio: 16:9.
Duration: approximately 30 seconds.
No text, no subtitles, no logos, no watermark, no distorted faces, no extra fingers, no unnatural anatomy.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2092119655863525376/img/vUNzQrUdJMJvETHU.jpg" width="600" alt="金发少女在高中走廊释放超能力">](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)

**作者:** @AiwithElisia | **来源:** [原帖](https://x.com/AiwithElisia/status/2092119695201837059) | **发布:** 2026-08-25 | **热度:** 94

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)**

### Seedance 2.5 印尼女生日常写实短片

> Seedance 2.5 Prompt: Main subject: young Indonesian woman, early 20s, natural everyday appearance, faded mustard-yellow

```
Main subject: young Indonesian woman, early 20s, natural everyday appearance, faded mustard-yellow oversized cotton t-shirt, brown high-waisted linen wrap skirt reaching just below the knee, simple brown leather slide sandals, thin gold stud earrings, dark wavy hair in a messy low bun with loose wispy strands framing her face. Realistic warm brown skin texture, minimal natural makeup, warm and approachable demeanor. Maintain consistent identity, clothing, hairstyle, and appearance throughout the entire video.

Location: Authentic Indonesian residential neighborhood (gang) during a calm late morning. Narrow paved alleys, low-rise houses with open front terraces, terracotta roof tiles, potted frangipani and bougainvillea, laundry on bamboo drying racks, parked motorbikes along plastered walls, overhead utility wires, banana and coconut trees casting dappled moving shadows, quiet tropical residential atmosphere. No modern stores, billboards, cafés, or crowds.

Visual Style: Ultra-realistic documentary realism. Genuine candid behavior. Natural body language. Unscripted slice-of-life feeling. Strong environmental authenticity. Rich real-world details and believable human motion.

Camera Style: Early-2000s consumer DV camcorder aesthetic. Friend casually recording everyday moments. Heavy handheld shake, imperfect framing, frequent autofocus hunting, lens breathing, exposure pumping when moving between harsh tropical sun and deep alley shade, occasional motion blur, subtle rolling shutter, mild digital compression artifacts, warm faded colors, soft contrast, slight sensor noise. No stabilization. No cinematic camera moves. No modern color grading.

00:00–00:02
Outside a small house entrance with an open terrace. She sits on the low terrace step adjusting her loose hair bun with both hands raised. A light warm breeze moves loose strands of hair. She smiles naturally while the camera struggles to lock focus.

00:02–00:05
The camera follows her into a narrow alley lined with potted plants and plastered walls. She notices a neighborhood cat resting on a warm concrete ledge, crouches down, and gently pets it. Framing drifts off-center as the operator tries to keep up. Morning sunlight flickers through banana leaves overhead.

00:05–00:08
Small front terrace with a glass of sweet iced tea on a wooden stool. She sits relaxed on a plastic chair watching the quiet gang, casually brushing hair behind her ear. A motorbike passes slowly in the distant background. Handheld side angle with natural camera drift.

00:08–00:10
She turns toward the camera with a warm, genuine smile, gives a gentle nod of acknowledgement, then turns to walk down the tree-lined alley holding her iced tea. Recording cuts abruptly to black mid-motion as if the camcorder was switched off.

Audio: Hyper-detailed environmental ASMR binaural audio — crisp micro-sounds captured up close with high sensitivity. Crisp rustle of cotton fabric and linen as she moves, deep rhythmic cat purring vibrating close to the microphone, ice cubes gently clinking against the glass condensation, soft scuff of leather sandals on textured concrete pavement, dry banana leaves brushing together in the warm breeze, rhythmic faint sound of a sapu lidi broom sweeping fallen leaves nearby, water dripping into a terracotta gentong, distant gentle crowing rooster, faint muffled low-frequency hum of a passing motorbike down the alley. Pure natural foley textures, zero music, zero studio effects, zero narration, zero speech.

Goal: Authentic Indonesian neighborhood life captured like a forgotten home video from the early 2000s — candid, imperfect, realistic, warm, and deeply believable, with immersive environmental ASMR soundscape.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089204070997532672/img/UAx5Q6w1RA3C8pNG.jpg" width="600" alt="Seedance 2.5 印尼女生日常写实短片">](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)

**作者:** @RishuaVR | **来源:** [原帖](https://x.com/RishuaVR/status/2089204108175741157) | **发布:** 2026-08-17 | **热度:** 94

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)**

## 🔁 跨模型复测

每条 prompt 都会在其他视频模型上重跑，结论与产物公开，记录在 goodcase.ai 的复测日志里。

| 模型 | 次数 | 复现率 |
| --- | --- | --- |
| MiniMax H3 768p | 11 | 82% |

## 🧩 提示词模板

从表现最好的案例里提炼的可复用 prompt 结构，每套模板也打包进了可安装的 Skill。

#### 逐秒时间轴分镜脚本

把片子切成首尾相接的时间段，每段带一个机位、一个主要动作和一行音效。整个案例库里承重最强的结构。

**适用场景:** 长度超过 8 秒，或者某件事必须发生在某个时刻。207 条里 63 条（30%）用了时间分段，在 Seedance 2.5 案例里这个比例升到 45%。

**要点:**
- 段长控制在 2 到 5 秒。纪实跟拍两秒一段，广告三秒一段，有音频驱动的 MV 可以细到亚秒级锚点。段越短，越要给可见的动作动词，别给情绪形容词。
- 时间写成闭区间并首尾相接（`0-4s` 接 `4-8s`），且总和等于声明的时长。写 30 秒却只列到 24 秒，模型会把最后一段拉长填满。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/case-1d81958fff50)

#### 参考图身份锁定

给每张参考图一个稳定 token，逐条列出要继承什么，再单独列出不许继承什么。能不能生效，差别就在后面那条不继承声明。

**适用场景:** 任何需要一张脸、一套衣服、一个产品或一套 UI 布局跨镜头存活的片子。2.0 和 2.5 都适用，2.5 还能用同一套 token 语法引用音频和视频。

**要点:**
- 按角色拆参考图，分别锁定。GoPro 钓鱼那条把 `@location1` 用于河流场景、`@hands1` 用于前臂和工具器物，每个后面各跟一句 100% matches reference。
- 继承清单要逐条枚举，别写保持一致。男友视角那条列了十三项：身份、五官、脸型、肤色、年龄感、发型、发色、身高、体型、身体比例、服装、鞋履、整体气质。

**示例:** [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

#### 手持 UGC vlog

用相机缺陷换真实感。指名一个具体的消费级器材年代，把它的毛病写成要求，再手动关掉电影感。

**适用场景:** 要私人感的素材：日常、旅拍、健身、做饭、出门前准备。目标是像真有人拍的，而不是像很贵的时候用这套。

**要点:**
- 把相机缺陷当真实感开关：手抖、对焦来回找、曝光呼吸、构图漂移、变焦不匀、偶尔切掉半张脸。案例库里 23 条靠这套词表拿到手机实拍质感。
- 指名器材年代，不要笼统要求真实：mini DV 家用摄像机、16mm、VHS、iPhone 16 Pro、胸挂运动相机。一个具体型号带着整套光学特征，realistic 这个词带不来。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) [#2](https://goodcase.ai/cases/16mm-analog-morning-vlog) [#3](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9) [#4](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)

#### 第一人称一镜到底

执法记录仪、GoPro、FPV 和车把视角。相机挂在身体上，运动必须从身体推导，每一次剪辑都得手动声明。

**适用场景:** 要观众就是操作者的沉浸素材：破门突入、极限运动、厨师视角做饭、无人机飞行。207 条里 32 条属于这类。

**要点:**
- 声明挂载位置和高度，模型才能推出该怎么晃：胸挂在破门手身上、POV 保持胸到眼的高度、只随身体移动。
- 拒绝空首帧。GoPro 钓鱼那条写 `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`，把死掉的第一秒省掉了。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

#### UGC 口播测评带货

创作者对着镜头开箱、上手、种草。要两把独立的锁——一把锁人，一把锁产品——台词焊进动作里。

**适用场景:** 带货型产品视频、开箱和创作者测评：产品要在被拿起、旋转、佩戴的过程中始终认得出来。

**要点:**
- 产品锁和人物锁分开写，并把产品拆成结构件。太阳镜测评那条点名了镜框形状、镜片、铰链、颜色、材质、比例，还把零售盒和皮套各自当独立参考锁住。
- 台词写在它发生的那一拍里。咖啡机广告把 `I finally tried this coffee machine` 放在创作者走进厨房的那一秒，不另开对白区。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106) [#2](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9) [#3](https://goodcase.ai/cases/luxury-ugc-fashion-creator-review) [#4](https://goodcase.ai/cases/case-b157d9c072bc)

#### 电影级产品广告分镜

8 到 20 秒的精修广告：开头写死广告美学，中间是编号或计时的分镜拆解，结尾一个英雄镜头，最后甩一段关键词。

**适用场景:** 美妆、饮品、珠宝、汽车、香水这类要读成投放级制作、不能读成创作者视频的广告。

**要点:**
- 分镜之前先写广告美学词：premium beauty-commercial aesthetics、luxury advertising aesthetic、变形宽银幕镜头、体积光。它决定后面每个镜头的光线逻辑。
- 每个微距和慢动作都指名拍什么：泡沫质地、液体飘带、钻石色散、金属反光扫过包装。不指名的微距只会给一个通用虚化特写。

**示例:** [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b)

#### 对白与表演节拍

声明对白语种、标出说话人、把反应写成因果链而不是表情清单，每一拍以一个明确的结束状态收尾。

**适用场景:** 台词要被听见而不是被暗示的时候。207 条里 78 条把台词直接写进正文（38%），16 条显式管理口型。Seedance 2.5 还支持用上传的音轨驱动口型。

**要点:**
- 语种单独成行写在台词之前，写成 `セリフ言語: 日本語` 或 `Natural English dialogue only`，并把台词包进花括号或引号，避免被当成场景描述读。
- 有上传音轨时，写明口型依据音频里的真实人声而不是文字，并要求无人声段落闭唇。同时限定只有一个人对口型，背景人物别跟着张嘴。

**示例:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

#### 电影级叙事短片

15 到 60 秒的多幕叙事。每幕带标题，角色卡写在幕之前，反转写成具体画面而不是一句会让人震惊。

**适用场景:** 预告片、迷你剧、灾难段落、科幻悬念、爱情短片——观众要跟剧情而不是看质感的场合。

**要点:**
- 给每一幕起标题。浪漫预告那条把幕命名为 The Message 和 Running Through the City，标题本身就约束了这一幕能装多少信息。
- 角色卡控制在五格——发型、上衣、下装、鞋、随身物。够模型认人，又不会吃光身份预算。

**示例:** [#1](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951) [#2](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100) [#3](https://goodcase.ai/cases/mermaid-rescue-cinematic-story) [#4](https://goodcase.ai/cases/youmind-1980s-slasher-yacht-octopus)

#### 动漫与风格化画风固定

把画风写成可测量参数，再附一份相邻画风的排除清单。没有排除清单，动漫会塌成通用 3D 脸。

**适用场景:** 赛璐珞动作戏、吉卜力味日常、3D 卡通 RPG 战斗、2D 手绘烹饪。案例库里大约四分之一是各类风格化动画。

**要点:**
- 画风写成参数：细而有色的轮廓线、二到三段赛璐珞阴影加透明感中间影、瞳孔与头发的多层高光、布革金属宝石湿地面玻璃各自不同的反射与粗糙度。
- 一定要附排除清单。动漫剑戟那条排除了粗黑轮廓、单层平涂阴影、低成本 TV 动画感、通用 3D 美少女脸、塑料 CG 感、半写实、写实、低密度背景和浑浊色彩。

**示例:** [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e)

#### 定格动画与步进节奏

定格首先是时间规格，其次才是质感。写死帧率和保持帧数，指名工艺材质，再禁掉那三样会悄悄把它抹平的东西。

**适用场景:** 黏土、剪纸、会动的油画、拼贴、台面物件动画。案例库里 24 条属于这一族。

**要点:**
- 节奏用数字写死：`True 12fps, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding`。
- 指名材质的同时排除相邻材质。狼群袭击那条写的是手绘 2D 质感、会动的油画，NOT clay、NOT puppets、NOT 3D。

**示例:** [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff)

#### 流程与变换蒙太奇

烹饪步骤、改造延时、蓝图变房子、微缩城市组装。这类的手艺在于先声明什么不许变，再把变化按空间顺序排开。

**适用场景:** 主角是过程而不是人的片子：菜谱、建造、组装、前后对比。案例库里 35 条。

**要点:**
- 拿一整段写不变量。改造那条锁了机位、角度、焦段、透视、构图，再单独锁了房间尺寸、墙、窗、门、层高和结构布局。
- 变化按空间顺序排，不要含糊。地面从左到右铺开，然后墙和天花板同时变，然后家具落位——这比 gradually transforms 强得多。

**示例:** [#1](https://goodcase.ai/cases/case-429309e40d97) [#2](https://goodcase.ai/cases/case-778d0c927488) [#3](https://goodcase.ai/cases/case-8bdac964f9d4) [#4](https://goodcase.ai/cases/case-179a06586ce5)

#### 打斗编排

打斗要成立，靠的是生物力学、接触点和连招链。写 epic fight 只会得到两个人互相挥空。

**适用场景:** 武术、剑戟、街头格斗、超能力位移和特技段落。案例库里 40 条，真人和动漫处理大致对半。

**要点:**
- 指名流派和它的生物力学。authentic Taekwondo biomechanics、真实解剖、重量、重力、动量，读起来跟 epic fight scene 完全是两回事。
- 招式写成链：直拳接勾拳接低扫，对方格挡、滑步下潜、封挡，随即反击体踢。再补一句双方持续进攻，不待机、不摆架子、不重置、不瞬移、不跳位。

**示例:** [#1](https://goodcase.ai/cases/just-sharon7-seedance-ai-8085c03efbb0) [#2](https://goodcase.ai/cases/case-79df387a127e) [#3](https://goodcase.ai/cases/case-f7e7c1862f38) [#4](https://goodcase.ai/cases/case-1a9a2c659866)

#### 音乐卡点 MV

从 BPM 推出节拍锚点，把每一次剪辑、甩发和队形变化钉在真实重拍上，再把伴舞约束住，别让他们抢走视觉中心。

**适用场景:** K-pop MV、翻跳、卡点健身剪辑、俱乐部演出片段。带音频锚点的写法只在 Seedance 2.5 上用，它接受音轨作为输入模态。

**要点:**
- 先算节拍间隔再写镜头。Y2K 那条写约 128 BPM、每拍约 0.469 秒，然后列了九个命名锚点——2.78 秒第一个强重拍、6.06 秒第一次换景、14.02 秒能量下降、21.07 秒高潮副歌、24.82 秒音乐抽空——并把每次剪辑、甩发、转身和队形变化都钉上去。
- 伴舞按人数和权限双重约束：允许二到六名，不给面部特写、不对口型、不遮挡主角、不成为第二视觉中心。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

#### 时间冻结与倒放奇观

五拍骨架——日常、碰撞、峰值锁死、环绕、精确倒放——只留一个人不受冻结影响。案例库里同一作者换了物理材质把这套骨架重跑一遍，这就是它可迁移的直接证据。

**适用场景:** 靠物理奇观而不是剧情撑起来的高互动短片。餐厅那版是整个案例库里互动最高的一条。

**要点:**
- 保留五拍，换掉物理材质。案例库里有咖啡和餐具版、有假发飞起版，跑的是同一套骨架，这才让它成为模板而不是一次性作品。
- 指名那个豁免角色并给他一个态度——从容、略带笑意、几乎有点无聊。这个态度是整套效果的叙事支点。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind) [#2](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze) [#3](https://goodcase.ai/cases/90s-diner-time-freeze-effect)

## 🎬 全部提示词

### Seedance 2.5

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

[<img src="https://pbs.twimg.com/amplify_video_thumb/2083357221883158528/img/8ImctZNgvJG1G2Qz.jpg" width="600" alt="复古餐厅时间冻结与倒放">](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)

**作者:** TechHalla | **来源:** [原帖](https://x.com/techhalla/status/2083389002552664385) | **发布:** 2026-08-01 | **热度:** 100

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind)**

### 双人 K-pop MV 逐镜分镜

> 把 30 秒切成十几段两到四秒的镜头，每段写死机位、景别、背景和动作，两个女生用粉发和黑发做外观锚点贯穿全片。值钱的是这套时间码排镜法。

```
30-second ultra-realistic K-pop MV featuring two young East Asian women with flawless synchronization, cinematic lighting, glossy skin, realistic hair and fabric physics, natural body motion, and 4K live-action quality. Vibrant hot pink, electric blue, and silver color palette. 0–2s: Wide shot in a bright circular pink studio with reflective floor. Pink-haired woman (left) and black-haired woman (right) perform energetic opening pose and synchronized dance. 2–4s: Medium close-up of the black-haired woman on a blue spotlight stage, confidently pointing at the camera. 4–6s: Pink-haired woman dances before shimmering blue-silver tinsel curtains, dramatic hair flip and fluid arm movements. 6–8s: Back to the pink studio. Both perform synchronized choreography with sharp arm waves, hip sways, and strong formations. 8–10s: Extreme close-up of both faces against a blue background, glossy makeup, subtle smiles, and direct eye contact. 10–14s: Solo shots at the tinsel backdrop. Pink-haired woman mouths lyrics and gestures confidently, followed by the black-haired woman with relaxed jacket styling. 14–18s: Pink studio. Coordinated jacket choreography, hair flips, powerful synchronized dance, ending hands-on-hips. 18–22s: Glamour close-ups. Black-haired woman under glittering bokeh lights, then pink-haired woman with wind-blown hair against a soft pink background. 22–24s: Blue spotlight stage. Mirrored black-haired performer effect with synchronized spins and flowing hair. 24–26s: Both walk confidently toward the camera in front of shimmering tinsel curtains, reflections visible on the floor. 26–29s: Final synchronized dance and ending pose in the pink circular studio, standing together and looking into the camera. Style: Hyper-realistic live action, Seedance 2.5-quality motion realism, perfect lip sync, natural weight shifts, flowing hair, realistic fabric simulation, polished K-pop music video cinematography.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2083422025452765184/img/ZFIIYS0hQ9OI5TpK.jpg" width="600" alt="双人 K-pop MV 逐镜分镜">](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol)

**作者:** Sharon Riley | **来源:** [原帖](https://x.com/Just_sharon7/status/2083422886686031982) | **发布:** 2026-08-01 | **热度:** 99

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

[<img src="https://pbs.twimg.com/amplify_video_thumb/2083093991860379648/img/W_8tCbKlZj7VvthB.jpg" width="600" alt="mini DV 咖啡 ASMR vlog">](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)

**作者:** 𝐌 | **来源:** [原帖](https://x.com/Strength04_X/status/2083094742682787939) | **发布:** 2026-07-31 | **热度:** 99

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog)**

### Boa Hancock Water Obstacle Race Prompt

> A comprehensive video prompt for Seedance 2.5 designed to generate a 30-second water obstacle competition in the style of a Japanese variety show, emphasizing character consistency and complex camera work.

```
生成一段 30 秒、16:9 横屏、高真实真人实拍的大型水上障碍竞技节目。

整体呈现 2000 年代后期～2010 年代日本大型体育娱乐特别节目的现场直播质感。

舞台为夜间巨大户外水上竞技场，完整赛道搭建在大型比赛水池上方，周围有大型照明塔、钢结构桁架、观众席、工作人员区域和真实电视节目拍摄设备。

采用真实体育节目多机位拍摄：

ENG 摄像机、摇臂摄像机、轨道跟拍、长焦、水面低机位、障碍物侧面固定机位。

镜头始终服务于人物闯关动作。

画面保持真实电视直播质感：

自然 Pan、Zoom、跟焦、人物追踪、轻微 ENG 摄像机运动感，早期高清电视略微柔和的画面质感，自然电视压缩感，大型现场灯光形成真实明暗反差。

全程按照自然真实速度、实时物理规律进行。

【强制人物一致性】

上传的图片是挑战者唯一的人物视觉参考。

严格保持其中人物的：

人物身份

脸部五官
脸型
发型
发色
肤色
年龄感
身高
体型
身体比例
服装
整体人物气质
从视频第一帧到最后一帧始终保持为同一个人物。

多机位切换、正面、侧面、背面、低机位、长焦、全身动作、奔跑、跳跃、摔倒、攀爬、落水、水湿状态下，人物身份、脸部、身体比例 and 服装始终一致。

服装全程保持上传人物图中的同一套造型，其颜色、结构、材质与穿着方式始终固定。

【场地连续性】

整段视频发生在同一个连续存在的夜间水上竞技场。

三个障碍按照物理空间顺序依次连接：

滚筒障碍
→ Fishbone Reverse 反向鱼骨障碍
→ 反曲高墙

人物必须沿同一条赛道不断向前推进。

每一次镜头切换，都延续上一镜人物已经到达的位置和当前闯关进度。
障碍物、水池、平台、观众席以及大型灯光的位置关系始终连续稳定。
【30秒时间轴】

0–3.2 秒｜挑战者登场

【腿部近景 → 上半身中景 → 面部特写】

视频直接从挑战者腿部近景开始。

镜头沿人物身体自然向上切换：

腿部
→ 腰部与上半身
→ 面部特写。

人物站在起跑平台中央。

背景可以看到灯火通明的大型水上障碍赛道、钢结构设施以及大量现场观众。

人物神态轻松、自信。

镜头来到脸部时，她自然看向摄像机，露出明亮笑容。

随后轻轻握紧一只拳头，在胸前做一个简洁、充满信心的挑战动作。
观众立即响起掌声和欢呼。
人物随后转头看向前方赛道。

笑容逐渐收起。

眼神变得认真。

身体轻微前倾，做好冲刺准备。

短暂紧张停顿。

3.2–9 秒｜第一关：大型滚筒障碍

【3.2–4.3 秒｜摇臂超大全景】

比赛开始蜂鸣声突然响起。

人物立即从起点高速冲出。

大型摇臂镜头迅速展示完整竞技场和第一项障碍。

前方水面上连续排列多个大型软质圆柱滚筒。

观众瞬间爆发欢呼。

【4.3–6.5 秒｜斜前方 ENG 跟拍】

人物高速接近滚筒。

一脚踏上第一根大型滚筒。

脚掌接触后，滚筒立即受到身体重量作用开始真实旋转。

人物身体被旋转惯性轻微向后带动。

她立即大幅张开双臂保持平衡。

随后使用快速、连续的小步伐向前移动。

每一次脚掌踩下，滚筒都根据受力产生对应旋转。

人物开始出现轻微狼狈感。

【6.5–8 秒｜侧面轨道跟拍】

轨道摄像机与人物平行高速移动。

人物连续跨过几个旋转滚筒。

其中一次右脚明显打滑。

身体瞬间向侧后方倾斜。

双臂快速挥动，腰部扭转，另一只脚立即重新踩稳滚筒。

人物没有跌倒。

恢复平衡后马上继续冲刺。

【8–9 秒｜后方长焦】

人物从最后一根滚筒用力向前跳出。

双脚落到固定平台。

落地时膝盖自然弯曲，身体明显下沉缓冲。

马上起身继续向前奔跑。

第一关成功通过。

9–20 秒｜第二关：Fishbone Reverse

前方出现巨大的水上 Fishbone Reverse 反向鱼骨障碍。

多个细长大型软质横杆围绕中央机械轴持续旋转。

人物必须沿着狭窄连续平台向前移动，同时躲避不断横扫而来的旋转杆。

这一关开始让人物明显变得更加狼狈。

【9–11 秒｜摇臂大全景】

人物跑到 Fishbone Reverse 前方。

镜头从高处完整展示：

水池、狭窄踏台、中央旋转结构以及连续旋转的大型软杆。

人物只观察极短时间。

马上进入障碍。

【11–14 秒｜斜前方 ENG / 轨道跟拍】

第一根旋转杆迎面扫来。

人物快速低头并压低上半身，让横杆从头顶越过。

紧接着第二根杆从另一方向到来。

人物立即侧身，同时向前跨出一步。

第三根杆贴近腿部扫来。

人物快速抬腿，用小幅跳跃避开。

整个过程保持连续前进。

没有停下来等待每一根杆。

动作开始出现明显的临场应变和狼狈感。

【14–16 秒｜水面低机位】

镜头几乎贴近水面。

大型旋转软杆高速从镜头前景横扫过去。

人物正在后方狭窄平台上快速前进。

一根软杆突然从人物侧后方扫来。

她来不及完全避开。

横杆与人物身体侧面产生一次清晰、真实的软质碰撞。

碰撞力量立即改变人物身体重心。

人物上半身被带向侧方。

脚下连续踉跄两步。

双臂本能地大幅挥动尝试恢复平衡。

【16–18 秒｜侧面 ENG 中景】

人物最终没有掉进水里。

但是身体彻底失去平衡。

她明显坐倒 / 半摔在狭窄平台上。

臀部和一只手真实接触平台。

腿部短暂向前滑动。

这是一次真正完成的摔倒动作。

身体落地后出现一个非常短暂的狼狈停顿。

人物脸上出现惊慌、错愕和一点尴尬。

观众席爆发：

惊呼 → 笑声 → 加油声。

【18–20 秒｜后方跟拍】

人物立即用手撑住平台重新站起。

动作明显比刚开始时更加急促。

头发和身体随着运动自然摆动。

人物一边重新找回平衡，一边继续向前。

低头躲过最后一根旋转杆。

随后快速跳上出口平台。

成功离开 Fishbone Reverse。

人物没有停下来休息。

带着明显疲劳直接向最终障碍冲去。

20–27 秒｜最终关：反曲高墙

前方出现整个赛道最大的最终障碍：

巨型反曲高墙。

墙体从地面向上形成明显弧形，并向顶端逐渐变得陡峭。

墙顶明显高于人物。

此时人物已经经历两项障碍。

呼吸明显更加急促。

动作依然保持全力。

最终高墙只挑战一次。

【20–22 秒｜正面长焦】

人物沿直线全速冲向反曲高墙。

长焦镜头压缩空间，让巨大高墙出现在人物正前方，占据大部分画面。

人物奔跑过程中明显摆臂。

步幅逐渐增大。

观众全部开始站起。

现场欢呼迅速升高。

【22–24.5 秒｜墙体侧面低机位】

人物保持全速冲入弧形墙面。

第一脚重重踏在墙体底部。

随后依靠奔跑惯性沿墙面快速向上连续踏出数步。

身体逐渐向前伸展。

到达最高点时：

人物同时向上伸出双手。

双手成功抓住墙顶边缘。

身体离开墙面。

双腿悬空。

手臂承受全部身体重量。

【24.5–27 秒｜墙顶侧面 ENG + 长焦近景】

人物双手牢牢扒住墙顶。

先短暂悬挂。

随后弯
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087457852151808000/img/LbDhcwpWP2__7cnA.jpg" width="600" alt="Boa Hancock Water Obstacle Race Prompt">](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)

**作者:** 小宇Chengzi | **来源:** [原帖](https://x.com/i/status/2087458506123465088) | **发布:** 2026-08-12 | **热度:** 89

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)**

### 手持感旅行 Vlog：从公寓到海滩

> 把 30 秒切成五个连续的生活场景，用同一张参考图锁定女主角的脸和身材，从公寓出门写到日落坐在海边，靠摄像机做旧和真实感描述而不是明星卡司，撑出一条像朋友随手拍的旅行 vlog。

```
A realistic handheld travel vlog filmed by a friend following the main character throughout the day. Use the woman from the reference image as the main subject. Maintain her exact facial identity, hairstyle, facial features, and body proportions throughout the entire video. The camera feels like a real personal vlog camera, not a commercial production. Natural handheld movement, casual framing, imperfect human camera motion, authentic everyday atmosphere. No scripted acting. The woman behaves naturally, interacting with the environment like a real travel vlog. 0-5s: Morning departure. The woman leaves a cozy apartment with a small backpack. She checks her phone, smiles at the camera, adjusts her hair, and starts walking outside. The camera follows her from behind, slightly shaky like a friend filming. Morning sunlight, quiet neighborhood streets, people starting their day. 5-12s: Exploring the city. The camera follows her walking through local streets. She visits a small cafe, buys a drink, briefly talks to the camera, laughs naturally. She walks through a street market, looks at small shops, takes casual photos. The camera stays close, capturing spontaneous moments. 12-20s: Arriving at the beach. She takes public transportation or walks toward the coast. The environment gradually changes from city streets to a seaside town. Ocean breeze moves her hair. She looks excited when she sees the ocean. The camera follows her walking along the beach. She picks up a seashell, watches waves, and interacts naturally with people nearby. 20-27s: Summer beach afternoon. She meets friends at the beach. Everyone chats, laughs, plays near the water. The camera moves naturally between people, capturing real candid moments. She looks back at the camera and smiles. 27-30s: Ending moment. Golden hour sunset. She sits near the ocean, holding a drink, watching the sunset. The camera slowly moves backward, revealing the beach, waves, and the peaceful evening. A feeling of a real personal travel memory. Visual style: Authentic travel vlog footage. Realistic smartphone or mirrorless camera look. Natural daylight. Casual handheld movement. Slight camera shake. Real human reactions. Documentary realism. No cinematic commercial look. No dramatic posing. No artificial transitions. No text overlays. No logos. No face changes. No identity changes.
```

[<img src="https://media.goodcase.ai/media/poster/youmind-travel-vlog-city-to-beach.jpg" width="600" alt="手持感旅行 Vlog：从公寓到海滩">](https://goodcase.ai/cases/youmind-travel-vlog-city-to-beach)

**作者:** BubbleBrain | **来源:** [原帖](https://x.com/BubbleBrain/status/2083659648108990925) | **发布:** 2026-08-01 | **热度:** 88

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/youmind-travel-vlog-city-to-beach)**

### 单人 K-POP MV · Y2K 糖果世界逐秒分镜

> 一份 30 秒逐秒 K-POP MV 脚本：用音频时间码把舞蹈、口型、剪辑和场景全钉死在真实节拍上，主角锁脸锁服装贯穿六个 Y2K 场景，伴舞人数和位置逐段精确控制，翻盖手机合盖硬停收尾。

```
使用@音频1《Zero to Pop》作为唯一音乐、节拍和口型依据，生成一支30秒、16:9、24fps的原创单人K-POP MV。

视频必须完整覆盖音频的0.00–30.00秒，不得截断、延长、变速或自动淡出。不要重新生成背景音乐，不要加入另一首歌曲。

全片只有@图1是主角和主唱。允许出现2—6名伴舞，但伴舞不能获得面部特写、不能对口型、不能遮挡主角或成为第二视觉中心。

主角的脸、发型、发色、身材比例、服装和饰品全程锁定。只有主角按照@音频1中的实际人声精确对口型；没有人声的段落保持闭唇表演。

【整体视觉】

高预算真人K-POP MV，结合Y2K未来主义、怪诞糖果世界和千禧年数字文化：

CRT电子宠物、透明翻盖手机、像素图标、果冻便利店、充气卧室、镭射洗车通道、巨型CD舞台、镀铬金属、透明塑料和CD彩虹衍射。

色彩以泡泡糖粉、电光蓝、蓝莓紫、酸性绿和镀铬银为主。

怪诞元素必须像真正搭建的实景、机械装置和高级视觉特效，不能像廉价AI拼贴、普通夜店或传统赛博朋克城市。

【主角造型】

主角穿原创Y2K未来女团服装：

银白色不对称短夹克、糖果粉亮片内搭、蓝紫渐变低腰工装裤、透明树脂腰带、镀铬圆环饰品、银白厚底运动鞋，以及一个迷你透明翻盖手机挂饰。

服装全程不变。金属、塑料、布料、头发和饰品必须表现真实重量、反光、惯性和自然摆动。

【音频同步原则】

歌曲约128 BPM，每个主节拍间隔约0.469秒。

最重要的画面锁点：

2.78秒：第一个强重拍，正式进入舞蹈。
6.06秒：第一次换景。
9.82秒：进入翻盖手机表演镜头。
12.63秒：进入第一段收束动作。
14.02秒：音乐明显降能量，切入失重卧室。
17.78秒：节奏重新启动。
21.07秒：高潮副歌和巨型CD舞台出现。
24.82秒：音乐突然抽空，伴舞冻结。
28.95秒：最后一句和最终特写。
29.90—30.00秒：翻盖手机合上，画面硬停。

所有剪辑、甩发、转身、手势、踩地、队形变化和摄影机冲击都必须落在@音频1的真实重拍上。

【逐秒镜头时间线】

0.00–0.47秒：

黑暗中出现一条细窄的CRT扫描线，随歌曲第一个电子启动声闪亮。

不要出现人物，不要添加片名或文字。

0.47–1.88秒：

扫描线展开为一台圆角CRT显示器。

屏幕内出现一只原创像素电子宠物。它随着音频中的电子声睁开眼睛，头顶依次跳出像素爱心、电池和小星星。

所有图标只使用抽象像素图形，不要出现品牌、角色或乱码文字。

1.88–2.78秒：

摄影机快速从CRT屏幕中后退，揭示完整的半透明粉色街机房。

主角已经站在CRT前，侧身背对镜头。摄影机停稳时，她缓慢回头，眼神锁定镜头。

她必须在2.78秒第一个强重拍准确击中开场姿势。

2.78–6.06秒：

低机位鱼眼单人中近景。

主角进入第一段独舞：按键式手指动作、肩部弹动、手臂波浪、髋部重心切换和一次快速半转。

所有动作根据@音频1逐拍执行，不要机械地平均分配动作。

主角按照实际人声自然对口型。背景CRT里的像素宠物同步模仿她的节奏，但不能变成人类或复制她的脸。

摄影机围绕主角移动约45度，同时缓慢推进。

6.06秒，主角手掌拍向镜头，形成遮挡式硬切。

6.06–9.82秒：

进入外星果冻便利店。

主角站在粉色自动传送带中央，4名伴舞从两侧货架后滑入，形成主角在最前方的V形队列。

五人完成连续行进编舞：两步滑行、交叉手臂、肩部撞击、一次同步下沉和快速回弹。

主角距离摄影机最近，服装颜色最鲜明，面部始终清晰。伴舞动作统一但幅度略小。

摄影机正面后退，与传送带保持相同速度。

9.82–12.63秒：

中长焦主角单人镜头。

伴舞退到背景并失焦。主角从货架上拿起一只巨大的透明果冻翻盖手机。

她对着手机完成歌曲中这一段的实际对口型，通过眼神和嘴角表现出俏皮、略带嫌弃的态度。

手机按键根据音乐节拍发光。摄影机在强音上做两次短促punch zoom，但不改变主角身份或面部结构。

12.63–14.02秒：

切回全身镜头。

主角把果冻手机抛向空中，4名伴舞重新进入队形。

全员在三个主要节拍上依次完成：

第一拍：双臂向外展开；
第二拍：快速转身并甩发；
第三拍：身体下沉后锐利定格。

主角踩亮地面上的圆形像素按钮。一道蓝紫色扫描光从脚底向上扫过所有人物。

14.02秒，音乐降能量的瞬间完成场景转换。

14.02–15.55秒：

进入淡紫色失重充气卧室。

画面由快速舞蹈突然转为稳定、梦幻的长镜头。主角坐在充气床边，房间和家具开始缓慢旋转，但主角仍保持正常垂直方向。

不出现伴舞。

摄影机缓慢靠近。主角根据实际音频进行克制、贴近耳语感的对口型，不做大幅度舞蹈。

透明枕头、小型CD和银色耳机线缓慢漂浮。

15.55–17.78秒：

主角从床边站起，向摄影机走来。

两名伴舞出现在旋转房间的左右墙面，制造重力方向错乱的视觉效果，但不能抢夺主角注意力。

主角伸手触碰一张漂浮的小型CD。CD逐渐膨胀为彩虹色圆形入口。

17.78秒节奏重新出现时，主角迈步穿过CD入口，摄影机紧随她穿过，形成无缝转场。

17.78–21.07秒：

进入镭射泡泡洗车隧道。

节奏重新启动，主角带领4名伴舞向前完成行进式编舞：强力踏步、交叉手臂、头部转向、肩部重击和左右展开队形。

镀铬拱门、粉蓝旋转软刷和彩灯按照真实节拍运动。透明泡泡从人物之间经过，但不得遮挡主角面部。

摄影机在主角正前方快速后退，主角始终位于中心。

20.60–21.07秒之间，主角踢向一个巨大的透明泡泡。泡泡表面转化为CD彩虹纹理。

21.07秒高潮重拍时，泡泡爆开并完成换景。

21.07–24.82秒：

进入巨型CD终章舞台，这是全片能量最高的段落。

主角站在直径12米的旋转CD中心，6名伴舞组成对称半圆。摄影机从高位快速下降至略低于腰部的英雄角度。

主角按照歌曲高潮段落精确对口型，全员完成副歌核心编舞：

两拍快速手臂切换；
一次髋部重击；
一次同步旋转；
一次全身下沉；
最后伴舞向两侧打开，把舞台中心完全让给主角。

摄影机在主角旋转时绕行半圈，但不能越过轴线或造成左右翻转。

CD表面产生真实彩虹衍射，像素星空和镀铬行星随节奏闪动。

24.82秒音乐突然抽空时，所有伴舞立刻冻结。

24.82–27.00秒：

主角继续保持运动，伴舞像卡顿的电子游戏角色一样定格在背景。

主角独自向摄影机走两步。画面根据音频中的断奏出现克制的数字卡顿效果：同一个动作短暂重复1—2帧，但主角面部保持稳定。

随着音乐继续变空，冻结的伴舞依次化为方形像素颗粒并消失。

主角不得消失、复制或变形。

27.00–28.95秒：

舞台上只剩主角。

巨型CD停止旋转，背景灯光大部分熄灭。摄影机缓慢推近主角面部。

主角取下腰间的迷你透明翻盖手机，将它举到脸旁。她保持闭唇，直到@音频1最后一句人声真正开始。

画面运动变得极简，把注意力完全留给最后一句和主角表情。

28.95–29.90秒：

主角精确对口型歌曲最后一句。

她直视镜头，从冷静表情逐渐变成带有恶作剧感的轻微笑容。摄影机继续推进至面部特写。

只保留银粉色轮廓光和眼睛里的小型方形反光。

29.90–30.00秒：

主角"啪"地合上翻盖手机。

合盖动作必须与歌曲最终收尾音完全同步。背景灯光瞬间熄灭，画面硬切为黑色。

不要淡出，不要延长尾音，不要字幕、Logo或额外结束镜头。

【表演与口型】

只允许主角对口型。口型必须依据@音频1中的真实语音和节奏生成，不要根据文字自行猜测，不要在纯器乐段随机张嘴。

主角在快速舞蹈时仍保持自然呼吸、面部肌肉运动和稳定身份。表情变化需要与音乐能量一致：

前半段俏皮、自信；
14.02秒后变得梦幻、克制；
17.78秒重新充满力量；
21.07秒进入主打歌级舞台状态；
24.82秒后变得冷静、带恶作剧感。

【硬性限制】

不得改变@音频1的速度、结构或长度。
不得加入新的背景音乐、对白或无关人声。
音效只能作为非常轻微的视觉反馈，不能覆盖原曲。
主角从第一帧到最后一帧必须保持同一张脸。
不得生成主角克隆体或第二名主唱。
伴舞最多6名，面孔必须互不相同。
禁止人物融合、额外肢体、畸形手指、脚底漂移、错误倒影、服装突变和随机换景。
禁止乱码文字、品牌、商标、字幕和水印。
```

[<img src="https://media.goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop/poster.jpg" width="600" alt="单人 K-POP MV · Y2K 糖果世界逐秒分镜">](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop)

**作者:** 卡尔 | **来源:** [原帖](https://x.com/aiwarts/status/2085736621685764503) | **发布:** 2026-08-07 | **热度:** 87

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop)**

### Cyberpunk Holographic Dance Performance

> A complex video prompt for a rhythmic hand-and-body dance in a modern room, featuring interactive holographic geometric frames and seamless transitions between reality and a neon cyberpunk world.

```
Setting: A cozy modern indoor room with warm ambient lighting, stylish wall posters, a hanging pendant lamp, and contemporary furniture, filmed with a cinematic handheld camera look.

Subject: A young woman with long dark hair wearing a gray oversized hooded jacket performs a smooth, rhythmic choreographed hand-and-body dance directly in front of the camera. Her movements are expressive, precise, and naturally synchronized with the visual effects.

Key Visual Effects:

Holographic Framing & Transitions: As she moves her hands to create triangles, rectangles, circles, and other geometric frames around her face and body, glowing holographic outlines appear in the air. Each frame activates a different visual world inside it, reacting instantly to her hand movements.

Futuristic Cyberpunk Style: The first frames reveal a futuristic digital version of the woman with glowing neon accents, subtle facial tracking, holographic particles, and a high-tech cyberpunk city environment.

Neon Transformation: As the dance progresses, the visuals evolve into a bold futuristic superhero-inspired aesthetic with luminous clothing details, glowing energy effects, neon skyscrapers, rain reflections, and animated light trails surrounding her digital counterpart.

The holographic worlds continuously morph, rotate, and expand with every gesture. Digital particles flow between the real and virtual environments, creating seamless transitions where parts of the futuristic world briefly appear in the real room before dissolving back into reality.

Ending: The final geometric frame closes around her face, the holographic effects rapidly fade away, and everything smoothly returns to the original cozy room, leaving only subtle glowing particles as she finishes her final pose.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087385900460478464/img/-6oNpNeyMy3ll0cm.jpg" width="600" alt="Cyberpunk Holographic Dance Performance">](https://goodcase.ai/cases/cyberpunk-holographic-dance-performance)

**作者:** Aqsa | **来源:** [原帖](https://x.com/i/status/2087386090315616601) | **发布:** 2026-08-12 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/cyberpunk-holographic-dance-performance)**

### 过山车假发闹剧：冻结与倒放的第二次演练

> 同一个作者对时间冻结手法的第二次演练：假发被风吹飞、冻结、再精确倒放回起飞前一瞬间，用假发这个更轻更失控的道具取代咖啡液体，还加了一个原创的口香糖收尾动作，证明这套冻结倒放骨架能换着物理材质反复复用。

```
Photorealistic cinematic daytime amusement park roller coaster, bright hard sunlight, strong wind, realistic motion blur on tracks and background, subtle handheld camera energy, rich skin detail, heavy natural film grain.

0-5s: [Medium Shot] A young woman in her early 20s sits in the front seat of a moving roller coaster car, calm and slightly bored, hair whipping in the wind. Beside her sits a middle-aged man wearing what looks like a normal full head of hair. Behind them, another car with a woman is visible. The coaster drops and banks hard.

5-9s: [Dynamic Tracking] The force of the turn rips the man's wig free. It peels off his bald head in a chaotic upward arc, spinning and flying backward through the air. The wig lands messily on the head of the woman in the car behind. Everyone's faces freeze in pure shock and confusion at the peak of the chaos. Time locks completely. Only the young woman in the front keeps moving.

9-15s: [Slow Orbital + Detail] Camera slowly orbits the frozen cars. The wig hangs mid-air in a twisted shape with individual hairs suspended. The bald man's scalp is fully exposed, mouth open. The woman behind is frozen mid-scream with the wig draped over her face. The young woman looks sideways, rolls her eyes and mouths "joder, otra vez". She reaches into her pocket, pulls out a stick of chewing gum, unwraps it and calmly puts it in her mouth, starting to chew while the entire frozen scene (except her) begins a precise reverse.

15-20s: [Medium Close-up] The rewind is controlled and elegant: the wig lifts off the woman behind, flies backward through the air in reverse, and returns exactly to the moment it is only beginning to peel off the bald man's head. Time freezes again at that precise instant — the front edge of the wig just lifting, a few strands already loose.

20-26s: [Tight Medium] Still frozen for everyone else, the young woman takes the chewed gum out of her mouth, reaches over and firmly presses it onto the center of the bald man's scalp, right under the lifting wig. With the same hand she smooths and presses the wig back down into perfect place, locking it with the gum. She sits back, looks straight ahead with a tiny private smile, completely unbothered.

26-30s: [Medium Shot] Time suddenly resumes at full real-time speed. The coaster continues its drop. The man touches his head, feels the wig still firmly in place, looks confused for a second, then breaks into a relieved, happy smile. The young woman stares forward, already chewing a new piece of gum, expression of quiet satisfaction.

Photorealistic, ultra-detailed wind and hair physics, perfect motion blur only on moving elements, stable characters, cinematic lighting, heavy natural film grain, no artifacts, movie-level temporal coherence, high rewatch value.
```

[<img src="https://media.goodcase.ai/media/poster/youmind-rollercoaster-wig-time-freeze.jpg" width="600" alt="过山车假发闹剧：冻结与倒放的第二次演练">](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze)

**作者:** TechHalla | **来源:** [原帖](https://x.com/techhalla/status/2083585132917579834) | **发布:** 2026-08-01 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze)**

### Seedance 2.5 生成 GoPro 钓鱼到烤鱼全流程

> 作者用 Seedance 2.5 生成 30 秒胸挂 GoPro 第一人称短片，以四段硬切完成抛竿、处理鳟鱼、篝火烧烤和进食；提示词锁定参考物、镜头焦段、动作、物理、光色与现场声音。

```
SCENE CONTEXT
POV river-to-campfire sequence at a jade-green alpine river through birch/cedar forest, late-afternoon light. A trout is caught, cleaned, seasoned, grilled over an open fire, then eaten, with one sip from a glass bottle while it cooks. 30s, four continuous segments, three hard cuts, real chest-mounted action camera.

ACTIVE REFERENCES

@location1
: jade-green river, granite boulders, gravel bar, stone fire-ring, tree-stump table, birch/cedar tree line, faint peaks. 100% matches reference.

@hands1
: sun-tanned forearms, light-blond arm hair, olive sleeve rolled to elbow, braided wrist cord. Same fly rod, folding knife, wood board, wire grill basket, plain glass bottle, brown fizzy liquid, no label. 100% matches reference.

LOCATION MAP
Segment A: river foreground, tree line behind. Segments B-D: gravel bar foreground, fire-ring and stump table midground, tree line and peaks background. POV chest-to-eye height, moving only with the body. Key light low, behind camera-left.

FIRST FRAME / BLOCKING
Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel. Water fills the lower two-thirds, forest/sky the top third.

FORMAT MODE
Controlled multi-shot, three HARD CUTs, camera does not cut anywhere else:
A (0-9s) river, one continuous take. HARD CUT.
B (9-21s) board, one continuous take. HARD CUT.
C (21-27s) fire, one continuous take. HARD CUT.
D (27-30s) eating, one continuous take.

OPTICS
84° in A easing to 63° through the fight. 63° easing to 18° across B. 63° opening to 29° in C. 29° held in D. No drift within any segment.

CAMERA
Chest-height POV, moving only with body motion — forward stroke on the cast, downward tilt on the knife and grate, forward lean when hands work close. Soft highlight roll-off on bright water and hot metal.

ACTION
A: rod arcs, line whistles; tip snaps down as the trout strikes; rod pumps, reel clicking, fish surfacing closer each pump; hand closes behind the gills, lifts the fish clear, holds it still one beat as water streams off. B: boots cross the gravel, fish set on the board, knife meets scales, scrapes tail to head; one clean line opens the belly, organs lift free; fish rinses in the shallows, pink cloud drifting off; salt, pepper, herbs scatter over the flesh; fish folds into the basket, latch clacks. C: kindling catches from a breath, flame licks up; basket lowers onto the grate, skin bubbles and browns, smoke lifts. D: bottle tips up for one swallow; fork pauses a half-second at the flesh before splitting it open, steam lifting as a piece rises toward camera, one quiet exhale closing the shot.

PERFORMANCE
Hands stay continuously busy with real working tasks, never idle. Pore-level realism: vellus arm hair in the breeze, capillary flush from cold water. Movements read practiced, unhurried, one deliberate pause at the fish-lift and one at the first bite, restrained and human, never cartoonish.

PHYSICS
No floating props. Correct contact shadows under every prop, every segment. Water carries real weight and splash. Fire holds true flicker, heat-shimmer, smoke on a light breeze. Mass and inertia carry through the rod bend, the fish's thrashing and the latch.

LIGHTING
WB locked 5600K, warm low sun behind camera-left as key, cool sky fill through A-B. From C onward, ember-orange fire light adds a low rim on hands and fish alongside the same key.

COLOR GRADE
Cool jade-green river/forest in A, warm honey wood and pale gravel in B, ember-orange fire glow and seared skin in C-D. Color tied to source and surface, not a flat list.

AUDIO
Warm acoustic guitar bed under everything, mixed low, sitting quietly beneath the natural sound. Diegetic: river current and line-whistle opening A, splash and reel-drag through the fight; gravel footsteps opening B, knife-on-wood, one clean cut sound, rinse-splash, hinge-click closing it; twig-snap opening C, crackle into sizzle; glass clink and swallow opening D, fork scrape, steam hiss, one quiet chuckle closing the shot. No subtitles.

STYLE
8K photorealistic — no 3D render, no game engine, no game-cutscene aesthetic. Naturalistic master cinematography, fine film grain, true action-camera color science.

OUTPUT SETTINGS
Real-time throughout, no speed ramping, FOV holds exactly as stated per segment with no drift across any hard cut.

POSITIVE LOCKS
Same hands, sleeve and wrist cord across all four segments. Same rod, knife, board, basket and bottle, no substitutions across any cut. Same river, gravel bar and fire-ring geometry held across every segment. Fish skin and flesh stay anatomically real. Eyes stay natural — no eye glow. Contact shadows read clearly every segment. No logos, no UI, no subtitles anywhere in frame.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087189138634342400/img/-QAy09FZJ0aubg4b.jpg" width="600" alt="Seedance 2.5 生成 GoPro 钓鱼到烤鱼全流程">](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf)

**作者:** @abxxai | **来源:** [原帖](https://x.com/abxxai/status/2087189194720657649) | **发布:** 2026-08-11 | **热度:** 85

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf)**

### Classic Mustang Golden Hour Drive

> A cinematic commercial-style prompt of a woman driving a vintage Mustang through a city at sunset, featuring elegant lighting and tracking shots.

```
Cinematic 30-second video of a glamorous blonde woman driving a classic dark-green 1960s Ford Mustang coupe through a tree-lined city avenue at golden hour. She wears a patterned silk headscarf, large brown sunglasses, a brown blazer, and large statement rings (one yellow diamond, one emerald).

Stylish slow-motion tracking shots of the car speeding past buildings and traffic. Close-up of her focused face, sunglasses catching the golden light. Close-up of her hands on the wooden steering wheel, rings glinting. Rear-view mirror reflection of her eyes. Her jeweled hand resting on the car door, wind catching a loose strand of hair from the headscarf.

A red traffic light glowing as the Mustang idles, engine humming, heat shimmer off the hood. A motorcycle with a passenger weaves through traffic beside her. Wide low-angle shot of the Mustang's grille and headlights as it accelerates past camera. A bearded man in a black beanie stands on the sidewalk, watching the Mustang drive away into the sunlit street, his gaze lingering.

New scenes: A brief shot of pedestrians and café awnings blurring past in the background bokeh. An aerial/drone-style shot pulling back to reveal the full tree-lined avenue as the Mustang weaves gently between light and shadow from the trees. A final slow-motion hero shot — the Mustang turning a corner into direct sunset flare, silhouette and lens flare dominating the frame, her profile briefly lit gold before the light overtakes the frame.

Warm sunset lighting, lens flares, motion blur, elegant and mysterious atmosphere, high-end commercial style, anamorphic lens feel, shallow depth of field, watermark-free.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2085276478196133888/img/nEO2c44PCIEGrBjl.jpg" width="600" alt="Classic Mustang Golden Hour Drive">](https://goodcase.ai/cases/classic-mustang-golden-hour-drive)

**作者:** Sharon Riley | **来源:** [原帖](https://x.com/i/status/2085277106960007654) | **发布:** 2026-08-06 | **热度:** 83

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/classic-mustang-golden-hour-drive)**

### Bladesmith Competition Reality TV Video

> A realistic reality TV style video prompt showing a bladesmith testing a forged machete against ceramic gnomes with dynamic impact physics and documentary camera work.

```
Reality TV bladesmith competition testing segment, multi-camera documentary production, bright industrial workshop lighting, sharp HD broadcast look, practical forge practicals, natural handheld shake on action cams, clean documentary texture, no cinematic film look.

0-4s: [Medium Two-Shot] Martial arts master of clear Asian ancestry in black tactical shirt stands facing the young female bladesmith in her early 20s (work apron, focused). He holds her forged machete, turns the blade once under the lights. Looks her in the eye: “Are you ready?” She answers firmly “Yes.” Quick cut to her determined face, then to three classic ceramic garden gnomes lined up on sturdy stands behind them.

4-7s: [Low-Angle Tracking + Rapid Cuts] Master steps in, raises the machete. Hard cut to side angle as he delivers a powerful overhead chop into the first gnome. Impact explodes in slow motion: ceramic shatters into sharp fragments, paint chips and dust fly outward. Time locks at peak penetration. Camera orbits the frozen blade buried in the broken gnome for one second. Quick insert ECU of the edge biting through the ceramic body.

7-11s: [Dynamic Side Tracking] Action resumes. Master yanks the machete free, immediately follows with a heavy diagonal slash across the second gnome. Slow-motion again: the figure tears apart sideways, large colored pieces and shards scatter. Freeze at maximum destruction. Two rapid cuts: one over-shoulder from behind the master, one low angle under the flying fragments. Orbit holds for half a second on the locked impact.

11-15s: [Handheld Close Action] Third strike — short, vicious downward chop into the third gnome. Slow-mo impact, the ceramic erupts into dozens of pieces, hat and beard flying. Full freeze. Camera pushes in and circles the frozen chaos for one beat. Quick insert of the master’s focused face mid-swing, then back to the locked blade.

15-19s: [Series of Fast Cuts] Time resumes. Master pulls the machete out, turns it under the light. Tight ECU tracks along the edge: a few small nicks and rolled spots visible. Cut to his fingers testing the edge. Cut to the ruined garden gnomes still shedding fragments. Cut to the young woman’s tense expression as she watches.

19-24s: [Medium Close-Up] Master lowers the blade, looks straight at her. Calm, professional delivery: “There are a couple of nicks on the edge… but your weapon, ma’am… it kills.” Hard cut to her face — a small, controlled smile of pride breaks through.

24-28s: [Final ECU Montage] Extreme close-up of the nicked but still lethal edge catching the light. Cut to the shattered remains of the garden gnomes. Final frame holds on the young bladesmith’s quiet satisfaction as the master nods once.

Realistic TV broadcast quality, detailed ceramic shatter physics, sharp edge detail, natural motion blur only on moving elements, stable characters, coherent impact timing, no artifacts, high rewatch value.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2084023051859972096/img/50lwnvofxAum3BZm.jpg" width="600" alt="Bladesmith Competition Reality TV Video">](https://goodcase.ai/cases/bladesmith-competition-reality-tv-video)

**作者:** TechHalla | **来源:** [原帖](https://x.com/i/status/2084112771533189499) | **发布:** 2026-08-03 | **热度:** 83

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/bladesmith-competition-reality-tv-video)**

### Underwater Animal Orchestra

> A creative cinematic prompt for Seedance 2.5 depicting an orchestra of sea animals like octopuses and dolphins performing deep underwater.

```
An orchestra, but 3,000 feet underwater. Octopuses on piano, squid on strings, dolphins singing opera.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087111849007329280/img/yMfHGsJfbz3lxENB.jpg" width="600" alt="Underwater Animal Orchestra">](https://goodcase.ai/cases/underwater-animal-orchestra)

**作者:** Maria | **来源:** [原帖](https://x.com/i/status/2087112692809060493) | **发布:** 2026-08-11 | **热度:** 81

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/underwater-animal-orchestra)**

### Luxury UGC Fashion Creator Review

> A detailed production prompt for creating an ultra-realistic luxury brand review video, focusing on consistent character appearance and product handling in a premium lifestyle setting.

```
Use the uploaded reference image as the exact character reference. Preserve her facial identity, hairstyle, eye color, makeup, skin tone, body proportions, white sleeveless fitted top, light blue wide-leg jeans, pearl choker, rings, and bracelets consistently throughout the video. Use the uploaded sunglasses, retail box, and leather carrying case as locked product references. Maintain perfect product consistency, including the frame shape, lenses, hinges, colors, materials, and proportions.

Create an ultra-realistic UGC luxury creator review filmed inside a modern luxury bedroom with warm golden-hour sunlight, soft natural shadows, and a premium lifestyle aesthetic. The camera feels like a handheld smartphone with subtle natural movement while maintaining cinematic commercial quality.

The video begins with the woman sitting on the bed beside the retail box and leather case. Smiling at the camera, she says, "I genuinely wasn't expecting to love these this much." She picks up the box, opens it naturally, reveals the leather case, then slowly removes the sunglasses while continuing, "The packaging already feels incredibly premium."

She rotates the sunglasses slowly in front of the camera, showing the frame, hinges, and lenses as natural reflections glide across the surface. She smiles and says, "The finish feels amazing, and they're incredibly lightweight."

She puts on the sunglasses, stands up, and walks toward a large full-length mirror. Looking at her reflection, she adjusts the frame naturally and says, "Honestly... they look so good, and they're really comfortable on the eyes, even in bright sunlight."

She turns slightly left and right so the sunglasses catch the sunlight from different angles before removing them with a smile. Walking back to the bed, she places the sunglasses beside the leather case and retail box, then picks them up one last time and holds them beside her face.

Looking directly into the camera, she smiles warmly and says, "Definitely one of my favorite accessories this year." The camera slowly pushes in on the sunglasses before fading out.

Ultra-realistic UGC fashion content, authentic creator review, cinematic handheld smartphone movement, luxury bedroom, macro product cinematography, realistic reflections, detailed frame textures, expressive facial animation, perfect lip sync, shallow depth of field, premium color grading, 4K HDR, 16:9, no subtitles, no logos, no watermarks, no on-screen text on it
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2086286294611865600/img/ahXKrH4Jx_Olt_xU.jpg" width="600" alt="Luxury UGC Fashion Creator Review">](https://goodcase.ai/cases/luxury-ugc-fashion-creator-review)

**作者:** Synthia | **来源:** [原帖](https://x.com/i/status/2086286356201066501) | **发布:** 2026-08-09 | **热度:** 80

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/luxury-ugc-fashion-creator-review)**

### 电影感湿货市场洪水逃生

> 一个高度精细的电影级动作提示词，描绘了一名女性在暴雨中穿过被洪水淹没的亚洲湿货市场的生存场景。

```
Create a highly cinematic, realistic action sequence inside a crowded traditional Asian wet market during heavy rain and flooding. A young Asian woman with long dark wet hair, wearing a pink waterproof rain suit and black rubber boots, runs rapidly through the narrow market aisles while trying to escape from a massive rushing wave of water behind her.

The market is packed with seafood and vegetable stalls, plastic crates, fish tanks, metal counters, hanging tarps, fluorescent ceiling lights, vendors and crowds. The floor is completely flooded with ankle-to-knee-deep dirty rainwater, creating strong reflections and splashes everywhere. Water violently rushes through the market, knocking over crates and flooding the stalls.

Start with a close-up tracking shot of the frightened woman looking back over her shoulder while running. Follow her with a fast handheld camera as she runs through the narrow aisle. Use dynamic low-angle shots close to the water, capturing her boots hitting the flooded floor and creating dramatic splashes. Show water crashing through the market behind her, people running in panic, overturned crates floating in the water, and objects being swept away.

Use realistic physics, natural human movement, detailed wet clothing, wet hair sticking to her face, realistic water droplets, splashes, reflections and motion blur. The camera should move dynamically with fast tracking shots, low-angle shots, side tracking shots and occasional wide shots revealing the scale of the flooding.

At one point, show the woman jumping over obstacles and running across a market counter/raised surface while the floodwater continues rushing behind her. Keep her appearance, hairstyle, pink outfit and facial features consistent throughout the entire sequence.

Dark cinematic atmosphere, overcast rainy lighting, cool blue-gray tones mixed with warm fluorescent market lights, dramatic contrast, realistic skin texture, photorealistic environment, volumetric lighting, atmospheric mist, cinematic depth of field, subtle film grain, high-detail textures, realistic reflections and physically accurate water simulation.

The sequence should feel like a high-budget survival/action movie, extremely immersive and intense, with realistic camera shake and fast-paced movement.

Add large cinematic white brush-stroke typography reading “RUN” briefly across the center of the screen during the action sequence.

Photorealistic, ultra-detailed, cinematic Hollywood-style action scene, realistic physics, natural motion, 4K film quality, anamorphic lens look, dynamic composition, dramatic pacing, no cartoon look, no CGI appearance, no distorted anatomy, no extra fingers, no duplicated people, no face changes.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2091035801874481152/img/asVoA-za2GddIEMA.jpg" width="600" alt="电影感湿货市场洪水逃生">](https://goodcase.ai/cases/case-198b3f3748b3)

**作者:** Elisia | **来源:** [原帖](https://x.com/i/status/2091036019076272229) | **发布:** 2026-08-22 | **热度:** 77

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/case-198b3f3748b3)**

### 手工烘焙坊电影感商业广告

> 一份为高端烘焙坊定制的 30 秒商业广告提示词，聚焦于糕点制作过程与产品展示，呈现奢华的美学质感。

```
follow the storyboard @material:149015 A 30-second cinematic spec commercial / film-style advertisement for a premium artisan bakery brand. High-end food-commercial aesthetic, luxurious and sensory, shot like a short film.

Soft, warm, high-key kitchen lighting with gentle highlights on stainless steel and glossy glaze. Shallow depth of field, slow elegant camera moves, occasional slow-motion, rich color grading (soft pinks, golden dough, deep raspberry red). Ultra-clean, appetizing, almost tactile.

0–6s  
Medium shot of a striking young female pastry chef in a pale-pink chef’s jacket, matching pink toque, and pink gloves. She stands in a sleek, modern commercial kitchen. She looks down with quiet concentration and cracks a fresh egg into a stainless-steel bowl of flour. Subtle steam and flour dust in the air.

6–11s  
Tight close-up of the vivid yolk and white pouring into the flour well. Cut to the KitchenAid mixer head descending and beginning to knead. Macro of pale, elastic dough stretching, folding, and becoming silky and glossy.

11–16s  
Overhead shot of twelve perfectly formed raw ring donuts on a parchment-lined tray. Gloved hands lift the tray with precision. The camera follows as they are carried toward the fryer.

16–22s  
Donuts lowered into bubbling golden oil. Slow-motion close-up of four donuts frying, edges turning amber. A single donut is lifted on a metal skewer, oil dripping in slow motion. The full basket rises, steam rising, donuts now perfectly golden.

22–26s  
A warm donut is dipped halfway into a bowl of thick, vibrant raspberry-red glaze. Extreme close-up of the glossy glaze slowly cascading down the sides. Fine white sugar crystals rain onto the wet glaze, catching the light.

26–30s  
Product reveal. Gloved hands place the last donut into an open kraft bakery box. The camera slowly pulls back and tilts up as the lid is closed, revealing the brand name **MAISON ROSE** in elegant, minimal serif lettering on the lid, with a small rose emblem. The box sits perfectly centered, six glazed donuts visible through a brief moment before the lid settles. Soft light catches the logo. Hold on the branded box as the hero product shot.

Elegant, silent except for implied kitchen sounds and a refined, understated score. Premium, filmic, commercial-grade finish.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2090777348551647233/img/5T_QU3mPYaUmHy3L.jpg" width="600" alt="手工烘焙坊电影感商业广告">](https://goodcase.ai/cases/case-f62d402ccdf6)

**作者:** Aaliya | **来源:** [原帖](https://x.com/i/status/2090780603872624826) | **发布:** 2026-08-21 | **热度:** 77

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/case-f62d402ccdf6)**

### First-Person POV Dragon Rider Cinematic

> An epic, photorealistic 8K sequence of riding a crimson-obsidian dragon over emerald cliffs and diving into the ocean with cinematic sound design.

```
Create a 30-second vertical 9:16, 24fps, 8K-quality photorealistic live-action fantasy sequence from a first-person rider POV. A massive original obsidian-crimson dragon with individually detailed scales, subtle dark mottling, molten-gold eyes, volcanic-black swept-back horns, blade-like dorsal fins, burgundy-red translucent wings and faint ember-like fissures across its body. Rider wears black leather gloves, dark-green sleeves and weathered leather bracers, holding heavy chain reins from a worn brown studded saddle.

Begin with the dragon calmly breathing on a wet emerald coastal cliff; it slowly turns toward camera and the rider gently pets its neck. Suddenly it lowers its body, launches across the grass and leaps from the cliff. Dive steeply toward the grey-green ocean, deploy huge wings with realistic membrane movement, then skim just above the water with spray hitting the lens. Perform a dramatic high-speed bank around a sea stack, then plunge directly underwater. Brief dark-teal underwater silence with bubbles and faint crimson glow, followed by a powerful eruption through the ocean. Finish with a calm glide above foggy water as the dragon slowly turns and looks toward the rider.

Use physically accurate anatomy, weight, gravity, wing aerodynamics, water physics, scale deformation, wind and environmental interaction. Natural rider-mounted camera movement, realistic motion blur, lens droplets, focus breathing, subtle handheld vibration, cinematic depth of field, soft overcast lighting, HDR, restrained film grain and natural cinematic color grading.

Audio: atmospheric drone → intimate cello → rising orchestral tension → massive launch/flight score → intense percussion during the bank → muffled underwater audio → epic orchestral return during emergence → soft cello/piano ending. Layer detailed ASMR/SFX: dragon breathing, scales, leather, reins, claws scraping soil, wind, wingbeats, water spray, bubbles, ocean impact and a deep natural dragon roar.

Make it indistinguishable from expensive real live-action cinema. No AI look, cartoon, anime, game CGI, plastic textures, fake physics, neon glow, oversaturation, distorted anatomy, extra limbs, text or watermark.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087007766863106048/img/1SThbKv79pdWO1xo.jpg" width="600" alt="First-Person POV Dragon Rider Cinematic">](https://goodcase.ai/cases/first-person-pov-dragon-rider-cinematic)

**作者:** Nexora | **来源:** [原帖](https://x.com/i/status/2087007818721423855) | **发布:** 2026-08-11 | **热度:** 77

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/first-person-pov-dragon-rider-cinematic)**

### Sci-Fi Mystery Message from 2100

> A suspenseful sci-fi short film prompt set in a futuristic, empty Dubai involving a mysterious message from the future and a massive unidentified object.

```
Create a 15-second photorealistic cinematic sci-fi mystery short film.

A young man in his late 20s is alone in a modern apartment in Dubai at night. His smartphone suddenly receives a mysterious video message labeled "MESSAGE FROM 2100." He opens it and sees an older version of himself, around 70 years old, sitting in a futuristic room. The older man looks terrified and urgently says: "Whatever you do... don't go outside tomorrow."

The video suddenly glitches and cuts to black.

The next morning, the young man cautiously walks toward his apartment window and looks outside. Reveal a breathtaking futuristic Dubai in the year 2100: enormous advanced skyscrapers, futuristic transportation, flying vehicles, glowing architecture and a transformed Burj Khalifa.

But the entire city is completely empty. No people. No cars. No activity.

The man slowly looks up toward the sky.

The clouds suddenly separate, revealing an enormous mysterious unidentified object hovering above the futuristic city, so massive that it dominates the entire skyline.

End on a dramatic wide shot of the tiny man standing beneath the gigantic object.

Style: ultra-photorealistic, cinematic sci-fi thriller, realistic human expressions, believable futuristic technology, realistic Dubai architecture, dramatic lighting, atmospheric haze, volumetric clouds, subtle film grain, shallow depth of field, smooth cinematic camera movement, realistic scale, suspenseful pacing, premium Hollywood VFX, highly immersive.

No cartoon style, no subtitles, no logos, no watermark.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087921509495177216/img/BuVW4i6e-AOc7XaC.jpg" width="600" alt="Sci-Fi Mystery Message from 2100">](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100)

**作者:** Nafis Ahmed | **来源:** [原帖](https://x.com/i/status/2087921744166420808) | **发布:** 2026-08-13 | **热度:** 74

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100)**

### Seedance 2.5 深夜厨房手机实录做饭

> 固定机位手机实拍风：深夜厨房做饭 30 秒，自动对焦游移、小失误与收尾独白，分时段脚本精确到秒，全程无剪辑感。

```
FORMAT: 30-second horizontal 16:9 realistic smartphone video.
Create an authentic, imperfect everyday late-night kitchen phone recording, as if a friend casually left a phone recording on the counter. Use a standard smartphone camera with mild autofocus hunting, subtle exposure shifts, natural motion blur, compression artifacts, and slightly uneven handheld framing. No polished commercial look.
00–05s — WALKING IN
The character walks into a quiet home kitchen carrying a small grocery bag. They set it on the counter, sigh quietly, and pull out a few simple ingredients.
They glance at the phone for a second before turning back toward the counter.
Camera remains several feet away at counter height, as if casually recording from a nearby surface.
05–10s — GETTING STARTED
They wash their hands, turn on the kitchen light, and begin preparing the ingredients.
A cutting board shifts slightly against the counter. They pause to move it into a better position.
The character looks tired but relaxed, occasionally brushing their hair away from their forehead.
10–15s — COOKING
They place a pan on the stove and begin cooking.
Steam gradually becomes visible. The phone autofocus briefly shifts between the character and the foreground pan before settling again.
They stir the food, taste a tiny amount, think for a moment, then add a little more seasoning.
No readable labels or packaging should be visible.
15–20s — SMALL MISTAKE
The character gets distracted for a moment and notices the food starting to cook more quickly than expected.
They immediately lower the heat and give a small amused shake of their head.
They quietly mutter something like:
“Yeah… almost forgot about that.”
The delivery should feel spontaneous and understated.
20–25s — FINISHING
They finish preparing the food, turn off the stove, and carefully transfer the meal onto a plate.
They wipe a small splash from the counter with a paper towel.
Natural movements only—nothing overly choreographed.
25–30s — QUIET ENDING
They sit at the kitchen table with the finished meal.
They take one bite, pause, and give a small satisfied smile.
They look toward the phone and quietly say:
“Honestly… not bad.”
They pick up the fork again and continue eating as the camera keeps recording for another moment before the clip naturally ends.
AUDIO
Natural kitchen ambience only: refrigerator hum, ventilation, running water, utensil sounds, pan sizzling, footsteps, clothing movement, cupboard and drawer sounds, plate and fork noises, and subtle room ambience.
No music.
Dialogue should sound spontaneous and conversational, with natural pauses and imperfect delivery.
VISUAL REALISM
Authentic smartphone footage, ordinary warm household lighting, realistic skin texture, natural shadows, mild phone-camera sharpening, subtle compression noise, imperfect exposure, slight autofocus changes, believable reflections, natural steam, realistic food textures, and ordinary kitchen imperfections.
STRICTLY AVOID: cinematic color grading, beauty filters, artificial skin smoothing, dramatic slow motion, music, subtitles, captions, logos, readable text, perfect lighting, excessive camera shake, exaggerated acting, unrealistic food or steam, duplicated objects, warped hands, unnatural facial expressions, scene cuts, time jumps, or skipping the described actions.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087543859467456512/img/s0REljfIKb1hyx7H.jpg" width="600" alt="Seedance 2.5 深夜厨房手机实录做饭">](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)

**作者:** Ray | **来源:** [原帖](https://x.com/AIWithRay/status/2087544594384773346) | **发布:** 2026-08-12 | **热度:** 73

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)**

### 富有情感的日语对话动画

> 一个针对 Seedance 2.5 的电影级视频提示词，专注于细腻的面部表情和真实的日语对话，旨在捕捉微妙的情感瞬间。

```
12-15秒: 眉が緩み、口角が小さく抑えたまま上がる。セリフ言語: 日本語。<Woman> は軽く、ほとんど息のような声で日本語で言う: {……あ、なんで謝るの}。終了状態: かすかに微笑んだまま、彼を見ている。
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088552761390743552/img/zIuAJe6FEcaNeI1R.jpg" width="600" alt="富有情感的日语对话动画">](https://goodcase.ai/cases/case-1f8136a9893a)

**作者:** さきすた AI artist | **来源:** [原帖](https://x.com/i/status/2088559545174175836) | **发布:** 2026-08-15 | **热度:** 72

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/case-1f8136a9893a)**

### 90s Diner Time Freeze Effect

> A cinematic video prompt for Seedance 2.5 featuring a high-physics diner collision where time freezes, allowing a character to interact with suspended objects before resuming in real-time.

```
Photorealistic cinematic 1990s American diner, red vinyl booths, neon signs, chrome details, checkerboard floor, soft natural window light mixed with warm practicals, subtle handheld texture, rich lived-in period detail, heavy film grain. Shot with modern realism and precise temporal control.

Use the provided reference image as the exact character lock for the bald bearded man in black sunglasses and dark hoodie. Maintain perfect facial structure, beard, head shape, skin texture and clothing consistency at all times.

0-5s: [Medium Wide] The bald man sits in a red vinyl booth. He stands up, turns, and collides hard into a waitress carrying a full breakfast tray (eggs, bacon, toast, coffee pot). Impact is sudden and physical.

5-12s: [Dynamic Tracking into Super Slow-Motion] Collision detonates. Tray, plate, eggs, bacon strips and coffee pot explode upward. Coffee erupts into long liquid ribbons and perfect suspended droplets. Camera orbits smoothly around the impact. Time locks completely at the peak of the spill. Every face freezes in pure shock. Only the bald man remains free to move. He freezes for one beat with a clear “I fucked up” expression, then quickly grabs two bacon strips and a fried egg from the floating debris.

12-22s: [Tracking Shot] Still inside the frozen diner, he walks toward the exit door while taking deliberate bites of bacon then egg. All patrons, waitress and flying food stay perfectly suspended in mid-air.

22-27s: [Medium Shot] Just as he reaches the door and is about to push it open, time snaps back to normal speed. Everything that was floating crashes down at once — plates, eggs, bacon, tray and coffee slam onto the floor with a loud chaotic impact. The waitress and patrons react in sudden real-time shock.

27-30s: [Medium Close-Up] He pauses, turns slightly, raises his eyebrows and gives a small casual “it is what it is” shrug with a quiet half-smile of acceptance, still holding the remaining food.

Photorealistic, ultra-detailed fluid and object physics, perfect volume and surface tension on liquids, sharp motion blur only on moving elements, stable character, cinematic lighting, heavy natural film grain, no artifacts, movie-level temporal coherence, high rewatch value.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2085168932906807296/img/_0Lv1fRwmGyfGVnt.jpg" width="600" alt="90s Diner Time Freeze Effect">](https://goodcase.ai/cases/90s-diner-time-freeze-effect)

**作者:** TechHalla | **来源:** [原帖](https://x.com/i/status/2085200942060691807) | **发布:** 2026-08-06 | **热度:** 68

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/90s-diner-time-freeze-effect)**

### Seedance 2.5 欧洲老城清晨旅拍 vlog

> 15 秒五镜头旅拍：自拍行走、街景平移、进店 POV 到咖啡收尾，主打全片人物一致性与真实手持质感。

```
Create a 15-second ultra-photorealistic travel vlog featuring the SAME young European woman throughout the entire video. She has natural skin texture, subtle facial imperfections, realistic hair movement, authentic body proportions, and completely natural expressions. The video must look like genuine footage recorded by a real travel creator, NOT AI-generated or cinematic CGI.
SHOT 1 — 0–3 seconds:
Selfie-style handheld footage. The woman walks naturally down a beautiful European old-town street in the morning. She holds a small vlog camera at arm's length, looks directly into the lens and gives a subtle genuine smile. Natural walking bounce, slight handheld shake, realistic breathing and hair movement. Background includes pedestrians casually walking, parked bicycles, small cafés, textured historic buildings and soft morning sunlight.
SHOT 2 — 3–6 seconds:
She turns the camera away from herself toward the street. A natural handheld pan reveals detailed European architecture, outdoor café tables, people having coffee, bicycles passing and a small bakery. The camera movement is imperfect and human, with slight exposure adjustment as it moves from shadow into sunlight.
SHOT 3 — 6–9 seconds:
Cut naturally back to selfie footage. She continues walking and briefly says something casually to the camera with natural lip movement and relaxed facial expressions. A light breeze moves a few strands of her hair. People pass behind her naturally without looking at the camera. Realistic depth, authentic street ambience and subtle camera shake.
SHOT 4 — 9–12 seconds:
POV-style footage from her camera as she enters a small local café. The camera moves naturally through the doorway toward a wooden table with a freshly prepared coffee and a small pastry. Realistic reflections on glass, steam rising subtly from the coffee, natural indoor lighting, background conversations and realistic movement.
SHOT 5 — 12–15 seconds:
She sits outside the café and turns the camera back toward herself. She takes a small sip of coffee, looks into the lens and smiles naturally. The camera remains handheld and slightly imperfect. Background pedestrians, bicycles and café activity continue moving naturally. End with a subtle realistic focus shift from her face toward the street behind her.
VISUAL REQUIREMENTS:
Absolute photorealism, real-world physics, realistic human motion, authentic handheld smartphone/vlog camera behavior, natural skin pores and texture, realistic eyes and hair, physically accurate lighting and shadows, natural exposure changes, realistic reflections, detailed European environment, believable background pedestrians, consistent face and clothing across every shot.
Avoid overly smooth camera movements, artificial beauty filters, plastic skin, exaggerated expressions, perfect symmetry, CGI appearance, dramatic movie-style transitions, unrealistic background motion, floating objects, warped hands, distorted faces or AI-looking details.
The final result should feel like an actual 15-second travel vlog filmed spontaneously by a real European woman on a high-quality handheld camera.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087736954947600384/img/8cPcwQrg4OZP-0ir.jpg" width="600" alt="Seedance 2.5 欧洲老城清晨旅拍 vlog">](https://goodcase.ai/cases/seedance-2-5-vlog-eae9734adb51)

**作者:** Sarah | **来源:** [原帖](https://x.com/SyntheSarah/status/2087737206459044262) | **发布:** 2026-08-13 | **热度:** 66

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-vlog-eae9734adb51)**

### 东京手机美食 Vlog

> 一份高度详细的提示词，用于创作具有照片级真实感的东京美食 Vlog，旨在模仿手机拍摄的视觉效果与质感，包含自然的掌镜晃动和地道的街区细节。

```
Ultra-realistic smartphone food vlog set in a charming neighborhood in Tokyo, Japan. The entire video must look like it was genuinely recorded on a modern flagship smartphone by a real female creator, not like a cinematic production or AI-generated video. 0–5 seconds: A young Japanese woman walks through a narrow Tokyo side street in the early evening, holding her smartphone at arm’s length and casually talking to the camera. Traditional Japanese shopfronts, vending machines, bicycles, small signs, utility wires, pedestrians and warm storefront lights create an authentic neighborhood atmosphere. Natural handheld movement and slight framing imperfections. 5–10 seconds: She notices a tiny hidden dessert café and turns the camera toward its entrance with an excited reaction. She walks inside while continuing the vlog. The camera naturally adjusts exposure from the bright street to the warmer interior. 10–16 seconds: Show the staff preparing a fresh strawberry cream dessert. Realistic strawberries, whipped cream, soft cake layers and small details of the preparation. The creator moves the phone closer for a natural food close-up while autofocus subtly shifts between the dessert and her hand. 16–22 seconds: She receives the dessert, holds it directly toward the phone camera, then takes a spoonful and tastes it. Her reaction should be spontaneous and believable, with subtle facial expressions rather than exaggerated acting. 22–27 seconds: She smiles, takes another small bite and turns the camera slightly to show the cozy café interior, Japanese customers naturally sitting in the background and warm practical lighting. 27–30 seconds: She walks back outside onto the Japanese street, looks directly into the phone camera and naturally says, “Okay, this place was actually so good!” She smiles and ends the recording casually. Authentic Japanese environment, realistic human behavior, natural walking physics, real-looking food textures, accurate skin texture, natural hair movement, realistic reflections, imperfect smartphone framing, subtle autofocus hunting, automatic exposure adjustments, slight handheld shake, natural motion blur, realistic low-light smartphone noise, true-to-life colors, detailed background activity, genuine vlog energy, high-resolution smartphone footage, photorealistic, documentary realism, no cinematic camera moves, no drone shots, no artificial slow motion, no CGI appearance, no text, no subtitles.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088604954567335936/img/KNGtTcHTSoKt3AZ3.jpg" width="600" alt="东京手机美食 Vlog">](https://goodcase.ai/cases/vlog-b7d2a3d9d7f2)

**作者:** 𝗦𝗮𝗻𝗶𝗮 | **来源:** [原帖](https://x.com/i/status/2088605003112235033) | **发布:** 2026-08-15 | **热度:** 65

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/vlog-b7d2a3d9d7f2)**

### 韩国社区夏季摄像机录像

> 旨在唤起韩国普通住宅区夏日下午那种怀旧、亲密家庭录像感的提示词。

```
MAIN SUBJECT
Young Korean woman in her early 20s, naturally attractive, realistic skin texture, minimal makeup, relaxed and approachable personality. Long dark hair loosely tied into a messy side ponytail, natural facial expressions. Wearing a fitted pastel-blue short top, loose cream pajama-style pants, black sneakers, and a simple silver necklace. Maintain the same face, hairstyle, clothing, body proportions, and overall appearance throughout.

LOCATION
A quiet older Korean residential neighborhood during a warm summer afternoon. Narrow concrete lanes, low-rise homes, small gardens, bicycles, potted plants, utility poles, overhead wires, old staircases and a small neighborhood fruit stand. No tourist attractions, advertisements, recognizable brands, crowds, or commercial activity.

CAMERA / VISUAL STYLE
Raw personal footage casually recorded by a friend on an early-2000s consumer camcorder. Natural handheld shake, imperfect framing, autofocus hunting, exposure shifts, slight motion blur, faded colors, soft image detail, mild digital noise and occasional accidental zooms. No stabilization, gimbal movement, drone shots or polished commercial cinematography.

— BALCONY
She steps onto a small balcony carrying a watering can. She waters several potted plants, notices a tiny cat near the doorway and smiles. She crouches down and gently pets it before heading downstairs.

— NEIGHBORHOOD WALK
She walks through the narrow lane carrying a small reusable bag. A neighbor sitting outside calls her name. She stops, chats casually for a moment and laughs before continuing.

— FRUIT STAND
She stops at a tiny roadside fruit stand and chooses a peach. She takes a bite immediately and smiles at the camera. She wipes her hand and continues walking.

— UNEXPECTED MOMENT
A little neighborhood dog runs past and bumps into her shopping bag. She catches it before anything falls, laughs and watches the dog run away. She looks toward the camcorder with an amused expression.

00:20–00:25 — QUIET STREET
She continues walking beneath large trees. A gentle breeze moves her hair and clothes. She stops beside a low concrete wall, finishes the peach and quietly watches the street.

00:25–00:30 — FINAL MOMENT
She gets up and starts walking home. After a few steps she turns toward the camera, smiles and says, “See you tomorrow.” She turns back and continues down the lane while the camera follows shakily. The recording suddenly cuts to black.

AUDIO: Natural environmental audio only — birds, insects, footsteps, distant scooters, bicycle bells, wind through trees, neighborhood conversations, dog sounds, fruit stand sounds and subtle camera-handling noise. No music, narration or soundtrack.

FINAL FEEL: A forgotten recording of an ordinary summer afternoon — warm, intimate, nostalgic, slightly imperfect and spontaneous. No posing, exaggerated reactions o
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2092598965867012096/img/d1raKjcXQCqE-HHr.jpg" width="600" alt="韩国社区夏季摄像机录像">](https://goodcase.ai/cases/case-9034732a24fe)

**作者:** Smiling Khan | **来源:** [原帖](https://x.com/i/status/2092599045248188760) | **发布:** 2026-08-26 | **热度:** 59

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/case-9034732a24fe)**

### 韩国城市公交站偶遇

> 一个逼真的真人实拍提示词，描绘了一名男子在黄昏时分的韩国城市帮助一名女子赶上公交车的场景，画面呈现出手机拍摄的效果。

```
Photorealistic live-action Korean city scene at dusk, with exactly two adult Korean characters. Preserve Seolran and Mujin’s exact faces, hairstyles and natural body proportions from the provided character references, but dress them in realistic casual everyday clothes: Seolran in a light beige cardigan, simple white top, relaxed blue jeans and sneakers; Mujin in a dark casual jacket, plain grey T-shirt, black pants and sneakers.

Mujin is already waiting alone at a quiet city bus stop with a backpack, checking the road. A realistic city bus arrives and stops. He boards normally, finds a seat near the window, and the bus begins moving away. A few seconds later, Seolran appears in the distance running toward the bus, clearly late and trying to catch it. The bus has already started moving slowly, so she runs after it while waving toward Mujin. Mujin notices her through the window, immediately gets up, moves toward the front door and signals the driver to stop. The bus slows and the door opens again. Mujin steps down slightly, reaches his hand toward Seolran, and she grabs his hand while still catching her breath. He firmly but naturally pulls her onto the bus, without aggression or exaggerated movement. She quickly steps inside, breathless and relieved, while he gives her a small amused smile. The doors close and the bus drives away.

Use exactly 7 distinct realistic shots: 1) wide shot of Mujin waiting at the bus stop, 2) medium shot as the bus arrives and he boards, 3) interior window shot showing the bus beginning to leave, 4) long street shot revealing Seolran running after the departing bus, 5) handheld interior shot of Mujin noticing her through the window, 6) close exterior shot of Seolran reaching his hand and Mujin pulling her aboard, 7) final interior shot of both standing near the door as the bus drives through the evening city.

Make it look like genuine real-world smartphone footage: natural dusk lighting, realistic bus movement and braking, authentic street ambience, engine noise, footsteps, running sounds, breathing, fabric movement, imperfect handheld camera shake, subtle autofocus shifts, realistic motion blur, natural facial expressions and believable physical interaction. The bus must move at realistic speed and stop naturally. The hand-holding and pulling motion must have correct anatomy, realistic weight and balance. No school elements, no uniforms, no dramatic stunt movement, no slow motion, no music, no subtitles, no logos, no watermarks, no CGI, no exaggerated acting, no extra limbs, no distorted hands, no impossible physics. The entire scene should feel like an ordinary spontaneous moment captured in real life.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2091103765277634560/img/k-FVS3iMTJZ6b09I.jpg" width="600" alt="韩国城市公交站偶遇">](https://goodcase.ai/cases/case-365f2a3615b1)

**作者:** 𝗦𝗮𝗻𝗶𝗮 | **来源:** [原帖](https://x.com/i/status/2091103923440328783) | **发布:** 2026-08-22 | **热度:** 59

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/case-365f2a3615b1)**

### 16mm Analog Morning Vlog

> A highly detailed video prompt for Seedance 2.5 mimicking a handheld 16mm analog morning vlog of a woman walking her dog, focusing on realistic imperfections and film texture.

```
CAMERA: Handheld DV 16mm daily vlog footage. The video MUST begin with her holding the camera at arm's length in selfie mode while stepping outside her apartment building with her dog. The first 20–30 seconds are entirely handheld. Later she occasionally places the camera on a park bench, low stone wall, picnic table, or the ground for wider shots. Keep subtle handheld shake, drifting composition, autofocus hunting, rushed reframing, uneven zooms, exposure breathing, brief accidental face cropping, and imperfect framing throughout. The camera itself is never visible.

LOOK: Warm analog tape texture with gentle film grain, slightly softened sharpness, subtle halation around sunlight, realistic skin tones, low contrast, tiny exposure shifts, and natural motion blur. It should feel like authentic footage from someone's everyday life rather than a polished commercial.

STYLE: A relaxed morning lifestyle vlog. Quiet, cozy, and spontaneous. She occasionally laughs at her dog, pauses to look around, adjusts the leash, brushes hair away from her face, and speaks naturally in short sentences with comfortable pauses.

CHARACTER: EMMA — a beautiful white woman in her mid-20s. Long light brown hair in a messy ponytail, green eyes, minimal makeup, oversized gray hoodie, black biker shorts, white sneakers, and a small crossbody bag. She is walking a happy golden retriever.

SETTING: A peaceful suburban neighborhood on a sunny morning. Tree-lined sidewalks, quiet residential streets, birds singing, a small park with benches, green grass, and soft golden morning light. Very few people are around.

SCENES:

The vlog opens in selfie mode. Emma holds the camera while leaving her apartment building with the golden retriever excitedly pulling on the leash.
"Good morning."
She smiles.
"Someone couldn't wait."
The dog eagerly sniffs everything as they walk down the sidewalk.
She laughs quietly.
"He has to inspect every single tree."
Still holding the camera, she walks into a small neighborhood park.
The dog suddenly stops and stares at a squirrel.
"Oh... there we go."
She smiles and gently shakes her head.
She places the camera on a nearby bench for a wider angle while throwing a tennis ball.
The dog happily chases after it.
"Worth waking up early."
She picks the camera back up.
Walking slowly through the park, she looks up at the trees for a moment.
"It's actually really peaceful out here."
The dog returns with the ball but drops it halfway.
She laughs.
"Close enough."
She sits on the bench while the dog lies beside her.
She scratches behind his ears.
"I think he's happier than I am."
She stands up and continues walking.
The camera stays in selfie mode as they head toward home.
"Coffee is definitely next."
She smiles into the lens.
"See you later."
She gives a small wave and ends the recording.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2085417535650820096/img/aZuUimW67xW4-upN.jpg" width="600" alt="16mm Analog Morning Vlog">](https://goodcase.ai/cases/16mm-analog-morning-vlog)

**作者:** MAX | **来源:** [原帖](https://x.com/i/status/2085422370362110168) | **发布:** 2026-08-06 | **热度:** 59

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/16mm-analog-morning-vlog)**

### Karakoram Motorcycle Commercial

> A high-energy motorcycle commercial prompt set in the snow-covered Karakoram mountains, focusing on photorealistic tracking shots and physical consistency.

```
Create a 10-second photorealistic cinematic motorcycle commercial featuring a young 24-year-old male rider with an athletic, muscular physique, riding a Suzuki GS150SE along the Karakoram Highway in northern Pakistan at approximately 100+ km/h. The rider looks confident and energetic, wearing a premium black riding jacket with the sleeves fitted around his muscular arms, dark riding pants, gloves, riding boots, and a full-face helmet. Keep his appearance, clothing, helmet, and body proportions identical throughout the entire clip. The Suzuki GS150SE should remain accurately proportioned and visually consistent, with realistic suspension movement, wheel rotation, chain movement, engine vibration, brake components, exhaust, mirrors, and authentic motorcycle details. The highway winds dramatically through enormous snow-covered Karakoram mountains, with towering icy peaks visible in the distance. Cold mountain atmosphere, patches of snow beside the road, crisp blue sky, thin clouds, distant glaciers, and realistic high-altitude lighting. Cinematic Direction: Begin with a low front three-quarter tracking shot of the GS150SE approaching at speed. Transition into a side tracking shot showing the rider enjoying the mountain scenery while maintaining control of the motorcycle. Briefly show a helmet-level POV looking down the sweeping Karakoram Highway toward massive snow-covered peaks. Use realistic aerodynamic effects: subtle airflow flowing around the rider and motorcycle, jacket fabric reacting naturally to wind, slight suspension compression over road imperfections, realistic tire contact, and controlled motion blur. Finish with a dramatic rear three-quarter tracking shot as the motorcycle disappears along the winding highway, surrounded by enormous icy mountains. Visual style: photorealistic, premium motorcycle commercial, cinematic 4K, natural mountain lighting, realistic physics, detailed motorcycle textures, dynamic tracking camera, shallow depth of field where appropriate, subtle lens flare, realistic motion blur, immersive scale, epic Himalayan/Karakoram atmosphere. Important: No distorted motorcycle parts, no extra limbs or fingers, no changing rider appearance, no duplicated motorcycle components, no unrealistic wheel geometry, no floating motorcycle, no excessive CGI effects, and no text overlays unless specifically requested. Overall feeling: freedom, adventure, power, solitude, mountain exploration, and the thrill of riding through the Karakoram.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088599023947325440/img/F3aOT03xTvR1W03-.jpg" width="600" alt="Karakoram Motorcycle Commercial">](https://goodcase.ai/cases/karakoram-motorcycle-commercial)

**作者:** AntonioAI | **来源:** [原帖](https://x.com/i/status/2088599346908365227) | **发布:** 2026-08-15 | **热度:** 57

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/karakoram-motorcycle-commercial)**

### Seedance 2.5 日本夏日祭浴衣自拍 vlog

> 自拍视角 30 秒：浴衣少女夜逛夏日祭，买章鱼烧、玩捞物游戏、看烟花，收尾对镜头挥手告别。

```
A 30-second photorealistic smartphone travel vlog. A young Japanese woman wearing a pastel yukata explores a traditional Japanese summer festival at night. She films herself in selfie mode with natural handheld movement, realistic phone camera quality, and authentic ambient sounds. She walks through lantern-lit streets, buys fresh takoyaki and smiles after taking a bite, plays a traditional festival game and wins a small plush toy, then watches a spectacular fireworks display with the crowd, capturing her genuine excitement. She ends the vlog by waving at the camera and saying, "Thanks for coming with me. See you next time. Bye!" The video should feel natural, cinematic, and realistic with consistent appearance, smooth human motion, and authentic festival atmosphere.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087406387114782720/img/EVFnN8DOu4CPbqLX.jpg" width="600" alt="Seedance 2.5 日本夏日祭浴衣自拍 vlog">](https://goodcase.ai/cases/seedance-2-5-vlog-8056757985cc)

**作者:** Al-Shamus | **来源:** [原帖](https://x.com/im_shahid7/status/2087407192031068528) | **发布:** 2026-08-12 | **热度:** 48

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-vlog-8056757985cc)**

### Seedance 2.5 真实骑行 Vlog:运动相机+前摄+跟拍混剪 30 秒

> 30 秒竖屏真实骑行 vlog:运动相机、手机前摄、伴随车跟拍三种机位混剪,4K photorealistic、阴天柔光、皮肤汗光与毛孔、无美颜。prompt 用【风格】【时长】等中文结构化区块把机位切换和时间轴写死,是'把剪辑思维写进 prompt'的范本。

```
确实是跟真的一样一样的😄

30 秒更完整的叙事，Seedance 2.5 又将真实感提升了一个档次🎬

Seedance 2.5 prompt 👇

【风格】真实骑行 vlog（Authentic Cycling Vlog），运动相机 + 手机前摄 + 伴随车跟拍混剪，4K 真实摄影（Photorealistic），阴天柔光，皮肤有汗光与真实毛孔，无美颜无磨皮，竖屏 9:16

【时长】30秒

【场景】雨后山区盘山公路，路面湿滑泛着一层亮光，路侧金属护栏，远处山峦挂着流动的云雾，路边草木上挂着水珠

【角色】骑行者（女性，白色公路头盔，蓝色镜面骑行眼镜，深灰色短袖骑行服（胸前城市街景印花、拉链到底、领口下方夹着黑色运动相机遥控器）、酒红色骑行短裤（侧缝两道白色缝线）、粉色运动手表，黑色碳纤维公路车、黑色刀圈轮组）

【眼镜规则】只有全速骑行的镜头（镜头2、镜头5、镜头6）戴着眼镜；停车和自拍的镜头（镜头1、镜头3、镜头4、镜头7、镜头8）眼镜一律架在头盔前额上，整张脸和眼睛完全露出

【全局约束】全程同一套骑行服与头盔，不换装；汗量随时间递增，不可倒退；行进中双手必须都在车把或手机上，不出现第三只手；不出现其他骑行者抢镜

[00:00-00:04] 镜头1：低角度起步（Ground-level Low Angle）

贴地极低机位，画面下缘是湿漉漉的沥青路面。她单脚撑地停在路边，眼镜架在头盔前额，脸完全露出来，低头看了眼镜头笑了一下。

动作：她双手抬起把眼镜拉到眼睛上戴好，随后双手落回车把，脚扣"咔"地扣进踏板，曲柄转动，链条上链，前轮碾过一小片积水，水线甩向镜头两侧。

镜头随车轮向前轻微跟移，湿路面被轮胎压出一道深色湿痕。

音效：脚扣扣合的咔哒声、链条上链、轮胎压水的沙沙声。

[00:04-00:08] 镜头2：侧面伴随跟拍（Car-to-car Side Tracking）

正侧方伴随机位与她等速并行，全身入画。她压低上半身双手握下把，背部拉平，膝盖上下抽动，蓝色镜面眼镜戴在眼睛上。

背景的护栏和云雾山体在她身后横向快速拉过，形成速度线。

细节：额角渗出第一层汗，骑行服背部中缝出现一小块深色汗渍。

[00:08-00:12] 镜头3：路边停车自拍（Front Camera Selfie POV）

手机前置摄像头视角，画面轻微广角畸变。她已经停在路边单脚撑地，先用双手把眼镜推回头盔前额，露出整张脸和眼睛，再拿起手机举在斜前方。

动作：她冲镜头咧嘴笑，喘着气对镜头说了句什么，说话时肩膀随呼吸起伏，另一只手扶着车把稳住车，接着用举手机的那只手把镜头转向前方，扫过弯道和云雾山景，再转回自己脸上。

细节：额头和鼻尖有明显汗光，眼睛清晰可见，鬓角碎发被汗黏在脸上，风把耳边的碎发往后吹。画面有真实手持抖动和风噪爆音。

[00:12-00:16] 镜头4：360全景环绕（360 Action Cam / Invisible Selfie Stick）

模仿360全景运动相机效果，轻微鱼眼畸变，自拍杆被完全抹除。她仍在路边停着，双脚撑地跨在车上，眼镜架在头盔前额。镜头悬在她斜上方约一米处，围着她和车缓慢转一整圈。

画面依次转过：她的正脸和头盔顶、身后的湿路面和护栏、车尾和后轮、路侧的云雾山谷、再回到正脸。

动作：转到正脸时她抬头看镜头，笑着抬手做了个"往前走"的手势，另一只手扶着车把。

细节：手臂皮肤上有细密汗珠，手表带内侧一圈汗渍。

[00:16-00:20] 镜头5：爬坡喘息特写（Handheld Close-up / Uphill）

侧面近景，只拍她的脸和肩膀，背景是缓慢后退的山体和护栏。坡度明显，她重新戴上了眼镜，踩踏频率变慢变重。

动作：她咬着牙站起来摇车，双手死死握住车把，上半身左右摆动，嘴张开大口吸气，颈侧血管随呼吸起伏。一滴汗从太阳穴滑到下颌，被风甩飞。

细节：整件骑行服前胸和后背已经湿透变成深色，紧贴身体，头盔带上有一圈汗渍，镜面眼镜下缘起了一层薄雾。

[00:20-00:23] 镜头6：下坡第一视角（Handlebar POV / First-person）

车把固定机位，第一人称视角。画面能看到黑色车把、缠着的把带、码表屏幕和她握把的双手。

动作：车头快速冲下弯道，视线随身体压弯向左倾斜，路侧护栏和树木在画面两侧飞速掠过，前轮压过一小段积水溅起水花。她的手指按下刹车把，速度略降后再次放开。

风噪骤然放大，画面因高速产生轻微抖动和边缘模糊。

[00:23-00:27] 镜头7：终点擦汗（Static Medium Shot）

固定机位中景。她把车靠在护栏上，跨下车，摘下头盔单手拎着，眼镜随头盔一起摘下来挂在手指上，另一只手把汗湿的刘海往后一捋，头发湿成一缕缕黏在额头上。

动作：她放下头盔，双手拿起水壶仰头灌了一大口，水从嘴角流下脖子，用手背抹了一下下巴，然后长长呼出一口气，肩膀垮下来。

细节：脱头盔后头顶有明显压痕，脸颊通红发亮，眼睛周围有被眼镜压出的浅印，颈侧和锁骨有汗流下来的亮线。

[00:27-00:30] 镜头8：收尾比耶（Low Angle Pull-back）

低角度仰拍，她重新戴回头盔，眼镜架在头盔前额，整张脸露出来。她站在车旁，一只手扶着车座，另一只手举到脸侧比耶，冲镜头笑，还带着喘。身后是整片流动的云雾山谷和湿亮的盘山公路。

镜头缓缓向后下方拉远，人和车缩到画面下三分之一，山雾在她身后慢慢向上翻涌。

音效：全程链条声、变速器咔哒声、轮胎压水声、真实的粗重呼吸声与风噪，背景无音乐，最后两秒只留下风声和喘息声。
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2086013840618102785/img/dEuR-2OwFXRGuiLV.jpg" width="600" alt="Seedance 2.5 真实骑行 Vlog:运动相机+前摄+跟拍混剪 30 秒">](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08)

**作者:** @johnAGI168 | **来源:** [原帖](https://x.com/johnAGI168/status/2086014766846275817) | **发布:** 2026-08-08 | **热度:** 47

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08)**

### Seedance 2.5 生成马尔代夫骑行纪录片长镜头

> 作者用 Seedance 2.5 生成马尔代夫度假村骑行的 18 秒纪实跟拍，以两秒一段的时间线安排人物、游客、员工、陆龟、鹦鹉、蝠鲼与鲸鱼动作，并统一约束手持镜头、胶片颗粒和连续运动。

```
Gritty Ciné Vérité, handheld tracking shot, 35mm natural grain, soft tropical daylight, real documentary energy,  subtle camera shake and breathing, Maldives luxury island resort, turquoise water and white sand everywhere.

shot locked on a beautiful young woman with sun-kissed skin, long flowing dark hair, wearing a minimal black high-cut swimsuit and light sandals, riding a simple white beach bicycle at casual pace. She pedals naturally, relaxed posture, soft smile, hair and swimsuit fabric moving with the wind and motion.

TIMELINE

0-2s: [Wide tracking] She rides out from a wooden villa path. A staff member in white uniform waves as he passes with a tray of drinks. Two tourists in colourful wraps walk past laughing.

2-4s: Path opens to a lagoon boardwalk. A giant tortoise slowly crosses right in front of her front wheel; she slows, steers around it smoothly. Parrot flies low across frame squawking.

4-6s: [Dynamic tracking] She accelerates past a small open restaurant. Waiters carry plates, a couple of guests turn and smile at her. In the water to the left a manta ray leaps high, splashing hard.

6-8s: She rides onto a sandy path between palms. Two more giant tortoises amble across. A whale breaches far in the lagoon, sending a tall spray of water into the air.

8-10s: [Tracking] She passes a group of tourists taking selfies; one points excitedly at the water. Another manta ray jumps closer, almost parallel to her. Staff member on a golf cart slows to let her pass.

10-12s: [Side tracking] Path curves along the water’s edge. A large whale surfaces and rolls, fin cutting the surface. Bright green and red parrots land on a nearby railing then take off again.

12-14s: [Tracking] She rides through a shaded garden area. A family of tourists steps aside smiling. Another giant tortoise is right on the path; she carefully steers around it while a third manta ray jumps in the background.

14-16s: Open beach path. Two staff members on bicycles pass going the opposite direction, nodding. A whale dives, tail fluke rising high. Parrots fly in a small flock over her head.

16-18s: [Continuous tracking] She continues along the shoreline. More tourists walk past with snorkel gear. Final manta ray jumps dramatically close to the path. She keeps pedalling, wind in her hair, natural and effortless.

Photorealistic, heavy natural film grain, sharp skin and fabric detail, realistic water physics and animal movement, coherent continuous motion, stable character identity, true cinéma vérité documentary look
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088061312874004480/img/xeEkxAGKfiNCA-xv.jpg" width="600" alt="Seedance 2.5 生成马尔代夫骑行纪录片长镜头">](https://goodcase.ai/cases/seedance-2-5-f3651857750b)

**作者:** @techhalla | **来源:** [原帖](https://x.com/techhalla/status/2088099038839316601) | **发布:** 2026-08-14 | **热度:** 45

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-f3651857750b)**

### Seedance 2.5 生成暴雨港口灾难电影序列

> 作者用 Seedance 2.5 生成 30 秒好莱坞式灾难序列，以六个分镜串联暴雨港口逃生、爆炸洪水、室内避难与巨型海怪结尾，并完整规定角色一致性、镜头运动、水体物理和声音设计。

```
Create a 30-second ultra-realistic cinematic disaster sequence with a dark, intense, Hollywood-blockbuster atmosphere.

Main character: A young woman with short, messy dark hair, wearing a soaked white T-shirt and light-colored shorts. Keep her appearance consistent throughout the entire video. Her face should remain realistic and expressive, showing fear, shock, exhaustion, and determination.

Scene 1 — 0–5 seconds:
Open with an extreme close-up of the woman running toward the camera through a dark industrial shipping yard at night. Heavy rain is falling, her hair and clothes are completely wet, and she is breathing heavily. Behind her, bright industrial lights glow through thick smoke and mist. The camera moves backward smoothly while maintaining focus on her face. Add realistic rain droplets on the camera lens, dramatic backlighting, atmospheric fog, and handheld cinematic movement.

Scene 2 — 5–10 seconds:
Cut to a wider shot as she runs through the flooded container yard. Large shipping containers surround her, emergency lights flash in the distance, and explosions/fire erupt behind her. She looks over her shoulder in panic while continuing to run. Water splashes dramatically around her legs with every step. Use realistic fire, smoke, debris, rain, and volumetric lighting.

Scene 3 — 10–15 seconds:
She suddenly loses her balance and falls into the flooded ground. Show the impact in slow motion for a moment, with water splashing around her. She quickly pushes herself back up while terrified people run in the background. A massive wave of smoke, debris, and water moves through the shipping yard behind them. Use a low-angle camera close to the ground for a powerful disaster-movie perspective.

Scene 4 — 15–21 seconds:
She gets back on her feet and starts sprinting toward safety. The camera tracks alongside her at high speed. Containers shake, debris flies through the air, vehicles and objects are pushed around by the powerful force behind her. Keep her face and body consistent. Alternate between close-ups of her frightened expression and wide shots showing the enormous scale of destruction.

Scene 5 — 21–25 seconds:
She reaches a large modern building filled with terrified people. The camera follows her inside as everyone rushes toward safety. People are falling, crawling, and helping each other while water and debris can be seen outside through the entrance. The lighting changes from cold blue-gray exterior lighting to dramatic warm interior lighting.

Scene 6 — 25–30 seconds:
Suddenly transition to a massive luxury yacht in the middle of a violent ocean. Huge dark waves surround the vessel under a stormy sky. The camera starts behind the yacht and slowly reveals an enormous shark-like sea creature emerging from the ocean directly behind it, creating a terrifying final reveal. The creature rises through the waves with water cascading from its body. End with a gigantic wave crashing toward the yacht.

Visual style: photorealistic Hollywood disaster film, cinematic color grading, realistic skin texture, physically accurate water and rain, volumetric fog, dramatic practical lighting, realistic fire and smoke, detailed environments, natural motion blur, shallow depth of field, dynamic camera movement, high contrast, atmospheric storm clouds, extremely detailed CGI, 4K cinematic quality.

Camera: mixture of handheld close-ups, smooth tracking shots, wide establishing shots, low-angle disaster shots, slow-motion impact moments, and dramatic aerial/wide shots.

Sound design: heavy rainfall, thunder, distant explosions, sirens, screaming crowds, footsteps splashing through water, crashing metal, deep cinematic bass, roaring waves, and an intense rising orchestral score that builds toward the final creature reveal.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087773971144175616/img/umEMuwc9f8YVaNDC.jpg" width="600" alt="Seedance 2.5 生成暴雨港口灾难电影序列">](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22)

**作者:** @Noor_ul_ain43 | **来源:** [原帖](https://x.com/Noor_ul_ain43/status/2087774014957850843) | **发布:** 2026-08-13 | **热度:** 45

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22)**

### Seedance 2.5 生成菠萝披萨突袭执法记录仪长镜头

> 作者用 Seedance 2.5 生成 30 秒连续执法记录仪视角突袭短片，四阶段串联破门、清场、发现菠萝披萨生产线和拘束人员；提示词同步锁定角色装备、房屋布局、光线、动作与环境音。

```
【生成目标】
Generate a continuous 30-second single-take bodycam video. Core subject is an FBI tactical agent’s first-person POV during a high-risk residential raid. Main event is a real-time dynamic entry and room-clearing operation that ends with the discovery of an active pineapple-on-pizza production line inside a dirty kitchen.

【阶段一 0-6s】
开始时：Night exterior, rundown two-story house on a neglected urban street under sparse sodium streetlights. Bodycam is chest-mounted on the point agent, slight wide-angle distortion, natural handheld micro-shake. Three other FBI agents in full dark tactical gear with visible FBI patches are stacked tight against the wall beside a weathered front door. Agent’s gloved hands are visible at the bottom of frame holding a ballistic shield and the door-breaching tool.
主要事件：Loud verbal announcement “FBI! Search warrant!” followed by immediate forced entry. Door is driven open with a single controlled ram strike; the team surges inside in a tight stack.
结束时：Bodycam crosses the threshold into a dim, cluttered living room. Doorframe still visible at the edges of frame.

【阶段二 6-15s】
承接上一阶段：Same continuous bodycam POV, same agents, same identity and gear. No cuts.
主要事件：Fast room clearing through the living area and short hallway. Several disheveled, pale, thin individuals (junkie appearance) are scattered on sofas, floor and against walls. Agents issue clear commands “Hands where I can see them! Get down!” while moving past. Two suspects are already being secured on the floor with hands behind their backs; plastic restraints are applied. Bodycam advances steadily, scanning left and right, flashlight beam briefly cutting across dirty walls and scattered trash.
结束时：Bodycam reaches the kitchen doorway. Harsh fluorescent kitchen light is now visible ahead.

【阶段三 15-24s】
承接上一阶段：Unbroken first-person movement into the kitchen. Same agents remaining in formation behind and to the sides.
主要事件：Kitchen is brightly lit by overhead fluorescents and under-cabinet lights yet extremely dirty. Thick white flour covers every counter surface, the floor, the fronts of cabinets and the clothing of the people inside. Four individuals stand at a large central work table and along the counters, actively slicing fresh pineapple rings with knives and placing the slices onto raw pizza dough bases. Flour dust hangs in the air. Agents flood the room, weapons low but ready, shouting “Nobody move! Hands up! Step away from the table!”
结束时：All four kitchen workers have raised empty hands. Flour-covered pizza dough and cut pineapple pieces remain clearly visible on the table directly in front of the bodycam.

【阶段四 24-30s】
承接上一阶段：Same continuous bodycam, same lighting and spatial layout.
主要事件：Agents begin securing the kitchen workers one by one, guiding their hands behind their backs and applying restraints. Bodycam slowly pans across the work surface, lingering on the flour-dusted dough, the open cans of pineapple, the knives, and the half-assembled pineapple pizzas. Radio chatter is audible in the background confirming “Kitchen clear, subjects in custody.”
结束时：Final frame holds on a close view of a flour-covered hand being restrained next to a pizza topped with fresh pineapple slices. Bodycam remains steady but still shows natural micro-movement.

【视觉风格与摄影】
Authentic real-world bodycam footage only. Continuous single take, no cuts, no slow-motion, no cinematic grading. Slight wide-angle lens distortion, natural motion blur on rapid movement, realistic handheld sway and vertical bob from walking. Exterior is low-key sodium-vapor night lighting with visible grain; interior is harsh, uneven fluorescent practical lighting that keeps everything clearly visible yet still gritty and dirty. Clothing, faces, and environments stay consistent and photorealistic throughout.

【音频】
No music. No subtitles.
Language: American English.
Clear radio and verbal commands in natural American law-enforcement cadence:
{FBI! Search warrant!}
{Hands where I can see them! Get down!}
{Nobody move! Hands up!}
{Kitchen clear, subjects in custody.}
Realistic ambience only: heavy breathing, boot steps on dirty floors, door impact, plastic restraint zip sounds, distant radio static, kitchen ambient noise of knives on cutting boards and flour being disturbed. Keep all dialogue, footsteps and room tone natural and continuous.

【保持一致】
Single continuous first-person bodycam POV of one FBI agent for the entire 30 seconds. Agent count, tactical gear, house layout, lighting direction and the exact number of kitchen workers remain stable. No violence, no blood, no weapons discharged. The only “contraband” activity is the preparation of pineapple pizza under a layer of flour.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088036342332555264/img/ITRmjj4aICcA0y_f.jpg" width="600" alt="Seedance 2.5 生成菠萝披萨突袭执法记录仪长镜头">](https://goodcase.ai/cases/seedance-2-5-d68024212dfc)

**作者:** @techhalla | **来源:** [原帖](https://x.com/techhalla/status/2088036921184223468) | **发布:** 2026-08-13 | **热度:** 44

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-d68024212dfc)**

### Bamboo Toy Car Transformation Vlog

> An incredibly detailed action prompt for a 30-second handheld POV video featuring a girl with a bamboo toy that triggers a car transforming into a giant robot.

```
纯属虚构的荒诞动作短片。100%真实手机实拍质感，iPhone纪录片风格，30秒手持一镜到底，无剪辑、无转场。自然日光，轻微呼吸式镜头运动，偶发自动对焦迟疑，轻微滚动快门，真实动态模糊，镜头边缘带少量指纹和灰尘。所有变形、机械运动、撞击和碎片效果都必须具有沉重的现实物理反馈，呈现为全尺寸机械装置与实景特效，绝不能出现电子游戏、动画或廉价CG质感。保留现场原始声音和路人的真实反应。 环境 午后，一家繁忙的鸿蒙智行·智界授权汽车门店停车场。 巨大的落地玻璃展厅内停着数辆新车，销售人员正陪顾客看车。停车场车辆进出不断，工作人员拿着平板在车位间穿梭，几名顾客围着一辆停在室外展示区的紫色智界R7拍照。 现场充满城市车流声、轮胎碾过沥青的声音、门店广播、远处交谈声、鸟鸣和偶尔响起的车辆提示音。一切都像路人偶然拍下、即将病毒式传播的手机视频。 门店原有标识可以自然出现在环境中，但不添加字幕、广告标题或浮动文字。 主角 一位二十五岁左右的成年年轻美女
，身材和穿着严格参考
HO2iXF9a4AAZsco
。 她神态放松，右手拿着一个传统竹制发声玩具“竹知了”。竹知了由短竹筒、细绳和小竹片组成。她一边经过停车场，一边漫不经心地转动竹知了。 竹知了发出连续、滑稽而响亮的“呜哇、呜哇”鸣叫声。 她并不是超级英雄，没有盔甲，不发生身体变形，始终保持普通成年女性的真实外貌。 关键车辆 停车场中央只有一辆紫色智界R7发生变形。 必须准确保持紫色车漆、轿跑SUV车身比例、贯穿式前灯、车轮、车门、玻璃和车身覆盖件的视觉连续性。车辆内部无人，没有驾驶员和乘客。 变形过程必须清晰可读：车轮折叠成为肩部结构，车门展开成为前臂护甲，底盘向下延伸形成双腿，车头与贯穿式灯带上升成为胸部，紫色车顶折叠成机器人头部。所有零件均来自同一辆车，不凭空增加零件，不突然更换车型或颜色。 30秒连续镜头 镜头开始于美女右后方约一米半、与肩膀同高的位置。摄影者跟随她缓缓进入停车场，让她的上半身、手里的竹知了以及前方紫色智界R7同时处于画面中。 镜头不能突然飞起，不能切换机位，也不能拉远成为俯瞰全景。 美女一边走，一边悠闲地转动竹知了。连续的“呜哇、呜哇”声在停车场里格外明显。 几名销售人员和顾客好奇地回头看她，但没有人太在意。 突然，紫色智界R7的贯穿式灯带自行亮起。 竹知了每响一声，R7的车灯便同步闪烁一次。 美女逐渐放慢脚步。 智界R7的车身内部传出低沉的金属震动声。悬架猛然下沉，四条轮胎同时摩擦地面，附近车辆的警报器接连响起。 整辆紫色R7突然开始变形。 引擎盖向两侧裂开，车门旋转展开，车轮离开地面并锁入肩部；底盘向下伸展，两条沉重的机械腿砸落在沥青路面上，震出蜘蛛网状裂纹。 紫色智界R7在停车场中央站立起来，变成一台数层楼高的巨型机器人。 停车场瞬间陷入恐慌。 顾客丢下宣传册和咖啡四散奔逃。销售人员钻到展车后面躲避。购物袋、宣传单和遮阳帽被机器人起身产生的气流卷上半空。两辆正在倒车的汽车发生轻微碰撞，喇叭持续鸣响。 机器人发出沉重的机械咆哮，挥动由车门组成的巨大手臂，将停车场的一根灯杆打弯。它随后抬起机械脚掌，踩扁旁边的空置展示台，水泥碎片和灰尘向四周飞散。 摄影者慌张地向后退并侧身躲避，镜头剧烈摇晃。飞来的小块碎片撞在镜头附近，自动对焦短暂失准，然后重新锁定机器人。 镜头迅速回到美女身上。 所有人都在逃跑。 她却几乎没有反应。 她平静地抬头看了看巨型机器人…… ……然后低头看向手里的竹知了。 机器人转过身体，紫色金属脚掌刮过地面，向她迈出沉重的一步。每一步都令停车场地面震动，玻璃展厅随之颤抖。 美女只是轻轻扬起一侧眉毛。 她握紧细绳，突然加快手腕旋转速度。 竹知了的鸣叫声变得越来越急促。 “呜哇——呜哇——呜哇——” 竹筒内部开始透出淡淡的金色光芒。 光芒越来越强。 十个、数百个、成千上万个发光的竹知了在她身体周围凭空出现，像一群完美同步的金色蜂群，在她头顶和肩膀周围高速盘旋。 旋转产生的强风吹动她的长发和衣角，将停车场里的宣传单、树叶、灰尘和塑料袋全部卷入空中。金色光芒映在周围汽车的玻璃与金属车漆上。 巨型机器人挥动紫色机械手臂，试图拍散竹知了群。机械拳头擦过地面，掀起碎石和尘土。 美女侧身迈开一步避过冲击，双脚重新站稳，身体重心压低，右手仍然牢牢控制细绳。 她突然将竹知了高高举起…… ……然后打了一个清脆的响指。 所有发光的竹知了瞬间向前发射。 天空被无数道金色轨迹划破。 第一批竹知了像精准制导的蜂群，猛烈撞击机器人的膝关节和脚踝；第二批绕着机器人高速盘旋，钻入肩部车轮、车门手臂和胸口灯带之间的机械缝隙。 机器人踉跄后退，机械脚掌在沥青上拖出两道深深的沟槽。它挥拳反击，却不断打空，每一次挥动都带起真实而沉重的气流。 最后一批竹知了在机器人胸前汇聚成高速旋转的金色圆环。 美女猛然向下一拉细绳。 所有竹知了同时发出一声震耳欲聋的巨大鸣叫。 一道肉眼可见的环形空气冲击波正面撞上机器人胸口。 在这一瞬间进入短暂慢动作：紫色机器人全身的机械锁扣依次弹开，车门护甲、车轮、玻璃、底盘和车身覆盖件在空中分离；金色竹知了从零件之间高速穿过，飞散的螺栓、灰尘和细小玻璃颗粒悬浮在阳光中。 这不是爆炸，也不是车辆被彻底摧毁。所有零件仍然属于同一辆紫色智界R7，没有火焰，没有人员受伤。 慢动作结束。 巨型机器人完全失去平衡，重重跪在停车场中央。它的机械结构迅速反向折叠：双腿收回底盘，车轮回到轮拱，车门重新闭合，车头、车顶和灯带准确复位。 伴随最后一声沉重的金属锁定声，机器人重新变回完整的紫色智界R7。 一片寂静。 车辆警报器逐渐停止。 顾客和销售人员小心翼翼地从展车后面探出头。一个销售人员迟疑地走向紫色R7，伸手摸了摸仍然发烫的引擎盖，又立刻把手缩了回来。 一个发光的竹知了缓缓落在美女肩膀上，光芒随即灭，重新变成普通竹制玩具。 她漫不经心地拍掉肩上的灰尘，收起细绳，经过已经恢复原状的紫色智界R7。 走出画面前，她回头看了一眼汽车，平静地小声说： “一千万以内最好玩的，还是这个。” 她再次转动竹知了，伴随着“呜哇、呜哇”的声音若无其事地继续向前走。 镜头没有切断，摄影者缓慢停下。画面最后同时保留她渐渐远去的背影、恢复原状的紫色智界R7，以及停车场后方鸿蒙智行·智界门店原有的门头标识。 严格限制 全片只有一个连续手持镜头；不航拍、不突然切换机位、不瞬移、不使用蒙太奇。美女、竹知了和紫色智界R7始终保持外观一致。只能有一辆R7变形，机器人所有零件均来自这辆车。 机器人必须具有真实重量、关节阻力、惯性和落地冲击，不能漂浮、瞬移或像橡胶玩具一样弯曲。竹知了群的运动必须有明确方向、空气阻力和碰撞反馈。 不出现驾驶员受伤、血液、人体撞击或真实人员死亡；不出现火灾与电池爆炸。不生成错误车型、乱码车标、额外手指、人物复制、车辆复制、卡通机器人、动漫光效、电子游戏HUD、字幕、贴纸、旁白、背景音乐或水印。现有门店标识自然入镜即可，不额外生成品牌宣传画面。
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2084644558940332032/img/ELo46SVCv04roRaI.jpg" width="600" alt="Bamboo Toy Car Transformation Vlog">](https://goodcase.ai/cases/bamboo-toy-car-transformation-vlog)

**作者:** John | **来源:** [原帖](https://x.com/i/status/2084644638724395138) | **发布:** 2026-08-04 | **热度:** 40

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/bamboo-toy-car-transformation-vlog)**

### Seedance 2.5 太阳镜UGC测评口播视频

> Seedance 2.5 生成的太阳镜UGC测评口播视频，女主角在卧室开箱、试戴并对镜展示细节，全程配台词描述佩戴体验。人物与产品均锁定参考图外观，手持运镜模拟真实博主测评的拍摄质感。

```
Use the uploaded reference image as the exact character reference. Preserve her facial identity, hairstyle, eye color, makeup, skin tone, body proportions, white sleeveless fitted top, light blue wide-leg jeans, pearl choker, rings, and bracelets consistently throughout the video. Use the uploaded sunglasses, retail box, and leather carrying case as locked product references. Maintain perfect product consistency, including the frame shape, lenses, hinges, colors, materials, and proportions.
Create an ultra-realistic UGC luxury creator review filmed inside a modern luxury bedroom with warm golden-hour sunlight, soft natural shadows, and a premium lifestyle aesthetic. The camera feels like a handheld smartphone with subtle natural movement while maintaining cinematic commercial quality.
The video begins with the woman sitting on the bed beside the retail box and leather case. Smiling at the camera, she says, "I genuinely wasn't expecting to love these this much." She picks up the box, opens it naturally, reveals the leather case, then slowly removes the sunglasses while continuing, "The packaging already feels incredibly premium."
She rotates the sunglasses slowly in front of the camera, showing the frame, hinges, and lenses as natural reflections glide across the surface. She smiles and says, "The finish feels amazing, and they're incredibly lightweight."
She puts on the sunglasses, stands up, and walks toward a large full-length mirror. Looking at her reflection, she adjusts the frame naturally and says, "Honestly... they look so good, and they're really comfortable on the eyes, even in bright sunlight."
She turns slightly left and right so the sunglasses catch the sunlight from different angles before removing them with a smile. Walking back to the bed, she places the sunglasses beside the leather case and retail box, then picks them up one last time and holds them beside her face.
Looking directly into the camera, she smiles warmly and says, "Definitely one of my favorite accessories this year." The camera slowly pushes in on the sunglasses before fading out.
Ultra-realistic UGC fashion content, authentic creator review, cinematic handheld smartphone movement, luxury bedroom, macro product cinematography, realistic reflections, detailed frame textures, expressive facial animation, perfect lip sync, shallow depth of field, premium color grading, 4K HDR, 16:9, no subtitles, no logos, no watermarks, no on-screen text.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2084608460289925120/img/jM2vm1V6y4RKi8ry.jpg" width="600" alt="Seedance 2.5 太阳镜UGC测评口播视频">](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106)

**作者:** Smiling Khan | **来源:** [原帖](https://x.com/AIwithkhan/status/2084608509837275231) | **发布:** 2026-08-04 | **热度:** 34

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106)**

### Seedance 2.5 涩谷街头K-pop舞蹈同步字幕

> Seedance 2.5 生成的涩谷街头K-pop快闪翻跳视频，四名舞者依次变换菱形、横排、V字三种队形完成舞蹈段落。画面叠加与舞点精确同步的复古大字字幕，逐句随节拍淡入淡出。

```
30-SECOND K-POP PUBLIC DANCE COVER — SHIBUYA, TOKYO (with synced typography)
Generate a 30-second horizontal 4:3 realistic live-action K-pop girl group public dance cover video, using the provided first frame as the exact visual starting point, with retro bold-typography captions appearing in sync with the choreography, styled like halftone poster-text overlays (bold condensed display font, high-contrast color against the scene, subtle grain texture matching the background).
TYPOGRAPHY STYLE
Font: bold condensed display, poster-style
Placement: upper third or side margin, never covering faces or hands
Animation: quick fade/slide-in synced to the beat, holds for its duration, clean fade-out before the next line
Color: high-contrast against Tokyo evening tones (cream/gold/white lettering with soft drop shadow)
One line active on screen at a time
SCENE & LOCATION
Shibuya street, Tokyo, Japan, natural evening light, authentic public dance-cover environment — kanji/hiragana/katakana shop signs, convenience stores, cafés, boutiques, vending machines, parked bicycles, overhead wires, glass reflections, soft neon beginning to glow, blurred distant pedestrians. No recognizable logos or brand signage.
FRAME & CAMERA
Horizontal 4:3, fixed frontal camera, eye-level, ~5 meters distance, full-body framing, stable documentary style. Subtle push-in only during RINA's highlight, then returns to full frame. No cuts, rotation, extreme zooms, or handheld shake.
CHARACTERS — EXACTLY 4 DANCERS
RINA (center): long straight black hair, babypink cropped racing jacket, ivory crop top, charcoal cargo shorts, brown ankle boots
YERI (left): light brown high ponytail, light blue cropped knit jacket, beige camisole, faded black wide-leg jeans, cream sneakers
SOO (right): silver-grey hair, navy off-shoulder top, rose-gold waist chain, charcoal pleated skirt, black platform shoes
MINA (back): dark reddish-brown curly hair, olive bomber jacket, grey crop tee, navy straight-leg pants, off-white platform sneakers
No fifth dancer, no duplicates, no overlapping bodies, no identity swaps.
TIMELINE WITH SYNCED TYPOGRAPHY
0–6s — OPENING DIAMOND
RINA center-front, YERI front-left, SOO front-right, MINA back-center. Hand opening, side steps, shoulder rhythms, crossed-arm accents, face-framing gestures, hip accents.
Caption: "SAME STREET, NEW BEAT" — fades in at 1s, holds to 5s, fades out.
6–10s — RINA HIGHLIGHT
RINA: chest pop, head tilt, direct eye contact, finger point to camera. Others restrained, framing her. Subtle push-in then return.
Caption: "ALL EYES, ONE GIRL"* — appears exactly as RINA points at camera (6.5s), holds through push-in, fades by 9.5s.
10–14s — DIAMOND → HORIZONTAL LINE
Smooth half-step transitions, MINA steps out from behind RINA into full visibility. Wrist flicks, arm sweeps, hip accents, toe taps once stabilized.
Caption: "SHIFT THE SHAPE" — slides in as formation begins moving (10s), fades out once line stabilizes (13.5s).
14–19s — HORIZONTAL LINE CHORUS
Heel-toe shuffles, knee bounces, chest pops, shoulder rhythms, toe taps. SOO performs controlled body-wave highlight on the right.
Caption: "WAVE IT OUT" — appears as SOO's body-wave begins (15s), fades before formation shifts (18.5s).
19–23s — RETURN TO DIAMOND + RIPPLE
Diamond reforms, MINA repositions opposite RINA, fully visible. YERI initiates ripple body wave: YERI → RINA → SOO → MINA.
Caption: "RIPPLE THROUGH" — timed to appear exactly as the ripple starts at YERI (20s), fades as it reaches MINA (22.5s).
23–27s — FINAL CHORUS
Upward arm points, hip accents, shoulder rhythms, toe taps, chest pops, rising energy, natural hair/clothing movement.
Caption: "TURN IT UP" — appears on the first upward arm point (23.5s), fades before final transition (26.5s).
27–30s — FINAL V FORMATION + FREEZE
RINA front-middle, YERI back-left, SOO back-right, MINA mid-back-right. Coordinated freeze pose, symmetrical arm lines, feet planted, completely still for the final second.
Caption: "FREEZE FRAME" — slides in as the freeze locks (28s), holds steady and crisp through the final loop-ready frame (30s) — no fade-out, ends on screen.
VISUAL STYLE
Realistic live-action street photography — genuine skin texture, individual hair strands, realistic clothing materials, accurate body proportions, natural shadows, evening illumination, storefront reflections, documentary cinematic composition. Typography sits as a poster-style overlay layer, not baked into the environment — legible, clean, and non-intrusive to the dancers.
STRICT NEGATIVE REQUIREMENTS
No anime, cartoon, 3D/CGI look, stage lights, studio set, extra dancers, duplicated people, overlapping bodies, distorted anatomy/hands/feet, teleportation, sudden formation changes, rapid camera movement, camera rotation, extreme zoom, watermarks, subtitles unrelated to the timed captions, or recognizable copyrighted logos/signage. Captions must stay legible and never obscure faces or hands.
FINAL OUTPUT
30 seconds, horizontal 4:3, realistic live-action K-pop public dance cover, Shibuya street, Tokyo, exactly 4 consistent dancers, full-body frontal camera, three formations, synchronized choreography with six timed typography captions matching each beat, stable camera, natural evening lighting, c
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2086067203665977344/img/WWZDWBiKZp7vr1le.jpg" width="600" alt="Seedance 2.5 涩谷街头K-pop舞蹈同步字幕">](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8)

**作者:** Sharon Riley | **来源:** [原帖](https://x.com/Just_sharon7/status/2086067758970851614) | **发布:** 2026-08-08 | **热度:** 33

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8)**

### Seedance 2.5 咖啡机竖屏UGC广告

> Seedance 2.5 生成的竖屏咖啡机UGC广告，创作者从开箱、注水磨豆到出品试饮完整走一遍产品使用流程，中间穿插台词。分镜按秒数安排特写与转场，模拟真实博主口播带货的镜头语言。

```
Create a 30-second vertical AI UGC product commercial (9:16) for a premium coffee machine.
Style: Ultra-realistic, cinematic, social-media UGC, premium lifestyle, 4K HDR, natural lighting, smooth handheld camera, realistic human motion, luxury color grading.
Scene 1 (0–5s)
A creator walks into a modern kitchen holding a coffee mug and says, "I finally tried this coffee machine."
Scene 2 (5–10s)
Close-up shots of opening the coffee bean container, adding beans, filling water, and pressing the power button. Natural hand movements and satisfying button clicks.
Scene 3 (10–17s)
Macro shots of coffee grinding, rich crema forming, steam rising, and coffee slowly pouring into a glass cup. Beautiful golden morning sunlight.
Scene 4 (17–23s)
The creator takes the first sip, smiles naturally, and says, "This honestly tastes amazing."
Scene 5 (23–27s)
Premium product showcase with smooth orbit shots, close-ups of the controls, metallic finish, and elegant kitchen background.
Scene 6 (27–30s)
Hero shot of the coffee machine beside a fresh cup of coffee with soft cinematic lighting. End with the creator holding the cup and smiling at the camera.
Requirements:
Vertical 9:16, 30 seconds, AI UGC style, realistic creator vibe, premium product advertising, natural expressions, realistic hands, smooth camera movement, clean transitions, cinematic quality, no logos or watermarks.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2085946198230433792/img/S94KqCWU-g9-VyFW.jpg" width="600" alt="Seedance 2.5 咖啡机竖屏UGC广告">](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9)

**作者:** Sadia | **来源:** [原帖](https://x.com/SadiaMalik182/status/2085947010293883115) | **发布:** 2026-08-08 | **热度:** 33

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9)**

### Seedance 2.5 悬崖翼装跳伞环海一镜到底

> Seedance 2.5 生成的悬崖翼装跳伞一镜到底视频，角色跳崖开伞后贴海面高速穿梭躲避多艘游艇，落地脱装后走向摊位咬下一口热狗收尾。全程锁定角色参考图身形面部，用连续跟拍串联跳跃与降落。

```
[STYLE + CAMERA + ATMOSPHERE] Gritty, raw handheld 35mm film aesthetic with natural film grain. Harsh direct sunlight creating high-contrast shadows over a dramatic coastal cliff and open ocean. Continuous single-take handheld tracking shot (3rd-person / over-the-shoulder) with no cuts. Atmosphere: high-altitude wind, realistic coastal cliff and ocean physics, sudden wingsuit deployment. Audio: heavy rhythmic breathing, intense wind howl, fabric snap of wingsuit opening, high-speed air rush over open water, near-miss whooshes past yachts, soft landing roll on sand, distant ocean waves and beach ambient noise, final bite sounds.
[IMAGE REFERENCES] Use the provided Hoshino character sheet as the single strict visual reference for the male character. Exact face, black hair, dark brown eyes, lean athletic build (178 cm), gold earrings, and overall facial structure locked from the reference. Outfit: modern high-performance cliff-jumping wingsuit — sleek, form-fitting design in matte charcoal black with sharp white paneling and subtle gold zipper accents (matching his minimalist aesthetic). The wingsuit is worn from the start with a matching technical backpack. Body proportions, posture, and face remain fully locked to the Hoshino reference.
[TIMELINE SECOND BY SECOND] 0-3s: [Handheld medium] Hoshino stands on the edge of a high rocky cliff overlooking the open ocean, wearing his charcoal-and-white wingsuit and technical backpack. He looks straight into the camera with calm, confident intensity, then turns and launches into a clear, controlled forward somersault in slow motion as he leaves the cliff edge.
3-5s: [Continuous freefall] He completes the somersault and falls head-first toward the sea. At exactly 1.5 seconds into the fall he fully deploys the wingsuit with a sharp snap. The wing membranes inflate and he levels out into a smooth glide.
5-12s: [High-speed tracking] Camera stays locked behind him as he rockets at full speed just above the ocean surface along the coastline. He weaves tightly past sheer cliff faces, banking hard left and right, turquoise water and rocky walls streaking past at extreme velocity.
12-18s: [Low-level chaos] He drops lower, flying just above the water. He almost collides with a large luxury yacht that suddenly turns, banks hard to avoid it, then narrowly misses a smaller motor yacht. He dips under a yacht’s outstretched boom and threads between two more vessels.
18-23s: [Water-level action] Still flying extremely low over the sea, he dodges a startled seabird that dives across his path, skims past a group of people on a nearby yacht who scatter in surprise, and banks sharply to avoid an open yacht swim platform. The camera stays locked behind him through every near-miss.
23-26s: [Landing] He flares the wingsuit hard, touches down with both feet on the soft beach sand and immediately rolls forward to kill the speed. He stands up, peels off the wingsuit in one fluid motion and drops it on the sand beside him, revealing a clean fitted white undershirt underneath.
26-28s: [Beach level] He walks a few steps still wearing the backpack and stops right in front of a classic beachside hot-dog cart. The vendor hands him a steaming hot dog fresh off the grill.
28-30s: [Close continuous] He turns, looks directly into the camera, takes a big bite of the hot dog and chews with a calm, satisfied expression as the shot holds.
[STYLE & QUALITY BOOSTERS] Photorealistic 8K, ultra-detailed textures, cinematic lighting, perfect motion blur, high dynamic range, coherent physics (fabric, air, wingsuit membranes, impact, roll, near-misses with yachts, water spray), stable character locked to the Hoshino reference, realistic ocean reflections, cliff rock textures and wind, no artifacts, movie-level stability, pure single continuous take.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2085995822119038976/img/ag7D8K-7GjgApc8V.jpg" width="600" alt="Seedance 2.5 悬崖翼装跳伞环海一镜到底">](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc)

**作者:** MrDejie | **来源:** [原帖](https://x.com/mrdejie/status/2085996752809927146) | **发布:** 2026-08-08 | **热度:** 19

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc)**

### Seedance 2.5 蜘蛛反英雄游戏角色选择UI动画

> Seedance 2.5 生成的游戏角色选择界面动画，锁定卡片轮播、技能树等UI布局不变，依次展示五名蜘蛛反英雄角色切换站姿。每个角色按参考图锁定设计，配合专属技能特效演出。

```
title: "Spider Roster — Character Select Showcase"
reference_handling: "@image1 is the LOCKED SCENE COMPOSITION — replicate its exact game-menu layout in every frame: top nav bar (HOME / CHARACTERS / LOADOUTS / SETTINGS / PROFILE) with CHARACTERS highlighted teal, currency counters top-right, horizontal character-card carousel on the left half, LOADOUT icon row and SKILL TREE node graph bottom-left, SELECT / CUSTOMIZE / BACK buttons bottom-right, and the full-body 3D character standing on a glossy white showroom floor on the right half. @image2, @image3, @image4, @image5, @image6 are STRICTLY character design references — silhouette, armor geometry, color, emblem, materials ONLY. DO NOT reproduce their reference poses. DO NOT show any character standing flat-frontal with arms hanging limp at the sides. DO NOT reproduce the isolated cream/white empty backdrop from the character references — every character stands inside the game UI on the reflective floor. DO NOT place loose crystals, rubble blocks, or scattered debris props on the floor. Poses are dictated by the storyboard below."
style: "Stylized AAA game menu render. Faceted low-poly painterly hero models, Arcane-adjacent gouache shading, clean flat-white UI chrome. Crisp 4K."
visual_feel: "Locked, stable, showroom-clean. Smooth free-flowing character motion with weight and follow-through. Soft floor reflections, gentle bloom on emissive emblems, fine paper grain on armor plates."
duration: "20 seconds"
character_modeling:
ui_screen:
base: "Game character-select interface matching @image1. Cool near-white background, faint vertical light streaks behind the character stage."
features: "Five rounded rectangular character cards in a horizontal row on the left. The centered card is enlarged, elevated, white, with a downward pointer tab. Flanking cards are smaller, semi-transparent, and clipped at frame edge. Active card shows character portrait, NAME in bold black caps, class subtitle, and four stat rows: ARMOR / MOBILITY / HEALTH / POWER with colored values."
behavior: "The card row slides horizontally to bring the next character to center. Cards scale up on centering, scale down on leaving. Skill-tree nodes pulse once per swap. UI chrome, nav bar, and buttons NEVER move, warp, or reflow."
chaos:
base: "Spider-vigilante matching @image6 for design only."
features: "Cracked bone-white skull mask, glowing violet slit eyes, coral-red open coat, navy-and-red webbed bodysuit with a red spider emblem, cream sash knotted at the waist, chunky violet hex-tech gauntlets with glowing white hexagon and dot faces, orange skull kneepad, bandage-wrapped sandals."
movement_in_this_scene: "Loose, cocky, gambler energy. He never stands still — weight shifts, shoulders roll. NEVER shown with one foot propped on a stone block."
scrap:
base: "Spider-vigilante matching @image4 for design only."
features: "Pointed coral-pink hood-mask with a red spider face marking and black eye slits, layered violet scrap-cloth poncho with a red spider decal on the shoulder, burnt-orange wrapped tunic, crossed lavender strap harness, bandaged forearms and shins, a heavy violet six-barrel rotary cannon mounted on the right arm."
movement_in_this_scene: "Grounded, heavy, scavenger swagger. NEVER shown with the cannon lowered and idle at his side."
arcane:
base: "Spider-enforcer matching @image2 for design only."
features: "Angular lavender crystal armor with hairline gold fracture-web etching, sharp faceted hood over a dark deep-violet face with glowing white-violet eyes, oversized star-shaped crystal pauldrons, a blazing amber-gold spider emblem on the chest, deep maroon tabard, jagged crystal greaves."
power_this_scene: "Loose violet crystal shards materialize from thin air and orbit his hand, then align and hover."
movement_in_this_scene: "Controlled, ceremonial, unhurried. NEVER shown in the flat frontal deity-display stance from the reference."
pyre:
base: "Spider-enforcer matching @image5 for design only."
features: "Lilac faceted plate armor covered in fine white rune script, spiked pauldrons and vambraces, a smooth insect-like helm with pale orange lenses, a molten orange-gold spider emblem burning through the chest plate, live flame licking from the helm crest and neck seam, dark maroon underlayer."
power_this_scene: "Flame intensity rises and falls with his motion — brightest at the peak of a strike, guttering low when he settles."
movement_in_this_scene: "Explosive and martial. NEVER shown standing symmetrically with both arms hanging down."
shard:
base: "Spider-vigilante matching @image3 for design only."
features: "Dark charcoal-violet mask with large pale-pink lenses and thin web lines, black webbed bodysuit with a glowing violet spider emblem on the chest, the entire outer suit rendered as pale lavender-white crystalline fragments mid-dissolve, the left arm fully disintegrated into billowing violet particle flame, magenta gloved fingertips."
power_this_scene: "His body scatters into drifting shard particles and reassembles a short distance away."
movement_in_this_scene: "Weightless, drifting, unstable. NEVER shown standing upright with both feet planted flat."
cinematic_storyboard:
00_04_chaos:
camera: "Static locked-off full-screen UI. Hold."
action: "The card row is already settled on the CHAOS card, centered and enlarged, reading CHAOS / SPIDER-VIGILANTE with ARMOR HIGH, MOBILITY HIGH, HEALTH LOW, POWER MAX. On the stage, CHAOS flicks a glowing white hex-die off his right gauntlet, catches it blind behind his back with the left, then snaps both gauntlets up into a crossed X in front of his mask. The hex faces flare white. He rolls one shoulder, tilts his head, and drops into a loose one-hip idle sway, coat swinging."
lighting: "Even soft showroom key. Violet gauntlet glow spills onto his chest and mask."
sfx: "Two soft ceramic die-clicks. A low hex-charge hum on the flare."
04_08_scrap:
camera: "Imperceptible slow push-in toward the character stage."
action: "The card row shuttles one step left. The SCRAP card scales up to center, stats resolving to ARMOR MED, MOBILITY MED, HEALTH HIGH, POWER HIGH. SCRAP drops into a wide braced stance, plants his left foot, and spins up the rotary cannon — the six barrels rotate faster and faster, venting a puff of violet exhaust. He swings the arm in a slow horizontal sweep across the stage, then shoulders the cannon, rolls his neck once, and settles with the barrel resting high and the poncho still swaying."
lighting: "Soft key with a warm violet muzzle-glow kicking off his hood and strap harness."
sfx: "Card shuttle click-clack. Mechanical barrel spin-up whir. A soft pressure vent hiss."
08_12_arcane:
camera: "Locked-off full-screen UI. Hold."
action: "The card row shuttles left again. The ARCANE card centers, stats resolving to ARMOR HIGH, MOBILITY HIGH, HEALTH MED, POWER HIGH. ARCANE lifts his right hand palm-up. Seven violet crystal shards fade into existence and begin orbiting his fingers. He closes the hand into a fist and drives it down onto the floor — a ring of light travels outward across the reflective surface, the shards freeze in place mid-air, and the gold spider on his chest flares white-hot. He rises to a tall three-quarter stance, tabard settling, shards still hanging suspended around him."
lighting: "Cool key. Amber chest-emblem bounce warms his jaw. Violet rimlight from the orbiting shards."
vfx: "Shards materialize as flat painterly facets, never photoreal glass."
sfx: "Card shuttle click-clack. Crystalline chimes. A single deep resonant thud on the fist plant."
12_16_pyre:
camera: "Slow subtle arc to the right around the character stage."
action: "The card row shuttles left. The PYRE card centers, stats resolving to ARMOR HIGH, MOBILITY HIGH, HEALTH MED, POWER HIGH. PYRE drops to one knee and slams a palm flat to the floor — a column of orange flame erupts upward from the spider emblem burning through his chest plate. He sweeps his forearm in a wide burning arc, the fire trailing behind it in a smeared painterly ribbon, then rises into a bladed side-on guard, one fist cocked at the hip, flame guttering low at his helm crest."
lighting: "Warm orange firelight washes his lilac plates and throws a moving glow across the floor."
vfx: "Flame renders as stylized flat-shaped fire, not volumetric smoke."
sfx: "Card shuttle click-clack. A muted whoosh on the eruption. Low ember crackle underneath."
16_20_shard:
camera: "Slow, controlled pull-back to frame the full interface. Hold."
action: "The card row shuttles one final step left. The SHARD card centers, stats resolving to ARMOR MED, MOBILITY HIGH, HEALTH MED, POWER MAX. SHARD's body scatters into a burst of pale crystalline fragments and reassembles a full step to the right, landing low with two fingertips touching the floor. Violet particle flame pours off his dissolved left arm and drifts upward. He rises slowly, half-turns his masked head toward the lens, and holds — fragments still peeling off his shoulders and evaporating. The SELECT button pulses teal once. Hold on the frame."
lighting: "Cool white key. Violet particle glow underlights his chest emblem and mask lenses."
vfx: "Dissolve reads as flat painted shard shapes drifting off the silhouette, not smoke or embers."
sfx: "Card shuttle click-clack. A soft glass-scatter sweep on the teleport. One clean UI chime on the SELECT pulse."
production_notes:
audio_design: "Continuous low-tempo electronic menu loop underneath — soft synth pad, sparse pulse, no drums. Every card swap carries a short mechanical shuttle click-clack, like a rolling detent. Character sound effects stay restrained and diegetic: no impact booms, no orchestral hits, no risers. Music never swells; it holds one steady bed for all 20 seconds."
lighting: "Flat, even, high-key showroom lighting on the character stage throughout. Only each character's own emissive effects change the light. UI panels stay unaffected by character lighting."
critical_constraint: "@image1's interface layout is fixed for all 20 seconds — nav bar, currency counters, LOADOUT row, SKILL TREE graph, and SELECT / CUSTOMIZE / BACK buttons never shift position or change size. ONLY the card carousel slides and only the stage character changes. Each character stands in the same floor position, roughly centered in the right half. Character reference images supply design ONLY — no character is ever shown in the flat frontal arms-down reference pose, and no reference-image background props, crystals, rubble, or empty cream backdrop appear on the stage."
avoid: "Jitter, bent or distorted limbs, temporal flicker, identity drift between shots, chaotic composition, character frozen in reference-image pose, warping or garbled UI text, UI elements drifting or reflowing, camera shake."
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2085677794508603392/img/g8QUIKU44BCdrbOk.jpg" width="600" alt="Seedance 2.5 蜘蛛反英雄游戏角色选择UI动画">](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

**作者:** pratish | **来源:** [原帖](https://x.com/pratishhhhh/status/2085679073632882880) | **发布:** 2026-08-07 | **热度:** 18

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)**

### Seedance 2.0（热度前列）

按热度展示 Seedance 2.0(+) 全部 272 条中的前 60 条。→ [查看 Seedance 2.0 全量画廊](./docs/gallery-seedance-2-0-part-1.md)

### Seedance 原生 UGC 竖屏手机跟拍短片

> Some people still think AI does't look real - This video just ended the argument Made with Seedance 2.5 1080p on maxfusi

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

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089298453318832128/img/4Lhii1hbWHygYAJ3.jpg" width="600" alt="Seedance 原生 UGC 竖屏手机跟拍短片">](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)

**作者:** @mightyking | **来源:** [原帖](https://x.com/mightyking/status/2089299068514148655) | **发布:** 2026-08-17 | **热度:** 95

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9)**


### 金发少女在高中走廊释放超能力

> Made with seedance 2.5 Prompt: Create a cinematic, photorealistic 30-second live-action video set inside a modern Americ

```
Create a cinematic, photorealistic 30-second live-action video set inside a modern American high school hallway lined with beige lockers. A beautiful young blonde female student with tied-back blonde hair, wearing a loose white long-sleeve top, black mini skirt, black backpack and casual shoes, walks through the crowded hallway while several students around her watch and interact with her.

Start with a natural medium shot of the girl walking between other students. Use realistic handheld camera movement, shallow depth of field, soft cinematic lighting, natural skin texture, realistic facial expressions and authentic high-school atmosphere.

As she continues walking, tension suddenly builds. A female student in a dark varsity-style jacket approaches her. The blonde girl raises her hand and mysterious pink-red energy begins glowing around her hands. Small luminous particles and sparks appear in the air. The energy gradually becomes stronger, creating a supernatural aura around her body.

Transition smoothly into an intense superhero-style action sequence in the same school corridor. The blonde girl suddenly moves with extraordinary speed and power, dodging an attacking male student and striking him with glowing pink-red energy. Show dynamic martial-arts-inspired movements, fast footwork, powerful kicks and punches, with energy trails following her movements.

Use cinematic slow motion for the strongest attacks, followed by fast-paced cuts. Show students reacting and moving away in fear as the fight continues down the hallway. The glowing pink-red energy should illuminate the lockers, floor and characters realistically, with subtle volumetric light, sparks, smoke and motion blur.

Include a dramatic moment where the girl performs a powerful spinning kick while surrounded by bright pink-red energy, sending the opponent backward. Keep the choreography physically believable and visually grounded, avoiding cartoonish effects.

Near the end, the hallway becomes quiet. The glowing energy disappears and the girl calmly continues walking toward the camera as if nothing happened. End with a close-up/medium close-up of her face with a confident, serious expression.

Visual style: photorealistic Hollywood superhero movie, cinematic color grading, realistic teenage/high-school environment, detailed faces, natural skin, realistic clothing and hair physics, realistic lighting, subtle film grain, shallow depth of field, professional cinematography, dynamic camera movement, high-detail VFX, realistic particle effects, 4K cinematic quality.

Camera: handheld tracking shots, medium shots, close-ups, low-angle action shots, smooth whip-pans, controlled motion blur, occasional slow motion during attacks.

Aspect ratio: 16:9.
Duration: approximately 30 seconds.
No text, no subtitles, no logos, no watermark, no distorted faces, no extra fingers, no unnatural anatomy.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2092119655863525376/img/vUNzQrUdJMJvETHU.jpg" width="600" alt="金发少女在高中走廊释放超能力">](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)

**作者:** @AiwithElisia | **来源:** [原帖](https://x.com/AiwithElisia/status/2092119695201837059) | **发布:** 2026-08-25 | **热度:** 94

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/aiwithelisia-seedance-ai-b204cdfb3dac)**


### Seedance 2.5 印尼女生日常写实短片

> Seedance 2.5 Prompt: Main subject: young Indonesian woman, early 20s, natural everyday appearance, faded mustard-yellow

```
Main subject: young Indonesian woman, early 20s, natural everyday appearance, faded mustard-yellow oversized cotton t-shirt, brown high-waisted linen wrap skirt reaching just below the knee, simple brown leather slide sandals, thin gold stud earrings, dark wavy hair in a messy low bun with loose wispy strands framing her face. Realistic warm brown skin texture, minimal natural makeup, warm and approachable demeanor. Maintain consistent identity, clothing, hairstyle, and appearance throughout the entire video.

Location: Authentic Indonesian residential neighborhood (gang) during a calm late morning. Narrow paved alleys, low-rise houses with open front terraces, terracotta roof tiles, potted frangipani and bougainvillea, laundry on bamboo drying racks, parked motorbikes along plastered walls, overhead utility wires, banana and coconut trees casting dappled moving shadows, quiet tropical residential atmosphere. No modern stores, billboards, cafés, or crowds.

Visual Style: Ultra-realistic documentary realism. Genuine candid behavior. Natural body language. Unscripted slice-of-life feeling. Strong environmental authenticity. Rich real-world details and believable human motion.

Camera Style: Early-2000s consumer DV camcorder aesthetic. Friend casually recording everyday moments. Heavy handheld shake, imperfect framing, frequent autofocus hunting, lens breathing, exposure pumping when moving between harsh tropical sun and deep alley shade, occasional motion blur, subtle rolling shutter, mild digital compression artifacts, warm faded colors, soft contrast, slight sensor noise. No stabilization. No cinematic camera moves. No modern color grading.

00:00–00:02
Outside a small house entrance with an open terrace. She sits on the low terrace step adjusting her loose hair bun with both hands raised. A light warm breeze moves loose strands of hair. She smiles naturally while the camera struggles to lock focus.

00:02–00:05
The camera follows her into a narrow alley lined with potted plants and plastered walls. She notices a neighborhood cat resting on a warm concrete ledge, crouches down, and gently pets it. Framing drifts off-center as the operator tries to keep up. Morning sunlight flickers through banana leaves overhead.

00:05–00:08
Small front terrace with a glass of sweet iced tea on a wooden stool. She sits relaxed on a plastic chair watching the quiet gang, casually brushing hair behind her ear. A motorbike passes slowly in the distant background. Handheld side angle with natural camera drift.

00:08–00:10
She turns toward the camera with a warm, genuine smile, gives a gentle nod of acknowledgement, then turns to walk down the tree-lined alley holding her iced tea. Recording cuts abruptly to black mid-motion as if the camcorder was switched off.

Audio: Hyper-detailed environmental ASMR binaural audio — crisp micro-sounds captured up close with high sensitivity. Crisp rustle of cotton fabric and linen as she moves, deep rhythmic cat purring vibrating close to the microphone, ice cubes gently clinking against the glass condensation, soft scuff of leather sandals on textured concrete pavement, dry banana leaves brushing together in the warm breeze, rhythmic faint sound of a sapu lidi broom sweeping fallen leaves nearby, water dripping into a terracotta gentong, distant gentle crowing rooster, faint muffled low-frequency hum of a passing motorbike down the alley. Pure natural foley textures, zero music, zero studio effects, zero narration, zero speech.

Goal: Authentic Indonesian neighborhood life captured like a forgotten home video from the early 2000s — candid, imperfect, realistic, warm, and deeply believable, with immersive environmental ASMR soundscape.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089204070997532672/img/UAx5Q6w1RA3C8pNG.jpg" width="600" alt="Seedance 2.5 印尼女生日常写实短片">](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)

**作者:** @RishuaVR | **来源:** [原帖](https://x.com/RishuaVR/status/2089204108175741157) | **发布:** 2026-08-17 | **热度:** 94

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/rishuavr-seedance-ai-ad4e6de3949d)**


### 智能手机拍摄的海滩一日游回忆

> 一段关于阳光明媚海滩一日游的随性智能手机家庭录像提示词，包含跳剪效果和真实的手机手持晃动感。

```
Super casual real smartphone home video footage of a sunny beach day outing with friends. Natural mobile phone camera recording with slight authentic handheld shake, normal frame rate with smooth natural motion, rapid-fire montage with constant quick jump cuts every 1–2 seconds like scrolling through phone memories. Unpolished authentic phone recording of a mixed group laughing, playing in the sand, snacking and clicking pictures. Pure raw home video feel with no cinematic polish or heavy effects.

Use the provided reference photo as the STRICT ONLY visual reference for the main woman. Maintain her exact appearance with zero deviation: [her described features]. Generate a mixed group of friends of all ages around her on the beach.

0–2.5s:
Shaky handheld rapid cuts of the main woman laughing with friends near the shoreline. Wind gently moves her hair. Quick flashes of feet in warm sand and waves washing over them.

2.5–5s:
Abrupt jump cuts showing a close-up of her smiling with sunglasses pushed up onto her head, followed by the group splashing water and taking casual selfies together.

5–7.5s:
Fast handheld footage of her sitting on a beach towel chatting animatedly with friends. Snacks and cold drinks are scattered around. Natural sunlight creates subtle lens reflections and realistic exposure changes.

7.5–10s:
Quick cut to a close-up of her giving a big warm smile toward the camera and waving playfully. The footage immediately jumps to the group building a small sandcastle together while laughing naturally.

10–12.5s:
Abrupt edit showing everyone gathered beneath a beach umbrella, casually passing chips and cold drinks around. Friends cheerfully toast with cans while talking over one another.

12.5–15s:
Final rapid transition showing the main woman relaxed and sitting among her friends, softly smiling while looking toward the ocean. The video ends naturally with a gentle phone sway as if someone simply stopped recording.

VISUAL STYLE:

- Natural smartphone video quality.
- Slight realistic handheld shake.
- Smooth normal frame-rate motion.
- Authentic casual interactions and physics.
- Realistic sunlight and exposure adaptation.
- Stable main character consistency.
- Unpolished home phone recording aesthetics.
- No professional stabilization.
- No cinematic color grading.
- No beauty filters.
- No artificial effects.
- No AI artifacts or glitches.

IMPORTANT GENERATION REQUIREMENTS:

- Consistent identity throughout the video.
- Realistic human anatomy and hand interactions.
- Natural walking and body movement.
- Authentic beach ambience and environmental audio.
- Physically correct lighting and shadows.
- Rapid memory-style jump cuts every 1–2 seconds.
- No duplicated people or objects.
- No facial distortions.
- No impossible movements.
- Preserve the casual smartphone home-video feeling from beginning to end.
```

[<img src="https://media.goodcase.ai/media/poster/smartphone-beach-day-memories.jpg" width="600" alt="智能手机拍摄的海滩一日游回忆">](https://goodcase.ai/cases/smartphone-beach-day-memories)

**作者:** Saul Goodman | **来源:** [原帖](https://x.com/i/status/2079189509586260101) | **发布:** 2026-07-20 | **热度:** 93

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/smartphone-beach-day-memories)**


### 狐狸在森林溪流边自拍漫游

> Curious Fox & Mountain Stream Vlog with Seedance 2.5 Prompt: Create a single continuous self-filmed vlog recorded on a h

```
Create a single continuous self-filmed vlog recorded on a handheld action camera in 16:9 aspect ratio. The camera is always held by the anthropomorphic fox, creating a natural first-person selfie perspective with light wind-induced shake, occasional soft lens flares from sunlight filtering through trees, realistic focus pulls, and dynamic walking/leaning motion. No cuts, transitions, or cinematic effects. Include a subtle realistic digital timestamp in the bottom-right corner that progresses naturally throughout the video.
Visual Style: Bright modern 4K digital look with vibrant yet soft natural colors, warm late-afternoon golden sunlight mixed with dappled shade, gentle water reflections and soft mist rising from the stream, subtle water droplets or mist on the lens near the water, and crisp details on fur and leaves. Slight handheld energy but smooth enough for casual vlogging. Widescreen 16:9 framing.
Character: Ember, a 24-year-old anthropomorphic red fox (bipedal, human-like proportions) with soft fluffy reddish-orange fur, white chest and muzzle, bright amber eyes, pointed ears, and a long bushy tail that sways naturally. He wears a simple light denim jacket with rolled sleeves over a soft cream t-shirt and comfortable cargo shorts. Personality: curious, warm, slightly playful and soft-spoken.
Location: Starts on a wooden footbridge over a clear mountain stream in a lush temperate forest, surrounded by mossy rocks, ferns, wildflowers, and overhanging maple and pine branches. Soft green and golden foliage, clear water with gentle ripples and small fish darting below.
Sequence (exactly 30 seconds, continuous take with timestamps):
0:00 – 0:05
Ember lifts the camera, smiles softly at the lens with his ears perking up, and says in a warm, slightly raspy voice:
“Hey friends… you won’t believe this spot I found.”
0:05 – 0:13
He walks slowly along the wooden bridge, lowering the camera slightly to show the clear stream and small fish swimming just below the surface while continuing:
“The water is so clear… I can see every little fish moving around.”
0:13 – 0:20
He crouches carefully at the edge, reaches one paw toward the water without touching it, and watches the fish dart past, laughing lightly:
“They’re swimming right up to me. Hi little guys.”
0:20 – 0:26
He turns the camera to capture both his face and the stream, then sits on a flat mossy rock at the water’s edge, letting his tail curl beside him. He gazes at the water for a few seconds and says quietly:
“Moments like this make everything feel peaceful.”
0:26 – 0:30
He stands up, waves one paw at the camera with a gentle smile, and says:
“Thanks for exploring with me. See you next time.”
The camera naturally lowers a little as he walks further along the path beside the stream.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089969759790219264/img/-Lx4G6Th-EFd-F_H.jpg" width="600" alt="狐狸在森林溪流边自拍漫游">](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259)

**作者:** @MrDasOnX | **来源:** [原帖](https://x.com/MrDasOnX/status/2089969922617266257) | **发布:** 2026-08-19 | **热度:** 92

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259)**


### 手绘 2D 日本料理动画

> 此高精细度提示词旨在创作一段 15 秒的动画风格烹饪短片，专注于制作可可巧克力面包的过程。通过对铅笔轮廓、赛璐珞阴影及精确摄像机运动的具体指令，实现手工绘制的审美效果。

```
15초, 16:9, text-to-video only. 정확히 6개 장면, 장면당 2.5초. 모든 장면 전환은 효과 없는 clean hard cut. 참조 이미지·시작 프레임·스토리보드 입력 0장. 생성 자연음 포함.

【화풍】
오리지널 일본식 손그림 2D 요리 애니메이션. 완전히 손으로 그린 모습. 부드럽고 또렷한 연필 윤곽에 미세한 선 굵기 변화와 손그림 흔들림을 남긴다. 음식에는 가늘고 따뜻한 선, 손과 도구에는 한 단계 굵은 선. 따뜻한 중간색의 깨끗한 2–3단 풀컬러 셀 채색, 검게 뭉개지는 그림자 없음. 붓 결이 보이는 생활 주방, 얕은 대기 원근, 절제된 아날로그 필름 그레인과 셀 가장자리의 약한 색 번짐. 가나슈와 젖은 반죽에만 강한 스펙큘러 하이라이트. 기존 스튜디오·작가·영화·캐릭터의 고유한 모습을 모방하지 않는다.

【주제와 규칙】
주제: 코코아 초코 식빵. 다크 초콜릿과 생크림으로 차가운 가나슈 시트를 만들고, 코코아 반죽을 치대고 1차 발효까지 진행한다.
화면에는 숙련된 성인 여성 한 명의 팔꿈치 아래와 두 손만 보인다. 아이보리 린넨 소매, 따뜻한 피치베이지 피부, 짧고 칠하지 않은 손톱, 각 손 다섯 손가락, 액세서리 없음. 얼굴·머리·몸통·전신·두 번째 사람 없음. 음식과 조리 과정만 주제다. 각 장면의 주 행동은 정확히 하나이고, 재료 상태는 앞으로만 진행한다. 완성 식빵·구운 빵·성형 로그·내부 초콜릿은 절대 보여주지 않는다.

【장면 구성】
장면1 — 0.00–2.50
카메라: 마모된 오크 도마를 거의 수직으로 보는 높은 부감 클로즈업, 아주 느린 접근. 시작: 포장 없는 다크 커버춰 한 블록과 페일 오크 손잡이 칼 한 자루. 동작: 왼손이 고정하고 오른손이 네 번 따로 자르며 매번 칼날을 완전히 들어 올린다. 변화: 작고 고른 조각 한 무더기. 질감: 건조하고 날카로운 절단면과 작은 부스러기, 녹거나 번들거리지 않음. 연결: 같은 조각 전부가 장면2에 들어간다.

장면2 — 2.50–5.00 ★ 질감의 견장면
카메라: 볼 림 바로 위의 낮은 측면 매크로, 오른쪽으로 아주 느리게 이동. 시작: 장면1의 조각이 뜨거운 생크림 속에서 가장자리부터 녹는다. 동작: 짙은 갈색 실리콘 주걱이 중앙에서 바깥으로 세 번 원을 넓혀 젓는다. 변화: 조각이 사라지고 검고 균일한 가나슈가 되며 마지막 자국이 천천히 닫힌다. 질감: 물처럼 출렁이지 않는 무거운 점도와 좁고 밝은 하이라이트. 연결: 같은 가나슈에 버터와 박력분을 섞어 3mm로 펴고 냉장한다.

장면3 — 5.00–7.50
카메라: 작업대를 내려다보는 고정된 높은 45도 미디엄. 시작: 자연색 유산지 위 22×8cm, 두께 3mm의 냉장 가나슈 시트 한 장. 동작: 두 손이 유산지 양끝을 잡아 한 번 들어 올린다. 변화: 시트가 완만하게 휘지만 처지거나 깨지지 않는다. 질감: 차갑고 유연한 고형물, 좁고 단단한 광택. 연결: 같은 시트 한 장을 차갑게 보류한다.

장면4 — 7.50–10.00
카메라: 스테인리스 볼 입구에 가까운 고정 부감 클로즈업. 시작: 균일한 갈색 마른 가루와 중앙의 차가운 유제품 혼합액. 동작: 주걱이 바닥에서 위로 네 번 접는다. 변화: 날가루가 거의 없는 거칠고 찢어진 셔기 코코아 반죽 한 덩이. 질감: 어두운 젖은 부분, 울퉁불퉁한 표면, 가장자리의 작은 마른 가루. 연결: 같은 반죽과 버터 한 블록이 장면5로 간다.

장면5 — 10.00–12.50 ★ 질감의 견장면
카메라: 작업대 높이의 고정 낮은 측면 미디엄. 시작: 셔기 반죽 중앙에 버터 한 블록. 동작: 두 손이 앞으로 밀고 안쪽으로 접는 동작을 세 번 한다. 변화: 버터 자국과 균열이 사라지고 매끈하고 탄력 있는 짙은 코코아 반죽이 되며 얇은 가장자리 하나가 찢어지지 않고 빛을 통과시킨다. 질감: 젖은 광택이 아닌 탄성광과 글루텐 저항. 연결: 같은 반죽을 같은 볼에서 약 2배까지 발효한다.

장면6 — 12.50–15.00
카메라: 볼 중앙을 향한 높은 45도 매크로, 자국을 향해 아주 느린 접근. 시작: 같은 반죽이 약 2배로 부푼 매끈한 돔. 동작: 검지 하나가 중앙을 누르고 완전히 빠진다. 변화: 가장자리만 천천히 일부 돌아오고 중앙 자국은 얕게 남는다. 질감: 미세한 발효 기포와 부드러운 탄력, 구운 껍질 없음. 연결: 이 발효 완료 상태에서 끝낸다.

【카메라】
장면마다 거리·각도·높이 중 최소 두 가지를 바꾼다. 한 장면 안에서는 고정하거나 지정된 극히 느린 이동만 한다. 휩팬·손떨림·회전·급줌 없음. 무엇이 무엇에 닿는지 항상 읽혀야 한다. 가장 가까운 매크로는 장면2와 장면6에만 쓴다.

【질감과 움직임】
초콜릿 조각→무거운 유화액→차갑고 유연한 시트, 마른 가루→셔기 반죽→매끈한 글루텐→부푼 반죽의 변화가 단계적으로 보인다. 손에는 무게와 동작 뒤 여운이 있고 액체·반죽은 점도·탄성·중력을 따른다. 갑작스러운 모핑이나 상태 회귀 없음.

【빛과 무대】
깨끗한 따뜻한 아침의 생활 주방 한 곳. 흰 쿼츠 작업대와 마모 오크 도마. 프레임 좌상단 창의 부드러운 골드 키, 반대쪽의 약한 쿨 필, 모든 손·도구·재료 아래 같은 방향의 접지 그림자. 현재 장면에 이름이 있는 물체만 보인다.

【물리적 연속성】
같은 커버춰 전량, 같은 가나슈 한 배치와 시트 한 장, 같은 코코아 반죽 한 덩이, 같은 손·소매·볼·주방·광원을 유지한다. 도구와 재료의 개수·크기·재질이 변하지 않는다. 실제 조리 순서와 중력을 지킨다.

【소리】
낮은 생활 주방 룸톤과 화면 속 접촉음만: 마른 칼질, 젖은 주걱 마찰, 유산지 바스락임, 볼 울림, 반죽 점착음, 작은 손가락 점착음. BGM·대사·내레이션·사람이나 동물 음성 없음.

【네거티브】
화면 글자, 제목, 캡션, 자막, 숫자, 라벨, 로고,
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2092215626962190336/img/VSOTkTNsv8yUxFfS.jpg" width="600" alt="手绘 2D 日本料理动画">](https://goodcase.ai/cases/2d-38a41133eab1)

**作者:** riotboy | **来源:** [原帖](https://x.com/i/status/2092217560788000816) | **发布:** 2026-08-25 | **热度:** 91

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/2d-38a41133eab1)**


### 电影感巴黎时尚广告大片：五镜头街拍

> 15 秒五个场景的巴黎街拍广告，每个场景固定 3 秒并写死机位和背景地标，用同一只粉色手袋贯穿全片当身份锚点，靠真实人群和手持质感把广告片拍出街拍抓拍的偶然感。

```
A 15-second hyper-realistic cinematic fashion campaign video. European woman, fair glowing skin, sharp features, wavy blonde hair in sleek high ponytail, small dark rectangular sunglasses, pearl drop earring, oversized light blue black-red graphic streetwear jersey, sage green wide-leg trousers, black pointed-toe heels, babypink smooth leather hobo shoulder bag with gold dome studs hanging naturally on arm throughout all scenes.

Scene 1 · 3 sec Full body wide shot. She stands alone on Paris cobblestone street corner, adjusting sunglasses with one hand, babypink bag hanging naturally on arm, warm golden hour light, real people and city
chaos blurring around her, classic Haussmann buildings background.

Scene 2 · 3 sec Full body shot. She strides boldly across Paris zebra crossing on Champs-Elysees, iced coffee cup in one hand, babypink bag with gold studs swinging on other arm, mouth slightly open as if singing,
bold confident walk, cars and city blurring behind her.

Scene 3 · 3 sec Full cinematic wide establishing shot. She is tiny in center of frame walking down grand Paris
boulevard, Arc de Triomphe massive in background, real crowd of people around her, babypink bag clearly visible as burgundy detail on her arm.

Scene 4 · 3 sec Medium shot. She stops on a sunlit Paris cobblestone street, spontaneous small carefree dance move, arms slightly out, babypink bag swinging naturally, street musician blurred in background, joyful open expression, warm golden light on face.

Scene 5 · 3 sec Medium close-up. She stands inside Paris Metro carriage holding pole, slowly pushes sunglasses up with one finger, slight smirk, babypink bag with gold dome studs clearly visible on arm, moody
warm metro overhead lighting, other passengers naturally blurred in background.

Smooth seamless transitions between all 5 scenes. Overall mood: Candid chaotic Parisian city energy, luxury streetwear editorial, golden hour warmth, shot on Canon EOS R5 35mm f/1.4, Kodak Portra 400 film tone, natural film grain, handheld
camera movement, real people in background every scene, hyper-realistic photography feel, no plastic skin, no robotic movement, no stiff poses, no AI artifacts.

AVOID: cartoon, CGI, plastic skin, robotic movement, stiff poses, blurry face, overexposed, watermark, text overlay, logo, AI generated look, jerky motion, empty streets, studio background, fake crowd, extra fingers, deformed
```

[<img src="https://media.goodcase.ai/media/poster/youmind-paris-fashion-campaign-streetwear.jpg" width="600" alt="电影感巴黎时尚广告大片：五镜头街拍">](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear)

**作者:** Sharon Riley | **来源:** [原帖](https://x.com/Just_sharon7/status/2083793251132186998) | **发布:** 2026-08-02 | **热度:** 91
**复测：** MiniMax H3 768p · 2026-08-11 · ✅ 复现 · [产物](https://media.goodcase.ai/retests/youmind-paris-fashion-campaign-streetwear/video-minimax-h3-768p-20260811-top-heat/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear)**


### 梅林元素功夫表演

> 来自 X / 𝕏 的真实 视频 案例，由 @aimikoda 发布。适合观察 Prompt 结构、素材组织和可复用的创作模式。

```
GPT Image 2 Prompt:

Create a raw kung fu performance storyboard focused on extreme physical action. Use reference image for the character.

16:9 storyboard sheet, 12 cinematic panels. The actual storyboard drawings must be black and white only: rough pencil lines, minimal detail, fast gesture drawing energy, simple anatomy construction and strong silhouette readability. Keep the artwork lightweight, dynamic and unfinished like early fight choreography previs.

Start directly in action. Do not begin with a calm stance, preparation shot or slow introduction.

A solitary female performer executes an aggressive Tibetan kung fu master-style routine inside a vast ancient temple. The choreography is exaggerated, explosive and constantly escalating: flying diagonal kicks, monk-style low stances, rapid palm strikes, spinning cloth-like body turns, animal-form hand shapes, deep lunges, aerial twists, floor-level sweeps, sudden drops, claw-like blocks, back-arched jumps, sliding recoveries and violent sculptural impact poses.

Every panel must contain visible motion and strong body momentum. Avoid static standing poses. The performer should feel like a ritual warrior moving with discipline, fury, spiritual pressure and total body control.

Action progression:
1. begin mid-air with a flying diagonal kick already in motion
2. handheld close-up palm sweep cutting through air
3. orbiting wide shot of a full-body spin
4. low-angle impact palm strike with shockwave
5. long-lens side profile spinning kick
6. top-down aerial turn with body, hair and fabric flaring outward
7. hard floor stomp cracking the temple stone
8. sliding low sweep across the floor
9. aggressive close-up flurry of elbows, palms and backfist strikes
10. extreme low monk-style beast stance with energy rising
11. spinning elemental vortex around the body
12. final airborne action pose, suspended above the temple floor, body twisted in a powerful kung fu strike, all elements converging around her before impact

Add selective elemental energy effects as VFX-style storyboard accents. The effects should feel spiritual, ritualistic and cinematic, not superhero-like:
air bursts around spins and flying kicks,
dust and stone fragments lifting from stomps,
water-like floor ripples during slides,
fire-like trails around explosive strikes,
heat distortion around high-intensity movement,
elemental vortex near the climax.

Element progression:
early panels: subtle wind, dust and pressure lines
middle panels: stronger stone fragments, floor ripples and air shockwaves
late panels: controlled fire trails and energy spirals
final panel: the strongest combined elemental surge while the performer is still airborne

Use cinematic arthouse action camerawork:
handheld energy,
whip-pan feeling,
orbiting camera moves,
overhead shots,
side silhouettes,
aggressive close-ups,
long-lens compression,
extreme low angles,
wide negative space,
strong parallax.

Keep the temple environment minimal and atmospheric:
towering stone columns,
worn temple floor,
drifting incense smoke,
hanging fabric,
harsh light shafts,
faint dust in the air,
subtle wet floor reflections.
Do not overcrowd the frames.

Annotation color system:
red arrows = body movement
blue arrows = camera movement
green marks = framing / composition notes
orange marks = lighting direction
yellow marks = elemental VFX / energy effects
black text = short lens notes and panel labels

No timestamps. No dialogue. No singing. No extra characters. No enemies. No logos. No watermark.


Seedance 2.0 Prompt:

Create a 15-second cinematic kung fu performance video.

Use @[image1]  as the fixed character sheet reference. The character must strictly match the character sheet.
Use @[image2]  as the storyboard reference.

Follow the storyboard shot by shot as the main source for action order, camera rhythm, body movement, framing, movement direction, camera angles and visual progression. Treat each storyboard panel as a sequential keyframe. Preserve the shot order and make the video feel like the storyboard has been translated into continuous live-action motion. The sequence must end on a frozen final frame while the performer is still airborne.

Do not add text, captions, storyboard labels, arrows, UI, logos or watermarks. Do not treat the storyboard as a single image. Do not redesign the character, change the costume or alter the face. Do not begin with a calm stance, preparation pose or slow introduction. Do not make the elemental effects look like superhero powers or excessive fantasy glow.

Visual style:
stylized cinematic realism, high-end 3D painterly animation quality, dynamic cloth simulation, expressive silhouette design, rich cinematic lighting, controlled color palette, natural motion blur, dramatic scale, beautiful but aggressive physicality, premium feature-animation aesthetic.

Environment:
vast ancient temple, towering stone columns, worn temple floor, drifting incense smoke, hanging fabric, harsh light shafts, faint dust in the air, subtle wet floor reflections, high contrast shadows.

The performance is a solitary female kung fu routine inside a vast ancient temple. The routine starts immediately in action, with no calm stance, no preparation pose and no slow introduction. The movement should feel aggressive, ritualistic, disciplined, physically extreme and spiritually charged.

This is not a fight against an enemy. It is a solo performance of force, control, exhaustion, fury and release.

Follow story board for choreography direction.

Element progression:
early sequence: subtle wind, dust and pressure lines responding to movement.
middle sequence: stronger air shockwaves, stone fragments, floor cracks and water-like ripples across the temple floor.
late sequence: controlled fire trails, heat distortion and energy spirals around explosive strikes and kicks.
climax: wind, dust, stone, water ripple and fire accents combine into a stronger elemental vortex.
final beat: the performer is airborne above the temple floor in a powerful kung fu strike, body twisted mid-air, hair and fabric flaring outward, with all elements converging around her before impact.

Elemental VFX must feel spiritual, ritualistic and cinematic. The effects should be integrated with the choreography and motivated by physical movement. Keep the energy raw, elemental, atmospheric and grounded in the temple environment.

Use Laban movement logic throughout:
weight: strong, heavy, grounded during impacts, with brief lightness during jumps and aerial twists
time: quick during strikes, kicks, drops and turns, sustained during suspended holds and recovery transitions
space: direct during attacks, blocks and lunges, indirect during spinning turns and elemental vortex moments
flow: bound during rooted stances and precise strikes, free during aerial motion, spinning fabric movement and elemental release
```

[<img src="https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg" width="600" alt="梅林元素功夫表演">](https://goodcase.ai/cases/real-case-06-aimikoda)

**作者:** @aimikoda | **来源:** [原帖](https://x.com/aimikoda/status/2054460932068200517) | **发布:** 2026-05-13 | **热度:** 91
**稳定度：** 86/100

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/real-case-06-aimikoda)**


### Seedance 2.0 电影感东亚女性生活方式短片

> Made with seedance 2.0 Prompt: Create a cinematic, photorealistic lifestyle video of a young East Asian woman in a cozy

```
Create a cinematic, photorealistic lifestyle video of a young East Asian woman in a cozy modern apartment by the sea. The video has a warm, natural morning atmosphere with soft daylight coming through large windows, realistic skin texture, subtle facial expressions, natural body movements, shallow depth of field, and smooth cinematic camera motion.

Scene 1 — Bedroom:
A young woman with long straight dark hair, wearing a light beige/pink satin pajama set, sits on the edge of her bed looking sleepy. She gently yawns and rubs her eyes. The bedroom is minimal and modern, with a neatly made bed, wooden furniture, soft curtains, and large windows letting in diffused natural light.

Scene 2 — Bed:
She pulls and adjusts the duvet, then sits and stretches slightly on the bed. Capture her natural sleepy morning routine with realistic movements and a calm atmosphere.

Scene 3 — Leaving Bedroom:
She stands up and slowly walks toward the bedroom doorway. The camera remains cinematic and slightly distant, showing the warm wooden interior and softly illuminated bedroom in the background.

Scene 4 — Cooking:
Cut to the kitchen. Close-up of a black electric sandwich/waffle-style press on the kitchen counter. The woman pours smooth light-brown batter into the heated mold. Use detailed macro shots of the batter flowing into the appliance.

Scene 5 — Preparing Food:
She operates the sandwich maker on the kitchen counter and carefully checks the food while cooking. Show realistic hand movements, steam/heat details, kitchen reflections, and natural daylight coming through the nearby window.

Scene 6 — Eating:
She opens the appliance and removes a freshly cooked golden-brown waffle/pastry. She holds it with both hands, takes a bite, then smiles naturally with a satisfied expression.

Visual style: photorealistic, cinematic lifestyle commercial, natural morning lighting, warm neutral color palette, realistic Asian facial features, authentic skin texture, detailed hair strands, realistic fabric physics, soft shadows, subtle film grain, shallow depth of field, professional cinematography, smooth transitions, realistic handheld camera movement, 4K quality.

Camera: combination of medium shots, close-ups, macro food shots, slow push-ins, gentle tracking shots, and shallow-depth-of-field portrait shots.

Mood: cozy, peaceful, warm, relaxing morning routine, premium lifestyle advertisement.

Aspect ratio: 16:9
Duration: approximately 20 seconds
No text, no subtitles, no watermark, no logo, no distorted hands, no extra fingers, no unnatural facial movements, no cartoon/anime appearance.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088846255892107264/img/gR7hMidmmMu7upFi.jpg" width="600" alt="Seedance 2.0 电影感东亚女性生活方式短片">](https://goodcase.ai/cases/aiwithelisia-seedance-ai-e7e817c4c4b8)

**作者:** @AiwithElisia | **来源:** [原帖](https://x.com/AiwithElisia/status/2088846290130190784) | **发布:** 2026-08-16 | **热度:** 90

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/aiwithelisia-seedance-ai-e7e817c4c4b8)**


### Erling Haaland 黏土动画园艺

> 一个关于足球明星 Erling Haaland 种植韭菜的幽默 3D 黏土动画提示词，包含生动的角色动作和奇幻的灯光效果。

```
Create a 3D claymation-style animation of a cute caricature of Erling Haaland wearing Norway's red number 9 football kit, white shorts, red socks, and red boots, with his signature blonde ponytail, walking across a simple muted green background while carrying a giant leek on his shoulder and a bucket of harvested leeks. He stops at a dirt mound, digs a deep hole with a hand trowel, plants the giant leek firmly into the soil, pats it down, then takes out his smartphone, flashes a peace sign with a playful wink, and captures a celebratory selfie. Smooth, expressive character animation with whimsical, humorous, cinematic lighting.
```

[<img src="https://media.goodcase.ai/media/poster/erling-haaland-525acabe78da.jpg" width="600" alt="Erling Haaland 黏土动画园艺">](https://goodcase.ai/cases/erling-haaland-525acabe78da)

**作者:** NoorAI | **来源:** [原帖](https://x.com/i/status/2079818537137475762) | **发布:** 2026-07-22 | **热度:** 89
**复测：** MiniMax H3 768p · 2026-08-11 · ⚠️ 降级 · [产物](https://media.goodcase.ai/retests/erling-haaland-525acabe78da/video-minimax-h3-768p-20260811-top-heat/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/erling-haaland-525acabe78da)**


### 猫咪自拍记录温馨的一天

> Just a normal day in the life of a very busy cat 🐱✨ Created with Seedance 2.5 on @wavespeed_ai Prompt: Create a 60-seco

```
Create a 60-second realistic day-in-the-life cat vlog, following the same cute cat from waking up in the morning until falling asleep at night.

Critical Requirement

NO HUMAN SPEECH AND NO DIALOGUE.

The cat must not speak any words at any point. Do not use narration, voice-over, human voices, subtitles, captions, or text.

The story must be communicated entirely through the cat’s actions, facial expressions, body language, meows, purrs, chirps, yawns, and natural environmental sounds.

Overall Visual Style

One continuous handheld front-facing smartphone selfie-vlog perspective. The cat holds the phone itself with its paw and films its own day.

- Realistic modern smartphone footage
- Natural handheld shake
- Slight framing imperfections
- Occasional autofocus hunting
- Natural front-camera lens distortion
- Realistic unfiltered smartphone colors
- Soft natural morning, afternoon, and evening lighting
- Same cat, face, fur pattern, eyes, and body throughout
- Cute but believable cat behavior
- Natural expressions and movements
- No cinematic camera movements
- No third-person camera
- No tripod or external camera
- No beauty filter or cinematic color grading
- No logos, watermarks, subtitles, captions, or on-screen text
- No background music

0–10 sec — Wake Up

The cat wakes up in a cozy bed.

It picks up the phone with its paw and starts filming itself selfie-style.

It looks sleepy, yawns, stretches, rubs its face with its paws, and looks into the camera with sleepy eyes.

It gives a tiny “meow”, then climbs out of bed.

10–20 sec — Breakfast

The cat walks into the kitchen while filming itself.

It sees its food bowl and immediately becomes excited.

It prepares or receives its breakfast, eagerly eats, then drinks water.

It looks happily into the camera and gives a couple of excited little meows.

Include realistic food-bowl sounds, chewing, drinking, and kitchen ambience.

20–30 sec — Playtime

The cat grabs its favorite toy.

It runs around the house, chases the toy, jumps onto the couch, bats at it with its paws, and playfully rolls around.

The phone shakes naturally during the energetic movement.

The cat stops for a moment, looks directly into the camera, gives a playful chirp/meow, then immediately runs off again.

30–40 sec — Exploring

The cat explores the house.

It looks through a window, watches birds outside, investigates a strange sound, walks into another room, and sniffs interesting objects.

It notices something outside and becomes curious.

The cat makes a soft “mrrp” sound and continues exploring.

Keep the behavior authentically feline rather than human-like.

40–50 sec — Afternoon Adventure

The cat safely goes outside into a garden or quiet courtyard.

It walks around while filming itself, sniffs flowers and plants, watches birds, investigates leaves, and explores its surroundings.

The cat pauses, looks excitedly at something off-camera, then gives a small curious meow.

Use natural outdoor sounds such as birds, wind, leaves, distant traffic, and footsteps.

50–60 sec — Evening & Bedtime

The cat returns home as the light becomes warm and soft.

It has its evening meal, drinks some water, then climbs onto the couch or back into its bed.

It grooms itself, yawns, becomes sleepy, and curls into a comfortable position.

It looks into the phone one last time, gives a tiny sleepy meow, slowly closes its eyes, and lowers the phone naturally.

End with quiet nighttime home ambience.

Final Audio Requirements

Absolutely no dialogue. No words. No narration. No human voice. No talking cat.

Use only natural diegetic sounds:

- Cat meows
- Purring
- Chirping
- Yawning
- Footsteps
- Food and water sounds
- Toy sounds
- Household ambience
- Birds and outdoor sounds
- Wind and leaves
- Natural nighttime ambience

The finished video should feel like a realistic, cozy smartphone vlog from a cat’s perspective, showing what the cat naturally does throughout an entire day without saying a single word.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2091384164763459584/img/S0gphFE1BfStvneS.jpg" width="600" alt="猫咪自拍记录温馨的一天">](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867)

**作者:** @ZaraIrahh | **来源:** [原帖](https://x.com/ZaraIrahh/status/2091385137133219971) | **发布:** 2026-08-23 | **热度:** 89

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867)**


### Seedance 双角色 2D 动漫：小风筝的十四秒冒险

> A little kite, a little adventure, and lots of happy moments. Sometimes the simplest days make the sweetest memories. Cr

```
Create a cute cinematic 14-second 2D anime-style video featuring two completely new child characters in a sunny park: a girl with long dark-brown hair, expressive brown eyes, a pink dress, white socks and pink shoes, and a boy with messy black hair, dark eyes, a blue hoodie, black shorts and white sneakers. Keep their new faces, hairstyles, outfits and proportions consistent. They happily fly a bright orange-red kite through the colorful park until a strong breeze sends it into a tall tree. The boy uses a fallen branch to free the kite while the girl helps, and they catch it together with happy smiles before running through the park and flying it again in warm golden sunlight. Use beautiful Japanese anime-inspired 2D animation, clean line art, expressive eyes, soft cel shading, vibrant colors, detailed backgrounds, smooth movement, cinematic lighting and natural wind effects. No face changes, character redesign, extra characters, duplicates, distorted faces or hands, flickering, photorealism, 3D style, text, logo or watermark.  smooth cinematic anime animation.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089563317417525248/img/4yIFctFJri8vuvte.jpg" width="600" alt="Seedance 双角色 2D 动漫：小风筝的十四秒冒险">](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55)

**作者:** @Lianaalane | **来源:** [原帖](https://x.com/Lianaalane/status/2089563357074559014) | **发布:** 2026-08-18 | **热度:** 89

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55)**


### Seedance 2.5 超写实微距延时：种子发芽十秒

> Seedance 2.5 on @Vorla_AI ❤️ Prompt: Create a 10-second ultra-realistic cinematic macro time-lapse video 🌱🎥, using the

```
Create a 10-second ultra-realistic cinematic macro time-lapse video 🌱🎥, using the provided reference image as the exact visual starting point. Begin with the same tiny green seedling 🌱 emerging from dark, rich, slightly moist soil. Keep the camera completely locked and stationary 📷, preserving the same composition, camera angle, depth of field, warm natural sunlight ☀️, soft background bokeh, and realistic soil texture throughout the entire video.

0–2 seconds 🌱: The tiny seedling slowly pushes upward from beneath the soil. Small cracks and subtle soil movement appear naturally around its base as the plant emerges. The thin green stem gradually becomes taller while the two young leaves slowly unfold and expand 🍃.

2–4 seconds 🌿: The seedling continues growing into a young tomato plant. The stem becomes thicker and taller, while additional green leaves and small branches gradually emerge. Each leaf unfolds naturally with visible veins and realistic botanical detail 🍃✨. Gentle sunlight passes through the leaves ☀️, creating beautiful natural highlights.

4–6 seconds 🌼: The plant grows fuller and stronger. Small yellow tomato flowers 🌼 begin appearing on the branches. The flowers gradually develop and bloom one by one, with delicate petals opening naturally. The plant continues extending upward and outward in a smooth time-lapse 🌿.

6–8 seconds 🍅: After flowering 🌼, tiny green tomatoes 🍅 begin forming beneath the flowers. The fruits slowly enlarge from tiny green buds into recognizable round tomatoes. More tomatoes develop across the branches while fresh leaves continue growing around them 🌿🍃.

8–10 seconds 🍅❤️: The green tomatoes gradually mature and transform into large, ripe, vibrant red tomatoes 🍅❤️. End with a healthy, fully grown tomato plant 🌿 surrounded by several beautiful ripe tomatoes hanging naturally from its branches.

Make the entire transformation smooth, continuous, organic, and biologically believable 🌱➡️🌿➡️🌼➡️🍅. Use photorealistic textures, realistic plant anatomy, detailed leaves and veins, natural soil particles, subtle wind movement 🍃, warm golden-hour sunlight ☀️, cinematic depth of field 🎥, soft background bokeh ✨, realistic shadows, macro photography quality, and highly detailed 4K visuals.

Important: No cuts ❌, no transitions ❌, no camera movement ❌, no zoom ❌, no camera shake ❌, no text ❌, no people ❌, no hands ❌, and no artificial-looking morphing ❌. The plant must grow progressively from the exact location of the original seedling, with every stage naturally connected to the previous stage. The final result should look like a real professional botanical time-lapse 🌱🎥🍅, showing the complete journey from a tiny seedling to a mature tomato plant full of ripe red tomatoes. 🍅✨
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088998792817459200/img/WBmU38vVpswUN8g8.jpg" width="600" alt="Seedance 2.5 超写实微距延时：种子发芽十秒">](https://goodcase.ai/cases/yesandyou-seedance-ai-d92a0a788b85)

**作者:** @Yesandyou_ | **来源:** [原帖](https://x.com/Yesandyou_/status/2088998841395921185) | **发布:** 2026-08-16 | **热度:** 89

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/yesandyou-seedance-ai-d92a0a788b85)**


### Korean Fantasy Romance Drama

> A cinematic script prompt for a fantasy romance K-drama that follows two star-crossed lovers through different eras, from ancient kingdoms to modern Seoul.

```
Create a 2-minute ultra-realistic Korean fantasy romance cinematic mini-series following the same two main characters throughout every scene. Begin in an ancient Korean kingdom where the immortal warrior Ji Han promises to find his lost love again, sealing his vow with a magical necklace. Transition to modern Seoul, where fate reunites him with Seo Ra, a woman who has no memory of their past life but feels an undeniable connection to him. Show their growing romance through quiet café moments, rainy walks, rooftop conversations, and joyful everyday memories. As love blossoms, an ancient enemy returns, forcing Ji Han to reveal his supernatural powers and sacrifice himself to protect Seo Ra. End years later with an emotional reunion at sunset, proving that true love can overcome time, death, and destiny.

Ultra-realistic Korean actors, cinematic K-drama visuals, emotional performances, natural lighting, fantasy magic effects, professional movie camera, authentic Seoul locations, Korean dialogue with English subtitles, emotional OST, 4K cinematic masterpiece.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2079581603408560128/img/zDEh3fo_03GZID-O.jpg" width="600" alt="Korean Fantasy Romance Drama">](https://goodcase.ai/cases/korean-fantasy-romance-drama)

**作者:** Julia Clark | **来源:** [原帖](https://x.com/i/status/2079586851862835248) | **发布:** 2026-07-21 | **热度:** 88

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/korean-fantasy-romance-drama)**


### 泥土中诞生的罐中小鸟

> Made with Seedance 2.5 on @HighSignal_AI 🎬 MAIN VIDEO PROMPT Use the uploaded image as the exact visual reference. Crea

```
Made with Seedance 2.5 on @HighSignal_AI 

🎬 MAIN VIDEO PROMPT

Use the uploaded image as the exact visual reference. Create a highly detailed, cinematic 10-second magical transformation video. Keep the overall composition, character appearance, lighting, camera quality, and environment consistent with the reference.

⏱️ 0–2 seconds — Jar & Mud
The subject is holding a small transparent glass jar/container carefully in both hands. Inside the jar is thick, dark, moist magical mud/soil with realistic texture. The camera slowly pushes toward the jar, focusing on the mud. Tiny particles of soil begin to move naturally.

🌱 2–5 seconds — Mud Comes Alive
The mud inside the jar starts gently swirling and rising as if something is forming underneath it. Small cracks appear across the surface of the mud. Tiny pieces of soil lift into the air and fall naturally. A subtle magical glow begins to emerge from inside the mud, while keeping the scene photorealistic rather than cartoonish.

🐣 5–8 seconds — Bird Emerges
A small realistic bird slowly emerges from the mud inside the jar. First, its tiny head appears, followed by its neck, wings, and body. Wet mud naturally falls away from its feathers as it comes out. The bird gradually becomes fully formed, with extremely detailed feathers, realistic eyes, tiny beak, and natural movements. The emergence should feel magical but physically believable.

🐦 8–10 seconds — Final Moment
The bird completely emerges from the mud and gently spreads its wings. A few tiny pieces of mud fall back into the jar. The bird looks around naturally and gives a subtle wing movement. The camera finishes with a beautiful close-up of the bird sitting on/above the mud inside the jar, creating a mysterious and magical final shot.

🎥 CAMERA & VISUAL STYLE

Duration: 10 seconds
Format: 9:16 vertical
Ultra-photorealistic
Cinematic fantasy realism
Smooth slow camera movement
Macro-style detail on mud and feathers
Realistic depth of field
Natural lighting and shadows
Detailed glass reflections
Realistic mud physics
Smooth motion with strong temporal consistency
No sudden camera movements
No cuts
No transitions
No camera shake

🪶 BIRD DETAILS

The bird should look completely realistic:

Extremely detailed individual feathers
Natural feather movement
Realistic eyes and beak
Correct bird anatomy
Natural wing structure
Realistic proportions
Wet mud sticking temporarily to feathers
Mud naturally falling away as the bird emerges
Subtle breathing and head movement
Natural wing movement

🚫 NEGATIVE PROMPT

cartoon, anime, CGI-looking bird, fake feathers, deformed bird, malformed wings, extra wings, extra legs, extra eyes, multiple birds, duplicate bird, bird suddenly appearing, bird teleportation, unnatural bird anatomy, giant bird, oversized bird, disappearing bird, distorted mud, floating mud, unrealistic mud physics, excessive magic effects, cartoon magic, excessive glowing particles, explosions, smoke, fire, distorted jar, broken glass, melting glass, changing jar shape, extra hands, deformed fingers, missing fingers, distorted hands, face distortion, blurry, low resolution, pixelated, oversaturated, excessive bloom, excessive lens flare, camera shake, fast zoom, sudden movement, flickering, ghosting, frame interpolation artifacts, object morphing, inconsistent lighting, watermark, logo, text, subtitles, UI elements.

✨ FINAL QUALITY

Photorealistic cinematic fantasy, highly detailed wet mud, realistic glass, physically accurate lighting, natural bird anatomy, extremely detailed feathers, believable mud-to-bird transformation, smooth 10-second animation, consistent objects and environment, premium cinematic quality, realistic depth of field, 4K-quality detail.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2090075417994747904/img/amG0OoldLjFHE9LV.jpg" width="600" alt="泥土中诞生的罐中小鸟">](https://goodcase.ai/cases/yesandyou-seedance-ai-2a9dc20c947d)

**作者:** @Yesandyou_ | **来源:** [原帖](https://x.com/Yesandyou_/status/2090075447195480403) | **发布:** 2026-08-19 | **热度:** 88

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/yesandyou-seedance-ai-2a9dc20c947d)**


### Seedance 灾难现场拍还是跑：第一视角短片

> Would you take out your phone to make videos or run first? Seedance 2.5 on @DomoAI_ prompt LIVE-ACTION CINEMATIC REALISM

```
Would you take out your phone to make videos or run first?

Seedance 2.5 on @DomoAI_ 

prompt

LIVE-ACTION CINEMATIC REALISM. Every frame is photographed as real live-action footage: a real adult woman, real city, real pedestrians, real domestic pets, and a real enormous mascot plush statue. Real skin with pores, real wavy blonde hair with individual strands, real cotton, nylon, leather, metal, wet asphalt, glass, concrete and plush fibers. No illustration, painting, anime, CGI, 3D render, or artificial surface.

CHARACTER LOCK:

The same clearly adult street-fashion archer from @[Image 1](image_1) in every shot. Preserve her exact face, natural facial geometry, dark eyes, skin tone, expression, extremely long straight wavy blonde hair, thick blunt bangs, and royal-blue backward baseball cap with small decorative details but no readable text. She is 178 cm tall, XS size, very slim elongated runway-model proportions. Her outfit never changes: oversized white-to-light-grey graphic cotton T-shirt with a deep plunging neckline that that accentuates her large cleavage., faint doodle motifs but no readable lettering, dusty rose-pink wide cargo trousers with dimensional pockets and heavy folds, black belt with silver hardware, colorful keychain charms, layered bead necklaces, and red low-top sneakers with white soles.
ARCHERY GEAR:
She carries a long dark laminated-wood recurve bow with a leather-wrapped grip, visible taut string, realistic curved limbs and subtle wear. A dark-brown leather quiver crosses diagonally over her back, holding six to eight arrows with natural wood shafts and cream-white feather fletching. She wears matching brown leather archery gloves with stitched palms, reinforced knuckles and wrist straps, plus a fitted leather forearm bracer on the bow arm and a slim finger tab or draw glove. The archery equipment is integrated into her street-fashion styling, not a historical costume.
LOCATION:
A dense urban shopping district and pedestrian plaza at blue hour, wet asphalt reflecting storefront light, concrete towers, glass façades, crosswalk signals, street lamps, overhead transit lines, narrow side streets, urban haze, and a large original unbranded mascot plush statue installed in the center of the plaza. The mascot is enormous, approximately three stories tall, with a soft cream-and-pastel plush body, oversized rounded head, expressive embroidered eyes, visible seams, padded limbs and tactile fabric. No copyrighted character, logo or readable text.
STORY — 12 SHOTS, ONE CONTINUOUS EVENT:
1. 0–1.5s, LOW WIDE. Camera whips right past two foreground pedestrians and a street barrier. She bursts through the wet plaza at a low run, bow held low, red sneakers splashing lightly, dusty rose cargo fabric and extremely long hair streaming behind her.
2. 1.5–3s, EXTREME CLOSE, LOCKED. A commuter’s eyes appear above a scarf behind a transparent umbrella. The eyes snap toward the plaza as nearby city lights reflect across the wet plastic.
3. 3–4.5s, CLOSE, FAST PUSH-IN. Two pedestrians and their leashed pets in the distance suddenly turn toward the giant mascot statue. A small dog raises its ears while a cat inside a carrier shifts and looks outward.
4. 4.5–6s, TRACKING MEDIUM. Camera runs beside her through the moving crowd at shoulder height. People step aside, coats and shopping bags sway, her long black hair, oversized T-shirt and cargo trousers carry real momentum as she reaches toward the quiver.
5. 6–7.5s, LOW ANGLE CLOSE. Her red sneaker plants on the wet pavement. She straightens hard and raises the dark recurve bow into frame. The giant mascot statue is visible far behind her between buildings.
6. 7.5–9s, MEDIUM FROM HER LEFT. Camera orbits behind her as she draws an arrow from the quiver, nocks it and pulls the string to full draw. The bow limbs flex visibly; pedestrians freeze at a safe distance, watching.
7. 9–10.5s, MACRO, LOCKED, razor-shallow focus. Her leather-gloved fingers grip the string, stitched glove texture, finger tab and arrow shaft sharply resolved. Her eye, blue cap and city lights remain soft behind. The string creeps back the last centimetre. The crowd noise drops for one hard beat.
8. 10.5–12s, WIDE FROM BEHIND AND ABOVE THE ARROW, LOCKED. She releases. The string snaps and blurs. The arrow tears forward between streetlights and glass buildings toward the giant mascot statue.
9. 12–14s, MEDIUM CLOSE TRACKING THE ARROW. The arrow breaks apart in mid-air: its front half dissolves into millions of bright rose-pink glitter particles streaming behind it, each particle catching the city light separately while the feathered tail remains intact. The arrow has no point.
10. 14–16s, WIDE LOW ANGLE. The glitter stream strikes the plush mascot’s chest and races through its seams as a bright rose-pink wave. Plush fibers ripple outward from the impact point. Pink reflections pulse across the wet pavement and nearby windows.
11. 16–18s, WIDE LOW ANGLE, FAST PULLBACK. The enormous mascot plush statue activates and rises into a fully living presence. Its padded head lifts, embroidered eyes illuminate softly, oversized arms move, seams flex, and rose-pink glowing fabric appliqués spread across its plush surface from the impact point. It remains clearly soft, textile-based and physically heavy, not a CGI monster.
12. 18–20s, FINALE, WIDE FROM BEHIND. Camera rises behind her as she lowers the bow and lets her weight settle naturally onto one hip. She looks up at the awakened mascot with a small confident smile. Pedestrians gather and react, some stepping backward, others pointing or raising phones. Dogs tug lightly at their leashes, a small pet in a carrier shifts, and the giant mascot waves slowly above the plaza. Glitter continues to fall through the city light.
Vary the framing aggressively: extreme close-up, macro, close, medium, tracking, low wide and overhead. Never repeat the same shot type twice consecutively. Shots 2, 7 and 8 are locked; all others use clear camera movement. Every action must be instantly readable.
LOOK:
Photorealistic live-action large-format colour film with a refined three-strip Technicolor response. Concrete, glass, asphalt and distant architecture remain cool blue-grey and slightly desaturated. Saturated colours are the royal-blue cap, dusty rose cargo trousers, red sneakers, colorful keychain charms, rose-pink glitter, and the cream-and-pastel mascot plush. Fine photochemical grain, subtle halation on streetlights and glitter, realistic wet reflections, tactile cotton, nylon, leather, metal and plush fibers. Photographed reality, never drawn.
LIGHTING:
Blue-hour city light mixed with warm street lamps and storefront spill at approximately 4200K. Cooler sky fill at 4:1. Streetlights rim her long black hair, cap, bow and quiver. Thin urban mist and steam rise from vents and wet pavement. The glitter emits separate rose-pink specular points and casts soft pink reflections onto the mascot, asphalt, glass and her face.
CAUSE AND EFFECT:
Pedestrians and pets notice the strange event before the transformation, so their final reactions read as consequences. The glitter must visibly travel in sequence: arrow releases, arrow breaks apart, particles stream through the city, glitter strikes the mascot chest, light travels through the seams, the plush statue activates, then the crowd and pets react. Never cut directly to an already-animated mascot.
PHYSICS:
Real mass, real air and believable momentum. Bow limbs flex, string snaps, arrow flight has directional force, glitter behaves as millions of separate solid particles carried by fast air, and plush fabric compresses, ripples and rebounds with weight. Cargo fabric, T-shirt, hair, quiver strap and keychains respond to acceleration. Wet pavement reflects movement without becoming a mirror. The giant mascot moves slowly because of its padded mass. No slow motion; all shots run at real-time speed.
AUDIO:
Wet footsteps, light splashes, distant traffic, pedestrian chatter, shopping bags and coats moving, dog tags and leash tension, a faint pet sound, bowstring creak, sharp release snap, arrow hiss, crystalline glitter shimmer, plush fabric shifting, soft mechanical-like seam tension, crowd gasps and footsteps. No music.
ON-SCREEN TEXT:
None. No readable text, subtitles, numbers, captions, UI, logos, brand marks or watermark anywhere.
OUTPUT:
20 seconds, horizontal 16:9, 4K, continuous cinematic live-action realism. #DomoAi #DomoAiCPP
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089577363642400768/img/kSbDTT0Pmlsmv2qC.jpg" width="600" alt="Seedance 灾难现场拍还是跑：第一视角短片">](https://goodcase.ai/cases/just-sharon7-seedance-ai-9c64e481a51d)

**作者:** @Just_sharon7 | **来源:** [原帖](https://x.com/Just_sharon7/status/2089578815219785888) | **发布:** 2026-08-18 | **热度:** 88

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/just-sharon7-seedance-ai-9c64e481a51d)**


### 法式牛角包制作过程

> 来自 X / 𝕏 的真实 视频 案例，由 @TechieBySA 发布。适合观察 Prompt 结构、素材组织和可复用的创作模式。

```
GPT Image 2 Storyboard prompt:

“Create a crisp, clean infographic storyboard poster for THE CROISSANT BAKER. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright vivid colors — warm golden yellows, rich buttery creams, flaky browns, soft pastry whites, warm French bakery morning light.
Top header:

THE CROISSANT BAKER
TOTAL VIDEO TIME: 12 SECONDS
8 SHOTS · WARM · FLAKY · IRRESISTIBLE
Legend icons: ACTION, HEAT, TIME HINT, INGREDIENT
Thin warm golden accent line running full width beneath header

Same Pixar-style young French male baker throughout: white baker's jacket, flour-dusted hands, warm authentic French boulangerie setting, marble countertop, warm morning light streaming through windows, bread racks in background. Bright, warm, delicious. Every panel a completely different composition and color.
8 panels:

THE OPENER — Wide shot of baker arriving at the boulangerie before dawn, tying apron, switching on the warm kitchen lights, marble counter visible, bread racks behind, flour dusting the air, full world established, bright and cinematic
THE BUTTER BLOCK — Baker slams a massive cold block of European butter onto the marble counter with both hands, dramatic impact, flour cloud puffing up, close-up on hands, this is the bones moment — the start of everything
THE LAMINATION — Baker folding the dough over the butter block precisely, rolling pin pressing down hard, layers building, side angle shot showing the beautiful layering beginning, confident and skilled
THE ROLL — Dough rolled out into a large thin sheet, baker leaning into the rolling pin with full body weight, marble counter, flour dusting everywhere, wide shot showing the scale of the dough
THE SHAPE — Triangles cut from the dough, baker rolling each one from the wide end into a tight crescent, hands moving fast and confident, close-up on the shaping, beautiful and precise
THE EGG WASH — Baker brushing golden egg wash over each shaped croissant with a pastry brush, each one glistening beautifully, close-up overhead angle, warm golden color, stunning composition
THE OVEN — Croissants slid into the blazing hot oven on a tray, oven door closed, through the oven glass croissants visibly puffing and turning deep golden, layers separating dramatically, warm orange glow
THE TEAR — Baker pulls a perfect golden croissant from the rack, holds it up, tears it open slowly revealing hundreds of impossibly flaky buttery layers inside, steam escaping, butter glistening — this is the cheese pull moment, the hero shot of the entire video

Footer:

VIDEO FLOW: 8 shots × 1.5s = 12 seconds. Butter block to the tear.
CAMERA TIPS: wide on opener, close-up on butter slam and shaping, side angle on lamination, overhead on egg wash, oven glass for panel 7, extreme close-up on the tear reveal
LIGHT & STYLE: warm golden French bakery morning light, buttery cream tones, flour dust in the air, bright vivid Pixar colors, shallow depth of field on close-ups
BAKER NOTES: one baker, one perfect croissant, one irresistible tear. The lamination layers and the final tear are everything — make them stunning.”

Seedance 2.0 prompt:

“Use the attached THE CROISSANT BAKER storyboard image as the exact reference.
Create a 12-second 16:9 animated croissant-making sequence that follows the 8-shot storyboard exactly. Preserve the same Pixar-style young French male baker, white jacket, flour-dusted hands, warm authentic French boulangerie, marble counter, and bright golden color aesthetic throughout.
Rules:
•Follow the sequence exactly from 1 to 8
•One shot per panel, approximately 1.5 seconds each
•No skipped steps, no extra steps beyond the storyboard
•Maintain character and bakery continuity throughout
•Emphasize the butter slam, lamination layers, crescent shaping, egg wash glisten, oven puff, and final flaky tear reveal
Shot sequence:
1.Baker arrives before dawn, ties apron, switches on warm kitchen lights — wide establishing shot, full boulangerie world visible
2.Massive cold butter block slammed onto marble counter — dramatic impact, flour cloud explosion, close-up hands only
3.Dough folded precisely over butter, rolling pin pressing down hard — side angle, beautiful layers building
4.Dough rolled into large thin sheet — baker leaning into rolling pin with full body weight, flour dusting everywhere
5.Triangles cut and rolled into tight crescents — hands moving fast and confident, close-up on shaping
6.Golden egg wash brushed over each croissant — pastry brush close-up, each one glistening, overhead angle
7.Croissants in blazing oven — through oven glass puffing dramatically, turning deep golden, layers separating, warm orange glow
8.Baker tears open a perfect golden croissant — hundreds of flaky buttery layers revealed, steam escaping, butter glistening, pure satisfaction
Camera:
•Wide establishing shot for the opener
•Close-up hands only for butter slam and crescent shaping
•Side angle for the lamination
•Wide shot for the dough roll
•Overhead for the egg wash
•Oven glass shot for panel 7
•Extreme close-up hero shot for the final tear
Style:
•Warm golden French bakery morning light throughout
•Buttery cream tones, flour dust particles in the air, marble counter
•Pixar CGI vivid expressive animation
•Shallow depth of field on close-up shots
•Smooth satisfying cuts, warm and joyful energy throughout
Goal: A mouth-watering 12-second croissant journey from butter block to flaky tear — warm, golden, layered, and impossible to scroll past.“
```

[<img src="https://media.goodcase.ai/media/poster/real-case-07-techiebysa.jpg" width="600" alt="法式牛角包制作过程">](https://goodcase.ai/cases/real-case-07-techiebysa)

**作者:** @TechieBySA | **来源:** [原帖](https://x.com/TechieBySA/status/2053523775702925768) | **发布:** 2026-05-10 | **热度:** 87
**稳定度：** 85/100
**复测：** MiniMax H3 768p · 2026-08-11 · ⚠️ 降级 · [产物](https://media.goodcase.ai/retests/real-case-07-techiebysa/video-minimax-h3-768p-20260811-top-heat/generated.mp4)

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/real-case-07-techiebysa)**


### 母亲抢走男孩的可丽饼座位

> That's how I would be as a mother GPT Image 2 + Seedance 2.0 on @DomoAI_ prompt A realistic, cinematic short video (abou

```
That's how I would be as a mother

GPT Image 2 + Seedance 2.0 on @DomoAI_ 

prompt

A realistic, cinematic short video (about 20 seconds) set in a bright modern kitchen with glossy white cabinets, black granite countertop, stainless steel appliances, a black coffee machine, and a red blender in the background. Natural daylight fills the space.

A young boy @Image (around 8–10 years old, brown hair, wearing a bright green Pokémon T-shirt) sits at the kitchen island, focused on a black tablet propped in front of him.

A fit, tattooed mother @Image generation (long wavy blonde hair, babypink T-shirt with a square neckline and ruched bodice., light blue denim shorts, checkered kitchen towel draped over one shoulder) approaches from behind, carrying a white square plate stacked with golden-brown crepes/pancakes. He places the plate gently on the counter in front of the boy.

The boy looks up from the tablet, eyes lighting up with excitement. He quickly closes the tablet, sets it aside, and starts clapping his hands happily while smiling and bouncing slightly in his chair.

The mother @Image generation turns, grabs a jar of Nutella from the counter, and places it next to the plate of crepes. she @Image generation then walks behind the boy, she @Image generation aggressively pulls the chair back as the boy @Image falls down from the chair, mother @Image generation then steps around, sits down in the chair, leans forward over the counter toward the plate of crepes and Nutella, looking down at the food with a calm, content expression.

Warm, wholesome mother-son atmosphere, natural movements, soft kitchen lighting, slight handheld camera feel, high detail, photorealistic style.

#DomoAi #DomoAiCPP
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2091523662386266113/img/c-QPNOqXYUKE036X.jpg" width="600" alt="母亲抢走男孩的可丽饼座位">](https://goodcase.ai/cases/just-sharon7-seedance-ai-20d2026d6f58)

**作者:** @Just_sharon7 | **来源:** [原帖](https://x.com/Just_sharon7/status/2091529113425297759) | **发布:** 2026-08-23 | **热度:** 87

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/just-sharon7-seedance-ai-20d2026d6f58)**


### 韩巷夏日骑行的女孩

> Something from our local street Seedance 2.5 at service again Prompt : Main subject: Young Korean woman, early 20s, wear

```
Main subject: Young Korean woman, early 20s, wearing a soft pink short top, loose cream pajama-style pants, black sneakers and a delicate necklace. Messy black side ponytail, natural makeup, realistic skin and completely consistent appearance.
Location: Older Korean residential neighborhood on a hot summer afternoon. Narrow alleys, concrete walls, tiny gardens, bicycles leaning against houses, colorful laundry, utility poles and leafy trees creating patches of shade.
Shot entirely like an early-2000s home video filmed by her friend. Strong handheld shake, accidental framing, autofocus hunting, blown-out highlights, faded colors, digital noise, occasional zoom mistakes and realistic motion blur.
She leaves her house carrying a small basket and walks barefoot toward a bicycle. She slips on her sneakers, hops onto the bicycle and starts riding through the lane.
She passes a friend sitting outside a small house. The friend calls her name and she immediately stops.
They chat casually for a moment, laughing about something. She steals a sip from her friend's iced drink, laughs and continues cycling.
She stops beneath a giant tree and parks the bicycle. She looks upward as the leaves move in the warm breeze.
A basketball rolls into the lane from nearby children. She kicks it gently back toward them and waves.
She gets back on the bicycle and rides away while the camera remains behind, slowly losing sight of her around the corner.
Audio: Summer insects, birds, bicycle chain, distant children, wind through leaves, casual conversation and neighborhood ambience. No music.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2091175377687511040/img/_P8hUjYhuPhXtkmT.jpg" width="600" alt="韩巷夏日骑行的女孩">](https://goodcase.ai/cases/aiwithkhan-seedance-ai-9a5c5cbd518b)

**作者:** @AIwithkhan | **来源:** [原帖](https://x.com/AIwithkhan/status/2091175465037746522) | **发布:** 2026-08-22 | **热度:** 87

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/aiwithkhan-seedance-ai-9a5c5cbd518b)**


### Seedance 六十秒健身日常 day-in-life vlog

> Come spend a gym day with me 🎥🤍 Created with Seedance 2.5 on @Flovaai Prompt: Create a 60-second realistic day-in-the-

```
Create a 60-second realistic day-in-the-life gym vlog following the same young Korean woman in her early twenties from waking up at home, getting ready, going to the gym, working out, and returning home.

Overall visual style

One continuous handheld front-facing smartphone selfie vlog perspective. She always films herself with the phone in her own hand at arm’s length. No third-person camera, tripod, cinematic camera movements, drones, or external filming.

Make everything look like authentic modern smartphone footage:

- Natural handheld shake and small framing imperfections
- Realistic walking movement and occasional autofocus hunting
- Minor exposure changes
- Natural front-camera lens distortion
- Soft natural morning light indoors and outdoors
- Realistic, unfiltered smartphone colors
- No beauty filter, skin smoothing, or cinematic color grading
- Same face and hair throughout the entire vlog
- Natural expressions, movements, and body language
- No subtitles, captions, logos, watermarks, or on-screen text
- No background music; use only natural diegetic sound

0–10 sec — Waking up

She wakes up in her cozy bedroom wearing a cute, loose casual night suit. She grabs her phone from beside the bed and immediately starts filming herself selfie-style. She looks sleepy, messy-haired, and slightly tired, gives a small yawn, stretches, and smiles at the camera.

She quietly says:

“Good morning… I really don’t feel like going to the gym today.”

She gets out of bed and walks toward the bathroom while holding the phone herself.

10–18 sec — Brushing teeth

In the bathroom, she films herself in the mirror/selfie view while brushing her teeth. Keep it casual and imperfect, with realistic bathroom ambience and running-water sounds.

She briefly looks into the camera with a sleepy expression, then rinses her mouth and smiles.

She says:

“But I promised myself I’d go, so… let’s do it.”

18–27 sec — Getting ready

Quick natural transition back to her bedroom. She changes from her night suit into a stylish but realistic gym outfit: fitted athletic top, high-waisted leggings or comfortable athletic bottoms, clean sneakers, and minimal accessories.

Show short selfie moments of her fixing her hair, adjusting her gym outfit, grabbing a water bottle and gym bag.

She looks into the phone and says:

“Okay, now I actually look ready.”

27–35 sec — Going to the gym

She leaves home with the phone in her hand. Film brief selfie moments while walking outside and naturally bouncing with her steps. Show quick glimpses of the street, morning traffic, buildings, and her gym bag.

She arrives at the gym and turns the phone slightly to show the entrance before bringing it back to her face.

Natural street and gym ambience only.

35–52 sec — Workout

Inside the gym, she starts with a short warm-up on a treadmill, then moves through a few exercises such as light strength training, squats, dumbbell exercises, and stretching.

Keep the camera mostly front-facing and handheld, occasionally tilting naturally toward the equipment before returning to her face.

She becomes slightly sweaty and out of breath but stays cheerful. She laughs and says:

“Okay… this is harder than I remembered.”

She takes a quick drink of water, catches her breath, then gives the camera a satisfied smile and continues her workout.

Include realistic sounds of footsteps, treadmill movement, weights clanking, machines, distant conversations, and gym room tone.

52–60 sec — Returning home

After finishing her workout, she leaves the gym and walks home. She looks pleasantly exhausted but happy.

Cut naturally to her back at home, still holding the phone. She drops her gym bag down, takes a drink of water, relaxes on the couch or bed, and looks into the camera with a tired smile.

She gives a small wave and says:

“Workout done. I’m exhausted… but I’m glad I went.”

She smiles, gives one final sleepy wave, and lowers the phone for a natural ending.

Final requirements

Keep the entire vlog fast, spontaneous, cozy, and realistic, with natural transitions between locations. The woman must remain visually consistent throughout: same facial identity, same hair, and realistic appearance. Her outfit changes only once, from the casual night suit to the gym outfit.

All dialogue must be naturally spoken with visible lip movement. Use only diegetic audio—bedroom ambience, bathroom sounds, footsteps, street noise, gym sounds, water bottle sounds, and home ambience. No music, captions, subtitles, logos, watermarks, or cinematic effects.
#Flovaai #Flovacpp
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089567697684344832/img/aoT9ckuE9O2mV4tV.jpg" width="600" alt="Seedance 六十秒健身日常 day-in-life vlog">](https://goodcase.ai/cases/zarairahh-seedance-ai-3f362e9e352b)

**作者:** @ZaraIrahh | **来源:** [原帖](https://x.com/ZaraIrahh/status/2089569072526823464) | **发布:** 2026-08-18 | **热度:** 87

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/zarairahh-seedance-ai-3f362e9e352b)**


### 超现实酒店泳池比例失调场景

> 一个荒诞的超现实喜剧场景提示词，描绘了比例失调的画面：一名普通男子进入泳池，踩在了一位沉在水中的巨型女性脸上。

```
Photorealistic absurd surreal comedy scene in a small indoor hotel pool. Low-budget real-world environment: tiled pool, metal ladders, fluorescent lighting, depth markers on the wall, white plastic chairs, a vending machine in the background, and a few casually dressed people in swimwear watching.

A giant beautiful young woman is submerged in the pool up to her neck and upper chest, as if her body is enormous and fills most of the pool. She has wet slicked-back dark hair, expressive eyes, realistic wet skin, and a slightly amused then surprised expression. Her face and shoulders are huge compared to the rest of the environment.

A normal-sized adult man in swim trunks carefully walks down the pool ladder as if he is just entering the water. He holds a white cup in one hand. As he steps down, it becomes clear that because of the bizarre scale mismatch, he is stepping directly onto the giant woman’s face. He awkwardly steps on her nose and cheek while trying to keep balance.

The woman looks confused and cross-eyed toward him. The man slips, grabs at her nose for balance, and then slides toward her open mouth. By the end of the shot, he accidentally tumbles into her mouth in a ridiculous surreal way. She looks shocked. The people in the background react with surprise and laughter.

Camera style:
Recorded like a viral smartphone clip. Slight handheld movement, but mostly stable from the poolside. Realistic phone-video look, mild compression, indoor echo, natural pool reflections, believable lighting, not cinematic. The scene should feel like a bizarre real video someone captured by accident.

Tone:
Absurd, funny, surreal, and visually shocking — not gory, not violent, not horror. The humor comes from the impossible scale and the dead-serious realism.

Action timing:
0–3s: Show the indoor pool and the giant woman occupying most of it. The man starts climbing down the ladder.
3–7s: He continues stepping down and accidentally plants a foot on her face/nose.
7–11s: He loses balance, grabs at her nose, and slips toward her mouth.
11–15s: Her mouth opens in surprise, he tumbles into it, and the bystanders react.

Important details:
Keep the scale relationship very clear: giant woman, tiny man, normal-size background people. Keep the environment realistic and grounded. Preserve believable water interaction and reflections. No gore, no body horror, no extra limbs, no broken anatomy, no glitchy transitions.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088748810814025729/img/bqKA6X0gCt3UXqVh.jpg" width="600" alt="超现实酒店泳池比例失调场景">](https://goodcase.ai/cases/case-142119be6421)

**作者:** Alpha Mom | **来源:** [原帖](https://x.com/i/status/2088749172543410403) | **发布:** 2026-08-15 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/case-142119be6421)**


### Modern Action Comedy Video Prompt

> A detailed action-comedy video prompt for Seedance 2.5 featuring a female character's persistent attacks and a male character's playful evasions involving quick cheek kisses.

```
Use exactly 2 uploaded image assets.\nimage1 = 成年女主唯一且最高优先级的人物身份参考。严格保持她的脸部、五官比例、肤色、发型、体型、年龄感、整体气质、服装与配件一致。\nimage2 = 戴眼镜的韩国成年男性唯一且最高优先级的人物身份参考。严格保持他的脸部、五官比例、肤色、发型、眼镜、体型、年龄感、整体气质、服装与配件一致。\n\n生成一段30秒、16:9横屏、4K、24fps、超写实真人电影级动作喜剧短片。场景是夜晚高层现代顶层办公层 / 豪华公寓式空间，落地玻璃外是都市夜景，室内有开放客厅、长廊、现代家具、冷暖混合灯光。不要动漫感，不要游戏CG感，不要廉价特效，不要慢动作，不要伪慢动作。动作必须真实、快速、清晰、电影化。\n\n【前提】\n这是两名成年演员进行的一段事先编排、双方同意的动作喜剧表演。整体气氛轻松、顽皮、带竞技感，不表现恐惧、威胁或强迫。不是生死战，不是低俗戏，而是“女主不断进攻，男主不断闪避并用玩笑式脸颊轻吻打乱节奏”的高能动作喜剧。\n\n【核心关系】\n女主全程主动进攻，男主几乎不真正反击，只不断闪避、绕位、贴近、退开。男主的主要“得分方式”不是拳脚，而是利用动作节奏中的瞬间空档，突然靠近，做一个短促、清楚、玩笑式的脸颊轻吻，然后立刻退开。全片一共5次脸颊轻吻。每一次都必须是明确的喜剧节奏点。亲吻后女主都会更恼火、更认真，继续追打。\n\n【动作原则】\n女主：持续前压，连续使用直拳、摆拳、肘击、膝击、侧踢、高踢、回旋踢、转身攻击、追击压迫。越往后越认真，越往后越凶。\n男主：几乎不主动打人，不进行真正的拳脚反击，不做沉重摔打。他的主要动作只有：闪避、后撤、侧身、低头、后仰、滑步、绕位、借力卸开攻击路线、突然靠近、脸颊轻吻、马上退开。\n全片结构必须反复升级：\n女主连续攻击 → 男主连续闪避 → 男主抓住极短空档突然脸颊轻吻 → 女主更生气 → 再次猛烈追击。\n这个结构共出现5次。\n\n【镜头规则】\n动作段落主要使用medium shot、medium-wide、wide、贴身跟拍、手持感摄影、侧向tracking、轻微呼吸感晃动，清楚交代空间移动。\n每一次脸颊轻吻发生前，摄影机先跟着两人的动作节奏推进，捕捉到男主突然靠近女主近身空间。\n每一次轻吻发生时，不要突然切镜，不要突然换机位。必须使用同一连续镜头中的快速、平滑camera push-in / dolly-in：\n动作中景 → 男主突然靠近 → 摄影机迅速推进到medium close-up / close-up → 清楚表现短促的脸颊轻吻动作、男主略显得意的表情、女主瞬间错愕或恼火的表情 → 摄影机随着两人分开自然拉回动作镜头继续追打。\n每次轻吻持续约0.3–0.6秒，必须清楚可见，但很短。不要停下来摆Pose。\n\n【男主表情与性格】\n男主全程保持从容、调皮、略微欠揍的恶作剧感。他不生气，也不想真正压制女主；他的乐趣是不断躲开她的攻击，然后趁她出现瞬间空档突然做一个脸颊轻吻。\n每次成功后，他都必须出现极短、自然、略显得意的表情：嘴角轻微上扬，眼神带一点“又没打中我”的玩味，偶尔轻轻挑眉。不要猥琐，不要邪恶，不要夸张奸笑。\n第一次：有点得意。\n第二次：更明显觉得好玩。\n第三次：开始故意挑衅。\n第四次：明知道女主越来越生气，仍忍不住露出欠揍笑意。\n第五次：轻吻后明显露出“玩过头了”的心虚笑容，然后马上逃跑。\n\n【对白规则】\n全片对白极少，只允许以下4句韩语，不要增加其他对白、旁白或字幕。\n第一次脸颊轻吻后，女主短促、错愕又恼火地说：“야!”\n第二次脸颊轻吻后，男主一边轻松后退一边带一点调皮语气说：“또 실패.”\n第四次脸颊轻吻后，女主咬牙压住怒气说：“너 진짜...”\n话还没说完就继续攻击。\n第五次脸颊轻吻成功后，男主立刻转身逃跑，带着一点不太真诚的轻松语气喊：“미안!”\n第三次脸颊轻吻完全不要对白，只用清楚的轻吻声、女主表情和马上开始的追击制造笑点。\n所有台词必须严格保持以上韩语原文。不要中文对白，不要英文对白，不要自动翻译。\n\n【时间线】\n0–4秒\n开场1秒内直接进入动作。女主已经在高层客厅区域连续猛攻，动作快速凌厉：直拳、转身肘击、中段踢连贯压上。男主几乎不出手，只不断侧身、低头、滑步、后仰闪避，动作非常从容。摄影机近距离跟拍，建立“女主持续追打、男主一直躲”的基本关系。\n\n4–6秒｜第一次脸颊轻吻\n女主继续前压，一拳接一脚逼近男主。男主闪过后突然从女主侧后方约45度短暂贴近，不要完全站在正后方。随后快速在她右侧脸颊上做第一次短促轻吻。必须在同一镜头内快速推进到脸部近景，清楚表现轻吻动作。女主瞬间愣住，然后恼火地说：“야!” 男主立刻退开，并露出第一次得意的欠揍表情。\n\n6–10秒\n女主明显更火，攻击节奏提高。她连续用低扫、高踢、摆拳和转身追击，男主持续闪避，不反打，只边退边躲，偶尔用很短的借力化解改变她攻击方向，但绝不展开真正反击。\n\n10–12秒｜第二次脸颊轻吻\n女主一记高位踢被男主极限低头躲过。男主趁她动作落下的半拍，从另一侧快速切入，在她左侧脸颊上再做一次轻吻。必须再次在同一镜头中快速推进到脸部近景，清楚表现动作瞬间。亲完后男主一边轻松后退一边说：“또 실패.” 表情更明显地觉得好玩。女主更生气，立刻冲上。\n\n12–16秒\n女主开始更猛烈追打，动作更大、更快、更凶。她连续前压、转身、追身高踢，追着男主从客厅打到玻璃窗前再转向开放走道。男主几乎只做极限闪避：上身后仰、贴身绕开、低身闪过、侧滑退开。动作要让人感觉“再慢一点就会被打中”。\n\n16–18秒｜第三次脸颊轻吻\n女主连续两次攻击落空后，男主在她转身回头的一瞬间突然贴近，再次做一个更短、更突然、更干脆的脸颊轻吻。仍然必须在同一连续镜头中快速推进到近距离脸部特写，清楚看到动作。这里不要对白，只保留短促自然的“啵”声和女主表情。男主表情已经带着故意挑衅的欠揍感。女主眼神明显变得更凶，继续追打。\n\n18–22秒\n女主怒气继续累积，追击更狠。她连续使用高踢、转身横踢、膝击逼近，几乎不停顿。男主一路闪避、躲入长廊、绕过家具边缘，不反打，只是不断读她动作并险之又险地避开。男主的从容感开始带一点被追得发慌的喜感，但仍然很会躲。\n\n22–24秒｜第四次脸颊轻吻\n女主一记攻击擦过男主面前，男主借她动作惯性突然近身，第四次轻吻到脸颊。摄影机再次在同一镜头内迅速推进到近景，清楚表现动作。男主仍忍不住露出欠揍笑意。女主咬牙、压着火气说：“너 진짜...” 话还没说完，她就立刻继续追打，不给男主喘息。\n\n24–27秒\n女主进入最强追击状态，速度和压迫感拉满。她连续高位踢击和转身动作几乎不间断，把男主一路逼向更深处走廊。男主仍然不反击，只不断极限后撤、侧身、低头、后仰，像在玩命躲。\n\n27–29秒｜第五次脸颊轻吻\n在全片最高速的追逐与攻防中，男主看起来几乎要被踢中，却在最后一瞬躲开，并突然非常快速地回到女主近身，完成第五次、也是最夸张最欠揍的一次脸颊轻吻。必须使用最清楚的连续push-in脸部特写，清楚表现动作。亲完后男主露出“玩过头了”的心
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2088604237265862656/img/5mjukEPhpG95CbKv.jpg" width="600" alt="Modern Action Comedy Video Prompt">](https://goodcase.ai/cases/modern-action-comedy-video-prompt)

**作者:** Pyona | **来源:** [原帖](https://x.com/i/status/2088605198973583799) | **发布:** 2026-08-15 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/modern-action-comedy-video-prompt)**


### 酒店房间深夜关东煮试吃

> Have you ever tasted this broth? Nano Banana 2 + Seedance 2.5 on @DomoAI_ prompt Image1 : SHARON'S REAL FACE — sole sour

```
Have you ever tasted this broth?

Nano Banana 2 + Seedance 2.5 on @DomoAI_ 

prompt

Image1 : SHARON'S REAL FACE — sole source of her features, 100% match, zero drift: soft rounded oval face, warm light-beige skin with tiny freckles and beauty marks, GREEN eyes, dense straight feathered brows, small neat nose, full pink lips, small silver drop earring.

A photorealistic 30-second handheld selfie vlog featuring a cute young woman Image2 in her early 20s with long, straight blonde hair. She wears a black-sleeved white raglan crop top, Layered delicate gold chain necklaces (one longer with a small circular pendant) rest on her chest., with a black graphic print and light-wash denim shorts. The setting is a bright, modern hotel room with a white bed, gray furniture, sheer curtains, and large windows. Natural daylight, casual handheld camera movement, authentic social-media vlog feel, realistic facial expressions, and natural eating sounds.

0–5 sec: She holds the camera at arm's length, smiling excitedly and sitting on the edge of the bed. She gestures toward a paper cup of steaming oden on a small table.

Dialogue: “Okay, look what I found! I got oden for a little midnight snack.”
Subtitle: [Okay, look what I found! I got oden for a little midnight snack.]

5–10 sec: She brings the camera closer to the cup, showing spiral fish cake, rolled fish cake, daikon, and other ingredients soaking in dark savory broth. Steam rises naturally from the food.

Dialogue: “This smells so good. And it’s still super hot.”
Subtitle: [This smells so good. And it’s still super hot.]

10–16 sec: She picks up a piece of fish cake with a wooden skewer, blows on it gently, then takes a bite. She chews happily and looks into the camera with an approving smile.

Dialogue: “Mmm… oh wow. That’s really good.”
Subtitle: [Mmm… oh wow. That’s really good.]

16–21 sec: She tries another piece, casually chatting while eating. She gestures toward the cup and laughs softly.

Dialogue: “I could honestly eat this every day. The broth is so comforting.”
Subtitle: [I could honestly eat this every day. The broth is so comforting.]

21–26 sec: She moves to a nearby table where two cups and an iced drink are visible. She sets the oden down, takes a sip of the iced drink, and smiles at the camera.

Dialogue: “Okay, I think I’m officially full now.”
Subtitle: [Okay, I think I’m officially full now.]

26–30 sec: She picks up the camera again for a final close-up, smiles warmly, gives a small wave toward the lens, and ends the vlog naturally.

Dialogue: “Thanks for eating with me. See you next time, bye!”
Subtitle: [Thanks for eating with me. See you next time, bye!]

Maintain consistent facial features, hairstyle, outfit, body proportions, and environment throughout. Keep the performance spontaneous rather than overly scripted. Natural blinking, subtle head movements, realistic chewing, authentic hand gestures, visible steam, realistic food textures, soft room ambience, and handheld smartphone camera motion. No voice-over; all dialogue is spoken directly to the camera. Subtitles remain bracketed in English exactly as shown.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089919391572107264/img/KR41m1j5CEmo63Lh.jpg" width="600" alt="酒店房间深夜关东煮试吃">](https://goodcase.ai/cases/just-sharon7-seedance-ai-0a85559bbf5e)

**作者:** @Just_sharon7 | **来源:** [原帖](https://x.com/Just_sharon7/status/2089919950161113353) | **发布:** 2026-08-19 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/just-sharon7-seedance-ai-0a85559bbf5e)**


### Seedance 双角色 3D 卡通：小蝴蝶的十四秒

> A little butterfly, a sweet flower, and a beautiful moment. Sometimes the smallest moments make the cutest memories. Cre

```
Create a cute cinematic 14-second 3D cartoon using the two reference characters, keeping their faces, hairstyles, clothes and appearance consistent. A young woman in a pink outfit walks through a sunny green park with a cute blonde little boy in a dinosaur T-shirt. The boy notices a colorful butterfly, points excitedly, and they happily follow it through the flowers. The boy picks a small flower and gives it to the woman, and she smiles and gently hugs him. Use smooth expressive animation, soft cinematic lighting, vibrant colors, detailed park scenery, natural camera movement and a warm family-friendly atmosphere. No character changes, face distortion, extra characters, outfit changes, flickering, deformed hands, text or watermark. 16:9 vertical, high-quality cinematic 3D animation.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089559697108107264/img/2GCho-eF2dGfpnWd.jpg" width="600" alt="Seedance 双角色 3D 卡通：小蝴蝶的十四秒">](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777)

**作者:** @ayzalnooor24521 | **来源:** [原帖](https://x.com/ayzalnooor24521/status/2089559741718548578) | **发布:** 2026-08-18 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777)**


### Nano Banana + Seedance 2.5 六十秒高中初恋微电影

> Maybe it was never about the five minutes. It was about wanting to spend them together. ❤️ Made with Flova AI using Nano

```
Create a 60-second cinematic high-school first-love story using SEEDANCE 2.5.

IMPORTANT:
Generate the video as EXACTLY TWO CONTINUOUS SHOTS:
SHOT 1 = 0–30 seconds
SHOT 2 = 30–60 seconds
The two shots must connect seamlessly and feel like ONE continuous short film, not two unrelated clips.
FORMAT:
16:9 widescreen
Cinematic photorealism
Premium coming-of-age romance film
Fast-paced but emotionally natural
Smooth transitions and motivated camera movement
Realistic teenage body proportions and expressions
Natural English dialogue only
No subtitles unless dialogue is naturally spoken
No text overlays
No character redesign
CHARACTER CONSISTENCY — EXTREMELY IMPORTANT:
Use the provided character reference sheets for BOTH characters.

BOY:
Preserve exact face, hairstyle, clothing, body proportions, accessories and identity from the character sheet.

GIRL:
Preserve exact face, hairstyle, clothing, body proportions, accessories and identity from the character sheet.
Their faces, hairstyles and outfits must remain IDENTICAL throughout both shots.
The boy and girl are both 17–18-year-old high-school students. Keep the romance completely innocent, wholesome and age-appropriate.
VISUAL LANGUAGE:
Warm nostalgic coming-of-age movie aesthetic, realistic school environment, natural skin texture, subtle film grain, cinematic depth of field, soft lens bloom, realistic physics, natural hair movement, expressive eyes, believable teenage body language.
Use a dynamic combination of:
wide establishing shots,
medium tracking shots,
over-the-shoulder shots,
close-ups,
handheld intimate moments,
smooth push-ins,
whip-pan transitions,
shallow-focus inserts,
and brief slow-motion accents.
Avoid excessive slow motion. The pacing should feel energetic and modern.
━━━━━━━━━━━━━━━━━━━━
SHOT 1 — 0:00–0:30
“THE ROUTINE”
━━━━━━━━━━━━━━━━━━━━
0:00–0:03
OPEN on a cinematic wide shot of a lively high-school hallway immediately after the final bell.
Students rush past the camera.
The boy exits his classroom with his backpack over one shoulder.
He looks across the hallway.

The girl is already there.
Their eyes meet.

She gives him a tiny smile.
He smiles back.

CAMERA:
Fast lateral tracking shot through the crowd, then smoothly pushes toward the boy as he notices her.
0:03–0:07
She walks toward him.

He casually falls into step beside her.

GIRL:
“You're late.”

BOY:
“By two minutes.”
She laughs.

They continue walking.
CAMERA:
Smooth backward tracking shot in front of them as students pass naturally around them.
0:07–0:11
QUICK MONTAGE.
They sit together in class.
She steals one of his fries during lunch.
He looks offended.
She laughs.
He secretly smiles.
CUT TO:
Their notebooks side by side.
She draws a tiny smiley face in the margin of his notebook.

He notices.

CAMERA:
Fast close-up inserts and match cuts, keeping the rhythm playful and energetic.
0:11–0:15
They leave school together.
Golden afternoon light floods the corridor.
He holds the door open for her.

She playfully bumps his shoulder as she walks past.
He laughs.

CAMERA:
Low-angle tracking shot transitioning into a warm side-profile shot.

0:15–0:20
Outside school.

They walk down the sidewalk.

She talks animatedly while he listens.

A light breeze moves her hair.

He looks at her for a moment longer than he should.

She catches him staring.

GIRL:
“What?”
BOY:
“Nothing.”

She smiles knowingly.
CAMERA:
Over-the-shoulder close-up from behind her, revealing his shy smile.

0:20–0:25
The sky suddenly darkens.

First drops of rain hit the pavement.
She looks upward.

BOY:
“Uh-oh.”
She laughs and quickly pulls her cardigan closer.

The boy opens his small umbrella.

CAMERA:
Quick tilt from the darkening sky down to them.

0:25–0:30
They squeeze underneath the tiny umbrella together.
Their shoulders bump.

They laugh.
The camera slowly circles around them as they begin walking through the rain.

The boy looks at her.

She looks back.

A brief quiet moment.

MATCH CUT:
Camera passes behind the umbrella fabric.

Use the movement of the umbrella to create a seamless transition into SHOT 2.

━━━━━━━━━━━━━━━━━━━━
SHOT 2 — 0:30–1:00
“FIVE MORE MINUTES”
━━━━━━━━━━━━━━━━━━━━
IMPORTANT:
SHOT 2 begins from the EXACT SAME MOMENT as Shot 1 ends.

Same characters.
Same clothing.
Same umbrella.
Same rainy street.
Same lighting.
Same environment.

No visual reset.

0:30–0:35
Continue the walking shot.
They move through the rain beneath the tiny umbrella.

Their hands accidentally touch.
Both notice.

Neither pulls away immediately.

CAMERA:
Slow subtle push-in toward their hands, then rack focus to their faces.

0:35–0:40
They reach the girl's house.

She steps out from beneath the umbrella.

She turns toward him.
GIRL:
“See you tomorrow?”

BOY:
“Yeah.”
She starts walking toward her front door.

The boy watches her.

She takes a few steps.

0:40–0:44
He suddenly gathers courage.

BOY:
“Hey!”

She turns around.

CAMERA:
Quick handheld push toward the boy as he runs a few steps back toward her.
0:44–0:49
He smiles nervously.

BOY:
“Can I have five more minutes?”
She looks at him, amused.

GIRL:
“You already had an hour.”

He laughs.
BOY:
“I know.”

A small pause.
She smiles.

GIRL:
“Okay. Five more minutes.”

0:49–0:54
She steps back underneath the umbrella.

They begin walking together again.
The rain becomes softer.

The street lights begin glowing as evening approaches.

CAMERA:
Wide cinematic tracking shot from the front, slowly moving backward as they walk toward camera.

0:54–0:58
QUICK NOSTALGIC MONTAGE:
Their sneakers splashing through puddles.

Their hands almost touching.
Her laughing.

His nervous smile.

The tiny umbrella tilting as they walk closer together.

A final glance between them.

Use rhythmic match cuts synced to the emotional music.

0:58–1:00
FINAL WIDE SHOT.

The camera pulls slowly upward and backward.

The two teenagers walk away together beneath the tiny umbrella, becoming smaller against the glowing evening street.
The rain sparkles under the streetlights.

They continue talking and laughing as they disappear farther down the road.

FADE OUT.
FINAL EMOTIONAL FEELING:
First love.
Youth.
Nervous butterflies.
The feeling of not wanting the day to end.
Do NOT make the ending sad.
Do NOT introduce a breakup.
Do NOT introduce a twist.
Do NOT introduce additional characters who become romantically relevant.
The entire story should feel like one precious memory from the beginning of a first love.

━━━━━━━━━━━━━━━━━━━━
CAMERA & MOTION REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━
Keep camera movement fluid and cinematic throughout.

Use motivated transitions rather than random cuts.
Mix fast-paced montage editing with slower intimate close-ups.
Prioritize:
• smooth tracking shots
• natural handheld movement
• cinematic push-ins
• over-the-shoulder compositions
• expressive close-ups
• realistic rack focus
• wide environmental shots
• subtle slow-motion only for emotional beats
Maintain realistic physics for:
rain,
umbrella movement,
hair,
clothing,
walking,
running,
hand gestures,
and interactions with the environment.
━━━━━━━━━━━━━━━━━━━━
AUDIO & DIALOGUE
━━━━━━━━━━━━━━━━━━━━
Natural English dialogue only.

Dialogue should sound spontaneous and age-appropriate.

Ambient sound:
school hallway chatter,
footsteps,
distant laughter,
birds,
city ambience,
rain,
umbrella fabric,
wet pavement.
Music:
soft modern coming-of-age instrumental soundtrack that gradually builds from playful and light to warm and emotional.

Music must never overpower dialogue.

━━━━━━━━━━━━━━━━━━━━
NEGATIVE PROMPT
━━━━━━━━━━━━━━━━━━━━

No character identity changes.
No face changes.
No hairstyle changes.
No outfit changes.
No age changes.
No adult appearance.
No sexualized content.
No exaggerated body proportions.
No random wardrobe changes.
No duplicated characters.
No extra limbs or fingers.
No distorted hands.
No unnatural walking.
No floating objects.
No impossible rain physics.
No inconsistent umbrella.
No teleporting.
No location jumps that break continuity.
No random camera cuts.
No excessive slow motion.
No cartoon appearance.
No anime style.
No plastic skin.
No overprocessed faces.
No text overlays.
No subtitles.
No logos.
No watermark.
No visual glitches.
No abrupt ending.

FINAL REQUIREMENT:
SEEDANCE 2.5 MUST PRIORITIZE CHARACTER CONSISTENCY, FACIAL IDENTITY, TEMPORAL CONTINUITY, NATURAL MOTION AND SEAMLESS TRANSITION BETWEEN THE TWO 30-SECOND SHOTS.

The final result should look like a polished 60-second scene from a premium cinematic coming-of-age romance film.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2089154268754558976/img/QE7XgAQQSMT70mOD.jpg" width="600" alt="Nano Banana + Seedance 2.5 六十秒高中初恋微电影">](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951)

**作者:** @Caden_Flux | **来源:** [原帖](https://x.com/Caden_Flux/status/2089154775829074074) | **发布:** 2026-08-17 | **热度:** 86

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951)**


### Vibrant K-pop Stage Performance

> A rhythmic K-pop choreography prompt featuring three idols performing under LED lights with specific synchronized motions like laughing and peace signs.

```
A vibrant K-pop stage performance under bright purple and pink LED lights. Three young East Asian women idols with long dark hair stand in a line on stage, wearing headset microphones and stylish crop tops.

Characters and outfits:

Left idol: lime-green sleeveless top with white “BOYS LIE SPORT” text and heart logo.

Center idol: baby-pink spaghetti-strap crop top with white piping.

Right idol: navy-and-green horizontal striped collared crop top.

Sequence — approximately 17 seconds:

0–2s: The three idols begin by dancing lightly and naturally in sync to the beat. The center idol flips her long hair and turns slightly while dancing. The right idol dances with a playful expression. Do not have them cover their faces yet. Soft stage lighting and large LED screens show a big red “5” and heart graphics in the background.

2–6s: While continuing their dance movement, all three suddenly bring both hands up to cover their mouths, reacting with genuine surprise and laughter. Their shoulders shake as they giggle and they gently bounce in place. The center idol laughs hardest, with her long hair naturally swaying.

6–12s: They continue the synchronized cover-mouth-and-laugh motion while still subtly dancing to the beat. Keep their bodies moving naturally rather than freezing in place. Their expressions are joyful, playful, and genuinely amused. Medium camera framing captures all three idols clearly.

12–15s: The dancing continues at 12 seconds as they smoothly transition from covering their mouths into making double peace signs with both hands raised near their faces. They keep moving rhythmically while smiling and laughing. The center idol briefly turns and then faces forward again.

15–17s: Final pose while the dance energy continues subtly — all three hold double peace signs near their faces, beaming directly at the camera with bright, cheerful expressions. Soft stage haze and colorful LED lighting create a high-energy yet adorable K-pop concert atmosphere.

Visual style: high-quality live concert footage, sharp details, natural skin texture, realistic facial expressions, dynamic but soft purple-and-pink stage lighting, subtle handheld camera shake for realism, natural hair movement, believable body motion, polished K-pop performance cinematography, cute, energetic, wholesome atmosphere.

Important motion requirements: The idols must dance first before putting their hands on their faces. Do not start with their hands covering their mouths. The dancing continues throughout the sequence, including after the 12-second mark. No frozen poses before the final moment. No text overlays.
```

[<img src="https://pbs.twimg.com/amplify_video_thumb/2087744515708698624/img/xsHuD__Mo4DPZhcV.jpg" width="600" alt="Vibrant K-pop Stage Performance">](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

**作者:** Sharon Riley | **来源:** [原帖](https://x.com/i/status/2087744765341159503) | **发布:** 2026-08-13 | **热度:** 85

**[🔍 在 goodcase.ai 查看（复测记录/稳定分）→](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)**


## 如何投稿

这份 README 不接受新 prompt 的 PR，投稿走 goodcase.ai 的审核管线，这样溯源和热度分才可核验。投稿入口 [goodcase.ai/submit](https://goodcase.ai/submit)，收录标准见 [goodcase.ai/standards](https://goodcase.ai/standards)。

## 🙏 致谢

这个项目的格式和 Skill 打包方式参考了：

- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) — 模板库 + 可安装 Skill + marketplace 的路子。
- [YouMind-OpenLab](https://github.com/YouMind-OpenLab) — README 即画廊、逐条署名的做法。
- [goodcase.ai](https://goodcase.ai) — 本仓库全部案例和热度分的数据来源。

## 版权与下架政策

本仓库的代码部分（脚本、Agent Skill）采用 MIT 许可，见 [LICENSE](./LICENSE)。

Prompt 文本、摘要和媒体引用均来自公开发布的创作者原帖，版权归原作者所有；本仓库对内容的筛选、组织和模板提炼采用 CC BY 4.0 授权。每条案例都链回原始来源和对应的 goodcase.ai 记录页。

如果你是版权方，想要下架某条内容，请提 issue 并附上该条目的 slug 和来源链接，或直接联系 goodcase.ai，核实后会处理下架请求。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LearnPrompt/awesome-seedance&type=Date)](https://star-history.com/#LearnPrompt/awesome-seedance&Date)
