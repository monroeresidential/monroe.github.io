# Monroe Residential Partners

Corporate website for [Monroe Residential Partners](https://monroeresidential.com), a vertically integrated real estate development firm based in Chicago specializing in multifamily and mixed-use apartment communities.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 8
- **Styling:** Tailwind CSS v4
- **Routing:** react-router-dom v7
- **Hosting:** Cloudflare Workers (SPA fallback routing)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Build and preview via Wrangler locally |
| `npm run deploy` | Build and deploy to Cloudflare Workers |

## Project Structure

```
src/
  App.tsx              # Router and layout shell
  index.css            # Tailwind import, custom theme tokens, fonts
  pages/               # Route-level page components
  components/
    layout/            # Navbar, Footer, PageHero
    ui/                # Reusable UI components (cards, slideshow, filters)
  data/                # Static content (projects, team, services)
  hooks/               # Custom hooks (scroll animations)
public/
  assets/              # Images organized by section (hero, projects, team)
  fonts/               # Self-hosted Inter and Playfair Display
```

## Pages

- **/** — Home with hero slideshow, services overview, and featured projects
- **/about** — Company background and capabilities
- **/team** and **/team/:id** — Team listing and individual bios
- **/portfolio** and **/portfolio/:id** — Project gallery with filtering, detail pages with image galleries and amenity lists
