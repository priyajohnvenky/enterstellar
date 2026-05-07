# 05 — Data

**There is no database.**

This is a static marketing site. Verified by inspecting all source:

- No ORM / query builder dependencies in `package.json` (no Prisma, Drizzle, TypeORM, Knex, Mongoose, kysely, etc).
- No client SDKs for any database service (no `pg`, `mysql2`, `mongodb`, `sqlite3`, `@supabase/*`, `firebase*`, `@planetscale/*`, `mongodb`, `redis`, `ioredis`, `@upstash/*`).
- No `app/api/` directory — no API routes.
- No server actions (no `'use server'` declarations anywhere).
- No `lib/db.*`, `db/`, `prisma/`, `drizzle/`, or `migrations/` directories.
- No `.env*` files with connection strings (none committed; nothing referenced in source).
- All page content is inline JSX literals — no fetches, no `getStaticProps`/`generateStaticParams` data sources.

## Stateful surfaces

There is exactly one piece of in-memory state in the app:

- `app/contact/page.tsx` — `useState` for the contact form fields (name, organization, email, phone, message). On submit, `console.log` + `alert()`. The data **is not persisted anywhere** and does not leave the browser. See `docs/03-integrations.md`.

## Caching

No caching configuration. Default Next.js caching applies (route segments are statically rendered where possible). All routes are `'use client'`, which means they're prerendered HTML shells with client-side hydration; no incremental static regeneration, no on-demand revalidation, no cache tags.

## File storage

Images are bundled in `public/` and served by Next as static assets. No object storage / S3 / Cloudflare R2 / CDN integration configured in code.

## Where contact submissions *should* go (TBD)

The handler comment in `app/contact/page.tsx` reads: *"Form submission logic will be added later."* If/when wired up, the natural options are: a server action that emails Venky, a third-party form service (Formspree, Getform, Web3Forms), or a small API route into a CRM / spreadsheet. Nothing has been chosen or committed yet.
