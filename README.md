# SprintEd Landing Page

**Status:** [CURRENT]  
**Last Updated:** 2024-06-09  
**Version:** 1.0

---

## Introduction
This project contains a SvelteKit-based landing page for SprintEd, featuring a modern, animated UI and a clear call to action. The main page is implemented in `landing_page.svelte`.

## Executive Summary
- SvelteKit + TailwindCSS + Motion One
- Single landing page with hero, features, roadmap, and CTA
- Ready for local development and deployment

## Key Points
- Uses SvelteKit for routing and SSR
- TailwindCSS for styling
- Motion One for animations
- Place `landing_page.svelte` as `src/routes/+page.svelte`

---

## Setup Instructions

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### 2. Create a SvelteKit Project
```bash
npm create svelte@latest sprinted-landing
cd sprinted-landing
```
Choose the following options:
- Skeleton project
- TypeScript: Yes
- ESLint/Prettier/Playwright: as you prefer

### 3. Install Dependencies
```bash
npm install
npm install -D tailwindcss postcss autoprefixer @motionone/svelte
npx tailwindcss init tailwind.config.cjs -p
```

### 4. Configure Tailwind
Edit `tailwind.config.cjs` and `postcss.config.cjs` as needed (see SvelteKit + Tailwind docs).

### 5. Replace Main Page
Copy `landing_page.svelte` to `src/routes/+page.svelte` (overwrite if needed).

### 6. Run the App
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the landing page.

---

## Cross-References
- See `proj.md` for project context

## Feedback
Please open issues or PRs for improvements.

## Changelog
- 2024-06-09: Initial README created 