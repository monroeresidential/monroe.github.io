# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (runs `tsc -b && vite build`, outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint with TypeScript + React hooks/refresh rules)
- **Preview (Cloudflare):** `npm run preview` (builds then runs `wrangler dev`)
- **Deploy (Cloudflare):** `npm run deploy` (builds then runs `wrangler deploy`)

No test framework is configured.

## Architecture

This is the **Monroe Residential** corporate website — a React SPA for a multifamily real estate development firm. Deployed to Cloudflare Workers (with SPA fallback routing via `wrangler.jsonc`). A GitHub Actions workflow also deploys to GitHub Pages on push to `main`.

**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + react-router-dom v7

### Routing (src/App.tsx)

BrowserRouter with routes: `/`, `/about`, `/team`, `/team/:id`, `/portfolio`, `/portfolio/:id`

### Data Layer

All content is static TypeScript — no API or CMS:
- `src/data/projects.ts` — `Project[]` with detail fields (gallery, amenities, etc.)
- `src/data/team.ts` — team member data
- `src/data/services.ts` — service offerings

### Styling

- Tailwind v4 configured via `@tailwindcss/vite` plugin (no `tailwind.config` file)
- Custom theme tokens defined in `src/index.css` under `@theme` — colors use `monroe-*` prefix
- Two font families: Inter (sans/body) and Playfair Display (display/headings), self-hosted in `public/fonts/`
- Font variables: `--font-sans` and `--font-display`

### Key Patterns

- `src/components/ui/AnimatedSection.tsx` + `src/hooks/useScrollAnimation.ts` — scroll-triggered fade-in animations via IntersectionObserver
- `src/components/ui/HeroSlideshow.tsx` — home page hero with ken-burns animation (keyframes in `index.css`)
- Images are all `.webp` in `public/assets/`, organized by section (hero, projects, team)
- Project detail pages use gallery images at `public/assets/projects/{id}/gallery-{n}.webp`
