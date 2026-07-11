# Cursor Rules (Markio)

Rules for agents and contributors working in this repository.

## Product & scope

- **Never redesign unrelated pages.** If the ticket is data-flow or one feature, do not restyle adjacent screens.
- **One ticket = one feature.** Keep PRs and agent sessions focused; avoid drive-by refactors.
- **Build before polish.** Prefer a working vertical slice over visual perfection.

## Data

- **Business Brain is the source of truth.** Landing pages, reports, and marketing assets must read from it.
- **No duplicate data.** Do not store the same business facts in multiple competing mock files when a brain exists.
- **Never use mock data if Business Brain exists.** Fallbacks/demos are only for empty states.

## Quality gate

- **Always run `npm run build`** before considering a ticket done.
- Do not change routing or redesign UI unless the ticket explicitly asks for it.
- Prefer localStorage / frontend patterns already in the repo until Supabase is in scope.
