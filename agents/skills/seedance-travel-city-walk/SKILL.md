---
name: seedance-travel-city-walk
description: "One traveller moves through a place scene by scene, each scene carrying its own timecode, its own location and one short line. The polish is bought with film grain and golden-hour light. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Cinematic travel vlog montage; 中文触发词: 电影感旅行漫游, 旅拍, 城市漫游, 旅行), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Cinematic travel vlog montage · 电影感旅行漫游

One traveller moves through a place scene by scene, each scene carrying its own timecode, its own location and one short line. The polish is bought with film grain and golden-hour light.

This Skill carries one prompt structure distilled from 12 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Destination diaries, city walks, hikes, camping trips and departure sequences where one traveller has to stay the same person across six or eight locations.
- 中文：目的地日记、城市漫游、徒步、露营、出发启程这类片子：一个旅行者要在六到八个地点里保持是同一个人。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line: runtime, aspect ratio, the format named as a cinematic travel vlog, and who the traveller is
   2. Look block written as parameters: film stock, grain, colour grading, depth of field, frame rate, handheld feel
   3. One-sentence consistency lock covering hair, makeup, outfit and expression across every scene
   4. Scene blocks by timecode, each headed with a location name: arrival, a landscape wide, an activity beat, a food or slow-living beat
   5. Spoken lines written inside the scene where they are said, one short sentence each
   6. Closing scene at golden hour or at night, ending with her looking into the lens and signing off
   7. Tail: voice and lip-sync requirements, then the exclusions for text, logo and watermark
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Head every scene with both a timecode and a place name. The Bali diary writes `Scene 3 (8-12s) — Rice Terrace & Jungle Moments`, and each block holds one location, one action and one camera move.
- Put the cinematic feel in a parameter list, not in adjectives. The Bali diary states `4K cinematic video, 24fps, 35mm film grain, realistic handheld camera` and adds warm vintage grading.
- Keep the lines short and tied to what just happened. Bali uses `Don't film this part — actually, keep filming it.` after she wobbles on the board, and closes on `Goodnight from Bali.`
- Lock the gear as well as the person. The Korean camping case writes `Maintain the same woman, outfit, SUV, tent, campsite, and equipment throughout`, so the car and tent cannot redesign themselves halfway.
- When the trip involves real physical work, spell out the mechanics. The camping case asks for `realistic tent fabric, flexible poles, stakes` and bans `instant tent setup`.

## Pitfalls

- Packing eight scenes into thirty seconds and giving every one of them a line. The Bali diary runs eight scenes and only four of them speak.
- Naming the location and leaving the camera to the model. Each scene needs its own move, written like `Camera trails her from behind, then swings into a close-up`.
- Mixing in cheap phone-footage words such as shaky phone video or low quality. The handheld here sits on top of film grain and shallow depth of field, and image quality has to stay up.
- Turning the film into a string of empty landscape shots. Give every scene a concrete action: Bali has her walking barefoot at the tideline and drinking coconut water through a paper straw.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：电影感旅行漫游

一个人按场次走过一个地方，每场有自己的时间码、自己的地点和一句短台词。质感靠胶片颗粒和黄金时刻的光撑起来，手机瑕疵那套在这里用不上。

**结构:**

1. 开场一句：时长、画幅、片种写成 cinematic travel vlog，以及这个旅行者是谁
2. 质感段写成参数表：胶片、颗粒、调色、景深、帧率、手持感
3. 一句话的一致性锁，管住发型、妆、服装和表情，覆盖每一场
4. 按时间码分场，每场带一个地点名：抵达、一场风光大景、一场活动、一场吃东西或者慢下来的戏
5. 台词写进它被说出的那一场里，一场一句短的
6. 收尾放在黄金时刻或者夜里，最后她看着镜头道别
7. 结尾：人声和口型要求，再排除上屏文字、logo 和水印

**要点:**

- 每一场的标题同时给时间码和地点。巴厘岛那条写成 `Scene 3 (8-12s) — Rice Terrace & Jungle Moments`，一个段落就管一个地点、一个动作、一个运镜。
- 电影感写成参数表，别堆形容词。巴厘岛那条直接写 `4K cinematic video, 24fps, 35mm film grain, realistic handheld camera`，再补暖色复古调。
- 台词短，而且贴着刚发生的事。巴厘岛在她划板失衡之后说 `Don't film this part — actually, keep filming it.`，全片收在 `Goodnight from Bali.`
- 装备和人一起锁。韩国露营那条写 `Maintain the same woman, outfit, SUV, tent, campsite, and equipment throughout`，车和帐篷就不会中途换样。
- 旅程里有真体力活的时候，把机械过程写出来。露营那条要求 `realistic tent fabric, flexible poles, stakes`，并禁掉 `instant tent setup`。

**常见坑:**

- 三十秒排八场，还场场都说话。巴厘岛那条八场里只有四场有台词。
- 只写去了哪里，运镜丢给模型。每一场都得给自己的镜头动作，写成 `Camera trails her from behind, then swings into a close-up` 这样。
- 混进廉价手机瑕疵词，比如 shaky phone video、low quality。这里的手持是架在胶片颗粒和浅景深上的，画质得往上走。
- 整条拍成一串没有人的风光空镜。每场给一个具体动作，巴厘岛那条是赤脚走过潮线、用纸吸管喝椰子水。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a cinematic travel vlog montage. [The destination is Kyoto in November, at the peak of the autumn leaves.] [On camera: a young woman with a backpack, walking from an early-morning alley to the riverbank at dusk.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条电影感旅行漫游视频，【目的地是京都，时间是十一月红叶季】，【出镜的是一个背双肩包的女生，从清晨的巷子一路走到傍晚的河边】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
