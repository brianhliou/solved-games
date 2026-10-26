<!-- GENERATED from data/engines/takizawa-othello-6x6.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Takizawa 6×6 Othello tablebase and query tool

[All engines](../pages/engines.md) · [data](../data/engines/takizawa-othello-6x6.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Othello (6×6)](../games/othello-6x6.md)
- **Author:** Hiroki Takizawa
- **License:** CC-BY-4.0 (Zenodo deposit); GPL-3.0 (generation repository)
- **Project:** <https://zenodo.org/records/18843225>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Takizawa's paper reports exact values and canonical optimal moves throughout the region reachable when at least one player follows the certified optimal policy. ([source](https://arxiv.org/abs/2411.01029))

## Notes

The downloadable deposit includes query_6x6.py and documents its position format and usage inside the archive; this is a prober rather than a graphical opponent. Coverage is semi-strong, not every arbitrary position. The deposit is 138.4 GB compressed and approximately 550 GB extracted. Licensing was checked in the deposit metadata and the generation repository's [LICENSE](https://github.com/eukaryo/reopening-alphabeta-experiment/blob/main/LICENSE).
