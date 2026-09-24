**English** | [中文](../zh/pov-continuous-take.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 📱 First-person continuous take

> Bodycam, GoPro, FPV and handlebar POV. The camera is mounted on a body, so its motion has to be derived from that body, and every cut has to be declared by hand.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-d68024212dfc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-d68024212dfc.jpg" width="200" alt="Seedance 2.5 Pineapple Pizza Raid in One Bodycam Take"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-gopro-94a73eef1dbf.jpg" width="200" alt="Seedance 2.5 GoPro Fishing to Campfire Cook in One Run"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-f1696dad13bc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-f1696dad13bc.jpg" width="200" alt="Seedance 2.5 Cliff Wingsuit Jump Over the Sea in One Take"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/fpv-cd4a852a53ba"><img src="https://media.goodcase.ai/media/poster/fpv-cd4a852a53ba.jpg" width="200" alt="FPV Drone Flight in New York"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want a first-person clip in one continuous take. [My point of view: riding a mountain bike down a forest trail.] [My hands and the handlebars should stay in frame.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### First-person continuous take

Bodycam, GoPro, FPV and handlebar POV. The camera is mounted on a body, so its motion has to be derived from that body, and every cut has to be declared by hand.

**Use when:** Immersive footage where the viewer is the operator: tactical entry, action sports, cooking from the cook's eyes, drone flight. 32 of 207 cases sit here.

**Guidance:**

- Declare the physical mount and its height so the model can derive the shake: chest-mounted on the point agent, POV chest-to-eye height, moving only with the body.
- Refuse an empty first frame. The GoPro fishing case writes `Non-empty opening frame: already mid-cast, rod raised, line already peeling off the reel`, which removes the dead first second.
- Separate one-take from cutting. Write the cut plan as an explicit list — A 0-9s river, one continuous take, HARD CUT, B 9-21s board, one continuous take — and add that the camera does not cut anywhere else.
- Pin the field of view per segment in degrees (84° easing to 63° through the fight, 63° easing to 18° across the next block) and follow it with `No drift within any segment`.
- Spell out the optical consequences of a body mount: wide-angle distortion at the edges, vertical bob from walking, motion blur on fast head turns, and a flashlight beam that only lights what the operator faces.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) [#2](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) [#3](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) [#4](https://goodcase.ai/cases/fpv-cd4a852a53ba)

**Structure:**

1. SCENE CONTEXT: one paragraph naming the subject, the mount and the total duration
2. ACTIVE REFERENCES: named tokens for location, hands and props
3. LOCATION MAP: what sits in foreground, midground and background per segment, plus camera height
4. FIRST FRAME / BLOCKING: a non-empty opening frame, already mid-action
5. FORMAT MODE: where the hard cuts fall and which stretches are one continuous take
6. OPTICS: field of view per segment, with a no-drift clause
7. Timeline and audio

**Pitfalls:**

- The operator's own face appearing in frame. Add `the camera itself is never visible` and describe only what the hands do.
- Hands entering frame without a left or right assignment. Say which hand holds what, or a third hand grows in.
- Scheduling a large scene jump inside a stretch labelled one continuous take. Either walk there in real time or put a declared hard cut at the boundary.
- Forgetting to ban cinematic treatment. Bodycam and action-cam material needs an explicit `no slow-motion, no cinematic grading` or it turns into a movie trailer.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (11 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-gopro-94a73eef1dbf.jpg" width="160" alt="Seedance 2.5 GoPro Fishing to Campfire Cook in One Run"></a> | [Seedance 2.5 GoPro Fishing to Campfire Cook in One Run](https://goodcase.ai/cases/seedance-2-5-gopro-94a73eef1dbf) | 2.5 | 83 |
| <a href="https://goodcase.ai/cases/seedance-magic-pen-street-transport-vlog-28d80bd05eda"><img src="https://media.goodcase.ai/media/poster/seedance-magic-pen-street-transport-vlog-28d80bd05eda.jpg" width="160" alt="Magic Pen Street Transport Vlog, 2D Over Live Action"></a> | [Magic Pen Street Transport Vlog, 2D Over Live Action](https://goodcase.ai/cases/seedance-magic-pen-street-transport-vlog-28d80bd05eda) | 2.5 | 80 |
| <a href="https://goodcase.ai/cases/first-person-pov-dragon-rider-cinematic"><img src="https://media.goodcase.ai/cases/464939ccd5ab.jpg" width="160" alt="First-Person POV Dragon Rider Cinematic"></a> | [First-Person POV Dragon Rider Cinematic](https://goodcase.ai/cases/first-person-pov-dragon-rider-cinematic) | 2.5 | 74 |
| <a href="https://goodcase.ai/cases/oggii-0-seedance-ai-a473e1b2b456"><img src="https://media.goodcase.ai/media/poster/oggii-0-seedance-ai-a473e1b2b456.jpg" width="160" alt="A Maglev Train Traveling Through History"></a> | [A Maglev Train Traveling Through History](https://goodcase.ai/cases/oggii-0-seedance-ai-a473e1b2b456) | 2.5 | 68 |
| <a href="https://goodcase.ai/cases/seedance-magic-pen-beach-boardwalk-vlog-15-seconds-vertical-9-16-ea4714e1706f"><img src="https://media.goodcase.ai/media/poster/seedance-magic-pen-beach-boardwalk-vlog-15-seconds-vertical-9-16-ea4714e1706f.jpg" width="160" alt="Magic Pen Beach Boardwalk Vlog, Pixel-Art Composited"></a> | [Magic Pen Beach Boardwalk Vlog, Pixel-Art Composited](https://goodcase.ai/cases/seedance-magic-pen-beach-boardwalk-vlog-15-seconds-vertical-9-16-ea4714e1706f) | 2.5 | 50 |
| <a href="https://goodcase.ai/cases/ciri-ai-seedance-ai-5ce4a010eef9"><img src="https://media.goodcase.ai/cases/4b0adb519318.jpg" width="160" alt="Commuter Train Descends into the Depths of Hell"></a> | [Commuter Train Descends into the Depths of Hell](https://goodcase.ai/cases/ciri-ai-seedance-ai-5ce4a010eef9) | 2.5 | 47 |
| <a href="https://goodcase.ai/cases/seedance-2-5-d68024212dfc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-d68024212dfc.jpg" width="160" alt="Seedance 2.5 Pineapple Pizza Raid in One Bodycam Take"></a> | [Seedance 2.5 Pineapple Pizza Raid in One Bodycam Take](https://goodcase.ai/cases/seedance-2-5-d68024212dfc) | 2.5 | 31 |
| <a href="https://goodcase.ai/cases/fpv-def15f90bf27"><img src="https://media.goodcase.ai/media/poster/fpv-def15f90bf27.jpg" width="160" alt="FPV Space Voyage from a Spaceship Cockpit"></a> | [FPV Space Voyage from a Spaceship Cockpit](https://goodcase.ai/cases/fpv-def15f90bf27) | 2.0 | 25 |
| <a href="https://goodcase.ai/cases/vlog-065189cb9adb"><img src="https://media.goodcase.ai/media/poster/vlog-065189cb9adb.jpg" width="160" alt="Cinematic Paragliding Travel Vlog"></a> | [Cinematic Paragliding Travel Vlog](https://goodcase.ai/cases/vlog-065189cb9adb) | 2.0 | 17 |
| <a href="https://goodcase.ai/cases/seedance-2-5-f1696dad13bc"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-f1696dad13bc.jpg" width="160" alt="Seedance 2.5 Cliff Wingsuit Jump Over the Sea in One Take"></a> | [Seedance 2.5 Cliff Wingsuit Jump Over the Sea in One Take](https://goodcase.ai/cases/seedance-2-5-f1696dad13bc) | 2.5 | 13 |
| <a href="https://goodcase.ai/cases/fpv-cd4a852a53ba"><img src="https://media.goodcase.ai/media/poster/fpv-cd4a852a53ba.jpg" width="160" alt="FPV Drone Flight in New York"></a> | [FPV Drone Flight in New York](https://goodcase.ai/cases/fpv-cd4a852a53ba) | 2.0 | 3 |

---

[← Previous: Handheld UGC vlog](./handheld-ugc-vlog.md) · [Next: Early-2000s DV home video →](./retro-found-footage.md)
