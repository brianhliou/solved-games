<!-- GENERATED from data/engines/irving-kalah.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# kalah (Irving)

[All engines](../pages/engines.md) · [data](../data/engines/irving-kalah.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Kalah](../games/kalah.md)
- **Author:** Geoffrey Irving
- **License:** BSD-3-Clause (LICENSE)
- **Project:** <https://github.com/girving/kalah>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Irving, Donkers and Uiterwijk (2000) report exact solutions for Kalah starting configurations through six holes and five counters per hole using full-game databases and optimized search. ([source](https://naml.us/paper/irving2000_kalah.pdf))

## Notes

The repository describes this as a perfect player for up to five stones per bin and includes an endgame-database generator. Uses the paper's empty-capture rules; the larger instances were weakly solved, without a complete tablebase for every position. The README documents a serial build as well as historical Cilk/PVM versions.
