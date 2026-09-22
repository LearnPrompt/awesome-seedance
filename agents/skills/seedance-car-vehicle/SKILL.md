---
name: seedance-car-vehicle
description: "The machine has to stay one machine while the camera does all the work. Lock the vehicle part by part, then fill the runtime with a numbered cut list that moves the camera every second. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Cars and vehicles at speed; 中文触发词: 汽车与载具速度片, 汽车, 赛车, 摩托, 载具), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Cars and vehicles at speed · 汽车与载具速度片

The machine has to stay one machine while the camera does all the work. Lock the vehicle part by part, then fill the runtime with a numbered cut list that moves the camera every second.

This Skill carries one prompt structure distilled from 10 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Motorcycle and car commercials, mountain-road speed runs, chase and stunt sequences, and vehicle transformation clips.
- 中文：摩托和汽车广告、山路疾驰、追逐与特技段落，还有车辆变形类的片子。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line: runtime, aspect ratio, frame rate, and the exact number of cuts
   2. Vehicle lock: model or type, colour, and the moving parts that have to behave
   3. Rider or driver lock: build, gear, helmet, closed with one consistency sentence
   4. Road and weather: the surface, what lines both sides of it, the light
   5. A ratio line stating how much of the film is camera motion and how much is scenery
   6. The numbered cut list, one line per second, each naming a camera position and what streaks past
   7. Tail: visual style, then a negative list of the ways a vehicle specifically breaks
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Describe the vehicle by its parts, not by its badge. The Karakoram commercial names `realistic suspension movement, wheel rotation, chain movement, engine vibration`, then requires the proportions to hold for the whole clip.
- Declare the cut count before writing the list. The mountain-road motorcycle case opens with `exactly 16 distinct cuts, total runtime ≈ 16–17 seconds` and then runs CUT 01 through CUT 16, one second each.
- Put the speed in the camera position and in what gets thrown past it. The same case writes `camera drops even lower, almost road-level` and `grass and fence posts racing past`.
- State a ratio at the top and obey it below. The mountain-road case declares `90 % pure kinetic camera motion and 10 % environmental beauty`, and not one of its sixteen cuts stops to admire the view.
- Write a negative list of vehicle-specific failures. Karakoram excludes `no duplicated motorcycle components, no unrealistic wheel geometry, no floating motorcycle`, and the motorcycle-to-dragon case adds that the two must clearly be the same entity.

## Pitfalls

- Naming the vehicle and the road and leaving the rest to the model. Colour and stance then drift every cut; the mountain-road case writes `Preserve the exact bike color, rider silhouette, road markings`.
- Putting two camera positions inside one cut. A second only holds one position, and asking for more makes the model cut in the middle of the shot.
- Writing a transformation as an edit. The motorcycle-to-dragon case demands `No cuts or jumps` and spells the change out piece by piece: wheels become clawed limbs, frame expands into an armoured body.
- Holding a macro shot on the badge or the instrument cluster. Generated lettering comes out wrong; aim the close-ups at tyre contact, suspension compression and the exhaust instead.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：汽车与载具速度片

机器从头到尾得是同一台机器，出力的是镜头。先把车按部件锁住，再用编号分镜表把时长排满，每一秒换一个机位。

**结构:**

1. 开场一句：时长、画幅、帧率，以及总共多少个镜头
2. 车辆锁定：车型、颜色，以及那些必须动对的部件
3. 骑手或司机锁定：体型、装备、头盔，收一句一致性
4. 路面和天气：铺装、路两边是什么、光线
5. 一句配比，说明这条片子多少是镜头运动、多少是风景
6. 编号分镜表，一秒一条，每条点名机位和被甩过去的东西
7. 收尾：视觉风格，再加一份专门针对车会怎么坏的负面清单

**要点:**

- 车按部件写，不靠车标。Karakoram 那条广告点名 `realistic suspension movement, wheel rotation, chain movement, engine vibration`，再要求整条保持比例一致。
- 先声明总镜头数，再写表。山路摩托那条开头写 `exactly 16 distinct cuts, total runtime ≈ 16–17 seconds`，后面 CUT 01 到 CUT 16 一秒一条。
- 速度写在机位和被甩过去的东西上。同一条里写 `camera drops even lower, almost road-level`，然后写 `grass and fence posts racing past`。
- 开头给一句配比，下面照着执行。山路那条声明 `90 % pure kinetic camera motion and 10 % environmental beauty`，于是十六个镜头没有一个停下来看风景。
- 负面清单要点名车会怎么坏。Karakoram 那条排除 `no duplicated motorcycle components, no unrealistic wheel geometry, no floating motorcycle`，摩托变龙那条另外要求变形前后必须明确是同一个实体。

**常见坑:**

- 只写车名和路，剩下交给模型。颜色和姿态会一镜一变，山路那条专门写 `Preserve the exact bike color, rider silhouette, road markings`。
- 一个镜头里写两个机位。一秒只装得下一个机位，写多了模型会在镜头中间自己切一刀。
- 把变形写成剪辑切换。摩托变龙那条要求 `No cuts or jumps`，并把轮子变爪肢、车架撑成装甲躯干逐件写出来。
- 特写停在车标或者仪表盘文字上。生成出来的字必歪，特写改打轮胎接地、悬挂压缩和排气这些结构件。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a vehicle speed clip. [The vehicle is a white dual-sport motorcycle on a foggy gravel mountain road at dawn.] [The rider is a young man in a worn leather jacket, full-face helmet on the whole time.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条载具速度短片，【车是一台白色越野摩托，路况是清晨起雾的碎石山路】，【骑手是一个穿旧皮衣的男生，全程戴全盔】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
