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
| Year | 2013 |
| Solved by | Jakub Pawlewicz & Ryan B. Hayward (building on Henderson, Arneson & Hayward for 8×8 and Yang, Liao & Pawlak / Hayward et al. for 7×7) |
| Source | [Pawlewicz et al. 2013](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) |
| Board | 9×9 rhombus of hexagonal cells (81 cells); two opposite sides per player, first player connects their pair; no-swap (no pie rule) ruleset |
| Distance to result | The hardest 9×9 opening (a6) required 111 days of computation on a 24-core machine; the published principal variation for a6 is the deepest line in the paper. No single uniform ply count is given — proof depth varies by opening. |
| Evidence | refereed |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2003 | 7×7, all openings | first player wins | Weak | Hayward, Björnsson, Johanson, Kan, Po & van Rijswijck | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/solving7x7hex.pdf) |
| 2009 | 8×8, all openings | first player wins | Weak | Philip Henderson, Broderick Arneson & Ryan B. Hayward | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/solve8.pdf) |
| 2013 | 9×9, all openings | first player wins | Weak | Jakub Pawlewicz & Ryan B. Hayward | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) |
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
- [Philip Henderson, Broderick Arneson & Ryan B. Hayward, "Solving 8×8 Hex", IJCAI 2009, pp. 505-510 (precursor: all 8×8 openings solved by the same group/solver lineage)](https://webdocs.cs.ualberta.ca/~hayward/papers/solve8.pdf)
- [Hex (board game) — Wikipedia (secondary; summarizes solved board sizes 7×7-10×10 and the Nash strategy-stealing / Hex theorem)](https://en.wikipedia.org/wiki/Hex_(board_game))

## Resources

**Code**

- <https://github.com/cgao3/benzene-vanilla-cmake>

**Write-ups**

- <https://webdocs.cs.ualberta.ca/~hayward/publications.html>

## Notes

WEAK solution, not strong. Pawlewicz & Hayward weakly solved 9×9 Hex by resolving every opening move: their Scalable Parallel Depth-First Proof Number Search (SPDFPN) solved all thirteen 9×9 openings that earlier solvers had left intractable (the remaining openings were already known), determining the winner for each of the 81 starting cells. This does NOT produce a value for every reachable position (no full tablebase), so it is not a strong solution. SPDFPN is a shared-memory parallel version of the serial DFPN 1+ε method (Pawlewicz & Lew), running atop the Benzene/Solver Hex codebase; it uses proof/disproof numbers only and no domain-specific heuristics for thread scheduling, while the underlying Hex solver uses connection-based virtual connections, inferior-cell pruning and early win/loss detection. The hardest 9×9 opening (a6) took 111 days on a 24-core machine; the same run also produced the first-ever solution of a single 10×10 opening (the centremost cell, f5, in 63 days — Black wins).
Ruleset caveat: this is the no-swap (no pie-rule) game. Under the swap/pie rule the second player can flip a winning first move, which changes the practical game but not the cell-by-cell opening values reported here.
Lineage of forward-Hex solves: 7×7 — Jing Yang, Simon Liao & Mirek Pawlak (explicit decomposition strategy, 2001-2002) and independently a full computer solve by Hayward, Björnsson, Johanson, Kan, Po & van Rijswijck (2003); 8×8 — Henderson, Arneson & Hayward (IJCAI 2009, all openings); 9×9 — this work (2013); 10×10 — only the central opening (2013).
Ultra-weak result, ALL board sizes: independently of any search, Hex on any n×n board is a first-player win by John Nash's strategy-stealing argument (c. 1949) combined with the Hex theorem (Hein 1942 / Nash / Gale) that Hex can never be a draw — exactly one player connects. This is non-constructive: it proves the first player wins without giving a winning move. The 9×9 result here is the constructive WEAK upgrade for that specific size. Deciding an arbitrary generalized-Hex position is PSPACE-complete (Even & Tarjan, 1976; Reisch showed Hex itself PSPACE-complete, 1981), which is why explicit solving stalls around 9×9-10×10.
Complexity: no 9×9-specific state-space/game-tree figure is cited in the primary paper. For reference, surveys give 11×11 Hex a state-space complexity of roughly 10^57 and game-tree complexity of roughly 10^98; 9×9 is correspondingly smaller. The state_space/game_tree fields are left null rather than guessing a 9×9 number.
Bibliographic note: the paper was presented at Computers and Games 2013; its Springer LNCS 8427 proceedings carry a 2014 imprint. The result is universally dated 2013 (matching the conference and the anchor), which is the year used here.
