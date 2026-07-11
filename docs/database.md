# Markio Database (Planned)

Planned data model for when Markio moves beyond `localStorage` to Supabase (or equivalent). No SQL schemas in this document — table intent only.

## profiles

User account / owner profile.

- Identity and display info
- Plan / billing tier references
- Preferences and onboarding state

## projects

One row per business workspace.

- Owner (`profile` reference)
- Name, industry
- Created / updated timestamps
- Active status flags as needed

## business_brains

Canonical Business Brain JSON per project.

- Strong link to a single `project`
- Nested business, branding, hero, about, services, testimonials, FAQ, SEO, image prompts
- Versioning / update history (optional later)

**Rule:** This is the marketing source of truth. Generated assets should reference the brain (or a frozen snapshot) rather than storing conflicting copies of core business facts.

## generated_assets

Outputs produced from a brain / project.

- Type (landing page, website, brand kit, ad, social, email, report, image, etc.)
- Status (draft, ready, published)
- Payload / storage pointers
- Link back to `project` and `business_brain`

## analytics

Performance and usage metrics.

- Project / asset scoped events and aggregates
- Traffic, conversions, opens, clicks, publish status
- Time-series friendly fields for dashboards

## future_crm

CRM entities planned for Phase 3+.

- Leads and contacts
- Clients / accounts
- Pipeline stages and notes
- Attribution back to project assets (landing pages, ads, emails)

Exact CRM table split (leads vs contacts vs deals) can be refined when CRM ships; this document reserves the domain.
