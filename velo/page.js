/* ============================================================
   ECorr Marketing — Course Landing Page
   Wix Velo Page Code  (Steps 2 · 3 · 5A)
   Paste into: Wix Studio → Page Code panel
   ============================================================

   ════════════════════════════════════════════════════════════
   ELEMENT ID ASSIGNMENT MAP  (Step 2)
   ════════════════════════════════════════════════════════════

   Set each ID in the Wix Editor Properties panel → ID field.
   Every element listed here must exist on the page before
   this code is live — missing IDs throw silent Velo errors.

   ── HERO SECTION ──────────────────────────────────────────
   ID                 Type            Controls
   ─────────────────────────────────────────────────────────
   #heroSection       Strip / Box     Full-width dark hero container
   #heroHeadline      Text            Main h1 headline (two lines)
   #heroSubheadline   Text            18px grey subheadline paragraph
   #primaryCTA        Button          "Enroll Now →" — gold fill
   #secondaryCTA      Button          "See What's Inside" — ghost border
   #statStrip         Box / Strip     Inline stats row (12 Modules etc.)

   ── PAIN SECTION ──────────────────────────────────────────
   #painSection       Strip           Full-width dark consequence section
   #painCard1         Box             Consequence card 1 (border-left gold)
   #painCard2         Box             Consequence card 2
   #painCard3         Box             Consequence card 3

   ── CURRICULUM SECTION ────────────────────────────────────
   #curriculumSection Strip           Off-white background module grid
   #moduleRepeater    Repeater        12-item module card grid (3 cols)
     └─ child items (set inside repeater):
        #moduleNum    Text            "01" – "12", Montserrat 800 gold
        #moduleTitle  Text            Module title, Montserrat 700
        #moduleDesc   Text            One-sentence desc, Open Sans 400

   ── WHO IT'S FOR SECTION ──────────────────────────────────
   #forSection        Strip           Dark two-column section
   #fitCTA            Button          "Start the Course →" — gold fill
   #forList           Container       ✓ YES list items container
   #notForList        Container       ✗ NO list items container

   ── INSTRUCTOR SECTION ────────────────────────────────────
   #instructorSection Strip           Dark #1a1a1a background
   #stat1             Text            Animated counter → "100+"
   #stat2             Text            Static "$500K+"
   #stat3             Text            Static "24/7"

   ── PRICING SECTION ───────────────────────────────────────
   #pricingSection    Strip           Dark enrollment section
   #priceDisplay      Text            Course price — bound to COURSE_PRICE
   #originalPrice     Text            Crossed-out original price (optional)
   #enrollCTA         Button          "Enroll Now — Start Today →"
   #includesList      Container       Bullet list of what's included
   #urgencyLine       Text            Warning line below CTA button

   ── FOOTER ────────────────────────────────────────────────
   #footerSection     Strip           Bottom strip, border-top #1a1a1a
   #footerNav         Container       Nav links: Course · About · Contact
   #footerLogo        Image / SVG     eCORR wordmark

   ════════════════════════════════════════════════════════════ */

// ── Wix module imports ─────────────────────────────────────
import wixLocation from 'wix-location';
import { formFactor } from 'wix-window';

// ============================================================
// PRICE CONFIGURATION  (Step 5A)
// TODO: Replace COURSE_PRICE value before going live
// ============================================================
const COURSE_PRICE   = '$497';  // ← Edit this ONE line to change the price
const ORIGINAL_PRICE = '$797';  // ← Set to '' to hide the crossed-out price

// ============================================================
// MODULE DATA  (Step 3D)
// ============================================================
const modules = [
  {
    num:   '01',
    title: 'The Marketing Mindset That Closes Deals',
    desc:  'How top-performing businesses think about marketing before they spend a single dollar.',
  },
  {
    num:   '02',
    title: "Understanding Your Buyer's Pain Psychology",
    desc:  'Map the exact fears and consequences driving your ideal client\'s decisions.',
  },
  {
    num:   '03',
    title: 'Building Your Offer Around Consequence Not Features',
    desc:  'Why feature-led marketing loses deals and how to reframe everything around urgency.',
  },
  {
    num:   '04',
    title: 'AI Lead Generation — The System That Works While You Sleep',
    desc:  'Build an automated pipeline that qualifies and routes leads without human intervention.',
  },
  {
    num:   '05',
    title: 'The AI Receptionist — Never Miss a Lead Again',
    desc:  'Deploy a 24/7 voice and chat system that answers, qualifies, and books to your calendar.',
  },
  {
    num:   '06',
    title: 'Paid Advertising That Converts — Meta & Instagram',
    desc:  'AI-engineered campaigns on Facebook and Instagram built to feed a sales team, not collect impressions.',
  },
  {
    num:   '07',
    title: 'Google Ads & SEO for Local Dominance',
    desc:  'Own the first page. Own the reviews. Own the market in your geographic territory.',
  },
  {
    num:   '08',
    title: '4K Video Marketing — Making Your Brand Cinematic',
    desc:  'Why video is the highest-converting asset in your stack and how to produce it at a premium level.',
  },
  {
    num:   '09',
    title: 'Building a Lead Funnel From Cold to Closed',
    desc:  'The complete architecture from first impression to signed contract, automated at every stage.',
  },
  {
    num:   '10',
    title: 'Writing Copy That Creates Urgency',
    desc:  'The pain-first copywriting framework that moves $500K+ business owners to act.',
  },
  {
    num:   '11',
    title: 'Handling Objections on Every Sales Call',
    desc:  'Every rebuttal a prospect will throw and the exact language to move through each one.',
  },
  {
    num:   '12',
    title: 'Measuring What Matters — KPIs and Scaling',
    desc:  'The metrics that reveal what is working, what to cut, and when to scale spend aggressively.',
  },
];

// ============================================================
// UTILITY — easeOutExpo easing function
// Used by the stat counter animation.
// t = elapsed time (0–1 normalised)
// ============================================================
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// ============================================================
// UTILITY — animateCounter
// Counts a numeric value up from 0 to `target` over `duration`ms
// at ~60fps, appending `suffix` after the number.
// elementId: Wix element to update (must be a Text element)
// ============================================================
function animateCounter(elementId, target, suffix, duration) {
  const startTime = Date.now();
  const interval = 1000 / 60; // ~60fps

  const tick = setInterval(() => {
    const elapsed  = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);         // clamp 0–1
    const eased    = easeOutExpo(progress);
    const current  = Math.round(eased * target);

    $w(elementId).text = current + suffix;

    if (progress >= 1) {
      clearInterval(tick); // stop when animation completes
      $w(elementId).text = target + suffix; // guarantee exact final value
    }
  }, interval);
}

// ============================================================
// UTILITY — observeInView
// Fires `callback` once when `elementId` enters the viewport.
// Wix does not expose IntersectionObserver directly, so we use
// a scroll-position polling approach that is Velo-compatible.
// callback fires only once (guard with `triggered` flag).
// ============================================================
function observeInView(elementId, callback) {
  let triggered = false;

  // Poll every 200ms — lightweight given we stop after first trigger
  const poll = setInterval(() => {
    try {
      const el = $w(elementId);

      // getBoundingClientRect is available in Velo via .getClientRect()
      // (Wix returns a promise for element position in some versions)
      if (el && typeof el.getClientRect === 'function') {
        el.getClientRect().then((rect) => {
          if (!triggered && rect && rect.y < (typeof window !== 'undefined' ? window.innerHeight * 1.1 : 1000)) {
            triggered = true;
            clearInterval(poll);
            callback();
          }
        }).catch(() => clearInterval(poll));
      } else {
        // Fallback: fire immediately if getClientRect unavailable
        if (!triggered) {
          triggered = true;
          clearInterval(poll);
          callback();
        }
      }
    } catch (e) {
      clearInterval(poll); // element not on page — stop polling
    }
  }, 200);
}

// ============================================================
// UTILITY — fadeInSequence
// Sets opacity and translateY on a list of element IDs with
// staggered delays. Wix does not have a native stagger API,
// so we use setTimeout chains + Velo's show() / style API.
// Elements must be set to opacity 0 in the Editor initially.
// ============================================================
function fadeInSequence(steps) {
  // steps: [{ id, delay }]
  steps.forEach(({ id, delay }) => {
    setTimeout(() => {
      try {
        // show() respects visibility; direct style sets opacity
        $w(id).style.opacity = '1';
        $w(id).style.transform = 'translateY(0)';
      } catch (e) {
        // Element not found — skip silently in preview mode
      }
    }, delay);
  });
}

// ============================================================
// PAGE ENTRY POINT  (Step 3A)
// ============================================================
$w.onReady(function () {

  // ── A. Price display ──────────────────────────────────────
  // Bind the configurable price to the text element
  $w('#priceDisplay').text = COURSE_PRICE;

  // Show original (crossed-out) price if one is configured
  if (ORIGINAL_PRICE && ORIGINAL_PRICE.length > 0) {
    $w('#originalPrice').text = ORIGINAL_PRICE;
    $w('#originalPrice').show();
    // CSS handles the line-through style — set on the element
    // in Editor: text-decoration: line-through; color: #555555
  } else {
    // No original price: hide the element to avoid empty space
    try { $w('#originalPrice').hide(); } catch (e) {}
  }

  // ── A. Hero entrance animation ───────────────────────────
  // Set initial state to invisible before first paint.
  // In Wix Editor: set each element's initial opacity to 0
  // and translateY to 20px so the fade-up reads correctly.
  fadeInSequence([
    { id: '#heroHeadline',    delay: 0   },  // fires immediately on load
    { id: '#heroSubheadline', delay: 300 },  // 300ms after headline
    { id: '#primaryCTA',      delay: 600 },  // 600ms — buttons appear together
    { id: '#secondaryCTA',    delay: 600 },
    { id: '#statStrip',       delay: 900 },  // stat strip last
  ]);

  // ── B. Button hover states ────────────────────────────────

  // Primary CTA (#primaryCTA) — gold fill, darkens on hover
  $w('#primaryCTA').onMouseIn(() => {
    $w('#primaryCTA').style.backgroundColor = '#D4B48A'; // gold light
    $w('#primaryCTA').style.borderColor     = '#D4B48A';
  });
  $w('#primaryCTA').onMouseOut(() => {
    $w('#primaryCTA').style.backgroundColor = '#C19B6A'; // gold base
    $w('#primaryCTA').style.borderColor     = '#C19B6A';
  });

  // Secondary CTA (#secondaryCTA) — ghost button, subtle fill on hover
  $w('#secondaryCTA').onMouseIn(() => {
    $w('#secondaryCTA').style.backgroundColor = 'rgba(193,155,106,0.10)';
    // Border stays #C19B6A — set in Editor, Velo does not override it
  });
  $w('#secondaryCTA').onMouseOut(() => {
    $w('#secondaryCTA').style.backgroundColor = 'transparent';
  });

  // Enroll CTA (#enrollCTA) — gold fill + slight scale on hover
  // Note: Wix Velo does not expose CSS transform on Button elements,
  // so scale is achieved via a CSS class toggle if needed.
  $w('#enrollCTA').onMouseIn(() => {
    $w('#enrollCTA').style.backgroundColor = '#D4B48A';
    $w('#enrollCTA').style.borderColor     = '#D4B48A';
    // Add CSS class .btn-hovered in Custom CSS that sets transform: scale(1.02)
    // then toggle it here:
    try { $w('#enrollCTA').addClass('btn-hovered'); } catch (e) {}
  });
  $w('#enrollCTA').onMouseOut(() => {
    $w('#enrollCTA').style.backgroundColor = '#C19B6A';
    $w('#enrollCTA').style.borderColor     = '#C19B6A';
    try { $w('#enrollCTA').removeClass('btn-hovered'); } catch (e) {}
  });

  // Who It's For CTA (#fitCTA) — same as primary
  try {
    $w('#fitCTA').onMouseIn(() => {
      $w('#fitCTA').style.backgroundColor = '#D4B48A';
      $w('#fitCTA').style.borderColor     = '#D4B48A';
    });
    $w('#fitCTA').onMouseOut(() => {
      $w('#fitCTA').style.backgroundColor = '#C19B6A';
      $w('#fitCTA').style.borderColor     = '#C19B6A';
    });
  } catch (e) {}

  // ── C. Scroll behaviour ───────────────────────────────────

  // "See What's Inside" scrolls to the curriculum section
  $w('#secondaryCTA').onClick(() => {
    $w('#curriculumSection').scrollTo();
  });

  // Hero "Enroll Now" scrolls to the pricing card
  $w('#primaryCTA').onClick(() => {
    $w('#pricingSection').scrollTo();
  });

  // "Start the Course" in Who It's For also goes to pricing
  try {
    $w('#fitCTA').onClick(() => {
      $w('#pricingSection').scrollTo();
    });
  } catch (e) {}

  // Enrollment CTA navigates to the checkout page (Step 3F)
  $w('#enrollCTA').onClick(() => {
    wixLocation.to('/enroll'); // ← Replace '/enroll' with the actual path or external URL
  });

  // ── C. Scroll-triggered fade-in on pain cards ─────────────
  // Each pain card starts hidden in the Editor (opacity 0).
  // We observe each card and reveal it when it enters the viewport.
  // Stagger: card2 fires 200ms after card1, card3 200ms after card2.
  observeInView('#painCard1', () => {
    $w('#painCard1').style.opacity   = '1';
    $w('#painCard1').style.transform = 'translateY(0)';

    // Stagger card 2
    setTimeout(() => {
      try {
        $w('#painCard2').style.opacity   = '1';
        $w('#painCard2').style.transform = 'translateY(0)';
      } catch (e) {}
    }, 200);

    // Stagger card 3
    setTimeout(() => {
      try {
        $w('#painCard3').style.opacity   = '1';
        $w('#painCard3').style.transform = 'translateY(0)';
      } catch (e) {}
    }, 400);
  });

  // ── D. Module repeater population ────────────────────────
  // Bind the modules array to the Repeater component.
  // Each item exposes #moduleNum, #moduleTitle, #moduleDesc.
  $w('#moduleRepeater').onItemReady(($item, itemData) => {
    $item('#moduleNum').text   = itemData.num;
    $item('#moduleTitle').text = itemData.title;
    $item('#moduleDesc').text  = itemData.desc;
  });
  // Setting .data triggers onItemReady for each item
  $w('#moduleRepeater').data = modules;

  // ── E. Stat counter animation (instructor section) ────────
  // Observe when the instructor section scrolls into view,
  // then fire the counter for stat1. stat2 and stat3 are static.
  observeInView('#instructorSection', () => {
    // stat1: count 0 → 100 over 1500ms with easeOutExpo
    animateCounter('#stat1', 100, '+', 1500);

    // stat2 and stat3 are static — ensure correct text
    try { $w('#stat2').text = '$500K+'; } catch (e) {}
    try { $w('#stat3').text = '24/7';   } catch (e) {}
  });

  // ── Mobile form factor adjustments ───────────────────────
  // CSS handles most responsive behaviour.
  // These JS adjustments cover edge cases CSS cannot reach.
  if (formFactor === 'Mobile') {
    // On mobile, keep stat strip dividers hidden
    try {
      $w('#statStrip').childNodes?.forEach((child) => {
        if (child.id && child.id.includes('divider')) {
          child.hide();
        }
      });
    } catch (e) {}
  }

  // ── Font load verification (Step 1) ──────────────────────
  // Warn the developer in preview if Montserrat 800 fails to load.
  // Uses the FontFace API which is available in Wix's browser context.
  if (typeof document !== 'undefined' && document.fonts) {
    document.fonts.ready.then(() => {
      const loaded = [...document.fonts].some(
        (f) => f.family.includes('Montserrat') && f.weight === '800' && f.status === 'loaded'
      );
      if (!loaded) {
        console.warn(
          '[ECorr] ⚠ Montserrat 800 (ExtraBold) did not load. ' +
          'Headlines will fall back to Arial Black. ' +
          'Check: Wix Dashboard → Site → Fonts, and confirm the custom CSS @font-face src URL is reachable.'
        );
      }
    });
  }

}); // end $w.onReady

/* ============================================================
   CSS — Enroll CTA hover scale helper
   Add to Wix Custom CSS panel alongside fonts.css:

   .btn-hovered {
     transform: scale(1.02) !important;
     transition: transform 200ms ease !important;
   }

   Also add these initial hidden states for the fade-in anims
   (set in Editor OR via this CSS block):

   #heroHeadline,
   #heroSubheadline,
   #primaryCTA,
   #secondaryCTA,
   #statStrip,
   #painCard1,
   #painCard2,
   #painCard3 {
     opacity: 0;
     transform: translateY(20px);
     transition: opacity 500ms ease, transform 500ms ease;
   }

   And the crossed-out original price:

   #originalPrice {
     text-decoration: line-through;
     color: #555555;
     font-size: 20px;
     display: block;
     text-align: center;
     margin-bottom: 4px;
   }
   ============================================================ */
