# Enterstellar Website (enterstellar)

Marketing website for **Enterstellar Softwares Pvt Ltd** — a Chennai-based digital infrastructure company building secure, AI-enabled platforms for state-level water utilities and other public utilities.

This is a **second instance** of the Enterstellar marketing site. A sister repository at `/home/pete/projects/Internal/Enterstellarwebsite` exists with a similar (but slightly larger) version of the same site — see `docs/01-business.md` for differences.

- **Owner:** Venky (`venky@enterstellarsoftwares.com`, +91 96299 43399)
- **Stack:** Next.js 16.1.6 (App Router) + React 19.2.3 + TypeScript + Tailwind CSS 3.4.19
- **Animation:** framer-motion 12.x
- **Icons:** lucide-react 0.563
- **Node:** 22 (pinned via `.mise.toml`)

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Layout at a glance

- `app/` — App Router pages (`page.tsx` per route). Routes: `/`, `/what-we-build`, `/speciality`, `/prototypes`, `/approach`, `/about`, `/contact`, `/privacy`, `/terms`.
- `app/layout.tsx` — root layout, loads Inter font and global CSS.
- `app/globals.css` — Tailwind directives + custom `--background`/`--foreground` and a `fadeInUp` keyframe.
- `components/Navigation.tsx` — fixed top nav, mobile hamburger.
- `components/Footer.tsx` — full footer with Chennai address, phone, email.
- `public/` — hero/section JPGs and the `logo-enterstellar.jpg` brand mark.
- `tailwind.config.ts` — defines `brand.{blue,red,dark,grey-light,grey-blue,red-soft}` palette and Inter font family.

## Brand colours (per brand manual)

| Token             | Hex       | Use                   |
| ----------------- | --------- | --------------------- |
| `brand.blue`      | `#2E2378` | Trust Blue (primary)  |
| `brand.red`       | `#E5392D` | Infrastructure Red    |
| `brand.dark`      | `#1A1A1A` | Body text             |
| `brand.grey-light`| `#F3F4F6` | Section backgrounds   |
| `brand.grey-blue` | `#E6EAF2` | Dashboard backgrounds |
| `brand.red-soft`  | `#F8D7DA` | Alerts                |

## Conventions

- All page files start with `'use client';` — every route uses framer-motion and runs as a client component.
- Pages render `<Navigation />` at the top and `<Footer />` at the bottom inside a `min-h-screen` wrapper.
- Internal links use `next/link`; brand logo uses `next/image` with `priority`.
- Hero images are referenced via raw `<img src="/...jpg" />` (not `next/image`).
- The contact form (`app/contact/page.tsx`) currently `console.log`s the payload and shows an `alert()` — there is **no backend wiring**.
- TypeScript path alias `@/*` maps to repo root.

## What's NOT in this repo

- No tests, no CI config, no Dockerfile, no `vercel.json`, no analytics.
- No database, no API routes, no server actions.
- No environment variables (`.env*` is gitignored and none committed).
- No deployment manifests checked in.

## Documentation

See `docs/` for deeper detail:

- `docs/01-business.md` — what the site says Enterstellar does, and how this repo differs from `Enterstellarwebsite`.
- `docs/02-architecture.md` — Next.js/Tailwind/TS setup and per-page structure.
- `docs/03-integrations.md` — fonts, framer-motion, icons, form endpoints.
- `docs/04-deployment.md` — deploy posture (mostly `[NOT CODIFIED]`).
- `docs/05-data.md` — data model (none).
- `docs/06-runbook.md` — npm scripts and ops.
- `docs/07-decisions.md` — decisions visible in git history and `package.json`.
