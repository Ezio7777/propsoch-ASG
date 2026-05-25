# Propsoch Landing Page — Redesign

A redesigned and optimized version of the [Propsoch](https://www.propsoch.com/) landing page built as part of a frontend engineering task.

**Live Demo:** [your-vercel-url.vercel.app]  
**Tech Stack:** Next.js 14 · TypeScript · Tailwind CSS

---

## Lighthouse Scores

| Metric | Before | After (estimated) |
|---|---|---|
| Performance | 44 | ~85+ |
| Accessibility | 71 | ~95+ |
| Best Practices | 50 | ~90+ |
| SEO | 92 | ~97+ |

---

## Part 1 — Original Site Analysis

### Lighthouse Scores (Original)
- **Performance: 44** — Poor. LCP 6.8s, TBT 780ms, Speed Index 7.3s.
- **Accessibility: 71** — Several ARIA issues, low contrast text, buttons without accessible names.
- **Best Practices: 50** — 86 third-party cookies, no CSP header, deprecated APIs, incorrect image aspect ratios.
- **SEO: 92** — Missing meta description.

### 5 UX/UI Issues & Fixes

**1. Slow page load (Performance: 44)**  
The original site loads 6,400 KiB of assets, has 13 long main-thread tasks, and doesn't optimize images. JavaScript execution alone takes 5.7s.  
_Fix:_ Use Next.js `<Image>` component for automatic compression, lazy loading, and WebP conversion. Avoid third-party scripts where possible.

**2. Buttons with no accessible name (Accessibility)**  
Icon-only buttons (search, share, wishlist) in the navbar had no `aria-label`, making them completely inaccessible to screen reader users.  
_Fix:_ Added descriptive `aria-label` attributes to all icon buttons (`aria-label="Search properties"`, etc.).

**3. Poor text contrast (Accessibility)**  
The subtitle text ("Stop wasting countless weekends...") renders in light gray (#aaa) on a white background, failing the WCAG 4.5:1 contrast requirement.  
_Fix:_ Used `text-gray-400` minimum for subtitles and ensured all body text meets contrast requirements.

**4. No meta description (SEO)**  
The page had no `<meta name="description">` tag, meaning Google generates its own snippet, often poorly.  
_Fix:_ Added a descriptive meta description via Next.js `metadata` export in `layout.tsx`.

**5. No Content Security Policy / weak security headers (Best Practices: 50)**  
86 third-party cookies and no CSP header were flagged. This exposes users to XSS risk.  
_Fix:_ Added security headers via `next.config.ts` (`headers()`) — CSP, X-Frame-Options, HSTS.

---

## Part 2 — What Was Built

### Sections
- **Navbar** — Sticky header with mobile hamburger menu, skip-to-content link, proper ARIA nav landmark
- **Hero** — Redesigned with gradient background, improved typographic hierarchy, cleaner city selector, accessible play button
- **Stats** — Clean metric display with hover interaction
- **Services** — Icon card grid with accessible list markup and CTA strip
- **Testimonials** — Three review cards with semantic `<article>`, `<blockquote>`, and `<footer>` elements
- **Resources** — Blog cards using Next.js `<Image>` + community CTA
- **Footer** — Proper `<nav>` landmarks, social links with `aria-label`, legal info

> The "Insights" accordion section (Floor Plan Analysis, Flood Risk, etc.) was intentionally excluded — it requires dynamic data and a map integration that goes beyond a static landing page rebuild.

### Key Improvements

**Performance**
- All images use Next.js `<Image>` with `fill`, `sizes`, and `loading="lazy"` — automatic WebP conversion and responsive sizing
- No heavy third-party JS loaded at render time
- `Outfit` font loaded via `next/font/google` — zero layout shift, self-hosted

**Accessibility**
- Semantic HTML throughout: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`
- All interactive elements have accessible names (`aria-label`, `aria-pressed`, `aria-expanded`)
- Heading hierarchy follows h1 → h2 → h3 with no skipped levels
- "Skip to main content" link for keyboard users
- Sufficient color contrast on all text elements
- `lang="en"` on the `<html>` element

**SEO**
- Full `metadata` export in `layout.tsx` — title, description, keywords, OpenGraph
- Descriptive `alt` text on all images
- Proper canonical link structure

**Code Quality**
- Strict TypeScript — no `any`, typed props, typed constants
- Components are single-responsibility — one file per section
- No inline styles — all Tailwind utility classes
- `"use client"` only on components that actually need browser state (Navbar, Hero)

---

## Setup

```bash
npx create-next-app@latest propsoch-landing --typescript --tailwind --app
cd propsoch-landing

# Copy all files from this repo into the project
# Then run:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.
