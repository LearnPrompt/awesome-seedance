---
name: seedance-horror-suspense
description: "Every shot carries its own timecode and shows one visible change on a body. The dread comes from the chain — a look, veins, a bite, the next person — and the ending seals a door without settling anything. Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip (Horror and suspense; 中文触发词: 恐怖悬疑短片, 恐怖, 悬疑, 惊悚), or asks how published cases of this type were prompted. Read references/cases.md before drafting."
---

# Horror and suspense · 恐怖悬疑短片

Every shot carries its own timecode and shows one visible change on a body. The dread comes from the chain — a look, veins, a bite, the next person — and the ending seals a door without settling anything.

This Skill carries one prompt structure distilled from 11 human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`.

## Use when

- Outbreak and possession clips, corridor chases, ritual scenes — anything where the fear comes from a body changing on a clock.
- 中文：感染爆发、附身、走廊追逐、驱邪仪式，任何靠一具身体按秒变化来吓人的片子。

## Workflow

1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.
2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.
3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.
   1. Header: runtime, the genre named, and the reference lock on whoever turns first
   2. Shot 1 with a timecode: patient zero in an ordinary seat or bunk, already carrying one symptom
   3. Escalation shots, each adding exactly one visible change: veins, milky eyes, a stiff head tilt
   4. The trigger shot: the attack itself, written as slow motion with impact
   5. Transmission: the bitten person runs the same escalation on a shorter clock
   6. Crowd panic and the barricade: the door, the luggage, hands clawing through glass
   7. Closing shot: a sealed door still shuddering, or a wide exterior, with nothing resolved
4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.
5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.

## Guidance (from the cases)

- Give every shot a timecode and exactly one change. The sleeper-train case fits 26 shots into 30 seconds, where Shot 2 is only `dark veins emerging beneath the skin` and Shot 3 is only `Her eyes cloud milky white`.
- Lock the face in the very first shot, before anything happens. The sleeper train opens with `<<<image_1>>>, face and outfit matching reference`; the zombie-train case uses `Character A, matching reference face/outfit`; the ritual case uses `Keep the Word character's face and outfit consistent throughout`.
- Pass the infection on and compress the second round. In the zombie-train case the first person takes twelve seconds from symptom to finished turn; the man he bites is done in seven, across Shots 13 to 16.
- Land the scare on somebody else's reaction. The sleeper train cuts to `A sleeping passenger stirs as another blood drop lands on his forehead`, and the rooftop case has `friends fall silent, chairs scrape back`.
- Refuse to resolve it. The sleeper train ends on the train running through the night with chaos in the windows; the Korean ritual case ends on `One intact talisman emits faint dark smoke`.

## Pitfalls

- Cramming a whole transformation into one shot. Split it across four or five: eyes cloud, veins branch, body convulses, inhuman scream, head snaps forward.
- Buying the horror with gore volume. The hardest beats in the top cases are a single blood drop landing on a forehead, held as extreme close-up in slow motion.
- Letting the middle collapse into a brawl where nobody can tell who bit whom. Even the chaos shots name a subject and a target, like `The infected turns and lunges at nearby passengers`.
- Putting the consistency lock at the end with the style notes. By then the face has already drifted; the lock belongs in Shot 1, and the infected version still has to be the same face.

## Language

Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.

## 中文：恐怖悬疑短片

每一镜都带自己的时间码，身上只发生一个看得见的变化。吓人的地方在于这些变化一环扣一环：一个眼神、浮起的血管、一口咬下去、下一个人。结尾把门关上，事情不了结。

**结构:**

1. 开头：时长、片种，以及第一个要变的人的参考图锁定
2. Shot 1 带时间码：零号病人坐在普通的座位或铺位上，身上已经有一个症状
3. 递进镜头，每一镜只加一个看得见的变化：血管、白眼、脖子僵硬地偏过去
4. 触发镜：袭击本身，写成慢动作加冲击
5. 传染：被咬的人走同一套递进，时间压得更短
6. 人群恐慌和封门：门、行李、从玻璃后抓过来的手
7. 收尾镜：封住的门还在震，或者一个外部大景，什么都没解决

**要点:**

- 每一镜给时间码，而且只放一个变化。卧铺列车那条把 26 个镜头排进 30 秒，Shot 2 只有 `dark veins emerging beneath the skin`，Shot 3 只有 `Her eyes cloud milky white`。
- 第一镜就把脸锁死，别等事情发生。卧铺列车开头写 `<<<image_1>>>, face and outfit matching reference`；丧尸列车那条写 `Character A, matching reference face/outfit`；韩屋仪式那条写 `Keep the Word character's face and outfit consistent throughout`。
- 感染要传下去，第二轮把时间压短。丧尸列车那条第一个人从出症状到变完用了十二秒，被他咬的人只用七秒，就是 Shot 13 到 16。
- 恐怖的落点放在别人的反应上。卧铺列车切到 `A sleeping passenger stirs as another blood drop lands on his forehead`，天台那条是 `friends fall silent, chairs scrape back`。
- 结尾不给解决。卧铺列车收在夜行的列车外景，窗里还在乱；韩屋仪式那条收在 `One intact talisman emits faint dark smoke`。

**常见坑:**

- 一镜里塞完整个变身。拆成四五镜：白眼、血管爬开、抽搐、非人的嘶吼、头猛地甩回来。
- 靠血浆量买恐怖。高热度那几条最狠的镜头是一滴血落在额头上，用极近景加慢动作拖住。
- 中段塌成一团乱打，看不清谁咬了谁。连混乱镜头也要点名主语和对象，像 `The infected turns and lunges at nearby passengers`。
- 把一致性锁放到结尾的风格段里。放那么后面脸早就飘了，锁定句要写在 Shot 1，而且感染之后仍然得是同一张脸。

## Copy-ready lead-in / 可复制引导语

For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:

> I want a horror-suspense clip. [The setting is an underground car park late at night, a young woman looking for her car.] [The first to turn is the security guard; I am sending you his reference photo.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:
>
> 我要做一条恐怖悬疑短片，【场景是深夜的地下车库，一个女生在找自己的车】，【第一个出事的是那位保安，我把他的参考图发给你】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

## Notes

- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.
- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.
- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).
