[English](../en/3d-cartoon.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🎨 3D 卡通角色短片

> 一个拟人小角色撑起整条片子。外形逐项写死并全程复述，画风写成能测量的渲染项，时间轴切成一段一个动作目标。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/media/poster/ayzalnooor24521-seedance-ai-4a336f514777.jpg" width="200" alt="Seedance 双角色 3D 卡通：小蝴蝶的十四秒"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/media/poster/caden-flux-seedance-ai-473fedbbc75f.jpg" width="200" alt="月光池塘里的迷你青蛙大厨"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/ae82336c097b.jpg" width="200" alt="沙发上相拥亲吻的萌兔"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/3bf9f7d54c88.jpg" width="200" alt="蓝围巾小水獭的飞越群山奇旅"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条 3D 卡通动画短片，【主角是一只戴红围巾的小刺猬，圆眼睛，走路一摇一摆】，【故事是它在雨夜给一只迷路的萤火虫带路回家】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 3D 卡通角色短片

一个拟人小角色撑起整条片子。外形逐项写死并全程复述，画风写成能测量的渲染项，时间轴切成一段一个动作目标。

**适用场景:** 皮克斯味的动画短片，主角是个可爱角色：动物厨师、幼龙、黏土质感但运动平滑的小家伙。

**要点:**

- 角色写成零件清单，再补一句把它冻住。青蛙大厨那条把皮肤、眼睛、嘴、脸颊、蹼足、厨师服逐项写出来，然后跟一句 `Keep the exact same frog appearance, outfit, proportions`；水獭冒险那条用的是 `Maintain the exact same character design, proportions, fur pattern`。
- 把风格词换成渲染项。沙发萌兔那条要的是柔软真实的绒毛、电影景深、奶油焦外，再补一句 `premium Pixar-like quality without copying any specific existing character`。
- 正文切成带标题的段。青蛙大厨从 `0–5 SEC — THE RESTAURANT` 一路排到 `27–30 SEC — THE PAYOFF`；水獭冒险用的是 `SCENE 1 — Meadow Chase`，每段点名地点和情绪。
- 情绪写成能动起来的身体动作。青蛙大厨那条写 `He moves one tiny vegetable approximately one millimeter` 和 `His eyes narrow`，揭晓那拍写 `The hedgehog's ears shoot upward`，比写一句大家很惊讶更容易落地。
- 收尾放一份针对动画翻车的排除清单。小蝴蝶那条以 `No character changes, face distortion, extra characters, outfit changes, flickering, deformed hands` 收尾，冰淇淋水獭那条补的是 `no distorted anatomy, no extra characters`。

**示例:** [#1](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777) [#2](https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f) [#3](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900) [#4](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e)

**结构:**

1. 开篇一句定片型：时长、3D 动画短片、画幅、整体调性
2. 角色段：外形逐项、服装、性格，末尾加一句保持不变
3. 正文按秒或按 SCENE 切段，每段一个地点加一个动作目标
4. 段内写微动作和表情变化，让情绪靠动作出来
5. 视觉与渲染段：毛发、景深、光线、材质、焦外
6. 镜头与情绪段：推镜、跟拍、特写，再加一行 mood 词
7. 排除清单收尾：外形变化、脸崩、多余角色、闪烁、文字水印

**常见坑:**

- 只丢一个皮克斯风就收尾。模型还给你的是通用 CG，照萌兔那条把绒毛、景深、光线和焦外一项项写出来。
- 角色只在开头锁一次。片子走到中段外形就开始漂，每个场景开头重提识别物，比如蓝围巾、过大的厨师帽。
- 场景数量超过时长能装的。水獭那条 40 秒塞了 9 个场景，每段不到五秒，动作只能一滑而过。先砍场景，一段留一个动作目标。
- 让角色做精细手部操作又不设防。青蛙大厨用镊子摆香草这种动作最容易长出多余手指，把 `deformed hands` 写进排除清单，或者改成整只爪子抓。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 50 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-73b10f69e32a?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/88ca30c0568f.jpg" width="160" alt="幼儿开门学字母与单词"></a> | [幼儿开门学字母与单词](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-73b10f69e32a?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 98 |
| <a href="https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-d46c440165fa?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/e7b938f20d48.jpg" width="160" alt="萌娃学爸爸剃须，泡沫胡子逗笑父母"></a> | [萌娃学爸爸剃须，泡沫胡子逗笑父母](https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-d46c440165fa?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 96 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-27ee46690725?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/270ba8ecea3b.jpg" width="160" alt="沙发上嬉闹亲吻的兔子情侣"></a> | [沙发上嬉闹亲吻的兔子情侣](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-27ee46690725?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 89 |
| <a href="https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-7b0d25662f25?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/9f5595620b50.jpg" width="160" alt="宝宝模仿妈妈晨间瑜伽，最后温暖相拥"></a> | [宝宝模仿妈妈晨间瑜伽，最后温暖相拥](https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-7b0d25662f25?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 87 |
| <a href="https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-5daf893fe041?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/537cb34decad.jpg" width="160" alt="小女孩在幼儿园认识水果与英文名称"></a> | [小女孩在幼儿园认识水果与英文名称](https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-5daf893fe041?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 86 |
| <a href="https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/ayzalnooor24521-seedance-ai-4a336f514777.jpg" width="160" alt="Seedance 双角色 3D 卡通：小蝴蝶的十四秒"></a> | [Seedance 双角色 3D 卡通：小蝴蝶的十四秒](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 85 |
| <a href="https://goodcase.ai/cases/seedance-2-5-create-a-15-second-high-quality-cinematic-3d-animated-restaurant-sequence-with-92b216cb0d21?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/620edbf4016f.jpg" width="160" alt="意式餐厅里的番茄酱意面风波"></a> | [意式餐厅里的番茄酱意面风波](https://goodcase.ai/cases/seedance-2-5-create-a-15-second-high-quality-cinematic-3d-animated-restaurant-sequence-with-92b216cb0d21?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 83 |
| <a href="https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-91d794271aa6?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/f8ef714634dd.jpg" width="160" alt="童话草地上的八种萌趣动物与英文名称"></a> | [童话草地上的八种萌趣动物与英文名称](https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-91d794271aa6?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 82 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-cf82b3d398ba?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/d9dce07d0659.jpg" width="160" alt="女儿背包引发的睡衣家庭喜剧"></a> | [女儿背包引发的睡衣家庭喜剧](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-cf82b3d398ba?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 82 |
| <a href="https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/caden-flux-seedance-ai-473fedbbc75f.jpg" width="160" alt="月光池塘里的迷你青蛙大厨"></a> | [月光池塘里的迷你青蛙大厨](https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 81 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-520bc125cb28?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/89f1e48bc9f5.jpg" width="160" alt="幼童帮兔子寻找三种水果"></a> | [幼童帮兔子寻找三种水果](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-520bc125cb28?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 81 |
| <a href="https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-d7d437c4a8b9?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/8bfe3ae61e07.jpg" width="160" alt="彩色教室里的萌娃身体部位英语教学"></a> | [彩色教室里的萌娃身体部位英语教学](https://goodcase.ai/cases/seedance-2-5-made-with-seedance-2-5-d7d437c4a8b9?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 78 |

其余 38 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) 上。

---

[← 上一个：定格动画与步进节奏](./stop-motion-cadence.md) · [下一个：打斗编排 →](./combat-choreography.md)
