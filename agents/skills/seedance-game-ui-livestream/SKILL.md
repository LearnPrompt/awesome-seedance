---
name: seedance-game-ui-livestream
description: "The screen itself is the shot: a fake gameplay capture, livestream or desktop recording. It holds up when the overlay layer is pinned to fixed positions and its numbers and banners change in step with the action. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Gameplay capture with HUD and stream overlay; 中文触发词: 游戏实机录屏与直播叠层, 游戏录屏, 实机, 直播, HUD, UI 动效), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Gameplay capture with HUD and stream overlay · 游戏实机录屏与直播叠层

The screen itself is the shot: a fake gameplay capture, livestream or desktop recording. It holds up when the overlay layer is pinned to fixed positions and its numbers and banners change in step with the action.

This Skill carries one prompt structure distilled from 15 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- GTA-style mission clips, streamer facecam plus game footage, and interactive desktop or UI recordings where the HUD has to read as a real interface.
- 中文：GTA 风格的任务片段、主播小窗加游戏画面、互动桌面或界面录屏这类片子，HUD 要看起来像真的界面。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Format header: duration, aspect ratio, how the take is cut, and a plain statement that this is game capture
   2. Character lock: Image1 for face and identity only, outfit written out in text
   3. Screen layer spec: where each HUD element, facecam, chat or subtitle sits, and what language it uses, fixed throughout
   4. Camera rig: third-person follow distance and FOV, or one locked camera for desktop recordings
   5. Timeline segments: each one carries the action, the HUD state change and any spoken line
   6. Audio: engine, footsteps, keyboard and mouse, ambience, voice language
   7. Strict rules tail: exact character counts, no extra cuts, HUD stays put, how the clip may and may not end
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Pin every overlay to a named screen position before the timeline starts. GTA 6 Simulation opens with `Fixed full-screen game HUD throughout` and puts the streamer in a `bottom-right square pink-blue neon facecam`; the snow-station trailer assigns one element to each corner, stamina bars top-left, objective banner top-center, date top-right, minimap bottom-left, button prompts bottom-right.
- Treat the HUD as a scoreboard that changes with each beat. GTA 6 Simulation tracks ammo `from 24/120 to 14/120` and wanted level from two stars to three; the diamond escape gives every segment its own HUD block, going from `MISSION: STEAL VIP NECKLACE` to `TARGET ACQUIRED` to `ESCAPE SUCCESSFUL`.
- Say outright that it is gameplay and write the camera like a game rig. The Rio chase asks for genuine gameplay, `not a cinematic film`; the diamond escape writes `Clearly a GAME, not anime or cartoon` and puts the camera `1.5m behind NAGI, slightly camera-right` with FOV breathing between 30 and 60 degrees.
- Count the cast and make each extra person look different. GTA 6 Simulation asks for `exactly two dark-red-jacket gang enemies` and no extra armed characters; the five o'clock office case gives four coworkers different ages, heights and hair, and states that the boss is the only bald character.
- Split languages by layer and spell out how on-screen text appears. The diamond escape keeps `All HUD text English`, dialogue in Japanese; the desktop wallpaper case puts subtitles at the left middle of the frame and types them in at about 0.08 to 0.12 seconds per character, with a waveform under them.

## Pitfalls

- The HUD slides around or changes layout between beats. Write `HUD fixed in the same screen positions` as a hard rule and only let the values change, never the layout.
- Long HUD sentences come out as garbled text. Keep banners to two to four capitalised words like the diamond escape does, and keep numbers in a simple pattern like 38/120.
- The streamer or hero shows up twice, once in the facecam and once in the game world, or in a reflection. GTA 6 Simulation states HANEUL appears only in the facecam; the office case removes any mirror that could create a second NAGI.
- The model edits it like a cinematic trailer, with cuts and a tidy ending. Write no cuts and no transitions; if you need a closing shot, declare one hard cut at an exact second, as in `Exactly one hard cut at 27s`, and rule out a black screen or end card.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：游戏实机录屏与直播叠层

屏幕本身就是画面，假装是一段游戏实机、直播或桌面录屏。成立的关键是叠层钉死在固定位置，上面的数字和横幅跟着剧情一格一格变。

**结构:**

1. 格式开头：时长、画幅、镜头怎么切，再直说这是一段游戏录屏
2. 人物锁定：Image1 只管脸和身份，服装用文字写全
3. 屏幕叠层说明：HUD 各元素、主播小窗、弹幕或字幕各放哪、用什么语言，全程固定
4. 机位设定：第三人称跟随的距离和视角，桌面录屏就写一个固定机位
5. 时间轴分段：每段写清动作、HUD 状态变化、这一段说的台词
6. 音频：引擎、脚步、键盘鼠标、环境声、人声语言
7. 硬规则收尾：人数写死、不许多切、HUD 不动、结尾能怎么收不能怎么收

**要点:**

- 时间轴开始之前，先把每个叠层钉到一个具体位置。GTA 6 Simulation 开头就写 `Fixed full-screen game HUD throughout`，主播放在 `bottom-right square pink-blue neon facecam`；雪下车站那条一个角放一样东西，左上体力条，顶部中间任务横幅，右上日期，左下小地图，右下按键提示。
- 把 HUD 当记分牌写，每一段都让它变一次。GTA 6 Simulation 写了弹药 `from 24/120 to 14/120`，通缉星从两颗涨到三颗；钻石逃亡那条每段单独一个 HUD 块，从 `MISSION: STEAL VIP NECKLACE` 到 `TARGET ACQUIRED` 再到 `ESCAPE SUCCESSFUL`。
- 直接说明这是游戏画面，机位按游戏摄像机来写。里约追逐那条要求像真实游戏录屏，写了 `not a cinematic film`；钻石逃亡写 `Clearly a GAME, not anime or cartoon`，镜头放在 `1.5m behind NAGI, slightly camera-right`，视角在 30 到 60 度之间呼吸。
- 人数写死，多出来的每个人都要长得不一样。GTA 6 Simulation 要求 `exactly two dark-red-jacket gang enemies`，不许再冒出别的持枪角色；五点下班那条给四个同事分了年龄、身高、发型，还专门写明老板是全片唯一的光头。
- 按图层分语言，屏幕上的字怎么出现也要写清。钻石逃亡规定 `All HUD text English`，对白用日语；动态壁纸那条把字幕放在画面左侧中部，每个字大约 0.08 到 0.12 秒逐字打出来，下面跟一条跳动的音频波形。

**常见坑:**

- HUD 在段与段之间漂移或者换布局。硬规则里写上 `HUD fixed in the same screen positions`，只让数值变，布局一律不动。
- HUD 上的长句子出来是乱码。横幅控制在两到四个大写词，像钻石逃亡那样，数字也用 38/120 这种简单格式。
- 主播或主角出现两次，小窗里一个，游戏世界里又一个，或者镜子里多出一个。GTA 6 Simulation 写明 HANEUL 只出现在右下小窗；五点下班那条干脆规定电梯里没有镜子。
- 模型把它剪成了电影预告片，有剪切还有一个圆满结尾。写明不切镜不转场；真要一个收尾镜头，就像 `Exactly one hard cut at 27s` 那样把唯一一刀钉在具体秒数，再排除黑屏和片尾卡。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a video that looks like real gameplay capture. [The hero is a short-haired girl in a school uniform; I am sending you her photo.] [The mission: steal the last rice ball from a convenience store late at night and escape into the street.] [A streamer facecam sits in the bottom-right corner, with scrolling live chat on the left.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一段看起来像游戏实机录屏的视频，【主角是一个穿校服的短发女生，人物照片我提供给你】，【任务是深夜从便利店偷走最后一个饭团再逃到街上】，【画面右下角有主播摄像头小窗，左边是滚动弹幕】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
