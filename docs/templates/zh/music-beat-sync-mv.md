[English](../en/music-beat-sync-mv.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 💥 音乐卡点 MV

> 从 BPM 推出节拍锚点，把每一次剪辑、甩发和队形变化钉在真实重拍上，再把伴舞约束住，别让他们抢走视觉中心。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop"><img src="https://media.goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop/poster.jpg" width="200" alt="单人 K-POP MV · Y2K 糖果世界逐秒分镜"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol"><img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="200" alt="双人 K-pop MV 逐镜分镜"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-k-pop-87e2d00e2fe8.jpg" width="200" alt="Seedance 2.5 涩谷街头K-pop舞蹈同步字幕"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/vibrant-k-pop-stage-performance"><img src="https://media.goodcase.ai/media/poster/vibrant-k-pop-stage-performance.jpg" width="200" alt="Vibrant K-pop Stage Performance"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条卡点音乐 MV，【曲风是：K-pop 舞曲，节奏大约每分钟 120 拍】，【艺人形象是：银色短发的女 solo 歌手，未来感舞台服】，音频或歌词我会一起发给你。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 音乐卡点 MV

从 BPM 推出节拍锚点，把每一次剪辑、甩发和队形变化钉在真实重拍上，再把伴舞约束住，别让他们抢走视觉中心。

**适用场景:** K-pop MV、翻跳、卡点健身剪辑、俱乐部演出片段。带音频锚点的写法只在 Seedance 2.5 上用，它接受音轨作为输入模态。

**要点:**

- 先算节拍间隔再写镜头。Y2K 那条写约 128 BPM、每拍约 0.469 秒，然后列了九个命名锚点——2.78 秒第一个强重拍、6.06 秒第一次换景、14.02 秒能量下降、21.07 秒高潮副歌、24.82 秒音乐抽空——并把每次剪辑、甩发、转身和队形变化都钉上去。
- 伴舞按人数和权限双重约束：允许二到六名，不给面部特写、不对口型、不遮挡主角、不成为第二视觉中心。
- 队形写成几何：V 字行进、横排、菱形、对称半圆，并写清主角在每种队形里站哪。
- 字幕单独一块规则——粗体窄体展示字、位置在上三分之一或侧边、不压脸和手、随拍快速淡入或滑入、同一时间只有一行。
- 结尾用一个跟末音同步的物理硬停（翻盖手机啪地合上、灯瞬间灭），并禁止淡出、延长尾音和多余的结束镜头。

**示例:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

**结构:**

1. 音源声明：用哪条音轨，以及禁止重新生成、变速和自动淡出
2. BPM 与一份带时间戳的命名节拍锚点清单
3. 逐段编舞与队形
4. 服装与身份锁，外加伴舞人数上限
5. 字幕排版规则，如果有字上屏
6. 用一个物理动作硬收

**常见坑:**

- 不声明音源。模型会自己编一段背景音乐，口型也跟着乱。
- 伴舞穿得跟主角太像。主角的颜色要最饱和，位置离镜头最近。
- 身份漂移集中在高能量舞蹈段。要专门在那些段里重申同一张脸。
- 同一拍里既要复杂编舞又要复杂运镜。一拍给一样，另一样保持稳定。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 12 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol"><img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="160" alt="双人 K-pop MV 逐镜分镜"></a> | [双人 K-pop MV 逐镜分镜](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) | 2.5 | 98 |
| <a href="https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop"><img src="https://media.goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop/poster.jpg" width="160" alt="单人 K-POP MV · Y2K 糖果世界逐秒分镜"></a> | [单人 K-POP MV · Y2K 糖果世界逐秒分镜](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) | 2.5 | 85 |
| <a href="https://goodcase.ai/cases/cyberpunk-holographic-dance-performance"><img src="https://media.goodcase.ai/cases/5ee3737281f4.jpg" width="160" alt="Cyberpunk Holographic Dance Performance"></a> | [Cyberpunk Holographic Dance Performance](https://goodcase.ai/cases/cyberpunk-holographic-dance-performance) | 2.5 | 84 |
| <a href="https://goodcase.ai/cases/vibrant-k-pop-stage-performance"><img src="https://media.goodcase.ai/media/poster/vibrant-k-pop-stage-performance.jpg" width="160" alt="Vibrant K-pop Stage Performance"></a> | [Vibrant K-pop Stage Performance](https://goodcase.ai/cases/vibrant-k-pop-stage-performance) | 2.0 | 82 |
| <a href="https://goodcase.ai/cases/seedance-a-cinematic-k-pop-dance-performance-on-a-futuristic-dark-stage-illuminated-by-v-a713463472c6"><img src="https://media.goodcase.ai/media/poster/seedance-a-cinematic-k-pop-dance-performance-on-a-futuristic-dark-stage-illuminated-by-v-a713463472c6.jpg" width="160" alt="霓虹未来舞台K-pop劲舞"></a> | [霓虹未来舞台K-pop劲舞](https://goodcase.ai/cases/seedance-a-cinematic-k-pop-dance-performance-on-a-futuristic-dark-stage-illuminated-by-v-a713463472c6) | 2.0 | 66 |
| <a href="https://goodcase.ai/cases/iphone-shot-street-dance-music-video"><img src="https://media.goodcase.ai/cases/16039c423213.jpg" width="160" alt="iPhone-shot Street Dance Music Video"></a> | [iPhone-shot Street Dance Music Video](https://goodcase.ai/cases/iphone-shot-street-dance-music-video) | 2.0 | 32 |
| <a href="https://goodcase.ai/cases/case-887d0484c2ce"><img src="https://media.goodcase.ai/media/poster/case-887d0484c2ce.jpg" width="160" alt="可口可乐时尚转场广告"></a> | [可口可乐时尚转场广告](https://goodcase.ai/cases/case-887d0484c2ce) | 2.0 | 26 |
| <a href="https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-k-pop-87e2d00e2fe8.jpg" width="160" alt="Seedance 2.5 涩谷街头K-pop舞蹈同步字幕"></a> | [Seedance 2.5 涩谷街头K-pop舞蹈同步字幕](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) | 2.5 | 22 |
| <a href="https://goodcase.ai/cases/case-24775a8dc979"><img src="https://media.goodcase.ai/media/poster/case-24775a8dc979.jpg" width="160" alt="音乐视频编舞与身份设定"></a> | [音乐视频编舞与身份设定](https://goodcase.ai/cases/case-24775a8dc979) | 2.0 | 8 |
| <a href="https://goodcase.ai/cases/case-3ab1709b8447"><img src="https://media.goodcase.ai/media/poster/case-3ab1709b8447.jpg" width="160" alt="现代舞室音乐视频"></a> | [现代舞室音乐视频](https://goodcase.ai/cases/case-3ab1709b8447) | 2.0 | 3 |
| <a href="https://goodcase.ai/cases/dj-0f7bed87d7ec"><img src="https://media.goodcase.ai/media/poster/dj-0f7bed87d7ec.jpg" width="160" alt="动漫 DJ 女孩俱乐部表演"></a> | [动漫 DJ 女孩俱乐部表演](https://goodcase.ai/cases/dj-0f7bed87d7ec) | 2.0 | 1 |
| <a href="https://goodcase.ai/cases/doc3-kpop-mv-real-person"><img src="https://media.goodcase.ai/supabase-legacy/case-media/carl-posters/doc3-kpop-mv-real-person.jpg" width="160" alt="真人拼贴杂志风 K-pop 女团 MV"></a> | [真人拼贴杂志风 K-pop 女团 MV](https://goodcase.ai/cases/doc3-kpop-mv-real-person) | 2.5 | - |

---

[← 上一个：打斗编排](./combat-choreography.md) · [下一个：时间冻结与倒放奇观 →](./time-freeze-rewind.md)
