# ECorr Marketing — Wix Studio Implementation Checklist

Complete every step in this exact order before the page goes live.
Each step references the file that contains the relevant code.

---

## PHASE 1 — SITE-LEVEL SETUP

1. **Add Google Fonts**
   Dashboard → Settings → Custom Fonts → Add Google Font
   - Add: `Montserrat` — select weights **700, 800, 900**
   - Add: `Open Sans` — select weight **400**
   Verify both fonts appear in the Editor's font picker before continuing.

2. **Add brand colour swatches**
   Dashboard → Design → Colour Palette → Edit
   Add these five exact hex values:
   - `#C19B6A` — Gold (primary accent)
   - `#D4B48A` — Gold Light (hover state)
   - `#8A6A3F` — Gold Dark (accessible text)
   - `#0F0F0F` — Near Black (page background)
   - `#1a1a1a` — Dark (card / section backgrounds)

3. **Paste fonts.css into Custom CSS**
   Studio → Site → Custom CSS → paste entire contents of `velo/fonts.css`
   This sets `@font-face` fallbacks and CSS custom properties.

4. **Set page SEO metadata**
   Studio → Pages → Course Page → SEO
   - Title: `ECorr Marketing Course — Learn Marketing That Actually Grows Your Business`
   - Description: `A no-fluff marketing course built for $500K+ business owners. AI lead generation, video marketing, paid ads, and the sales psychology that closes deals.`
   - Open Graph image: upload a 1200×630px cinematic brand image (dark, gold-lit)

---

## PHASE 2 — ELEMENT CONSTRUCTION & ID ASSIGNMENT

Work through every section top to bottom. After placing each element,
open its Properties panel and set the exact ID listed below.

5. **Hero Section (`#heroSection`)**
   - Add full-width Strip → fill `#0F0F0F`
   - Add Text element → ID: `#heroHeadline`
     Font: Montserrat 800, 56px, White `#FFFFFF`
     Type both headline lines; apply gold colour `#C19B6A` to the second line
   - Add Text element → ID: `#heroSubheadline`
     Font: Open Sans 400, 18px, `#888888`, max-width 600px
   - Add Button → ID: `#primaryCTA`
     Label: `ENROLL NOW →` | Fill: `#C19B6A` | Text: `#0F0F0F`
     Font: Montserrat 700, all caps, letter-spacing 0.08em
     Border-radius: 8px
   - Add Button → ID: `#secondaryCTA`
     Label: `SEE WHAT'S INSIDE` | Fill: transparent | Border: 2px `#C19B6A` | Text: `#FFFFFF`
     Border-radius: 8px
   - Add Box/Strip → ID: `#statStrip`
     Inside: three Text elements ("12 Modules", "Self-Paced", "Built for $500K+ Owners")
     Separate with 1px wide × 14px tall Box elements, fill `#C19B6A`
     Font: Open Sans 400, 13px, `#666666`
   - Add Box (14×14px, fill `#C19B6A`, border-radius 3px) — positioned top-right of section
     (This is the decorative brand accent — no ID needed)

6. **Pain Section (`#painSection`)**
   - Add full-width Strip → fill `#0F0F0F`, border-top 1px solid `#1a1a1a`
   - Add Text → Section label: Montserrat 700, 11px, `#C19B6A`, all caps
   - Add Text → Headline: Montserrat 800, 40px, `#FFFFFF`
   - Add Box → ID: `#painCard1`
     Fill `#1a1a1a`, border-left 3px `#C19B6A`, border-radius 0 10px 10px 0
     Initial opacity: **0**, translateY: 20px (for scroll animation)
     Inside: Text for number (Montserrat 800, 22px, `#C19B6A`) + body text
   - Add Box → ID: `#painCard2` — same styling, initial opacity **0**
   - Add Box → ID: `#painCard3` — same styling, initial opacity **0**
   - Add Text → italic close line, Open Sans 400, 15px, `#C19B6A`

7. **Curriculum Section (`#curriculumSection`)**
   - Add full-width Strip → fill `#F4F3EF`
   - Add Text → section label + headline (Montserrat 800, 38px, `#0F0F0F`)
   - Add Repeater → ID: `#moduleRepeater`
     Set columns to **3** in the Repeater layout settings
     Inside the repeater item, add three Text elements:
     - ID: `#moduleNum`   — Montserrat 800, 28px, `#C19B6A`
     - ID: `#moduleTitle` — Montserrat 700, 15px, `#0F0F0F`
     - ID: `#moduleDesc`  — Open Sans 400, 13px, `#666666`
     Item container: fill `#FFFFFF`, border 1px `#e0ddd6`, border-radius 12px, padding 22px

8. **Who It's For Section (`#forSection`)**
   - Add full-width Strip → fill `#0F0F0F`
   - Left column: section label + headline (Montserrat 800, 38px, `#FFFFFF`) + body text
   - Add Button → ID: `#fitCTA`
     Same styling as `#primaryCTA`
   - Right column:
     - Add Container → ID: `#forList`
       Inside: five Text items, each starting with gold `✓`
     - Add Container → ID: `#notForList`
       Inside: three Text items, each starting with red `✗` (`#8B3A3A`)

9. **Instructor Section (`#instructorSection`)**
   - Add full-width Strip → fill `#1a1a1a`, centered content
   - Add Text → section label + headline (Montserrat 800, 32px, `#FFFFFF`)
   - Add Text → bio (Open Sans 400, 14px, `#888888`, max-width 600px)
   - Add three Text elements for stats:
     - ID: `#stat1` — Montserrat 900, 36px, `#C19B6A` (counter animates to "100+")
     - ID: `#stat2` — same style, static `$500K+`
     - ID: `#stat3` — same style, static `24/7`
   - Separate stats with 1px × 48px Box elements, fill `#2a2a2a`
   - Add label text under each stat (Open Sans 400, 12px, `#666666`, all caps)

10. **Pricing Section (`#pricingSection`)**
    - Add full-width Strip → fill `#0F0F0F`
    - Add Box → pricing card: fill `#1a1a1a`, border 2px `#C19B6A`, border-radius 16px
      max-width 540px, centred, padding 40px
    - Add Box (14×14px, fill `#C19B6A`, border-radius 3px) — top-right corner of card
      (Second brand accent square — non-interactive, no ID)
    - Add Text → ID: `#originalPrice`
      Initial: hidden. Font: Open Sans 400, 20px, `#555555`, line-through
    - Add Text → ID: `#priceDisplay`
      Montserrat 900, 64px, `#FFFFFF` — text is bound in page.js
    - Add Text → terms line: Open Sans 400, 13px, `#666666`, centred
    - Add Container → ID: `#includesList`
      Inside: six Text items, each with `·` bullet in `#C19B6A`
    - Add Button → ID: `#enrollCTA`
      Label: `ENROLL NOW — START TODAY →` | Full width of card
      Fill `#C19B6A` | Text `#0F0F0F` | Montserrat 700 | all caps | border-radius 8px
    - Add Text → ID: `#urgencyLine`
      "Every week you wait is a week your competitor pulls further ahead."
      Open Sans 400, 12px, `#555555`, centred

11. **Footer (`#footerSection`)**
    - Add full-width Strip → fill `#0F0F0F`, border-top 1px `#1a1a1a`
    - Add Image/SVG → ID: `#footerLogo` — upload eCORR SVG wordmark, left-aligned
    - Add Container → ID: `#footerNav`
      Inside: four Text links — Course · About · Contact · ecorrmarketing.com
      Open Sans 400, 12px, `#555555` | hover colour `#C19B6A`
    - Add Text → copyright: "© 2026 ECorr Marketing. All rights reserved."
      Open Sans 400, 12px, `#555555`

---

## PHASE 3 — VELO CODE

12. **Enable Velo dev mode**
    Studio → Dev Mode → Turn on Velo

13. **Paste page.js**
    Page Code panel → replace default content with `velo/page.js`

14. **Set course price**
    In `page.js` line 1 of the constants block:
    ```js
    const COURSE_PRICE   = '$497'; // ← change this value
    const ORIGINAL_PRICE = '$797'; // ← set to '' to hide
    ```

15. **Set enrollment URL**
    In `page.js`, find the `#enrollCTA` onClick handler:
    ```js
    wixLocation.to('/enroll');
    ```
    Replace `'/enroll'` with the actual Wix page slug or external checkout URL.

---

## PHASE 4 — CSS PANELS

16. **Paste repeater CSS**
    Studio → Page CSS panel (or Custom CSS) → add `velo/repeater.css`
    This controls the 3-column grid and card hover states.

17. **Paste mobile CSS**
    Studio → Custom CSS panel → add `velo/mobile.css` below fonts.css
    This adds tablet (≤768px) and mobile (≤390px) breakpoints.

18. **Paste animation initial states**
    In the Custom CSS panel, also add the block at the bottom of `page.js`
    (the comment block starting with "CSS — Enroll CTA hover scale helper").
    This sets the initial `opacity: 0` and `translateY(20px)` on elements
    that fade in, and the `.btn-hovered` scale class for the enroll button.

---

## PHASE 5 — QA & LAUNCH

19. **Preview at 390px width**
    Studio → Preview → drag the preview window to 390px
    Verify: hero headline 32px, CTAs stacked full-width, module grid 1 column,
    pricing card padding 24px, footer elements stacked.

20. **Preview at 768px width**
    Verify: hero CTAs full-width stacked, pain cards single column,
    module grid 2 columns, instructor stats 2-up grid.

21. **Preview at 1280px (desktop)**
    Verify: module grid exactly 3 columns, hero headline 56px,
    two-column Who It's For layout, both gold accent squares visible.

22. **Test scroll animations**
    Scroll slowly from hero to footer in Preview mode.
    Confirm: hero elements fade in sequentially, pain cards stagger in,
    stat counter counts from 0 to 100+.

23. **Verify font loading**
    Open browser DevTools Console while in Preview.
    If Montserrat 800 is missing, the warning message appears:
    `[ECorr] ⚠ Montserrat 800 (ExtraBold) did not load.`
    If it appears: re-check Step 1 and Step 3 above.

24. **Test all CTA buttons**
    - `#primaryCTA` → scrolls to pricing section
    - `#secondaryCTA` → scrolls to curriculum section
    - `#fitCTA` → scrolls to pricing section
    - `#enrollCTA` → navigates to checkout URL

25. **Test hover states**
    Hover every button: gold lightens to `#D4B48A`.
    Hover module cards: border turns gold, box-shadow appears.

26. **Confirm no blue anywhere**
    DevTools → Elements panel → search for `blue`, `#0000`, `#00f`, `teal`, `cyan`
    Zero results required before going live.

27. **Publish the page**
    Studio → Publish → go live.

---

*Last updated: 2026-05-28 | ECorr Marketing — ecorrmarketing.com*
