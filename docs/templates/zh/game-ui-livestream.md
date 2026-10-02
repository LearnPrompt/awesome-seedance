[English](../en/game-ui-livestream.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🎭 游戏实机录屏与直播叠层

> 屏幕本身就是画面，假装是一段游戏实机、直播或桌面录屏。成立的关键是叠层钉死在固定位置，上面的数字和横幅跟着剧情一格一格变。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58"><img src="https://media.goodcase.ai/cases/f81388cc5f57.jpg" width="200" alt="霓虹海岸城市枪战追车直播"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da"><img src="https://media.goodcase.ai/cases/381369ef731a.jpg" width="200" alt="女高中生盗取钻石项链逃上列车"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6"><img src="https://media.goodcase.ai/cases/f16c9f956a8d.jpg" width="200" alt="Seedance 2.5 超真实 AI 动态桌面壁纸：换装互动女主一镜到底"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e"><img src="https://media.goodcase.ai/cases/199c37ba7f84.jpg" width="200" alt="五点下班的办公室潜行"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一段看起来像游戏实机录屏的视频，【主角是一个穿校服的短发女生，人物照片我提供给你】，【任务是深夜从便利店偷走最后一个饭团再逃到街上】，【画面右下角有主播摄像头小窗，左边是滚动弹幕】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 游戏实机录屏与直播叠层

屏幕本身就是画面，假装是一段游戏实机、直播或桌面录屏。成立的关键是叠层钉死在固定位置，上面的数字和横幅跟着剧情一格一格变。

**适用场景:** GTA 风格的任务片段、主播小窗加游戏画面、互动桌面或界面录屏这类片子，HUD 要看起来像真的界面。

**要点:**

- 时间轴开始之前，先把每个叠层钉到一个具体位置。GTA 6 Simulation 开头就写 `Fixed full-screen game HUD throughout`，主播放在 `bottom-right square pink-blue neon facecam`；雪下车站那条一个角放一样东西，左上体力条，顶部中间任务横幅，右上日期，左下小地图，右下按键提示。
- 把 HUD 当记分牌写，每一段都让它变一次。GTA 6 Simulation 写了弹药 `from 24/120 to 14/120`，通缉星从两颗涨到三颗；钻石逃亡那条每段单独一个 HUD 块，从 `MISSION: STEAL VIP NECKLACE` 到 `TARGET ACQUIRED` 再到 `ESCAPE SUCCESSFUL`。
- 直接说明这是游戏画面，机位按游戏摄像机来写。里约追逐那条要求像真实游戏录屏，写了 `not a cinematic film`；钻石逃亡写 `Clearly a GAME, not anime or cartoon`，镜头放在 `1.5m behind NAGI, slightly camera-right`，视角在 30 到 60 度之间呼吸。
- 人数写死，多出来的每个人都要长得不一样。GTA 6 Simulation 要求 `exactly two dark-red-jacket gang enemies`，不许再冒出别的持枪角色；五点下班那条给四个同事分了年龄、身高、发型，还专门写明老板是全片唯一的光头。
- 按图层分语言，屏幕上的字怎么出现也要写清。钻石逃亡规定 `All HUD text English`，对白用日语；动态壁纸那条把字幕放在画面左侧中部，每个字大约 0.08 到 0.12 秒逐字打出来，下面跟一条跳动的音频波形。

**示例:** [#1](https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58) [#2](https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da) [#3](https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6) [#4](https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e)

**结构:**

1. 格式开头：时长、画幅、镜头怎么切，再直说这是一段游戏录屏
2. 人物锁定：Image1 只管脸和身份，服装用文字写全
3. 屏幕叠层说明：HUD 各元素、主播小窗、弹幕或字幕各放哪、用什么语言，全程固定
4. 机位设定：第三人称跟随的距离和视角，桌面录屏就写一个固定机位
5. 时间轴分段：每段写清动作、HUD 状态变化、这一段说的台词
6. 音频：引擎、脚步、键盘鼠标、环境声、人声语言
7. 硬规则收尾：人数写死、不许多切、HUD 不动、结尾能怎么收不能怎么收

**常见坑:**

- HUD 在段与段之间漂移或者换布局。硬规则里写上 `HUD fixed in the same screen positions`，只让数值变，布局一律不动。
- HUD 上的长句子出来是乱码。横幅控制在两到四个大写词，像钻石逃亡那样，数字也用 38/120 这种简单格式。
- 主播或主角出现两次，小窗里一个，游戏世界里又一个，或者镜子里多出一个。GTA 6 Simulation 写明 HANEUL 只出现在右下小窗；五点下班那条干脆规定电梯里没有镜子。
- 模型把它剪成了电影预告片，有剪切还有一个圆满结尾。写明不切镜不转场；真要一个收尾镜头，就像 `Exactly one hard cut at 27s` 那样把唯一一刀钉在具体秒数，再排除黑屏和片尾卡。
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
| <a href="https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6"><img src="https://media.goodcase.ai/cases/f16c9f956a8d.jpg" width="160" alt="Seedance 2.5 超真实 AI 动态桌面壁纸：换装互动女主一镜到底"></a> | [Seedance 2.5 超真实 AI 动态桌面壁纸：换装互动女主一镜到底](https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6) | 2.5 | 94 |
| <a href="https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e"><img src="https://media.goodcase.ai/cases/199c37ba7f84.jpg" width="160" alt="五点下班的办公室潜行"></a> | [五点下班的办公室潜行](https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e) | 2.5 | 91 |
| <a href="https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58"><img src="https://media.goodcase.ai/cases/f81388cc5f57.jpg" width="160" alt="霓虹海岸城市枪战追车直播"></a> | [霓虹海岸城市枪战追车直播](https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58) | 2.5 | 85 |
| <a href="https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da"><img src="https://media.goodcase.ai/cases/381369ef731a.jpg" width="160" alt="女高中生盗取钻石项链逃上列车"></a> | [女高中生盗取钻石项链逃上列车](https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da) | 2.5 | 83 |
| <a href="https://goodcase.ai/cases/seedance-a-mysterious-train-station-is-buried-beneath-the-snow-and-three-friends-are-de-118e70d4e33e"><img src="https://media.goodcase.ai/cases/79e519115cd2.jpg" width="160" alt="三个孩子寻找雪下的神秘车站"></a> | [三个孩子寻找雪下的神秘车站](https://goodcase.ai/cases/seedance-a-mysterious-train-station-is-buried-beneath-the-snow-and-three-friends-are-de-118e70d4e33e) | 2.5 | 81 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-sequenc-70896856a838"><img src="https://media.goodcase.ai/cases/a766a24fcbfe.jpg" width="160" alt="里约街头误拿包裹追逐战"></a> | [里约街头误拿包裹追逐战](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-sequenc-70896856a838) | 2.5 | 62 |
| <a href="https://goodcase.ai/cases/seedance-okay-this-feels-straight-out-of-gta-4dcfe15565a6"><img src="https://media.goodcase.ai/cases/9377bc7b94f2.jpg" width="160" alt="女外科医生的医院急救任务"></a> | [女外科医生的医院急救任务](https://goodcase.ai/cases/seedance-okay-this-feels-straight-out-of-gta-4dcfe15565a6) | 2.5 | 59 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-video-s-405ad1ebb338"><img src="https://media.goodcase.ai/cases/5864458476ef.jpg" width="160" alt="日本乡村车站盗窃逃亡"></a> | [日本乡村车站盗窃逃亡](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-video-s-405ad1ebb338) | 2.5 | 56 |
| <a href="https://goodcase.ai/cases/seedance-one-continuous-modern-american-office-entrance-security-desk-badge-gate-d42d0ee6b30a"><img src="https://media.goodcase.ai/cases/069d8945f51e.jpg" width="160" alt="迟到员工潜行闯关遭监控识破"></a> | [迟到员工潜行闯关遭监控识破](https://goodcase.ai/cases/seedance-one-continuous-modern-american-office-entrance-security-desk-badge-gate-d42d0ee6b30a) | 2.5 | 54 |
| <a href="https://goodcase.ai/cases/seedance-a-missing-key-a-schoolgirl-and-a-full-on-gameplay-mission-50048532d82b"><img src="https://media.goodcase.ai/cases/b603084f5e65.jpg" width="160" alt="日本高中教室钥匙任务"></a> | [日本高中教室钥匙任务](https://goodcase.ai/cases/seedance-a-missing-key-a-schoolgirl-and-a-full-on-gameplay-mission-50048532d82b) | 2.5 | 46 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-photorealistic-aaa-third-person-action-adventure-gameplay-vi-b1237ef456f0"><img src="https://media.goodcase.ai/cases/a1590102d56c.jpg" width="160" alt="女探险家勇闯海岛遗迹"></a> | [女探险家勇闯海岛遗迹](https://goodcase.ai/cases/seedance-create-a-30-second-photorealistic-aaa-third-person-action-adventure-gameplay-vi-b1237ef456f0) | 2.5 | 44 |
| <a href="https://goodcase.ai/cases/seedance-use-image1-as-highest-priority-reference-for-haneul-87857bb7ac9c"><img src="https://media.goodcase.ai/cases/e750151cbe91.jpg" width="160" alt="女主播直播金库劫案逃亡"></a> | [女主播直播金库劫案逃亡](https://goodcase.ai/cases/seedance-use-image1-as-highest-priority-reference-for-haneul-87857bb7ac9c) | 2.5 | 44 |

其余 3 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) 上。

---

[← 上一个：恐怖悬疑短片](./horror-suspense.md) · [下一个：动漫与风格化画风固定 →](./anime-style-lock.md)
