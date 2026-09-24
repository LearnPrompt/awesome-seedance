[English](../en/product-commercial-shotlist.md) | **中文**

[← 全部分类提示语模板](../../../README_zh.md#-分类提示语模板) · [模板索引](./README.md)

# 🛒 电影级产品广告分镜

> 8 到 20 秒的精修广告：开头写死广告美学，中间是编号或计时的分镜拆解，结尾一个英雄镜头，最后甩一段关键词。

<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/luxury-skincare-commercial"><img src="https://media.goodcase.ai/media/poster/luxury-skincare-commercial.jpg" width="200" alt="奢华护肤品广告"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-e53b614b0f42"><img src="https://media.goodcase.ai/media/poster/case-e53b614b0f42.jpg" width="200" alt="阿马尔菲海岸奢华珠宝广告"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/crimson-cola-99e9ec88e937"><img src="https://media.goodcase.ai/media/poster/crimson-cola-99e9ec88e937.jpg" width="200" alt="复古汽水广告 Crimson Cola"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-7aea1313f63b"><img src="https://media.goodcase.ai/media/poster/case-7aea1313f63b.jpg" width="200" alt="触感剪纸风格产品展示"></a></td>
</tr>
</table>

## 直接复制

点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。

````text
我要做一条电影质感的产品广告，【我的产品是一款哑光黑的无线耳机，产品图片我提供给你】，【想要的调性是：冷峻、科技感、慢节奏】，【时长 10 秒，横屏 16:9】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：

#### 电影级产品广告分镜

8 到 20 秒的精修广告：开头写死广告美学，中间是编号或计时的分镜拆解，结尾一个英雄镜头，最后甩一段关键词。

**适用场景:** 美妆、饮品、珠宝、汽车、香水这类要读成投放级制作、不能读成创作者视频的广告。

**要点:**

- 分镜之前先写广告美学词：premium beauty-commercial aesthetics、luxury advertising aesthetic、变形宽银幕镜头、体积光。它决定后面每个镜头的光线逻辑。
- 每个微距和慢动作都指名拍什么：泡沫质地、液体飘带、钻石色散、金属反光扫过包装。不指名的微距只会给一个通用虚化特写。
- 参考图定义的是终帧构图就直说。剪纸香水那条写 `Use @image1 as the exact final hero-frame composition. Use @image2 as the strict product identity lock`，再在 PRODUCT LOCK 标题下列出瓶身轮廓、几何镂空、内胆、瓶盖和铭牌。
- 上屏文字单独成行并带时段，比如 0-2s 的 `Text: "Cleanse • Refresh • Glow."`，避免它糊满全片。
- 关键词堆在最末尾。散落在分镜之间的风格词会被当成镜头内容读。

**示例:** [#1](https://goodcase.ai/cases/luxury-skincare-commercial) [#2](https://goodcase.ai/cases/case-e53b614b0f42) [#3](https://goodcase.ai/cases/crimson-cola-99e9ec88e937) [#4](https://goodcase.ai/cases/case-7aea1313f63b)

**结构:**

1. 开头段：品类、时长、画幅、广告美学词、调色、景深
2. 英雄产品描述：材质、轮廓、表面处理、光在上面怎么走
3. Shot Breakdown：要么用 `0-2s:` 计时行，要么用 `Shot 1:` 编号行，不要混用
4. 文字与 slogan 行，各自带出现时段
5. Style Keywords 收尾，堆成一个尾块

**常见坑:**

- 指望模型把 logo 或 slogan 渲染干净。留一个干净的收尾帧，字后期合成。
- 把高端广告光和手机 UGC 质感混着写。二选一，混着写会得到塑料感。
- 一拍里堆多种物理效果。液体、烟雾、粉末各占一个镜头。
- 八秒塞八个镜头。单镜低于一秒左右，模型就解析不出单独动作了。
````

## 三步用起来

| 步骤 | 做什么 |
| --- | --- |
| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |
| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |
| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |

## 这一类的案例（已归类 27 条，按热度）

| 预览 | 案例 | 版本 | 热度 |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/juliaevee-seedance-ai-ae713e2e2dbc"><img src="https://media.goodcase.ai/cases/cde7c7488c1e.jpg" width="160" alt="宝石蝎幻化为高跟鞋"></a> | [宝石蝎幻化为高跟鞋](https://goodcase.ai/cases/juliaevee-seedance-ai-ae713e2e2dbc) | 2.0 | 95 |
| <a href="https://goodcase.ai/cases/classic-mustang-golden-hour-drive"><img src="https://media.goodcase.ai/cases/5144aead9488.jpg" width="160" alt="Classic Mustang Golden Hour Drive"></a> | [Classic Mustang Golden Hour Drive](https://goodcase.ai/cases/classic-mustang-golden-hour-drive) | 2.5 | 80 |
| <a href="https://goodcase.ai/cases/shamiweb3-seedance-ai-5620b354e47d"><img src="https://media.goodcase.ai/media/poster/shamiweb3-seedance-ai-5620b354e47d.jpg" width="160" alt="加州落日海滨香水广告"></a> | [加州落日海滨香水广告](https://goodcase.ai/cases/shamiweb3-seedance-ai-5620b354e47d) | 2.0 | 79 |
| <a href="https://goodcase.ai/cases/case-e53b614b0f42"><img src="https://media.goodcase.ai/media/poster/case-e53b614b0f42.jpg" width="160" alt="阿马尔菲海岸奢华珠宝广告"></a> | [阿马尔菲海岸奢华珠宝广告](https://goodcase.ai/cases/case-e53b614b0f42) | 2.0 | 78 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-ultra-photorealistic-cinematic-commercial-for-nike-air-max-c205a472781d"><img src="https://media.goodcase.ai/media/poster/seedance-create-a-30-second-ultra-photorealistic-cinematic-commercial-for-nike-air-max-c205a472781d.jpg" width="160" alt="创意总监极速完成耐克跑鞋广告"></a> | [创意总监极速完成耐克跑鞋广告](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-photorealistic-cinematic-commercial-for-nike-air-max-c205a472781d) | 2.5 | 78 |
| <a href="https://goodcase.ai/cases/case-f62d402ccdf6"><img src="https://media.goodcase.ai/cases/a7f53c61f405.jpg" width="160" alt="手工烘焙坊电影感商业广告"></a> | [手工烘焙坊电影感商业广告](https://goodcase.ai/cases/case-f62d402ccdf6) | 2.5 | 74 |
| <a href="https://goodcase.ai/cases/luxury-skincare-commercial"><img src="https://media.goodcase.ai/media/poster/luxury-skincare-commercial.jpg" width="160" alt="奢华护肤品广告"></a> | [奢华护肤品广告](https://goodcase.ai/cases/luxury-skincare-commercial) | 2.0 | 74 |
| <a href="https://goodcase.ai/cases/caliraval-seedance-ai-380c4c6c543b"><img src="https://media.goodcase.ai/media/poster/caliraval-seedance-ai-380c4c6c543b.jpg" width="160" alt="阳光下的清新洗衣日"></a> | [阳光下的清新洗衣日](https://goodcase.ai/cases/caliraval-seedance-ai-380c4c6c543b) | 2.5 | 73 |
| <a href="https://goodcase.ai/cases/seedance-created-a-30-second-cinematic-luxury-jewelry-advertisement-video-in-a-warm-and-8d47861d9581"><img src="https://media.goodcase.ai/cases/bd48ebbd5b7e.jpg" width="160" alt="晨光中的蓝宝石项链"></a> | [晨光中的蓝宝石项链](https://goodcase.ai/cases/seedance-created-a-30-second-cinematic-luxury-jewelry-advertisement-video-in-a-warm-and-8d47861d9581) | 2.0 | 64 |
| <a href="https://goodcase.ai/cases/seedance-high-end-cosmetic-product-commercial-8k-resolution-cinematic-lighting-studio-88b6d439e00b"><img src="https://media.goodcase.ai/media/poster/seedance-high-end-cosmetic-product-commercial-8k-resolution-cinematic-lighting-studio-88b6d439e00b.jpg" width="160" alt="金色液流环绕的焕亮面霜广告"></a> | [金色液流环绕的焕亮面霜广告](https://goodcase.ai/cases/seedance-high-end-cosmetic-product-commercial-8k-resolution-cinematic-lighting-studio-88b6d439e00b) | 2.5 | 63 |
| <a href="https://goodcase.ai/cases/zyrellix-seedance-ai-cd1e800467b5"><img src="https://media.goodcase.ai/media/poster/zyrellix-seedance-ai-cd1e800467b5.jpg" width="160" alt="地中海悬崖上的茉莉橄榄香氛"></a> | [地中海悬崖上的茉莉橄榄香氛](https://goodcase.ai/cases/zyrellix-seedance-ai-cd1e800467b5) | 2.0 | 62 |
| <a href="https://goodcase.ai/cases/zyrellix-seedance-ai-e5b8b3460bc0"><img src="https://media.goodcase.ai/media/poster/zyrellix-seedance-ai-e5b8b3460bc0.jpg" width="160" alt="暗黑镜面精华液护肤广告"></a> | [暗黑镜面精华液护肤广告](https://goodcase.ai/cases/zyrellix-seedance-ai-e5b8b3460bc0) | 2.0 | 53 |

其余 15 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance) 上。

---

[← 上一个：UGC 口播测评带货](./ugc-creator-review.md) · [下一个：流程与变换蒙太奇 →](./process-transformation-montage.md)
