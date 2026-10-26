<!-- GENERATED from data/engines/awari-python.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Awari-Python database prober

[All engines](../pages/engines.md) · [data](../data/engines/awari-python.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Awari (Oware)](../games/awari.md)
- **Author:** Vrije Universiteit Amsterdam; dataset credits John W. Romein, Henri E. Bal and Kees Verstoep
- **License:** Apache-2.0 for the code; CC-BY-4.0 for the published database
- **Project:** <https://github.com/keesverstoep/Awari>
- **Last checked:** 2026-10-25

## Strength

Perfect play. The project's documentation states that db_lookup.py returns the optimal score of a position and the scores after each of its six potential moves from the complete Awari database. ([source](https://github.com/keesverstoep/Awari/blob/main/Awari-Python/README.md))

## Notes

A command-line tablebase prober rather than an automatic opponent. GitHub contains a database subset; the full database exceeds 800 GB and is available at https://doi.org/10.48338/vu01-11wjke. Implements the solved Awari rules: capturing every opposing seed is forbidden unless it is the only available move; these differ from Abapa Oware.
