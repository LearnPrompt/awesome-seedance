**English** | [中文](../zh/timeline-shot-script.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 🧱 Second-by-second timeline script

> Split the clip into contiguous timed segments, each carrying one shot type, one main action and its own sound line. The single most load-bearing structure in the corpus.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-vlog-30-3b85f315bb08.jpg" width="200" alt="Seedance 2.5 Realistic Cycling Vlog: 30-Second Action Cam + Front Camera + Tracking Shot Edit"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-3f70c2f28d22.jpg" width="200" alt="Seedance 2.5 Storm Harbor Disaster Movie Sequence"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-f3651857750b"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-f3651857750b.jpg" width="200" alt="Seedance 2.5 Maldives Cycling Documentary in One Long Take"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt"><img src="https://media.goodcase.ai/media/poster/boa-hancock-water-obstacle-race-prompt.jpg" width="200" alt="Boa Hancock Water Obstacle Race Prompt"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want to make a clip scripted second by second. [It shows: a courier delivering the last order of the night through neon-lit rain.] [Total length 15 seconds, vertical 9:16.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### Second-by-second timeline script

Split the clip into contiguous timed segments, each carrying one shot type, one main action and its own sound line. The single most load-bearing structure in the corpus.

**Use when:** Any clip longer than about 8 seconds, or any clip where a specific thing must happen at a specific moment. 63 of 207 cases (30%) use timed segments, and the share rises to 45% among Seedance 2.5 cases.

**Guidance:**

- Keep segments 2-5 seconds. Documentary tracking runs 2s per beat, ads run 3s, and an audio-locked MV can go down to sub-second anchors. The shorter the segment, the more it needs a visible action verb rather than a mood adjective.
- Write closed intervals that touch end to end (`0-4s` then `4-8s`) and make them sum to the stated duration. Declaring 30 seconds but listing only 24 makes the model stretch the last beat to fill the gap.
- Give each segment exactly one main action. Two actions in one segment get half-finished at both ends because the model splits the time evenly.
- Hand state over between segments explicitly. The bodycam raid case writes three lines per stage — opening state, main event, ending state — and starts each new stage with a carry-over line naming the same team, same gear, no cut.
- Put camera terminology in English inside the segment header parentheses (Ground-level Low Angle, Dynamic Tracking, Handlebar POV) and keep the prose in your working language. Mixed headers hold better than fully translated ones.

**Examples:** [#1](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) [#2](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) [#3](https://goodcase.ai/cases/seedance-2-5-f3651857750b) [#4](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt)

**Structure:**

1. Global block: duration, aspect ratio, frame rate, overall style and image-quality vocabulary
2. Fixed block: characters, wardrobe, props and location that stay unchanged for the whole clip
3. Timeline block: one segment per beat, headed `[00:00-00:04] Shot 1: Ground-level Low Angle`, then frame content, action, detail, sound
4. Global constraint block: negative list and hard limits, placed after the timeline

**Pitfalls:**

- Writing a total duration without segments. Half the corpus states a duration but only 30% segments it, and the un-segmented half visibly drifts after roughly six seconds.
- Repeating wardrobe and hairstyle inside every segment. Restating identity per beat triggers appearance mutation between beats; state it once in the fixed block and add a whole-clip lock line.
- Timing to 0.01s precision without an audio input. Text-only generation resolves to about 0.5s, so finer numbers only add noise.
- Burying the negative list inside a segment. Hard limits belong in one block at the end so they apply to the whole clip.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (4 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt"><img src="https://media.goodcase.ai/media/poster/boa-hancock-water-obstacle-race-prompt.jpg" width="160" alt="Boa Hancock Water Obstacle Race Prompt"></a> | [Boa Hancock Water Obstacle Race Prompt](https://goodcase.ai/cases/boa-hancock-water-obstacle-race-prompt) | 2.5 | 88 |
| <a href="https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-3f70c2f28d22.jpg" width="160" alt="Seedance 2.5 Storm Harbor Disaster Movie Sequence"></a> | [Seedance 2.5 Storm Harbor Disaster Movie Sequence](https://goodcase.ai/cases/seedance-2-5-3f70c2f28d22) | 2.5 | 34 |
| <a href="https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-vlog-30-3b85f315bb08.jpg" width="160" alt="Seedance 2.5 Realistic Cycling Vlog: 30-Second Action Cam + Front Camera + Tracking Shot Edit"></a> | [Seedance 2.5 Realistic Cycling Vlog: 30-Second Action Cam + Front Camera + Tracking Shot Edit](https://goodcase.ai/cases/seedance-2-5-vlog-30-3b85f315bb08) | 2.5 | 32 |
| <a href="https://goodcase.ai/cases/seedance-2-5-f3651857750b"><img src="https://media.goodcase.ai/media/poster/seedance-2-5-f3651857750b.jpg" width="160" alt="Seedance 2.5 Maldives Cycling Documentary in One Long Take"></a> | [Seedance 2.5 Maldives Cycling Documentary in One Long Take](https://goodcase.ai/cases/seedance-2-5-f3651857750b) | 2.5 | 31 |

---

[Next: Reference image identity lock →](./character-reference-lock.md)
