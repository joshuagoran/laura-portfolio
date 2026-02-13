# Site Redesign Proposal

Full redesign plan for Laura Noel's landscape architecture portfolio. Produced by a 3-agent critique session (designer, PM, engineer) analyzing the current repo, noellandscapestudio.com, nishielpatel.com, and futuregreenstudio.com.

## Design Direction

**North star**: The most considered portfolio in Laura's competitive tier. Editorial restraint, not flashy agency energy.

**Color palette** (earth tones):
- Background: `#faf8f5` (warm cream)
- Text: `#2c2c2c` (current dark)
- Accent: `#4a6741` (forest green)
- Highlight: `#b87333` (terracotta)
- Muted: `#888` (gray for metadata)

**Typography**:
- Body: Plus Jakarta Sans (weight 300, bump to 400 on mobile)
- Display: Prospectus Pro (hero, philosophy quotes, section titles)
- Scale: `clamp()` fluid sizing from `--text-sm` through `--text-hero`

**Layout philosophy**: Asymmetric, editorial. 12-column grid with 7/5 odd/even split on project cards. Full-bleed hero images. Narrow content columns (800px) for reading. Generous whitespace.

## Decisions (Locked)

| Area | Decision | Notes |
|------|----------|-------|
| Pre-rendering | vite-prerender-plugin (Preact team) | Unique OG tags per page, all routes pre-rendered to static HTML |
| Contact form | TBD — team recommends simplified conversational form: name, email, textarea ("Tell me about your project"). No project type dropdown, no budget field, no phone number. | Backend options in `Ideas/email-and-contact-strategy.md` |
| Analytics | None for now | |
| Masonry (sketches) | CSS `columns` | No JS, column-first order fine for gallery |
| Animation | CSS + `useInView` hook | IntersectionObserver, no library |
| Image optimization | Hybrid | vite-plugin-image-optimizer (auto compression) + sharp-cli (responsive srcset for hero/cover) |
| Page transitions | View Transitions API | Phase 3, progressive enhancement |
| Data model | Expanded Project type | Optional editorial fields |

## Fork Options (For Reference)

These were evaluated and the recommended option was chosen. Documented here in case we revisit.

### Masonry Layout
| Option | Pros | Cons |
|--------|------|------|
| **CSS `columns` (chosen)** | Zero JS, all browsers, tight packing | Column-first reading order (fine for galleries) |
| CSS Grid masonry | Row-first order | Firefox-only, experimental |
| react-masonry-css | Row-first order, configurable | 3KB dependency, layout shift risk |

### Animation Engine
| Option | Bundle | Pros | Cons |
|--------|--------|------|------|
| **CSS + useInView (chosen)** | 0 KB | Simple, performant, `prefers-reduced-motion` easy | No spring physics, no exit animations |
| Motion (Framer Motion) | ~32 KB | Spring physics, AnimatePresence | Large bundle, couples animation to React |
| GSAP | ~25 KB | Most powerful timeline | Imperative API, overkill for this scope |

### Page Transitions
| Option | Pros | Cons |
|--------|------|------|
| **View Transitions API (chosen)** | Browser-native, progressive enhancement | Chrome 111+, Safari 18+, no Firefox yet |
| CSS-only fade | One line, all browsers | No exit animation |
| Motion AnimatePresence | True enter + exit | ~32KB, React key edge cases |

### Image Optimization
| Option | Mobile per-image | Auto? | Generates srcset? |
|--------|-----------------|-------|--------------------|
| **Hybrid (chosen)** | ~45 KB (hero), ~900 KB (gallery) | Plugin: yes. Sharp: manual. | Sharp: yes. Plugin: no. |
| sharp-cli only | ~45 KB | No — must run manually | Yes |
| vite-plugin-image-optimizer only | ~900 KB | Yes | No |
| Cloudinary CDN | Varies | Yes | Yes (URL transforms) |

### Pre-rendering
| Option | Pros | Cons |
|--------|------|------|
| **vite-prerender-plugin (chosen)** | Auto route discovery, static HTML output, any host | Adds ~3s to build |
| vite-ssg | Faster builds, auto route discovery | More opinionated setup, less docs |
| Pure SPA | No build complexity | Empty HTML for crawlers, no social previews |
| Framework migration (Next.js/Astro) | Best long-term | Requires full rewrite |

### Contact Form Backend
| Option | Pros | Cons |
|--------|------|------|
| Formspree | Simplest, free 50/mo | No custom domain email |
| Cloudflare Pages Function + Resend | Full control, branded email | More setup |
| Formspree + Cloudflare Email | Middle ground | Two services |

See `Ideas/email-and-contact-strategy.md` for full breakdown.

## Architecture Changes

### New Files
- `src/hooks/useInView.ts` — IntersectionObserver hook for scroll reveals
- `src/components/ScrollToTop.tsx` — Scroll to top on route change
- `src/components/Reveal.tsx` — Shared scroll-triggered fade-in component
- `src/components/TransitionLink.tsx` — View Transitions API wrapper
- `src/styles/Home.module.css` — Homepage styles
- `src/AppPrerender.tsx` — Pre-render entry point
- `src/prerender-head.ts` — Per-page head tags for pre-rendering
- `src/fonts/ProspectusProMDEMO-Black.woff2` — Self-hosted display font
- `src/fonts/ProspectusProMDEMO-Bold.woff2` — Self-hosted display font

### Files to Delete (still present, unused)
- `src/components/ProjectShowcase.tsx` — Unused
- `src/styles/ProjectShowcase.module.css` — Unused

### Major Rewrites
- `src/index.css` — Design tokens, global animations, `prefers-reduced-motion`
- `src/components/Navbar.tsx` — Fixed, transparent→solid, hamburger mobile menu
- `src/styles/Navbar.module.css` — Full rewrite
- `src/pages/Home.tsx` — Narrative homepage (hero → featured projects). Homepage quote section and CTA were removed per LA critique — the About page handles Laura's story, and contact CTAs belong on Services/project detail pages where visitors have already invested attention. An optional about-teaser (2-3 sentences in Laura's voice + link to About) can be added back when Laura has her own copy ready.
- `src/components/Hero.tsx` — `<img>` with srcset, `data-hero` for navbar observer
- `src/pages/ProjectDetail.tsx` — Editorial case study layout
- `src/styles/ProjectDetail.module.css` — Full rewrite
- `src/styles/ProjectGrid.module.css` — Asymmetric 12-column grid
- `src/styles/ProjectCard.module.css` — Richer 3-layer hover
- `src/components/ImageGallery.tsx` — Full lightbox rebuild (focus trap, keyboard, swipe, ARIA)
- `src/styles/ImageGallery.module.css` — CSS columns masonry
- `src/pages/Services.tsx` — Editorial prose layout
- `src/components/Footer.tsx` — Currently removed from `App.tsx`. A minimal version exists (geography, copyright, Instagram) but was dropped per user decision. Can be re-added when Laura's practice grows and there's unique content for it. See component file for the ready-to-use minimal version.
- `src/data/projects.ts` — Expanded Project type
- `index.html` — Meta tags, OG tags, font preloads

### Expanded Project Type
See `src/data/projects.ts` for the canonical type with JSDoc comments. Key additions beyond the original type:
- `images` uses template literal type `` `/images/projects/${string}`[] `` for path enforcement
- `category` — project type label (e.g. "Residential", "Retreat Center")
- `role` — Laura's specific contribution
- `context` — project origin (independent, academic, collaborative)
- `status` — "completed" | "in-progress" | "design-phase"
- `plantPalette` / `materials` — detail page metadata
- `designThesis` / `collaborators` — editorial fields

## Implementation Phases

### Phase 1: Foundation
1. Design tokens in `index.css` (colors, typography, spacing, easing)
2. Replace hardcoded values across all CSS modules with `var()` tokens
3. `useInView` hook
4. `ScrollToTop` component
5. Navbar rewrite (fixed, transparent→solid, hamburger)
6. Footer activation and expansion
7. Hero rewrite (`<img>` with srcset)
8. Image optimization setup (plugin + sharp)

### Phase 2: Pages
1. Homepage narrative layout
2. Project grid (asymmetric) + card hover enrichment
3. Project detail (editorial case study)
4. Sketches page (CSS columns masonry + lightbox rebuild)
5. Services page (editorial prose)
6. Contact form (backend TBD — see email strategy doc)
7. About page refresh
8. Expanded Project data model

### Phase 3: Polish
1. Page fade-in animation (Patel-style `pageReveal`)
2. Scroll-driven reveal animations on all sections
3. View Transitions API for page navigation
4. Pre-rendering setup + OG tags
5. `prefers-reduced-motion` kill switch
6. Font optimization (convert Prospectus Pro OTF → WOFF2)
7. Code splitting with React.lazy
8. `index.html` meta tags

## Mobile Considerations

- Hero: 50vh (not 70vh) on mobile
- Font weight: 300 body → 400 on mobile for readability
- Hover effects scoped with `@media (hover: hover)` — touch devices skip hover states
- Project grid: single column on mobile
- Sketches: single column masonry on mobile, 2 at 640px+
- Lightbox: swipe gestures, larger close target (48px min)
- Navbar: hamburger with full-screen overlay, staggered link animations
- All touch targets: minimum 44x44px

## Reference Sites

- **nishielpatel.com**: Scroll-aware logo color (`mix-blend-mode: difference`), page fade-in, editorial restraint, generous whitespace
- **futuregreenstudio.com**: Project case study depth, process documentation, trust signals woven editorially
- **noellandscapestudio.com**: Laura's previous Squarespace site — content to mine, but design/layout to move away from
