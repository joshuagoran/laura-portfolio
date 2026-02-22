# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server (http://localhost:5173)
- `npm run build` — Type-check with `tsc --noEmit`, then production build to /dist
- `npm run lint` — Biome lint + format check
- `npm run format` — Biome auto-format (write)
- `npm run preview` — Preview production build

No test framework is configured.

## Architecture

React 19 SPA built with Vite 7 and TypeScript, using React Router DOM v7 for client-side routing. Pre-rendered to static HTML via `vite-prerender-plugin`. All source is TSX/TS.

**Routing** (defined in `App.tsx`):
- `/` → Home (eagerly loaded — not lazy — to avoid hydration flash with pre-rendered hero)
- `/projects` → All projects with category filtering
- `/projects/:slug` → Project detail (slug-based lookup)
- `/about` → About page
- `/services` → Service tiers (Mini Garden Vision, Signature Planting Plan, Site Planning)
- `/sketches` → Sketch gallery (uses `ImageGallery` component with CSS columns masonry + lightbox)
- `/contact` → Contact form

All pages except Home are lazy-loaded via `React.lazy` + `Suspense`.

**Data layer**: No API or database. All content is static and inline.
- `projects.ts` — `Project` type + synchronous `projects` array and `categories` export. The `Project` type has JSDoc comments on each field describing where it's used — **keep those comments up to date when changing how fields are consumed in components.** Image paths use a template literal type (`` `/images/projects/${string}`[] ``) for path enforcement.
- Hero, About, Contact, Services content is hardcoded directly in their components
- Sketch images stored in `public/images/sketches/`; `ImageGallery` component provides thumbnail grid + lightbox

No global state management. Components use local `useState` only where needed (e.g., category filtering).

**Key shared components**:
- `Reveal` — Scroll-triggered fade-in using `useInView` hook (IntersectionObserver). Respects `prefers-reduced-motion`.
- `ScrollToTop` — Scrolls to top on route change
- `TransitionLink` — View Transitions API wrapper for page navigation (progressive enhancement)
- `useInView` hook (`src/hooks/useInView.ts`) — IntersectionObserver wrapper for scroll reveals

**Styling**: CSS Modules (one `.module.css` per component in `src/styles/`). Design tokens (colors, typography, spacing, easing, `--max-width`) defined as CSS custom properties in `:root` in `src/index.css`. No CSS frameworks. `prefers-reduced-motion` kill switch uses `:root body *` specificity to disable all animations.

**Layout**: `App.tsx` renders `Navbar` + `<main>` with `<Routes>`. No footer currently (deferred — see `Ideas/site-redesign-proposal.md`). Pages use `var(--max-width)` for consistent max-width container.

## SEO

- `public/robots.txt` — crawl directives, points to sitemap
- `public/sitemap.xml` — all pages with priority. **Update when adding/removing routes or projects.**
- `index.html` — JSON-LD LocalBusiness schema. Update if business info changes.
- `src/prerender-head.ts` — per-page title, description, OG/Twitter tags. **Update when adding new pages.**

When committing changes that add/remove pages or projects, update `sitemap.xml` and `prerender-head.ts` accordingly.

## Conventions

- Components use PascalCase default exports in `.tsx` files
- CSS Module classes use camelCase
- Always use `type` (not `interface`) for TypeScript type definitions
- Biome handles linting and formatting (4-space indentation, double quotes)
- Props drilling — no Context API or state libraries
