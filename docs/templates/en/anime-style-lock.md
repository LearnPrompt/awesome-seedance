**English** | [中文](../zh/anime-style-lock.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 🎨 Anime and stylized style lock

> Specify the drawing style as measurable parameters, then attach an exclusion list of the neighbouring styles it must not fall into. Without the exclusion list, anime collapses into a generic 3D face.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-a9ab0266f96a"><img src="https://media.goodcase.ai/media/poster/case-a9ab0266f96a.jpg" width="200" alt="Cinematic Futuristic Anime Sword Duel"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-a45446378e2a"><img src="https://media.goodcase.ai/media/poster/case-a45446378e2a.jpg" width="200" alt="Ghibli-Style Forest Cooking Animation"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-c32e6c3bb2c5"><img src="https://media.goodcase.ai/media/poster/case-c32e6c3bb2c5.jpg" width="200" alt="Cinematic Anime Magic-Sword Battle"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-ce63bf146d4e"><img src="https://media.goodcase.ai/media/poster/case-ce63bf146d4e.jpg" width="200" alt="Japanese Anime-Style Mapo Tofu Cooking Process"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want an animated clip whose art style stays locked. [Style: 1990s cel-shaded Japanese animation; I am sending you style references.] [Content: a girl on a broomstick gliding over a seaside town at dusk.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### Anime and stylized style lock

Specify the drawing style as measurable parameters, then attach an exclusion list of the neighbouring styles it must not fall into. Without the exclusion list, anime collapses into a generic 3D face.

**Use when:** Cel-look action, Ghibli-flavoured slice of life, 3D toon RPG battles, 2D hand-drawn cooking. Roughly a quarter of the corpus is stylized animation of some kind.

**Guidance:**

- Write the style as parameters: thin coloured contour lines, two to three steps of cel shading with translucent mid-shadow, multi-layer highlights in irises and hair, and distinct reflectance and roughness for cloth, leather, metal, gems, wet floor and glass.
- Always attach the exclusion list. The anime duel case rules out thick black outlines, flat single-layer cel shadow, low-budget TV-anime look, generic 3D pretty-girl face, smooth plastic CG, semi-photoreal, photoreal, low-density backgrounds and muddy colour.
- Extract a signature colour set per character from the reference — main colour, support colour, accent colour, material motif — name them and forbid trading them between characters.
- Push the background one step darker than the characters and use each character's signature colour as their key light and shadow tint. This is what reads as 2D rather than as rendered 3D.
- For healing-genre Ghibli work, subtract motion instead of adding it. The forest cooking case shows only a pair of hands, no faces at all, and covers gathering, slicing, simmering and serving in four shots.

**Examples:** [#1](https://goodcase.ai/cases/case-a9ab0266f96a) [#2](https://goodcase.ai/cases/case-a45446378e2a) [#3](https://goodcase.ai/cases/case-c32e6c3bb2c5) [#4](https://goodcase.ai/cases/case-ce63bf146d4e)

**Structure:**

1. Style lock block: line weight, number of cel shading steps, highlight layering, per-material reflectance
2. Exclusion list: the adjacent styles that must not appear
3. Character and palette lock: signature colours pulled from the reference, forbidden from swapping between characters
4. Stage and atmosphere: how the environment is re-tinted toward the character palette
5. Camera order and action

**Pitfalls:**

- Writing anime style without naming a school. The model averages across everything it knows and returns a generic face.
- Mixing 2D hand-drawn vocabulary with 3D toon-render vocabulary. They are two different word sets and blending them lands on semi-photoreal.
- Fast action degrading cel shadow into realistic lighting. Restate the shading spec inside the high-speed segments.
- Letting text, logos or UI appear in the scene. Anime backgrounds attract garbled signage unless it is banned outright.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (25 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/2d-38a41133eab1"><img src="https://media.goodcase.ai/media/poster/2d-38a41133eab1.jpg" width="160" alt="Hand-Drawn 2D Japanese Bakery Animation"></a> | [Hand-Drawn 2D Japanese Bakery Animation](https://goodcase.ai/cases/2d-38a41133eab1) | 2.0 | 90 |
| <a href="https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55"><img src="https://media.goodcase.ai/cases/34deb8da196d.jpg" width="160" alt="Seedance Two-Character 2D Anime: Little Kite"></a> | [Seedance Two-Character 2D Anime: Little Kite](https://goodcase.ai/cases/lianaalane-seedance-ai-d70d42733c55) | 2.0 | 89 |
| <a href="https://goodcase.ai/cases/sairah-0-seedance-ai-19e5d269c3e0"><img src="https://media.goodcase.ai/media/poster/sairah-0-seedance-ai-19e5d269c3e0.jpg" width="160" alt="GPT Image 2 + Seedance Live Action Meets 2D Animation"></a> | [GPT Image 2 + Seedance Live Action Meets 2D Animation](https://goodcase.ai/cases/sairah-0-seedance-ai-19e5d269c3e0) | 2.5 | 78 |
| <a href="https://goodcase.ai/cases/aiwithlariab-seedance-ai-801301860e89"><img src="https://media.goodcase.ai/media/poster/aiwithlariab-seedance-ai-801301860e89.jpg" width="160" alt="Seedance Ghibli-Style Comfort Cooking Animation"></a> | [Seedance Ghibli-Style Comfort Cooking Animation](https://goodcase.ai/cases/aiwithlariab-seedance-ai-801301860e89) | 2.0 | 71 |
| <a href="https://goodcase.ai/cases/seedance-create-an-explosive-motion-graphics-driven-character-reveal-trailer-in-16-9-e-97abc37074ae"><img src="https://media.goodcase.ai/media/poster/seedance-create-an-explosive-motion-graphics-driven-character-reveal-trailer-in-16-9-e-97abc37074ae.jpg" width="160" alt="Explosive Motion-Graphics Character Reveal Trailer"></a> | [Explosive Motion-Graphics Character Reveal Trailer](https://goodcase.ai/cases/seedance-create-an-explosive-motion-graphics-driven-character-reveal-trailer-in-16-9-e-97abc37074ae) | 2.0 | 61 |
| <a href="https://goodcase.ai/cases/vlog-9e1f21c2fdf5"><img src="https://media.goodcase.ai/media/poster/vlog-9e1f21c2fdf5.jpg" width="160" alt="Mixed-Reality Home Vlog Animation"></a> | [Mixed-Reality Home Vlog Animation](https://goodcase.ai/cases/vlog-9e1f21c2fdf5) | 2.0 | 60 |
| <a href="https://goodcase.ai/cases/seedance-created-a-video-in-soft-anime-style-of-a-fluffy-white-cat-with-big-sparkling-te-5d65967aaf57"><img src="https://media.goodcase.ai/media/poster/seedance-created-a-video-in-soft-anime-style-of-a-fluffy-white-cat-with-big-sparkling-te-5d65967aaf57.jpg" width="160" alt="Soft Anime Morning With a Fluffy White Cat"></a> | [Soft Anime Morning With a Fluffy White Cat](https://goodcase.ai/cases/seedance-created-a-video-in-soft-anime-style-of-a-fluffy-white-cat-with-big-sparkling-te-5d65967aaf57) | 2.0 | 58 |
| <a href="https://goodcase.ai/cases/seedance-a-stylish-young-woman-wearing-a-bright-green-bomber-jacket-a-colorful-striped-2da70cbfbb51"><img src="https://media.goodcase.ai/cases/f92558c80a30.jpg" width="160" alt="Finger-Snap Journey Between Anime and Reality on a Tokyo Platform"></a> | [Finger-Snap Journey Between Anime and Reality on a Tokyo Platform](https://goodcase.ai/cases/seedance-a-stylish-young-woman-wearing-a-bright-green-bomber-jacket-a-colorful-striped-2da70cbfbb51) | 2.5 | 51 |
| <a href="https://goodcase.ai/cases/case-e7dccea90d44"><img src="https://media.goodcase.ai/media/poster/case-e7dccea90d44.jpg" width="160" alt="Animated Forest Picnic Scene"></a> | [Animated Forest Picnic Scene](https://goodcase.ai/cases/case-e7dccea90d44) | 2.0 | 39 |
| <a href="https://goodcase.ai/cases/case-30f9477f562c"><img src="https://media.goodcase.ai/media/poster/case-30f9477f562c.jpg" width="160" alt="Animated Pirate Action Sequence"></a> | [Animated Pirate Action Sequence](https://goodcase.ai/cases/case-30f9477f562c) | 2.0 | 34 |
| <a href="https://goodcase.ai/cases/starbucks-739b454ab5c1"><img src="https://media.goodcase.ai/media/poster/starbucks-739b454ab5c1.jpg" width="160" alt="Ghibli-Style Starbucks Ad"></a> | [Ghibli-Style Starbucks Ad](https://goodcase.ai/cases/starbucks-739b454ab5c1) | 2.0 | 30 |
| <a href="https://goodcase.ai/cases/case-5c32e2bac894"><img src="https://media.goodcase.ai/media/poster/case-5c32e2bac894.jpg" width="160" alt="Glitch Art Multi-Dimensional Face Transformation"></a> | [Glitch Art Multi-Dimensional Face Transformation](https://goodcase.ai/cases/case-5c32e2bac894) | 2.0 | 26 |

The other 13 are in the [full gallery](../../gallery.md) and on [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance).

---

[← Previous: Horror and suspense](./horror-suspense.md) · [Next: Stop motion and stepped cadence →](./stop-motion-cadence.md)
