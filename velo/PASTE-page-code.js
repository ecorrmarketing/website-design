// ================================================================
// ECORR MARKETING — COURSE PAGE
// Wix Velo · Page Code Panel
// ================================================================
// HOW TO USE:
//   1. In Wix Studio, enable Dev Mode (top bar → Dev Mode → Turn on)
//   2. Click the page name tab at the bottom → "Page Code"
//   3. Select all existing content and replace with this entire file
//   4. Before publishing, update the two lines marked ← EDIT THIS
// ================================================================

// ── Imports ─────────────────────────────────────────────────────
import wixLocation from 'wix-location';
import { formFactor } from 'wix-window';

// ================================================================
// CONFIGURATION — edit these two values only
// ================================================================
const COURSE_PRICE   = '$497';  // ← EDIT THIS: the price shown on the page
const ORIGINAL_PRICE = '$797';  // ← EDIT THIS: crossed-out "was" price. Set '' to hide.

// ================================================================
// ELEMENT ID REFERENCE
// Open Editor → click any element → Properties panel → set the ID
// ================================================================
//
// HERO
//   #heroSection       Strip      Full-width dark hero background
//   #heroHeadline      Text       Main headline, Montserrat 800 56px white
//   #heroSubheadline   Text       Subheadline, Open Sans 18px #888
//   #primaryCTA        Button     "Enroll Now →"  fill #C19B6A  text #0F0F0F
//   #secondaryCTA      Button     "See What's Inside"  ghost border #C19B6A
//   #statStrip         Box        Row: "12 Modules · Self-Paced · $500K+"
//
// PAIN
//   #painSection       Strip      Dark consequence section
//   #painCard1         Box        Card 1 — opacity 0 in Editor (JS reveals it)
//   #painCard2         Box        Card 2 — opacity 0 in Editor
//   #painCard3         Box        Card 3 — opacity 0 in Editor
//
// CURRICULUM
//   #curriculumSection Strip      Off-white #F4F3EF module grid section
//   #moduleRepeater    Repeater   12-card grid (set to 3 cols in Editor)
//     ↳ inside repeater item:
//       #moduleNum     Text       "01"–"12"  Montserrat 800 28px #C19B6A
//       #moduleTitle   Text       Title      Montserrat 700 15px #0F0F0F
//       #moduleDesc    Text       Desc       Open Sans 400 13px #666
//
// WHO IT'S FOR
//   #forSection        Strip      Dark two-column section
//   #fitCTA            Button     "Start the Course →"  same style as #primaryCTA
//   #forList           Container  ✓ YES items
//   #notForList        Container  ✗ NO items
//
// INSTRUCTOR
//   #instructorSection Strip      #1a1a1a background
//   #stat1             Text       Animated: counts to "100+"
//   #stat2             Text       Static: "$500K+"
//   #stat3             Text       Static: "24/7"
//
// PRICING
//   #pricingSection    Strip      Dark enrollment section
//   #priceDisplay      Text       Bound to COURSE_PRICE above
//   #originalPrice     Text       Crossed-out price — hidden if ORIGINAL_PRICE is ''
//   #enrollCTA         Button     "Enroll Now — Start Today →"  full-width gold
//   #includesList      Container  Six bullet items
//   #urgencyLine       Text       Urgency line below button
//
// FOOTER
//   #footerSection     Strip      #0F0F0F  border-top 1px #1a1a1a
//   #footerNav         Container  Nav links
//   #footerLogo        Image/SVG  eCORR wordmark
//
// ================================================================

// ================================================================
// MODULE DATA — 12 modules, bound to #moduleRepeater
// ================================================================
const modules = [
  {
    num:   '01',
    title: 'The Marketing Mindset That Closes Deals',
    desc:  'How top-performing businesses think about marketing before they spend a single dollar.',
  },
  {
    num:   '02',
    title: "Understanding Your Buyer's Pain Psychology",
    desc:  "Map the exact fears and consequences driving your ideal client's decisions.",
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
    desc:  'AI-engineered campaigns built to feed a sales team, not collect impressions.',
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

// ================================================================
// UTILITIES
// ================================================================

// easeOutExpo — smooth deceleration curve for the counter animation
// t is a normalised value 0→1 representing progress through time
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// animateCounter — counts from 0 to `target` over `duration` ms at 60fps
// suffix: string appended after the number (e.g. "+")
function animateCounter(elementId, target, suffix, duration) {
  const startTime = Date.now();
  const tick = setInterval(() => {
    const elapsed  = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);  // clamp to 1
    const current  = Math.round(easeOutExpo(progress) * target);
    try {
      $w(elementId).text = current + suffix;
    } catch (e) {
      clearInterval(tick);
      return;
    }
    if (progress >= 1) {
      clearInterval(tick);
      $w(elementId).text = target + suffix; // lock final value exactly
    }
  }, 1000 / 60);
}

// observeInView — fires `callback` once when element scrolls into view
// Uses Velo's getClientRect() polling because IntersectionObserver is
// not directly available in all Wix rendering contexts.
function observeInView(elementId, callback) {
  let triggered = false;
  const poll = setInterval(() => {
    try {
      const el = $w(elementId);
      if (el && typeof el.getClientRect === 'function') {
        el.getClientRect().then((rect) => {
          if (!triggered && rect) {
            // Fire when the top of the element is within 110% of viewport height
            const threshold = typeof window !== 'undefined' ? window.innerHeight * 1.1 : 900;
            if (rect.y < threshold) {
              triggered = true;
              clearInterval(poll);
              callback();
            }
          }
        }).catch(() => clearInterval(poll));
      } else {
        // getClientRect unavailable — fire immediately as a safe fallback
        if (!triggered) {
          triggered = true;
          clearInterval(poll);
          callback();
        }
      }
    } catch (e) {
      clearInterval(poll); // element does not exist — abort
    }
  }, 200);
}

// fadeInSequence — staggered opacity+translateY reveal for hero elements
// Each element must start at opacity:0 and translateY:20px in the Editor
// (or via the CSS block in the Custom CSS file).
function fadeInSequence(steps) {
  steps.forEach(({ id, delay }) => {
    setTimeout(() => {
      try {
        $w(id).style.opacity   = '1';
        $w(id).style.transform = 'translateY(0)';
      } catch (e) {
        // Missing element — skip silently so other animations still run
      }
    }, delay);
  });
}

// ================================================================
// PAGE READY
// ================================================================
$w.onReady(function () {

  // ── 1. Bind price display ──────────────────────────────────
  $w('#priceDisplay').text = COURSE_PRICE;

  if (ORIGINAL_PRICE && ORIGINAL_PRICE.length > 0) {
    // Show the crossed-out original price above the main price
    // CSS in the custom panel styles it with line-through and #555
    $w('#originalPrice').text = ORIGINAL_PRICE;
    $w('#originalPrice').show();
  } else {
    // Empty string = no original price — collapse the element
    try { $w('#originalPrice').hide(); } catch (e) {}
  }

  // ── 2. Hero entrance animation ────────────────────────────
  // Headline fires instantly; each subsequent element staggers by 300ms.
  // Elements must have initial opacity:0 set — see Custom CSS file.
  fadeInSequence([
    { id: '#heroHeadline',    delay: 0   },
    { id: '#heroSubheadline', delay: 300 },
    { id: '#primaryCTA',      delay: 600 },
    { id: '#secondaryCTA',    delay: 600 }, // buttons appear together
    { id: '#statStrip',       delay: 900 },
  ]);

  // ── 3. Button hover states ────────────────────────────────

  // Primary CTA — gold darkens slightly on hover
  $w('#primaryCTA').onMouseIn(()  => {
    $w('#primaryCTA').style.backgroundColor = '#D4B48A';
    $w('#primaryCTA').style.borderColor     = '#D4B48A';
  });
  $w('#primaryCTA').onMouseOut(() => {
    $w('#primaryCTA').style.backgroundColor = '#C19B6A';
    $w('#primaryCTA').style.borderColor     = '#C19B6A';
  });

  // Secondary CTA — ghost button gets a faint gold tint on hover
  $w('#secondaryCTA').onMouseIn(()  => {
    $w('#secondaryCTA').style.backgroundColor = 'rgba(193,155,106,0.10)';
  });
  $w('#secondaryCTA').onMouseOut(() => {
    $w('#secondaryCTA').style.backgroundColor = 'transparent';
  });

  // Enroll CTA — same gold hover + scale via CSS class
  $w('#enrollCTA').onMouseIn(() => {
    $w('#enrollCTA').style.backgroundColor = '#D4B48A';
    $w('#enrollCTA').style.borderColor     = '#D4B48A';
    try { $w('#enrollCTA').addClass('btn-hovered'); } catch (e) {}
  });
  $w('#enrollCTA').onMouseOut(() => {
    $w('#enrollCTA').style.backgroundColor = '#C19B6A';
    $w('#enrollCTA').style.borderColor     = '#C19B6A';
    try { $w('#enrollCTA').removeClass('btn-hovered'); } catch (e) {}
  });

  // Who It's For CTA — same as primary
  try {
    $w('#fitCTA').onMouseIn(()  => {
      $w('#fitCTA').style.backgroundColor = '#D4B48A';
      $w('#fitCTA').style.borderColor     = '#D4B48A';
    });
    $w('#fitCTA').onMouseOut(() => {
      $w('#fitCTA').style.backgroundColor = '#C19B6A';
      $w('#fitCTA').style.borderColor     = '#C19B6A';
    });
  } catch (e) {}

  // ── 4. Scroll anchors ─────────────────────────────────────

  // "See What's Inside" → jump to module grid
  $w('#secondaryCTA').onClick(() => {
    $w('#curriculumSection').scrollTo();
  });

  // Hero "Enroll Now" → jump to pricing card
  $w('#primaryCTA').onClick(() => {
    $w('#pricingSection').scrollTo();
  });

  // "Start the Course" → pricing card
  try {
    $w('#fitCTA').onClick(() => {
      $w('#pricingSection').scrollTo();
    });
  } catch (e) {}

  // Enrollment CTA → checkout
  // ← EDIT THIS: replace '/enroll' with your actual Wix page slug or checkout URL
  $w('#enrollCTA').onClick(() => {
    wixLocation.to('/enroll');
  });

  // ── 5. Pain card scroll-reveal ────────────────────────────
  // Cards start at opacity:0 (set in Custom CSS initial-states block).
  // When card 1 enters the viewport, all three stagger into view.
  observeInView('#painCard1', () => {
    $w('#painCard1').style.opacity   = '1';
    $w('#painCard1').style.transform = 'translateY(0)';

    setTimeout(() => {
      try {
        $w('#painCard2').style.opacity   = '1';
        $w('#painCard2').style.transform = 'translateY(0)';
      } catch (e) {}
    }, 200);

    setTimeout(() => {
      try {
        $w('#painCard3').style.opacity   = '1';
        $w('#painCard3').style.transform = 'translateY(0)';
      } catch (e) {}
    }, 400);
  });

  // ── 6. Module repeater ────────────────────────────────────
  // onItemReady fires for every item when .data is assigned below.
  $w('#moduleRepeater').onItemReady(($item, itemData) => {
    $item('#moduleNum').text   = itemData.num;
    $item('#moduleTitle').text = itemData.title;
    $item('#moduleDesc').text  = itemData.desc;
  });
  $w('#moduleRepeater').data = modules; // triggers onItemReady × 12

  // ── 7. Instructor stat counter ────────────────────────────
  // Counter fires once when the instructor section scrolls into view.
  observeInView('#instructorSection', () => {
    animateCounter('#stat1', 100, '+', 1500); // 0 → 100+ over 1.5s
    try { $w('#stat2').text = '$500K+'; } catch (e) {} // static
    try { $w('#stat3').text = '24/7';   } catch (e) {} // static
  });

  // ── 8. Mobile JS adjustments ──────────────────────────────
  // CSS handles the vast majority of responsive behaviour.
  // This catches anything CSS alone cannot reach on Mobile.
  if (formFactor === 'Mobile') {
    try {
      // Hide stat-strip dividers — they are vertical bars that
      // look wrong when the strip stacks vertically on mobile.
      // Dividers should have IDs like #statDivider1, #statDivider2.
      ['#statDivider1', '#statDivider2'].forEach((id) => {
        try { $w(id).hide(); } catch (e) {}
      });
    } catch (e) {}
  }

  // ── 9. Font load warning ──────────────────────────────────
  // If Montserrat 800 does not load, a console warning fires.
  // Open browser DevTools → Console while in Preview to see it.
  if (typeof document !== 'undefined' && document.fonts) {
    document.fonts.ready.then(() => {
      const loaded = [...document.fonts].some(
        (f) => f.family.includes('Montserrat') && f.weight === '800' && f.status === 'loaded'
      );
      if (!loaded) {
        console.warn(
          '[ECorr] ⚠ Montserrat 800 (ExtraBold) failed to load. ' +
          'Headlines are using Arial Black as a fallback. ' +
          'Fix: Wix Dashboard → Settings → Custom Fonts → confirm Montserrat 800 is added.'
        );
      }
    });
  }

}); // end $w.onReady
