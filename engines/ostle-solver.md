<!-- GENERATED from data/engines/ostle-solver.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# ostle_solver

[All engines](../pages/engines.md) · [data](../data/engines/ostle-solver.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Ostle](../games/ostle.md)
- **Author:** Hiroki Takizawa (eukaryo)
- **License:** MIT
- **Project:** <https://github.com/eukaryo/ostle_solver>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Takizawa (2023) reports a strong solution of Ostle by retrograde analysis, determining a draw from the start and values for all reachable states. ([source](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/))

## Notes

Includes query.py for looking up results and continuations, including the previous-position restriction. Analysis outputs are published at https://doi.org/10.6084/m9.figshare.19668789.v1. The README describes about 213 GB of analysis files and requires AVX2/BMI2 for the native solver.
