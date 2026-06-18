# awesome-game-solving

A curated, citation-gated reference for solved games: every known game-theoretic
result, the method that produced it, and the code to verify it. See `VISION.md`
for the north star and scope.

## Layout

- `README.md` — the rendered list (v0): solved games, tablebase formats,
  retrograde-analysis lineage, probe APIs, and the dōbutsu-shōgi worked example.
- `VISION.md` — north star, scope, non-goals, staging (v0 → v2).
- `data/` — the structured records. One YAML file per game in `data/games/`;
  schema in `data/schema.md`. The README table and the site generate from these
  records (`npm run build`), so edit the data, not the rendered tables.
- `engine/` — a generic retrograde-analysis solver (Rust) that strongly solves
  games through a `Game` trait. Each game is a plugin; the engine does the solve.
  Some registry entries (e.g. three men's morris) are solved and verified by it.
- `docs/` — the generated GitHub Pages site, rendered from `data/games/`.
- `CONTRIBUTING.md` — what earns an entry and how to add one.

## Working rules

- Data first: a game's truth lives in `data/games/<id>.yaml`; prose renders from it.
- Citation-gated: every result links to a primary source. Entries carry a
  `verified` flag; new ones arrive `verified: false` until checked.
- Honest strengths: ultra-weak / weak / strong are different claims.

## Internal context (local, gitignored)

Strategy, the research plan, and the current task live in `docs-private/`. A new
session should read `docs-private/HANDOFF.md` first, then `docs-private/CONTEXT.md`.
