# 02 — Architecture

## Stack versions (from `package.json`)

| Layer            | Version                          |
| ---------------- | -------------------------------- |
| Next.js          | `16.1.6` (App Router)            |
| React / ReactDOM | `19.2.3`                         |
| TypeScript       | `^5`                             |
| Tailwind CSS     | `^3.4.19`                        |
| PostCSS          | `^8.5.6` + `autoprefixer ^10.4.24` |
| ESLint           | `^9` + `eslint-config-next 16.1.6` |
| framer-motion    | `^12.29.2`                       |
| lucide-react     | `^0.563.0`                       |
| Node             | `22` (pinned in `.mise.toml`)    |

`package.json#name` is the generic `"website"` (default from create-next-app), `private: true`, version `0.1.0`.

## App Router structure

```
app/
├── layout.tsx              Root layout — Inter font, <html lang="en">, metadata
├── page.tsx                Home — hero + "What We Build" 4-card grid + contact CTA
├── globals.css             Tailwind directives + body colours + fadeInUp keyframe
├── favicon.ico
├── about/page.tsx          Mission / pillars / vision
├── approach/page.tsx       5-step Infrastructure-First Delivery Approach
├── contact/page.tsx        Contact form (client-side only — no submit endpoint)
├── privacy/page.tsx        Privacy Policy (last updated Feb 2, 2026)
├── prototypes/page.tsx     3 flagship prototypes / case studies
├── speciality/page.tsx     Why Security-First + How AI Fits
├── terms/page.tsx          Terms of Service (last updated Feb 2, 2026)
└── what-we-build/page.tsx  Four product-line deep-dives
```

Every route is a flat `page.tsx`. There are no `layout.tsx` files below the root, no route groups, no `loading.tsx`/`error.tsx`/`not-found.tsx`, no `route.ts` API handlers, no server actions.

## Components

```
components/
├── Navigation.tsx   Fixed top nav, 7 links + mobile hamburger; uses next/image for logo
└── Footer.tsx       4-column footer (company info / Quick Links / Our Focus / bottom bar)
```

Both are `'use client'` components. There are no other components in the tree.

## Page conventions

- Every `page.tsx` starts with `'use client';` — required because each route uses framer-motion's `motion.*` components and React state.
- Standard wrapper:
  ```tsx
  <div className="min-h-screen">
    <Navigation />
    <div className="pt-32 pb-20"> ... </div>
    <Footer />
  </div>
  ```
  The `pt-32` clears the fixed `h-20` navbar.
- Layout container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (max-w-4xl on legal pages).
- Section pattern: white card on a light surface — `bg-white rounded-xl shadow-lg p-8 md:p-12`.
- Animations: `motion.div`/`motion.section` with `initial`/`animate` (above-the-fold) or `whileInView` + `viewport={{ once: true }}` (below-the-fold), durations of `0.4–0.6s` and stepwise `delay` for stagger.
- Hero/section images use raw `<img>` tags from `/public`, not `next/image`. The brand logo (Navigation, Footer) is the only `next/image` usage.

## TypeScript

`tsconfig.json` is the create-next-app default with one customisation — paths alias `"@/*": ["./*"]`, used everywhere as `@/components/Navigation` etc. Targets ES2017, `strict: true`, `jsx: "react-jsx"`, `moduleResolution: "bundler"`, `incremental: true`. Includes `.next/types/**/*.ts` so the Next plugin's generated types are picked up.

## Tailwind config (`tailwind.config.ts`)

```ts
content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}"]
```

Theme extension:

| Token              | Hex       | Purpose              |
| ------------------ | --------- | -------------------- |
| `brand.blue`       | `#2E2378` | Trust Blue (primary) |
| `brand.red`        | `#E5392D` | Infrastructure Red   |
| `brand.dark`       | `#1A1A1A` | Body text            |
| `brand.grey-light` | `#F3F4F6` | Section backgrounds  |
| `brand.grey-blue`  | `#E6EAF2` | Dashboard backgrounds|
| `brand.red-soft`   | `#F8D7DA` | Alerts               |
| `fontFamily.inter` | `Inter, sans-serif` | Body |

No plugins. The `pages/` glob is included in `content` even though no `pages/` directory exists — harmless.

## PostCSS

Two PostCSS configs are committed (both work; one is unused):

- `postcss.config.js` — CommonJS, `tailwindcss + autoprefixer` (the one Tailwind 3 uses).
- `postcss.config.mjs` — ESM, references `@tailwindcss/postcss` (the Tailwind 4 plugin), but the project depends on Tailwind 3.

In practice Next picks `postcss.config.js` first; the `.mjs` file is dead config. Probably leftover from a create-next-app scaffold.

## ESLint

`eslint.config.mjs` is flat-config: extends `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`, with `globalIgnores` re-asserting Next defaults (`.next/**`, `out/**`, `build/**`, `next-env.d.ts`).

## Next config

`next.config.ts` exports a bare `NextConfig` — no custom options. No `images.domains`, no `headers()`, no `redirects()`, no `experimental` flags.

## Global CSS (`app/globals.css`)

```css
@tailwind base; @tailwind components; @tailwind utilities;
:root { --background: #ffffff; --foreground: #1A1A1A; }
body  { background-color: #ffffff; color: #1A1A1A; }
html  { scroll-behavior: smooth; }
@keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
.animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
```

The `.animate-fadeInUp` utility is defined but never referenced in source — animations are driven by framer-motion in the actual pages.

## Public assets (`public/`)

Hero/section images: `hero-water-pipes.jpg`, `hero-tech.jpg`, `hero-team-tech.jpg`, `hero-city-night.jpg`, `office-modern.jpg`, `team-collab.jpg`, `water-infrastructure.jpg`, `building-govt.jpg`, `dashboard-preview.jpg`. Logos: `logo-enterstellar.jpg`, `logo.jpg`. Plus the create-next-app SVGs (`next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg`).
