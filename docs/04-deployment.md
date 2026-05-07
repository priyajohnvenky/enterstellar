# 04 — Deployment

## What's in the repo

The build output target is implied by `package.json` scripts:

- `npm run build` → `next build` (default Next.js output: `.next/`).
- `npm run start` → `next start` (production Node server).

`next.config.ts` is empty — no `output: 'export'`, no `output: 'standalone'`, no asset prefix, no custom server config. Default Next.js Node deployment is the assumption.

## Verified hosting (2026-05-07)

**Server:** customer-verification (72.62.229.248) — accessible via SSH with master key `id_ed25519_pete`
**Likely domain:** enterstellar.com or similar — verify with Venky
**Likely method:** Next.js static export served via nginx, or PM2 Node process (verify on server)
**Note:** Exact deploy path and nginx config not yet verified via SSH. Production confirmation needed.

```bash
# Server accessible (verified)
ssh -i ~/.ssh/id_ed25519_pete root@72.62.229.248
```

## What's NOT in the repo  `[NOT CODIFIED]`

- **No `vercel.json`** — Vercel deploy settings (if used) are configured via the dashboard, not committed.
- **No Dockerfile / docker-compose.yml.**
- **No CI workflow files** (`.github/`, `.gitlab-ci.yml`, etc are absent).
- **No `ecosystem.config.cjs`** for PM2 in this repo (the user's home dir has one for other services, but it does not reference `enterstellar`).
- **No nginx / reverse-proxy config** in this repo.
- **No `.env*` files committed**, no `.env.example`. The app reads no environment variables in source, so this is intentional rather than missing.
- **No deploy hooks, no fly.toml, no netlify.toml, no `Procfile`, no Render/Railway config.**
- **No domain or DNS configuration in repo.**

## Inferred deployment posture

The README is unmodified create-next-app boilerplate that recommends Vercel ("The easiest way to deploy your Next.js app is to use the Vercel Platform"). The `.gitignore` includes `.vercel`, suggesting at least the option of `vercel link`/`vercel deploy` was considered. **Whether Vercel is actually used has not been codified in the repo.**

If deploying:

- **Vercel:** point at the repo, no custom build command needed.
- **Self-host (Node 22):** `npm ci && npm run build && npm run start` behind any reverse proxy. Default port 3000.
- **Static export:** would require setting `output: 'export'` in `next.config.ts`. Not currently configured.

## Production secrets

None required by source code today — the app needs no API keys, no database URL, no third-party SDK credentials. The contact form does not submit anywhere (see `docs/03-integrations.md`), so no form-backend secret is needed yet.

## Build artefacts

- Local `.next/` directory exists in this checkout (gitignored). Last touched 2026-05-07 — someone has run `next dev` or `next build` recently.
- `node_modules/` ~320 packages.
- No `out/` directory (no static export run).

## Health / smoke check

There is no `/api/health` route. To verify a deploy, hit `/`, `/about`, `/what-we-build`, `/speciality`, `/prototypes`, `/approach`, `/contact`, `/privacy`, `/terms` and confirm 200 responses with rendered content.
