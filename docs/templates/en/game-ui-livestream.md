**English** | [中文](../zh/game-ui-livestream.md)

[← All prompt templates](../../../README.md#-prompt-templates-by-category) · [Template index](./README.md)

# 🎭 Gameplay capture with HUD and stream overlay

> The screen itself is the shot: a fake gameplay capture, livestream or desktop recording. It holds up when the overlay layer is pinned to fixed positions and its numbers and banners change in step with the action.

<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->

<table>
<tr>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58"><img src="https://media.goodcase.ai/cases/f81388cc5f57.jpg" width="200" alt="Neon Coastal City Gunfight and Police Chase Livestream"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da"><img src="https://media.goodcase.ai/cases/381369ef731a.jpg" width="200" alt="Schoolgirl Steals a Diamond Necklace and Escapes by Train"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6"><img src="https://media.goodcase.ai/cases/f16c9f956a8d.jpg" width="200" alt="Seedance 2.5 Hyperreal AI Live Wallpaper: Outfit-Changing Heroine in One Take"></a></td>
<td align="center" valign="top"><a href="https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e"><img src="https://media.goodcase.ai/cases/199c37ba7f84.jpg" width="200" alt="The 5 PM Office Escape"></a></td>
</tr>
</table>

## Copy this

Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template.

````text
I want a video that looks like real gameplay capture. [The hero is a short-haired girl in a school uniform; I am sending you her photo.] [The mission: steal the last rice ball from a convenience store late at night and escape into the street.] [A streamer facecam sits in the bottom-right corner, with scrolling live chat on the left.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:

#### Gameplay capture with HUD and stream overlay

The screen itself is the shot: a fake gameplay capture, livestream or desktop recording. It holds up when the overlay layer is pinned to fixed positions and its numbers and banners change in step with the action.

**Use when:** GTA-style mission clips, streamer facecam plus game footage, and interactive desktop or UI recordings where the HUD has to read as a real interface.

**Guidance:**

- Pin every overlay to a named screen position before the timeline starts. GTA 6 Simulation opens with `Fixed full-screen game HUD throughout` and puts the streamer in a `bottom-right square pink-blue neon facecam`; the snow-station trailer assigns one element to each corner, stamina bars top-left, objective banner top-center, date top-right, minimap bottom-left, button prompts bottom-right.
- Treat the HUD as a scoreboard that changes with each beat. GTA 6 Simulation tracks ammo `from 24/120 to 14/120` and wanted level from two stars to three; the diamond escape gives every segment its own HUD block, going from `MISSION: STEAL VIP NECKLACE` to `TARGET ACQUIRED` to `ESCAPE SUCCESSFUL`.
- Say outright that it is gameplay and write the camera like a game rig. The Rio chase asks for genuine gameplay, `not a cinematic film`; the diamond escape writes `Clearly a GAME, not anime or cartoon` and puts the camera `1.5m behind NAGI, slightly camera-right` with FOV breathing between 30 and 60 degrees.
- Count the cast and make each extra person look different. GTA 6 Simulation asks for `exactly two dark-red-jacket gang enemies` and no extra armed characters; the five o'clock office case gives four coworkers different ages, heights and hair, and states that the boss is the only bald character.
- Split languages by layer and spell out how on-screen text appears. The diamond escape keeps `All HUD text English`, dialogue in Japanese; the desktop wallpaper case puts subtitles at the left middle of the frame and types them in at about 0.08 to 0.12 seconds per character, with a waveform under them.

**Examples:** [#1](https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58) [#2](https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da) [#3](https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6) [#4](https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e)

**Structure:**

1. Format header: duration, aspect ratio, how the take is cut, and a plain statement that this is game capture
2. Character lock: Image1 for face and identity only, outfit written out in text
3. Screen layer spec: where each HUD element, facecam, chat or subtitle sits, and what language it uses, fixed throughout
4. Camera rig: third-person follow distance and FOV, or one locked camera for desktop recordings
5. Timeline segments: each one carries the action, the HUD state change and any spoken line
6. Audio: engine, footsteps, keyboard and mouse, ambience, voice language
7. Strict rules tail: exact character counts, no extra cuts, HUD stays put, how the clip may and may not end

**Pitfalls:**

- The HUD slides around or changes layout between beats. Write `HUD fixed in the same screen positions` as a hard rule and only let the values change, never the layout.
- Long HUD sentences come out as garbled text. Keep banners to two to four capitalised words like the diamond escape does, and keep numbers in a simple pattern like 38/120.
- The streamer or hero shows up twice, once in the facecam and once in the game world, or in a reflection. GTA 6 Simulation states HANEUL appears only in the facecam; the office case removes any mirror that could create a second NAGI.
- The model edits it like a cinematic trailer, with cuts and a tidy ending. Write no cuts and no transitions; if you need a closing shot, declare one hard cut at an exact second, as in `Exactly one hard cut at 27s`, and rule out a black screen or end card.
````

## Three steps

| Step | What to do |
| --- | --- |
| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |
| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |
| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |

## Cases in this category (15 filed, by heat)

| Preview | Case | Version | Heat |
| --- | --- | --- | --- |
| <a href="https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6"><img src="https://media.goodcase.ai/cases/f16c9f956a8d.jpg" width="160" alt="Seedance 2.5 Hyperreal AI Live Wallpaper: Outfit-Changing Heroine in One Take"></a> | [Seedance 2.5 Hyperreal AI Live Wallpaper: Outfit-Changing Heroine in One Take](https://goodcase.ai/cases/seedance-2-5-ai-cabf3749d5b6) | 2.5 | 94 |
| <a href="https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e"><img src="https://media.goodcase.ai/cases/199c37ba7f84.jpg" width="160" alt="The 5 PM Office Escape"></a> | [The 5 PM Office Escape](https://goodcase.ai/cases/seedance-leaving-work-at-five-shouldn-t-require-stealth-mode-but-her-boss-made-it-a-mis-8495c8c9337e) | 2.5 | 91 |
| <a href="https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58"><img src="https://media.goodcase.ai/cases/f81388cc5f57.jpg" width="160" alt="Neon Coastal City Gunfight and Police Chase Livestream"></a> | [Neon Coastal City Gunfight and Police Chase Livestream](https://goodcase.ai/cases/seedance-gta-6-simulation-414a3b385a58) | 2.5 | 83 |
| <a href="https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da"><img src="https://media.goodcase.ai/cases/381369ef731a.jpg" width="160" alt="Schoolgirl Steals a Diamond Necklace and Escapes by Train"></a> | [Schoolgirl Steals a Diamond Necklace and Escapes by Train](https://goodcase.ai/cases/seedance-mission-the-great-diamond-escape-39fea191a6da) | 2.5 | 81 |
| <a href="https://goodcase.ai/cases/seedance-a-mysterious-train-station-is-buried-beneath-the-snow-and-three-friends-are-de-118e70d4e33e"><img src="https://media.goodcase.ai/cases/79e519115cd2.jpg" width="160" alt="Three Children Search for a Mysterious Station Beneath the Snow"></a> | [Three Children Search for a Mysterious Station Beneath the Snow](https://goodcase.ai/cases/seedance-a-mysterious-train-station-is-buried-beneath-the-snow-and-three-friends-are-de-118e70d4e33e) | 2.5 | 79 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-sequenc-70896856a838"><img src="https://media.goodcase.ai/cases/a766a24fcbfe.jpg" width="160" alt="Rio Street Chase Over a Misplaced Package"></a> | [Rio Street Chase Over a Misplaced Package](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-sequenc-70896856a838) | 2.5 | 58 |
| <a href="https://goodcase.ai/cases/seedance-okay-this-feels-straight-out-of-gta-4dcfe15565a6"><img src="https://media.goodcase.ai/cases/9377bc7b94f2.jpg" width="160" alt="Female Surgeon's Hospital Rescue Mission"></a> | [Female Surgeon's Hospital Rescue Mission](https://goodcase.ai/cases/seedance-okay-this-feels-straight-out-of-gta-4dcfe15565a6) | 2.5 | 54 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-video-s-405ad1ebb338"><img src="https://media.goodcase.ai/cases/5864458476ef.jpg" width="160" alt="Theft and Escape at a Rural Japanese Station"></a> | [Theft and Escape at a Rural Japanese Station](https://goodcase.ai/cases/seedance-create-a-30-second-ultra-realistic-aaa-third-person-open-world-gameplay-video-s-405ad1ebb338) | 2.5 | 52 |
| <a href="https://goodcase.ai/cases/seedance-one-continuous-modern-american-office-entrance-security-desk-badge-gate-d42d0ee6b30a"><img src="https://media.goodcase.ai/cases/069d8945f51e.jpg" width="160" alt="Late Employee's Office Sneak Ends in CCTV Detection"></a> | [Late Employee's Office Sneak Ends in CCTV Detection](https://goodcase.ai/cases/seedance-one-continuous-modern-american-office-entrance-security-desk-badge-gate-d42d0ee6b30a) | 2.5 | 48 |
| <a href="https://goodcase.ai/cases/seedance-a-missing-key-a-schoolgirl-and-a-full-on-gameplay-mission-50048532d82b"><img src="https://media.goodcase.ai/cases/b603084f5e65.jpg" width="160" alt="Japanese High School Classroom Key Mission"></a> | [Japanese High School Classroom Key Mission](https://goodcase.ai/cases/seedance-a-missing-key-a-schoolgirl-and-a-full-on-gameplay-mission-50048532d82b) | 2.5 | 39 |
| <a href="https://goodcase.ai/cases/seedance-use-image1-as-highest-priority-reference-for-haneul-87857bb7ac9c"><img src="https://media.goodcase.ai/cases/e750151cbe91.jpg" width="160" alt="Streamer Broadcasts a Vault Heist and Police Chase"></a> | [Streamer Broadcasts a Vault Heist and Police Chase](https://goodcase.ai/cases/seedance-use-image1-as-highest-priority-reference-for-haneul-87857bb7ac9c) | 2.5 | 38 |
| <a href="https://goodcase.ai/cases/seedance-create-a-30-second-photorealistic-aaa-third-person-action-adventure-gameplay-vi-b1237ef456f0"><img src="https://media.goodcase.ai/cases/a1590102d56c.jpg" width="160" alt="Female Explorer Battles Through Island Ruins"></a> | [Female Explorer Battles Through Island Ruins](https://goodcase.ai/cases/seedance-create-a-30-second-photorealistic-aaa-third-person-action-adventure-gameplay-vi-b1237ef456f0) | 2.5 | 37 |

The other 3 are in the [full gallery](../../gallery.md) and on [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance).

---

[← Previous: Horror and suspense](./horror-suspense.md) · [Next: Anime and stylized style lock →](./anime-style-lock.md)
