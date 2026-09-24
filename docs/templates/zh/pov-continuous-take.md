[English](../en/pov-continuous-take.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 📱 第一人称一镜到底

> 执法记录仪、GoPro、FPV 和车把视角。相机挂在身体上，运动必须从身体推导，每一次剪辑都得手动声明。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-d68024212dfc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-d68024212dfc.jpg" width="200" alt="Seedance 2.5 生成菠萝披萨突袭执法记录仪长镜头"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-gopro-94a73eef1dbf.jpg" width="200" alt="Seedance 2.5 生成 GoPro 钓鱼到烤鱼全流程"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-f1696dad13bc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-f1696dad13bc.jpg" width="200" alt="Seedance 2.5 悬崖翼装跳伞环海一镜到底"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/fpv-cd4a852a53ba"><img src="https://media.goodcase.ai/media/poster/fpv-cd4a852a53ba.jpg" width="200" alt="纽约 FPV 无人机飞行"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条第一人称一镜到底的视频，【我的视角是：骑着山地车从林道冲下山】，【画面里要出现我的双手和车把】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 第一人称一镜到底

执法记录仪、GoPro、FPV 和车把视角。相机挂在身体上，运动必须从身体推导，每一次剪辑都得手动声明。

**适用场景:** 要观众就是操作者的沉浸素材：破门突入、极限运动、厨师视角做饭、无人机飞行。207 条里 32 条属于这类。

**要点:**

- 声明挂载位置和高度，模型才能推出该怎么晃：胸挂在破门手身上、POV 保持胸到眼的高度、只随身体移动。
- 拒绝空首帧。GoPro 钓鱼那条写 `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`，把死掉的第一秒省掉了。
- 一镜到底和剪辑要分开声明。剪点写成清单——A 0-9s 河边一镜，HARD CUT，B 9-21s 案板一镜——再补一句除此之外相机不剪。
- 视场角逐段写成度数（84° 在搏斗中收到 63°，下一段 63° 收到 18°），后面跟一句 `No drift within any segment`。
- 把身体挂载的光学后果写出来：边缘广角畸变、行走造成的上下颠动、快速转头的运动模糊、手电只照亮操作者面向的方向。

**示例:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

**结构:**

1. SCENE CONTEXT：一段话交代主体、挂载方式和总时长
2. ACTIVE REFERENCES：场景、手和道具的命名 token
3. LOCATION MAP：每段的前景、中景、背景各是什么，以及机位高度
4. FIRST FRAME / BLOCKING：首帧非空，开场就在动作中间
5. FORMAT MODE：硬切落在哪里，哪几段是连续一镜
6. OPTICS：每段的视场角，附一句段内不许漂移
7. 时间轴与音频

**常见坑:**

- 操作者自己的脸入画。补一句 `the camera itself is never visible`，只描述手在做什么。
- 手入画却不说左右手和持物。要写清哪只手拿什么，否则会长出第三只手。
- 在标了一镜到底的段落里安排跨场景大跳。要么实时走过去，要么在边界放一个声明过的硬切。
- 忘了禁掉电影化处理。执法记录仪和运动相机素材要明写 no slow-motion, no cinematic grading，否则会变成电影预告片。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 11 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-gopro-94a73eef1dbf.jpg" width="160" alt="Seedance 2.5 生成 GoPro 钓鱼到烤鱼全流程"></a> | [Seedance 2.5 生成 GoPro 钓鱼到烤鱼全流程](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) | 2.5 | 83 |
| <a href="https://goodcase.ai/cases/seedance-magic-pen-street-transport-vlog-28d80bd05eda"><img src="https://media.goodcase.ai/media/poster/seedance-magic-pen-street-transport-vlog-28d80bd05eda.jpg" width="160" alt="魔法画笔将城市交通变成动漫"></a> | [魔法画笔将城市交通变成动漫](https://goodcase.ai/cases/seedance-magic-pen-street-transport-vlog-28d80bd05eda) | 2.5 | 80 |
| <a href="https://goodcase.ai/cases/first-person-pov-dragon-rider-cinematic"><img src="https://media.goodcase.ai/cases/464939ccd5ab.jpg" width="160" alt="First-Person POV Dragon Rider Cinematic"></a> | [First-Person POV Dragon Rider Cinematic](https://goodcase.ai/cases/first-person-pov-dragon-rider-cinematic) | 2.5 | 74 |
| <a href="https://goodcase.ai/cases/oggii-0-seedance-ai-a473e1b2b456"><img src="https://media.goodcase.ai/media/poster/oggii-0-seedance-ai-a473e1b2b456.jpg" width="160" alt="穿越历史的磁悬浮列车"></a> | [穿越历史的磁悬浮列车](https://goodcase.ai/cases/oggii-0-seedance-ai-a473e1b2b456) | 2.5 | 68 |
| <a href="https://goodcase.ai/cases/seedance-magic-pen-beach-boardwalk-vlog-15-seconds-vertical-9-16-ea4714e1706f"><img src="https://media.goodcase.ai/media/poster/seedance-magic-pen-beach-boardwalk-vlog-15-seconds-vertical-9-16-ea4714e1706f.jpg" width="160" alt="魔法笔点化夜间海滨栈道"></a> | [魔法笔点化夜间海滨栈道](https://goodcase.ai/cases/seedance-magic-pen-beach-boardwalk-vlog-15-seconds-vertical-9-16-ea4714e1706f) | 2.5 | 50 |
| <a href="https://goodcase.ai/cases/ciri-ai-seedance-ai-5ce4a010eef9"><img src="https://media.goodcase.ai/cases/4b0adb519318.jpg" width="160" alt="通勤列车直达地狱深处"></a> | [通勤列车直达地狱深处](https://goodcase.ai/cases/ciri-ai-seedance-ai-5ce4a010eef9) | 2.5 | 47 |
| <a href="https://goodcase.ai/cases/seedance-2-5-d68024212dfc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-d68024212dfc.jpg" width="160" alt="Seedance 2.5 生成菠萝披萨突袭执法记录仪长镜头"></a> | [Seedance 2.5 生成菠萝披萨突袭执法记录仪长镜头](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) | 2.5 | 31 |
| <a href="https://goodcase.ai/cases/fpv-def15f90bf27"><img src="https://media.goodcase.ai/media/poster/fpv-def15f90bf27.jpg" width="160" alt="太空飞船驾驶舱 FPV 太空航行"></a> | [太空飞船驾驶舱 FPV 太空航行](https://goodcase.ai/cases/fpv-def15f90bf27) | 2.0 | 25 |
| <a href="https://goodcase.ai/cases/vlog-065189cb9adb"><img src="https://media.goodcase.ai/media/poster/vlog-065189cb9adb.jpg" width="160" alt="电影感滑翔伞旅行 Vlog"></a> | [电影感滑翔伞旅行 Vlog](https://goodcase.ai/cases/vlog-065189cb9adb) | 2.0 | 17 |
| <a href="https://goodcase.ai/cases/seedance-2-5-f1696dad13bc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-f1696dad13bc.jpg" width="160" alt="Seedance 2.5 悬崖翼装跳伞环海一镜到底"></a> | [Seedance 2.5 悬崖翼装跳伞环海一镜到底](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) | 2.5 | 13 |
| <a href="https://goodcase.ai/cases/fpv-cd4a852a53ba"><img src="https://media.goodcase.ai/media/poster/fpv-cd4a852a53ba.jpg" width="160" alt="纽约 FPV 无人机飞行"></a> | [纽约 FPV 无人机飞行](https://goodcase.ai/cases/fpv-cd4a852a53ba) | 2.0 | 3 |

---

[← 上一个：手持 UGC vlog](./handheld-ugc-vlog.md) · [下一个：早年 DV 家庭录像 →](./retro-found-footage.md)
