<!-- GENERATED from data/open/tak-4x4.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Tak (4×4)

[Connection games](../families/connection.md) · [open problems](../pages/open-problems.md) · [data](../data/open/tak-4x4.yaml)

<a id="open-tak-4x4"></a>

## Open problem: Tak (4×4)

| | |
|---|---|
| Status | Smaller board solved |
| Solved so far | 3×3: first player (White) forced win |
| Next target | 4×4 |
| Barrier | storage: Stacks make positions hard to hash and the 4×4 state space is not known. Measure a sample before estimating the solve. |
| Latest result | [Marrow 2025](https://arxiv.org/abs/2509.05844) (2025-09-06) |
| Last checked | 2026-10-17 |
| Record | [data/open/tak-4x4.yaml](../data/open/tak-4x4.yaml) |

Searches for newer work:

- 2026-10-17: looked for web searches "Tak 4x4 solved" and "Tak 5x5 solved"; found no solver or result for 4×4 or 5×5.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2025-09-06 | 3×3 | first player (White) forced win | — | Joseph Marrow | [source](https://arxiv.org/abs/2509.05844) |

_Superseded rows stay in the table._

## Engines

- [Tiltak](../engines/tiltak.md) (engine): match result, [source](https://github.com/MortenLohne/tiltak)

## References

- [Joseph Marrow, "The 3×3 Solution to the Game of Tak", arXiv:2509.05844 (2025-09-06): 3×3 is a first-player forced win. The abstract names no larger board; the paper notes that much Tak analysis is unpublished, on forums.](https://arxiv.org/abs/2509.05844) (2025-09-06)

## Notes

The weakest of the open entries: its open status rests on searches that found nothing, and Tak forums were not read. A correction is the most likely change.
