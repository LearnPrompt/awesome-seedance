---
name: seedance-epic-fantasy-scifi
description: "Monsters, dragons, world reveals. Each entity gets its own definition block, the shots are cut by timecode, and scale is bought with reference objects and low angles rather than words like massive. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Epic fantasy and sci-fi spectacle; 中文触发词: 奇幻科幻大场面, 奇幻, 科幻, 巨龙, 怪兽, 史诗), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Epic fantasy and sci-fi spectacle · 奇幻科幻大场面

Monsters, dragons, world reveals. Each entity gets its own definition block, the shots are cut by timecode, and scale is bought with reference objects and low angles rather than words like massive.

This Skill carries one prompt structure distilled from 21 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Kaiju attacks, dragon battles, transformation sequences, world reveals — anything whose payload is one physical spectacle at blockbuster scale.
- 中文：怪兽攻城、巨龙对战、变身序列、世界观展示，任何有效载荷是一个大片级物理奇观的片子。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line: duration, the genre named (cinematic dark fantasy, kaiju action sequence), and whether it is photorealistic or animated
   2. Entity blocks: one paragraph each for the character, the creature, the vehicle and the city, each tagged for what it supplies
   3. Setting and mood: weather, light sources, level of destruction, colour grade direction
   4. Shot breakdown: CUT 1 / CUT 2 with timecodes, or one continuous camera path with named passages
   5. The spectacle beat written on its own, with cause and effect spelled out
   6. Technical tail: grade, fog, grain, lens, render style
   7. Rules paragraph: references are appearance only, keep the face consistent, and state what the final frame holds
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Split the entities into their own blocks before any scene text. The kaiju jet case defines Pilot, Seabaycity, Monster and Jet separately, each closed with its scope: `Appearance only`, `Environment only`, `Vehicle only`.
- Buy scale with reference objects and camera angles. The same case instructs `sell the size of the monster with low angles and the city for scale`, and puts a dramatic low angle in CUT 1.
- Give the clip one spectacle and let the rest be approach. The warrior and white dragon case spends its whole runtime on inserting a key, the dragon emerging, and one beam shattering the celestial orb.
- Write the camera path as something executable. The rain-alley transition case names what it goes through every time: `pushes directly toward the center of the ripple`, then into the pupil, then through the crystal's internal structure.
- Close with a fixed technical paragraph. The top cases all end on a run like `volumetric fog, photorealistic visual effects, Unreal Engine 5 render style` with an explicit grade, such as dark grey and golden.

## Pitfalls

- Stuffing five spectacles into fifteen seconds. Each one comes out half-finished; give the clip one blow-up and treat every other shot as setup.
- Relying on epic and massive alone. Without a building, a city or a low angle for comparison the monster ends up human-sized.
- Leaving stray characters in the body text. The ruined-bedroom case has a t.co link sitting mid-sentence, and junk like that gets read as picture content — strip it.
- Not saying what the last frame holds. The kaiju jet case ends with `Final frame on the monster crashing into the bay, stable and clean`; without that line the tail tends to wobble or smear.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：奇幻科幻大场面

怪兽、巨龙、世界观展示。每个实体单独给一个定义块，镜头按时间码切开，尺度感靠参照物和低机位换，靠 massive 这种词换不来。

**结构:**

1. 开场一句：时长、片种写明（cinematic dark fantasy、kaiju action sequence 之类）、是写实还是动画
2. 实体定义块：人物、怪兽、载具、城市各一段，每段标清楚它只提供什么
3. 场景与气氛：天气、光源、破坏程度、调色方向
4. 镜头切分：CUT 1 / CUT 2 带时间码，或者一条连续镜头路径并点名每次穿过什么
5. 奇观那一拍单独写，把因果交代清楚
6. 技术收尾段：调色、雾、颗粒、镜头、渲染风格
7. 规则段：参考图只取外观、脸要一致、最后一帧停在什么上面

**要点:**

- 先把实体拆成独立的块，再写场景。战机怪兽那条把 Pilot、Seabaycity、Monster、Jet 各写一段，每段结尾标清用途：`Appearance only`、`Environment only`、`Vehicle only`。
- 尺度感靠参照物和机位买。同一条明确要求 `sell the size of the monster with low angles and the city for scale`，CUT 1 就是一个戏剧性低机位。
- 整条只给一个奇观，其余镜头都是走位。女武士白龙那条全片就是插钥匙、龙出场、一道光束击碎天体。
- 镜头路径写成能执行的动作。雨巷转场那条每一次换场都点名穿过什么：`pushes directly toward the center of the ripple`，接着穿进瞳孔，再穿过水晶的内部结构。
- 固定用一段技术参数收尾。热度最高的几条都收在 `volumetric fog, photorealistic visual effects, Unreal Engine 5 render style` 这样一串上，并点明调色方向，比如深灰加金。

**常见坑:**

- 十五秒塞五个奇观。每个都做成半成品，一条片子只给一个爆点，其余镜头当铺垫。
- 只靠 epic、massive 这类词。没有楼、没有城、没有低机位做参照，怪兽出来就和人一样高。
- 正文里留着脏字符。废墟黑猫那条句子中间夹了一条 t.co 链接，这种东西会被当成画面内容，要清掉。
- 不交代最后一帧停在哪。战机怪兽那条写了 `Final frame on the monster crashing into the bay, stable and clean`，少了这句收尾容易抖或者糊。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want an epic fantasy spectacle clip. [The lead is a young man with a long blade on his back, standing in a half-buried desert city.] [The spectacle: a sand worm bursts up through the street from below.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条奇幻大场面视频，【主角是一个背着长刀的少年，站在被沙埋掉一半的城市里】，【奇观是一只沙虫从地下顶穿整条街冲出来】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
