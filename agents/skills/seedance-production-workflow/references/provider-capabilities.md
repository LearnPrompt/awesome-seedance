# Seedance capability snapshot

Recheck these sources before operational use; account, region and entry point can differ. Snapshot researched 2026-09-23.

- [ByteDance Seedance 2.5 product page](https://seed.bytedance.com/en/seedance2_5): up to 30 seconds in one generation, with extension; reference and editing controls.
- [ByteDance Seedance 2.5 launch article](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5): examples of timecoded multi-shot reference, video extension, targeted editing, and clay/spatial reference.
- [BytePlus LAS video generation API](https://docs.byteplus.com/en/docs/Byteplus_LAS/video_gen_enhanced): lists Seedance 2.5 and 2.0, reference inputs, generation task and status query, `return_last_frame`, and model-dependent duration/media limits. An API documented here does not imply access in Dreamina, Jimeng, another region, or the user's account.
- [Awesome Seedance storyboard template](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/templates/zh/storyboard-grid-to-video.md): numbered grid then video reference. This is a useful technique for controlled multi-shot work, not a universal requirement.

Decision preference: use native extension when a continuous previous clip and the platform's extension tool are available. Treat last-frame stitching as a separately tested path because the frame alone lacks prior motion and audio. This is workflow judgment, not a guaranteed quality ranking from the sources.
