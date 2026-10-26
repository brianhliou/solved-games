<!-- GENERATED from data/engines/tiltak.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Tiltak

[All engines](../pages/engines.md) · [data](../data/engines/tiltak.yaml)

- **Kind:** engine (searches)
- **Games in this list:** [Tak (4×4)](../games/tak-4x4.md)
- **Other games:** Tak (5×5), Tak (6×6)
- **Author:** Morten Lohne
- **License:** GPL-3.0-or-later
- **Project:** <https://github.com/MortenLohne/tiltak>
- **Last checked:** 2026-10-25

## Strength

Match result. Tiltak's README reports 1276 wins and 684 losses in a 2000-game match against Taktician. ([source](https://github.com/MortenLohne/tiltak))

## Notes

The match report does not specify board size, hardware or time control, so it does not establish measured 4×4 strength. Actual 4×4 playing support is explicit in the [TEI dispatcher](https://github.com/MortenLohne/tiltak/blob/master/src/tei.rs), which handles sizes 4, 5 and 6. Source builds and command-line play are documented in the README. Author and license are stated in [Cargo.toml](https://github.com/MortenLohne/tiltak/blob/master/Cargo.toml). No complete 4×4 solution is claimed.
