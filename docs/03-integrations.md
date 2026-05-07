# 03 — Integrations

## Runtime npm dependencies

From `package.json`:

| Package         | Version     | Used for                                                              |
| --------------- | ----------- | --------------------------------------------------------------------- |
| `next`          | `16.1.6`    | App Router framework, dev server, build, prod server.                 |
| `react`         | `19.2.3`    | UI runtime.                                                           |
| `react-dom`     | `19.2.3`    | DOM renderer.                                                         |
| `framer-motion` | `^12.29.2`  | All page animations — `motion.*`, `initial/animate/whileInView/transition/whileHover`. |
| `lucide-react`  | `^0.563.0`  | Iconography across every page (`ArrowRight`, `Shield`, `Cpu`, `BarChart3`, `Database`, `Mail`, `Phone`, `MapPin`, `Menu`, `X`, `MessageSquare`, `Send`, `Search`, `Code`, `FlaskConical`, `TrendingUp`, `Target`, `Lightbulb`, `Eye`, `Lock`, `CheckCircle`, `AlertTriangle`, `MessageCircle`). |

DevDependencies are standard Next/TypeScript/Tailwind tooling — see `docs/02-architecture.md`.

## Fonts

Loaded once in `app/layout.tsx`:

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
```

Applied as `${inter.variable} font-inter antialiased` on `<body>`. `tailwind.config.ts` registers `fontFamily.inter` so utility classes resolve to Inter. **Inter is the only font in use** — no Geist (despite the README), no other typefaces.

This is a build-time integration (`next/font/google` self-hosts the font files into the build); no external request to fonts.googleapis.com at runtime.

## Analytics / monitoring

**None.** No `@vercel/analytics`, no Google Analytics / GTM script, no Plausible, no PostHog, no Sentry, no LogRocket. No `<Script>` tags in `app/layout.tsx` or any page.

## Form endpoints

The contact form (`app/contact/page.tsx`) does **not** post anywhere. Submit handler:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Form submission logic will be added later
  console.log('Form submitted:', formData);
  alert('Thank you! We will contact you soon.');
};
```

No `fetch`, no server action, no `mailto:` fallback, no Formspree/Getform/Web3Forms integration. Submissions are lost. The comment "Form submission logic will be added later" makes the intent explicit.

The footer and Contact page do expose direct contact channels:

- `mailto:venky@enterstellarsoftwares.com`
- `tel:+919629943399`

These are plain anchor links, not integrated services.

## Third-party content

- **Hero/section JPGs** are bundled into `public/` (no remote image hosts; no CDN domain referenced in `next.config.ts`).
- **Brand logo** (`/logo-enterstellar.jpg`) bundled in `public/`.

## External links

Outbound links from the site:

- The README points to `nextjs.org` and `vercel.com` — boilerplate only.
- No social links in the footer (Twitter/LinkedIn/etc are not present).

## Search / SEO

Only `app/layout.tsx` `metadata` is set:

```ts
title: "Enterstellar Softwares | Secure Digital Utility Infrastructure",
description: "Building Secure Digital Infrastructure for Public Utilities. Specialising in AI-powered metering systems and secure utility data platforms for state-level water utilities.",
keywords: "digital utility infrastructure, AI metering, water utilities, secure platforms, World Bank, MDB, public sector",
```

No per-page `metadata` exports, no `sitemap.ts` / `robots.ts`, no Open Graph / Twitter card tags, no canonical URLs.

## Auth / data integrations

None. No NextAuth/Clerk/Supabase. No SDK imports for any backend service. No CMS (no Contentful/Sanity/Payload). All copy is inline JSX.

## Environment variables

`.env*` is gitignored and no `.env.example` is provided. No `process.env.*` references in source — the app does not need any environment configuration to run.
