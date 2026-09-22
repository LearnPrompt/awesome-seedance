---
name: seedance-storyboard-grid-to-video
description: "Two stages: first a single-page sheet of numbered panels from an image model, then that sheet fed to Seedance as the reference. The sheet owns order, framing and timing, and the video prompt only has to connect the panels. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Storyboard grid to video; 中文触发词: 分镜网格转视频, 分镜图, 九宫格, 故事板), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Storyboard grid to video · 分镜网格转视频

Two stages: first a single-page sheet of numbered panels from an image model, then that sheet fed to Seedance as the reference. The sheet owns order, framing and timing, and the video prompt only has to connect the panels.

This Skill carries one prompt structure distilled from 9 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Multi-shot pieces where you want to see and fix the shot order before spending a generation: recipe sequences, action previs, product commercials, day-in-the-life montages.
- 中文：想在出片之前先看见并改定镜头顺序的多镜头片子：制作流程、动作预览、产品广告、一天生活的串场蒙太奇。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Image prompt header: single-page sheet, aspect ratio, panel count, and the drawing style stated as premium storyboard, infographic poster or rough pencil previs
   2. Information cards: title, total runtime, number of shots, audio direction, so timing and panel count agree
   3. Panel list, one line each: shot size, the action happening in it, and what that panel is for
   4. Image prompt tail: the annotation system, and the exclusions such as no timestamps, no extra characters, no watermark
   5. Video prompt opening: name which image is the character reference and which is the storyboard, and what each one controls
   6. Rule list: follow 1 to N in order, one shot per panel, seconds per shot, no skipped or added steps, character and set stay identical
   7. Overall look and close: lighting, camera movement, audio, and the no-subtitle no-watermark tail
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Tie panel count to runtime already in the image prompt. The croissant sheet puts `TOTAL VIDEO TIME: 12 SECONDS` and `8 SHOTS` in the header and recounts it in the footer as `8 shots × 1.5s = 12 seconds`.
- Give the two reference images separate jobs. The disaster-run case defines Image1 as `the EXACT main character reference` and Image2 as `the EXACT storyboard design and layout reference`.
- Say plainly which reference wins. The European summer walk writes `Do not copy any pose or layout from the Master Character Set` and hands locations, actions, compositions and sequence to the storyboard.
- Make step two a short list of hard rules. The croissant video prompt lists `Follow the sequence exactly from 1 to 8`, `One shot per panel, approximately 1.5 seconds each` and `No skipped steps`.
- Write each panel as an action plus a shot size, never as a picture. The kung-fu sheet numbers twelve lines like `begin mid-air with a flying diagonal kick already in motion` and requires `Every panel must contain visible motion`.

## Pitfalls

- Baking timecodes into the sheet. Panel timestamps get drawn as artwork and carried into the video; the kung-fu sheet writes `No timestamps` and leaves timing to the rules in step two.
- More panels than the runtime can hold. Work backwards at 1.5 to 3 seconds per panel — the croissant sheet pairs 8 panels with a 12-second video.
- Letting the character sheet and the storyboard fight. The model copies poses off the character sheet; state that the storyboard controls locations, actions, compositions and sequence, and the character sheet only controls the face.
- Panels that describe a picture and no movement. The video comes out as a slideshow; give every panel something already in motion.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：分镜网格转视频

分两步走：先用图像模型出一张带编号格子的单页分镜图，再把这张图当参考喂给 Seedance。顺序、构图和时长由分镜图定死，视频提示语只负责把格子连起来。

**结构:**

1. 出图提示语开头：单页分镜、画幅、格数，画风写成高级分镜、信息图海报或者铅笔草稿预览
2. 信息卡：片名、总时长、镜头数、音频方向，让时长和格数对得上
3. 逐格清单，一格一行：景别、这一格里正在发生的动作、这一格是干什么用的
4. 出图提示语收尾：标注系统，以及排除项，比如不要时间码、不要多余角色、不要水印
5. 视频提示语开头：点名哪张是角色参考、哪张是分镜参考，各自管什么
6. 规则清单：按 1 到 N 走、一格一镜、每镜多少秒、不跳步不加戏、人物和场景全程一致
7. 整体质感与收尾：光线、镜头运动、音频，最后写上不要字幕水印

**要点:**

- 格数和总时长在出图这一步就绑死。牛角包那张分镜图的页眉写着 `TOTAL VIDEO TIME: 12 SECONDS` 和 `8 SHOTS`，页脚再算一遍 `8 shots × 1.5s = 12 seconds`。
- 两张参考图分工写清楚。灾难逃生那条把 Image1 定成 `the EXACT main character reference`，Image2 定成 `the EXACT storyboard design and layout reference`。
- 明说谁说了算。欧洲夏日漫步那条写 `Do not copy any pose or layout from the Master Character Set`，把地点、动作、构图和顺序全部交给分镜图。
- 第二步写成一小串硬规则。牛角包那条的视频提示语列了 `Follow the sequence exactly from 1 to 8`、`One shot per panel, approximately 1.5 seconds each` 和 `No skipped steps`。
- 每一格写成动作加景别，不要写成一张画。功夫那张分镜图的十二行都是 `begin mid-air with a flying diagonal kick already in motion` 这种句子，并且要求 `Every panel must contain visible motion`。

**常见坑:**

- 把时间码画进分镜图里。格子上的时间戳会被当成画面内容一起带进视频，功夫那条在出图段直接写 `No timestamps`，时长交给第二步的规则清单。
- 格数超出时长能装下的量。按每格 1.5 到 3 秒倒推格数，牛角包那条是 8 格配 12 秒。
- 角色图和分镜图打架。模型会照抄角色图上的姿势，要写明分镜图管地点、动作、构图和顺序，角色图只管长相。
- 格子里只写画面不写动作。片子动起来就是几张静止图轮播，每一格都要给一个正在发生的动作。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want to make the storyboard sheet first and then turn it into video. [The story: a stray cat finding its way home through a rainy night, in 9 panels.] [Pixar-style 3D look, 15 seconds total.] Using the prompt template below, write both prompts for me: first the one that generates the storyboard sheet, then the Seedance prompt that turns that sheet into video:
>
> 我要先出一张分镜图再把它转成视频，【故事是一只流浪猫在雨夜一路找到家，分成 9 格】，【画风像皮克斯 3D，总时长 15 秒】。请根据下面这个提示语模板，分两步把提示语写好：先写生成分镜图的提示语，再写把这张分镜图转成视频的 Seedance 提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
