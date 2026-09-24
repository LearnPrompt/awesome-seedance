**English** | [中文](../zh/character-reference-lock.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 🧱 Reference image identity lock

> Name every reference with a stable token, enumerate what to inherit from it, and separately enumerate what must not be inherited. The inherit-nothing-else clause is what separates working locks from broken ones.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b"><img src="https://media.goodcase.ai/cases/d0baab1d99c4.jpg" width="200" alt="Seedance 2.5 Multi-Reference Character Lock Short"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42"><img src="https://media.goodcase.ai/media/poster/liyue-ai-seedance-ai-dd263958ed42.jpg" width="200" alt="Seedance 2.5 Boyfriend-POV Couple Short with an Authentic Handheld Phone Look"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-79acf1a3e8a6"><img src="https://media.goodcase.ai/media/poster/case-79acf1a3e8a6.jpg" width="200" alt="High-Quality Anime Swimsuit Video"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-ui-228cf63ce8ff.jpg" width="200" alt="Seedance 2.5 Spider Anti-Hero Character Select UI Animation"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want a clip where the character looks the same from start to finish. [I am sending you 2 reference images: a young woman with short hair and thin-framed glasses.] [What she does: browses a bookshop, looks up and smiles at the camera.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### Reference image identity lock

Name every reference with a stable token, enumerate what to inherit from it, and separately enumerate what must not be inherited. The inherit-nothing-else clause is what separates working locks from broken ones.

**Use when:** Any clip where a face, an outfit, a product or a UI layout must survive across shots. Applies to Seedance 2.0 and 2.5 alike; 2.5 additionally accepts audio and video references under the same token scheme.

**Guidance:**

- Split references by role and lock each separately. The GoPro fishing case declares `@location1` for the river and `@hands1` for the forearms, tools and bottle, each followed by `100% matches reference`.
- Enumerate the inherit list instead of writing keep her consistent. The boyfriend-POV case lists thirteen items: identity, features, face shape, skin tone, apparent age, hairstyle, hair colour, height, build, body proportion, clothing, footwear, overall bearing.
- Always add the do-not-inherit clause. Without it the reference's background, pose and lighting come along; the anime duel case spells out that the reference's background, room, furniture, text, split layout, pose, angle and framing must not be reproduced.
- For a UI or scene reference, separate composition lock from design lock. The character-select case marks `@image1` as LOCKED SCENE COMPOSITION and `@image2` through `@image6` as design-only, then adds DO NOT reproduce their reference poses.
- Identity drifts hardest during head turns, occlusion and fast motion. List those poses explicitly and restate the same-face requirement for the high-energy segments.

**Examples:** [#1](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) [#2](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) [#3](https://goodcase.ai/cases/case-79acf1a3e8a6) [#4](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff)

**Structure:**

1. Token declaration: give each reference a name — `@image1`, `@Image2`, `<<<image_1>>>`, `@location1`, `@hands1` — and reuse it verbatim everywhere
2. Inherit list: enumerated attributes pulled from the reference (face shape, features, hair colour, body proportions, wardrobe items, accessories)
3. Do-not-inherit list: background, room, furniture, pose, composition, framing, original lighting, any text
4. Cross-shot clause: same face when turning, looking down, speaking, or with a hand near the face
5. Negative: no cloning, no duplicates, no feature averaging, no attribute swaps between characters

**Pitfalls:**

- Uploading a reference without any textual lock. The model then treats it as a style reference, not an identity reference.
- Compressing wardrobe into same outfit. Every working case in the corpus breaks the outfit into individually named garments and accessories.
- Feeding a sketch or illustration reference without a render instruction. Add use only as design blueprints, render as fully realistic live-action humans, or the line-art survives into the video.
- Adding references that no token names. Each unnamed extra image is one more chance for attributes to bleed between subjects.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (5 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b"><img src="https://media.goodcase.ai/cases/d0baab1d99c4.jpg" width="160" alt="Seedance 2.5 Multi-Reference Character Lock Short"></a> | [Seedance 2.5 Multi-Reference Character Lock Short](https://goodcase.ai/cases/elsasofia-ai-seedance-ai-e087ab2aed4b) | 2.5 | 68 |
| <a href="https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42"><img src="https://media.goodcase.ai/media/poster/liyue-ai-seedance-ai-dd263958ed42.jpg" width="160" alt="Seedance 2.5 Boyfriend-POV Couple Short with an Authentic Handheld Phone Look"></a> | [Seedance 2.5 Boyfriend-POV Couple Short with an Authentic Handheld Phone Look](https://goodcase.ai/cases/liyue-ai-seedance-ai-dd263958ed42) | 2.5 | 39 |
| <a href="https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-ui-228cf63ce8ff.jpg" width="160" alt="Seedance 2.5 Spider Anti-Hero Character Select UI Animation"></a> | [Seedance 2.5 Spider Anti-Hero Character Select UI Animation](https://goodcase.ai/cases/seedance-2-5-ui-228cf63ce8ff) | 2.5 | 12 |
| <a href="https://goodcase.ai/cases/case-79acf1a3e8a6"><img src="https://media.goodcase.ai/media/poster/case-79acf1a3e8a6.jpg" width="160" alt="High-Quality Anime Swimsuit Video"></a> | [High-Quality Anime Swimsuit Video](https://goodcase.ai/cases/case-79acf1a3e8a6) | 2.0 | 7 |
| <a href="https://goodcase.ai/cases/4k-seedance-2-0-reference-to-video"><img src="https://media.goodcase.ai/media/poster/4k-seedance-2-0-reference-to-video.jpg" width="160" alt="4K Seedance 2.0 - Reference to Video"></a> | [4K Seedance 2.0 - Reference to Video](https://goodcase.ai/cases/4k-seedance-2-0-reference-to-video) | 2.0 | - |

---

[← Previous: Second-by-second timeline script](./timeline-shot-script.md) · [Next: Storyboard grid to video →](./storyboard-grid-to-video.md)
