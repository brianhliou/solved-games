<!-- GENERATED from data/games/lines-of-action-6x6.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Lines of Action (6×6)

[Connection games](../families/connection.md) · [all families](../README.md#families) · [data](../data/games/lines-of-action-6x6.yaml)

*Also known as: 6×6 LOA.*

Black, moving first, can force a win; b6-b4 and c6-e4 are winning openings.

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Proof-number search |
| Year | 2008 |
| Solved by | Mark H. M. Winands |
| Source | [Winands 2008](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf) |
| Board | 6×6; eight pieces per player |
| State space | 10,000,000,000,000 |
| Game tree | 10³² |
| Evidence | refereed |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2008 | 6×6 | first player wins | Weak | Mark H. M. Winands | [source](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

<a id="open-lines-of-action-8x8"></a>

## Open problem: Lines of Action (8×8)

| | |
|---|---|
| Status | Smaller board solved |
| Solved so far | 6×6 starting position: Black wins with b6-b4 or c6-e4 (2008) |
| Next target | The standard 8×8 start under Computer Olympiad rules, with 7×7 as an intermediate target |
| Barrier | compute, memory: Winands reports 220,375,986,787 searched nodes for the 6×6 opening b6-b4. His estimates for 8×8 are a state space of order 10^23 and a game tree of order 10^64. Proof-number search also faces memory limits because it retains its search tree. |
| Latest result | [Winands 2008](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf) (2008-12) |
| Last checked | 2026-10-25 |
| Record | [data/open/lines-of-action-8x8.yaml](../data/open/lines-of-action-8x8.yaml) |

Searches for newer work:

- 2026-10-25: looked for Lines of Action solved 7x7 8x8 Winands; Lines of Action 7x7 solved 2025 2026; Lines of Action 8x8 solved 2025 2026. Also inspected Winands's publication list.; found No later starting-position proof for 7×7 or 8×8 was found. Searches continued to return the 2008 6×6 paper. The author's publication list inspected is not a complete bibliography through 2026..

## References

- [Mark H. M. Winands, 6 × 6 LOA is Solved (ICGA Journal 31(4), pp. 234–238, December 2008)](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf)
- [Maastricht University publication record and abstract](https://cris.maastrichtuniversity.nl/en/publications/6-x-6-loa-is-solved/)

## Notes

Lines of Action is a connection game with captures. Each player starts with
eight pieces on a 6×6 board. A piece moves exactly as many squares as there
are pieces of either colour along its line of movement. The goal is to join
all surviving pieces into one group; diagonal contact counts. The rules used
here make simultaneous connection and a third repetition draws.

Mark H. M. Winands proved Black's win using proof-number search at two levels,
called PN². Both b6-b4 and c6-e4 are winning openings. The
[paper](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf)
appeared in December 2008.

Winands estimates a state space of order 10^13 and a game tree of order
10^32. These are estimates; the paper does not specify whether the state-space
estimate includes unreachable positions.
