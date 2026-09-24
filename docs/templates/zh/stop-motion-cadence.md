[English](../en/stop-motion-cadence.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🎨 定格动画与步进节奏

> 定格首先是时间规格，其次才是质感。写死帧率和保持帧数，指名工艺材质，再禁掉那三样会悄悄把它抹平的东西。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-69e5879cc5a7"><img src="https://media.goodcase.ai/media/poster/case-69e5879cc5a7.jpg" width="200" alt="定格动画：狼群袭击序列"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-b079faa80f0f"><img src="https://media.goodcase.ai/media/poster/case-b079faa80f0f.jpg" width="200" alt="定格油画动画"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-0287a838e662"><img src="https://media.goodcase.ai/media/poster/case-0287a838e662.jpg" width="200" alt="手绘定格动画：暴风雪场景"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-50ba683413ff"><img src="https://media.goodcase.ai/media/poster/case-50ba683413ff.jpg" width="200" alt="定格动画扑克牌艺术短片"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条定格动画质感的短片，【材质是：毛毡和黏土】，【内容是：一只毛毡小狐狸在森林里搭帐篷】，【要有明显的逐帧步进感】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 定格动画与步进节奏

定格首先是时间规格，其次才是质感。写死帧率和保持帧数，指名工艺材质，再禁掉那三样会悄悄把它抹平的东西。

**适用场景:** 黏土、剪纸、会动的油画、拼贴、台面物件动画。案例库里 24 条属于这一族。

**要点:**

- 节奏用数字写死：`True 12fps, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding`。
- 指名材质的同时排除相邻材质。狼群袭击那条写的是手绘 2D 质感、会动的油画，NOT clay、NOT puppets、NOT 3D。
- 负向三件套是必需的：NO smooth interpolation、NO motion blur、NO morphing。步进感被悄悄抹平，主要就走这三条路。
- 台面类要把机位锁死——perfectly locked top-down overhead、无机位运动、不出现手、不出现周边物件——只让被摄物变。
- 工艺瑕疵要写成要求：手工不齐的纸边、姿势之间的微小位移抖动、偶尔一帧的拖影、轮廓持续的画面 boil。

**示例:** [#1](https://goodcase.ai/cases/case-69e5879cc5a7) [#2](https://goodcase.ai/cases/case-b079faa80f0f) [#3](https://goodcase.ai/cases/case-0287a838e662) [#4](https://goodcase.ai/cases/case-50ba683413ff)

**结构:**

1. 节奏声明：每秒帧数、每个姿势保持几帧、跳变而不是滑动
2. 工艺材质，并显式排除相邻材质
3. 负向块：不插值、不运动模糊、不形变过渡
4. 机位与台面：锁死俯拍或锁死舞台，不出现手，不出现多余物件
5. 被摄物的逐段变形

**常见坑:**

- 没有把环境运动和主体运动分开。风雪、烟、水可以平滑漂移，人物和道具要步进，不写清楚就会一起被平滑掉。
- 同时要定格和长镜头运动。这是互斥需求，通常是运镜赢。
- 同一条里既要黏土又要纸片。两者的光影逻辑不同，模型会混成一种说不清的表面。
- 12fps 下还用常规动作幅度。步进动画在快动作上会丢可读性，姿势幅度要放大。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 9 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/erling-haaland-525acabe78da"><img src="https://media.goodcase.ai/media/poster/erling-haaland-525acabe78da.jpg" width="160" alt="Erling Haaland 黏土动画园艺"></a> | [Erling Haaland 黏土动画园艺](https://goodcase.ai/cases/erling-haaland-525acabe78da) | 2.0 | 87 |
| <a href="https://goodcase.ai/cases/seedance-create-a-21-second-vertical-9-16-cinematic-stop-motion-animation-557fa2797476"><img src="https://media.goodcase.ai/cases/89da8d0df670.jpg" width="160" alt="潮池石头人的笨拙舞蹈"></a> | [潮池石头人的笨拙舞蹈](https://goodcase.ai/cases/seedance-create-a-21-second-vertical-9-16-cinematic-stop-motion-animation-557fa2797476) | 2.0 | 86 |
| <a href="https://goodcase.ai/cases/mayaaicreator-seedance-ai-99e38c199ba8"><img src="https://media.goodcase.ai/cases/6ba4b46a24b8.jpg" width="160" alt="黏土定格迷你能多益咖啡馆"></a> | [黏土定格迷你能多益咖啡馆](https://goodcase.ai/cases/mayaaicreator-seedance-ai-99e38c199ba8) | 2.0 | 30 |
| <a href="https://goodcase.ai/cases/case-69e5879cc5a7"><img src="https://media.goodcase.ai/media/poster/case-69e5879cc5a7.jpg" width="160" alt="定格动画：狼群袭击序列"></a> | [定格动画：狼群袭击序列](https://goodcase.ai/cases/case-69e5879cc5a7) | 2.0 | 20 |
| <a href="https://goodcase.ai/cases/case-0287a838e662"><img src="https://media.goodcase.ai/media/poster/case-0287a838e662.jpg" width="160" alt="手绘定格动画：暴风雪场景"></a> | [手绘定格动画：暴风雪场景](https://goodcase.ai/cases/case-0287a838e662) | 2.0 | 19 |
| <a href="https://goodcase.ai/cases/case-50ba683413ff"><img src="https://media.goodcase.ai/media/poster/case-50ba683413ff.jpg" width="160" alt="定格动画扑克牌艺术短片"></a> | [定格动画扑克牌艺术短片](https://goodcase.ai/cases/case-50ba683413ff) | 2.0 | 15 |
| <a href="https://goodcase.ai/cases/case-b079faa80f0f"><img src="https://media.goodcase.ai/media/poster/case-b079faa80f0f.jpg" width="160" alt="定格油画动画"></a> | [定格油画动画](https://goodcase.ai/cases/case-b079faa80f0f) | 2.0 | 12 |
| <a href="https://goodcase.ai/cases/case-7a9235e91c71"><img src="https://media.goodcase.ai/media/poster/case-7a9235e91c71.jpg" width="160" alt="定格动画：薯片堆叠"></a> | [定格动画：薯片堆叠](https://goodcase.ai/cases/case-7a9235e91c71) | 2.0 | 10 |
| <a href="https://goodcase.ai/cases/vox-d5c357d5e75d"><img src="https://media.goodcase.ai/media/poster/vox-d5c357d5e75d.jpg" width="160" alt="Vox 风格历史拼贴动画"></a> | [Vox 风格历史拼贴动画](https://goodcase.ai/cases/vox-d5c357d5e75d) | 2.0 | 5 |

---

[← 上一个：动漫与风格化画风固定](./anime-style-lock.md) · [下一个：3D 卡通角色短片 →](./3d-cartoon.md)
