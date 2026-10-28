[English](../en/pet-animal.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 📱 宠物动物当主角

> 动物是真正的主角，镜头就交给一台手机。数量锁死成一只，动物只做动物做的事，包袱留给它一步步逼近镜头。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/media/poster/zarairahh-seedance-ai-f89372941867.jpg" width="200" alt="猫咪自拍记录温馨的一天"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-she-thought-it-was-going-to-be-a-peaceful-rainy-day-selfie-f0bf765977dd?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/71d7b3358a28.jpg" width="200" alt="雨天自拍中抢发圈扑镜头的小猫"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-pov-you-wanted-a-cute-mirror-selfie-but-your-dog-wanted-to-be-the-main-charac-3d3e83219d46?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/cases/c7768b152872.jpg" width="200" alt="狗狗抢镜的镜前自拍"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/synthesarah-seedance-ai-636eef3e35c4?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=strip"><img src="https://media.goodcase.ai/media/poster/synthesarah-seedance-ai-636eef3e35c4.jpg" width="200" alt="徒步者与猕猴的歪头较量"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条宠物抢镜的手持自拍视频，【我的宠物是一只胖橘猫，右耳有个小缺口】，【它趁我拍自拍一路爬到肩膀上，最后把鼻子怼到镜头前】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 宠物动物当主角

动物是真正的主角，镜头就交给一台手机。数量锁死成一只，动物只做动物做的事，包袱留给它一步步逼近镜头。

**适用场景:** 猫狗或野生动物抢镜的自拍、vlog 片段，以及靠一个真实动物行为撑起来的写实喜剧。

**要点:**

- 数量写成一个硬数字，并把这一只写成物理连续。狗狗抢镜那条是 `Use exactly ONE small playful dog throughout the entire video`，外加 `No duplicate animal`；小猫 vlog 那条还逐项点名 `consistent fur pattern, eye color, size, whiskers, ears, paws`。
- 给动物单开一段行为规则。猕猴那条写了 ANIMAL BEHAVIOR 块，`No talking, no human clothing, no human-like walking`，笑点全押在猴子跟着徒步者歪头这件事上。
- 真实感用一份相机缺陷清单换。猫咪一日 vlog 要的是 `Natural handheld shake`、`Occasional autofocus hunting`、`Natural front-camera lens distortion`，再禁掉 `No cinematic camera movements`。
- 动作按拍升级，最后落到镜头上。狗狗那条最后一段写 `Its nose fills a large part of the frame`，画面先失焦再找回；雨天小猫那条是爪子伸到镜头角落，片子在笑声里断掉。
- 声音只留现场音。猫咪 vlog 收尾的音频段只列 meows、purring、chirping、footsteps，并写死 `No background music`；狗狗那条写的是 `Natural room ambience only`。

**示例:** [#1](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867) [#2](https://goodcase.ai/cases/seedance-she-thought-it-was-going-to-be-a-peaceful-rainy-day-selfie-f0bf765977dd) [#3](https://goodcase.ai/cases/seedance-pov-you-wanted-a-cute-mirror-selfie-but-your-dog-wanted-to-be-the-main-charac-3d3e83219d46) [#4](https://goodcase.ai/cases/synthesarah-seedance-ai-636eef3e35c4)

**结构:**

1. 参考与主体段：有人出镜就用参考图锁住人，再写死只有一只动物，从头到尾是同一只
2. 格式段：时长、竖屏 9:16、手持前置自拍、室内自然光、不调色不加美颜
3. 相机段：手臂漂移、构图偏一点、自动对焦拉风箱、不剪、不变焦、没有第三方机位
4. 正文按秒切段，每段让动物往前递进一步：注意到、伸爪、抢走、爬肩、扑镜头
5. 人的反应和半句没说完的台词，写在同一拍里
6. 音频段：现场声清单，没有音乐、字幕、水印
7. 严格约束收尾：一个人一只动物、不许出现第二只、镜面物理正确、画面里没有摄影师

**常见坑:**

- 数量留着不写。片子中段会多出第二只动物或者多一个倒影，狗狗那条用 `Exactly one woman. Exactly one dog.` 和 `No duplicate reflection` 把它钉死。
- 让动物说话或者像人一样走路。片子会滑向动画，猕猴那条直接禁掉这些，把笑点压回真实的动物行为。
- 给人写完整长句台词。演员要边笑边念，口型必散，改成被笑打断的半句，像 `You little—` 这种断在一半的。
- 顺手加电影感运镜和调色。手机拍的质感立刻就没了，写上 no cinematic lighting、no color grading、no cuts、no zoom。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 26 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-grandma-is-out-here-for-the-shopping-with-her-pet-sparrow-d6d07e610943?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/8162eeaeac45.jpg" width="160" alt="奶奶与狸猫麻雀逛早市"></a> | [奶奶与狸猫麻雀逛早市](https://goodcase.ai/cases/seedance-grandma-is-out-here-for-the-shopping-with-her-pet-sparrow-d6d07e610943?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 94 |
| <a href="https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/mrdasonx-seedance-ai-ccaa50150259.jpg" width="160" alt="狐狸在森林溪流边自拍漫游"></a> | [狐狸在森林溪流边自拍漫游](https://goodcase.ai/cases/mrdasonx-seedance-ai-ccaa50150259?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 92 |
| <a href="https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/zarairahh-seedance-ai-f89372941867.jpg" width="160" alt="猫咪自拍记录温馨的一天"></a> | [猫咪自拍记录温馨的一天](https://goodcase.ai/cases/zarairahh-seedance-ai-f89372941867?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 87 |
| <a href="https://goodcase.ai/cases/cats-chasing-via-red-mini-motorcycle?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/80df57bc40f6.jpg" width="160" alt="Cats Chasing via Red Mini Motorcycle"></a> | [Cats Chasing via Red Mini Motorcycle](https://goodcase.ai/cases/cats-chasing-via-red-mini-motorcycle?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 80 |
| <a href="https://goodcase.ai/cases/underwater-animal-orchestra?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/media/poster/underwater-animal-orchestra.jpg" width="160" alt="Underwater Animal Orchestra"></a> | [Underwater Animal Orchestra](https://goodcase.ai/cases/underwater-animal-orchestra?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 76 |
| <a href="https://goodcase.ai/cases/seedance-2-5-the-most-unexpected-friendship-in-the-snow-fc70546ac916?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/0d95cc091f2c.jpg" width="160" alt="夕阳雪山中哈士奇与两只兔子的相遇"></a> | [夕阳雪山中哈士奇与两只兔子的相遇](https://goodcase.ai/cases/seedance-2-5-the-most-unexpected-friendship-in-the-snow-fc70546ac916?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 75 |
| <a href="https://goodcase.ai/cases/seedance-2-5-a-high-definition-4k-cinematic-video-of-a-white-and-orange-tabby-cat-sitting-in-1d06290d933c?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/e12da6fb5033.jpg" width="160" alt="夜色敞篷车里，橘白猫为猫狗同伴唱歌"></a> | [夜色敞篷车里，橘白猫为猫狗同伴唱歌](https://goodcase.ai/cases/seedance-2-5-a-high-definition-4k-cinematic-video-of-a-white-and-orange-tabby-cat-sitting-in-1d06290d933c?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 69 |
| <a href="https://goodcase.ai/cases/seedance-she-thought-it-was-going-to-be-a-peaceful-rainy-day-selfie-f0bf765977dd?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/71d7b3358a28.jpg" width="160" alt="雨天自拍中抢发圈扑镜头的小猫"></a> | [雨天自拍中抢发圈扑镜头的小猫](https://goodcase.ai/cases/seedance-she-thought-it-was-going-to-be-a-peaceful-rainy-day-selfie-f0bf765977dd?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 69 |
| <a href="https://goodcase.ai/cases/seedance-pov-you-wanted-a-cute-mirror-selfie-but-your-dog-wanted-to-be-the-main-charac-3d3e83219d46?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/c7768b152872.jpg" width="160" alt="狗狗抢镜的镜前自拍"></a> | [狗狗抢镜的镜前自拍](https://goodcase.ai/cases/seedance-pov-you-wanted-a-cute-mirror-selfie-but-your-dog-wanted-to-be-the-main-charac-3d3e83219d46?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.5 | 67 |
| <a href="https://goodcase.ai/cases/seedance-2-0-30-second-ultra-realistic-cinematic-video-prompt-create-a-heartwarming-funny-c91743ef3579?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/8ef7cfb8f43c.jpg" width="160" alt="女子为巨型布偶猫洗澡吹毛"></a> | [女子为巨型布偶猫洗澡吹毛](https://goodcase.ai/cases/seedance-2-0-30-second-ultra-realistic-cinematic-video-prompt-create-a-heartwarming-funny-c91743ef3579?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 65 |
| <a href="https://goodcase.ai/cases/seedance-created-a-video-a-cinematic-cartoon-style-kitchen-story-featuring-a-curly-red-a64a9ed0a27d?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/6906113b3cd0.jpg" width="160" alt="灰猫误触按钮引发厨房大乱"></a> | [灰猫误触按钮引发厨房大乱](https://goodcase.ai/cases/seedance-created-a-video-a-cinematic-cartoon-style-kitchen-story-featuring-a-curly-red-a64a9ed0a27d?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 63 |
| <a href="https://goodcase.ai/cases/seedance-2-0-create-a-15-second-vertical-9-16-photorealistic-cinematic-video-of-a-cute-orang-ed0d127d5ff9?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases"><img src="https://media.goodcase.ai/cases/5a2683ecf9f3.jpg" width="160" alt="战壕里戴钢盔的橘猫士兵"></a> | [战壕里戴钢盔的橘猫士兵](https://goodcase.ai/cases/seedance-2-0-create-a-15-second-vertical-9-16-photorealistic-cinematic-video-of-a-cute-orang-ed0d127d5ff9?utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) | 2.0 | 61 |

其余 14 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance&utm_medium=github&utm_campaign=templates&utm_content=cases) 上。

---

[← 上一个：早年 DV 家庭录像](./retro-found-footage.md) · [下一个：UGC 口播测评带货 →](./ugc-creator-review.md)
