---
name: seedance-retro-dv-home-video
description: "The period feel comes from camera defects and one tiny everyday incident. Write the camcorder's autofocus hunting, exposure shifts and handheld shake as an explicit list, keep the story small, and the clip reads as a real old tape. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Early-2000s DV home video; 中文触发词: 早年 DV 家庭录像, DV, 家庭录像, VHS, 复古, 年代感), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Early-2000s DV home video · 早年 DV 家庭录像

The period feel comes from camera defects and one tiny everyday incident. Write the camcorder's autofocus hunting, exposure shifts and handheld shake as an explicit list, keep the story small, and the clip reads as a real old tape.

This Skill carries one prompt structure distilled from 17 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Home videos, travel diaries, MiniDV couple clips, neighbourhood walks — any everyday footage that should look recorded years ago on consumer gear.
- 中文：家庭录像、旅拍日志、MiniDV 情侣片、街区漫步，任何想看起来像多年前用家用机器拍下来的生活片段。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line: duration, resolution, the format named as an early-2000s DV home video, and whether there is a reference image
   2. MAIN SUBJECT: age, skin, hairstyle, the full outfit, closed with one consistency lock
   3. SETTING: a specific lived-in neighbourhood with its clutter, ending with an exclusion of landmarks, ads and brands
   4. CAMERA: the camcorder's defect list, plus one line banning stabilisation and cinematic moves
   5. Beat sections by timecode or headline, one small event each, with spoken lines written into the beat where they happen
   6. AUDIO: location sound only, stated as no music
   7. Tail: realism constraints, negative list, aspect ratio, and a hard cut to black
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Write the camera paragraph as a defect list. The Seoul summer afternoon clip spells out `autofocus hunting, exposure shifts, accidental zooms`, then immediately bans `No stabilization, drone footage, gimbal movement`.
- Lock the person in one sentence and reuse it. The Seoul evening vlog closes with `Maintain the same face, hairstyle, clothing, body proportions`; with a reference photo, swap in the couple diary's `Use the uploaded reference image as the exact character reference`.
- Fill the setting with lived-in clutter and then exclude landmarks. The Seoul afternoon clip names potted plants, utility poles and laundry hanging outside, then adds `No tourist attractions, advertisements, recognizable brands`.
- Give the clip one small incident, not a plot. The falling-leaf case is thirty seconds of a leaf landing on her head and two failed attempts to balance it on a bicycle seat.
- End with a tape-style hard cut and keep the audio local. The Seoul afternoon clip follows her around the corner and then `The recording abruptly cuts to black`, with footsteps, insects and bicycle bells as the only sound, `No music`.

## Pitfalls

- Piling in 4K, cinematic lighting and sharp detail. Once image quality goes up the DV feel disappears; the period look is bought with the defect list alone.
- Cramming five events into thirty seconds. One timecode slot holds one action plus one reaction — the falling-leaf case spends a full six seconds per event.
- Letting props vanish or duplicate between beats. The Seoul afternoon clip states that after the kick the football stays with the children and does not come back or split in two; say where each prop ends up.
- Writing long spoken lines. When lip sync goes soft, cut the sentence — every line in these cases stays under one sentence, like `Okay, that was pointless.`

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：早年 DV 家庭录像

年代感靠机器缺陷和一件生活小事撑起来。把 DV 的对焦拉风箱、曝光跳动、手抖写成明确清单，剧情放小，整条就像一盘真的旧带子。

**结构:**

1. 开场一句：时长、分辨率、片种写成 early-2000s DV home video，说明有没有参考图
2. MAIN SUBJECT：年龄、皮肤、发型、整套衣服，收一句一致性锁
3. SETTING：具体的生活化街区和它的杂物，末尾排除地标、广告、品牌
4. CAMERA：DV 机器的缺陷清单，再加一句禁掉稳定器和电影感运镜
5. 按时间码或小标题分段，一段一件小事，台词写进它发生的那一拍
6. AUDIO：只留现场音，写明 no music
7. 收尾：realism 约束、负面清单、画幅，最后硬切到黑

**要点:**

- 相机那段写成器材缺陷清单。首尔夏日午后那条整段列 `autofocus hunting, exposure shifts, accidental zooms`，紧跟着禁掉 `No stabilization, drone footage, gimbal movement`。
- 人物一句话锁死，整条复用。首尔夏夜 Vlog 用 `Maintain the same face, hairstyle, clothing, body proportions` 收尾；有参考图就换成情侣约会那条的 `Use the uploaded reference image as the exact character reference`。
- 场景堆生活痕迹，然后把地标排除掉。首尔午后那条点名盆栽、电线杆、晾在外面的衣服，再补一句 `No tourist attractions, advertisements, recognizable brands`。
- 整条只给一件小事，别给剧情。树叶那条三十秒就是一片叶子掉到她头上，她试着把叶子立在自行车座上，两次都被风吹掉。
- 结尾用录像带式的硬切，声音只留现场。首尔午后那条跟拍她转过街角，然后 `The recording abruptly cuts to black`，音频只有脚步、虫鸣、自行车铃，写明 `No music`。

**常见坑:**

- 往里堆 4K、cinematic lighting、sharp detail。画质一上去 DV 味就没了，年代感只能靠缺陷清单换。
- 三十秒塞五件事。一个时间码槽只放一个动作加一个反应，树叶那条一件事就占满六秒。
- 道具在两拍之间消失或者变成两个。首尔午后那条专门写了球踢回去之后留在孩子那边，不会回来也不会复制，每个道具的去向都要点名。
- 台词写成长句。口型一糊就该砍句子，案例里的台词都不超过一句，像 `Okay, that was pointless.`

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a retro home-video clip. [Set it in the summer of 2003, shot on a consumer DV camcorder of that era.] [It follows my cousin walking home from school and meeting a stray cat.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条年代感家庭录像风格的视频，【时间设定在 2003 年夏天，用当时的家用 DV 拍的】，【拍的是我表妹放学回家路上遇到一只猫】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
