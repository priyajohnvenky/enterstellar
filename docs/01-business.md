# 01 — Business

Extracted directly from the page copy in `app/`.

## Who Enterstellar is (per the site)

> *"Enterstellar Softwares is a digital infrastructure technology company specialising in secure, AI-enabled platforms for public utilities and critical services."* — `app/about/page.tsx`

Legal entity: **Enterstellar Softwares Pvt Ltd** (footer copyright). Office: Express Chambers, Whites Road, Royapettah, Chennai-600 014, India. Owner contact: Venky — `venky@enterstellarsoftwares.com`, `+91 96299 43399`.

## What they sell

Site headline (`app/page.tsx`): **"Secure Digital Utility Infrastructure & AI-Enabled Service Platforms"** — *"Building Secure Digital Infrastructure for Public Utilities."*

Current sector focus (per About page): **state-level water utilities** — AI-powered metering and secure utility data platforms.

Four product lines surfaced on the home page and `/what-we-build`:

1. **AI-Powered Metering** — automated meter reading using computer vision; works on legacy and modern meters; secure data transmission; real-time consumption tracking. Benefits the page lists: reduced manual labour, improved billing accuracy, faster revenue cycles.
2. **Secure Utility Data Platforms** — encrypted storage, role-based access, audit-ready data flows, integration with billing/service platforms.
3. **AI-Enabled Customer Service** — AI chat and voice assistants, automated service requests, billing and consumption inquiries, complaint management.
4. **Analytics & Operational Optimisation** — real-time dashboards for consumption trends, leak/loss detection, demand forecasting, system performance.

## Mission, vision, pillars (`app/about/page.tsx`)

- **Mission:** *"To build secure, scalable digital infrastructure that enables public utilities to operate more efficiently, transparently, and intelligently."*
- **Vision:** become a *"trusted digital infrastructure partner for public utilities and development institutions."*
- **Three pillars:** Security-First Design · Infrastructure-Grade Systems · Practical Innovation.

## Delivery approach (`app/approach/page.tsx`)

Five-step "Infrastructure-First Delivery Approach":

1. Operational Understanding — analyse workflows, legacy systems, data flows, security requirements.
2. Security-First Architecture Design — data protection, secure access, resilience, compliance-ready structures.
3. AI-Enabled System Development — AI-powered operational tools, secure data platforms, scalable apps.
4. Pilot & Validation — deploy prototypes, validate accuracy, iterate.
5. Scalable Infrastructure Deployment — scale across regions/departments/operations.

## Prototypes / case studies (`app/prototypes/page.tsx`)

The site presents three flagship prototypes (each with Problem / Challenge / Approach / Solution / Impact):

| # | Prototype | Headline pitch |
| - | --------- | -------------- |
| 1 | AI-Powered Digital Metering Infrastructure | Replace manual meter reads with computer-vision capture into a central platform with billing/analytics integration. |
| 2 | Secure Centralised Utility Data Infrastructure | Centralised, encrypted utility data platform with RBAC and audit-ready flows. |
| 3 | AI-Enabled Utility Customer Service | AI chat/voice + case management with secure customer-data handling and service dashboards. |

These are framed as *pilot-ready* — not deployed customer references.

## Conversion path

Two CTAs throughout the site point to **`/contact`** ("Discuss a Pilot Project"). The Contact page lists a 4-step "What happens next" flow: review within 24h → call → requirements → proposal.

The keywords in `app/layout.tsx` metadata explicitly target: *"digital utility infrastructure, AI metering, water utilities, secure platforms, World Bank, MDB, public sector"* — i.e. the implied buyers are state water utilities and the development-finance institutions (World Bank, multilateral development banks) that fund them.

## Compare/contrast with `Enterstellarwebsite`

A sister repo at `/home/pete/projects/Internal/Enterstellarwebsite` carries the **same** company, contact details, brand palette, mission/vision, approach steps, and prototype copy. Differences observed:

- **Routes:** `Enterstellarwebsite` has an extra route — `app/case-studies/`. This repo (`enterstellar`) does not.
- **Home page (`app/page.tsx`):** `Enterstellarwebsite` has additional sections after the four-card overview — notably a **"Powered by Leading AI Models"** band citing OpenAI (GPT), Anthropic (Claude), and Google (Gemini), plus more sections. This repo's home page ends after the overview cards and a single contact CTA.
- **Imports:** `Enterstellarwebsite/app/page.tsx` imports `MessageSquare, Phone, FileText` icons in addition to those used here, consistent with the extra sections it carries.
- **Stack/configs:** identical — same Next 16.1.6, React 19.2.3, framer-motion, lucide-react, Tailwind 3.4.19, postcss configs, tailwind palette, eslint config.

Net: this `enterstellar` repo is a **leaner variant** — same company story, fewer sections on the home page, and one fewer route (`case-studies`). Treat it as a parallel build rather than an older or newer fork; commit history starts with its own "Initial commit: Enterstellar website" on 2026-02-02.
