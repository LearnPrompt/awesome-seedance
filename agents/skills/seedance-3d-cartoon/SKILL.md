---
name: seedance-3d-cartoon
description: "One small anthropomorphic character carries the whole film. Spell out its looks part by part, write the style as render settings you can measure, and cut the timeline so each block holds a single action goal. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (3D cartoon character short; 中文触发词: 3D 卡通角色短片, 3D 卡通, 皮克斯, 黏土, 卡通角色), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# 3D cartoon character short · 3D 卡通角色短片

One small anthropomorphic character carries the whole film. Spell out its looks part by part, write the style as render settings you can measure, and cut the timeline so each block holds a single action goal.

This Skill carries one prompt structure distilled from 15 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Pixar-flavoured animated shorts with a cute lead: animal chefs, baby dragons, clay-textured characters that still move smoothly.
- 中文：皮克斯味的动画短片，主角是个可爱角色：动物厨师、幼龙、黏土质感但运动平滑的小家伙。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line that fixes the format: duration, 3D animated short, aspect ratio, overall tone
   2. Character paragraph: looks part by part, outfit, personality, then one line that holds it steady
   3. Body split by seconds or by SCENE, one location and one action goal per block
   4. Inside each block, micro-actions and expression changes that carry the emotion
   5. Visual and render paragraph: fur, depth of field, lighting, materials, bokeh
   6. Camera and mood paragraph: push-in, tracking, close-up, plus a line of mood words
   7. Exclusion list to close: appearance changes, face distortion, extra characters, flickering, text and watermark
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Write the character as a parts list, then add one line that freezes it. The frog chef spells out skin, eyes, mouth, cheeks, webbed feet and chef jacket, then follows with `Keep the exact same frog appearance, outfit, proportions`; the otter adventure uses `Maintain the exact same character design, proportions, fur pattern`.
- Turn the style word into render settings. The sofa bunny case asks for soft realistic fluffy fur, cinematic depth of field and creamy bokeh, then adds `premium Pixar-like quality without copying any specific existing character`.
- Cut the body into labelled blocks. The frog chef runs `0–5 SEC — THE RESTAURANT` through `27–30 SEC — THE PAYOFF`; the otter adventure uses `SCENE 1 — Meadow Chase` and names a place and a mood for each block.
- Write emotion as a physical beat the model can animate. The frog chef gets `He moves one tiny vegetable approximately one millimeter` and `His eyes narrow`, and the reveal reads `The hedgehog's ears shoot upward`, which lands better than saying the animals are amazed.
- Close with an exclusion list aimed at animation failures. The butterfly case ends on `No character changes, face distortion, extra characters, outfit changes, flickering, deformed hands`, and the ice-cream otter adds `no distorted anatomy, no extra characters`.

## Pitfalls

- Dropping the word Pixar and stopping there. The model hands back generic CG; follow the bunny case and list fur, depth of field, lighting and bokeh one by one.
- Locking the character only once at the top. The look drifts by the middle of the film, so re-name the identifying item at the start of every scene, like the blue scarf or the oversized chef hat.
- Packing more scenes than the duration holds. The otter short puts nine scenes into 40 seconds, under five seconds each, so the actions only skim past. Cut scenes first and keep one action goal per block.
- Asking for fine hand work with no guard. Moves like the frog chef placing a herb with tweezers are where extra fingers appear; put `deformed hands` in the exclusion list or switch to a whole-paw grab.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：3D 卡通角色短片

一个拟人小角色撑起整条片子。外形逐项写死并全程复述，画风写成能测量的渲染项，时间轴切成一段一个动作目标。

**结构:**

1. 开篇一句定片型：时长、3D 动画短片、画幅、整体调性
2. 角色段：外形逐项、服装、性格，末尾加一句保持不变
3. 正文按秒或按 SCENE 切段，每段一个地点加一个动作目标
4. 段内写微动作和表情变化，让情绪靠动作出来
5. 视觉与渲染段：毛发、景深、光线、材质、焦外
6. 镜头与情绪段：推镜、跟拍、特写，再加一行 mood 词
7. 排除清单收尾：外形变化、脸崩、多余角色、闪烁、文字水印

**要点:**

- 角色写成零件清单，再补一句把它冻住。青蛙大厨那条把皮肤、眼睛、嘴、脸颊、蹼足、厨师服逐项写出来，然后跟一句 `Keep the exact same frog appearance, outfit, proportions`；水獭冒险那条用的是 `Maintain the exact same character design, proportions, fur pattern`。
- 把风格词换成渲染项。沙发萌兔那条要的是柔软真实的绒毛、电影景深、奶油焦外，再补一句 `premium Pixar-like quality without copying any specific existing character`。
- 正文切成带标题的段。青蛙大厨从 `0–5 SEC — THE RESTAURANT` 一路排到 `27–30 SEC — THE PAYOFF`；水獭冒险用的是 `SCENE 1 — Meadow Chase`，每段点名地点和情绪。
- 情绪写成能动起来的身体动作。青蛙大厨那条写 `He moves one tiny vegetable approximately one millimeter` 和 `His eyes narrow`，揭晓那拍写 `The hedgehog's ears shoot upward`，比写一句大家很惊讶更容易落地。
- 收尾放一份针对动画翻车的排除清单。小蝴蝶那条以 `No character changes, face distortion, extra characters, outfit changes, flickering, deformed hands` 收尾，冰淇淋水獭那条补的是 `no distorted anatomy, no extra characters`。

**常见坑:**

- 只丢一个皮克斯风就收尾。模型还给你的是通用 CG，照萌兔那条把绒毛、景深、光线和焦外一项项写出来。
- 角色只在开头锁一次。片子走到中段外形就开始漂，每个场景开头重提识别物，比如蓝围巾、过大的厨师帽。
- 场景数量超过时长能装的。水獭那条 40 秒塞了 9 个场景，每段不到五秒，动作只能一滑而过。先砍场景，一段留一个动作目标。
- 让角色做精细手部操作又不设防。青蛙大厨用镊子摆香草这种动作最容易长出多余手指，把 `deformed hands` 写进排除清单，或者改成整只爪子抓。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a 3D cartoon animated short. [The lead is a small hedgehog in a red scarf, round eyes, waddling when it walks.] [The story: on a rainy night it guides a lost firefly back home.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条 3D 卡通动画短片，【主角是一只戴红围巾的小刺猬，圆眼睛，走路一摇一摆】，【故事是它在雨夜给一只迷路的萤火虫带路回家】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
