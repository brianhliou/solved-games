<!-- GENERATED from data/engines/sanko.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Sanko

[All engines](../pages/engines.md) · [data](../data/engines/sanko.yaml)

- **Kind:** engine (searches)
- **Games in this list:** [Go (5×5)](../games/go-5x5.md), [Go (6×6)](../games/go-5x5.md#open-go-6x6)
- **Other games:** Go on other rectangular boards with at most 49 intersections
- **Author:** Sami Kharma (Cargo.toml)
- **License:** Apache-2.0
- **Project:** <https://github.com/cookiephone/sanko>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Kharma and Schintke (2026) report that Sanko solves 5×5 Go under positional superko in 16 minutes using six threads. ([source](https://arxiv.org/abs/2610.29414))

## Notes

Proof-search software, classified as engine because it searches rather than playing from a supplied solution database. The CLI accepts move histories and reports a winning move when it proves the side to move wins. The repository documents 6×6 searches, but supplies no completed empty-board 6×6 solution. Rules are positional superko, area scoring and no suicide; draws count as White wins for the CLI's threshold queries. Author and license are stated in [Cargo.toml](https://github.com/cookiephone/sanko/blob/master/Cargo.toml). The strength source is a preprint.
