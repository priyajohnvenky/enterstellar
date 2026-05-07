# 07 — Decisions

Drawn from `git log` (19 commits, all 2026-02-02) and `package.json`.

## Stack choices (from `package.json`)

- **Next.js 16.1.6 App Router** over Pages Router. Generic `"name": "website"` and the boilerplate README confirm the project was scaffolded with `create-next-app`.
- **React 19.2.3** — bleeding-edge stable React paired with a current Next release.
- **TypeScript** with the create-next-app default `tsconfig.json` (strict on, ES2017, bundler resolution). Only customisation is the `@/*` path alias.
- **Tailwind CSS 3.4.19** (not Tailwind 4). A stale `postcss.config.mjs` referencing `@tailwindcss/postcss` (the Tailwind 4 plugin) is present alongside the active `postcss.config.js` — implies a brief consideration of v4 that was abandoned without removing the file.
- **framer-motion 12.x** chosen for animation. Every page uses `'use client'` because of this — a deliberate trade-off (no RSC benefits) for visual richness.
- **lucide-react** for icons. No Heroicons, no Phosphor, no FontAwesome.
- **Node 22** pinned via `.mise.toml` (file added 2026-05-07, post-initial-history; not part of any commit visible in `git log`).

## Brand & visual decisions (visible in commit history)

The hero-section design went through a tight iteration loop — six commits in a single day refining colour and contrast:

```
21f6e5e Hero redesign: Dark water infrastructure image with white text for better visibility
5b42f97 Fix: Reduce hero image overlay opacity for better visibility
b9ae7a6 Fix: Make both hero text lines white for consistency
0a14759 Use brand colors: White primary + Red accent (per brand manual)
05d5e46 Brand colors: Trust Blue + Infrastructure Red per brand manual (with enhanced shadow for visibility)
802be90 Swap colors: Red first line (more visible) + Blue second line
25283cf Increase white glow intensity on blue text for better visibility
66e7af5 Simplify hero colors: White + Red (clean and bold)
```

Decisions encoded:

- A **brand manual** governs colour usage — Trust Blue (`#2E2378`) and Infrastructure Red (`#E5392D`). The repo's `brand.*` palette in `tailwind.config.ts` is the codified version.
- The team prioritised **visibility/contrast** over fidelity to the brand manual when they conflicted — final hero ended up "White + Red (clean and bold)" rather than the original blue+red treatment.
- **Imagery is industry-anchored** — water pipes, government buildings, modern offices, team collaboration, dashboard preview. The 2026-02-02 `9f02dea Add professional images: hero, office, water infrastructure` and `c5489b8 Add professional images to all pages` commits were a deliberate "make it feel professional" pass.

## Footer evolution (multiple iterations)

```
ba597f4 Add professional footer to all pages with company info, links, and copyright
633c68c Update footer with real contact info from Chennai office
eb3796b Fix footer: Add phone +91 96299 43399, use only brand colors (white/70 instead of gray), make logo visible
ddc12e0 Footer redesign: Use actual logo image, white background with gray text for better visibility
1341c3d Fix: Add Footer component rendering to all pages (was imported but not rendered)
```

Decisions:

- Settled on a **light footer** (white background, gray text, brand-blue accents) over the initial dark variant.
- Chennai address + phone + email are committed copy, not env-configurable. Updates require a code change.
- The `1341c3d` commit captures a real bug — the `Footer` component was imported but never rendered on every page. This is a recurring class of bug in this codebase: pages don't share a sub-layout, so `<Navigation />` and `<Footer />` are repeated literally inside each `page.tsx`. A future refactor could move them into a route group's `layout.tsx`.

## Logo decision

Two logo files exist (`logo.jpg`, `logo-enterstellar.jpg`). Commit `5b7446e Use new clean Enterstellar logo (red enter + blue stellar with star) in header and footer` switched to `logo-enterstellar.jpg`; the old `logo.jpg` was left in `public/` rather than deleted.

## Late additions

```
2dd8e4c Add Privacy Policy and Terms of Service pages
```

Privacy and Terms were the last commit (final on 2026-02-02). Both pages are dated "Last updated: February 2, 2026" inline — the date is hardcoded, not derived from build time, and will become stale.

## Gaps / things that were *not* decided in code

- **Form backend.** `app/contact/page.tsx` has the explicit comment "Form submission logic will be added later." Nothing has been chosen.
- **Analytics.** None integrated. No commit ever added/removed an analytics package.
- **Deploy target.** No `vercel.json`, no Dockerfile, no CI. Whatever is in production lives in someone's dashboard, not this repo.
- **Tests.** Never set up. `npm run lint` is the only quality gate.
- **i18n.** Site is English-only; `<html lang="en">` is hard-coded in `app/layout.tsx`. No `next-intl` / `next-i18next`.

## Relationship to `Enterstellarwebsite`

There are two parallel marketing repos for the same company (see `docs/01-business.md`). This repo's `git log` starts with its own `Initial commit: Enterstellar website` on 2026-02-02 and contains no merge from `Enterstellarwebsite` — they appear to be independent histories that drifted, with the sister repo carrying additional sections (extra `case-studies/` route, "Powered by Leading AI Models" band on home). Whether this `enterstellar` repo is the canonical one or an alternate is not documented in either repo.
