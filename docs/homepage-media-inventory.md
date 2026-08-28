# Homepage Media Inventory — New Instagram Video Library

Date: 2026-08-28

Source: `KIWI ASSETS/NEW VIDEOS/` (9 files, downloaded from Kiwi Coatings' Instagram). Every clip below was inspected directly — technical metadata via `ffprobe` and visual content via extracted frames at multiple timestamps (not inferred from filenames or captions).

All source clips are portrait 720×1280 (one exception noted), 30fps, H.264/AAC, 3–29s. No files were reprocessed except where noted; originals are untouched in `KIWI ASSETS/NEW VIDEOS/`.

## Classification key

- **CLEAN** — no burned-in overlay found across sampled frames, safe to use as-is
- **SAFE CROP** — fixed-position overlay near an edge, removed by cropping
- **STILL FRAME ONLY** — overlay/captions cover most of the clip; only a still extracted from a clean moment is usable
- **REFERENCE / FUTURE APPROVAL** — excluded from this build, needs an explicit decision from the business

## Clips

### 1. OFFICE.mp4
- 720×1280, 30fps, 15.69s
- Content: green/teal metallic epoxy floor, still wet/uncured, camera panning across an empty room while a technician walks the surface. This is **install/cure footage, not a finished-room shot** — labeled accordingly, not overstated.
- Overlays: none found (checked 15%/50%/85% + additional timestamps)
- Classification: **CLEAN**
- Used as: Act 6 primary autoplay video → `public/media/kiwi/custom-interiors/custom-office-metallic.mp4` (muted, faststart, no upscale) + poster `custom-office-metallic-poster.jpg`
- Safe label used: "Custom Metallic Floor — Office"

### 2. Barbie pink walk-in closet!...mp4
- 720×1280, 30fps, 29.25s
- Content: pink/purple/blue metallic finished floor in a small closet-scale room with visible shelving/cabinet edge
- Overlays: none found (checked start/mid/end)
- Classification: **CLEAN**
- Used as: Act 6 supporting still `custom-walk-in-closet-metallic.jpg` (poster-only panel, not autoplaying — see "one active video at a time" note below)
- Safe label used: "Walk-In Closet"

### 3. It's all in the details!...Custom copper flakes...mp4
- 720×1280, 30fps, 17.47s
- Content: gray/quartz broadcast base in a bucket, gloved hands adding a scoop of copper/bronze decorative flake
- Overlays: none found
- Classification: **CLEAN**
- Used as: still `custom-copper-flake-detail.jpg` (material/craft panel)
- Safe label used: "Custom Blends"

### 4. Kiwi coatings turning chemistry into art...mp4
- 720×1280, 30fps, 3.33s
- Content: extreme close-up of gold/charcoal/gray/cream metallic coating being worked with a trowel/squeegee — visually the strongest craft shot in the set
- Overlays: **animated word-by-word captions** ("Kiwi" / "chemistry" / "into art") cover nearly the whole clip. Clean only in the first ~0.3s and after ~t=2.9s.
- Classification: **STILL FRAME ONLY**
- Used as: still `metallic-application-detail.jpg` (extracted at t=3.1s, caption-free)
- Safe label used: "Craft & Material"

### 5. Masterpiece in the master bedroom!...mp4
- 720×1280, 30fps, 25.35s
- Content: deep purple metallic finished floor, close-up
- Overlays: none found
- Classification: **CLEAN**
- Used as: still `custom-master-bedroom-metallic.jpg`
- Safe label used: "Master Bedroom"

### 6. Meet the artist behind the custom flake blend...mp4
- 720×1280, 30fps, 23.73s
- Content: Randy and his daughter, close-up talking-head, creating a custom flake blend together
- Overlays: burned-in captions including the word **"DAUGHTER"** and the `@kiwicoatingsaz` handle
- Classification: **REFERENCE / FUTURE APPROVAL — NOT USED**
- Reason: features a minor in a prominent, identifiable close-up. Per the sprint instructions ("do not name or identify the daughter publicly unless intentionally supplied/approved"), this was excluded from the live homepage rather than deciding unilaterally to publish it. Needs explicit sign-off from the business before any use.

### 7. A sneak peek of just one room...mp4
- **360×640** (half resolution of the others), 30fps, 12.61s
- Content: teal/blue/gold marbled metallic floor, wider room shot
- Overlays: a fixed Kiwi logo + phone-number sticker sits mid-right of frame for the **entire duration** (not just an edge — checked t=0.3s through t=6s, present throughout)
- Classification: **REFERENCE / FUTURE APPROVAL — NOT USED**
- Reason: the sticker isn't at an edge, so a clean crop would cut through the actual floor content. Rather than force a mediocre crop into a "premium editorial" section, this was left out. A re-shoot or original (non-socially-stickered) export would resolve this.

### 8. What is the shiny stuff...mp4
- 720×1280, 30fps, 16.46s
- Content: Randy and his daughter, close-up talking-head, holding a finished flake sample board, discussing polyaspartic topcoats
- Overlays: burned-in captions ("NOW WE HAVE TO...", "POLYASPARTIC.") plus the same identifiable minor
- Classification: **REFERENCE / FUTURE APPROVAL — NOT USED**
- Reason: same minor-privacy concern as clip 6.

### 9. Who's ready to smile...Kiwi coatings custom-made flake colors.mp4
- 720×1280, 30fps, 18.22s
- Content: multiple buckets of bright custom flake colors on a granite counter — green/blue/yellow bucket, black/orange bucket, black/pink bucket (confirms bold custom-color capability)
- Overlays: fixed `@kiwicoatingsaz` handle badge across the **top ~20%** of frame throughout
- Classification: **SAFE CROP**
- Treatment: top 260px (of 1280) cropped off in the still export — badge fully removed, verified by re-inspecting the cropped result
- Used as: still `custom-flake-colors.jpg`
- Safe label used: "Custom Color Lab"

## Summary of what shipped

| File | Type | Used as |
|---|---|---|
| `custom-office-metallic.mp4` + poster | video (muted) | Act 6 primary |
| `custom-walk-in-closet-metallic.jpg` | still | Act 6 supporting panel |
| `custom-master-bedroom-metallic.jpg` | still | Act 6 supporting panel |
| `custom-copper-flake-detail.jpg` | still | Act 6 material panel |
| `metallic-application-detail.jpg` | still | Act 6 material panel |
| `custom-flake-colors.jpg` | still (cropped) | Act 6 material panel |

All files live in `public/media/kiwi/custom-interiors/`.

## Excluded this sprint

- Clip 6 ("Meet the artist") and Clip 8 ("What is the shiny stuff") — both identify a minor family member on camera. Not published pending explicit business approval.
- Clip 7 ("A sneak peek of just one room") — persistent mid-frame logo/phone sticker with no clean crop available at the current export.

## Video-on-page discipline

Only **one** `<video>` element is mounted with autoplay on the homepage's Act 6 (`OFFICE.mp4`, muted, loop, playsInline). Every other clip in this set is represented as a static poster still, per the sprint instruction not to autoplay multiple videos simultaneously and not to introduce a new video-playback framework this pass.
