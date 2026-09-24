**English** | [中文](../zh/storyboard-grid-to-video.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 🧱 Storyboard grid to video

> Two stages: first a single-page sheet of numbered panels from an image model, then that sheet fed to Seedance as the reference. The sheet owns order, framing and timing, and the video prompt only has to connect the panels.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/real-case-06-aimikoda"><img src="https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg" width="200" alt="Meilin-Element Kung Fu Performance"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/real-case-07-techiebysa"><img src="https://media.goodcase.ai/media/poster/real-case-07-techiebysa.jpg" width="200" alt="French Croissant-Making Process"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c"><img src="https://media.goodcase.ai/cases/a4fc7d20210a.jpg" width="200" alt="Survival Run Through a Collapsing Kuala Lumpur"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/apartment-arrival-storyboard-animation"><img src="https://media.goodcase.ai/media/poster/apartment-arrival-storyboard-animation.jpg" width="200" alt="Apartment Arrival Storyboard Animation"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want to make the storyboard sheet first and then turn it into video. [The story: a stray cat finding its way home through a rainy night, in 9 panels.] [Pixar-style 3D look, 15 seconds total.] Using the prompt template below, write both prompts for me: first the one that generates the storyboard sheet, then the Seedance prompt that turns that sheet into video:

#### Storyboard grid to video

Two stages: first a single-page sheet of numbered panels from an image model, then that sheet fed to Seedance as the reference. The sheet owns order, framing and timing, and the video prompt only has to connect the panels.

**Use when:** Multi-shot pieces where you want to see and fix the shot order before spending a generation: recipe sequences, action previs, product commercials, day-in-the-life montages.

**Guidance:**

- Tie panel count to runtime already in the image prompt. The croissant sheet puts `TOTAL VIDEO TIME: 12 SECONDS` and `8 SHOTS` in the header and recounts it in the footer as `8 shots × 1.5s = 12 seconds`.
- Give the two reference images separate jobs. The disaster-run case defines Image1 as `the EXACT main character reference` and Image2 as `the EXACT storyboard design and layout reference`.
- Say plainly which reference wins. The European summer walk writes `Do not copy any pose or layout from the Master Character Set` and hands locations, actions, compositions and sequence to the storyboard.
- Make step two a short list of hard rules. The croissant video prompt lists `Follow the sequence exactly from 1 to 8`, `One shot per panel, approximately 1.5 seconds each` and `No skipped steps`.
- Write each panel as an action plus a shot size, never as a picture. The kung-fu sheet numbers twelve lines like `begin mid-air with a flying diagonal kick already in motion` and requires `Every panel must contain visible motion`.

**Examples:** [#1](https://goodcase.ai/cases/real-case-06-aimikoda) [#2](https://goodcase.ai/cases/real-case-07-techiebysa) [#3](https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c) [#4](https://goodcase.ai/cases/apartment-arrival-storyboard-animation)

**Structure:**

1. Image prompt header: single-page sheet, aspect ratio, panel count, and the drawing style stated as premium storyboard, infographic poster or rough pencil previs
2. Information cards: title, total runtime, number of shots, audio direction, so timing and panel count agree
3. Panel list, one line each: shot size, the action happening in it, and what that panel is for
4. Image prompt tail: the annotation system, and the exclusions such as no timestamps, no extra characters, no watermark
5. Video prompt opening: name which image is the character reference and which is the storyboard, and what each one controls
6. Rule list: follow 1 to N in order, one shot per panel, seconds per shot, no skipped or added steps, character and set stay identical
7. Overall look and close: lighting, camera movement, audio, and the no-subtitle no-watermark tail

**Pitfalls:**

- Baking timecodes into the sheet. Panel timestamps get drawn as artwork and carried into the video; the kung-fu sheet writes `No timestamps` and leaves timing to the rules in step two.
- More panels than the runtime can hold. Work backwards at 1.5 to 3 seconds per panel — the croissant sheet pairs 8 panels with a 12-second video.
- Letting the character sheet and the storyboard fight. The model copies poses off the character sheet; state that the storyboard controls locations, actions, compositions and sequence, and the character sheet only controls the face.
- Panels that describe a picture and no movement. The video comes out as a slideshow; give every panel something already in motion.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (9 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/real-case-06-aimikoda"><img src="https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg" width="160" alt="Meilin-Element Kung Fu Performance"></a> | [Meilin-Element Kung Fu Performance](https://goodcase.ai/cases/real-case-06-aimikoda) | 2.0 | 89 |
| <a href="https://goodcase.ai/cases/real-case-07-techiebysa"><img src="https://media.goodcase.ai/media/poster/real-case-07-techiebysa.jpg" width="160" alt="French Croissant-Making Process"></a> | [French Croissant-Making Process](https://goodcase.ai/cases/real-case-07-techiebysa) | 2.0 | 85 |
| <a href="https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c"><img src="https://media.goodcase.ai/cases/a4fc7d20210a.jpg" width="160" alt="Survival Run Through a Collapsing Kuala Lumpur"></a> | [Survival Run Through a Collapsing Kuala Lumpur](https://goodcase.ai/cases/seedance-create-a-single-page-premium-hollywood-disaster-action-storyboard-in-16-9-wide-7cc2f22eaa0c) | 2.5 | 78 |
| <a href="https://goodcase.ai/cases/apartment-arrival-storyboard-animation"><img src="https://media.goodcase.ai/media/poster/apartment-arrival-storyboard-animation.jpg" width="160" alt="Apartment Arrival Storyboard Animation"></a> | [Apartment Arrival Storyboard Animation](https://goodcase.ai/cases/apartment-arrival-storyboard-animation) | 2.0 | 67 |
| <a href="https://goodcase.ai/cases/seedance-made-with-seedance-2-5-in-1080p-bb09011ebea2"><img src="https://media.goodcase.ai/media/poster/seedance-made-with-seedance-2-5-in-1080p-bb09011ebea2.jpg" width="160" alt="Ultra-Real Summer Home Video From a Master Reference"></a> | [Ultra-Real Summer Home Video From a Master Reference](https://goodcase.ai/cases/seedance-made-with-seedance-2-5-in-1080p-bb09011ebea2) | 2.5 | 66 |
| <a href="https://goodcase.ai/cases/strength04-x-seedance-ai-be4ae9f1e375"><img src="https://media.goodcase.ai/media/poster/strength04-x-seedance-ai-be4ae9f1e375.jpg" width="160" alt="High-Energy Spicy Potato Chips Commercial Storyboard"></a> | [High-Energy Spicy Potato Chips Commercial Storyboard](https://goodcase.ai/cases/strength04-x-seedance-ai-be4ae9f1e375) | 2.5 | 35 |
| <a href="https://goodcase.ai/cases/3d-f194855e4246"><img src="https://media.goodcase.ai/media/poster/3d-f194855e4246.jpg" width="160" alt="3D Baking Animation Sequence"></a> | [3D Baking Animation Sequence](https://goodcase.ai/cases/3d-f194855e4246) | 2.0 | 29 |
| <a href="https://goodcase.ai/cases/vlog-4317b7fdff57"><img src="https://media.goodcase.ai/media/poster/vlog-4317b7fdff57.jpg" width="160" alt="Emotional Kyoto Travel Vlog Animation"></a> | [Emotional Kyoto Travel Vlog Animation](https://goodcase.ai/cases/vlog-4317b7fdff57) | 2.0 | 4 |
| <a href="https://goodcase.ai/cases/case-749c98da9b7d"><img src="https://media.goodcase.ai/media/poster/case-749c98da9b7d.jpg" width="160" alt="Pixar-Style Milkshake Storyboard Animation"></a> | [Pixar-Style Milkshake Storyboard Animation](https://goodcase.ai/cases/case-749c98da9b7d) | 2.0 | 2 |

---

[← Previous: Reference image identity lock](./character-reference-lock.md) · [Next: Handheld UGC vlog →](./handheld-ugc-vlog.md)
