[English](../en/horror-suspense.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🎭 恐怖悬疑短片

> 每一镜都带自己的时间码，身上只发生一个看得见的变化。吓人的地方在于这些变化一环扣一环：一个眼神、浮起的血管、一口咬下去、下一个人。结尾把门关上，事情不了结。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e"><img src="https://media.goodcase.ai/media/poster/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e.jpg" width="200" alt="夜行卧铺列车感染爆发"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-3b1796c66ab4"><img src="https://media.goodcase.ai/media/poster/case-3b1796c66ab4.jpg" width="200" alt="丧尸列车爆发"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-b529ffbdfd9a"><img src="https://media.goodcase.ai/cases/eaeddab55dea.jpg" width="200" alt="末日韩式天台恐怖片"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-30-sec-cinematic-korean-folk-horror-ritual-78323fedb479"><img src="https://media.goodcase.ai/cases/52e979f23a9f.jpg" width="200" alt="韩屋烛影驱邪仪式"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条恐怖悬疑短片，【场景是深夜的地下车库，一个女生在找自己的车】，【第一个出事的是那位保安，我把他的参考图发给你】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 恐怖悬疑短片

每一镜都带自己的时间码，身上只发生一个看得见的变化。吓人的地方在于这些变化一环扣一环：一个眼神、浮起的血管、一口咬下去、下一个人。结尾把门关上，事情不了结。

**适用场景:** 感染爆发、附身、走廊追逐、驱邪仪式，任何靠一具身体按秒变化来吓人的片子。

**要点:**

- 每一镜给时间码，而且只放一个变化。卧铺列车那条把 26 个镜头排进 30 秒，Shot 2 只有 `dark veins emerging beneath the skin`，Shot 3 只有 `Her eyes cloud milky white`。
- 第一镜就把脸锁死，别等事情发生。卧铺列车开头写 `<<<image_1>>>, face and outfit matching reference`；丧尸列车那条写 `Character A, matching reference face/outfit`；韩屋仪式那条写 `Keep the Word character's face and outfit consistent throughout`。
- 感染要传下去，第二轮把时间压短。丧尸列车那条第一个人从出症状到变完用了十二秒，被他咬的人只用七秒，就是 Shot 13 到 16。
- 恐怖的落点放在别人的反应上。卧铺列车切到 `A sleeping passenger stirs as another blood drop lands on his forehead`，天台那条是 `friends fall silent, chairs scrape back`。
- 结尾不给解决。卧铺列车收在夜行的列车外景，窗里还在乱；韩屋仪式那条收在 `One intact talisman emits faint dark smoke`。

**示例:** [#1](https://goodcase.ai/cases/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e) [#2](https://goodcase.ai/cases/case-3b1796c66ab4) [#3](https://goodcase.ai/cases/case-b529ffbdfd9a) [#4](https://goodcase.ai/cases/seedance-30-sec-cinematic-korean-folk-horror-ritual-78323fedb479)

**结构:**

1. 开头：时长、片种，以及第一个要变的人的参考图锁定
2. Shot 1 带时间码：零号病人坐在普通的座位或铺位上，身上已经有一个症状
3. 递进镜头，每一镜只加一个看得见的变化：血管、白眼、脖子僵硬地偏过去
4. 触发镜：袭击本身，写成慢动作加冲击
5. 传染：被咬的人走同一套递进，时间压得更短
6. 人群恐慌和封门：门、行李、从玻璃后抓过来的手
7. 收尾镜：封住的门还在震，或者一个外部大景，什么都没解决

**常见坑:**

- 一镜里塞完整个变身。拆成四五镜：白眼、血管爬开、抽搐、非人的嘶吼、头猛地甩回来。
- 靠血浆量买恐怖。高热度那几条最狠的镜头是一滴血落在额头上，用极近景加慢动作拖住。
- 中段塌成一团乱打，看不清谁咬了谁。连混乱镜头也要点名主语和对象，像 `The infected turns and lunges at nearby passengers`。
- 把一致性锁放到结尾的风格段里。放那么后面脸早就飘了，锁定句要写在 Shot 1，而且感染之后仍然得是同一张脸。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 23 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-cinematic-sci-fi-horror-action-short-film-set-in-a-research-laboratory-opens-w-9661cd7bd95d"><img src="https://media.goodcase.ai/cases/5929c428cd08.jpg" width="160" alt="实验室寄生体感染突袭"></a> | [实验室寄生体感染突袭](https://goodcase.ai/cases/seedance-cinematic-sci-fi-horror-action-short-film-set-in-a-research-laboratory-opens-w-9661cd7bd95d) | 2.5 | 96 |
| <a href="https://goodcase.ai/cases/seedance-create-a-photorealistic-live-action-horror-short-film-set-inside-a-busy-modern-52b17b0d18ff"><img src="https://media.goodcase.ai/cases/be466ebf5501.jpg" width="160" alt="商场丧尸爆发中的保安与幸存者"></a> | [商场丧尸爆发中的保安与幸存者](https://goodcase.ai/cases/seedance-create-a-photorealistic-live-action-horror-short-film-set-inside-a-busy-modern-52b17b0d18ff) | 2.5 | 95 |
| <a href="https://goodcase.ai/cases/seedance-cinematic-horror-action-short-film-set-aboard-a-japanese-highway-bus-during-the-5bc85c0e13d8"><img src="https://media.goodcase.ai/cases/f5434503545d.jpg" width="160" alt="日本公路巴士感染者突袭"></a> | [日本公路巴士感染者突袭](https://goodcase.ai/cases/seedance-cinematic-horror-action-short-film-set-aboard-a-japanese-highway-bus-during-the-5bc85c0e13d8) | 2.5 | 93 |
| <a href="https://goodcase.ai/cases/seedance-create-a-short-ultra-realistic-japanese-high-school-horror-action-sequence-fea-5cf4a965e81a"><img src="https://media.goodcase.ai/cases/bd58f9078734.jpg" width="160" alt="日本教室里的丧尸突袭"></a> | [日本教室里的丧尸突袭](https://goodcase.ai/cases/seedance-create-a-short-ultra-realistic-japanese-high-school-horror-action-sequence-fea-5cf4a965e81a) | 2.5 | 85 |
| <a href="https://goodcase.ai/cases/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e"><img src="https://media.goodcase.ai/media/poster/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e.jpg" width="160" alt="夜行卧铺列车感染爆发"></a> | [夜行卧铺列车感染爆发](https://goodcase.ai/cases/seedance-shot-1-0-0-1-2s-image-1-face-and-outfit-matching-reference-lying-in-b6d9ef0e370e) | 2.5 | 84 |
| <a href="https://goodcase.ai/cases/seedance-preserve-the-exact-face-hairstyle-golden-cream-dress-tattoos-necklace-and-8ff953bfc56e"><img src="https://media.goodcase.ai/cases/86a341e46f5f.jpg" width="160" alt="夜行卧铺列车感染惊魂"></a> | [夜行卧铺列车感染惊魂](https://goodcase.ai/cases/seedance-preserve-the-exact-face-hairstyle-golden-cream-dress-tattoos-necklace-and-8ff953bfc56e) | 2.5 | 80 |
| <a href="https://goodcase.ai/cases/seedance-create-a-photorealistic-zombie-horror-sequence-inside-a-high-security-research-11e5b4743459"><img src="https://media.goodcase.ai/cases/a0d17a9bf535.jpg" width="160" alt="实验室寄生感染危机"></a> | [实验室寄生感染危机](https://goodcase.ai/cases/seedance-create-a-photorealistic-zombie-horror-sequence-inside-a-high-security-research-11e5b4743459) | 2.5 | 76 |
| <a href="https://goodcase.ai/cases/case-3b1796c66ab4"><img src="https://media.goodcase.ai/media/poster/case-3b1796c66ab4.jpg" width="160" alt="丧尸列车爆发"></a> | [丧尸列车爆发](https://goodcase.ai/cases/case-3b1796c66ab4) | 2.5 | 75 |
| <a href="https://goodcase.ai/cases/case-b529ffbdfd9a"><img src="https://media.goodcase.ai/cases/eaeddab55dea.jpg" width="160" alt="末日韩式天台恐怖片"></a> | [末日韩式天台恐怖片](https://goodcase.ai/cases/case-b529ffbdfd9a) | 2.0 | 74 |
| <a href="https://goodcase.ai/cases/doctorwasif-seedance-ai-117496b404a6"><img src="https://media.goodcase.ai/cases/068a44904e52.jpg" width="160" alt="列车车厢丧尸感染爆发"></a> | [列车车厢丧尸感染爆发](https://goodcase.ai/cases/doctorwasif-seedance-ai-117496b404a6) | 2.5 | 69 |
| <a href="https://goodcase.ai/cases/seedance-30-sec-cinematic-korean-folk-horror-ritual-78323fedb479"><img src="https://media.goodcase.ai/cases/52e979f23a9f.jpg" width="160" alt="韩屋烛影驱邪仪式"></a> | [韩屋烛影驱邪仪式](https://goodcase.ai/cases/seedance-30-sec-cinematic-korean-folk-horror-ritual-78323fedb479) | 2.5 | 68 |
| <a href="https://goodcase.ai/cases/seedance-create-an-ultra-realistic-japanese-high-school-horror-action-sequence-following-b14f705bc895"><img src="https://media.goodcase.ai/cases/a6d7aa30e499.jpg" width="160" alt="日本高中感染者围困逃生"></a> | [日本高中感染者围困逃生](https://goodcase.ai/cases/seedance-create-an-ultra-realistic-japanese-high-school-horror-action-sequence-following-b14f705bc895) | 2.5 | 67 |

其余 11 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) 上。

---

[← 上一个：反转结尾搞笑短片](./meme-comedy.md) · [下一个：游戏实机录屏与直播叠层 →](./game-ui-livestream.md)
