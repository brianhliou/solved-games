<!-- GENERATED from data/games/breakthrough-6x5.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Breakthrough (6×5)

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/breakthrough-6x5.yaml)

The second player can force a win from the standard starting position.

| | |
|---|---|
| Result | Second player wins |
| Strength | Weak |
| Method | Proof-number search, Knowledge-based |
| Year | 2011 |
| Solved by | Abdallah Saffidine, Nicolas Jouandeau and Tristan Cazenave |
| Source | [Saffidine et al. 2011](https://www.lamsade.dauphine.fr/~cazenave/papers/solving.pdf) |
| Board | 6 columns × 5 rows; each player starts with two rows of pawns |
| Evidence | refereed |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2011 | 6×5 | second player wins | Weak | Abdallah Saffidine, Nicolas Jouandeau and Tristan Cazenave | [source](https://www.lamsade.dauphine.fr/~cazenave/papers/solving.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

<a id="open-breakthrough-8x8"></a>

## Open problem: Breakthrough (8×8)

| | |
|---|---|
| Status | Smaller board solved |
| Solved so far | 6×6 starting position: first-player win (published 2026); 6×5: second-player win (2011) |
| Next target | The standard 8×8 starting position, with two rows of pawns per player |
| Barrier | compute, storage: Considine's April 2025 revision estimated 1.3×10^11 positions outside the sets settled by 16-ply retrograde analysis on 6×6. This illustrates the scale of endgame coverage below the target size. Growth in that coverage and in the starting-position proof is the scaling obstacle for 8×8. |
| Latest result | [Björnsson et al. 2026](https://journals.sagepub.com/doi/abs/10.1177/13896911261430592) (2026-03-25) |
| Last checked | 2026-10-25 |
| Record | [data/open/breakthrough-8x8.yaml](../data/open/breakthrough-8x8.yaml) |

Searches for newer work:

- 2026-10-25: looked for Breakthrough solved 8x8 6x5 7x7 solution; Solving Breakthrough for the 6×6 Board; Breakthrough solved 7x7 2026; Breakthrough 8x8 solved Björnsson. Checked the 2026 journal abstract and university record.; found Found the refereed 2026 publication proving a first-player win on 6×6, beyond the catalog's 6×5 record. No subsequent solution of 7×7 or 8×8 was found..

## References

- [Saffidine, Jouandeau and Cazenave, Solving Breakthrough with Race Patterns and Job-Level Proof Number Search (ACG 2011; LNCS 7168, pp. 196–207, 2012)](https://www.lamsade.dauphine.fr/~cazenave/papers/solving.pdf)
- [Springer publication record for the 2012 proceedings chapter](https://link.springer.com/chapter/10.1007/978-3-642-31866-5_17)
- [Tristan Cazenave's publication list, listing the report under November 2011](https://www.lamsade.dauphine.fr/~cazenave/)

## Notes

Breakthrough is a pawn race. Each player starts with two rows of pawns and
tries to reach the opposite back row. Pawns move one square straight or
diagonally forward. Straight moves require an empty square; diagonal moves
can capture an opposing pawn.

Saffidine, Jouandeau and Cazenave solved the starting position on a board six
columns wide and five rows high. Their parallel proof-number search uses
another proof-number search for each remote job, with workers returning
partial results to guide the main search. Handwritten race patterns let the
solver recognize winning positions before reaching the end of play.

The second player wins. One reported run took 25,638 seconds with 64 clients.
The result appears in the [paper's conclusion](https://www.lamsade.dauphine.fr/~cazenave/papers/solving.pdf).
