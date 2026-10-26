<!-- GENERATED from data/games/othello.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Othello

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/othello.yaml)

*Also known as: Reversi.*

Perfect play by both players leads to a draw (32-32).

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Alpha-beta + DB, Brute-force enumeration |
| Year | 2023 |
| Solved by | Hiroki Takizawa (Preferred Networks, Inc.) |
| Source | [Takizawa 2023](https://arxiv.org/abs/2310.19387) |
| Board | 8x8 (64 squares; standard cross start with 4 discs placed) |
| State space | 10²⁸ |
| Game tree | 10⁵⁸ |
| Distance to result | At most 60 disc placements from the four-disc start; passes add turns. The weak-solution proof resolved 1,505,367,525 selected proof subproblems with 36 empty squares, linked to the start through 2,587 critical proof positions with 50 empty squares. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2023 | standard game | draw | Weak | Hiroki Takizawa | [source](https://arxiv.org/abs/2310.19387) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Edax](../engines/edax.md) (engine): third-party assessment, [source](https://arxiv.org/abs/2310.19387)
- [Egaroucid](../engines/egaroucid.md) (engine): competition result, [source](https://www.egaroucid.nyanyan.dev/en/)
- [Fairy-Stockfish](../engines/fairy-stockfish.md) (engine): competition result, [source](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results)
- [Galvanise Zero (gzero)](../engines/galvanise-zero.md) (engine): competition result, [source](https://github.com/richemslie/galvanise_zero)

## References

- [Hiroki Takizawa, "Othello is Solved" (arXiv:2310.19387)](https://arxiv.org/abs/2310.19387)
- [Reproduction code and data (modified Edax, analysis scripts): eukaryo/reversi-scripts + Zenodo 10.5281/zenodo.10030906 + figshare 10.6084/m9.figshare.24420619](https://github.com/eukaryo/reversi-scripts)
- [L. Victor Allis, Searching for Solutions in Games and Artificial Intelligence (1994 thesis), §6.3.6 (complexity estimates; text mirror)](https://paperzz.com/doc/7284686/searching-for-solutions-in-games-and-artificial-intelligence)
- [Wikipedia: Computer Othello (Othello 8x8 section, notes the October 2023 preprint solving the game with a draw result)](https://en.wikipedia.org/wiki/Computer_Othello)

## Resources

**Tablebases**

- <https://doi.org/10.6084/m9.figshare.24420619>

**Code**

- <https://github.com/eukaryo/reversi-scripts>

**Write-ups**

- <https://arxiv.org/abs/2310.19387>

## Notes

The solved game is standard 8x8 Othello under tournament rules, from the usual
diagonal four-disc start. Takizawa announced the solution in October 2023
(arXiv:2310.19387; v3 dated January 2024): with perfect play the game is a
draw, as experts had long predicted.

The solution is weak, and the paper says so: the result is "just above the
criteria for weakly solving" and "strongly solving Othello is intractable", so
there is no tablebase covering every reachable position. The search used a
modified Edax engine (alpha-beta search with transposition tables and
aspiration windows) inside a backward proof. It resolved 1,505,367,525
selected proof subproblems with 36 empty squares, rather than every reachable
position at that depth. These supported 2,587 critical proof positions with
50 empty squares and the draw from the start. Edax searched about
1.526 x 10^18 nodes in total, on Preferred Networks' MN-J
cluster (Intel Xeon and AMD EPYC nodes).

Allis estimates a state-space upper bound of about 10^28 after partial
legality tests; it can include unreachable positions. His game-tree estimate
of about 10^58 assumes an average branching factor of 10 and a game length of
58 plies. These are estimates of different quantities, not exact reachable
totals or counts of nodes searched by Takizawa.

As of mid-2026 the work is an arXiv preprint, and no peer-reviewed journal or
conference version has been confirmed. The modified Edax, the scripts and the
raw outputs are archived on GitHub, Zenodo and figshare with DOIs, so the
result can be checked independently.
