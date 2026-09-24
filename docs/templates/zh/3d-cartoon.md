[English](../en/3d-cartoon.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🎨 3D 卡通角色短片

> 一个拟人小角色撑起整条片子。外形逐项写死并全程复述，画风写成能测量的渲染项，时间轴切成一段一个动作目标。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777"><img src="https://media.goodcase.ai/media/poster/ayzalnooor24521-seedance-ai-4a336f514777.jpg" width="200" alt="Seedance 双角色 3D 卡通：小蝴蝶的十四秒"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f"><img src="https://media.goodcase.ai/media/poster/caden-flux-seedance-ai-473fedbbc75f.jpg" width="200" alt="月光池塘里的迷你青蛙大厨"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900"><img src="https://media.goodcase.ai/cases/ae82336c097b.jpg" width="200" alt="沙发上相拥亲吻的萌兔"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e"><img src="https://media.goodcase.ai/cases/3bf9f7d54c88.jpg" width="200" alt="蓝围巾小水獭的飞越群山奇旅"></a></td>
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

## 这一类的案例（已归类 15 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777"><img src="https://media.goodcase.ai/media/poster/ayzalnooor24521-seedance-ai-4a336f514777.jpg" width="160" alt="Seedance 双角色 3D 卡通：小蝴蝶的十四秒"></a> | [Seedance 双角色 3D 卡通：小蝴蝶的十四秒](https://goodcase.ai/cases/ayzalnooor24521-seedance-ai-4a336f514777) | 2.0 | 86 |
| <a href="https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f"><img src="https://media.goodcase.ai/media/poster/caden-flux-seedance-ai-473fedbbc75f.jpg" width="160" alt="月光池塘里的迷你青蛙大厨"></a> | [月光池塘里的迷你青蛙大厨](https://goodcase.ai/cases/caden-flux-seedance-ai-473fedbbc75f) | 2.5 | 82 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900"><img src="https://media.goodcase.ai/cases/ae82336c097b.jpg" width="160" alt="沙发上相拥亲吻的萌兔"></a> | [沙发上相拥亲吻的萌兔](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-71bc731fe900) | 2.5 | 79 |
| <a href="https://goodcase.ai/cases/im-shahid7-seedance-ai-b4d2ba40a750"><img src="https://media.goodcase.ai/cases/aa596f802fe1.jpg" width="160" alt="丈夫误把洗衣求助当浪漫邀约"></a> | [丈夫误把洗衣求助当浪漫邀约](https://goodcase.ai/cases/im-shahid7-seedance-ai-b4d2ba40a750) | 2.0 | 64 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-810bf41bfd44"><img src="https://media.goodcase.ai/cases/275cccb1d045.jpg" width="160" alt="男孩与幼龙的热带奇遇"></a> | [男孩与幼龙的热带奇遇](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-810bf41bfd44) | 2.5 | 62 |
| <a href="https://goodcase.ai/cases/juliaclarky-seedance-ai-f648a434d526"><img src="https://media.goodcase.ai/cases/a13c537747bc.jpg" width="160" alt="Seedance 三十秒 3D 动画喜剧：妈妈断了 WiFi 之后"></a> | [Seedance 三十秒 3D 动画喜剧：妈妈断了 WiFi 之后](https://goodcase.ai/cases/juliaclarky-seedance-ai-f648a434d526) | 2.0 | 51 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e"><img src="https://media.goodcase.ai/cases/3bf9f7d54c88.jpg" width="160" alt="蓝围巾小水獭的飞越群山奇旅"></a> | [蓝围巾小水獭的飞越群山奇旅](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e2f2af930d0e) | 2.5 | 49 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e33e1ae7c498"><img src="https://media.goodcase.ai/cases/dd1c2293bbc7.jpg" width="160" alt="小水獭与蓝色新朋友分享冰淇淋"></a> | [小水獭与蓝色新朋友分享冰淇淋](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-e33e1ae7c498) | 2.5 | 49 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-4baf2c6b5a8c"><img src="https://media.goodcase.ai/media/poster/seedance-made-with-seedance-2-5-4baf2c6b5a8c.jpg" width="160" alt="海滩上水獭为海龟叠石塔"></a> | [海滩上水獭为海龟叠石塔](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-4baf2c6b5a8c) | 2.5 | 45 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-d2d9acfaedfc"><img src="https://media.goodcase.ai/cases/af3b3dd1180b.jpg" width="160" alt="巨翼守护者护幼大战灰狼"></a> | [巨翼守护者护幼大战灰狼](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-d2d9acfaedfc) | 2.5 | 43 |
| <a href="https://goodcase.ai/cases/seharshinwari-seedance-ai-ce8e8937181f"><img src="https://media.goodcase.ai/media/poster/seharshinwari-seedance-ai-ce8e8937181f.jpg" width="160" alt="道士少女与巨人的山路追车"></a> | [道士少女与巨人的山路追车](https://goodcase.ai/cases/seharshinwari-seedance-ai-ce8e8937181f) | 2.0 | 30 |
| <a href="https://goodcase.ai/cases/case-6152b0808b14"><img src="https://media.goodcase.ai/media/poster/case-6152b0808b14.jpg" width="160" alt="黏土动画猫咪世界大变身"></a> | [黏土动画猫咪世界大变身](https://goodcase.ai/cases/case-6152b0808b14) | 2.0 | 26 |

其余 3 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) 上。

---

[← 上一个：定格动画与步进节奏](./stop-motion-cadence.md) · [下一个：打斗编排 →](./combat-choreography.md)
