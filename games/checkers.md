<!-- GENERATED from data/games/checkers.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Checkers (English draughts)

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/checkers.yaml)

*Also known as: English draughts, American checkers, Straight checkers.*

Draw with perfect play by both sides (Black to play and draw from the standard opening)

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Retrograde analysis, Proof-number search, Alpha-beta + DB |
| Year | 2007 |
| Solved by | Jonathan Schaeffer, Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu, Steve Sutphen (University of Alberta; Chinook project) |
| Source | [Schaeffer et al. 2007](https://www.science.org/doi/10.1126/science.1144079) |
| Board | 8x8 board, pieces on dark squares only (32 playable squares) |
| State space | 500,995,484,682,338,700,000 |
| Distance to result | Longest line analyzed in the proof was 154 ply; a typical game lasts roughly 70 ply |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007 | standard game | draw | Weak | Jonathan Schaeffer, Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu, Steve Sutphen | [source](https://www.science.org/doi/10.1126/science.1144079) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Checkers Is Solved — J. Schaeffer et al., Science 317, 1518–1522 (2007)](https://www.science.org/doi/10.1126/science.1144079)
- [Checkers Is Solved (full text PDF, Science 2007)](https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf)
- [Solving Checkers — J. Schaeffer et al., IJCAI 2005 (earlier milestone: White Doctor opening proven a draw)](https://webdocs.cs.ualberta.ca/~mmueller/ps/ijcai05checkers.pdf)
- [Chinook endgame databases (University of Alberta)](http://webdocs.cs.ualberta.ca/~chinook/databases/)
- [Checkers, Solved! — IEEE Spectrum (secondary, July 2007)](https://spectrum.ieee.org/checkers-solved)

## Resources

**Explorers**

- <http://webdocs.cs.ualberta.ca/~chinook/databases/>

**Write-ups**

- <https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf>

## Notes

English draughts on the standard 8x8 board (32 dark playable squares, 12 pieces per side, forced captures). Weakly solved in 2007 by the Chinook team at the University of Alberta after ~18 years of work (started 1989): perfect play by both sides is a draw. This is a WEAK solution, not strong — a strategy is proven from the standard opening, but a game-theoretic value is NOT stored for every reachable position. The proof combined two pieces: (1) backward retrograde analysis producing endgame databases of 3.9 x 10^13 positions for all positions with <=10 pieces (this subset is strongly solved); and (2) a forward best-first search using Proof Number search at the top, with Chinook's alpha-beta search (nominal depth 17-23 ply) calling into the endgame databases as solvers. The total reachable state space of checkers is about 5 x 10^20 (500,995,484, 682,338,672,639) positions; this is the standard "reachable" figure, not the larger count of all board placements. The solvers needed to evaluate only on the order of 10^14 positions to complete the proof — a small fraction of the full space. Nineteen tournament openings were proven (all draws); together with symmetry/transposition reductions this covers the standard start. game_tree complexity left null: the paper gives only an order-of-magnitude alpha-beta estimate (~10^31 from optimistic assumptions), not a citable game-tree-size figure, so it is omitted. Independent verification: the Science paper notes the proof was checked for internal consistency and that an independent 10-piece database position requiring a 279-ply forced win was confirmed; the IJCAI 2005 paper is an earlier milestone by the same group (not a fully independent team).
