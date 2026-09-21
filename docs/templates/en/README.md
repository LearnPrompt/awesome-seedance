**English** | [中文](../zh/README.md)

[← Back to README](../../../README.md#-prompt-templates-by-category)

# Prompt Templates by Category (25)

One file per template. Each holds a copy-ready block: replace the [bracketed] parts with your own details, send it to any AI chat, and get back a prompt you can run in Seedance.

## 🧱 Structural foundations

| Template | Use it for | Cases filed |
| --- | --- | --- |
| [Second-by-second timeline script](./timeline-shot-script.md) | Split the clip into contiguous timed segments, each carrying one shot type, one main action and its own sound line. The single most load-bearing structure in the corpus. | 4 |
| [Reference image identity lock](./character-reference-lock.md) | Name every reference with a stable token, enumerate what to inherit from it, and separately enumerate what must not be inherited. The inherit-nothing-else clause is what separates working locks from broken ones. | 5 |
| [Storyboard grid to video](./storyboard-grid-to-video.md) | Two stages: first a single-page sheet of numbered panels from an image model, then that sheet fed to Seedance as the reference. The sheet owns order, framing and timing, and the video prompt only has to connect the panels. | 9 |

## 📱 Realism and UGC

| Template | Use it for | Cases filed |
| --- | --- | --- |
| [Handheld UGC vlog](./handheld-ugc-vlog.md) | Buy believability with camera defects. Name a specific consumer camera era, list its flaws as requirements, and switch cinematic polish off by hand. | 92 |
| [First-person continuous take](./pov-continuous-take.md) | Bodycam, GoPro, FPV and handlebar POV. The camera is mounted on a body, so its motion has to be derived from that body, and every cut has to be declared by hand. | 11 |
| [Early-2000s DV home video](./retro-found-footage.md) | The period feel comes from camera defects and one tiny everyday incident. Write the camcorder's autofocus hunting, exposure shifts and handheld shake as an explicit list, keep the story small, and the clip reads as a real old tape. | 17 |
| [Pets and animals as the lead](./pet-animal.md) | The animal is the lead and a phone is the only camera. Lock the count to exactly one, keep the animal behaving like an animal, and let the payoff come from it closing in on the lens. | 13 |

## 🛒 Commercial and product

| Template | Use it for | Cases filed |
| --- | --- | --- |
| [UGC creator review with spoken lines](./ugc-creator-review.md) | A creator unboxes, handles and endorses a product on camera. Two independent locks are needed — one on the person, one on the product — and the spoken lines are welded into the actions. | 11 |
| [Cinematic product commercial shot list](./product-commercial-shotlist.md) | A polished 8 to 20 second ad: a stated commercial aesthetic up front, a numbered or timed shot breakdown in the middle, a hero frame at the end, and a keyword tail. | 27 |
| [Process and transformation montage](./process-transformation-montage.md) | Cooking steps, renovation timelapse, blueprint-to-house, miniature city assembly. The craft here is declaring what must not change, then ordering the change spatially. | 16 |
| [Fashion lookbook and portrait film](./fashion-lookbook.md) | One person, one look, a handful of places. A head-to-toe appearance lock carries the whole clip, and each scene gets one location, one gesture and one kind of light. | 13 |

## 🎭 Narrative and performance

| Template | Use it for | Cases filed |
| --- | --- | --- |
| [Dialogue and performance beats](./dialogue-performance-beats.md) | Declare the spoken language, tag the speaker, write the reaction as a causal chain rather than a list of expressions, and close each beat with an explicit end state. | 8 |
| [Cinematic narrative short](./cinematic-narrative-short.md) | Multi-act storytelling in 15 to 60 seconds. Titled acts, a character card ahead of the acts, and a reveal written as a concrete image rather than as a promise of surprise. | 30 |
| [Cinematic travel vlog montage](./travel-city-walk.md) | One traveller moves through a place scene by scene, each scene carrying its own timecode, its own location and one short line. The polish is bought with film grain and golden-hour light. | 12 |
| [Twist-ending comedy skit](./meme-comedy.md) | A short skit where every beat is laid down to serve one punchline. The joke has to land on something visible, and the absurdity only works when the camera and the physics stay dead serious. | 22 |
| [Horror and suspense](./horror-suspense.md) | Every shot carries its own timecode and shows one visible change on a body. The dread comes from the chain — a look, veins, a bite, the next person — and the ending seals a door without settling anything. | 11 |

## 🎨 Stylized animation

| Template | Use it for | Cases filed |
| --- | --- | --- |
| [Anime and stylized style lock](./anime-style-lock.md) | Specify the drawing style as measurable parameters, then attach an exclusion list of the neighbouring styles it must not fall into. Without the exclusion list, anime collapses into a generic 3D face. | 25 |
| [Stop motion and stepped cadence](./stop-motion-cadence.md) | Stop motion is a timing spec before it is a look. Pin the frame rate and the hold count, name the craft material, and ban the three things that silently smooth it away. | 9 |
| [3D cartoon character short](./3d-cartoon.md) | One small anthropomorphic character carries the whole film. Spell out its looks part by part, write the style as render settings you can measure, and cut the timeline so each block holds a single action goal. | 15 |

## 💥 Action, dance and effects

| Template | Use it for | Cases filed |
| --- | --- | --- |
| [Combat choreography](./combat-choreography.md) | Fights read as real when the prompt specifies biomechanics, contact points and an attack chain. Adjectives like epic produce two people swinging at air. | 40 |
| [Beat-synced music video](./music-beat-sync-mv.md) | Derive beat anchors from BPM, pin every cut, hair flip and formation change to a real downbeat, and constrain the backup dancers so they never steal the visual centre. | 12 |
| [Time freeze and rewind set piece](./time-freeze-rewind.md) | A five-beat skeleton — normal, collision, freeze at the peak, orbit, precise rewind — with exactly one character exempt from the freeze. The corpus contains the same author reusing this skeleton with a different physical material, which is direct evidence that it transfers. | 5 |
| [Cars and vehicles at speed](./car-vehicle.md) | The machine has to stay one machine while the camera does all the work. Lock the vehicle part by part, then fill the runtime with a numbered cut list that moves the camera every second. | 10 |
| [Epic fantasy and sci-fi spectacle](./epic-fantasy-scifi.md) | Monsters, dragons, world reveals. Each entity gets its own definition block, the shots are cut by timecode, and scale is bought with reference objects and low angles rather than words like massive. | 21 |
| [Sports and extreme stunts](./sports-extreme.md) | The clip lives or dies on the action loop. Write every link from run-up to landing in order, name the physics you want by part, and spend the negative list on flying, hovering and teleporting. | 10 |
