[English](../en/storyboard-grid-to-video.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🧱 分镜网格转视频

> 分两步走：先用图像模型出一张带编号格子的单页分镜图，再把这张图当参考喂给 Seedance。顺序、构图和时长由分镜图定死，视频提示语只负责把格子连起来。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/real-case-06-aimikoda"><img src="https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg" width="200" alt="梅林元素功夫表演"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/real-case-07-techiebysa"><img src="https://media.goodcase.ai/media/poster/real-case-07-techiebysa.jpg" width="200" alt="法式牛角包制作过程"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c"><img src="https://media.goodcase.ai/cases/a4fc7d20210a.jpg" width="200" alt="吉隆坡崩塌都市极限逃生"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/apartment-arrival-storyboard-animation"><img src="https://media.goodcase.ai/media/poster/apartment-arrival-storyboard-animation.jpg" width="200" alt="Apartment Arrival Storyboard Animation"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要先出一张分镜图再把它转成视频，【故事是一只流浪猫在雨夜一路找到家，分成 9 格】，【画风像皮克斯 3D，总时长 15 秒】。请根据下面这个提示语模板，分两步把提示语写好：先写生成分镜图的提示语，再写把这张分镜图转成视频的 Seedance 提示语：

#### 分镜网格转视频

分两步走：先用图像模型出一张带编号格子的单页分镜图，再把这张图当参考喂给 Seedance。顺序、构图和时长由分镜图定死，视频提示语只负责把格子连起来。

**适用场景:** 想在出片之前先看见并改定镜头顺序的多镜头片子：制作流程、动作预览、产品广告、一天生活的串场蒙太奇。

**要点:**

- 格数和总时长在出图这一步就绑死。牛角包那张分镜图的页眉写着 `TOTAL VIDEO TIME: 12 SECONDS` 和 `8 SHOTS`，页脚再算一遍 `8 shots × 1.5s = 12 seconds`。
- 两张参考图分工写清楚。灾难逃生那条把 Image1 定成 `the EXACT main character reference`，Image2 定成 `the EXACT storyboard design and layout reference`。
- 明说谁说了算。欧洲夏日漫步那条写 `Do not copy any pose or layout from the Master Character Set`，把地点、动作、构图和顺序全部交给分镜图。
- 第二步写成一小串硬规则。牛角包那条的视频提示语列了 `Follow the sequence exactly from 1 to 8`、`One shot per panel, approximately 1.5 seconds each` 和 `No skipped steps`。
- 每一格写成动作加景别，不要写成一张画。功夫那张分镜图的十二行都是 `begin mid-air with a flying diagonal kick already in motion` 这种句子，并且要求 `Every panel must contain visible motion`。

**示例:** [#1](https://goodcase.ai/cases/real-case-06-aimikoda) [#2](https://goodcase.ai/cases/real-case-07-techiebysa) [#3](https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c) [#4](https://goodcase.ai/cases/apartment-arrival-storyboard-animation)

**结构:**

1. 出图提示语开头：单页分镜、画幅、格数，画风写成高级分镜、信息图海报或者铅笔草稿预览
2. 信息卡：片名、总时长、镜头数、音频方向，让时长和格数对得上
3. 逐格清单，一格一行：景别、这一格里正在发生的动作、这一格是干什么用的
4. 出图提示语收尾：标注系统，以及排除项，比如不要时间码、不要多余角色、不要水印
5. 视频提示语开头：点名哪张是角色参考、哪张是分镜参考，各自管什么
6. 规则清单：按 1 到 N 走、一格一镜、每镜多少秒、不跳步不加戏、人物和场景全程一致
7. 整体质感与收尾：光线、镜头运动、音频，最后写上不要字幕水印

**常见坑:**

- 把时间码画进分镜图里。格子上的时间戳会被当成画面内容一起带进视频，功夫那条在出图段直接写 `No timestamps`，时长交给第二步的规则清单。
- 格数超出时长能装下的量。按每格 1.5 到 3 秒倒推格数，牛角包那条是 8 格配 12 秒。
- 角色图和分镜图打架。模型会照抄角色图上的姿势，要写明分镜图管地点、动作、构图和顺序，角色图只管长相。
- 格子里只写画面不写动作。片子动起来就是几张静止图轮播，每一格都要给一个正在发生的动作。
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
| <a href="https://goodcase.ai/cases/real-case-06-aimikoda"><img src="https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg" width="160" alt="梅林元素功夫表演"></a> | [梅林元素功夫表演](https://goodcase.ai/cases/real-case-06-aimikoda) | 2.0 | 89 |
| <a href="https://goodcase.ai/cases/real-case-07-techiebysa"><img src="https://media.goodcase.ai/media/poster/real-case-07-techiebysa.jpg" width="160" alt="法式牛角包制作过程"></a> | [法式牛角包制作过程](https://goodcase.ai/cases/real-case-07-techiebysa) | 2.0 | 85 |
| <a href="https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c"><img src="https://media.goodcase.ai/cases/a4fc7d20210a.jpg" width="160" alt="吉隆坡崩塌都市极限逃生"></a> | [吉隆坡崩塌都市极限逃生](https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c) | 2.5 | 78 |
| <a href="https://goodcase.ai/cases/apartment-arrival-storyboard-animation"><img src="https://media.goodcase.ai/media/poster/apartment-arrival-storyboard-animation.jpg" width="160" alt="Apartment Arrival Storyboard Animation"></a> | [Apartment Arrival Storyboard Animation](https://goodcase.ai/cases/apartment-arrival-storyboard-animation) | 2.0 | 67 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-in-1080p-bb09011ebea2"><img src="https://media.goodcase.ai/media/poster/seedance-made-with-seedance-2-5-in-1080p-bb09011ebea2.jpg" width="160" alt="艾莎的欧洲城市夏日漫步"></a> | [艾莎的欧洲城市夏日漫步](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-in-1080p-bb09011ebea2) | 2.5 | 66 |
| <a href="https://goodcase.ai/cases/strength04-x-seedance-ai-be4ae9f1e375"><img src="https://media.goodcase.ai/media/poster/strength04-x-seedance-ai-be4ae9f1e375.jpg" width="160" alt="香辣薯片高能产品广告分镜"></a> | [香辣薯片高能产品广告分镜](https://goodcase.ai/cases/strength04-x-seedance-ai-be4ae9f1e375) | 2.5 | 35 |
| <a href="https://goodcase.ai/cases/3d-f194855e4246"><img src="https://media.goodcase.ai/media/poster/3d-f194855e4246.jpg" width="160" alt="3D 烘焙动画序列"></a> | [3D 烘焙动画序列](https://goodcase.ai/cases/3d-f194855e4246) | 2.0 | 29 |
| <a href="https://goodcase.ai/cases/vlog-4317b7fdff57"><img src="https://media.goodcase.ai/media/poster/vlog-4317b7fdff57.jpg" width="160" alt="京都情感旅行 Vlog 动画"></a> | [京都情感旅行 Vlog 动画](https://goodcase.ai/cases/vlog-4317b7fdff57) | 2.0 | 4 |
| <a href="https://goodcase.ai/cases/case-749c98da9b7d"><img src="https://media.goodcase.ai/media/poster/case-749c98da9b7d.jpg" width="160" alt="皮克斯风格奶昔故事板动画"></a> | [皮克斯风格奶昔故事板动画](https://goodcase.ai/cases/case-749c98da9b7d) | 2.0 | 2 |

---

[← 上一个：参考图身份锁定](./character-reference-lock.md) · [下一个：手持 UGC vlog →](./handheld-ugc-vlog.md)
