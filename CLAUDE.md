@AGENTS.md

# Portfolio-Next

Personal portfolio site. Static content, JSON-driven.

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- CSS Modules + globals.css (glass-morphism, custom properties)
- Vercel deploy (`vercel.json` enforces framework detection)

## Directory Structure
- app/ — Next.js App Router pages and layout
- components/ — Reusable UI components (Hero, ProjectCard, etc.)
- data/ — JSON data driving content (projects.json, awards.json, skills.json, other.json)
- public/ — Static assets (images, SVGs)
- styles/ — CSS Modules and global styles

## Scripts
- `npm run dev` — Start dev server at http://localhost:3000
- `npm run build` — Build production bundle
- `npm start` — Run built app

## Architecture Notes
- Data-driven components: UI reads from `data/*.json` at runtime
- CSS Modules scoped per component, with global utilities in `globals.css`
- `useScrollReveal` hook enables scroll-triggered animations, respects `prefers-reduced-motion`
- Accessibility first: semantic HTML, ARIA landmarks, color contrast checks

## Git Rules
- **Jangan push ke remote** sampai user minta push
- Commit boleh pakai `/atomic-commit`

## Future Plans
- Add blog with MDX content
- Expand project showcases with live demos

## Quick Start
```bash
npm install
npm run dev
```

## Vercel Deploy
```bash
npm install -g vercel
vercel login
vercel --prod
```