# Propsoch — Redesigned Landing Page

> A complete rebuild of the [Propsoch](https://www.propsoch.com/) landing page with measurable improvements in performance, accessibility, UX, and SEO.

**Live Site:** [propsoch-asg.vercel.app](https://propsoch-asg.vercel.app)  
**Stack:** Next.js · TypeScript · Tailwind CSS

---

## UX/UI Improvements

### Fix 1 — Search Bar Opens an Ugly Popup

**Problem**

Clicking the search icon on the original site triggers a modal overlay that hijacks the entire page. It has no animation, clips badly on mobile, and forces the user to dismiss it before doing anything else. It feels disconnected from the navbar rather than part of it.

**How I Fixed It**

Replaced the popup entirely with an inline search bar that drops down directly below the navbar when the icon is clicked. It slides in smoothly with a CSS transition so it feels like a natural extension of the header. The input auto-focuses on open and a "Cancel" button on the right collapses it back cleanly. The whole interaction stays within the navbar area — no overlays, no interruptions, no layout shift.

![Search bar expanded](./screenshots/search-bar.png)

---

### Fix 2 — Testimonials Carousel Felt Laggy

**Problem**

The original testimonials section uses a JavaScript-driven horizontal scroll carousel. On lower-end devices the transitions stutter noticeably — cards snap rather than glide, which undercuts the credibility of the social proof at exactly the wrong moment.

**How I Fixed It**

Rebuilt the section with a dark-themed three-column card layout on desktop. Each card has a star rating row, a full quote, and a profile row at the bottom. The active/center card is highlighted with a subtle orange border to draw the eye. Navigation arrows and dot indicators sit below for stepping through additional reviews. The entire section uses CSS transitions only — no scroll listeners, no JavaScript animation frames — so it runs at 60fps on any device.

![Testimonials section](./screenshots/testimonials.png)

---

### Fix 3 — Video Thumbnail Hidden on Mobile

**Problem**

On the original site the guided homebuying video shows a thumbnail on desktop but on mobile only a plain unstyled button appears. Most users scroll straight past it. A visible thumbnail with a real person builds trust and drives significantly more plays than a button with no visual context.

**How I Fixed It**

Built a proper video card that renders the actual thumbnail image on every device using Next.js `<Image>` with `fill` and `aspect-video` sizing. The card sits to the right of the hero copy on desktop and stacks below it on mobile at full width. A centered play button overlays the thumbnail, and a small floating chip below reads "Watch how it works · 3 min · Free to watch" — adding context that reduces friction before the user even clicks. A green "Live Guidance Available" badge on the top edge reinforces trust.

![Hero with video thumbnail](./screenshots/hero-video.png)

---

### Fix 4 — Hamburger Menu Was Not Smooth

**Problem**

On the original site tapping the hamburger icon causes nav links to appear instantly with no transition — they just pop into existence. On a product asking users to trust it with the biggest financial decision of their lives, that abruptness damages perceived quality.

**How I Fixed It**

Replaced the default nav with a bottom-anchored mobile tab bar showing Home, Save, Share, and Menu. Tapping Menu slides up a clean drawer from the bottom with the nav links (Services, Resources, Testimonials) and a full-width Book An Appointment CTA. The drawer animates in with a `translateY` transition and the hamburger icon swaps to an × with the same motion. The search bar on mobile also drops inline below the header rather than opening a popup, keeping the experience consistent across all touch interactions.

![Mobile menu and search](./screenshots/mobile-menu.png)

---

### Fix 5 — No Scroll Animations Anywhere

**Problem**

The original site has zero entrance animations. Every section is already fully visible the moment the page loads, so scrolling down feels completely flat. Modern landing pages use scroll-triggered reveals to pace the user's attention through each section — their absence makes the page feel dated.

**How I Fixed It**

Added scroll-triggered fade-and-rise animations using the Intersection Observer API — no external library, no extra bundle weight. Each section fades up from `translateY(24px)` to its natural position with `opacity: 0 → 1` over 500ms as it enters the viewport. Stats counters animate from zero when the metrics bar scrolls into view. All animations are automatically disabled for users with `prefers-reduced-motion` enabled in their OS settings, keeping the experience accessible.

---

## Lighthouse Score Comparison

Scores were measured on the **deployed Vercel build** (`propsoch-asg.vercel.app`), not on localhost, for a fair comparison against the production original site.

### Desktop

| Metric | Original Site | Rebuilt Site | Change |
|---|:---:|:---:|:---:|
| 🚀 Performance | 44 | **100** | +56 |
| ♿ Accessibility | 71 | **96** | +25 |
| ✅ Best Practices | 50 | **100** | +50 |
| 🔍 SEO | 92 | **100** | +8 |

| Core Web Vital | Original | Rebuilt |
|---|:---:|:---:|
| First Contentful Paint | 3.5 s | **0.3 s** |
| Largest Contentful Paint | 6.8 s | **0.5 s** |
| Total Blocking Time | 780 ms | **0 ms** |
| Cumulative Layout Shift | 0 | **0** |
| Speed Index | 7.3 s | **0.4 s** |

### Mobile

| Metric | Original Site | Rebuilt Site | Change |
|---|:---:|:---:|:---:|
| 🚀 Performance | 62 | **100** | +38 |
| ♿ Accessibility | 77 | **96** | +19 |
| ✅ Best Practices | 58 | **100** | +42 |
| 🔍 SEO | 92 | **100** | +8 |

| Core Web Vital | Original | Rebuilt |
|---|:---:|:---:|
| First Contentful Paint | 1.0 s | **1.0 s** |
| Largest Contentful Paint | 1.4 s | **1.9 s** |
| Total Blocking Time | 4,610 ms | **0 ms** |
| Cumulative Layout Shift | 0 | **0** |
| Speed Index | 1.8 s | **1.0 s** |

### What drove the score improvements

**Performance (+56 desktop / +38 mobile)**  
Replaced all `<img>` tags with the Next.js `<Image>` component — automatic WebP conversion, responsive `srcset`, and lazy loading out of the box. Removed heavy third-party scripts that blocked the main thread. Used `next/font` to self-host the Outfit typeface, eliminating the render-blocking Google Fonts request.

**Accessibility (+25 desktop)**  
Added `aria-label` to all icon-only buttons (search, social links, hamburger). Enforced a strict `h1 → h2 → h3` heading hierarchy with no skipped levels. Added a "Skip to main content" link for keyboard users. Replaced raw `<div>` wrappers with semantic HTML — `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`.

**Best Practices (+50 desktop)**  
Fixed incorrect image aspect ratios. Removed deprecated browser APIs. Eliminated browser console errors caused by malformed ARIA attributes. Configured security headers (`X-Frame-Options`, `X-Content-Type-Options`) in `next.config.ts`.

**SEO (+8 desktop)**  
Added a descriptive `<meta name="description">` via Next.js `metadata` export. Added OpenGraph tags and `lang="en"` on the `<html>` element. Ensured all images have meaningful `alt` text and all links have discernible names.

---

## Sections Built

| Section | Description |
|---|---|
| Navbar | Sticky header, inline search bar, animated mobile tab bar + drawer |
| Hero | Two-column layout, city selector, video thumbnail visible on all devices |
| Stats | Animated counters — 2750+ hours, 1000+ buyers, 210+ builder partners |
| Services | Six icon cards (Home Loan, Legal, Tax, Quality Inspection, Vastu, Interior) + CTA strip |
| Testimonials | Dark-themed card grid with star ratings, navigation arrows, and dot indicators |
| Resources | Three blog cards with Next.js `<Image>` + Hometrust community CTA |
| Footer | Landmark nav columns, social links with `aria-label`, legal registration info |

> The Insights accordion section (Floor Plan Analysis, Future Development map, etc.) was intentionally excluded — it requires live property data and a maps integration outside the scope of a static landing page rebuild.

---

## Getting Started

```bash
git clone https://github.com/your-username/propsoch-landing
cd propsoch-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo at [vercel.com](https://vercel.com/new) for automatic deployments on every push to `main`.

---

<p align="center">Built as part of a frontend engineering assessment &nbsp;·&nbsp; <a href="https://propsoch-asg.vercel.app">Live Demo</a></p>
