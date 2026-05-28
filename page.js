/**
 * ECorr Marketing — Course Landing Page
 * Wix Velo page code
 *
 * Paste this into the Page Code panel in Wix Editor / Studio.
 * Element IDs referenced below must match what is set in the Editor.
 */

// ── Wix Velo entry point ──────────────────────────────────────
$w.onReady(function () {

  // ── Hero CTA hover states ───────────────────────────────────
  $w('#primaryCTA').onMouseIn(() => {
    $w('#primaryCTA').style.backgroundColor = '#D4B48A';
    $w('#primaryCTA').style.borderColor     = '#D4B48A';
  });
  $w('#primaryCTA').onMouseOut(() => {
    $w('#primaryCTA').style.backgroundColor = '#C19B6A';
    $w('#primaryCTA').style.borderColor     = '#C19B6A';
  });

  $w('#secondaryCTA').onMouseIn(() => {
    $w('#secondaryCTA').style.backgroundColor = 'rgba(193,155,106,0.08)';
  });
  $w('#secondaryCTA').onMouseOut(() => {
    $w('#secondaryCTA').style.backgroundColor = 'transparent';
  });

  // ── Enroll CTA hover states ─────────────────────────────────
  $w('#enrollCTA').onMouseIn(() => {
    $w('#enrollCTA').style.backgroundColor = '#D4B48A';
    $w('#enrollCTA').style.borderColor     = '#D4B48A';
  });
  $w('#enrollCTA').onMouseOut(() => {
    $w('#enrollCTA').style.backgroundColor = '#C19B6A';
    $w('#enrollCTA').style.borderColor     = '#C19B6A';
  });

  // ── Smooth-scroll anchor buttons ───────────────────────────
  // "See What's Inside" → curriculum section
  $w('#secondaryCTA').onClick(() => {
    $w('#sectionCurriculum').scrollTo();
  });

  // "Start the Course" and "Enroll Now" → pricing section
  $w('#fitCTA').onClick(() => {
    $w('#sectionPricing').scrollTo();
  });

  $w('#enrollCTA').onClick(() => {
    // Replace with actual course checkout URL when available
    console.log('Enroll CTA clicked — connect to checkout');
  });

  // ── Module repeater data ────────────────────────────────────
  // If using a Wix Repeater (#moduleRepeater), bind data here.
  // Otherwise data is hardcoded in the Editor's repeater items.
  const modules = [
    { num: '01', title: 'The Marketing Mindset That Closes Deals',             desc: 'Shift from promoting to persuading — the only frame that converts at scale.' },
    { num: '02', title: 'Understanding Your Buyer\'s Pain Psychology',          desc: 'Map the exact fears and frustrations that make your buyer act now, not later.' },
    { num: '03', title: 'Building Your Offer Around Consequence Not Features',  desc: 'Rewrite your offer so buyers feel what they lose by waiting, not what you offer.' },
    { num: '04', title: 'AI Lead Generation — The System That Works While You Sleep', desc: 'Deploy an AI-powered lead engine that qualifies and captures 24 hours a day.' },
    { num: '05', title: 'The AI Receptionist — Never Miss a Lead Again',        desc: 'Set up automated follow-up that responds in seconds and books the call for you.' },
    { num: '06', title: 'Paid Advertising That Converts — Facebook & Instagram', desc: 'Build Meta campaigns with the structure, copy, and creative that actually produce leads.' },
    { num: '07', title: 'Google Ads & SEO for Local Dominance',                 desc: 'Own your local search results and convert high-intent clicks into booked appointments.' },
    { num: '08', title: '4K Video Marketing — Making Your Brand Cinematic',     desc: 'Produce brand videos that look like a film crew — using what you already own.' },
    { num: '09', title: 'Building a Lead Funnel From Cold to Closed',           desc: 'Engineer the full buyer journey from first impression to signed contract.' },
    { num: '10', title: 'Writing Copy That Creates Urgency',                    desc: 'Write headlines, emails, and ad copy that make the decision obvious and immediate.' },
    { num: '11', title: 'Handling Objections on Every Sales Call',              desc: 'Arm yourself with the exact rebuttals that turn hesitation into commitment.' },
    { num: '12', title: 'Measuring What Matters — KPIs and Scaling',            desc: 'Track the numbers that predict growth and cut everything that wastes money.' },
  ];

  // Bind to repeater if it exists on the page
  if ($w('#moduleRepeater')) {
    $w('#moduleRepeater').data = modules;
    $w('#moduleRepeater').onItemReady(($item, itemData) => {
      $item('#moduleNum').text   = itemData.num;
      $item('#moduleTitle').text = itemData.title;
      $item('#moduleDesc').text  = itemData.desc;
    });
  }

});

/**
 * ── Wix Velo Element ID Reference ───────────────────────────
 *
 * Set these IDs in the Wix Editor Properties panel:
 *
 * Buttons
 *   #primaryCTA      — Hero "Enroll Now" button
 *   #secondaryCTA    — Hero "See What's Inside" button
 *   #fitCTA          — Section 4 "Start the Course" button
 *   #enrollCTA       — Section 6 "Enroll Now — Start Today" button
 *
 * Sections (for scrollTo targets)
 *   #sectionHero         — Section 1
 *   #sectionPain         — Section 2
 *   #sectionCurriculum   — Section 3
 *   #sectionFit          — Section 4
 *   #sectionInstructor   — Section 5
 *   #sectionPricing      — Section 6
 *
 * Module Repeater (optional)
 *   #moduleRepeater  — Wix Repeater component for the 12 modules
 *   #moduleNum       — Repeater item: module number text
 *   #moduleTitle     — Repeater item: module title text
 *   #moduleDesc      — Repeater item: module description text
 *
 * ── Implementation Checklist for Wix Studio / Editor X ──────
 *
 * 1. Fonts
 *    Dashboard → Site → Fonts → Add Google Fonts:
 *    Montserrat (700, 800, 900) · Open Sans (400)
 *
 * 2. Colors
 *    Dashboard → Site → Colors:
 *    Gold   #C19B6A
 *    Black  #0F0F0F
 *    Dark   #1a1a1a
 *    White  #FFFFFF
 *
 * 3. Hero section
 *    - Full-width strip, background #0F0F0F
 *    - Add Box element (14×14px, fill #C19B6A, border-radius 3px) top-right → ID: heroAccentSquare
 *    - Headline text: Montserrat 800, 56px → 36px mobile
 *    - Gold stat dividers: 1px vertical box, fill #C19B6A
 *
 * 4. Module grid
 *    - Use Wix Repeater, set to 3 columns
 *    - Card background #FFFFFF, border 1px #e0ddd6, border-radius 12px
 *    - Collapse to 1 column at mobile breakpoint
 *
 * 5. Pricing card
 *    - Box: background #1a1a1a, border 2px #C19B6A, border-radius 16px
 *    - Add accent square (14×14px, #C19B6A, 3px radius) top-right corner
 *    - Replace [PRICE] text element with actual price when ready
 *
 * 6. Mobile breakpoints (Settings → Breakpoints)
 *    - 1280px desktop
 *    - 768px tablet (Section 4 two-col → single col)
 *    - 390px mobile (Hero headline 36px, module grid 1-col, pricing padding 24px)
 *
 * 7. SEO (Settings → SEO)
 *    Title: ECorr Marketing Course — Learn Marketing That Actually Grows Your Business
 *    Description: A no-fluff marketing course built for $500K+ business owners.
 *    AI lead generation, video marketing, paid ads, and the sales psychology that closes deals.
 */
