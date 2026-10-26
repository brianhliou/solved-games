<!-- GENERATED from data/games/amazons-small.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Amazons (small boards)

[Combinatorial game theory](../families/cgt.md) · [all families](../README.md#families) · [data](../data/games/amazons-small.yaml)

*Also known as: Game of the Amazons, El Juego de las Amazonas, Amazons.*

First player wins on 5x6 (and on 5x5, 4x5, 5x4, 4x6, 4x7); 6x4 and 4x4 are second-player wins

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Alpha-beta + DB, Retrograde analysis, Depth-first PNS, Mathematical proof |
| Year | 2012 |
| Solved by | Jiaxing Song and Martin Müller (5x6 and other rectangular boards); Martin Müller (5x5, 2001) |
| Source | [Song et al. 2012](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf) |
| Board | 5x6 rectangular grid (headline); also solved: 4x4, 5x5, 4x5, 5x4, 4x6, 4x7, 6x4 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2012 | standard game | first player wins | Weak | Jiaxing Song and Martin Müller | [source](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

<a id="open-amazons-10x10"></a>

## Open problem: Amazons (10×10)

| | |
|---|---|
| Status | Smaller board solved (unverified) |
| Solved so far | 5×6 and several smaller rectangles with four amazons per side (published 2015); 5×5 (2001) |
| Next target | The standard 10×10 start, with the 6×5 and 6×6 starts as intermediate targets |
| Barrier | branching, compute: Song and Müller report 410 legal moves at the 5×6 start. Their proof fixes one opening and refutes all 157 replies. Larger boards leave more interacting regions to search before local endgame bounds can settle the winner. |
| Latest result | [Song & Müller 2015](https://web.archive.org/web/2025/https://webdocs.cs.ualberta.ca/~mmueller/ps/2015/2015-Solve-Amazons.pdf) (2015-03) |
| Last checked | 2026-10-25 |
| Record | [data/open/amazons-10x10.yaml](../data/open/amazons-10x10.yaml) |

**Unverified:** Direct retrieval of the author-hosted 2015 journal PDF failed. Its results, opening counts and proof method were checked in search-indexed text of that PDF, but the complete file could not be reread. The 2002 paper was read directly.

Searches for newer work:

- 2026-10-25: looked for Amazons solved 6x6; Amazons 6x6 solving Müller; Amazons solved 2025; Amazons solved 2026; Amazons 10×10 solved. Checked indexed text of Müller's research page and later solving-challenge slides.; found No later solution of the standard 6×5, 6×6 or 10×10 start was found. Müller's research page describes an unfinished 6×5 attempt, and his 2023 challenge slides still name 6×5 and 6×6 as targets. Direct access to these author-hosted pages and slides failed..

## Engines

- [Fairy-Stockfish](../engines/fairy-stockfish.md) (engine): competition result, [source](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results)
- [Galvanise Zero (gzero)](../engines/galvanise-zero.md) (engine): competition result, [source](https://github.com/richemslie/galvanise_zero)
- [Invader](../engines/invader.md) (engine): competition result, [source](https://www.csun.edu/~lorentz/amazon.htm)

## References

- [J. Song and M. Müller, An Enhanced Solver for The Game of Amazons (preprint PDF), IEEE TCIAIG 7(1):16-27, 2015](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf)
- [An Enhanced Solver for the Game of Amazons, IEEE Transactions on Computational Intelligence and AI in Games (IEEE Xplore)](https://ieeexplore.ieee.org/document/6766782/)
- [J. Song, An Enhanced Solver for the Game of Amazons (MSc thesis, University of Alberta, 2013)](https://ualberta.scholaris.ca/items/6175488e-cf76-4e98-b51c-799cf1c9e9fc)
- [M. Müller and T. Tegos, Experiments in Computer Amazons (2002)](https://library.slmath.org/books/Book42/files/muller.pdf)
- [M. Müller, Solving 5x5 Amazons (GPW 2001) — talk slides; paper in GPW 2001, pp. 64-71](https://webdocs.cs.ualberta.ca/~mmueller/cgt/talks/2001-5x5GPW-talk.pdf)
- [Research Related to the Game of Amazons (Martin Müller, summary page)](http://webdocs.cs.ualberta.ca/~mmueller/amazons/)
- [Game of the Amazons (Wikipedia, secondary)](https://en.wikipedia.org/wiki/Game_of_the_Amazons)

## Resources

**Write-ups**

- <http://webdocs.cs.ualberta.ca/~mmueller/amazons/>

## Notes

In Amazons each turn a player moves an amazon like a chess queen and then
shoots an arrow from it, which blocks a square for the rest of the game. The
last player able to move wins, so there are no draws. The full game, 10x10
with 4 amazons a side, is far from solved; only small rectangular boards are.

Those solutions come from exhaustive search backed by bounds from
combinatorial game theory. Each gives the value of the start with a winning
strategy proved by the search tree, which is a weak solution; there is no
tablebase of all reachable positions. The headline board is 5x6 (4 amazons a
side, standard corner setup), a first-player win proved by Jiaxing Song and
Martin Müller in 2012, described in their 2015 IEEE TCIAIG paper and Song's
2013 MSc thesis. The first player has 410 legal moves at the 5x6 start.

On the standard 4-amazon corner setup, 4x4 is a second-player win, reported
by Müller and Tegos in 2002. 5x5 is a first-player
win (Müller, GPW 2001, proven 4 Jan 2001). Song and Müller (2012/2015) found
4x5, 5x4, 4x6, 4x7 and 5x6 first-player wins and 6x4 a second-player win;
refuting all 256 starting moves on 6x4 took about 1 CPU day. Narrow, tall
boards such as 4x5 favour the first player through an early blocking move,
while their transposes (5x4, 6x4) are harder and can flip the result. The
authors state that no other board sizes, queen counts or starting setups had
published solutions as of 2015.

The solver uses combinatorial-game-theory bounds (thermographs,
infinitesimals) to prune and to find wins early, endgame databases for
territories and "blocker territories" built by retrograde analysis, and a
df-pn (depth-first proof-number) solver over the full board. Generalized n x n
Amazons from an arbitrary position is PSPACE-complete (Furtak, Kiyomi, Uno and
Buro, 2005), and deciding simple Amazons endgames is NP-equivalent (Buro,
2001), which is why only tiny boards are solved.
