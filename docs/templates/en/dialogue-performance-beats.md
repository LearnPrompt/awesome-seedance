**English** | [中文](../zh/dialogue-performance-beats.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 🎭 Dialogue and performance beats

> Declare the spoken language, tag the speaker, write the reaction as a causal chain rather than a list of expressions, and close each beat with an explicit end state.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer"><img src="https://media.goodcase.ai/media/poster/youmind-surprise-visit-romance-trailer.jpg" width="200" alt="The Surprise Visit: A Dialogue-Driven Romance Trailer"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-b2d98861daf9.jpg" width="200" alt="Seedance Fifteen-Second Gym Vlog With Continuous Dialogue"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-1f8136a9893a"><img src="https://media.goodcase.ai/media/poster/case-1f8136a9893a.jpg" width="200" alt="Emotionally Expressive Japanese-Dialogue Animation"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/case-a845e1418b39"><img src="https://media.goodcase.ai/media/poster/case-a845e1418b39.jpg" width="200" alt="Showa-Era Retro Living Room Scene"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want an acted scene with dialogue. [Characters: two former lovers meeting again in a cafe on a rainy night.] [Lines: He says, you have not changed. She says, neither have you.] [The mood moves from guarded to softening.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### Dialogue and performance beats

Declare the spoken language, tag the speaker, write the reaction as a causal chain rather than a list of expressions, and close each beat with an explicit end state.

**Use when:** Whenever a line has to be heard rather than implied. 78 of 207 cases carry quoted dialogue inline (38%), and 16 explicitly manage lip sync. Seedance 2.5 additionally supports driving lip sync from an uploaded audio track.

**Guidance:**

- Declare the language on its own line before the line itself, in the form `セリフ言語: 日本語` or `Natural English dialogue only`, and wrap the line in braces or quotes so it is not read as scene description.
- With an uploaded audio track, state that lip sync follows the actual vocal in the audio rather than the written text, and require closed lips during instrumental passages. Also restrict lip sync to one performer so background characters do not start mouthing.
- Write the reaction as a chain, not a checklist: hears it, brief pause to understand, expression starts to shift, body follows, residue of the previous expression lingers, then the next state. Listing eyebrows, eyes, nose and mouth separately produces sticker-style switching.
- Close every beat with an end state line so the next beat has a defined starting point — the raid case uses `ending state` per stage, the Japanese dialogue case uses `終了状態`.
- For emotional states with a physical tell, specify the behaviour rather than the symptom. Asking for a blush yields a uniform pink filter; asking for the eyes to look away, the mouth corner to slip, the speech to slow and the hand to pause yields shyness.

**Examples:** [#1](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) [#2](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) [#3](https://goodcase.ai/cases/case-1f8136a9893a) [#4](https://goodcase.ai/cases/case-a845e1418b39)

**Structure:**

1. Language and audio-source declaration, before any line
2. Speaker tags, one per character
3. Per beat: the causal reaction chain, then the line, then the end state
4. Global performance principles: what the character does and does not know
5. Negative: no voice-over, no silent gaps, no expression-sticker switching

**Pitfalls:**

- Continuous dialogue clips need an explicit `no silent moments and no voice-over`, otherwise the model delivers music plus a mouth moving.
- Proper nouns and digits are the least reliable part of any generated line. Move brand names and numbers out of the dialogue and into on-screen text added in post.
- Two characters speaking in the same beat splits the lip-sync budget. Give one the line and the other a physical reaction.
- A line longer than roughly eight words in a three-second beat will desync. Shorten the line before touching anything else.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (8 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9"><img src="https://media.goodcase.ai/media/poster/noorlewisx-seedance-ai-b2d98861daf9.jpg" width="160" alt="Seedance Fifteen-Second Gym Vlog With Continuous Dialogue"></a> | [Seedance Fifteen-Second Gym Vlog With Continuous Dialogue](https://goodcase.ai/cases/noorlewisx-seedance-ai-b2d98861daf9) | 2.0 | 70 |
| <a href="https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer"><img src="https://media.goodcase.ai/media/poster/youmind-surprise-visit-romance-trailer.jpg" width="160" alt="The Surprise Visit: A Dialogue-Driven Romance Trailer"></a> | [The Surprise Visit: A Dialogue-Driven Romance Trailer](https://goodcase.ai/cases/youmind-surprise-visit-romance-trailer) | 2.0 | 70 |
| <a href="https://goodcase.ai/cases/case-1f8136a9893a"><img src="https://media.goodcase.ai/media/poster/case-1f8136a9893a.jpg" width="160" alt="Emotionally Expressive Japanese-Dialogue Animation"></a> | [Emotionally Expressive Japanese-Dialogue Animation](https://goodcase.ai/cases/case-1f8136a9893a) | 2.5 | 67 |
| <a href="https://goodcase.ai/cases/seedance-3b9beb9a46d4"><img src="https://media.goodcase.ai/media/poster/seedance-3b9beb9a46d4.jpg" width="160" alt="Seedance Cinematic Breakup Performance Prompt"></a> | [Seedance Cinematic Breakup Performance Prompt](https://goodcase.ai/cases/seedance-3b9beb9a46d4) | 2.5 | 30 |
| <a href="https://goodcase.ai/cases/case-e0d3b03f1aef"><img src="https://media.goodcase.ai/media/poster/case-e0d3b03f1aef.jpg" width="160" alt="Tom Sawyer Whitewashing the Fence Scene"></a> | [Tom Sawyer Whitewashing the Fence Scene](https://goodcase.ai/cases/case-e0d3b03f1aef) | 2.0 | 9 |
| <a href="https://goodcase.ai/cases/case-19957ff473b6"><img src="https://media.goodcase.ai/media/poster/case-19957ff473b6.jpg" width="160" alt="Childhood Toys Dialogue Prompt"></a> | [Childhood Toys Dialogue Prompt](https://goodcase.ai/cases/case-19957ff473b6) | 2.0 | - |
| <a href="https://goodcase.ai/cases/case-a845e1418b39"><img src="https://media.goodcase.ai/media/poster/case-a845e1418b39.jpg" width="160" alt="Showa-Era Retro Living Room Scene"></a> | [Showa-Era Retro Living Room Scene](https://goodcase.ai/cases/case-a845e1418b39) | 2.0 | 0 |
| <a href="https://goodcase.ai/cases/seedance-2-5-8d136b59e95a"><img src="https://media.goodcase.ai/cases/c63cbb62b439.jpg" width="160" alt="Taxi Breakup Scene: Photorealistic Continuous Emotional Progression Through Microexpressions (Seedance 2.5)"></a> | [Taxi Breakup Scene: Photorealistic Continuous Emotional Progression Through Microexpressions (Seedance 2.5)](https://goodcase.ai/cases/seedance-2-5-8d136b59e95a) | 2.5 | - |

---

[← Previous: Fashion lookbook and portrait film](./fashion-lookbook.md) · [Next: Cinematic narrative short →](./cinematic-narrative-short.md)
