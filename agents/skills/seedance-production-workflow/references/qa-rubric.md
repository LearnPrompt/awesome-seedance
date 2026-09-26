# Video review rubric

Inspect the generated video, not only its prompt or poster. Record model, run ID, overall state, and a timestamp for each failure. Grade each applicable dimension: `2` passes; `1` mostly works with a visible flaw; `0` fails the requested behavior. Mark `N/A` only when the brief makes the dimension irrelevant.

| Dimension | Observable check |
| --- | --- |
| Shot sequence | Every required beat occurs once, in order, within a reasonable share of runtime |
| Identity/product lock | Distinguishing face, clothing, geometry, colors and logos do not switch across cuts |
| State handoff | Props, hands, positions, doors, weather and time of day change only through visible or plausible actions |
| Motion/physics | Main action completes; limbs/objects do not teleport, merge, or change count |
| Spatial continuity | Camera changes preserve the persistent set, subject side of a threshold, hinge/handle location, and direction of travel or swing |
| Audio | Dialogue/voice, ambient sound and effects match the relevant shot; lip sync when requested |
| Output hygiene | Duration, aspect ratio, resolution, subtitles, watermark and unwanted text match the brief |

For each `0` or `1`, give the exact timestamp, frame or short observation, likely controlling input, and one bounded repair. Retest after changing only that input when practical. A pass on prompt syntax alone is not a pass on the video. A single strong sample is not evidence that the workflow is generally better; compare matched briefs and settings before making that claim.
