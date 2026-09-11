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

---
