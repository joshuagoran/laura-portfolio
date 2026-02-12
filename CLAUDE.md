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

React 19 SPA built with Vite 7 and TypeScript, using React Router DOM v7 for client-side routing. All source is TSX/TS.

**Routing** (defined in `App.tsx`):
- `/` → Home (featured projects)
- `/projects` → All projects with category filtering
- `/projects/:slug` → Project detail (slug-based lookup)
- `/about` → About page
- `/services` → Service tiers (Mini Garden Vision, Signature Planting Plan, Site Planning)
- `/sketches` → Sketch gallery (uses `ImageGallery` component)
- `/contact` → Contact form

**Data layer**: No API or database. All content is static and inline.
- `projects.ts` — `Project` type + synchronous `projects` array and `categories` export
- Hero, About, Contact, Services, Footer content is hardcoded directly in their components
- Sketch images stored in `public/images/sketches/`; `ImageGallery` component provides thumbnail grid + lightbox

No global state management. Components use local `useState` only where needed (e.g., category filtering).

**Styling**: CSS Modules (one `.module.css` per component in `src/styles/`). Global styles in `src/index.css`. No CSS frameworks. Color palette centers on `#2c2c2c` dark with gray accents.

**Layout**: `App.tsx` renders `Navbar` + `<main>` with `<Routes>` + `Footer`. Pages use the `.section` class from `index.css` for consistent max-width container.

## Conventions

- Components use PascalCase default exports in `.tsx` files
- CSS Module classes use camelCase
- Always use `type` (not `interface`) for TypeScript type definitions
- Biome handles linting and formatting (4-space indentation, double quotes)
- Props drilling — no Context API or state libraries
