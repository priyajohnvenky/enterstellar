# 06 — Runbook

## Tooling expectations

- **Node 22** (pinned in `.mise.toml`). With [mise](https://mise.jdx.dev/), running anything inside this directory should auto-install Node 22.
- **npm** (a `package-lock.json` is committed; no `pnpm-lock.yaml` / `yarn.lock` / `bun.lockb`).

## npm scripts (from `package.json`)

| Command         | What it does                                                          |
| --------------- | --------------------------------------------------------------------- |
| `npm run dev`   | `next dev` — local dev server on http://localhost:3000 with hot reload. |
| `npm run build` | `next build` — production build into `.next/`.                        |
| `npm run start` | `next start` — serve the production build on port 3000.               |
| `npm run lint`  | `eslint` — flat-config from `eslint.config.mjs` (Next core-web-vitals + TS).|

There is **no test script** and no test runner configured.

## First-time setup

```bash
cd /home/pete/projects/Internal/enterstellar
npm ci          # or: npm install
npm run dev
```

Open http://localhost:3000.

## Common ops

**Smoke-test all routes** (after `npm run start`):

```bash
for path in / /about /what-we-build /speciality /prototypes /approach /contact /privacy /terms; do
  curl -s -o /dev/null -w "%{http_code}  $path\n" http://localhost:3000$path
done
```

Each should return `200`.

**Update a page's copy:** edit the relevant `app/<route>/page.tsx`. All copy lives inline — there is no CMS or content directory.

**Update brand colours:** edit `tailwind.config.ts` → `theme.extend.colors.brand.*`. Any class like `bg-brand-blue`, `text-brand-red` will pick up the change.

**Update navigation:** edit `navItems` in `components/Navigation.tsx`. Update the matching link list in `components/Footer.tsx` (Quick Links section).

**Update footer contact info:** `components/Footer.tsx` — address, phone (`tel:+919629943399`), email (`mailto:venky@enterstellarsoftwares.com`).

**Add an image:** drop the file into `public/`, reference as `<img src="/file.jpg" />` (matches existing convention) or `<Image src="/file.jpg" ... />` (only used for the logo).

**Bump dependencies:**

```bash
npm outdated
npm update
npm run lint && npm run build   # verify nothing broke
```

## Production run (self-host)

```bash
npm ci
npm run build
npm run start                 # listens on PORT or 3000
```

Behind a reverse proxy (nginx, Caddy, etc) — none of which is configured in this repo. See `docs/04-deployment.md`.

## Troubleshooting

- **Port 3000 already in use:** `PORT=3001 npm run dev`.
- **Stale build / weird type errors:** `rm -rf .next && npm run build`.
- **Tailwind class not applying:** confirm the file path is covered by the `content` glob in `tailwind.config.ts` (`app/`, `components/`, `pages/`). Restart `next dev` after editing tailwind config.
- **Hydration mismatch / motion warnings:** every page is `'use client'` already; if adding a new page, remember the directive so framer-motion works.
- **Lint fails on an old `next-env.d.ts`:** it's gitignored; delete and let `next dev`/`next build` regenerate it.

## What this runbook does not cover

There is no deploy command, no log-viewing command, no DB migration, no scheduled job, no on-call rotation. Operationally this is a static-ish marketing site with one human owner.
