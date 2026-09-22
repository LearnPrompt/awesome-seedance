---
name: seedance-sports-extreme
description: "The clip lives or dies on the action loop. Write every link from run-up to landing in order, name the physics you want by part, and spend the negative list on flying, hovering and teleporting. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Sports and extreme stunts; 中文触发词: 体育与极限运动, 体育, 极限运动, 跑酷, 滑板), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Sports and extreme stunts · 体育与极限运动

The clip lives or dies on the action loop. Write every link from run-up to landing in order, name the physics you want by part, and spend the negative list on flying, hovering and teleporting.

This Skill carries one prompt structure distilled from 10 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Snowboarding, mountain biking, parkour, street basketball, water game shows and phone-shot stunt clips where a body has to obey gravity and contact.
- 中文：单板滑雪、山地骑行、跑酷、街头篮球、水上闯关，以及手机实拍风格的特技片段，身体必须服从重力和接触。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Header parameters: duration, aspect ratio, reference image, on-location audio, and the overall look stated as phone-shot action footage
   2. Global continuity: the site, the apparatus, the main subject and the bystanders, each in its own short block
   3. Camera continuity: who holds the camera and how it travels, with cuts and viewpoint jumps ruled out
   4. The action loop: every link from run-up to landing named once, in order, as one chain
   5. Beats by timecode, each carrying the body detail plus the camera move that goes with it
   6. Constraint block: the environment stays put, the force has a named source, and the move must not read as flight
   7. Negative list: look drift, camera teleports, broken physics, injury, subtitles and watermarks
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Write the stunt as one ordered chain of contact and reaction. The rooftop bungee case runs a STUNT ENGINE line from `屋顶助跑 → 飞越护墙 → 高空下落 → 命中圆形弹性面中心` on to the landing, and demands the four phases `接触—下陷—压缩—回弹` all be visible.
- Name the physics part by part. The mountain-bike final asks for `suspension compression, braking, cornering, jump physics, dirt displacement`, so the bike behaves instead of gliding.
- Lock rider, gear, trail and light in a single sentence up front. The valley ride case opens with `Same female rider, bike, clothing, trail, and daylight throughout` and never describes them again.
- Make every reaction start from contact. The water game-show case writes `反应必须由接触触发` and blocks her from standing up or leaning back before the moving wall actually reaches her.
- Spend the negative list on cheats rather than on taste. The mountain-bike final bans `no teleportation, no floating bikes, no unrealistic physics`; the bungee case adds flying, hovering, hidden cables and anti-gravity.

## Pitfalls

- Writing only the outcome and skipping the contact. The body rebounds or launches before it touches anything; give contact, compression and release their own time slots.
- Stacking extra angles inside a one-take. Write `不切镜、不瞬移、不更换视角` and describe the camera as the operator moving on foot with the athlete.
- Landing light and upright. Ask for knees and hips folding deep to absorb the impact, and put `落地无重量，站直落地` in the negative list.
- Over-specifying spin direction and rotation count. Limbs twist and the body clips; the bungee case writes `不要锁定具体翻转方向` and asks for continuous natural rotation instead.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：体育与极限运动

这类片子全押在动作闭环上。从助跑到落地，每个环节按顺序写出来，要哪几项物理就点名哪几项，负面清单专门用来打掉飞行、悬浮和瞬移。

**结构:**

1. 开头参数：时长、画幅、参考图、现场声，整体质感写成极限运动手机实拍
2. 全局连续性：场地、器械、主角、旁观者，各占一小段
3. 相机连续性：谁在拿着拍、镜头怎么走，写明不切镜、不换视角
4. 动作闭环：从助跑到落地，每个环节按顺序点名一次，连成一条链
5. 按时间码切拍，每拍写身体细节，再配上这一拍的相机动作
6. 约束段：环境位置不漂移，力从哪来说清楚，不能表现成飞行
7. 负面清单：造型漂移、机位瞬移、物理失效、受伤流血、字幕水印

**要点:**

- 把特技写成一条有顺序的接触与反应链条。屋顶蹦极那条的 STUNT ENGINE 段从 `屋顶助跑 → 飞越护墙 → 高空下落 → 命中圆形弹性面中心` 一路排到落地，还要求 `接触—下陷—压缩—回弹` 四个阶段都看得见。
- 物理逐项点名。山地车决赛那条要的是 `suspension compression, braking, cornering, jump physics, dirt displacement`，车才会像车，而不是在地面上滑行。
- 人、车、赛道和光在开头一句话锁死。山谷骑行那条开篇就是 `Same female rider, bike, clothing, trail, and daylight throughout`，后面再也不重复描述。
- 所有反应都从接触开始。水上闯关那条写了 `反应必须由接触触发`，墙板真的碰到之前，不许她提前站起或者提前后仰。
- 负面清单留给作弊动作，不要拿来写审美。山地车决赛那条禁掉 `no teleportation, no floating bikes, no unrealistic physics`，蹦极那条还补了飞行、悬浮、隐形绳索和反重力。

**常见坑:**

- 只写结果，跳过接触。身体会在碰到东西之前就弹起来或者飞出去，接触、压缩、回弹各给一个时间段。
- 在一镜到底里塞额外机位。写上 `不切镜、不瞬移、不更换视角`，相机动作按摄影者跟着运动员跑来描述。
- 落地轻飘，站直了就站住。要求屈膝屈髋深度下沉吸收冲击，再把 `落地无重量，站直落地` 放进负面清单。
- 翻转方向和圈数写得太死。四肢会扭曲穿模，蹦极那条写的是 `不要锁定具体翻转方向`，要的是自然连续的旋转。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want an extreme-sports clip. [The sport is skateboarding, in a concrete bowl under a city overpass at dusk.] [I am sending my own photo as the rider; keep the face and outfit locked throughout.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条极限运动短片，【项目是滑板，场地是傍晚城市高架桥下的水泥碗池】，【我提供自己的照片当主角，全程锁脸和造型】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
