<!-- GENERATED from data/engines/sanmill.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Sanmill

[All engines](../pages/engines.md) · [data](../data/engines/sanmill.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Nine Men's Morris](../games/nine-mens-morris.md), [Lasker Morris](../games/lasker-morris.md), [Morabaraba](../games/morabaraba.md)
- **Other games:** Twelve Men's Morris, Dooz, Russian Mill, Cheng San Qi, Da San Qi, Zhi Qi, El Filja
- **Author:** Calcitem and contributors credited in AUTHORS; PerfectAI code by Gábor E. Gévay and Gábor Danner
- **License:** AGPL-3.0-or-later, with the README's additional app-store distribution permission
- **Project:** <https://github.com/calcitem/Sanmill>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Sanmill's Perfect Database documentation states that installed Malom databases override search moves when necessary to select a perfect move. ([source](https://github.com/calcitem/Sanmill/wiki/Perfect-Database))

## Notes

Also provides heuristic search and mobile/desktop interfaces. Perfect play requires the appropriate complete database and matching rules; missing database files cause fallback to search. The Morabaraba database uses the full-board-is-a-draw convention. Supported presets are defined in crates/tgf-mill/src/presets.rs; those presets do not include six or three men's morris.
