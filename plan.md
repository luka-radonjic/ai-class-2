# Country Website Plan — Serbia

## 1. Overview

- **Location:** Serbia
- **Repository:** TBD (public GitHub repo)
- **Status (2026-11-25):** Planning. `index.html` is empty and assets have been collected.

## 2. Site Map

| File           | Page             | Content                                                        | Required elements placed here                       |
| -------------- | ---------------- | -------------------------------------------------------------- | --------------------------------------------------- |
| `index.html`   | Home             | Intro to Serbia, flag, Belgrade overview, a quote              | Hero image (flag or Belgrade), `<blockquote>`, `<video>` (Belgrade) |
| `culture.html` | Food & Culture   | Cuisine cards (ćevapi, burek, kiflice, krofne), history (the Great Migration) | `<img>` ×4+ in a **Grid** card layout     |
| `travel.html`  | Travel & Facts   | Quick-facts table, places to visit, contact form               | `<table>`, `<form>`                                 |
| `credits.html` | Credits          | Every asset and text source, plus the AI chat used             | Credits list/table with a "Page used" column         |

Every page shares the same `<header>` + `<nav>` (4 links, `aria-current="page"` on the current page) + `<footer>`.

## 3. Folder Structure

```text
planning/
├── index.html  culture.html  travel.html  credits.html
├── css/        normalize.css, styles.css
├── images/     (optimized jpg/webp)
├── media/      belgrade-video.mp4 (re-encoded), poster image, captions .vtt
├── favicon/    favicon.ico, favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest
├── plan.md
└── README.md
```

## 4. Media Audit (2026-11-25)

| File                        | Size     | Pixels     | Status |
| --------------------------- | -------- | ---------- | ------ |
| `media/belgrade-video.mp4`  | **20.81 MB** | ?       | ❌ **Over 10 MB.** Trim to a ~15–20 s clip and re-encode at 720p H.264 (e.g. HandBrake "Web" preset, or `ffmpeg -i in.mp4 -t 20 -vf scale=-2:720 -c:v libx264 -crf 28 -an out.mp4`). |
| `images/trandafood.jpg`     | 1.33 MB  | 4928×3264  | ⚠️ Far larger than it will be displayed. Resize to ≤1600 px wide (hero) or ≤800 px (content) and export as WebP. |
| `images/migration.jpg`      | 0.64 MB  | 1920×1242  | ⚠️ Resize to ~1200–1600 px if used as a wide image, otherwise 800 px. |
| `images/krofne.jpg`         | 0.32 MB  | 800×754    | ✅ |
| `images/kiflice.jpg`        | 0.24 MB  | 800×566    | ✅ |
| `images/burek.jpg`          | 0.18 MB  | 800×600    | ✅ |
| `images/cevapi.jpg`         | 0.12 MB  | 800×450    | ✅ |
| `images/Flag_of_Serbia.svg.webp` | 0.07 MB | (lossless WebP) | ✅ Consider using the original SVG from Wikimedia instead, since it scales cleanly. |

Also: rename `Flag_of_Serbia.svg.webp` to `flag-serbia.webp` (the `.svg.webp` double extension is confusing).

## 5. Style Guide

Palette based on the Serbian flag:

| Role       | Value     | Notes |
| ---------- | --------- | ----- |
| Primary    | `#0C4076` | Flag blue: header and nav. White text on it is about 10:1 contrast ✅ |
| Secondary  | `#C6363C` | Flag red: buttons and accents. White text on it is about 5:1 ✅ |
| Accent     | `#D4A84B` | Gold from the coat of arms. Decorative only, don't use it for text on white |
| Text       | `#1E1E1E` | On the background below, about 16:1 ✅ |
| Background | `#FAF8F5` | Warm off-white |

- **Heading font:** Playfair Display (Google Fonts, OFL), self-hosted in `fonts/` with `font-display: swap`
- **Body font:** Source Sans 3 (OFL), or the system stack `system-ui, sans-serif`
- **Spacing:** `--space-xs: .5rem; --space-s: 1rem; --space-m: 1.5rem; --space-l: 2rem; --space-xl: 3rem`
- **Breakpoints (mobile-first, `min-width`):** `48em` (tablet), `64em` (desktop), `90em` (wide)
- All of the above go in `:root` as custom properties.

**Where Flexbox and Grid are used:**
- Flexbox: header (logo + nav), nav links, form rows, footer
- Grid: food card gallery on `culture.html` (1 column, then 2 at 48em, then 4 at 64em) and the places-to-visit section

## 6. Wireframes

Shared shell:

```text
┌────────────────────────────────────┐
│ [Skip to content]  (on focus)      │
├────────────────────────────────────┤
│ 🇷🇸 Discover Serbia     Home Culture Travel Credits │  flex
├────────────────────────────────────┤
│ <main id="main">                    │
├────────────────────────────────────┤
│ © 2026 · Credits link              │
└────────────────────────────────────┘
```

**Home:** hero (flag or Belgrade image, h1 "Discover Serbia") → intro paragraphs → blockquote → "Belgrade in motion" video with captions and a transcript `<details>` → teaser links to Culture and Travel.

**Food & Culture:**
```text
Mobile          Tablet (48em)      Desktop (64em)
[card]          [card][card]       [card][card][card][card]
[card]          [card][card]
...
```
Each card has an `<article>`, an `<img loading="lazy">`, an h3 and a short description. Below the cards is a history section with `migration.jpg` (a `<figure>` + `<figcaption>`).

**Travel & Facts:** quick-facts `<table>` (capital, population, language, currency, time zone, calling code) with `<caption>` and `<th scope>` → places-to-visit grid (Belgrade, Novi Sad, Niš, Tara NP) → contact form: `<fieldset><legend>`, name (`autocomplete="name"`), email (`autocomplete="email"`), `<textarea>`, `<button type="submit">`.

**Credits:** a table with Asset | Creator (link) | Source (link) | License (link) | Page used, plus an AI resource row.

## 7. Credits Tracker

None of the licenses below have been verified yet. Check each file page before you use the asset.

| Asset                  | Type  | Creator | Source URL | License | Page used |
| ---------------------- | ----- | ------- | ---------- | ------- | --------- |
| cevapi.jpg             | Image |         |            |         | culture   |
| burek.jpg              | Image |         |            |         | culture   |
| kiflice.jpg            | Image |         |            |         | culture   |
| krofne.jpg             | Image |         |            |         | culture   |
| migration.jpg          | Image |         |            |         | culture   |
| trandafood.jpg         | Image |         |            |         | TBD       |
| Flag_of_Serbia         | Image |         | Wikimedia Commons | (flag files are usually public domain; verify) | index |
| belgrade-video.mp4     | Video |         |            |         | index     |
| Page text              | Text  | Wikipedia contributors | en.wikipedia.org/wiki/Serbia | CC BY-SA 4.0 | all |
| Playfair Display / Source Sans 3 | Font | | fonts.google.com | SIL OFL 1.1 | all |
| Favicon                | Icon  |         |            |         | all       |
| Claude (Anthropic)     | AI    | Anthropic | link to chat | n/a | planning/content |

## 8. Next Steps

1. Fill in the credits tracker with the source and license for every asset you've downloaded, and swap out any asset that isn't CC.
2. Trim and re-encode the video to under 10 MB, resize `trandafood.jpg` and `migration.jpg`, and make a video poster image.
3. Create the `css/` and `favicon/` folders, the four HTML shells, and the shared nav.
4. Build mobile-first, then run the accessibility pass, validators, and a test at 320/768/1024/1920 px.
5. Push to a public GitHub repo.
