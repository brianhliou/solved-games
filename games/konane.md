<!-- GENERATED from data/open/konane.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Kōnane (8×7 and 8×8)

[Capture & board control](../families/capture.md) · [open problems](../pages/open-problems.md) · [data](../data/open/konane.yaml)

<a id="open-konane"></a>

## Open problem: Kōnane (8×7 and 8×8)

| | |
|---|---|
| Status | Smaller board solved |
| Solved so far | All boards up to 7×7 weakly solved; all boards up to 6×6 strongly solved |
| Next target | 8×7 |
| Barrier | compute: Proof-number search attempts at 8×7 and 8×8 were stopped at a 21-day limit and remain unsolved (Siefke 2025). Those attempts were forward search (PN², df-pn); a retrograde solve is a different method and has not been tried here. |
| Latest result | [Siefke 2025](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) (2025-11-10) |
| Last checked | 2026-10-17 |
| Record | [data/open/konane.yaml](../data/open/konane.yaml) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2021 | narrow boards (3×n, 4×n families) | most narrow-board cases resolved; Triple (horizontal corner) and Quadruple (all but vertical middle) left open | — | Jos W. H. M. Uiterwijk | [source](https://journals.sagepub.com/doi/pdf/10.3233/ICG-220198) |
| 2025-11-10 | all boards up to 6×6 | complete endgame database | Strong | Benedikt Siefke | [source](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) |
| 2025-11-10 | all boards up to 7×7 | solved | Weak | Benedikt Siefke | [source](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) |
| 2025-11-10 | 8×7 and 8×8 | unsolved; runs stopped at the 21-day limit | — | Benedikt Siefke | [source](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) |

_Superseded rows stay in the table._

## References

- [Benedikt Siefke, "Solving Konane Using Proof-Number Search and Extensions", Bachelor's thesis, TU Berlin, 2025-11-10 (revised 2026-02-23). Abstract: complete database for all boards up to 6×6, all boards up to 7×7 weakly solved; 8×7 and 8×8 stopped after 21 days.](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) (2025-11-10)
- [Jos W. H. M. Uiterwijk, narrow-board Kōnane, ICGA Journal 43(3), 2021: leaves the Triple (horizontal corner) and Quadruple (all but vertical middle) cases open](https://journals.sagepub.com/doi/pdf/10.3233/ICG-220198) (2021)

## Notes

Status read from the thesis title page and abstract on 2026-10-17. Whether the thesis, or later work, closes Uiterwijk's open narrow-board cases (Triple and Quadruple) was not checked. The per-size winners are in the thesis body and are not copied here yet.
