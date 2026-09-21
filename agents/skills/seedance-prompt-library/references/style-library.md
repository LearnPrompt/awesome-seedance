# Seedance Prompt Style Library

Reference data for the seedance-prompt-library Agent Skill. Generated from data/style-library.json — do not hand-edit, run `node scripts/generate-skill-reference.mjs` instead.

## timeline-shot-script

### English

#### Second-by-second timeline script

Split the clip into contiguous timed segments, each carrying one shot type, one main action and its own sound line. The single most load-bearing structure in the corpus.

**Use when:** Any clip longer than about 8 seconds, or any clip where a specific thing must happen at a specific moment. 63 of 207 cases (30%) use timed segments, and the share rises to 45% among Seedance 2.5 cases.

**Guidance:**

- Keep segments 2-5 seconds. Documentary tracking runs 2s per beat, ads run 3s, and an audio-locked MV can go down to sub-second anchors. The shorter the segment, the more it needs a visible action verb rather than a mood adjective.
- Write closed intervals that touch end to end (`0-4s` then `4-8s`) and make them sum to the stated duration. Declaring 30 seconds but listing only 24 makes the model stretch the last beat to fill the gap.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)

**Structure:**
1. Global block: duration, aspect ratio, frame rate, overall style and image-quality vocabulary
1. Fixed block: characters, wardrobe, props and location that stay unchanged for the whole clip
1. Timeline block: one segment per beat, headed `[00:00-00:04] Shot 1: Ground-level Low Angle`, then frame content, action, detail, sound
1. Global constraint block: negative list and hard limits, placed after the timeline

**Pitfalls:**
- Writing a total duration without segments. Half the corpus states a duration but only 30% segments it, and the un-segmented half visibly drifts after roughly six seconds.
- Repeating wardrobe and hairstyle inside every segment. Restating identity per beat triggers appearance mutation between beats; state it once in the fixed block and add a whole-clip lock line.
- Timing to 0.01s precision without an audio input. Text-only generation resolves to about 0.5s, so finer numbers only add noise.
- Burying the negative list inside a segment. Hard limits belong in one block at the end so they apply to the whole clip.

**Copy-ready lead-in:** I want to make a clip scripted second by second. [It shows: a courier delivering the last order of the night through neon-lit rain.] [Total length 15 seconds, vertical 9:16.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 逐秒时间轴分镜脚本

把片子切成首尾相接的时间段，每段带一个机位、一个主要动作和一行音效。整个案例库里承重最强的结构。

**适用场景:** 长度超过 8 秒，或者某件事必须发生在某个时刻。207 条里 63 条（30%）用了时间分段，在 Seedance 2.5 案例里这个比例升到 45%。

**要点:**

- 段长控制在 2 到 5 秒。纪实跟拍两秒一段，广告三秒一段，有音频驱动的 MV 可以细到亚秒级锚点。段越短，越要给可见的动作动词，别给情绪形容词。
- 时间写成闭区间并首尾相接（`0-4s` 接 `4-8s`），且总和等于声明的时长。写 30 秒却只列到 24 秒，模型会把最后一段拉长填满。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)

**结构:**
1. 全局块：时长、画幅、帧率、整体风格与画质词
1. 固定块：全片不变的人物、服装、道具和地点
1. 时间轴块：一段一拍，段头写 `[00:00-00:04] 镜头1：低角度起步（Ground-level Low Angle）`，段内写画面、动作、细节、音效
1. 全局约束块：负向清单与硬性限制，放在时间轴之后

**常见坑:**
- 只写总时长不写分段。50% 的案例写了时长，只有 30% 做了分段，没分段的那批普遍在六秒后开始漂。
- 在每段里重写服装发型。逐段重申身份反而诱发段间外观突变，应该在固定块里写一次，再加一句全程不变。
- 没有音频输入却把时间精确到 0.01 秒。纯文生视频的时间分辨率大约在 0.5 秒，更细的数字只是噪音。
- 把负向清单塞进某一段里。硬性限制应该单独成块放在末尾，才对全片生效。

**可复制引导语:** 我要做一条按时间轴分镜的视频，【内容是：一位骑手在雨夜的霓虹街头送最后一单】，【总时长 15 秒，竖屏 9:16】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## character-reference-lock

### English

#### Reference image identity lock

Name every reference with a stable token, enumerate what to inherit from it, and separately enumerate what must not be inherited. The inherit-nothing-else clause is what separates working locks from broken ones.

**Use when:** Any clip where a face, an outfit, a product or a UI layout must survive across shots. Applies to Seedance 2.0 and 2.5 alike; 2.5 additionally accepts audio and video references under the same token scheme.

**Guidance:**

- Split references by role and lock each separately. The GoPro fishing case declares `@location1` for the river and `@hands1` for the forearms, tools and bottle, each followed by `100% matches reference`.
- Enumerate the inherit list instead of writing keep her consistent. The boyfriend-POV case lists thirteen items: identity, features, face shape, skin tone, apparent age, hairstyle, hair colour, height, build, body proportion, clothing, footwear, overall bearing.

**Examples:** [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

**Structure:**
1. Token declaration: give each reference a name — `@image1`, `@Image2`, `<<<image_1>>>`, `@location1`, `@hands1` — and reuse it verbatim everywhere
1. Inherit list: enumerated attributes pulled from the reference (face shape, features, hair colour, body proportions, wardrobe items, accessories)
1. Do-not-inherit list: background, room, furniture, pose, composition, framing, original lighting, any text
1. Cross-shot clause: same face when turning, looking down, speaking, or with a hand near the face
1. Negative: no cloning, no duplicates, no feature averaging, no attribute swaps between characters

**Pitfalls:**
- Uploading a reference without any textual lock. The model then treats it as a style reference, not an identity reference.
- Compressing wardrobe into same outfit. Every working case in the corpus breaks the outfit into individually named garments and accessories.
- Feeding a sketch or illustration reference without a render instruction. Add use only as design blueprints, render as fully realistic live-action humans, or the line-art survives into the video.
- Adding references that no token names. Each unnamed extra image is one more chance for attributes to bleed between subjects.

**Copy-ready lead-in:** I want a clip where the character looks the same from start to finish. [I am sending you 2 reference images: a young woman with short hair and thin-framed glasses.] [What she does: browses a bookshop, looks up and smiles at the camera.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 参考图身份锁定

给每张参考图一个稳定 token，逐条列出要继承什么，再单独列出不许继承什么。能不能生效，差别就在后面那条不继承声明。

**适用场景:** 任何需要一张脸、一套衣服、一个产品或一套 UI 布局跨镜头存活的片子。2.0 和 2.5 都适用，2.5 还能用同一套 token 语法引用音频和视频。

**要点:**

- 按角色拆参考图，分别锁定。GoPro 钓鱼那条把 `@location1` 用于河流场景、`@hands1` 用于前臂和工具器物，每个后面各跟一句 100% matches reference。
- 继承清单要逐条枚举，别写保持一致。男友视角那条列了十三项：身份、五官、脸型、肤色、年龄感、发型、发色、身高、体型、身体比例、服装、鞋履、整体气质。

**示例:** [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

**结构:**
1. Token 声明：给每张参考图起名——`@图1`、`@Image2`、`<<<image_1>>>`、`@location1`、`@hands1`——并全程原样复用
1. 继承清单：从参考图取哪些属性（脸型、五官、发色、身材比例、服装单品、饰品）
1. 不继承清单：背景、房间、家具、姿势、构图、画角、原始光线、任何文字
1. 跨镜头声明：转头、低头、说话、手靠近脸时保持同一张脸
1. 负向：禁止克隆、分身、五官平均化、角色之间属性互换

**常见坑:**
- 只上传参考图不写文字锁定。模型会把它当风格图，不当身份图。
- 把服装压缩成同一套衣服。案例库里生效的写法都把服装拆成逐件命名的单品和饰品。
- 用草图或插画当参考却不写渲染指令。要补 use only as design blueprints, render as fully realistic live-action humans，否则线稿感会留在成片里。
- 塞进没有 token 指名的参考图。每多一张，属性串味的机会就多一次。

**可复制引导语:** 我要做一条需要人物前后长得一样的视频，【我会发给你 2 张人物参考图，她是一位短发、戴细框眼镜的年轻女性】，【她要做的事：在书店里找书、抬头对镜头笑】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## handheld-ugc-vlog

### English

#### Handheld UGC vlog

Buy believability with camera defects. Name a specific consumer camera era, list its flaws as requirements, and switch cinematic polish off by hand.

**Use when:** Personal-feeling footage: daily life, travel, gym, cooking, get-ready-with-me. Use it whenever the goal is looks like someone actually filmed this rather than looks expensive.

**Guidance:**

- Use camera defects as the realism switch: hand shake, focus hunting, exposure breathing, drifting composition, uneven zooms, occasional accidental face cropping. 23 cases in the corpus reach phone-footage texture with this vocabulary.
- Name the gear era rather than asking for realism: mini DV camcorder, 16mm, VHS, iPhone 16 Pro, chest-mounted action cam. A named device carries a whole optical signature that the word realistic does not.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) [#2](https://goodcase.ai/cases/16mm-analog-morning-vlog) [#3](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9) [#4](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)

**Structure:**
1. CAMERA: mount, era, handling flaws
1. LOOK: tape or film texture, grain, halation, contrast, exposure behaviour
1. STYLE: pacing and mood in one or two lines
1. SUBJECT and SETTING: who and where, kept short
1. STORYBOARD: short rows like `→ (3s, propped medium shot)` plus one spoken line
1. AUDIO NOTES and REALISM NOTES: ambient sound list, then body-language and imperfection list

**Pitfalls:**
- Asking for handheld authenticity and 4K cinematic lighting in the same prompt. They are two different light logics and the result lands in plastic territory.
- Letting the framing go to extreme close-up. The boyfriend-POV case explicitly bans faces filling the frame and caps the tightest framing at chest-up, because big close-ups expose AI faces.
- Using digital zoom as a transition. If you want a single take, add an explicit ban on digital zoom, sudden push-ins and invisible cuts.
- Over-writing the dialogue. Long lines pull attention off the picture and worsen lip sync; keep each line under about eight words.

**Copy-ready lead-in:** I want a handheld, everyday vlog. [On camera: a woman in her twenties wearing an oversized hoodie.] [Scene: making pour-over coffee in her own kitchen on a weekend morning.] I will attach reference images if I have them. Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 手持 UGC vlog

用相机缺陷换真实感。指名一个具体的消费级器材年代，把它的毛病写成要求，再手动关掉电影感。

**适用场景:** 要私人感的素材：日常、旅拍、健身、做饭、出门前准备。目标是像真有人拍的，而不是像很贵的时候用这套。

**要点:**

- 把相机缺陷当真实感开关：手抖、对焦来回找、曝光呼吸、构图漂移、变焦不匀、偶尔切掉半张脸。案例库里 23 条靠这套词表拿到手机实拍质感。
- 指名器材年代，不要笼统要求真实：mini DV 家用摄像机、16mm、VHS、iPhone 16 Pro、胸挂运动相机。一个具体型号带着整套光学特征，realistic 这个词带不来。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-minidv-coffee-asmr-vlog) [#2](https://goodcase.ai/cases/16mm-analog-morning-vlog) [#3](https://goodcase.ai/cases/mightyking-seedance-ai-7bbc1d4f9ad9) [#4](https://goodcase.ai/cases/seedance-2-5-eba905fedcff)

**结构:**
1. CAMERA：机器怎么拿、什么年代、有哪些操作毛病
1. LOOK：磁带或胶片质感、颗粒、光晕、对比度、曝光行为
1. STYLE：节奏和情绪，一两行写完
1. SUBJECT 与 SETTING：谁、在哪，都写短
1. STORYBOARD：`→ (3s, propped medium shot)` 这种短行，配一句口语台词
1. AUDIO NOTES 与 REALISM NOTES：环境音清单，然后是肢体语言和瑕疵清单

**常见坑:**
- 同一条 prompt 里既要手持真实感又要 4K 电影级打光。两套光线逻辑打架，结果落在塑料感上。
- 让景别推到大特写。男友视角那条明确禁止脸部填满画面，最近只给到胸口以上，因为大特写会暴露 AI 脸。
- 用数字变焦当转场。要一镜到底就补一句禁止数字变焦、突然推近和隐形剪辑。
- 台词写太长。长句抢画面还拖垮口型，每句控制在八个词以内。

**可复制引导语:** 我要做一条手持感的生活 vlog，【出镜的人是：一位二十多岁的女生，穿宽松卫衣】，【场景是：周末早上在自家厨房做手冲咖啡】，有参考图我会一起发给你。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## pov-continuous-take

### English

#### First-person continuous take

Bodycam, GoPro, FPV and handlebar POV. The camera is mounted on a body, so its motion has to be derived from that body, and every cut has to be declared by hand.

**Use when:** Immersive footage where the viewer is the operator: tactical entry, action sports, cooking from the cook's eyes, drone flight. 32 of 207 cases sit here.

**Guidance:**

- Declare the physical mount and its height so the model can derive the shake: chest-mounted on the point agent, POV chest-to-eye height, moving only with the body.
- Refuse an empty first frame. The GoPro fishing case writes `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`, which removes the dead first second.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

**Structure:**
1. SCENE CONTEXT: one paragraph naming the subject, the mount and the total duration
1. ACTIVE REFERENCES: named tokens for location, hands and props
1. LOCATION MAP: what sits in foreground, midground and background per segment, plus camera height
1. FIRST FRAME / BLOCKING: a non-empty opening frame, already mid-action
1. FORMAT MODE: where the hard cuts fall and which stretches are one continuous take
1. OPTICS: field of view per segment, with a no-drift clause
1. Timeline and audio

**Pitfalls:**
- The operator's own face appearing in frame. Add `the camera itself is never visible` and describe only what the hands do.
- Hands entering frame without a left or right assignment. Say which hand holds what, or a third hand grows in.
- Scheduling a large scene jump inside a stretch labelled one continuous take. Either walk there in real time or put a declared hard cut at the boundary.
- Forgetting to ban cinematic treatment. Bodycam and action-cam material needs an explicit `no slow-motion, no cinematic grading` or it turns into a movie trailer.

**Copy-ready lead-in:** I want a first-person clip in one continuous take. [My point of view: riding a mountain bike down a forest trail.] [My hands and the handlebars should stay in frame.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 第一人称一镜到底

执法记录仪、GoPro、FPV 和车把视角。相机挂在身体上，运动必须从身体推导，每一次剪辑都得手动声明。

**适用场景:** 要观众就是操作者的沉浸素材：破门突入、极限运动、厨师视角做饭、无人机飞行。207 条里 32 条属于这类。

**要点:**

- 声明挂载位置和高度，模型才能推出该怎么晃：胸挂在破门手身上、POV 保持胸到眼的高度、只随身体移动。
- 拒绝空首帧。GoPro 钓鱼那条写 `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`，把死掉的第一秒省掉了。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

**结构:**
1. SCENE CONTEXT：一段话交代主体、挂载方式和总时长
1. ACTIVE REFERENCES：场景、手和道具的命名 token
1. LOCATION MAP：每段的前景、中景、背景各是什么，以及机位高度
1. FIRST FRAME / BLOCKING：首帧非空，开场就在动作中间
1. FORMAT MODE：硬切落在哪里，哪几段是连续一镜
1. OPTICS：每段的视场角，附一句段内不许漂移
1. 时间轴与音频

**常见坑:**
- 操作者自己的脸入画。补一句 `the camera itself is never visible`，只描述手在做什么。
- 手入画却不说左右手和持物。要写清哪只手拿什么，否则会长出第三只手。
- 在标了一镜到底的段落里安排跨场景大跳。要么实时走过去，要么在边界放一个声明过的硬切。
- 忘了禁掉电影化处理。执法记录仪和运动相机素材要明写 no slow-motion, no cinematic grading，否则会变成电影预告片。

**可复制引导语:** 我要做一条第一人称一镜到底的视频，【我的视角是：骑着山地车从林道冲下山】，【画面里要出现我的双手和车把】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## ugc-creator-review

### English

#### UGC creator review with spoken lines

A creator unboxes, handles and endorses a product on camera. Two independent locks are needed — one on the person, one on the product — and the spoken lines are welded into the actions.

**Use when:** Affiliate-style product videos, unboxings and creator reviews where the product must stay recognisable while being picked up, rotated and worn.

**Guidance:**

- Lock the product separately from the person and decompose it into parts. The sunglasses review names frame shape, lenses, hinges, colours, materials and proportions, and locks the retail box and leather case as their own references.
- Put each line inline at its moment. The coffee-machine ad places `I finally tried this coffee machine` on the second the creator walks into the kitchen, not in a separate dialogue section.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106) [#2](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9) [#3](https://goodcase.ai/cases/case-b157d9c072bc)

**Structure:**
1. Character lock paragraph (face, hair, makeup, skin tone, proportions, full outfit)
1. Product lock paragraph, structurally decomposed
1. Setting and light: room, time of day, handheld smartphone feel
1. Beat flow: unbox, detail rotation, wear or use, mirror or camera check, place-back
1. Spoken lines placed inline at the beat where they are said
1. Requirements tail: aspect ratio, duration, realistic hands, no logos or watermarks

**Pitfalls:**
- Holding a macro shot on a printed label. Brand text is almost always rendered wrong; either keep the tight shots off the text or require an unbranded surface.
- Asking the creator to walk and perform a fine product manipulation at the same time. Split them into two beats.
- Letting the spoken line run long. When lip sync slips, cut the sentence rather than adding lip-sync adjectives.
- Requesting on-screen slogans from the model. Generated typography comes out garbled; leave a clean tail frame and add text in post.

**Copy-ready lead-in:** I want a UGC creator review that sells a product. [My product is a bottle of shampoo; I am sending you the product photos.] [On camera: a woman with long hair, talking while she uses it in front of the bathroom mirror.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### UGC 口播测评带货

创作者对着镜头开箱、上手、种草。要两把独立的锁——一把锁人，一把锁产品——台词焊进动作里。

**适用场景:** 带货型产品视频、开箱和创作者测评：产品要在被拿起、旋转、佩戴的过程中始终认得出来。

**要点:**

- 产品锁和人物锁分开写，并把产品拆成结构件。太阳镜测评那条点名了镜框形状、镜片、铰链、颜色、材质、比例，还把零售盒和皮套各自当独立参考锁住。
- 台词写在它发生的那一拍里。咖啡机广告把 `I finally tried this coffee machine` 放在创作者走进厨房的那一秒，不另开对白区。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-ugc-69e79f387106) [#2](https://goodcase.ai/cases/seedance-2-5-ugc-7de9338ecfc9) [#3](https://goodcase.ai/cases/case-b157d9c072bc)

**结构:**
1. 人物锁定段（脸、发型、妆、肤色、比例、整套服装）
1. 产品锁定段，按结构拆开写
1. 场景与光线：房间、时段、手持手机质感
1. 节拍流程：开箱、细节旋转、佩戴或使用、对镜或对镜头确认、放回
1. 台词就写在它被说出的那一拍里
1. 需求收尾：画幅、时长、realistic hands、no logos or watermarks

**常见坑:**
- 微距镜头停在印刷标签上。品牌文字几乎必错，要么特写避开文字，要么直接要求无品牌表面。
- 让创作者边走边做精细的产品操作。拆成两拍。
- 台词写太长。口型对不上时应该砍句子，而不是加口型形容词。
- 让模型渲染上屏 slogan。生成的字排出来是乱码，应该留一个干净的收尾画面，文字后期加。

**可复制引导语:** 我要做一个 UGC 口播测评带货视频，【我的产品是一瓶洗发水，产品图片我提供给你】，【出镜的人是一位长发女生，在浴室镜子前边用边讲】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## product-commercial-shotlist

### English

#### Cinematic product commercial shot list

A polished 8 to 20 second ad: a stated commercial aesthetic up front, a numbered or timed shot breakdown in the middle, a hero frame at the end, and a keyword tail.

**Use when:** Beauty, beverage, jewellery, automotive and fragrance spots where the look has to read as paid production rather than as a creator video.

**Guidance:**

- Open with the ad-aesthetic vocabulary before any shot: premium beauty-commercial aesthetics, luxury advertising aesthetic, anamorphic lens, volumetric lighting. This sets the light logic for every shot that follows.
- Name the object of every macro and slow-motion beat: foam texture, liquid ribbons, diamond dispersion, metallic reflections across the packaging. Unnamed macro produces a generic blurred close-up.

**Examples:** [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b)

**Structure:**
1. Opening paragraph: category, duration, aspect ratio, commercial aesthetic vocabulary, colour grading, depth of field
1. Hero product description: material, silhouette, finish, how light behaves on it
1. Shot Breakdown: either `0-2s:` timed rows or `Shot 1:` numbered rows, never both
1. Text and slogan lines, each with its own time window
1. Style Keywords tail as a single trailing block

**Pitfalls:**
- Expecting the model to render a logo or slogan cleanly. Reserve a clean end frame and composite the type afterwards.
- Mixing high-end commercial light with phone-UGC texture. Pick one; blending them yields a plastic look.
- Stacking multiple physics effects in one beat. Liquid, smoke and powder each need their own shot.
- Packing eight shots into eight seconds. Under about one second per shot the model stops resolving individual actions.

**Copy-ready lead-in:** I want a cinematic product commercial. [My product is a pair of matte black wireless earbuds; I am sending you the product photos.] [The tone I want: cool, technical, slow-paced.] [10 seconds, horizontal 16:9.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 电影级产品广告分镜

8 到 20 秒的精修广告：开头写死广告美学，中间是编号或计时的分镜拆解，结尾一个英雄镜头，最后甩一段关键词。

**适用场景:** 美妆、饮品、珠宝、汽车、香水这类要读成投放级制作、不能读成创作者视频的广告。

**要点:**

- 分镜之前先写广告美学词：premium beauty-commercial aesthetics、luxury advertising aesthetic、变形宽银幕镜头、体积光。它决定后面每个镜头的光线逻辑。
- 每个微距和慢动作都指名拍什么：泡沫质地、液体飘带、钻石色散、金属反光扫过包装。不指名的微距只会给一个通用虚化特写。

**示例:** [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b)

**结构:**
1. 开头段：品类、时长、画幅、广告美学词、调色、景深
1. 英雄产品描述：材质、轮廓、表面处理、光在上面怎么走
1. Shot Breakdown：要么用 `0-2s:` 计时行，要么用 `Shot 1:` 编号行，不要混用
1. 文字与 slogan 行，各自带出现时段
1. Style Keywords 收尾，堆成一个尾块

**常见坑:**
- 指望模型把 logo 或 slogan 渲染干净。留一个干净的收尾帧，字后期合成。
- 把高端广告光和手机 UGC 质感混着写。二选一，混着写会得到塑料感。
- 一拍里堆多种物理效果。液体、烟雾、粉末各占一个镜头。
- 八秒塞八个镜头。单镜低于一秒左右，模型就解析不出单独动作了。

**可复制引导语:** 我要做一条电影质感的产品广告，【我的产品是一款哑光黑的无线耳机，产品图片我提供给你】，【想要的调性是：冷峻、科技感、慢节奏】，【时长 10 秒，横屏 16:9】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## dialogue-performance-beats

### English

#### Dialogue and performance beats

Declare the spoken language, tag the speaker, write the reaction as a causal chain rather than a list of expressions, and close each beat with an explicit end state.

**Use when:** Whenever a line has to be heard rather than implied. 78 of 207 cases carry quoted dialogue inline (38%), and 16 explicitly manage lip sync. Seedance 2.5 additionally supports driving lip sync from an uploaded audio track.

**Guidance:**

- Declare the language on its own line before the line itself, in the form `セリフ言語: 日本語` or `Natural English dialogue only`, and wrap the line in braces or quotes so it is not read as scene description.
- With an uploaded audio track, state that lip sync follows the actual vocal in the audio rather than the written text, and require closed lips during instrumental passages. Also restrict lip sync to one performer so background characters do not start mouthing.

**Examples:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

**Structure:**
1. Language and audio-source declaration, before any line
1. Speaker tags, one per character
1. Per beat: the causal reaction chain, then the line, then the end state
1. Global performance principles: what the character does and does not know
1. Negative: no voice-over, no silent gaps, no expression-sticker switching

**Pitfalls:**
- Continuous dialogue clips need an explicit `no silent moments and no voice-over`, otherwise the model delivers music plus a mouth moving.
- Proper nouns and digits are the least reliable part of any generated line. Move brand names and numbers out of the dialogue and into on-screen text added in post.
- Two characters speaking in the same beat splits the lip-sync budget. Give one the line and the other a physical reaction.
- A line longer than roughly eight words in a three-second beat will desync. Shorten the line before touching anything else.

**Copy-ready lead-in:** I want an acted scene with dialogue. [Characters: two former lovers meeting again in a cafe on a rainy night.] [Lines: He says, you have not changed. She says, neither have you.] [The mood moves from guarded to softening.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 对白与表演节拍

声明对白语种、标出说话人、把反应写成因果链而不是表情清单，每一拍以一个明确的结束状态收尾。

**适用场景:** 台词要被听见而不是被暗示的时候。207 条里 78 条把台词直接写进正文（38%），16 条显式管理口型。Seedance 2.5 还支持用上传的音轨驱动口型。

**要点:**

- 语种单独成行写在台词之前，写成 `セリフ言語: 日本語` 或 `Natural English dialogue only`，并把台词包进花括号或引号，避免被当成场景描述读。
- 有上传音轨时，写明口型依据音频里的真实人声而不是文字，并要求无人声段落闭唇。同时限定只有一个人对口型，背景人物别跟着张嘴。

**示例:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

**结构:**
1. 语种与音源声明，写在任何台词之前
1. 说话人标签，每个角色一个
1. 每一拍：因果反应链、台词、结束状态
1. 全局表演原则：角色知道什么、不知道什么
1. 负向：不要旁白、不要静默空档、不要表情包式切换

**常见坑:**
- 连续对白的片子要明写 `no silent moments and no voice-over`，否则模型会给你配乐加一张动的嘴。
- 专有名词和数字是生成台词里最不可靠的部分。把品牌名和数字从对白挪到后期加的上屏文字里。
- 两个角色在同一拍说话会分掉口型预算。一个给台词，另一个给身体反应。
- 三秒的拍子里台词超过八个词左右就会失步。先砍台词，再调别的。

**可复制引导语:** 我要做一条有对白的表演戏，【人物是：一对在雨夜咖啡馆重逢的旧恋人】，【台词是：男，你还是老样子。女，你也是。】，【情绪从克制到松动】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## cinematic-narrative-short

### English

#### Cinematic narrative short

Multi-act storytelling in 15 to 60 seconds. Titled acts, a character card ahead of the acts, and a reveal written as a concrete image rather than as a promise of surprise.

**Use when:** Trailers, mini-dramas, disaster set pieces, sci-fi mysteries and romance shorts — anything where the viewer should follow a plot rather than admire a look.

**Guidance:**

- Title each act. The romance trailer labels its acts The Message and Running Through the City, and the title itself constrains how much information that act carries.
- Keep the character card to five slots — hair, top, bottom, shoes, carried object. That is enough for the model to recognise the person without overloading the identity budget.

**Examples:** [#1](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951) [#2](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100) [#3](https://goodcase.ai/cases/mermaid-rescue-cinematic-story) [#4](https://goodcase.ai/cases/youmind-1980s-slasher-yacht-octopus)

**Structure:**
1. Genre and visual key: reference aesthetic, grading, lens behaviour, editing tempo
1. Character cards ahead of the acts, one short block per person
1. Acts, each with a title and a time window
1. Shots inside each act, varying in count between acts
1. Music and sound trajectory
1. Ending instruction, stated as a cut rather than as a feeling

**Pitfalls:**
- Even pacing. If every act gets the same number of shots, the story reads as a montage; vary shot counts deliberately.
- Leaving the dialogue to the model. Generated lines drift off-genre; write them, even if only one per act.
- Single-generation clips over 30 seconds show a marked rise in identity drift. Restate the identity lock at the start of the second half or split the generation.
- Writing fade out at the end. The model really fades and burns the last two seconds; write a hard cut to black, no fade, no extended tail.

**Copy-ready lead-in:** I want a cinematic narrative short. [The story: an astronaut in an abandoned space station receives a message from the year 2100.] [Genre and mood: sci-fi mystery, cold palette.] [15 seconds.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 电影级叙事短片

15 到 60 秒的多幕叙事。每幕带标题，角色卡写在幕之前，反转写成具体画面而不是一句会让人震惊。

**适用场景:** 预告片、迷你剧、灾难段落、科幻悬念、爱情短片——观众要跟剧情而不是看质感的场合。

**要点:**

- 给每一幕起标题。浪漫预告那条把幕命名为 The Message 和 Running Through the City，标题本身就约束了这一幕能装多少信息。
- 角色卡控制在五格——发型、上衣、下装、鞋、随身物。够模型认人，又不会吃光身份预算。

**示例:** [#1](https://goodcase.ai/cases/caden-flux-seedance-ai-8ffb5f062951) [#2](https://goodcase.ai/cases/sci-fi-mystery-message-from-2100) [#3](https://goodcase.ai/cases/mermaid-rescue-cinematic-story) [#4](https://goodcase.ai/cases/youmind-1980s-slasher-yacht-octopus)

**结构:**
1. 类型与视觉基调：参照美学、调色、镜头行为、剪辑节奏
1. 角色卡写在分幕之前，每人一小块
1. 分幕，每幕带标题和时间窗
1. 幕内镜头，各幕镜头数量不要一样
1. 音乐与音效走向
1. 收尾指令，写成一个剪辑动作而不是一种感觉

**常见坑:**
- 节奏平均。每幕镜头数一样，故事就读成蒙太奇了，要刻意给不同数量。
- 把台词交给模型。生成的台词会偏离类型，自己写，哪怕每幕只写一句。
- 单条生成超过 30 秒，身份漂移概率明显上升。在后半段开头重申身份锁，或者干脆拆开生成。
- 结尾写 fade out。模型会真的淡出，白白烧掉最后两秒，应该写 hard cut to black、不淡出、不延长尾音。

**可复制引导语:** 我要做一条电影感的叙事短片，【故事是：宇航员在废弃空间站里收到一条来自 2100 年的讯息】，【想要的类型和气质：科幻悬疑，冷色调】，【时长 15 秒】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## anime-style-lock

### English

#### Anime and stylized style lock

Specify the drawing style as measurable parameters, then attach an exclusion list of the neighbouring styles it must not fall into. Without the exclusion list, anime collapses into a generic 3D face.

**Use when:** Cel-look action, Ghibli-flavoured slice of life, 3D toon RPG battles, 2D hand-drawn cooking. Roughly a quarter of the corpus is stylized animation of some kind.

**Guidance:**

- Write the style as parameters: thin coloured contour lines, two to three steps of cel shading with translucent mid-shadow, multi-layer highlights in irises and hair, and distinct reflectance and roughness for cloth, leather, metal, gems, wet floor and glass.
- Always attach the exclusion list. The anime duel case rules out thick black outlines, flat single-layer cel shadow, low-budget TV-anime look, generic 3D pretty-girl face, smooth plastic CG, semi-photoreal, photoreal, low-density backgrounds and muddy colour.

**Examples:** [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e)

**Structure:**
1. Style lock block: line weight, number of cel shading steps, highlight layering, per-material reflectance
1. Exclusion list: the adjacent styles that must not appear
1. Character and palette lock: signature colours pulled from the reference, forbidden from swapping between characters
1. Stage and atmosphere: how the environment is re-tinted toward the character palette
1. Camera order and action

**Pitfalls:**
- Writing anime style without naming a school. The model averages across everything it knows and returns a generic face.
- Mixing 2D hand-drawn vocabulary with 3D toon-render vocabulary. They are two different word sets and blending them lands on semi-photoreal.
- Fast action degrading cel shadow into realistic lighting. Restate the shading spec inside the high-speed segments.
- Letting text, logos or UI appear in the scene. Anime backgrounds attract garbled signage unless it is banned outright.

**Copy-ready lead-in:** I want an animated clip whose art style stays locked. [Style: 1990s cel-shaded Japanese animation; I am sending you style references.] [Content: a girl on a broomstick gliding over a seaside town at dusk.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 动漫与风格化画风固定

把画风写成可测量参数，再附一份相邻画风的排除清单。没有排除清单，动漫会塌成通用 3D 脸。

**适用场景:** 赛璐珞动作戏、吉卜力味日常、3D 卡通 RPG 战斗、2D 手绘烹饪。案例库里大约四分之一是各类风格化动画。

**要点:**

- 画风写成参数：细而有色的轮廓线、二到三段赛璐珞阴影加透明感中间影、瞳孔与头发的多层高光、布革金属宝石湿地面玻璃各自不同的反射与粗糙度。
- 一定要附排除清单。动漫剑戟那条排除了粗黑轮廓、单层平涂阴影、低成本 TV 动画感、通用 3D 美少女脸、塑料 CG 感、半写实、写实、低密度背景和浑浊色彩。

**示例:** [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e)

**结构:**
1. 画风固定块：线条粗细、赛璐珞阴影段数、高光层次、逐材质反射差异
1. 排除清单：不许出现的相邻画风
1. 角色与配色锁：从参考图抽出的固有色，禁止在角色之间交换
1. 舞台与氛围：环境如何向角色配色靠拢
1. 摄影机顺序与动作

**常见坑:**
- 只写 anime style 不指名流派。模型会在它知道的一切之间取平均，还你一张通用脸。
- 把 2D 手绘词表和 3D 卡通渲染词表混着写。这是两套词，混出来是半写实。
- 快动作会让赛璐珞阴影退化成写实光影。要在高速段里重申一次上色规格。
- 让文字、logo、UI 出现在画面里。动漫背景特别容易长出乱码招牌，除非明确禁掉。

**可复制引导语:** 我要做一条画风固定的动画短片，【画风是：九十年代赛璐璐日式动画，我会发给你风格参考图】，【内容是：少女骑着扫帚掠过黄昏的海边小镇】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## stop-motion-cadence

### English

#### Stop motion and stepped cadence

Stop motion is a timing spec before it is a look. Pin the frame rate and the hold count, name the craft material, and ban the three things that silently smooth it away.

**Use when:** Claymation, paper-cut, moving-oil-painting, collage and tabletop object animation. 24 cases in the corpus sit in this family.

**Guidance:**

- Pin the cadence numerically: `True 12fps, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding`.
- Name the material and exclude its neighbours in the same breath. The wolf-attack case writes a hand-painted 2D look, a moving oil painting, NOT clay, NOT puppets, NOT 3D.

**Examples:** [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff)

**Structure:**
1. Cadence declaration: frames per second, frames held per pose, snap not glide
1. Craft material, with adjacent materials explicitly excluded
1. Negative block: no smooth interpolation, no motion blur, no morphing
1. Camera and surface: locked overhead or locked stage, no hands, no extra objects
1. Segment-by-segment transformation of the subject

**Pitfalls:**
- Not separating environment motion from subject motion. Blizzard haze, smoke and water may drift smoothly while figures step on twos, but you have to say so or everything smooths out together.
- Asking for stop motion and a long moving camera shot at once. These are contradictory requirements and the camera move usually wins.
- Requesting clay and paper in the same prompt. Their light behaviour differs, and the model blends them into an ambiguous surface.
- Keeping normal-scale action at 12fps. Stepped animation drops readability on fast motion, so exaggerate the pose amplitude.

**Copy-ready lead-in:** I want a clip with a stop-motion feel. [Materials: felt and clay.] [Content: a little felt fox pitching a tent in the forest.] [The stepped, frame-by-frame cadence should be obvious.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 定格动画与步进节奏

定格首先是时间规格，其次才是质感。写死帧率和保持帧数，指名工艺材质，再禁掉那三样会悄悄把它抹平的东西。

**适用场景:** 黏土、剪纸、会动的油画、拼贴、台面物件动画。案例库里 24 条属于这一族。

**要点:**

- 节奏用数字写死：`True 12fps, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding`。
- 指名材质的同时排除相邻材质。狼群袭击那条写的是手绘 2D 质感、会动的油画，NOT clay、NOT puppets、NOT 3D。

**示例:** [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff)

**结构:**
1. 节奏声明：每秒帧数、每个姿势保持几帧、跳变而不是滑动
1. 工艺材质，并显式排除相邻材质
1. 负向块：不插值、不运动模糊、不形变过渡
1. 机位与台面：锁死俯拍或锁死舞台，不出现手，不出现多余物件
1. 被摄物的逐段变形

**常见坑:**
- 没有把环境运动和主体运动分开。风雪、烟、水可以平滑漂移，人物和道具要步进，不写清楚就会一起被平滑掉。
- 同时要定格和长镜头运动。这是互斥需求，通常是运镜赢。
- 同一条里既要黏土又要纸片。两者的光影逻辑不同，模型会混成一种说不清的表面。
- 12fps 下还用常规动作幅度。步进动画在快动作上会丢可读性，姿势幅度要放大。

**可复制引导语:** 我要做一条定格动画质感的短片，【材质是：毛毡和黏土】，【内容是：一只毛毡小狐狸在森林里搭帐篷】，【要有明显的逐帧步进感】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## process-transformation-montage

### English

#### Process and transformation montage

Cooking steps, renovation timelapse, blueprint-to-house, miniature city assembly. The craft here is declaring what must not change, then ordering the change spatially.

**Use when:** Any clip whose subject is a process rather than a person: recipes, builds, assemblies, before-and-after reveals. 35 cases in the corpus.

**Guidance:**

- Spend a whole paragraph on invariants. The renovation case locks camera position, angle, focal length, perspective and composition, then separately locks room dimensions, walls, windows, doors, ceiling height and structural layout.
- Order the change spatially, not vaguely. Flooring spreads left to right, then walls and ceiling transform simultaneously, then furniture lands — this beats gradually transforms every time.

**Examples:** [#1](https://goodcase.ai/cases/case-429309e40d97) [#2](https://goodcase.ai/cases/case-778d0c927488) [#3](https://goodcase.ai/cases/case-8bdac964f9d4) [#4](https://goodcase.ai/cases/case-179a06586ce5)

**Structure:**
1. Invariants block: what stays fixed — camera, geometry, layout, scale
1. Initial state, described concretely
1. Ordered transformation segments, each with a spatial direction
1. Final state plus a short life-signs beat
1. Sound: assembly clicks, ambience, and whether dialogue exists at all

**Pitfalls:**
- Moving the camera during the transformation. Any camera motion competes with the change itself, and the audience loses the before-and-after anchor.
- Assembly montages drifting toward toy scale. The miniature case devotes a NEGATIVE block to excluding an island that is too small, a cramped harbour, cheap plastic feel and a town of only a few houses.
- Combining timelapse and slow motion in one segment. Pick one temporal treatment per beat.
- Running more than about six steps in one prompt. Beyond that, split into two generations and stitch.

**Copy-ready lead-in:** I want a process and transformation montage. [The process: dough going from kneading to a finished croissant out of the oven.] [Locked overhead camera, 12 seconds.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 流程与变换蒙太奇

烹饪步骤、改造延时、蓝图变房子、微缩城市组装。这类的手艺在于先声明什么不许变，再把变化按空间顺序排开。

**适用场景:** 主角是过程而不是人的片子：菜谱、建造、组装、前后对比。案例库里 35 条。

**要点:**

- 拿一整段写不变量。改造那条锁了机位、角度、焦段、透视、构图，再单独锁了房间尺寸、墙、窗、门、层高和结构布局。
- 变化按空间顺序排，不要含糊。地面从左到右铺开，然后墙和天花板同时变，然后家具落位——这比 gradually transforms 强得多。

**示例:** [#1](https://goodcase.ai/cases/case-429309e40d97) [#2](https://goodcase.ai/cases/case-778d0c927488) [#3](https://goodcase.ai/cases/case-8bdac964f9d4) [#4](https://goodcase.ai/cases/case-179a06586ce5)

**结构:**
1. 不变量块：什么固定不动——机位、几何、布局、尺度
1. 起始状态，写具体
1. 有序变换段，每段带一个空间方向
1. 终态，外加一小段生命感
1. 音效：组装声、环境音，以及到底有没有对白

**常见坑:**
- 变换过程中还运镜。任何机位运动都在跟变化本身抢注意力，观众也丢了前后对比的锚点。
- 组装蒙太奇越拍越小变成玩具感。微缩那条专门用一个 NEGATIVE 块排除了岛太小、港口局促、廉价塑料感和只有几栋房子的小镇。
- 一段里同时用延时和慢动作。每一拍只用一种时间处理。
- 一条 prompt 里排超过六个步骤。超了就拆成两次生成再拼。

**可复制引导语:** 我要做一条过程与变换的蒙太奇，【要展示的过程是：一块面团从揉面到出炉变成牛角包】，【机位固定俯拍，时长 12 秒】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## combat-choreography

### English

#### Combat choreography

Fights read as real when the prompt specifies biomechanics, contact points and an attack chain. Adjectives like epic produce two people swinging at air.

**Use when:** Martial arts, swordplay, street fights, superhero traversal and stunt sequences. 40 cases in the corpus, split fairly evenly between live-action and anime treatments.

**Guidance:**

- Name the discipline and its biomechanics. Authentic Taekwondo biomechanics, realistic anatomy, weight, gravity and momentum reads very differently from epic fight scene.
- Write attacks as chains: straight punch into hook into low kick, met with parry, slip under, check, then an immediate counter body kick. Add that both fighters stay aggressive with no passive waiting, idle stance, reset, teleportation or position jumps.

**Examples:** [#1](https://goodcase.ai/cases/just-sharon7-seedance-ai-8085c03efbb0) [#2](https://goodcase.ai/cases/yourplugai-seedance-ai-fb797edfc8e4) [#3](https://goodcase.ai/cases/case-f7e7c1862f38) [#4](https://goodcase.ai/cases/case-1a9a2c659866)

**Structure:**
1. Biomechanics and body spec: discipline, height and weight, muscle intention
1. Attack chain per beat: attack, defence, counter, reposition
1. Contact points and camera axis
1. Weapon lock: count, grip position, how blade, guard and hilt stay one object
1. Effects and gore ceiling, plus negatives

**Pitfalls:**
- Omitting contact points. Without them you get two people swinging near each other and never connecting.
- Over-cutting. Beyond about four segments in a 7 to 10 second fight, the action stops being legible.
- Leaving the gore level unstated. Safety filtering then softens the whole sequence; the cyber-blade case substitutes black digital particles and glitch fragments and writes No blood.
- Crossing the axis. Left-right relationships flip and the fight becomes incoherent; add an explicit do-not-cross-the-axis line.

**Copy-ready lead-in:** I want a fight scene. [The two fighters: a swordsman in white and a blade-wielder in a bamboo hat.] [Location: a bamboo forest in falling snow.] [Style: wuxia, clean and sharp movement, a camera that keeps up.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 打斗编排

打斗要成立，靠的是生物力学、接触点和连招链。写 epic fight 只会得到两个人互相挥空。

**适用场景:** 武术、剑戟、街头格斗、超能力位移和特技段落。案例库里 40 条，真人和动漫处理大致对半。

**要点:**

- 指名流派和它的生物力学。authentic Taekwondo biomechanics、真实解剖、重量、重力、动量，读起来跟 epic fight scene 完全是两回事。
- 招式写成链：直拳接勾拳接低扫，对方格挡、滑步下潜、封挡，随即反击体踢。再补一句双方持续进攻，不待机、不摆架子、不重置、不瞬移、不跳位。

**示例:** [#1](https://goodcase.ai/cases/just-sharon7-seedance-ai-8085c03efbb0) [#2](https://goodcase.ai/cases/yourplugai-seedance-ai-fb797edfc8e4) [#3](https://goodcase.ai/cases/case-f7e7c1862f38) [#4](https://goodcase.ai/cases/case-1a9a2c659866)

**结构:**
1. 生物力学与身体规格：流派、身高体重、肌肉意图
1. 逐拍连招链：进攻、格挡、反击、重新占位
1. 接触点与镜头轴线
1. 武器锁：数量、握持位置、刀身与鍔柄如何保持一体
1. 特效与血腥尺度，以及负向

**常见坑:**
- 不写接触点。结果是两个人在彼此附近挥舞，永远打不到。
- 切太碎。7 到 10 秒的打斗超过四段左右，动作就读不出来了。
- 不声明血腥尺度。安全过滤会把整段削软；赛博之刃那条用黑色数字粒子和故障碎片替代，并写 No blood。
- 越轴。左右关系会翻转，打斗就散了，要补一句不许越轴。

**可复制引导语:** 我要做一段打斗戏，【对打双方是：白衣剑客和戴斗笠的刀客】，【场地是：下着雪的竹林】，【想要的风格：武侠，动作干净利落，镜头跟得上】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## music-beat-sync-mv

### English

#### Beat-synced music video

Derive beat anchors from BPM, pin every cut, hair flip and formation change to a real downbeat, and constrain the backup dancers so they never steal the visual centre.

**Use when:** K-pop MVs, dance covers, beat-cut fitness edits and club performance clips. Use the audio-anchored variant only on Seedance 2.5, which accepts an audio track as an input modality.

**Guidance:**

- Compute the beat interval before writing shots. The Y2K MV states roughly 128 BPM with about 0.469s per beat, then lists nine named anchors — first downbeat at 2.78s, first scene change at 6.06s, energy drop at 14.02s, chorus at 21.07s, music cut-out at 24.82s — and pins every cut, hair flip, turn and formation change to them.
- Constrain backup dancers by count and by permission: two to six allowed, no facial close-ups, no lip sync, never occluding the lead, never becoming a second visual centre.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

**Structure:**
1. Audio source declaration: which track, and a ban on regenerating, retiming or fading it
1. BPM and a list of named beat anchors with their timestamps
1. Per-segment choreography and formation
1. Wardrobe and identity lock, plus dancer-count limits
1. Typography rules, if captions are on screen
1. A hard stop on a physical action

**Pitfalls:**
- Not declaring an audio source. The model invents background music and the lip sync drifts with it.
- Dressing backup dancers too close to the lead. Make the lead's colours the most saturated and keep her nearest the camera.
- Identity drift concentrating in the high-energy dance segments. Restate the same-face requirement inside those segments specifically.
- Asking for complex choreography and complex camera movement in the same beat. Give one of them the beat and let the other hold steady.

**Copy-ready lead-in:** I want a beat-synced music video. [Genre: K-pop dance track, around 120 BPM.] [The artist: a female soloist with short silver hair in a futuristic stage outfit.] I will send you the audio or lyrics as well. Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 音乐卡点 MV

从 BPM 推出节拍锚点，把每一次剪辑、甩发和队形变化钉在真实重拍上，再把伴舞约束住，别让他们抢走视觉中心。

**适用场景:** K-pop MV、翻跳、卡点健身剪辑、俱乐部演出片段。带音频锚点的写法只在 Seedance 2.5 上用，它接受音轨作为输入模态。

**要点:**

- 先算节拍间隔再写镜头。Y2K 那条写约 128 BPM、每拍约 0.469 秒，然后列了九个命名锚点——2.78 秒第一个强重拍、6.06 秒第一次换景、14.02 秒能量下降、21.07 秒高潮副歌、24.82 秒音乐抽空——并把每次剪辑、甩发、转身和队形变化都钉上去。
- 伴舞按人数和权限双重约束：允许二到六名，不给面部特写、不对口型、不遮挡主角、不成为第二视觉中心。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

**结构:**
1. 音源声明：用哪条音轨，以及禁止重新生成、变速和自动淡出
1. BPM 与一份带时间戳的命名节拍锚点清单
1. 逐段编舞与队形
1. 服装与身份锁，外加伴舞人数上限
1. 字幕排版规则，如果有字上屏
1. 用一个物理动作硬收

**常见坑:**
- 不声明音源。模型会自己编一段背景音乐，口型也跟着乱。
- 伴舞穿得跟主角太像。主角的颜色要最饱和，位置离镜头最近。
- 身份漂移集中在高能量舞蹈段。要专门在那些段里重申同一张脸。
- 同一拍里既要复杂编舞又要复杂运镜。一拍给一样，另一样保持稳定。

**可复制引导语:** 我要做一条卡点音乐 MV，【曲风是：K-pop 舞曲，节奏大约每分钟 120 拍】，【艺人形象是：银色短发的女 solo 歌手，未来感舞台服】，音频或歌词我会一起发给你。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## time-freeze-rewind

### English

#### Time freeze and rewind set piece

A five-beat skeleton — normal, collision, freeze at the peak, orbit, precise rewind — with exactly one character exempt from the freeze. The corpus contains the same author reusing this skeleton with a different physical material, which is direct evidence that it transfers.

**Use when:** Short high-engagement set pieces built on a physics spectacle rather than a plot. The diner version is the single highest-engagement case in the whole corpus.

**Guidance:**

- Keep the five beats and swap the physical material. The corpus has coffee-and-crockery and a flying wig running the identical skeleton, which is what makes it a template rather than a one-off.
- Name the exempt character and give them an attitude — calm, slightly amused, almost bored. That attitude is the narrative spine of the whole effect.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind) [#2](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze) [#3](https://goodcase.ai/cases/90s-diner-time-freeze-effect)

**Structure:**
1. Period and texture line: era, practicals, grain, handheld energy
1. Beat 1 normal: the exempt character established as calm and slightly bored
1. Beat 2 collision: the accident detonates, everything launches
1. Beat 3 freeze: time locks at the peak, every face frozen, one character still moving
1. Beat 4 orbit: a slow full circle through the frozen scene, cataloguing suspended detail
1. Beat 5 rewind and dissolve: everything reverses to exact starting positions, closed by a small casual gesture

**Pitfalls:**
- Describing the freeze as slow motion. That yields slow motion, not a stop; write time locks completely.
- Giving the orbit too little time. The diner version spends nine seconds on one full circle, which is what makes the suspended detail legible.
- Choosing heavy or shattering debris as the frozen material. Liquids and light objects hold up far better in a frozen frame than fragments do.
- Freezing the exempt character by accident. Restate in every frozen beat that this one person keeps moving.

**Copy-ready lead-in:** I want a time-freeze or rewind set piece. [Scene: a 1990s American diner, a waitress has just spilled her coffee.] [The effect I want: everything freezes, the camera circles the room, then the whole scene rewinds to where it started.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 时间冻结与倒放奇观

五拍骨架——日常、碰撞、峰值锁死、环绕、精确倒放——只留一个人不受冻结影响。案例库里同一作者换了物理材质把这套骨架重跑一遍，这就是它可迁移的直接证据。

**适用场景:** 靠物理奇观而不是剧情撑起来的高互动短片。餐厅那版是整个案例库里互动最高的一条。

**要点:**

- 保留五拍，换掉物理材质。案例库里有咖啡和餐具版、有假发飞起版，跑的是同一套骨架，这才让它成为模板而不是一次性作品。
- 指名那个豁免角色并给他一个态度——从容、略带笑意、几乎有点无聊。这个态度是整套效果的叙事支点。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-diner-frozen-time-rewind) [#2](https://goodcase.ai/cases/youmind-rollercoaster-wig-time-freeze) [#3](https://goodcase.ai/cases/90s-diner-time-freeze-effect)

**结构:**
1. 年代与质感行：时代、现场灯、颗粒、手持能量
1. 第一拍常态：把那个豁免角色立成从容、略带无聊
1. 第二拍碰撞：事故炸开，所有东西被抛起
1. 第三拍冻结：时间在峰值锁死，所有人的脸定住，只有一个人还在动
1. 第四拍环绕：慢慢绕冻结场景一整圈，把悬浮细节逐一点名
1. 第五拍倒放与消解：一切精确倒回起始位置，用一个轻的随手动作收尾

**常见坑:**
- 把冻结写成慢动作。那会得到慢动作而不是静止，要写 time locks completely。
- 环绕给的时间太短。餐厅那版用九秒走完一整圈，悬浮细节才看得清。
- 拿重物或会碎裂的东西当冻结材质。液体和轻物件在冻结帧里比碎片扛得住得多。
- 顺手把豁免角色也冻住了。每一个冻结拍里都要重申这个人还在动。

**可复制引导语:** 我要做一段时间冻结或倒放的奇观镜头，【场景是：九十年代的美式餐厅，服务员手里的咖啡刚泼出去】，【我想要的效果是：全场定住，镜头绕场一圈，再整体倒放回原位】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## storyboard-grid-to-video

### English

#### Storyboard grid to video

Two stages: first a single-page sheet of numbered panels from an image model, then that sheet fed to Seedance as the reference. The sheet owns order, framing and timing, and the video prompt only has to connect the panels.

**Use when:** Multi-shot pieces where you want to see and fix the shot order before spending a generation: recipe sequences, action previs, product commercials, day-in-the-life montages.

**Guidance:**

- Tie panel count to runtime already in the image prompt. The croissant sheet puts `TOTAL VIDEO TIME: 12 SECONDS` and `8 SHOTS` in the header and recounts it in the footer as `8 shots × 1.5s = 12 seconds`.
- Give the two reference images separate jobs. The disaster-run case defines Image1 as `the EXACT main character reference` and Image2 as `the EXACT storyboard design and layout reference`.

**Examples:** [#1](https://goodcase.ai/cases/real-case-06-aimikoda) [#2](https://goodcase.ai/cases/real-case-07-techiebysa) [#3](https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c) [#4](https://goodcase.ai/cases/apartment-arrival-storyboard-animation)

**Structure:**
1. Image prompt header: single-page sheet, aspect ratio, panel count, and the drawing style stated as premium storyboard, infographic poster or rough pencil previs
1. Information cards: title, total runtime, number of shots, audio direction, so timing and panel count agree
1. Panel list, one line each: shot size, the action happening in it, and what that panel is for
1. Image prompt tail: the annotation system, and the exclusions such as no timestamps, no extra characters, no watermark
1. Video prompt opening: name which image is the character reference and which is the storyboard, and what each one controls
1. Rule list: follow 1 to N in order, one shot per panel, seconds per shot, no skipped or added steps, character and set stay identical
1. Overall look and close: lighting, camera movement, audio, and the no-subtitle no-watermark tail

**Pitfalls:**
- Baking timecodes into the sheet. Panel timestamps get drawn as artwork and carried into the video; the kung-fu sheet writes `No timestamps` and leaves timing to the rules in step two.
- More panels than the runtime can hold. Work backwards at 1.5 to 3 seconds per panel — the croissant sheet pairs 8 panels with a 12-second video.
- Letting the character sheet and the storyboard fight. The model copies poses off the character sheet; state that the storyboard controls locations, actions, compositions and sequence, and the character sheet only controls the face.
- Panels that describe a picture and no movement. The video comes out as a slideshow; give every panel something already in motion.

**Copy-ready lead-in:** I want to make the storyboard sheet first and then turn it into video. [The story: a stray cat finding its way home through a rainy night, in 9 panels.] [Pixar-style 3D look, 15 seconds total.] Using the prompt template below, write both prompts for me: first the one that generates the storyboard sheet, then the Seedance prompt that turns that sheet into video:

### 中文

#### 分镜网格转视频

分两步走：先用图像模型出一张带编号格子的单页分镜图，再把这张图当参考喂给 Seedance。顺序、构图和时长由分镜图定死，视频提示语只负责把格子连起来。

**适用场景:** 想在出片之前先看见并改定镜头顺序的多镜头片子：制作流程、动作预览、产品广告、一天生活的串场蒙太奇。

**要点:**

- 格数和总时长在出图这一步就绑死。牛角包那张分镜图的页眉写着 `TOTAL VIDEO TIME: 12 SECONDS` 和 `8 SHOTS`，页脚再算一遍 `8 shots × 1.5s = 12 seconds`。
- 两张参考图分工写清楚。灾难逃生那条把 Image1 定成 `the EXACT main character reference`，Image2 定成 `the EXACT storyboard design and layout reference`。

**示例:** [#1](https://goodcase.ai/cases/real-case-06-aimikoda) [#2](https://goodcase.ai/cases/real-case-07-techiebysa) [#3](https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c) [#4](https://goodcase.ai/cases/apartment-arrival-storyboard-animation)

**结构:**
1. 出图提示语开头：单页分镜、画幅、格数，画风写成高级分镜、信息图海报或者铅笔草稿预览
1. 信息卡：片名、总时长、镜头数、音频方向，让时长和格数对得上
1. 逐格清单，一格一行：景别、这一格里正在发生的动作、这一格是干什么用的
1. 出图提示语收尾：标注系统，以及排除项，比如不要时间码、不要多余角色、不要水印
1. 视频提示语开头：点名哪张是角色参考、哪张是分镜参考，各自管什么
1. 规则清单：按 1 到 N 走、一格一镜、每镜多少秒、不跳步不加戏、人物和场景全程一致
1. 整体质感与收尾：光线、镜头运动、音频，最后写上不要字幕水印

**常见坑:**
- 把时间码画进分镜图里。格子上的时间戳会被当成画面内容一起带进视频，功夫那条在出图段直接写 `No timestamps`，时长交给第二步的规则清单。
- 格数超出时长能装下的量。按每格 1.5 到 3 秒倒推格数，牛角包那条是 8 格配 12 秒。
- 角色图和分镜图打架。模型会照抄角色图上的姿势，要写明分镜图管地点、动作、构图和顺序，角色图只管长相。
- 格子里只写画面不写动作。片子动起来就是几张静止图轮播，每一格都要给一个正在发生的动作。

**可复制引导语:** 我要先出一张分镜图再把它转成视频，【故事是一只流浪猫在雨夜一路找到家，分成 9 格】，【画风像皮克斯 3D，总时长 15 秒】。请根据下面这个提示语模板，分两步把提示语写好：先写生成分镜图的提示语，再写把这张分镜图转成视频的 Seedance 提示语：

---

## retro-found-footage

### English

#### Early-2000s DV home video

The period feel comes from camera defects and one tiny everyday incident. Write the camcorder's autofocus hunting, exposure shifts and handheld shake as an explicit list, keep the story small, and the clip reads as a real old tape.

**Use when:** Home videos, travel diaries, MiniDV couple clips, neighbourhood walks — any everyday footage that should look recorded years ago on consumer gear.

**Guidance:**

- Write the camera paragraph as a defect list. The Seoul summer afternoon clip spells out `autofocus hunting, exposure shifts, accidental zooms`, then immediately bans `No stabilization, drone footage, gimbal movement`.
- Lock the person in one sentence and reuse it. The Seoul evening vlog closes with `Maintain the same face, hairstyle, clothing, body proportions`; with a reference photo, swap in the couple diary's `Use the uploaded reference image as the exact character reference`.

**Examples:** [#1](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe) [#2](https://goodcase.ai/cases/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf) [#3](https://goodcase.ai/cases/seedance-it-s-the-little-moments-that-make-ai-feel-this-real-57c748edf467) [#4](https://goodcase.ai/cases/vlog-9decd38e99a4)

**Structure:**
1. Opening line: duration, resolution, the format named as an early-2000s DV home video, and whether there is a reference image
1. MAIN SUBJECT: age, skin, hairstyle, the full outfit, closed with one consistency lock
1. SETTING: a specific lived-in neighbourhood with its clutter, ending with an exclusion of landmarks, ads and brands
1. CAMERA: the camcorder's defect list, plus one line banning stabilisation and cinematic moves
1. Beat sections by timecode or headline, one small event each, with spoken lines written into the beat where they happen
1. AUDIO: location sound only, stated as no music
1. Tail: realism constraints, negative list, aspect ratio, and a hard cut to black

**Pitfalls:**
- Piling in 4K, cinematic lighting and sharp detail. Once image quality goes up the DV feel disappears; the period look is bought with the defect list alone.
- Cramming five events into thirty seconds. One timecode slot holds one action plus one reaction — the falling-leaf case spends a full six seconds per event.
- Letting props vanish or duplicate between beats. The Seoul afternoon clip states that after the kick the football stays with the children and does not come back or split in two; say where each prop ends up.
- Writing long spoken lines. When lip sync goes soft, cut the sentence — every line in these cases stays under one sentence, like `Okay, that was pointless.`

**Copy-ready lead-in:** I want a retro home-video clip. [Set it in the summer of 2003, shot on a consumer DV camcorder of that era.] [It follows my cousin walking home from school and meeting a stray cat.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 早年 DV 家庭录像

年代感靠机器缺陷和一件生活小事撑起来。把 DV 的对焦拉风箱、曝光跳动、手抖写成明确清单，剧情放小，整条就像一盘真的旧带子。

**适用场景:** 家庭录像、旅拍日志、MiniDV 情侣片、街区漫步，任何想看起来像多年前用家用机器拍下来的生活片段。

**要点:**

- 相机那段写成器材缺陷清单。首尔夏日午后那条整段列 `autofocus hunting, exposure shifts, accidental zooms`，紧跟着禁掉 `No stabilization, drone footage, gimbal movement`。
- 人物一句话锁死，整条复用。首尔夏夜 Vlog 用 `Maintain the same face, hairstyle, clothing, body proportions` 收尾；有参考图就换成情侣约会那条的 `Use the uploaded reference image as the exact character reference`。

**示例:** [#1](https://goodcase.ai/cases/seedance-prompt-create-a-30-second-1080p-ultra-realistic-personal-home-video-showing-a-f4036ce777fe) [#2](https://goodcase.ai/cases/seedance-use-the-uploaded-reference-image-as-the-exact-character-reference-214303ebc4cf) [#3](https://goodcase.ai/cases/seedance-it-s-the-little-moments-that-make-ai-feel-this-real-57c748edf467) [#4](https://goodcase.ai/cases/vlog-9decd38e99a4)

**结构:**
1. 开场一句：时长、分辨率、片种写成 early-2000s DV home video，说明有没有参考图
1. MAIN SUBJECT：年龄、皮肤、发型、整套衣服，收一句一致性锁
1. SETTING：具体的生活化街区和它的杂物，末尾排除地标、广告、品牌
1. CAMERA：DV 机器的缺陷清单，再加一句禁掉稳定器和电影感运镜
1. 按时间码或小标题分段，一段一件小事，台词写进它发生的那一拍
1. AUDIO：只留现场音，写明 no music
1. 收尾：realism 约束、负面清单、画幅，最后硬切到黑

**常见坑:**
- 往里堆 4K、cinematic lighting、sharp detail。画质一上去 DV 味就没了，年代感只能靠缺陷清单换。
- 三十秒塞五件事。一个时间码槽只放一个动作加一个反应，树叶那条一件事就占满六秒。
- 道具在两拍之间消失或者变成两个。首尔午后那条专门写了球踢回去之后留在孩子那边，不会回来也不会复制，每个道具的去向都要点名。
- 台词写成长句。口型一糊就该砍句子，案例里的台词都不超过一句，像 `Okay, that was pointless.`

**可复制引导语:** 我要做一条年代感家庭录像风格的视频，【时间设定在 2003 年夏天，用当时的家用 DV 拍的】，【拍的是我表妹放学回家路上遇到一只猫】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## travel-city-walk

### English

#### Cinematic travel vlog montage

One traveller moves through a place scene by scene, each scene carrying its own timecode, its own location and one short line. The polish is bought with film grain and golden-hour light.

**Use when:** Destination diaries, city walks, hikes, camping trips and departure sequences where one traveller has to stay the same person across six or eight locations.

**Guidance:**

- Head every scene with both a timecode and a place name. The Bali diary writes `Scene 3 (8-12s) — Rice Terrace & Jungle Moments`, and each block holds one location, one action and one camera move.
- Put the cinematic feel in a parameter list, not in adjectives. The Bali diary states `4K cinematic video, 24fps, 35mm film grain, realistic handheld camera` and adds warm vintage grading.

**Examples:** [#1](https://goodcase.ai/cases/seedance-a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a-beautiful-20-yea-6af38a792806) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-f8e8235cd94a) [#3](https://goodcase.ai/cases/nawalsehar-seedance-ai-531c19980c39) [#4](https://goodcase.ai/cases/seedance-a-cinematic-ai-travel-vlog-of-a-stylish-young-woman-exploring-a-vibrant-europea-0eaef30bc5e3)

**Structure:**
1. Opening line: runtime, aspect ratio, the format named as a cinematic travel vlog, and who the traveller is
1. Look block written as parameters: film stock, grain, colour grading, depth of field, frame rate, handheld feel
1. One-sentence consistency lock covering hair, makeup, outfit and expression across every scene
1. Scene blocks by timecode, each headed with a location name: arrival, a landscape wide, an activity beat, a food or slow-living beat
1. Spoken lines written inside the scene where they are said, one short sentence each
1. Closing scene at golden hour or at night, ending with her looking into the lens and signing off
1. Tail: voice and lip-sync requirements, then the exclusions for text, logo and watermark

**Pitfalls:**
- Packing eight scenes into thirty seconds and giving every one of them a line. The Bali diary runs eight scenes and only four of them speak.
- Naming the location and leaving the camera to the model. Each scene needs its own move, written like `Camera trails her from behind, then swings into a close-up`.
- Mixing in cheap phone-footage words such as shaky phone video or low quality. The handheld here sits on top of film grain and shallow depth of field, and image quality has to stay up.
- Turning the film into a string of empty landscape shots. Give every scene a concrete action: Bali has her walking barefoot at the tideline and drinking coconut water through a paper straw.

**Copy-ready lead-in:** I want a cinematic travel vlog montage. [The destination is Kyoto in November, at the peak of the autumn leaves.] [On camera: a young woman with a backpack, walking from an early-morning alley to the riverbank at dusk.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 电影感旅行漫游

一个人按场次走过一个地方，每场有自己的时间码、自己的地点和一句短台词。质感靠胶片颗粒和黄金时刻的光撑起来，手机瑕疵那套在这里用不上。

**适用场景:** 目的地日记、城市漫游、徒步、露营、出发启程这类片子：一个旅行者要在六到八个地点里保持是同一个人。

**要点:**

- 每一场的标题同时给时间码和地点。巴厘岛那条写成 `Scene 3 (8-12s) — Rice Terrace & Jungle Moments`，一个段落就管一个地点、一个动作、一个运镜。
- 电影感写成参数表，别堆形容词。巴厘岛那条直接写 `4K cinematic video, 24fps, 35mm film grain, realistic handheld camera`，再补暖色复古调。

**示例:** [#1](https://goodcase.ai/cases/seedance-a-cinematic-30-second-tropical-travel-vlog-montage-featuring-a-beautiful-20-yea-6af38a792806) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-f8e8235cd94a) [#3](https://goodcase.ai/cases/nawalsehar-seedance-ai-531c19980c39) [#4](https://goodcase.ai/cases/seedance-a-cinematic-ai-travel-vlog-of-a-stylish-young-woman-exploring-a-vibrant-europea-0eaef30bc5e3)

**结构:**
1. 开场一句：时长、画幅、片种写成 cinematic travel vlog，以及这个旅行者是谁
1. 质感段写成参数表：胶片、颗粒、调色、景深、帧率、手持感
1. 一句话的一致性锁，管住发型、妆、服装和表情，覆盖每一场
1. 按时间码分场，每场带一个地点名：抵达、一场风光大景、一场活动、一场吃东西或者慢下来的戏
1. 台词写进它被说出的那一场里，一场一句短的
1. 收尾放在黄金时刻或者夜里，最后她看着镜头道别
1. 结尾：人声和口型要求，再排除上屏文字、logo 和水印

**常见坑:**
- 三十秒排八场，还场场都说话。巴厘岛那条八场里只有四场有台词。
- 只写去了哪里，运镜丢给模型。每一场都得给自己的镜头动作，写成 `Camera trails her from behind, then swings into a close-up` 这样。
- 混进廉价手机瑕疵词，比如 shaky phone video、low quality。这里的手持是架在胶片颗粒和浅景深上的，画质得往上走。
- 整条拍成一串没有人的风光空镜。每场给一个具体动作，巴厘岛那条是赤脚走过潮线、用纸吸管喝椰子水。

**可复制引导语:** 我要做一条电影感旅行漫游视频，【目的地是京都，时间是十一月红叶季】，【出镜的是一个背双肩包的女生，从清晨的巷子一路走到傍晚的河边】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## pet-animal

### English

#### Pets and animals as the lead

The animal is the lead and a phone is the only camera. Lock the count to exactly one, keep the animal behaving like an animal, and let the payoff come from it closing in on the lens.

**Use when:** Selfie and vlog clips where a cat, dog or wild animal hijacks the frame, plus photoreal wildlife comedy built on one real animal behaviour.

**Guidance:**

- Write the count as a hard number and make that one animal physically continuous. The dog mirror case says `Use exactly ONE small playful dog throughout the entire video` plus `No duplicate animal`; the kitten vlog case itemises `consistent fur pattern, eye color, size, whiskers, ears, paws`.
- Give the animal its own behaviour paragraph. The macaque case opens an ANIMAL BEHAVIOR block with `No talking, no human clothing, no human-like walking`, and rests the whole joke on the monkey copying the hiker's head tilt.

**Examples:** [#1](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867) [#2](https://goodcase.ai/cases/seedance-she-thought-it-was-going-to-be-a-peaceful-rainy-day-selfie-f0bf765977dd) [#3](https://goodcase.ai/cases/seedance-pov-you-wanted-a-cute-mirror-selfie-but-your-dog-wanted-to-be-the-main-charac-3d3e83219d46) [#4](https://goodcase.ai/cases/synthesarah-seedance-ai-636eef3e35c4)

**Structure:**
1. Reference and subject block: lock the person with a reference image if anyone is on camera, and state that there is exactly one animal, the same one throughout
1. Format block: duration, vertical 9:16, handheld front-camera selfie, indoor daylight, no grading and no beauty filter
1. Camera block: arm drift, imperfect framing, autofocus hunting, no cuts, no zoom, no third-person operator
1. Body split by seconds, each block pushing the animal one step further: notices, reaches, steals, climbs, attacks the lens
1. The human reaction and a half-finished line written into the same beat
1. Audio block: a list of on-set sounds, no music, no subtitles, no watermark
1. Strict constraints to close: one person, one animal, no second animal, correct mirror physics, no camera operator

**Pitfalls:**
- Leaving the count open. A second animal or a duplicated reflection shows up mid-clip; the dog case pins it down with `Exactly one woman. Exactly one dog.` and `No duplicate reflection`.
- Letting the animal talk or walk like a person. The clip slides into cartoon territory; the macaque case bans it outright and puts the joke back on real animal behaviour.
- Writing full sentences for the human. The performer has to laugh and speak at once and the lip sync falls apart; cut the line to a broken half like `You little—`.
- Adding cinematic moves and colour grading out of habit. The phone-footage feel dies immediately; write no cinematic lighting, no color grading, no cuts, no zoom.

**Copy-ready lead-in:** I want a handheld selfie video where my pet steals the shot. [My pet is a chubby orange cat with a small notch in her right ear.] [While I film a selfie she climbs onto my shoulder and ends up pressing her nose against the lens.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 宠物动物当主角

动物是真正的主角，镜头就交给一台手机。数量锁死成一只，动物只做动物做的事，包袱留给它一步步逼近镜头。

**适用场景:** 猫狗或野生动物抢镜的自拍、vlog 片段，以及靠一个真实动物行为撑起来的写实喜剧。

**要点:**

- 数量写成一个硬数字，并把这一只写成物理连续。狗狗抢镜那条是 `Use exactly ONE small playful dog throughout the entire video`，外加 `No duplicate animal`；小猫 vlog 那条还逐项点名 `consistent fur pattern, eye color, size, whiskers, ears, paws`。
- 给动物单开一段行为规则。猕猴那条写了 ANIMAL BEHAVIOR 块，`No talking, no human clothing, no human-like walking`，笑点全押在猴子跟着徒步者歪头这件事上。

**示例:** [#1](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867) [#2](https://goodcase.ai/cases/seedance-she-thought-it-was-going-to-be-a-peaceful-rainy-day-selfie-f0bf765977dd) [#3](https://goodcase.ai/cases/seedance-pov-you-wanted-a-cute-mirror-selfie-but-your-dog-wanted-to-be-the-main-charac-3d3e83219d46) [#4](https://goodcase.ai/cases/synthesarah-seedance-ai-636eef3e35c4)

**结构:**
1. 参考与主体段：有人出镜就用参考图锁住人，再写死只有一只动物，从头到尾是同一只
1. 格式段：时长、竖屏 9:16、手持前置自拍、室内自然光、不调色不加美颜
1. 相机段：手臂漂移、构图偏一点、自动对焦拉风箱、不剪、不变焦、没有第三方机位
1. 正文按秒切段，每段让动物往前递进一步：注意到、伸爪、抢走、爬肩、扑镜头
1. 人的反应和半句没说完的台词，写在同一拍里
1. 音频段：现场声清单，没有音乐、字幕、水印
1. 严格约束收尾：一个人一只动物、不许出现第二只、镜面物理正确、画面里没有摄影师

**常见坑:**
- 数量留着不写。片子中段会多出第二只动物或者多一个倒影，狗狗那条用 `Exactly one woman. Exactly one dog.` 和 `No duplicate reflection` 把它钉死。
- 让动物说话或者像人一样走路。片子会滑向动画，猕猴那条直接禁掉这些，把笑点压回真实的动物行为。
- 给人写完整长句台词。演员要边笑边念，口型必散，改成被笑打断的半句，像 `You little—` 这种断在一半的。
- 顺手加电影感运镜和调色。手机拍的质感立刻就没了，写上 no cinematic lighting、no color grading、no cuts、no zoom。

**可复制引导语:** 我要做一条宠物抢镜的手持自拍视频，【我的宠物是一只胖橘猫，右耳有个小缺口】，【它趁我拍自拍一路爬到肩膀上，最后把鼻子怼到镜头前】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## car-vehicle

### English

#### Cars and vehicles at speed

The machine has to stay one machine while the camera does all the work. Lock the vehicle part by part, then fill the runtime with a numbered cut list that moves the camera every second.

**Use when:** Motorcycle and car commercials, mountain-road speed runs, chase and stunt sequences, and vehicle transformation clips.

**Guidance:**

- Describe the vehicle by its parts, not by its badge. The Karakoram commercial names `realistic suspension movement, wheel rotation, chain movement, engine vibration`, then requires the proportions to hold for the whole clip.
- Declare the cut count before writing the list. The mountain-road motorcycle case opens with `exactly 16 distinct cuts, total runtime ≈ 16–17 seconds` and then runs CUT 01 through CUT 16, one second each.

**Examples:** [#1](https://goodcase.ai/cases/ruzainameer-seedance-ai-e6073ec318f1) [#2](https://goodcase.ai/cases/just-sharon7-seedance-ai-f5af358d1f88) [#3](https://goodcase.ai/cases/karakoram-motorcycle-commercial) [#4](https://goodcase.ai/cases/missdelulu9-seedance-ai-02009f1f7daf)

**Structure:**
1. Opening line: runtime, aspect ratio, frame rate, and the exact number of cuts
1. Vehicle lock: model or type, colour, and the moving parts that have to behave
1. Rider or driver lock: build, gear, helmet, closed with one consistency sentence
1. Road and weather: the surface, what lines both sides of it, the light
1. A ratio line stating how much of the film is camera motion and how much is scenery
1. The numbered cut list, one line per second, each naming a camera position and what streaks past
1. Tail: visual style, then a negative list of the ways a vehicle specifically breaks

**Pitfalls:**
- Naming the vehicle and the road and leaving the rest to the model. Colour and stance then drift every cut; the mountain-road case writes `Preserve the exact bike color, rider silhouette, road markings`.
- Putting two camera positions inside one cut. A second only holds one position, and asking for more makes the model cut in the middle of the shot.
- Writing a transformation as an edit. The motorcycle-to-dragon case demands `No cuts or jumps` and spells the change out piece by piece: wheels become clawed limbs, frame expands into an armoured body.
- Holding a macro shot on the badge or the instrument cluster. Generated lettering comes out wrong; aim the close-ups at tyre contact, suspension compression and the exhaust instead.

**Copy-ready lead-in:** I want a vehicle speed clip. [The vehicle is a white dual-sport motorcycle on a foggy gravel mountain road at dawn.] [The rider is a young man in a worn leather jacket, full-face helmet on the whole time.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 汽车与载具速度片

机器从头到尾得是同一台机器，出力的是镜头。先把车按部件锁住，再用编号分镜表把时长排满，每一秒换一个机位。

**适用场景:** 摩托和汽车广告、山路疾驰、追逐与特技段落，还有车辆变形类的片子。

**要点:**

- 车按部件写，不靠车标。Karakoram 那条广告点名 `realistic suspension movement, wheel rotation, chain movement, engine vibration`，再要求整条保持比例一致。
- 先声明总镜头数，再写表。山路摩托那条开头写 `exactly 16 distinct cuts, total runtime ≈ 16–17 seconds`，后面 CUT 01 到 CUT 16 一秒一条。

**示例:** [#1](https://goodcase.ai/cases/ruzainameer-seedance-ai-e6073ec318f1) [#2](https://goodcase.ai/cases/just-sharon7-seedance-ai-f5af358d1f88) [#3](https://goodcase.ai/cases/karakoram-motorcycle-commercial) [#4](https://goodcase.ai/cases/missdelulu9-seedance-ai-02009f1f7daf)

**结构:**
1. 开场一句：时长、画幅、帧率，以及总共多少个镜头
1. 车辆锁定：车型、颜色，以及那些必须动对的部件
1. 骑手或司机锁定：体型、装备、头盔，收一句一致性
1. 路面和天气：铺装、路两边是什么、光线
1. 一句配比，说明这条片子多少是镜头运动、多少是风景
1. 编号分镜表，一秒一条，每条点名机位和被甩过去的东西
1. 收尾：视觉风格，再加一份专门针对车会怎么坏的负面清单

**常见坑:**
- 只写车名和路，剩下交给模型。颜色和姿态会一镜一变，山路那条专门写 `Preserve the exact bike color, rider silhouette, road markings`。
- 一个镜头里写两个机位。一秒只装得下一个机位，写多了模型会在镜头中间自己切一刀。
- 把变形写成剪辑切换。摩托变龙那条要求 `No cuts or jumps`，并把轮子变爪肢、车架撑成装甲躯干逐件写出来。
- 特写停在车标或者仪表盘文字上。生成出来的字必歪，特写改打轮胎接地、悬挂压缩和排气这些结构件。

**可复制引导语:** 我要做一条载具速度短片，【车是一台白色越野摩托，路况是清晨起雾的碎石山路】，【骑手是一个穿旧皮衣的男生，全程戴全盔】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## fashion-lookbook

### English

#### Fashion lookbook and portrait film

One person, one look, a handful of places. A head-to-toe appearance lock carries the whole clip, and each scene gets one location, one gesture and one kind of light.

**Use when:** Fashion campaigns, street-style lookbooks, outfit-change reels, and portrait or beauty pieces where the payload is how someone looks moving through a few settings.

**Guidance:**

- Write the outfit head to toe in the opening paragraph, then say it travels. The Paris campaign runs all the way to `black pointed-toe heels, babypink smooth leather hobo shoulder bag` and closes with `hanging naturally on arm throughout all scenes`.
- Give each scene one shot size, one place and one gesture. The Paris case heads a block with `Scene 5 · 3 sec Medium close-up`, and the only action in it is `slowly pushes sunglasses up with one finger`.

**Examples:** [#1](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear) [#2](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-12c56e79550f) [#3](https://goodcase.ai/cases/noorlewisx-seedance-ai-4b6f8c8c977a) [#4](https://goodcase.ai/cases/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9)

**Structure:**
1. Header parameters: aspect ratio, exact duration, the genre stated as fashion campaign, Vogue editorial or cinematic portrait, and the cutting pace
1. Person and look lock: face, hair, makeup, jewellery, then every garment, shoe and bag named, with a line saying it is identical in every scene
1. Hero item lock: material, colour, hardware, and how it is carried
1. Scene chain: each block marked with seconds or a scene number, carrying shot size, place, one action and the light
1. On-screen type, when wanted, as its own short line under the scene it belongs to
1. Closing hero beat: everything slows, the camera orbits or pushes onto the item, and the last move tilts up to the face
1. Visual direction and exclusions: lens, film tone, grain, and no plastic skin, stiff poses or watermarks

**Pitfalls:**
- Describing the outfit once in loose terms. Clothes drift between scenes; name every piece and add that it stays identical scene to scene.
- Packing three actions into a three-second block. One gesture per scene — the Paris case gives each three-second scene a single move.
- Handing the model a paragraph of on-screen copy. The Tokyo film only ever puts one or two short lines up, like `TOKYO` or `MADE TO BE SEEN`; longer type renders garbled, so add it in post.
- Running slow motion and transition effects the whole way. The Tokyo film pins its montage to `hard cuts synchronized to the beat` and saves the slowdown for the hero shot.

**Copy-ready lead-in:** I want a fashion lookbook clip. [The model is an Asian woman with short hair, walking through a plane-tree neighbourhood in Shanghai in autumn.] [The hero pieces are an oatmeal trench coat and a brown leather tote.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 时尚 lookbook 与人像写真片

一个人、一身造型、几个地点。一段从头写到脚的外观锁撑起整条片子，每个场景只给一个地点、一个动作、一种光。

**适用场景:** 时尚广告大片、街拍 lookbook、换装短片，以及人像和美妆类写真片，有效载荷就是一个人在几个场景里的样子。

**要点:**

- 开头一段把造型从头写到脚，再写明它全程跟着走。巴黎街拍那条一路列到 `black pointed-toe heels, babypink smooth leather hobo shoulder bag`，末尾补一句 `hanging naturally on arm throughout all scenes`。
- 每个场景只给一个景别、一个地点、一个动作。巴黎那条的小标题是 `Scene 5 · 3 sec Medium close-up`，这一段里唯一的动作是 `slowly pushes sunglasses up with one finger`。

**示例:** [#1](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear) [#2](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-12c56e79550f) [#3](https://goodcase.ai/cases/noorlewisx-seedance-ai-4b6f8c8c977a) [#4](https://goodcase.ai/cases/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9)

**结构:**
1. 开头参数：画幅、准确时长、片种写成时尚广告大片、Vogue editorial 或电影感写真，再交代剪辑节奏
1. 人物与造型锁：脸、发型、妆、首饰，然后每一件衣服鞋包点名，补一句每个场景都一样
1. 主推单品锁：材质、颜色、五金、怎么拿在身上
1. 场景链：每段标出秒数或场景号，写景别、地点、一个动作和光线
1. 要上屏文字的，就在对应场景下面单起一行短句
1. 收尾英雄镜头：整体慢下来，镜头绕一圈或推到单品上，最后上摇到脸
1. 视觉方向与排除清单：镜头、胶片色调、颗粒，排掉塑料皮肤、僵硬姿势和水印

**常见坑:**
- 造型只用一句好看的衣服带过。场景一换衣服就变，每件单品都点名，并补一句每个场景都一样。
- 三秒的一段里塞三个动作。一个场景一个动作，巴黎那条每格三秒只做一件事。
- 把整段文案交给模型上屏。东京那条上屏的只有 `TOKYO`、`MADE TO BE SEEN` 这种一两行短句，长段文字排出来会糊，留到后期加。
- 全程慢动作加转场特效。东京那条的快剪段写死 `hard cuts synchronized to the beat`，慢只留给最后的英雄镜头。

**可复制引导语:** 我要做一条时尚 lookbook 短片，【模特是一个短发的亚洲女生，走在秋天的上海梧桐街区】，【主推单品是一件燕麦色长风衣配棕色皮质托特包】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## meme-comedy

### English

#### Twist-ending comedy skit

A short skit where every beat is laid down to serve one punchline. The joke has to land on something visible, and the absurdity only works when the camera and the physics stay dead serious.

**Use when:** Meme clips, prank and revenge skits, absurd scale gags, family comedy — anything whose payload is one laugh at the end.

**Guidance:**

- Fix where the laugh lands first, then work backwards. The duck wizard case names its sections `Hook`, `The Spell`, `Countdown`, `Twist`, `Reaction`, `Punchline` and puts the payoff in the 26–30 second slot.
- Make the twist a visible object. The whole FIVE MORE MINUTES skit pays off on a close-up of `one black sneaker and one grey sneaker`.

**Examples:** [#1](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-korean-subway-action-comedy-scene-usi-93b40e9db5b1) [#2](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7597faa7285f) [#3](https://goodcase.ai/cases/case-142119be6421) [#4](https://goodcase.ai/cases/seharshinwari-seedance-ai-fef37a593d87)

**Structure:**
1. Opening line: duration, look (ultra-realistic or photorealistic absurd), the genre named as comedy, and whether there are reference images
1. Character cards: appearance plus a personality written as an emotional arc, such as playful then shocked and embarrassed
1. Location: an ordinary low-budget real place, described plainly
1. Timecoded beats with headings, running from hook to punchline
1. Spoken lines written into the beat where they are said, one sentence each
1. Bystander reactions and the closing expression as their own beat
1. Negative list: no gore, no teleportation, no duplicated people, no subtitles or on-screen text

**Pitfalls:**
- Describing the joke with adjectives like funny or hilarious. The model has nothing to act on; replace them with one concrete action or object.
- Firing the twist with no pause before it. FIVE MORE MINUTES holds `one silent second` on the two of them before they both start laughing.
- Asking the model to render end text. The duck wizard case closes on `Never rush a spell` plus emoji, which comes out garbled — leave a clean tail frame and add the text in post.
- Letting a character's mood flip without a written trigger. The subway skit spells out the man's arc as `playful, then shocked and embarrassed` and gives each stage its own on-screen cause.

**Copy-ready lead-in:** I want a short comedy clip with a twist ending. [Setup: a man quietly stuffing food into his bag at a buffet.] [Twist: he opens the bag at home and the restaurant owner's cat climbs out.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 反转结尾搞笑短片

所有节拍都为一个笑点服务的短剧。笑点得落在一个看得见的东西上，荒诞设定要配一本正经的相机和物理才立得住。

**适用场景:** 玩梗片、整蛊和复仇小剧场、荒诞比例梗、家庭喜剧，任何有效载荷就是结尾那一下笑的片子。

**要点:**

- 先钉死笑点落在哪一秒，再往回铺。女巫变鸭那条直接把段落命名成 `Hook`、`The Spell`、`Countdown`、`Twist`、`Reaction`、`Punchline`，兑现放在 26–30 秒那一槽。
- 反转得是一个看得见的东西。FIVE MORE MINUTES 整条片子押在脚部特写 `one black sneaker and one grey sneaker` 上。

**示例:** [#1](https://goodcase.ai/cases/seedance-create-a-30-second-1080p-ultra-realistic-korean-subway-action-comedy-scene-usi-93b40e9db5b1) [#2](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7597faa7285f) [#3](https://goodcase.ai/cases/case-142119be6421) [#4](https://goodcase.ai/cases/seharshinwari-seedance-ai-fef37a593d87)

**结构:**
1. 开场一句：时长、画风（ultra-realistic 或 photorealistic absurd）、片种写明是 comedy、有没有参考图
1. 角色卡：外貌加一句性格，性格写成情绪弧，比如 playful, then shocked and embarrassed
1. 场景：一个普通的、便宜的真实地方，平铺直叙写
1. 带小标题的时间码分段，从 hook 一路推到 punchline
1. 台词写进它被说出的那一拍，每句一句话
1. 旁人反应和收尾表情单独占一拍
1. 负面清单：禁血腥、禁瞬移、禁复制人、禁字幕和上屏文字

**常见坑:**
- 用 funny、hilarious 这类形容词描述笑点。模型没东西可演，要换成一个具体动作或物件。
- 反转前不留停顿就直接炸。FIVE MORE MINUTES 在两个人笑出来之前先停了 `one silent second`。
- 让模型画结尾文字。女巫变鸭那条收在 `Never rush a spell` 加表情符号，生成出来大概率是乱码，应该留干净收尾画面，文字后期加。
- 角色情绪没有写明触发就翻转。地铁那条把男生的弧线写成 `playful, then shocked and embarrassed`，每一段都在画面里给了起因。

**可复制引导语:** 我要做一条有反转的搞笑短片，【设定是一个人在自助餐厅偷偷往包里塞食物】，【反转是他回家打开包，钻出来一只餐厅老板的猫】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## horror-suspense

### English

#### Horror and suspense

Every shot carries its own timecode and shows one visible change on a body. The dread comes from the chain — a look, veins, a bite, the next person — and the ending seals a door without settling anything.

**Use when:** Outbreak and possession clips, corridor chases, ritual scenes — anything where the fear comes from a body changing on a clock.

**Guidance:**

- Give every shot a timecode and exactly one change. The sleeper-train case fits 26 shots into 30 seconds, where Shot 2 is only `dark veins emerging beneath the skin` and Shot 3 is only `Her eyes cloud milky white`.
- Lock the face in the very first shot, before anything happens. The sleeper train opens with `<<<image_1>>>, face and outfit matching reference`; the zombie-train case uses `Character A, matching reference face/outfit`; the ritual case uses `Keep the Word character's face and outfit consistent throughout`.

**Examples:** [#1](https://goodcase.ai/cases/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e) [#2](https://goodcase.ai/cases/case-3b1796c66ab4) [#3](https://goodcase.ai/cases/case-b529ffbdfd9a) [#4](https://goodcase.ai/cases/seedance-30-sec-cinematic-korean-folk-horror-ritual-78323fedb479)

**Structure:**
1. Header: runtime, the genre named, and the reference lock on whoever turns first
1. Shot 1 with a timecode: patient zero in an ordinary seat or bunk, already carrying one symptom
1. Escalation shots, each adding exactly one visible change: veins, milky eyes, a stiff head tilt
1. The trigger shot: the attack itself, written as slow motion with impact
1. Transmission: the bitten person runs the same escalation on a shorter clock
1. Crowd panic and the barricade: the door, the luggage, hands clawing through glass
1. Closing shot: a sealed door still shuddering, or a wide exterior, with nothing resolved

**Pitfalls:**
- Cramming a whole transformation into one shot. Split it across four or five: eyes cloud, veins branch, body convulses, inhuman scream, head snaps forward.
- Buying the horror with gore volume. The hardest beats in the top cases are a single blood drop landing on a forehead, held as extreme close-up in slow motion.
- Letting the middle collapse into a brawl where nobody can tell who bit whom. Even the chaos shots name a subject and a target, like `The infected turns and lunges at nearby passengers`.
- Putting the consistency lock at the end with the style notes. By then the face has already drifted; the lock belongs in Shot 1, and the infected version still has to be the same face.

**Copy-ready lead-in:** I want a horror-suspense clip. [The setting is an underground car park late at night, a young woman looking for her car.] [The first to turn is the security guard; I am sending you his reference photo.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 恐怖悬疑短片

每一镜都带自己的时间码，身上只发生一个看得见的变化。吓人的地方在于这些变化一环扣一环：一个眼神、浮起的血管、一口咬下去、下一个人。结尾把门关上，事情不了结。

**适用场景:** 感染爆发、附身、走廊追逐、驱邪仪式，任何靠一具身体按秒变化来吓人的片子。

**要点:**

- 每一镜给时间码，而且只放一个变化。卧铺列车那条把 26 个镜头排进 30 秒，Shot 2 只有 `dark veins emerging beneath the skin`，Shot 3 只有 `Her eyes cloud milky white`。
- 第一镜就把脸锁死，别等事情发生。卧铺列车开头写 `<<<image_1>>>, face and outfit matching reference`；丧尸列车那条写 `Character A, matching reference face/outfit`；韩屋仪式那条写 `Keep the Word character's face and outfit consistent throughout`。

**示例:** [#1](https://goodcase.ai/cases/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e) [#2](https://goodcase.ai/cases/case-3b1796c66ab4) [#3](https://goodcase.ai/cases/case-b529ffbdfd9a) [#4](https://goodcase.ai/cases/seedance-30-sec-cinematic-korean-folk-horror-ritual-78323fedb479)

**结构:**
1. 开头：时长、片种，以及第一个要变的人的参考图锁定
1. Shot 1 带时间码：零号病人坐在普通的座位或铺位上，身上已经有一个症状
1. 递进镜头，每一镜只加一个看得见的变化：血管、白眼、脖子僵硬地偏过去
1. 触发镜：袭击本身，写成慢动作加冲击
1. 传染：被咬的人走同一套递进，时间压得更短
1. 人群恐慌和封门：门、行李、从玻璃后抓过来的手
1. 收尾镜：封住的门还在震，或者一个外部大景，什么都没解决

**常见坑:**
- 一镜里塞完整个变身。拆成四五镜：白眼、血管爬开、抽搐、非人的嘶吼、头猛地甩回来。
- 靠血浆量买恐怖。高热度那几条最狠的镜头是一滴血落在额头上，用极近景加慢动作拖住。
- 中段塌成一团乱打，看不清谁咬了谁。连混乱镜头也要点名主语和对象，像 `The infected turns and lunges at nearby passengers`。
- 把一致性锁放到结尾的风格段里。放那么后面脸早就飘了，锁定句要写在 Shot 1，而且感染之后仍然得是同一张脸。

**可复制引导语:** 我要做一条恐怖悬疑短片，【场景是深夜的地下车库，一个女生在找自己的车】，【第一个出事的是那位保安，我把他的参考图发给你】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## 3d-cartoon

### English

#### 3D cartoon character short

One small anthropomorphic character carries the whole film. Spell out its looks part by part, write the style as render settings you can measure, and cut the timeline so each block holds a single action goal.

**Use when:** Pixar-flavoured animated shorts with a cute lead: animal chefs, baby dragons, clay-textured characters that still move smoothly.

**Guidance:**

- Write the character as a parts list, then add one line that freezes it. The frog chef spells out skin, eyes, mouth, cheeks, webbed feet and chef jacket, then follows with `Keep the exact same frog appearance, outfit, proportions`; the otter adventure uses `Maintain the exact same character design, proportions, fur pattern`.
- Turn the style word into render settings. The sofa bunny case asks for soft realistic fluffy fur, cinematic depth of field and creamy bokeh, then adds `premium Pixar-like quality without copying any specific existing character`.

**Examples:** [#1](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777) [#2](https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f) [#3](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900) [#4](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e)

**Structure:**
1. Opening line that fixes the format: duration, 3D animated short, aspect ratio, overall tone
1. Character paragraph: looks part by part, outfit, personality, then one line that holds it steady
1. Body split by seconds or by SCENE, one location and one action goal per block
1. Inside each block, micro-actions and expression changes that carry the emotion
1. Visual and render paragraph: fur, depth of field, lighting, materials, bokeh
1. Camera and mood paragraph: push-in, tracking, close-up, plus a line of mood words
1. Exclusion list to close: appearance changes, face distortion, extra characters, flickering, text and watermark

**Pitfalls:**
- Dropping the word Pixar and stopping there. The model hands back generic CG; follow the bunny case and list fur, depth of field, lighting and bokeh one by one.
- Locking the character only once at the top. The look drifts by the middle of the film, so re-name the identifying item at the start of every scene, like the blue scarf or the oversized chef hat.
- Packing more scenes than the duration holds. The otter short puts nine scenes into 40 seconds, under five seconds each, so the actions only skim past. Cut scenes first and keep one action goal per block.
- Asking for fine hand work with no guard. Moves like the frog chef placing a herb with tweezers are where extra fingers appear; put `deformed hands` in the exclusion list or switch to a whole-paw grab.

**Copy-ready lead-in:** I want a 3D cartoon animated short. [The lead is a small hedgehog in a red scarf, round eyes, waddling when it walks.] [The story: on a rainy night it guides a lost firefly back home.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 3D 卡通角色短片

一个拟人小角色撑起整条片子。外形逐项写死并全程复述，画风写成能测量的渲染项，时间轴切成一段一个动作目标。

**适用场景:** 皮克斯味的动画短片，主角是个可爱角色：动物厨师、幼龙、黏土质感但运动平滑的小家伙。

**要点:**

- 角色写成零件清单，再补一句把它冻住。青蛙大厨那条把皮肤、眼睛、嘴、脸颊、蹼足、厨师服逐项写出来，然后跟一句 `Keep the exact same frog appearance, outfit, proportions`；水獭冒险那条用的是 `Maintain the exact same character design, proportions, fur pattern`。
- 把风格词换成渲染项。沙发萌兔那条要的是柔软真实的绒毛、电影景深、奶油焦外，再补一句 `premium Pixar-like quality without copying any specific existing character`。

**示例:** [#1](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777) [#2](https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f) [#3](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900) [#4](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e)

**结构:**
1. 开篇一句定片型：时长、3D 动画短片、画幅、整体调性
1. 角色段：外形逐项、服装、性格，末尾加一句保持不变
1. 正文按秒或按 SCENE 切段，每段一个地点加一个动作目标
1. 段内写微动作和表情变化，让情绪靠动作出来
1. 视觉与渲染段：毛发、景深、光线、材质、焦外
1. 镜头与情绪段：推镜、跟拍、特写，再加一行 mood 词
1. 排除清单收尾：外形变化、脸崩、多余角色、闪烁、文字水印

**常见坑:**
- 只丢一个皮克斯风就收尾。模型还给你的是通用 CG，照萌兔那条把绒毛、景深、光线和焦外一项项写出来。
- 角色只在开头锁一次。片子走到中段外形就开始漂，每个场景开头重提识别物，比如蓝围巾、过大的厨师帽。
- 场景数量超过时长能装的。水獭那条 40 秒塞了 9 个场景，每段不到五秒，动作只能一滑而过。先砍场景，一段留一个动作目标。
- 让角色做精细手部操作又不设防。青蛙大厨用镊子摆香草这种动作最容易长出多余手指，把 `deformed hands` 写进排除清单，或者改成整只爪子抓。

**可复制引导语:** 我要做一条 3D 卡通动画短片，【主角是一只戴红围巾的小刺猬，圆眼睛，走路一摇一摆】，【故事是它在雨夜给一只迷路的萤火虫带路回家】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## epic-fantasy-scifi

### English

#### Epic fantasy and sci-fi spectacle

Monsters, dragons, world reveals. Each entity gets its own definition block, the shots are cut by timecode, and scale is bought with reference objects and low angles rather than words like massive.

**Use when:** Kaiju attacks, dragon battles, transformation sequences, world reveals — anything whose payload is one physical spectacle at blockbuster scale.

**Guidance:**

- Split the entities into their own blocks before any scene text. The kaiju jet case defines Pilot, Seabaycity, Monster and Jet separately, each closed with its scope: `Appearance only`, `Environment only`, `Vehicle only`.
- Buy scale with reference objects and camera angles. The same case instructs `sell the size of the monster with low angles and the city for scale`, and puts a dramatic low angle in CUT 1.

**Examples:** [#1](https://goodcase.ai/cases/weeleey6-seedance-ai-b03a5481e168) [#2](https://goodcase.ai/cases/zyrellix-seedance-ai-5fa856d9472a) [#3](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-cinematic-supernatural-fantasy-sequence-photorealisti-6d87ff7834d3) [#4](https://goodcase.ai/cases/zyrellix-seedance-ai-b83a3b47ae61)

**Structure:**
1. Opening line: duration, the genre named (cinematic dark fantasy, kaiju action sequence), and whether it is photorealistic or animated
1. Entity blocks: one paragraph each for the character, the creature, the vehicle and the city, each tagged for what it supplies
1. Setting and mood: weather, light sources, level of destruction, colour grade direction
1. Shot breakdown: CUT 1 / CUT 2 with timecodes, or one continuous camera path with named passages
1. The spectacle beat written on its own, with cause and effect spelled out
1. Technical tail: grade, fog, grain, lens, render style
1. Rules paragraph: references are appearance only, keep the face consistent, and state what the final frame holds

**Pitfalls:**
- Stuffing five spectacles into fifteen seconds. Each one comes out half-finished; give the clip one blow-up and treat every other shot as setup.
- Relying on epic and massive alone. Without a building, a city or a low angle for comparison the monster ends up human-sized.
- Leaving stray characters in the body text. The ruined-bedroom case has a t.co link sitting mid-sentence, and junk like that gets read as picture content — strip it.
- Not saying what the last frame holds. The kaiju jet case ends with `Final frame on the monster crashing into the bay, stable and clean`; without that line the tail tends to wobble or smear.

**Copy-ready lead-in:** I want an epic fantasy spectacle clip. [The lead is a young man with a long blade on his back, standing in a half-buried desert city.] [The spectacle: a sand worm bursts up through the street from below.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 奇幻科幻大场面

怪兽、巨龙、世界观展示。每个实体单独给一个定义块，镜头按时间码切开，尺度感靠参照物和低机位换，靠 massive 这种词换不来。

**适用场景:** 怪兽攻城、巨龙对战、变身序列、世界观展示，任何有效载荷是一个大片级物理奇观的片子。

**要点:**

- 先把实体拆成独立的块，再写场景。战机怪兽那条把 Pilot、Seabaycity、Monster、Jet 各写一段，每段结尾标清用途：`Appearance only`、`Environment only`、`Vehicle only`。
- 尺度感靠参照物和机位买。同一条明确要求 `sell the size of the monster with low angles and the city for scale`，CUT 1 就是一个戏剧性低机位。

**示例:** [#1](https://goodcase.ai/cases/weeleey6-seedance-ai-b03a5481e168) [#2](https://goodcase.ai/cases/zyrellix-seedance-ai-5fa856d9472a) [#3](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-cinematic-supernatural-fantasy-sequence-photorealisti-6d87ff7834d3) [#4](https://goodcase.ai/cases/zyrellix-seedance-ai-b83a3b47ae61)

**结构:**
1. 开场一句：时长、片种写明（cinematic dark fantasy、kaiju action sequence 之类）、是写实还是动画
1. 实体定义块：人物、怪兽、载具、城市各一段，每段标清楚它只提供什么
1. 场景与气氛：天气、光源、破坏程度、调色方向
1. 镜头切分：CUT 1 / CUT 2 带时间码，或者一条连续镜头路径并点名每次穿过什么
1. 奇观那一拍单独写，把因果交代清楚
1. 技术收尾段：调色、雾、颗粒、镜头、渲染风格
1. 规则段：参考图只取外观、脸要一致、最后一帧停在什么上面

**常见坑:**
- 十五秒塞五个奇观。每个都做成半成品，一条片子只给一个爆点，其余镜头当铺垫。
- 只靠 epic、massive 这类词。没有楼、没有城、没有低机位做参照，怪兽出来就和人一样高。
- 正文里留着脏字符。废墟黑猫那条句子中间夹了一条 t.co 链接，这种东西会被当成画面内容，要清掉。
- 不交代最后一帧停在哪。战机怪兽那条写了 `Final frame on the monster crashing into the bay, stable and clean`，少了这句收尾容易抖或者糊。

**可复制引导语:** 我要做一条奇幻大场面视频，【主角是一个背着长刀的少年，站在被沙埋掉一半的城市里】，【奇观是一只沙虫从地下顶穿整条街冲出来】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---

## sports-extreme

### English

#### Sports and extreme stunts

The clip lives or dies on the action loop. Write every link from run-up to landing in order, name the physics you want by part, and spend the negative list on flying, hovering and teleporting.

**Use when:** Snowboarding, mountain biking, parkour, street basketball, water game shows and phone-shot stunt clips where a body has to obey gravity and contact.

**Guidance:**

- Write the stunt as one ordered chain of contact and reaction. The rooftop bungee case runs a STUNT ENGINE line from `屋顶助跑 → 飞越护墙 → 高空下落 → 命中圆形弹性面中心` on to the landing, and demands the four phases `接触—下陷—压缩—回弹` all be visible.
- Name the physics part by part. The mountain-bike final asks for `suspension compression, braking, cornering, jump physics, dirt displacement`, so the bike behaves instead of gliding.

**Examples:** [#1](https://goodcase.ai/cases/seedance-269d1fc95820) [#2](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-db77eb406bfb) [#3](https://goodcase.ai/cases/nawalsehar-seedance-ai-9cff7acb6229) [#4](https://goodcase.ai/cases/johnagi168-seedance-ai-792fb30bed36)

**Structure:**
1. Header parameters: duration, aspect ratio, reference image, on-location audio, and the overall look stated as phone-shot action footage
1. Global continuity: the site, the apparatus, the main subject and the bystanders, each in its own short block
1. Camera continuity: who holds the camera and how it travels, with cuts and viewpoint jumps ruled out
1. The action loop: every link from run-up to landing named once, in order, as one chain
1. Beats by timecode, each carrying the body detail plus the camera move that goes with it
1. Constraint block: the environment stays put, the force has a named source, and the move must not read as flight
1. Negative list: look drift, camera teleports, broken physics, injury, subtitles and watermarks

**Pitfalls:**
- Writing only the outcome and skipping the contact. The body rebounds or launches before it touches anything; give contact, compression and release their own time slots.
- Stacking extra angles inside a one-take. Write `不切镜、不瞬移、不更换视角` and describe the camera as the operator moving on foot with the athlete.
- Landing light and upright. Ask for knees and hips folding deep to absorb the impact, and put `落地无重量，站直落地` in the negative list.
- Over-specifying spin direction and rotation count. Limbs twist and the body clips; the bungee case writes `不要锁定具体翻转方向` and asks for continuous natural rotation instead.

**Copy-ready lead-in:** I want an extreme-sports clip. [The sport is skateboarding, in a concrete bowl under a city overpass at dusk.] [I am sending my own photo as the rider; keep the face and outfit locked throughout.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

### 中文

#### 体育与极限运动

这类片子全押在动作闭环上。从助跑到落地，每个环节按顺序写出来，要哪几项物理就点名哪几项，负面清单专门用来打掉飞行、悬浮和瞬移。

**适用场景:** 单板滑雪、山地骑行、跑酷、街头篮球、水上闯关，以及手机实拍风格的特技片段，身体必须服从重力和接触。

**要点:**

- 把特技写成一条有顺序的接触与反应链条。屋顶蹦极那条的 STUNT ENGINE 段从 `屋顶助跑 → 飞越护墙 → 高空下落 → 命中圆形弹性面中心` 一路排到落地，还要求 `接触—下陷—压缩—回弹` 四个阶段都看得见。
- 物理逐项点名。山地车决赛那条要的是 `suspension compression, braking, cornering, jump physics, dirt displacement`，车才会像车，而不是在地面上滑行。

**示例:** [#1](https://goodcase.ai/cases/seedance-269d1fc95820) [#2](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-db77eb406bfb) [#3](https://goodcase.ai/cases/nawalsehar-seedance-ai-9cff7acb6229) [#4](https://goodcase.ai/cases/johnagi168-seedance-ai-792fb30bed36)

**结构:**
1. 开头参数：时长、画幅、参考图、现场声，整体质感写成极限运动手机实拍
1. 全局连续性：场地、器械、主角、旁观者，各占一小段
1. 相机连续性：谁在拿着拍、镜头怎么走，写明不切镜、不换视角
1. 动作闭环：从助跑到落地，每个环节按顺序点名一次，连成一条链
1. 按时间码切拍，每拍写身体细节，再配上这一拍的相机动作
1. 约束段：环境位置不漂移，力从哪来说清楚，不能表现成飞行
1. 负面清单：造型漂移、机位瞬移、物理失效、受伤流血、字幕水印

**常见坑:**
- 只写结果，跳过接触。身体会在碰到东西之前就弹起来或者飞出去，接触、压缩、回弹各给一个时间段。
- 在一镜到底里塞额外机位。写上 `不切镜、不瞬移、不更换视角`，相机动作按摄影者跟着运动员跑来描述。
- 落地轻飘，站直了就站住。要求屈膝屈髋深度下沉吸收冲击，再把 `落地无重量，站直落地` 放进负面清单。
- 翻转方向和圈数写得太死。四肢会扭曲穿模，蹦极那条写的是 `不要锁定具体翻转方向`，要的是自然连续的旋转。

**可复制引导语:** 我要做一条极限运动短片，【项目是滑板，场地是傍晚城市高架桥下的水泥碗池】，【我提供自己的照片当主角，全程锁脸和造型】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

---
