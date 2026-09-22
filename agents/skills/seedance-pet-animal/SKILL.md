---
name: seedance-pet-animal
description: "The animal is the lead and a phone is the only camera. Lock the count to exactly one, keep the animal behaving like an animal, and let the payoff come from it closing in on the lens. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Pets and animals as the lead; 中文触发词: 宠物动物当主角, 宠物, 猫, 狗, 动物), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Pets and animals as the lead · 宠物动物当主角

The animal is the lead and a phone is the only camera. Lock the count to exactly one, keep the animal behaving like an animal, and let the payoff come from it closing in on the lens.

This Skill carries one prompt structure distilled from 13 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Selfie and vlog clips where a cat, dog or wild animal hijacks the frame, plus photoreal wildlife comedy built on one real animal behaviour.
- 中文：猫狗或野生动物抢镜的自拍、vlog 片段，以及靠一个真实动物行为撑起来的写实喜剧。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Reference and subject block: lock the person with a reference image if anyone is on camera, and state that there is exactly one animal, the same one throughout
   2. Format block: duration, vertical 9:16, handheld front-camera selfie, indoor daylight, no grading and no beauty filter
   3. Camera block: arm drift, imperfect framing, autofocus hunting, no cuts, no zoom, no third-person operator
   4. Body split by seconds, each block pushing the animal one step further: notices, reaches, steals, climbs, attacks the lens
   5. The human reaction and a half-finished line written into the same beat
   6. Audio block: a list of on-set sounds, no music, no subtitles, no watermark
   7. Strict constraints to close: one person, one animal, no second animal, correct mirror physics, no camera operator
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Write the count as a hard number and make that one animal physically continuous. The dog mirror case says `Use exactly ONE small playful dog throughout the entire video` plus `No duplicate animal`; the kitten vlog case itemises `consistent fur pattern, eye color, size, whiskers, ears, paws`.
- Give the animal its own behaviour paragraph. The macaque case opens an ANIMAL BEHAVIOR block with `No talking, no human clothing, no human-like walking`, and rests the whole joke on the monkey copying the hiker's head tilt.
- Buy realism with a list of camera defects. The cat day-in-the-life vlog asks for `Natural handheld shake`, `Occasional autofocus hunting` and `Natural front-camera lens distortion`, then bans `No cinematic camera movements`.
- Escalate beat by beat and land on the lens. The dog case closes with `Its nose fills a large part of the frame`, the image losing focus and regaining it; the rainy-day kitten ends with a paw at the corner of the lens and the clip cutting off mid-laugh.
- Keep the audio diegetic. The cat vlog's closing audio block lists only meows, purring, chirping and footsteps and states `No background music`; the dog case says `Natural room ambience only`.

## Pitfalls

- Leaving the count open. A second animal or a duplicated reflection shows up mid-clip; the dog case pins it down with `Exactly one woman. Exactly one dog.` and `No duplicate reflection`.
- Letting the animal talk or walk like a person. The clip slides into cartoon territory; the macaque case bans it outright and puts the joke back on real animal behaviour.
- Writing full sentences for the human. The performer has to laugh and speak at once and the lip sync falls apart; cut the line to a broken half like `You little—`.
- Adding cinematic moves and colour grading out of habit. The phone-footage feel dies immediately; write no cinematic lighting, no color grading, no cuts, no zoom.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：宠物动物当主角

动物是真正的主角，镜头就交给一台手机。数量锁死成一只，动物只做动物做的事，包袱留给它一步步逼近镜头。

**结构:**

1. 参考与主体段：有人出镜就用参考图锁住人，再写死只有一只动物，从头到尾是同一只
2. 格式段：时长、竖屏 9:16、手持前置自拍、室内自然光、不调色不加美颜
3. 相机段：手臂漂移、构图偏一点、自动对焦拉风箱、不剪、不变焦、没有第三方机位
4. 正文按秒切段，每段让动物往前递进一步：注意到、伸爪、抢走、爬肩、扑镜头
5. 人的反应和半句没说完的台词，写在同一拍里
6. 音频段：现场声清单，没有音乐、字幕、水印
7. 严格约束收尾：一个人一只动物、不许出现第二只、镜面物理正确、画面里没有摄影师

**要点:**

- 数量写成一个硬数字，并把这一只写成物理连续。狗狗抢镜那条是 `Use exactly ONE small playful dog throughout the entire video`，外加 `No duplicate animal`；小猫 vlog 那条还逐项点名 `consistent fur pattern, eye color, size, whiskers, ears, paws`。
- 给动物单开一段行为规则。猕猴那条写了 ANIMAL BEHAVIOR 块，`No talking, no human clothing, no human-like walking`，笑点全押在猴子跟着徒步者歪头这件事上。
- 真实感用一份相机缺陷清单换。猫咪一日 vlog 要的是 `Natural handheld shake`、`Occasional autofocus hunting`、`Natural front-camera lens distortion`，再禁掉 `No cinematic camera movements`。
- 动作按拍升级，最后落到镜头上。狗狗那条最后一段写 `Its nose fills a large part of the frame`，画面先失焦再找回；雨天小猫那条是爪子伸到镜头角落，片子在笑声里断掉。
- 声音只留现场音。猫咪 vlog 收尾的音频段只列 meows、purring、chirping、footsteps，并写死 `No background music`；狗狗那条写的是 `Natural room ambience only`。

**常见坑:**

- 数量留着不写。片子中段会多出第二只动物或者多一个倒影，狗狗那条用 `Exactly one woman. Exactly one dog.` 和 `No duplicate reflection` 把它钉死。
- 让动物说话或者像人一样走路。片子会滑向动画，猕猴那条直接禁掉这些，把笑点压回真实的动物行为。
- 给人写完整长句台词。演员要边笑边念，口型必散，改成被笑打断的半句，像 `You little—` 这种断在一半的。
- 顺手加电影感运镜和调色。手机拍的质感立刻就没了，写上 no cinematic lighting、no color grading、no cuts、no zoom。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a handheld selfie video where my pet steals the shot. [My pet is a chubby orange cat with a small notch in her right ear.] [While I film a selfie she climbs onto my shoulder and ends up pressing her nose against the lens.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条宠物抢镜的手持自拍视频，【我的宠物是一只胖橘猫，右耳有个小缺口】，【它趁我拍自拍一路爬到肩膀上，最后把鼻子怼到镜头前】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
