---
description: Plan, build, and review the BCIT Country Website project.
  Use when working on the four-page country, city, continent, or
  fictional-location website, including its required HTML elements, CSS
  features, accessibility, media licensing, credits, and final
  submission checks.
name: project-plan
---

# Country Website Project --- Plan

## How to use this skill

When this skill is invoked, use this document as the project
requirements and working plan.

-   If asked to **plan**, help choose and organize the location, page
    topics, content, design direction, assets, and wireframes before
    coding.
-   If asked to **build**, follow the site map, folder structure,
    assignment requirements, and code standards below. Work with the
    user's existing project structure when one already exists rather
    than replacing it unnecessarily.
-   If asked to **check or review**, inspect the actual project HTML,
    CSS, media, and other relevant files. Report every item in the
    Requirements Checklist (Section 4) and Final Submission Checklist
    (Section 10) as `✅` or `❌`, identify the file and line number
    where possible, and suggest a specific fix for each missing item. If
    a requirement cannot be verified from the available files, mark it
    as **not verified** rather than assuming it is complete.
-   Do not claim that a requirement is complete based only on a plan,
    intention, filename, or this checklist. Verify the implementation.
-   **Check media file sizes** whenever building, reviewing, or adding
    assets. List every image and video file in the project with its file
    size. The assignment limit is 10 MB per image and video file. If any
    image or video is over 10 MB, flag it near the top of the response,
    name the file and its size, and suggest how to reduce it (for
    example, resize it, convert an image to WebP, compress it, or
    re-encode/shorten a video). Also identify images whose pixel
    dimensions are substantially larger than their displayed dimensions.
    Report unusually large audio files as performance warnings; the
    PDF's 10 MB limit specifically applies to images and videos.

## 1. Overview

Create a four-page, responsive, accessible website about a **country,
city, continent, or fictional location**. Build it with hand-written
HTML and CSS. Do not use HTML or CSS templates or frameworks. A
normalize or reset CSS file is the only exception.

-   **Location chosen:** *TBD*
-   **Reference examples:**
    https://projects.bcitwebdeveloper.ca/country-website-examples/
-   **Repository:** *TBD (public GitHub repository)*

The assignment also recommends making quick sketches or wireframes for
each page before development.

## 2. Site Map

The following page names and topics are a suggested starting point. They
can change to suit the chosen location, but the site must still contain
three pages about the location and one credits/references page.

  -----------------------------------------------------------------------
  File              Page              Purpose           Suggested
                                                        required elements
  ----------------- ----------------- ----------------- -----------------
  `index.html`      Home              Introduction and  Hero image,
                                      overview of the   blockquote
                                      location          

  `culture.html`    Culture & History Traditions, food, Image, video or
                                      history           audio element

  `travel.html`     Travel & Facts    Quick facts,      Table (quick
                                      places to visit,  facts), contact
                                      contact           form

  `credits.html`    Credits           Sources for all   Credits that
                                      content/assets    identify the page
                                      and the AI chat   where each item
                                      or resource used  is used
  -----------------------------------------------------------------------

Every page must include the same site navigation, with links to all four
pages. Required HTML elements may be placed on any of the four pages;
the suggested placements above are not mandatory.

## 3. Suggested Folder Structure

Adapt this structure to the project as needed. Do not create duplicate
files or move an existing project unnecessarily.

``` text
project-root/
├── index.html
├── culture.html
├── travel.html
├── credits.html
├── css/
│   ├── normalize.css
│   └── styles.css
├── images/
│   └── (optimized image files)
├── media/
│   └── (video/audio files, or permitted external media)
├── fonts/                  (if self-hosting a custom font)
├── favicon/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── site.webmanifest
├── plan.md
└── README.md
```

The favicon filenames and formats above are a practical suggested set.
Ensure the favicon implementation is linked correctly and works across
mobile, tablet, and desktop devices.

## 4. Requirements Checklist

Use this checklist when planning, building, and reviewing the website.
The PDF's requirements are mandatory unless explicitly identified as a
recommendation.

### Content and features

-   [ ] All text, image, and video content used for the project is under
    a Creative Commons license.
-   [ ] The website has four HTML webpages:
    -   [ ] Three pages about the chosen location.
    -   [ ] One credits/references page.
-   [ ] The credits page links to the websites of the creators of the
    content and to the AI chat or resource used.
-   [ ] Each individual credit identifies the page where that asset or
    content is used.

### Required HTML elements and site features

-   [ ] At least one HTML `<table>`.
-   [ ] At least two HTML `<img>` elements.
-   [ ] At least one HTML `<audio>` or `<video>` element.
-   [ ] At least one `<blockquote>` element.
-   [ ] At least one contact form. It does not need to submit data, but
    it must be semantically correct and accessible:
    -   [ ] Every form control has an associated `<label>`.
    -   [ ] Use appropriate controls, such as `<input type="text">`,
        `<input type="email">`, and `<textarea>` for longer messages. A
        `<textarea>` is an element, not an input type.
    -   [ ] Use `required` and suitable `autocomplete` values where
        appropriate.
    -   [ ] Use `<fieldset>` and `<legend>` when grouping related
        controls.
    -   [ ] Include a `<button type="submit">`.
-   [ ] Site navigation uses `<nav>`, links to all four pages, and is
    reused consistently on every page.
-   [ ] Every page has an SEO description using
    `<meta name="description">`.

### Head and global requirements

-   [ ] A favicon is included on all pages and works for mobile, tablet,
    and desktop devices.
-   [ ] The favicon files are linked correctly in the `<head>` of every
    page.
-   [ ] The web manifest, if used, references the correct icon paths.
-   [ ] Each page has the appropriate document language using the `lang`
    attribute on `<html>`.
-   [ ] Each page includes `<meta charset="UTF-8">` and a responsive
    viewport meta tag.
-   [ ] Each page has a unique, descriptive `<title>`.
-   [ ] At least one external stylesheet is used and applies to all four
    webpages.

### CSS features

-   [ ] CSS Grid is used at least once.
-   [ ] CSS Flexbox is used at least once.
-   [ ] At least one custom font is used.

### Restrictions

-   [ ] No HTML or CSS templates or frameworks are used.
-   [ ] A normalize or reset CSS file is permitted.

## 5. Design Plan

### Wireframes

Before coding, make quick sketches or wireframes for each page. Consider
the following widths:

-   Mobile: **320px**
-   Tablet: approximately **768px**
-   Desktop: approximately **1200px and wider**

The same shared site structure should be recognizable across all pages.

Suggested shared layout:

``` text
┌──────────────────────────────┐
│ Skip to content (visible on   │
│ keyboard focus)               │
├──────────────────────────────┤
│ Header: site name + nav       │  ← Flexbox can be used here
├──────────────────────────────┤
│ <main id="main">              │
│   Page heading                │
│   Content sections            │  ← Grid can be used where useful
├──────────────────────────────┤
│ Footer: copyright, credits    │
└──────────────────────────────┘
```

### Style guide

Fill in the design decisions before or during the planning stage.

-   **Colour palette:** primary \_\_\_ / secondary \_\_\_ / accent
    \_\_\_ / text \_\_\_ / background \_\_\_
-   **Heading font:** \_\_\_ (custom font)
-   **Body font:** \_\_\_ (custom or system font stack)
-   **Spacing scale:** for example, `0.5rem`, `1rem`, `1.5rem`, `2rem`,
    `3rem`
-   **Breakpoints:** choose suitable mobile-first breakpoints. Suggested
    minimum-width breakpoints include `48em` (768px), `64em` (1024px),
    and `90em` (1440px).

Check text/background colour contrast. A contrast ratio of at least
4.5:1 is a useful target for normal-sized text.

Define reusable colours, fonts, and spacing as CSS custom properties in
`:root`.

## 6. Code Quality Standards

### HTML

-   Use semantic HTML elements where appropriate, including `header`,
    `nav`, `main`, `section`, `article`, `aside`, and `footer`.
-   Use one clear `<h1>` for the main page heading on each page and
    maintain a logical heading hierarchy.
-   Use consistent indentation and readable formatting.
-   Use meaningful link text and descriptive image alternative text.
-   Validate the HTML with the W3C HTML Validator.

### CSS

-   Use a **mobile-first** approach: write base styles for small
    screens, then use `min-width` media queries to enhance the layout
    for wider screens.
-   Make the site work from **320px to at least 1920px** without
    unintended horizontal scrolling.
-   Organize CSS logically, for example: custom properties, base
    styles/typography, layout, components, utilities, and media queries.
-   Prefer flexible and relative sizing such as `rem`, `%`, and `fr`;
    avoid unnecessary fixed widths.
-   Validate the CSS with the W3C CSS Validator.

## 7. Accessibility and Performance

### Accessibility

-   [ ] Include a "Skip to content" link as the first focusable element.
    It should target the main content, such as `<main id="main">`.
-   [ ] Ensure the site can be navigated using a keyboard.
-   [ ] Provide a visible `:focus-visible` style.
-   [ ] Mark the current page in the navigation with
    `aria-current="page"`.
-   [ ] Use sufficient colour contrast.
-   [ ] Use descriptive link text; avoid vague labels such as "click
    here".
-   [ ] Provide captions for video content where applicable. Provide a
    transcript or equivalent text alternative for audio/video content
    where appropriate.
-   [ ] Respect `prefers-reduced-motion` if using animation or motion
    effects.
-   [ ] Test with an accessibility checker such as Lighthouse or WAVE
    and perform a keyboard-only navigation check.

### Performance

-   [ ] Optimize images and videos for the web.
-   [ ] Keep every image and video file at or below **10 MB**.
-   [ ] Export images at dimensions appropriate to their display size.
    As a practical guide, a full-width hero image may need up to
    approximately 1600px width, while content images may need 800px or
    less; use the actual layout to decide.
-   [ ] Resize images that are substantially larger than their rendered
    dimensions.
-   [ ] Compress images; WebP is a useful format where supported. A JPG
    fallback using `<picture>` may be used if needed.
-   [ ] Use `loading="lazy"` for below-the-fold images where
    appropriate. Do not lazy-load an above-the-fold hero image by
    default.
-   [ ] Compress videos or use short clips. Consider
    `preload="metadata"` and a `poster` image for video.
-   [ ] Use `font-display: swap` for self-hosted custom fonts where
    appropriate.
-   [ ] During each build/review pass, list image and video filenames
    and their file sizes. Flag files over 10 MB and note oversized image
    dimensions. Large audio files should also be reported as performance
    warnings.

## 8. Asset and Credits Tracker

Keep this tracker updated as assets are collected. Use it to prepare the
credits page.

  --------------------------------------------------------------------------------------------
  Asset/content        Type            Creator     Original    Exact        Page used
                                                   source URL  license      
  -------------------- --------------- ----------- ----------- ------------ ------------------
                       Image                                                

                       Image                                                

                       Video/audio                                          

                       Text                                                 

                       Font                                                 

                       Favicon                                              

  AI                   AI                          Link to     As           Planning/content
  assistant/resource   tool/resource               chat or     applicable   
                                                   resource                 
  --------------------------------------------------------------------------------------------

For each item, verify the license on the original source or creator's
page. Record the exact license name and link where available, and
include any attribution wording or modification notice required by that
license. Do not assume an asset is Creative Commons merely because it is
free to access or download.

The assignment specifically requires Creative Commons-licensed text,
video, and image content. A different free-use or royalty-free license
is not automatically a Creative Commons license. For fonts, icons, and
favicons, record the actual license and comply with its terms; do not
mislabel a license.

**Potential Creative Commons sources (verify each individual item):**

-   Wikimedia Commons --- check the license on each file page.
-   Openverse --- follow the result to the original source and verify
    its license there.
-   Flickr --- use Creative Commons filters and verify the individual
    photo's license.
-   Wikipedia --- check the license and attribution requirements for the
    specific text or media being reused.
-   Other sources may be used when the individual asset has a verified
    Creative Commons license.

For every credited asset, include the creator's name, a link to the
creator's website or profile, a link to the original asset/source, the
exact license, and the page on which it appears. Also credit the AI chat
or resource used, as required by the assignment.

## 9. Timeline and Milestones

1.  **Plan:** Choose the location, define the page topics, fill in the
    style guide, and sketch wireframes.
2.  **Gather content:** Find suitable Creative Commons text, images, and
    video; verify each license; update the credits tracker; optimize
    media.
3.  **Set up:** Create or prepare the public GitHub repository, folder
    structure, stylesheet, and favicon files.
4.  **Build HTML:** Write semantic markup for all four pages with shared
    navigation and consistent site structure.
5.  **Style mobile-first:** Write base styles, then add tablet and
    desktop layouts using appropriate breakpoints.
6.  **Accessibility pass:** Test keyboard navigation, focus visibility,
    colour contrast, and the site with Lighthouse or WAVE.
7.  **Validate and test:** Run the W3C HTML and CSS validators; test at
    320px, 768px, 1024px, and 1920px.
8.  **Finalize:** Complete the credits page, write the README, verify
    all links and assets, and push the final version to the public
    GitHub repository.

## 10. Final Submission Checklist

Before declaring the project complete, inspect the actual project files
and verify each item.

-   [ ] All four HTML pages are present, complete, and linked through
    the shared navigation.
-   [ ] The three location pages cover the chosen location.
-   [ ] The credits page links to content creators' websites and the AI
    chat/resource used.
-   [ ] Each individual asset/content credit identifies the page where
    it is used.
-   [ ] Text, image, and video content meets the assignment's Creative
    Commons licensing requirement, with licenses verified at the source.
-   [ ] Every required HTML element and CSS feature in Section 4 is
    present and verified in the actual code.
-   [ ] No prohibited HTML/CSS templates or frameworks have been used;
    normalize/reset CSS is the only permitted exception.
-   [ ] Each page has a unique title and SEO description.
-   [ ] Navigation links to all four pages and works from every page.
-   [ ] Favicon files are correctly linked on all pages, and manifest
    icon paths are correct if a manifest is used.
-   [ ] The shared external stylesheet is linked and loads on all four
    pages.
-   [ ] HTML and CSS have been checked with the relevant W3C validators;
    report any remaining errors.
-   [ ] The site has been checked for accessibility, including skip
    link, keyboard navigation, focus visibility, and colour contrast.
-   [ ] The site has been tested at 320px, 768px, 1024px, and 1920px,
    with no unintended horizontal scrolling.
-   [ ] All image and video files are optimized and at or below 10 MB.
-   [ ] All image/video filenames and file sizes have been listed;
    oversized image dimensions and unusually large audio files have been
    flagged.
-   [ ] All local image, video, audio, stylesheet, navigation, and
    favicon paths have been checked.
-   [ ] The credits page is complete and accurately attributes every
    asset/content item.
-   [ ] The final code is pushed to a **public** GitHub repository.

When reporting a review, use `✅` for verified requirements, `❌` for
requirements that are missing or fail, and **Not verified** when the
available project files do not allow a reliable check. Include the
relevant filename and line number where possible. Do not mark the
project ready for submission while mandatory items remain missing or
unverified.
