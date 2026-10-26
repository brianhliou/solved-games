<!-- GENERATED from data/engines/fathom.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Fathom

[All engines](../pages/engines.md) · [data](../data/engines/fathom.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Chess (8×8)](../games/chess-8x8.md)
- **Author:** Ronald de Man, Basil Falcinelli and Jon Dart
- **License:** MIT
- **Project:** <https://github.com/jdart1/Fathom>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Fathom's README documents Syzygy tablebase probing that returns solved WDL/DTZ values and recommended moves for covered chess endgames of up to seven pieces. ([source](https://github.com/jdart1/Fathom#readme))

## Notes

Perfect play applies within the installed tablebases' coverage, including both kings in the piece count; positions with castling rights are unsupported. The command-line tool lists winning, drawing and losing moves and generates a tablebase continuation. Tablebase files must be obtained separately. This is Jon Dart's maintained successor to basil00/Fathom. Credits and licensing are documented in the [README](https://github.com/jdart1/Fathom#history-and-credits) and [LICENSE](https://github.com/jdart1/Fathom/blob/master/LICENSE).
