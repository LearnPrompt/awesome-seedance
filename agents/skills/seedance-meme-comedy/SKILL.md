---
name: seedance-meme-comedy
description: "A short skit where every beat is laid down to serve one punchline. The joke has to land on something visible, and the absurdity only works when the camera and the physics stay dead serious. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Twist-ending comedy skit; 中文触发词: 反转结尾搞笑短片, 搞笑, 反转, 梗, 沙雕), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Twist-ending comedy skit · 反转结尾搞笑短片

A short skit where every beat is laid down to serve one punchline. The joke has to land on something visible, and the absurdity only works when the camera and the physics stay dead serious.

This Skill carries one prompt structure distilled from 22 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Meme clips, prank and revenge skits, absurd scale gags, family comedy — anything whose payload is one laugh at the end.
- 中文：玩梗片、整蛊和复仇小剧场、荒诞比例梗、家庭喜剧，任何有效载荷就是结尾那一下笑的片子。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Opening line: duration, look (ultra-realistic or photorealistic absurd), the genre named as comedy, and whether there are reference images
   2. Character cards: appearance plus a personality written as an emotional arc, such as playful then shocked and embarrassed
   3. Location: an ordinary low-budget real place, described plainly
   4. Timecoded beats with headings, running from hook to punchline
   5. Spoken lines written into the beat where they are said, one sentence each
   6. Bystander reactions and the closing expression as their own beat
   7. Negative list: no gore, no teleportation, no duplicated people, no subtitles or on-screen text
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Fix where the laugh lands first, then work backwards. The duck wizard case names its sections `Hook`, `The Spell`, `Countdown`, `Twist`, `Reaction`, `Punchline` and puts the payoff in the 26–30 second slot.
- Make the twist a visible object. The whole FIVE MORE MINUTES skit pays off on a close-up of `one black sneaker and one grey sneaker`.
- Keep the camera and the physics straight-faced. The hotel pool case says outright that `The humor comes from the impossible scale and the dead-serious realism`, and shoots it `Recorded like a viral smartphone clip`.
- Give the bystanders their own beat. The subway skit has one passenger laugh first and then the whole carriage; the Turkish ice cream vendor `raises his hands in playful defeat`.
- Write the safety edges of any violence into the body text. The subway skit breaks the glass `with no injury or gore` and bans `regenerating glass` and `teleportation` in the negative list.

## Pitfalls

- Describing the joke with adjectives like funny or hilarious. The model has nothing to act on; replace them with one concrete action or object.
- Firing the twist with no pause before it. FIVE MORE MINUTES holds `one silent second` on the two of them before they both start laughing.
- Asking the model to render end text. The duck wizard case closes on `Never rush a spell` plus emoji, which comes out garbled — leave a clean tail frame and add the text in post.
- Letting a character's mood flip without a written trigger. The subway skit spells out the man's arc as `playful, then shocked and embarrassed` and gives each stage its own on-screen cause.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：反转结尾搞笑短片

所有节拍都为一个笑点服务的短剧。笑点得落在一个看得见的东西上，荒诞设定要配一本正经的相机和物理才立得住。

**结构:**

1. 开场一句：时长、画风（ultra-realistic 或 photorealistic absurd）、片种写明是 comedy、有没有参考图
2. 角色卡：外貌加一句性格，性格写成情绪弧，比如 playful, then shocked and embarrassed
3. 场景：一个普通的、便宜的真实地方，平铺直叙写
4. 带小标题的时间码分段，从 hook 一路推到 punchline
5. 台词写进它被说出的那一拍，每句一句话
6. 旁人反应和收尾表情单独占一拍
7. 负面清单：禁血腥、禁瞬移、禁复制人、禁字幕和上屏文字

**要点:**

- 先钉死笑点落在哪一秒，再往回铺。女巫变鸭那条直接把段落命名成 `Hook`、`The Spell`、`Countdown`、`Twist`、`Reaction`、`Punchline`，兑现放在 26–30 秒那一槽。
- 反转得是一个看得见的东西。FIVE MORE MINUTES 整条片子押在脚部特写 `one black sneaker and one grey sneaker` 上。
- 相机和物理要一本正经。酒店泳池那条自己写明 `The humor comes from the impossible scale and the dead-serious realism`，镜头是 `Recorded like a viral smartphone clip`。
- 旁人的反应单独给一拍。地铁那条先让一个乘客笑，再让全车笑；土耳其冰淇淋那条让摊主 `raises his hands in playful defeat`。
- 暴力桥段的安全边界写进正文。地铁那条玻璃碎了但 `with no injury or gore`，负面清单里又禁掉 `regenerating glass` 和 `teleportation`。

**常见坑:**

- 用 funny、hilarious 这类形容词描述笑点。模型没东西可演，要换成一个具体动作或物件。
- 反转前不留停顿就直接炸。FIVE MORE MINUTES 在两个人笑出来之前先停了 `one silent second`。
- 让模型画结尾文字。女巫变鸭那条收在 `Never rush a spell` 加表情符号，生成出来大概率是乱码，应该留干净收尾画面，文字后期加。
- 角色情绪没有写明触发就翻转。地铁那条把男生的弧线写成 `playful, then shocked and embarrassed`，每一段都在画面里给了起因。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a short comedy clip with a twist ending. [Setup: a man quietly stuffing food into his bag at a buffet.] [Twist: he opens the bag at home and the restaurant owner's cat climbs out.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条有反转的搞笑短片，【设定是一个人在自助餐厅偷偷往包里塞食物】，【反转是他回家打开包，钻出来一只餐厅老板的猫】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
