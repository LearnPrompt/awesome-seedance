---
name: seedance-fashion-lookbook
description: "One person, one look, a handful of places. A head-to-toe appearance lock carries the whole clip, and each scene gets one location, one gesture and one kind of light. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Fashion lookbook and portrait film; 中文触发词: 时尚 lookbook 与人像写真片, 时尚, 穿搭, 人像, 写真), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Fashion lookbook and portrait film · 时尚 lookbook 与人像写真片

One person, one look, a handful of places. A head-to-toe appearance lock carries the whole clip, and each scene gets one location, one gesture and one kind of light.

This Skill carries one prompt structure distilled from 13 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Fashion campaigns, street-style lookbooks, outfit-change reels, and portrait or beauty pieces where the payload is how someone looks moving through a few settings.
- 中文：时尚广告大片、街拍 lookbook、换装短片，以及人像和美妆类写真片，有效载荷就是一个人在几个场景里的样子。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Header parameters: aspect ratio, exact duration, the genre stated as fashion campaign, Vogue editorial or cinematic portrait, and the cutting pace
   2. Person and look lock: face, hair, makeup, jewellery, then every garment, shoe and bag named, with a line saying it is identical in every scene
   3. Hero item lock: material, colour, hardware, and how it is carried
   4. Scene chain: each block marked with seconds or a scene number, carrying shot size, place, one action and the light
   5. On-screen type, when wanted, as its own short line under the scene it belongs to
   6. Closing hero beat: everything slows, the camera orbits or pushes onto the item, and the last move tilts up to the face
   7. Visual direction and exclusions: lens, film tone, grain, and no plastic skin, stiff poses or watermarks
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Write the outfit head to toe in the opening paragraph, then say it travels. The Paris campaign runs all the way to `black pointed-toe heels, babypink smooth leather hobo shoulder bag` and closes with `hanging naturally on arm throughout all scenes`.
- Give each scene one shot size, one place and one gesture. The Paris case heads a block with `Scene 5 · 3 sec Medium close-up`, and the only action in it is `slowly pushes sunglasses up with one finger`.
- Lock the hero item apart from the person. The Tokyo bag film states `One consistent young female fashion model throughout`, then locks `one identical glossy pastel-pink Prada handbag` on its own line.
- For portrait-style pieces, chain the actions in one long sentence with no shot numbers. The stream walk runs from `holding a juicy red watermelon slice near her face` straight through to her turning to the camera on a wooden porch.
- Buy the photographic feel with gear plus an exclusion list. The Paris case names `shot on Canon EOS R5 35mm f/1.4, Kodak Portra 400 film tone` and rules out `plastic skin, robotic movement, stiff poses`.

## Pitfalls

- Describing the outfit once in loose terms. Clothes drift between scenes; name every piece and add that it stays identical scene to scene.
- Packing three actions into a three-second block. One gesture per scene — the Paris case gives each three-second scene a single move.
- Handing the model a paragraph of on-screen copy. The Tokyo film only ever puts one or two short lines up, like `TOKYO` or `MADE TO BE SEEN`; longer type renders garbled, so add it in post.
- Running slow motion and transition effects the whole way. The Tokyo film pins its montage to `hard cuts synchronized to the beat` and saves the slowdown for the hero shot.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：时尚 lookbook 与人像写真片

一个人、一身造型、几个地点。一段从头写到脚的外观锁撑起整条片子，每个场景只给一个地点、一个动作、一种光。

**结构:**

1. 开头参数：画幅、准确时长、片种写成时尚广告大片、Vogue editorial 或电影感写真，再交代剪辑节奏
2. 人物与造型锁：脸、发型、妆、首饰，然后每一件衣服鞋包点名，补一句每个场景都一样
3. 主推单品锁：材质、颜色、五金、怎么拿在身上
4. 场景链：每段标出秒数或场景号，写景别、地点、一个动作和光线
5. 要上屏文字的，就在对应场景下面单起一行短句
6. 收尾英雄镜头：整体慢下来，镜头绕一圈或推到单品上，最后上摇到脸
7. 视觉方向与排除清单：镜头、胶片色调、颗粒，排掉塑料皮肤、僵硬姿势和水印

**要点:**

- 开头一段把造型从头写到脚，再写明它全程跟着走。巴黎街拍那条一路列到 `black pointed-toe heels, babypink smooth leather hobo shoulder bag`，末尾补一句 `hanging naturally on arm throughout all scenes`。
- 每个场景只给一个景别、一个地点、一个动作。巴黎那条的小标题是 `Scene 5 · 3 sec Medium close-up`，这一段里唯一的动作是 `slowly pushes sunglasses up with one finger`。
- 主推单品和人分开锁。东京手袋那条先写 `One consistent young female fashion model throughout`，再单独一行锁住 `one identical glossy pastel-pink Prada handbag`。
- 人像写真式的就用一个长句把动作串起来，不标镜号。溪畔那条从 `holding a juicy red watermelon slice near her face` 一路接到她在木门廊上回头对镜头笑。
- 照片质感靠器材加排除清单换。巴黎那条点名 `shot on Canon EOS R5 35mm f/1.4, Kodak Portra 400 film tone`，再排掉 `plastic skin, robotic movement, stiff poses`。

**常见坑:**

- 造型只用一句好看的衣服带过。场景一换衣服就变，每件单品都点名，并补一句每个场景都一样。
- 三秒的一段里塞三个动作。一个场景一个动作，巴黎那条每格三秒只做一件事。
- 把整段文案交给模型上屏。东京那条上屏的只有 `TOKYO`、`MADE TO BE SEEN` 这种一两行短句，长段文字排出来会糊，留到后期加。
- 全程慢动作加转场特效。东京那条的快剪段写死 `hard cuts synchronized to the beat`，慢只留给最后的英雄镜头。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a fashion lookbook clip. [The model is an Asian woman with short hair, walking through a plane-tree neighbourhood in Shanghai in autumn.] [The hero pieces are an oatmeal trench coat and a brown leather tote.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条时尚 lookbook 短片，【模特是一个短发的亚洲女生，走在秋天的上海梧桐街区】，【主推单品是一件燕麦色长风衣配棕色皮质托特包】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
