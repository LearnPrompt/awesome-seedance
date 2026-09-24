[English](../en/dialogue-performance-beats.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🎭 对白与表演节拍

> 声明对白语种、标出说话人、把反应写成因果链而不是表情清单，每一拍以一个明确的结束状态收尾。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer"><img src="https://media.goodcase.ai/media/poster/youmind-surprise-visit-romance-trailer.jpg" width="200" alt="《惊喜探访》浪漫短片"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-b2d98861daf9.jpg" width="200" alt="Seedance 十五秒连续对白健身房 vlog"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-1f8136a9893a"><img src="https://media.goodcase.ai/media/poster/case-1f8136a9893a.jpg" width="200" alt="富有情感的日语对话动画"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-a845e1418b39"><img src="https://media.goodcase.ai/media/poster/case-a845e1418b39.jpg" width="200" alt="昭和时代复古客厅场景"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条有对白的表演戏，【人物是：一对在雨夜咖啡馆重逢的旧恋人】，【台词是：男，你还是老样子。女，你也是。】，【情绪从克制到松动】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 对白与表演节拍

声明对白语种、标出说话人、把反应写成因果链而不是表情清单，每一拍以一个明确的结束状态收尾。

**适用场景:** 台词要被听见而不是被暗示的时候。207 条里 78 条把台词直接写进正文（38%），16 条显式管理口型。Seedance 2.5 还支持用上传的音轨驱动口型。

**要点:**

- 语种单独成行写在台词之前，写成 `セリフ言語: 日本語` 或 `Natural English dialogue only`，并把台词包进花括号或引号，避免被当成场景描述读。
- 有上传音轨时，写明口型依据音频里的真实人声而不是文字，并要求无人声段落闭唇。同时限定只有一个人对口型，背景人物别跟着张嘴。
- 反应写成链，不写清单：先听见、短暂停顿理解、表情开始变化、身体随后跟上、前一个表情留余韵、再进入下一个状态。逐条控制眉毛眼睛鼻子嘴会做出表情包式切换。
- 每一拍以一行结束状态收尾，给下一拍一个明确起点——突袭那条每阶段写结束时，日语对白那条写終了状態。
- 有生理表征的情绪要写行为，不写症状。直接要脸红会得到均匀粉色滤镜；改成视线短暂移开、嘴角压不住、语速变慢、手部停顿，害羞才成立。

**示例:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

**结构:**

1. 语种与音源声明，写在任何台词之前
2. 说话人标签，每个角色一个
3. 每一拍：因果反应链、台词、结束状态
4. 全局表演原则：角色知道什么、不知道什么
5. 负向：不要旁白、不要静默空档、不要表情包式切换

**常见坑:**

- 连续对白的片子要明写 `no silent moments and no voice-over`，否则模型会给你配乐加一张动的嘴。
- 专有名词和数字是生成台词里最不可靠的部分。把品牌名和数字从对白挪到后期加的上屏文字里。
- 两个角色在同一拍说话会分掉口型预算。一个给台词，另一个给身体反应。
- 三秒的拍子里台词超过八个词左右就会失步。先砍台词，再调别的。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 8 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-b2d98861daf9.jpg" width="160" alt="Seedance 十五秒连续对白健身房 vlog"></a> | [Seedance 十五秒连续对白健身房 vlog](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) | 2.0 | 70 |
| <a href="https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer"><img src="https://media.goodcase.ai/media/poster/youmind-surprise-visit-romance-trailer.jpg" width="160" alt="《惊喜探访》浪漫短片"></a> | [《惊喜探访》浪漫短片](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) | 2.0 | 70 |
| <a href="https://goodcase.ai/cases/case-1f8136a9893a"><img src="https://media.goodcase.ai/media/poster/case-1f8136a9893a.jpg" width="160" alt="富有情感的日语对话动画"></a> | [富有情感的日语对话动画](https://goodcase.ai/cases/case-1f8136a9893a) | 2.5 | 67 |
| <a href="https://goodcase.ai/cases/seedance-3b9beb9a46d4"><img src="https://media.goodcase.ai/media/poster/seedance-3b9beb9a46d4.jpg" width="160" alt="Seedance 电影级分手表演提示词"></a> | [Seedance 电影级分手表演提示词](https://goodcase.ai/cases/seedance-3b9beb9a46d4) | 2.5 | 30 |
| <a href="https://goodcase.ai/cases/case-e0d3b03f1aef"><img src="https://media.goodcase.ai/media/poster/case-e0d3b03f1aef.jpg" width="160" alt="汤姆·索亚粉刷篱笆场景"></a> | [汤姆·索亚粉刷篱笆场景](https://goodcase.ai/cases/case-e0d3b03f1aef) | 2.0 | 9 |
| <a href="https://goodcase.ai/cases/case-19957ff473b6"><img src="https://media.goodcase.ai/media/poster/case-19957ff473b6.jpg" width="160" alt="童年玩具对话提示词"></a> | [童年玩具对话提示词](https://goodcase.ai/cases/case-19957ff473b6) | 2.0 | - |
| <a href="https://goodcase.ai/cases/case-a845e1418b39"><img src="https://media.goodcase.ai/media/poster/case-a845e1418b39.jpg" width="160" alt="昭和时代复古客厅场景"></a> | [昭和时代复古客厅场景](https://goodcase.ai/cases/case-a845e1418b39) | 2.0 | 0 |
| <a href="https://goodcase.ai/cases/seedance-2-5-8d136b59e95a"><img src="https://media.goodcase.ai/cases/c63cbb62b439.jpg" width="160" alt="出租车分手戏：仿真人微表情连续情绪演变视频（Seedance 2.5）"></a> | [出租车分手戏：仿真人微表情连续情绪演变视频（Seedance 2.5）](https://goodcase.ai/cases/seedance-2-5-8d136b59e95a) | 2.5 | - |

---

[← 上一个：时尚 lookbook 与人像写真片](./fashion-lookbook.md) · [下一个：电影级叙事短片 →](./cinematic-narrative-short.md)
