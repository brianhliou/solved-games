<!-- GENERATED from data/games/hex-9x9.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Hex (9×9, all openings)

[Connection games](../families/connection.md) · [all families](../README.md#families) · [data](../data/games/hex-9x9.yaml)

*Also known as: Nash, John, Con-Tac-Tix, Polygon.*

First player (Black) wins with perfect play. All 81 opening moves on the 9×9 board are now resolved: the most-central openings win for the first player, while losing openings exist near the obtuse corners — so the first player wins simply by opening on a central cell.

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Depth-first PNS, Proof-number search, Strategy-stealing |
| Year | 2012 |
| Solved by | Jakub Pawlewicz & Ryan B. Hayward (building on Henderson, Arneson & Hayward for 8×8 and Yang, Liao & Pawlak / Hayward et al. for 7×7) |
| Source | [Pawlewicz et al. 2012](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) |
| Board | 9×9 rhombus of hexagonal cells (81 cells); two opposite sides per player, first player connects their pair; no-swap (no pie rule) ruleset |
| Distance to result | The hardest 9×9 opening (a6) required about 111 days of cumulative computation using 24 threads on 12 physical Xeon cores. The paper gives a principal variation for a6; no single uniform ply count is given. |
| Evidence | refereed |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2003 | 7×7, all openings | first player wins | Weak | Hayward, Björnsson, Johanson, Kan, Po & van Rijswijck | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/solving7x7hex.pdf) |
| 2009 | 8×8, all openings | first player wins | Weak | Philip Henderson, Broderick Arneson & Ryan B. Hayward | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/solve8.pdf) |
| 2012-04 | 9×9, all openings | first player wins | Weak | Jakub Pawlewicz & Ryan B. Hayward | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) |
| 2013 | 10×10, opening f5 | Black (first player) wins with f5; open entry hex-10x10 tracks the rest | — | Jakub Pawlewicz & Ryan B. Hayward | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) |

_Superseded rows stay in the table._

<a id="open-hex-10x10"></a>

## Open problem: Hex (10×10, remaining openings)

| | |
|---|---|
| Status | Partially solved (unverified) |
| Solved so far | 9×9 all openings (weak); 10×10 one opening, f5 |
| Next target | The current table of solved 10×10 opening cells from Hayward's group |
| Barrier | compute: Forward depth-first proof-number search. The one published 10×10 opening (f5) took 63 days; the hardest 9×9 opening took 111 days on a 24-core machine (Pawlewicz and Hayward 2013). Each further cell is on the order of 100+ core-days. |
| Latest result | [Pawlewicz & Hayward 2013](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) (2013) |
| Last checked | 2026-10-17 |
| Record | [data/open/hex-10x10.yaml](../data/open/hex-10x10.yaml) |

**Unverified:** Which 10×10 cells beyond f5 are solved. A Hayward talk (slides undated, probably BIRS 2022) lists more cells with the goal of all 50, but its PDF could not be read as text on 2026-10-17, so no cell beyond f5 is claimed here.

## Engines

- [MoHex 2.0 and Wolve (Benzene)](../pages/engines.md#engine-mohex) (engine): competition result, [source](https://webdocs.cs.ualberta.ca/~hayward/hex/)

## References

- [Jakub Pawlewicz & Ryan B. Hayward, "Scalable Parallel DFPN Search", Computers and Games (CG 2013), LNCS 8427, pp. 138-150, Springer 2014 (DOI 10.1007/978-3-319-09165-5_12) — solves all thirteen previously intractable 9×9 openings and the first 10×10 opening](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf)
- [Scalable Parallel DFPN Search — Springer (CG 2013), DOI 10.1007/978-3-319-09165-5_12](https://link.springer.com/chapter/10.1007/978-3-319-09165-5_12)
- [University of Alberta Computer Hex Research Group (April 2012 completion of all 9×9 openings)](https://webdocs.cs.ualberta.ca/~hayward/hex/)
- [Ryan Hayward, Hex course history (centre and b9 solved on 10×10 by 2013)](https://webdocs.cs.ualberta.ca/~hayward/355/jem/hex.html)
- [Philip Henderson, Broderick Arneson & Ryan B. Hayward, "Solving 8×8 Hex", IJCAI 2009, pp. 505-510 (precursor: all 8×8 openings solved by the same group/solver lineage)](https://webdocs.cs.ualberta.ca/~hayward/papers/solve8.pdf)
- [Hex (board game) — Wikipedia (secondary; summarizes solved board sizes 7×7-10×10 and the Nash strategy-stealing / Hex theorem)](https://en.wikipedia.org/wiki/Hex_(board_game))

## Resources

**Code**

- <https://github.com/cgao3/benzene-vanilla-cmake>

**Write-ups**

- <https://webdocs.cs.ualberta.ca/~hayward/publications.html>

## Notes

Jakub Pawlewicz and Ryan Hayward weakly solved 9×9 Hex by resolving every
opening move, completed in April 2012. Their Scalable Parallel Depth-First
Proof Number Search (SPDFPN)
solved all thirteen 9×9 openings that earlier solvers had left intractable
(the rest were already known), which settles the winner for each of the 81
starting cells. There is no value for every reachable position, so the
solution is weak.

SPDFPN is a shared-memory parallel version of the serial DFPN 1+ε method
(Pawlewicz and Lew), running on the Benzene Hex codebase. It schedules threads
with proof and disproof numbers alone, without Hex-specific heuristics, while
the underlying Hex solver uses virtual connections, inferior-cell pruning and
early win/loss detection. The hardest 9×9 opening (a6) took about 111 days of
cumulative computation with 24 threads on a hyperthreaded 12-core Xeon.
The separate scaling tests used a physical 24-core machine. The work also
produced the first solution of a single
10×10 opening, the centremost cell f5, in 63 days: Black wins.

This is the no-swap (no pie rule) game. Under the swap rule the second player
can take over a winning first move, which changes the practical game but
leaves the cell-by-cell opening values unchanged.

Earlier sizes came first. 7×7 was solved by Jing Yang, Simon Liao and Mirek
Pawlak (an explicit decomposition strategy, 2001-2002) and independently by a
full computer solve from Hayward, Björnsson, Johanson, Kan, Po and van
Rijswijck (2003). 8×8 fell to Henderson, Arneson and Hayward (IJCAI 2009, all
openings), followed by all 9×9 openings in April 2012. The 9×9 work was
presented at CG 2013 and published in the 2014 proceedings. At least two
winning 10×10 openings, the centre and b9, were solved by 2013.

Independently of any search, Hex on every n×n board is a first-player win, an
ultra-weak result. John Nash's strategy-stealing argument (c. 1949) combines
with the Hex theorem (Hein 1942, Nash, Gale) that Hex can never be a draw:
exactly one player connects. The argument proves the first player wins without
giving a winning move, and the 9×9 result is the constructive weak solution
for that size. Deciding an arbitrary generalized-Hex position is
PSPACE-complete (Even and Tarjan, 1976; Reisch showed Hex itself
PSPACE-complete, 1981), which is why explicit solving stalls around 9×9 to
10×10.

The primary paper cites no state-space or game-tree figure for 9×9. Surveys
give 11×11 Hex a state-space complexity of roughly 10^57 and a game-tree
complexity of roughly 10^98, and 9×9 is correspondingly smaller.
