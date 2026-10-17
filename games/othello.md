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
| State space | 10,000,000,000,000,000,000,000,000,000 |
| Game tree | 10,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 |
| Distance to result | Game runs up to 60 plies (4 discs at start, 60 empty squares to fill). The weak-solution proof exhaustively resolved the ~1.5 billion positions with 36 empty squares and connected them back to the initial position via 2,587 critical proof positions with 50 empty squares. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2023 | standard game | draw | Weak | Hiroki Takizawa | [source](https://arxiv.org/abs/2310.19387) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Edax](../pages/engines.md#engine-edax) (engine): third-party assessment, [source](https://arxiv.org/abs/2310.19387)

## References

- [Hiroki Takizawa, "Othello is Solved" (arXiv:2310.19387)](https://arxiv.org/abs/2310.19387)
- [Reproduction code and data (modified Edax, analysis scripts): eukaryo/reversi-scripts + Zenodo 10.5281/zenodo.10030906 + figshare 10.6084/m9.figshare.24420619](https://github.com/eukaryo/reversi-scripts)
- [Wikipedia: Computer Othello (Othello 8x8 section, notes the October 2023 preprint solving the game with a draw result)](https://en.wikipedia.org/wiki/Computer_Othello)

## Resources

**Tablebases**

- <https://doi.org/10.6084/m9.figshare.24420619>

**Code**

- <https://github.com/eukaryo/reversi-scripts>

**Write-ups**

- <https://arxiv.org/abs/2310.19387>

## Notes

Standard 8x8 Othello (Reversi) under tournament rules, starting from the conventional diagonal four-disc setup. Takizawa announced a WEAK solution in October 2023 (arXiv:2310.19387; v3 dated January 2024): the game-theoretic value of the initial position is a draw, confirming the long-standing expert prediction. This is explicitly a weak solution, not a strong one. The author writes that the result is "just above the criteria for weakly solving" and that "strongly solving Othello is intractable," so there is no full tablebase covering every reachable position.
Method: a modified version of the open-source Edax engine (alpha-beta search with transposition tables and aspiration windows), driven by a backward proof structure. The proof first exhaustively evaluated the 1,505,367,525 positions with 36 empty squares, then propagated values upward through 2,587 critical proof positions with 50 empty squares to establish the value of the start. Reported cumulative Edax node count was ~1.526 x 10^18. Computation ran on Preferred Networks' MN-J supercomputer cluster (Intel Xeon and AMD EPYC nodes). Raw data and programs were released on GitHub, Zenodo, and figshare for independent verification.
Complexity figures are the author's order-of-magnitude estimates: roughly 10^28 legal positions (state space) and roughly 10^58 possible game records (game tree) -- both "total," not reachable-only counts. These dwarf previously solved grand-challenge games such as checkers.
Caveat / attribution: as of mid-2026 the work remains an arXiv preprint (not a formally peer-reviewed journal/conference publication that I could confirm). Confidence in the result is nonetheless high because the full reproduction pipeline (modified Edax + scripts + raw outputs) is publicly archived with DOIs; the released artifacts function as a second independent primary source corroborating the paper's claim.
