**English** | [中文](../zh/music-beat-sync-mv.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 💥 Beat-synced music video

> Derive beat anchors from BPM, pin every cut, hair flip and formation change to a real downbeat, and constrain the backup dancers so they never steal the visual centre.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop"><img src="https://media.goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop/poster.jpg" width="200" alt="Solo K-POP MV · Second-by-Second Y2K Candy World Storyboard"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol"><img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="200" alt="Two-Idol K-pop MV, Shot by Shot"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-k-pop-87e2d00e2fe8.jpg" width="200" alt="Seedance 2.5 Shibuya K-Pop Dance With Beat-Synced Subs"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/vibrant-k-pop-stage-performance"><img src="https://media.goodcase.ai/media/poster/vibrant-k-pop-stage-performance.jpg" width="200" alt="Vibrant K-pop Stage Performance"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want a beat-synced music video. [Genre: K-pop dance track, around 120 BPM.] [The artist: a female soloist with short silver hair in a futuristic stage outfit.] I will send you the audio or lyrics as well. Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### Beat-synced music video

Derive beat anchors from BPM, pin every cut, hair flip and formation change to a real downbeat, and constrain the backup dancers so they never steal the visual centre.

**Use when:** K-pop MVs, dance covers, beat-cut fitness edits and club performance clips. Use the audio-anchored variant only on Seedance 2.5, which accepts an audio track as an input modality.

**Guidance:**

- Compute the beat interval before writing shots. The Y2K MV states roughly 128 BPM with about 0.469s per beat, then lists nine named anchors — first downbeat at 2.78s, first scene change at 6.06s, energy drop at 14.02s, chorus at 21.07s, music cut-out at 24.82s — and pins every cut, hair flip, turn and formation change to them.
- Constrain backup dancers by count and by permission: two to six allowed, no facial close-ups, no lip sync, never occluding the lead, never becoming a second visual centre.
- Write formations as geometry: V-shape queue, horizontal line, diamond, symmetrical semicircle, and state where the lead stands inside each one.
- Give on-screen captions their own rule block — bold condensed display font, upper third or side margin, never over faces or hands, quick fade or slide-in on the beat, one line active at a time.
- End on a physical hard stop synced to the final note (a flip phone snapping shut, lights cutting out), and ban fade-outs, extended tails and extra end cards.

**Examples:** [#1](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) [#2](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) [#3](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) [#4](https://goodcase.ai/cases/vibrant-k-pop-stage-performance)

**Structure:**

1. Audio source declaration: which track, and a ban on regenerating, retiming or fading it
2. BPM and a list of named beat anchors with their timestamps
3. Per-segment choreography and formation
4. Wardrobe and identity lock, plus dancer-count limits
5. Typography rules, if captions are on screen
6. A hard stop on a physical action

**Pitfalls:**

- Not declaring an audio source. The model invents background music and the lip sync drifts with it.
- Dressing backup dancers too close to the lead. Make the lead's colours the most saturated and keep her nearest the camera.
- Identity drift concentrating in the high-energy dance segments. Restate the same-face requirement inside those segments specifically.
- Asking for complex choreography and complex camera movement in the same beat. Give one of them the beat and let the other hold steady.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (12 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol"><img src="https://media.goodcase.ai/media/poster/seedance-25-kpop-mv-dual-idol.jpg" width="160" alt="Two-Idol K-pop MV, Shot by Shot"></a> | [Two-Idol K-pop MV, Shot by Shot](https://goodcase.ai/cases/seedance-25-kpop-mv-dual-idol) | 2.5 | 98 |
| <a href="https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop"><img src="https://media.goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop/poster.jpg" width="160" alt="Solo K-POP MV · Second-by-Second Y2K Candy World Storyboard"></a> | [Solo K-POP MV · Second-by-Second Y2K Candy World Storyboard](https://goodcase.ai/cases/seedance-25-kpop-mv-zero-to-pop) | 2.5 | 85 |
| <a href="https://goodcase.ai/cases/cyberpunk-holographic-dance-performance"><img src="https://media.goodcase.ai/cases/5ee3737281f4.jpg" width="160" alt="Cyberpunk Holographic Dance Performance"></a> | [Cyberpunk Holographic Dance Performance](https://goodcase.ai/cases/cyberpunk-holographic-dance-performance) | 2.5 | 84 |
| <a href="https://goodcase.ai/cases/vibrant-k-pop-stage-performance"><img src="https://media.goodcase.ai/media/poster/vibrant-k-pop-stage-performance.jpg" width="160" alt="Vibrant K-pop Stage Performance"></a> | [Vibrant K-pop Stage Performance](https://goodcase.ai/cases/vibrant-k-pop-stage-performance) | 2.0 | 82 |
| <a href="https://goodcase.ai/cases/seedance-a-cinematic-k-pop-dance-performance-on-a-futuristic-dark-stage-illuminated-by-v-a713463472c6"><img src="https://media.goodcase.ai/media/poster/seedance-a-cinematic-k-pop-dance-performance-on-a-futuristic-dark-stage-illuminated-by-v-a713463472c6.jpg" width="160" alt="Cinematic K-Pop Performance on a Futuristic Dark Stage"></a> | [Cinematic K-Pop Performance on a Futuristic Dark Stage](https://goodcase.ai/cases/seedance-a-cinematic-k-pop-dance-performance-on-a-futuristic-dark-stage-illuminated-by-v-a713463472c6) | 2.0 | 66 |
| <a href="https://goodcase.ai/cases/iphone-shot-street-dance-music-video"><img src="https://media.goodcase.ai/cases/16039c423213.jpg" width="160" alt="iPhone-shot Street Dance Music Video"></a> | [iPhone-shot Street Dance Music Video](https://goodcase.ai/cases/iphone-shot-street-dance-music-video) | 2.0 | 32 |
| <a href="https://goodcase.ai/cases/case-887d0484c2ce"><img src="https://media.goodcase.ai/media/poster/case-887d0484c2ce.jpg" width="160" alt="Coca-Cola Fashion Transition Ad"></a> | [Coca-Cola Fashion Transition Ad](https://goodcase.ai/cases/case-887d0484c2ce) | 2.0 | 26 |
| <a href="https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-k-pop-87e2d00e2fe8.jpg" width="160" alt="Seedance 2.5 Shibuya K-Pop Dance With Beat-Synced Subs"></a> | [Seedance 2.5 Shibuya K-Pop Dance With Beat-Synced Subs](https://goodcase.ai/cases/seedance-2-5-k-pop-87e2d00e2fe8) | 2.5 | 22 |
| <a href="https://goodcase.ai/cases/case-24775a8dc979"><img src="https://media.goodcase.ai/media/poster/case-24775a8dc979.jpg" width="160" alt="Music Video Choreography and Identity Setup"></a> | [Music Video Choreography and Identity Setup](https://goodcase.ai/cases/case-24775a8dc979) | 2.0 | 8 |
| <a href="https://goodcase.ai/cases/case-3ab1709b8447"><img src="https://media.goodcase.ai/media/poster/case-3ab1709b8447.jpg" width="160" alt="Modern Dance Studio Music Video"></a> | [Modern Dance Studio Music Video](https://goodcase.ai/cases/case-3ab1709b8447) | 2.0 | 3 |
| <a href="https://goodcase.ai/cases/dj-0f7bed87d7ec"><img src="https://media.goodcase.ai/media/poster/dj-0f7bed87d7ec.jpg" width="160" alt="Anime DJ Girl Club Performance"></a> | [Anime DJ Girl Club Performance](https://goodcase.ai/cases/dj-0f7bed87d7ec) | 2.0 | 1 |
| <a href="https://goodcase.ai/cases/doc3-kpop-mv-real-person"><img src="https://media.goodcase.ai/supabase-legacy/case-media/carl-posters/doc3-kpop-mv-real-person.jpg" width="160" alt="Live-Action Collage-Magazine-Style K-pop Girl Group MV"></a> | [Live-Action Collage-Magazine-Style K-pop Girl Group MV](https://goodcase.ai/cases/doc3-kpop-mv-real-person) | 2.5 | - |

---

[← Previous: Combat choreography](./combat-choreography.md) · [Next: Time freeze and rewind set piece →](./time-freeze-rewind.md)
