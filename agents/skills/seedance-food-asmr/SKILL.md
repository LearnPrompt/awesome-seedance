---
name: seedance-food-asmr
description: "Cooking close-ups, mukbang and eating vlogs. They work when every beat shows one visible change in the food and one matching sound, and the dish stays the same dish from first frame to last. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Food close-ups and eating ASMR; 中文触发词: 美食特写与吃播 ASMR, 美食, 吃播, ASMR, 烹饪), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Food close-ups and eating ASMR · 美食特写与吃播 ASMR

Cooking close-ups, mukbang and eating vlogs. They work when every beat shows one visible change in the food and one matching sound, and the dish stays the same dish from first frame to last.

This Skill carries one prompt structure distilled from 6 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Step-by-step cooking clips, glossy food ads with juice and steam, and handheld eating vlogs or spicy challenges where a person reacts to the food.
- 中文：一步一步的做菜短片、拉丝爆汁冒热气的美食广告，还有手持吃播、辣味挑战这种人对着食物出反应的片子。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line: duration, look (anime film, glossy commercial or handheld vlog) and the exact dish
   2. Style and light paragraph: macro close-ups, shallow depth of field, steam, warm light; for vlogs, the camera device and its flaws
   3. If a person is in it: identity lock, outfit and the room or street
   4. Timeline by step, raw ingredient to finished dish, one action and one texture change per segment
   5. Hero ending: the finished dish alone, slow push-in or arc, steam rising
   6. Audio: music style and tempo, then the cooking or eating sounds listed in the order they happen
   7. Negative tail: no text, UI or logos, this dish only, food and hands and utensils consistent
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Cut the cooking into short named steps with timecodes. The katsudon case runs twelve segments of about two to three seconds each, titled `Prepare Pork`, `Bread the Pork`, `Fry`, `Slice` and so on, each with one action.
- Write the food's physical state, not just its name. The katsudon egg is set at the edges while the center `remains glossy, slightly runny, and trembling`, and the cut crust `cracks naturally, revealing juicy white pork`; the shengjianbao case has broth falling `in long glossy strands` and bottoms crisping into `golden lace-like crusts`.
- List the sounds in the order of the actions. The katsudon audio block asks to `Synchronize realistic ASMR cooking sounds` and names mallet, knife, sizzle, bubbling dashi, chopsticks and a ceramic clink, over city-pop at 110 to 120 BPM, ending on one wind-chime tone.
- Break eating into small steps and put the line after them. In the oden vlog she `blows on it gently, then takes a bite`, chews, looks at the camera, then says a short line; the spicy challenge lines up bowls from mildest to hottest so each bowl moves her reaction one step.
- Fence off the dish and the screen. The katsudon negative block says `No unrelated ingredients or dishes. Katsudon only` and bans subtitles, UI, logos and text overlays, then asks to keep food, hands and utensils consistent.

## Pitfalls

- Hands and utensils warp in close-up, chopsticks multiply or the knife bends. Give each beat one utensil, keep the macro on the food, and add a line that hands and utensils stay consistent.
- The dish drifts halfway through, ingredients swap or a new dish appears. Name the dish, list its ingredients, and exclude unrelated food the way the katsudon case does.
- Too many shots squeezed into one paragraph. The shengjianbao case packs six shots into 15 seconds with no timecodes and jumps from eating back to cooking, so the model picks its own order; give each step at least two seconds and a timecode.
- Talking with a full mouth breaks the lip sync and the chewing. Let her bite, chew and swallow first, then say the line, the way the oden vlog spaces each bite and sentence.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：美食特写与吃播 ASMR

烹饪特写、吃播和吃东西的 vlog。成立靠的是每一拍都让食物发生一个看得见的变化，再配上对应的一个声音，而且这道菜从头到尾都是同一道菜。

**结构:**

1. 开头一句：时长、画风（动画电影、油亮广告或手持 vlog）、具体是哪道菜
2. 风格与光线段：微距特写、浅景深、蒸汽、暖光；vlog 就写拍摄设备和它的毛病
3. 有人出镜时：人物锁定、服装、房间或街道
4. 按步骤写时间轴，从生食材到成品，每段一个动作加一个质地变化
5. 英雄收尾：成品单独入画，缓慢推近或环绕，热气往上走
6. 音频：音乐风格和速度，再按发生顺序列出做菜或吃东西的声音
7. 排除收尾：不要文字、界面、logo，只有这一道菜，食物、手、餐具前后一致

**要点:**

- 把做菜切成带时间码的短步骤，每步起个名字。猪排盖饭那条一共十二段，每段两到三秒，标题是 `Prepare Pork`、`Bread the Pork`、`Fry`、`Slice` 这样，一段只做一件事。
- 写食物的物理状态，光写菜名没用。猪排盖饭里的蛋边缘凝固，中间 `remains glossy, slightly runny, and trembling`，切开的外壳 `cracks naturally, revealing juicy white pork`；生煎包那条写汤汁 `in long glossy strands` 往下淌，底部煎成 `golden lace-like crusts`。
- 声音按动作的先后顺序一个个列出来。猪排盖饭的音频段写了 `Synchronize realistic ASMR cooking sounds`，点名拍肉锤、切刀、油炸滋滋声、高汤冒泡、筷子、瓷碗轻碰，底下垫 110 到 120 BPM 的 city-pop，最后用一声风铃收。
- 吃的动作拆成小步，台词放在后面。关东煮那条她 `blows on it gently, then takes a bite`，嚼完看镜头，再说一句短话；辣味挑战把碗从最不辣排到最辣，每换一碗她的反应往上走一格。
- 把菜和画面都圈住。猪排盖饭的排除段写了 `No unrelated ingredients or dishes. Katsudon only`，还禁掉字幕、界面、logo 和叠字，最后要求食物、手、餐具全程一致。

**常见坑:**

- 特写里手和餐具变形，筷子多出一根，刀弯了。每一拍只给一件餐具，微距对准食物，再补一句手和餐具前后一致。
- 菜做到一半变了，食材换了或者冒出另一道菜。点名菜名、列出食材，再像猪排盖饭那条一样把无关食物排除掉。
- 一段话里塞太多镜头。生煎包那条 15 秒塞了六个镜头，没有时间码，还从吃跳回做，顺序只能让模型自己排；每一步至少给两秒，并标上时间码。
- 嘴里有东西还在说话，口型和咀嚼一起崩。先让她咬、嚼、咽下去，再说台词，像关东煮那条那样一口一句隔开。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a short food close-up video. [The dish is a bowl of tomato beef brisket noodles, filmed from slicing the tomatoes to serving.] [End on a steaming close-up of the finished bowl, with the sound of it bubbling on the stove.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条美食特写短视频，【做的是一碗番茄牛腩面，从切番茄一直拍到出锅】，【最后停在热气腾腾的成品特写上，配咕嘟咕嘟的炖煮声】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
