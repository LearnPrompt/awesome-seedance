[English](../en/fashion-lookbook.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🛒 时尚 lookbook 与人像写真片

> 一个人、一身造型、几个地点。一段从头写到脚的外观锁撑起整条片子，每个场景只给一个地点、一个动作、一种光。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear"><img src="https://media.goodcase.ai/media/poster/youmind-paris-fashion-campaign-streetwear.jpg" width="200" alt="电影感巴黎时尚广告大片：五镜头街拍"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/aiwithnatalia-seedance-ai-12c56e79550f"><img src="https://media.goodcase.ai/media/poster/aiwithnatalia-seedance-ai-12c56e79550f.jpg" width="200" alt="东京街头粉色手袋时尚大片"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-4b6f8c8c977a"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-4b6f8c8c977a.jpg" width="200" alt="Seedance 细条纹西装的职场女性气场短片"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9"><img src="https://media.goodcase.ai/media/poster/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9.jpg" width="200" alt="溪畔西瓜与向日葵的夏日漫步"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条时尚 lookbook 短片，【模特是一个短发的亚洲女生，走在秋天的上海梧桐街区】，【主推单品是一件燕麦色长风衣配棕色皮质托特包】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 时尚 lookbook 与人像写真片

一个人、一身造型、几个地点。一段从头写到脚的外观锁撑起整条片子，每个场景只给一个地点、一个动作、一种光。

**适用场景:** 时尚广告大片、街拍 lookbook、换装短片，以及人像和美妆类写真片，有效载荷就是一个人在几个场景里的样子。

**要点:**

- 开头一段把造型从头写到脚，再写明它全程跟着走。巴黎街拍那条一路列到 `black pointed-toe heels, babypink smooth leather hobo shoulder bag`，末尾补一句 `hanging naturally on arm throughout all scenes`。
- 每个场景只给一个景别、一个地点、一个动作。巴黎那条的小标题是 `Scene 5 · 3 sec Medium close-up`，这一段里唯一的动作是 `slowly pushes sunglasses up with one finger`。
- 主推单品和人分开锁。东京手袋那条先写 `One consistent young female fashion model throughout`，再单独一行锁住 `one identical glossy pastel-pink Prada handbag`。
- 人像写真式的就用一个长句把动作串起来，不标镜号。溪畔那条从 `holding a juicy red watermelon slice near her face` 一路接到她在木门廊上回头对镜头笑。
- 照片质感靠器材加排除清单换。巴黎那条点名 `shot on Canon EOS R5 35mm f/1.4, Kodak Portra 400 film tone`，再排掉 `plastic skin, robotic movement, stiff poses`。

**示例:** [#1](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear) [#2](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-12c56e79550f) [#3](https://goodcase.ai/cases/noorlewisx-seedance-ai-4b6f8c8c977a) [#4](https://goodcase.ai/cases/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9)

**结构:**

1. 开头参数：画幅、准确时长、片种写成时尚广告大片、Vogue editorial 或电影感写真，再交代剪辑节奏
2. 人物与造型锁：脸、发型、妆、首饰，然后每一件衣服鞋包点名，补一句每个场景都一样
3. 主推单品锁：材质、颜色、五金、怎么拿在身上
4. 场景链：每段标出秒数或场景号，写景别、地点、一个动作和光线
5. 要上屏文字的，就在对应场景下面单起一行短句
6. 收尾英雄镜头：整体慢下来，镜头绕一圈或推到单品上，最后上摇到脸
7. 视觉方向与排除清单：镜头、胶片色调、颗粒，排掉塑料皮肤、僵硬姿势和水印

**常见坑:**

- 造型只用一句好看的衣服带过。场景一换衣服就变，每件单品都点名，并补一句每个场景都一样。
- 三秒的一段里塞三个动作。一个场景一个动作，巴黎那条每格三秒只做一件事。
- 把整段文案交给模型上屏。东京那条上屏的只有 `TOKYO`、`MADE TO BE SEEN` 这种一两行短句，长段文字排出来会糊，留到后期加。
- 全程慢动作加转场特效。东京那条的快剪段写死 `hard cuts synchronized to the beat`，慢只留给最后的英雄镜头。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 13 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear"><img src="https://media.goodcase.ai/media/poster/youmind-paris-fashion-campaign-streetwear.jpg" width="160" alt="电影感巴黎时尚广告大片：五镜头街拍"></a> | [电影感巴黎时尚广告大片：五镜头街拍](https://goodcase.ai/cases/youmind-paris-fashion-campaign-streetwear) | 2.0 | 90 |
| <a href="https://goodcase.ai/cases/seedance-cinematic-fashion-film-still-low-angle-shot-of-a-beautiful-young-woman-with-wa-fac7693b54a0"><img src="https://media.goodcase.ai/cases/9084b0f25038.jpg" width="160" alt="金色雪山上的白衣滑雪女郎"></a> | [金色雪山上的白衣滑雪女郎](https://goodcase.ai/cases/seedance-cinematic-fashion-film-still-low-angle-shot-of-a-beautiful-young-woman-with-wa-fac7693b54a0) | 2.5 | 81 |
| <a href="https://goodcase.ai/cases/aiwithnatalia-seedance-ai-12c56e79550f"><img src="https://media.goodcase.ai/media/poster/aiwithnatalia-seedance-ai-12c56e79550f.jpg" width="160" alt="东京街头粉色手袋时尚大片"></a> | [东京街头粉色手袋时尚大片](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-12c56e79550f) | 2.0 | 79 |
| <a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-4b6f8c8c977a"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-4b6f8c8c977a.jpg" width="160" alt="Seedance 细条纹西装的职场女性气场短片"></a> | [Seedance 细条纹西装的职场女性气场短片](https://goodcase.ai/cases/noorlewisx-seedance-ai-4b6f8c8c977a) | 2.0 | 76 |
| <a href="https://goodcase.ai/cases/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9"><img src="https://media.goodcase.ai/media/poster/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9.jpg" width="160" alt="溪畔西瓜与向日葵的夏日漫步"></a> | [溪畔西瓜与向日葵的夏日漫步](https://goodcase.ai/cases/seedance-a-graceful-young-korean-woman-with-soft-short-wavy-brown-hair-delicate-feature-11d70672ecb9) | 2.0 | 66 |
| <a href="https://goodcase.ai/cases/seedance-a-beautiful-young-east-asian-woman-with-long-straight-black-hair-wearing-a-sof-d4ab346c8461"><img src="https://media.goodcase.ai/media/poster/seedance-a-beautiful-young-east-asian-woman-with-long-straight-black-hair-wearing-a-sof-d4ab346c8461.jpg" width="160" alt="雨日独居女孩的静谧时光"></a> | [雨日独居女孩的静谧时光](https://goodcase.ai/cases/seedance-a-beautiful-young-east-asian-woman-with-long-straight-black-hair-wearing-a-sof-d4ab346c8461) | 2.0 | 64 |
| <a href="https://goodcase.ai/cases/chengzilhy-seedance-ai-a4dce9879ac5"><img src="https://media.goodcase.ai/cases/d8a275aaed82.jpg" width="160" alt="金发女孩被戳脸后撒娇委屈"></a> | [金发女孩被戳脸后撒娇委屈](https://goodcase.ai/cases/chengzilhy-seedance-ai-a4dce9879ac5) | 2.5 | 62 |
| <a href="https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7890280c705d"><img src="https://media.goodcase.ai/media/poster/aiwithnatalia-seedance-ai-7890280c705d.jpg" width="160" alt="红发女孩的唇油抓取挑战"></a> | [红发女孩的唇油抓取挑战](https://goodcase.ai/cases/aiwithnatalia-seedance-ai-7890280c705d) | 2.0 | 61 |
| <a href="https://goodcase.ai/cases/vlog-49dbf66ad64f"><img src="https://media.goodcase.ai/media/poster/vlog-49dbf66ad64f.jpg" width="160" alt="电影感护肤美妆 Vlog"></a> | [电影感护肤美妆 Vlog](https://goodcase.ai/cases/vlog-49dbf66ad64f) | 2.0 | 57 |
| <a href="https://goodcase.ai/cases/missdelulu9-seedance-ai-82f2bf793076"><img src="https://media.goodcase.ai/media/poster/missdelulu9-seedance-ai-82f2bf793076.jpg" width="160" alt="像素衣橱里的秋日森林系换装"></a> | [像素衣橱里的秋日森林系换装](https://goodcase.ai/cases/missdelulu9-seedance-ai-82f2bf793076) | 2.5 | 46 |
| <a href="https://goodcase.ai/cases/johnagi168-seedance-ai-140908f952bd"><img src="https://media.goodcase.ai/cases/c9256a6537c2.jpg" width="160" alt="Seedance 2.5 十二秒连续换装的穿搭博主短片"></a> | [Seedance 2.5 十二秒连续换装的穿搭博主短片](https://goodcase.ai/cases/johnagi168-seedance-ai-140908f952bd) | 2.5 | 26 |
| <a href="https://goodcase.ai/cases/luxury-rooftop-helicopter-party"><img src="https://media.goodcase.ai/media/poster/luxury-rooftop-helicopter-party.jpg" width="160" alt="Luxury Rooftop Helicopter Party"></a> | [Luxury Rooftop Helicopter Party](https://goodcase.ai/cases/luxury-rooftop-helicopter-party) | 2.0 | 25 |

其余 1 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) 上。

---

[← 上一个：流程与变换蒙太奇](./process-transformation-montage.md) · [下一个：对白与表演节拍 →](./dialogue-performance-beats.md)
