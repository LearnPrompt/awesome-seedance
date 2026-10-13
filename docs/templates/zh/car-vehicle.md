[English](../en/car-vehicle.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 💥 汽车与载具速度片

> 机器从头到尾得是同一台机器，出力的是镜头。先把车按部件锁住，再用编号分镜表把时长排满，每一秒换一个机位。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/ruzainameer-seedance-ai-e6073ec318f1?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/media/poster/ruzainameer-seedance-ai-e6073ec318f1.jpg" width="200" alt="Seedance 2.5 1080P 三十秒超写实奇幻大片"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/just-sharon7-seedance-ai-f5af358d1f88?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/d2b34cc66de6.jpg" width="200" alt="摩托车疾驰山间公路"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/karakoram-motorcycle-commercial?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/fe0b785db335.jpg" width="200" alt="Karakoram Motorcycle Commercial"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/missdelulu9-seedance-ai-02009f1f7daf?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/4da7c433c3b6.jpg" width="200" alt="第一视角凌空组装黑色兰博基尼"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条载具速度短片，【车是一台白色越野摩托，路况是清晨起雾的碎石山路】，【骑手是一个穿旧皮衣的男生，全程戴全盔】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 汽车与载具速度片

机器从头到尾得是同一台机器，出力的是镜头。先把车按部件锁住，再用编号分镜表把时长排满，每一秒换一个机位。

**适用场景:** 摩托和汽车广告、山路疾驰、追逐与特技段落，还有车辆变形类的片子。

**要点:**

- 车按部件写，不靠车标。Karakoram 那条广告点名 `realistic suspension movement, wheel rotation, chain movement, engine vibration`，再要求整条保持比例一致。
- 先声明总镜头数，再写表。山路摩托那条开头写 `exactly 16 distinct cuts, total runtime ≈ 16–17 seconds`，后面 CUT 01 到 CUT 16 一秒一条。
- 速度写在机位和被甩过去的东西上。同一条里写 `camera drops even lower, almost road-level`，然后写 `grass and fence posts racing past`。
- 开头给一句配比，下面照着执行。山路那条声明 `90 % pure kinetic camera motion and 10 % environmental beauty`，于是十六个镜头没有一个停下来看风景。
- 负面清单要点名车会怎么坏。Karakoram 那条排除 `no duplicated motorcycle components, no unrealistic wheel geometry, no floating motorcycle`，摩托变龙那条另外要求变形前后必须明确是同一个实体。

**示例:** [#1](https://goodcase.ai/cases/ruzainameer-seedance-ai-e6073ec318f1) [#2](https://goodcase.ai/cases/just-sharon7-seedance-ai-f5af358d1f88) [#3](https://goodcase.ai/cases/karakoram-motorcycle-commercial) [#4](https://goodcase.ai/cases/missdelulu9-seedance-ai-02009f1f7daf)

**结构:**

1. 开场一句：时长、画幅、帧率，以及总共多少个镜头
2. 车辆锁定：车型、颜色，以及那些必须动对的部件
3. 骑手或司机锁定：体型、装备、头盔，收一句一致性
4. 路面和天气：铺装、路两边是什么、光线
5. 一句配比，说明这条片子多少是镜头运动、多少是风景
6. 编号分镜表，一秒一条，每条点名机位和被甩过去的东西
7. 收尾：视觉风格，再加一份专门针对车会怎么坏的负面清单

**常见坑:**

- 只写车名和路，剩下交给模型。颜色和姿态会一镜一变，山路那条专门写 `Preserve the exact bike color, rider silhouette, road markings`。
- 一个镜头里写两个机位。一秒只装得下一个机位，写多了模型会在镜头中间自己切一刀。
- 把变形写成剪辑切换。摩托变龙那条要求 `No cuts or jumps`，并把轮子变爪肢、车架撑成装甲躯干逐件写出来。
- 特写停在车标或者仪表盘文字上。生成出来的字必歪，特写改打轮胎接地、悬挂压缩和排气这些结构件。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 17 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-cinematic-photorealistic-sci-fi-action-sequence-moody-desaturated-color-grade-edfd133b78ea?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/1917351d85cd.jpg" width="160" alt="未来公路上的机车与超跑追逐"></a> | [未来公路上的机车与超跑追逐](https://goodcase.ai/cases/seedance-cinematic-photorealistic-sci-fi-action-sequence-moody-desaturated-color-grade-edfd133b78ea?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 91 |
| <a href="https://goodcase.ai/cases/seedance-police-chase-621254905333?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/dcc163d4e56d.jpg" width="160" alt="都市警车追逐与爆炸逃亡"></a> | [都市警车追逐与爆炸逃亡](https://goodcase.ai/cases/seedance-police-chase-621254905333?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 89 |
| <a href="https://goodcase.ai/cases/ruzainameer-seedance-ai-e6073ec318f1?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/ruzainameer-seedance-ai-e6073ec318f1.jpg" width="160" alt="Seedance 2.5 1080P 三十秒超写实奇幻大片"></a> | [Seedance 2.5 1080P 三十秒超写实奇幻大片](https://goodcase.ai/cases/ruzainameer-seedance-ai-e6073ec318f1?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 80 |
| <a href="https://goodcase.ai/cases/just-sharon7-seedance-ai-f5af358d1f88?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/d2b34cc66de6.jpg" width="160" alt="摩托车疾驰山间公路"></a> | [摩托车疾驰山间公路](https://goodcase.ai/cases/just-sharon7-seedance-ai-f5af358d1f88?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 76 |
| <a href="https://goodcase.ai/cases/seedance-2-5-characters-hero-exact-character-from-same-face-hair-build-clothing-i-4fc9b091c2ab?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/6170bf3f7274.jpg" width="160" alt="夕阳下黑色轿车的追逐与枪战"></a> | [夕阳下黑色轿车的追逐与枪战](https://goodcase.ai/cases/seedance-2-5-characters-hero-exact-character-from-same-face-hair-build-clothing-i-4fc9b091c2ab?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 70 |
| <a href="https://goodcase.ai/cases/zyrellix-seedance-ai-b7efa04a2c13?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/zyrellix-seedance-ai-b7efa04a2c13.jpg" width="160" alt="末日沙漠战车空中激战"></a> | [末日沙漠战车空中激战](https://goodcase.ai/cases/zyrellix-seedance-ai-b7efa04a2c13?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 69 |
| <a href="https://goodcase.ai/cases/seedance-cinematic-short-film-46-sec-16-9-photorealistic-hollywood-sci-fi-action-dys-dae506414152?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/b48c78c785ba.jpg" width="160" alt="末日公路女骑士逃离外星战舰"></a> | [末日公路女骑士逃离外星战舰](https://goodcase.ai/cases/seedance-cinematic-short-film-46-sec-16-9-photorealistic-hollywood-sci-fi-action-dys-dae506414152?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 57 |
| <a href="https://goodcase.ai/cases/seedance-2-5-a-silver-sports-car-driving-down-a-city-highway-smoothly-transforms-into-a-gian-4c149ba1934a?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/cc90787c2cf9.jpg" width="160" alt="跑车、摩托、坦克与战机变身机甲"></a> | [跑车、摩托、坦克与战机变身机甲](https://goodcase.ai/cases/seedance-2-5-a-silver-sports-car-driving-down-a-city-highway-smoothly-transforms-into-a-gian-4c149ba1934a?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 50 |
| <a href="https://goodcase.ai/cases/seedance-a-high-octane-cinematic-action-sequence-on-an-urban-highway-in-tokyo-photoreali-e9963e75b76a?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/17d1ccde38df.jpg" width="160" alt="东京高速粉色喷气拖拉机狂飙"></a> | [东京高速粉色喷气拖拉机狂飙](https://goodcase.ai/cases/seedance-a-high-octane-cinematic-action-sequence-on-an-urban-highway-in-tokyo-photoreali-e9963e75b76a?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 40 |
| <a href="https://goodcase.ai/cases/missdelulu9-seedance-ai-02009f1f7daf?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/4da7c433c3b6.jpg" width="160" alt="第一视角凌空组装黑色兰博基尼"></a> | [第一视角凌空组装黑色兰博基尼](https://goodcase.ai/cases/missdelulu9-seedance-ai-02009f1f7daf?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 37 |
| <a href="https://goodcase.ai/cases/seedance-create-a-hyper-realistic-cinematic-action-sequence-on-a-bright-urban-road-in-da-7d6b917b4327?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/1b3a14cc3b8b.jpg" width="160" alt="未来载具变形垃圾车躲过追捕"></a> | [未来载具变形垃圾车躲过追捕](https://goodcase.ai/cases/seedance-create-a-hyper-realistic-cinematic-action-sequence-on-a-bright-urban-road-in-da-7d6b917b4327?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 36 |
| <a href="https://goodcase.ai/cases/karakoram-motorcycle-commercial?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/fe0b785db335.jpg" width="160" alt="Karakoram Motorcycle Commercial"></a> | [Karakoram Motorcycle Commercial](https://goodcase.ai/cases/karakoram-motorcycle-commercial?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 29 |

其余 5 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) 上。

---

[← 上一个：时间冻结与倒放奇观](./time-freeze-rewind.md) · [下一个：奇幻科幻大场面 →](./epic-fantasy-scifi.md)
