# Markio Architecture

Markio is an AI marketing platform that turns a business description into a full marketing workspace. The system is organized around a single source of truth — the **Business Brain** — with engines and workspaces that read from it.

## Core principles

- **Business Brain is the single source of truth.** Every generated asset (landing pages, websites, ads, emails, social posts, brand kits, and reports) must read from the same Business Brain JSON for a project.
- **One project = one business.** Projects isolate brains and assets so users can run multiple businesses without data collisions.
- **Frontend-first persistence today.** Projects and brains are stored in `localStorage`. Supabase and a full backend are planned; they are not required for the current architecture contract.

## System layers

### Business Brain

The canonical business intelligence object for a project. It holds:

- Business profile (name, industry, location, audience, goal, description, USP)
- Branding (colors, font, style)
- Hero copy and CTAs
- About, services, testimonials, FAQ
- SEO metadata
- Image prompts

All engines consume this object. No feature should invent parallel copies of the same business facts.

### Marketing Workspace

The dashboard surface where users manage projects, review generated assets, open previews, and continue setup. Includes Home, Assistant, Projects, Landing Page Preview, and Business Launch Report.

### Website Engine

Responsible for generating and previewing web surfaces (landing pages today; multi-page websites later) from Business Brain content — hero, about, services, social proof, FAQ, branding, and SEO.

### Brand Engine

Produces brand identity artifacts from Business Brain branding fields: palette, typography direction, tone/style, logo ideas, and brand kit outputs.

### Marketing Engine

Creates go-to-market assets from the same brain: ads, social posts, email campaigns, and related copy variants aligned to goal and audience.

### AI Coach

Conversational onboarding and guidance (AI Business Assistant). Extracts or enriches the Business Brain from natural language, confirms profile fields with the user, then triggers generation workflows.

### Projects

The multi-business container. Each project stores:

- Identity (`id`, `name`, `industry`, timestamps)
- Its own `businessBrain`
- Active workspace selection so opening a project restores brain-backed assets

### Future CRM

Planned customer relationship layer for leads, clients, follow-ups, and pipeline views. Will attach to projects and analytics without replacing Business Brain as the marketing truth source.

## Data flow (current)

```text
User prompt (Assistant / Onboarding)
        │
        ▼
  Business Brain (AI extract + confirm)
        │
        ▼
  Enrich brain (landing / marketing content)
        │
        ▼
  Create Project + save to localStorage
        │
        ├──────────────┬──────────────┐
        ▼              ▼              ▼
 Landing Page   Launch Report   Future assets
 (Website Eng.)  (scores/recs)  (Brand / Ads / Email / Social)
```

## Source of truth rule

If Business Brain data exists for the active project:

1. Prefer it over demo or hardcoded fallbacks.
2. Do not duplicate the same fields across separate mock files.
3. Persist updates back into the active project’s brain.

Demo defaults exist only as empty-state / first-run fallbacks when no brain is available.
