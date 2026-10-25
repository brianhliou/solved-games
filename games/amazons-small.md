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
| Year | 2015 |
| Solved by | Jiaxing Song and Martin Müller (5x6 and other rectangular boards); Martin Müller (5x5, 2001) |
| Source | [Song et al. 2015](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf) |
| Board | 5x6 rectangular grid (headline); also solved: 4x4, 5x5, 4x5, 5x4, 4x6, 4x7, 6x4 |
| Distance to result | First player has 410 legal moves in the 5x6 starting position; proofs are full game-tree searches from the start, not fixed-ply |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2015 | standard game | first player wins | Weak | Jiaxing Song and Martin Müller | [source](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [J. Song and M. Müller, An Enhanced Solver for The Game of Amazons (preprint PDF), IEEE TCIAIG 7(1):16-27, 2015](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf)
- [An Enhanced Solver for the Game of Amazons, IEEE Transactions on Computational Intelligence and AI in Games (IEEE Xplore)](https://ieeexplore.ieee.org/document/6766782/)
- [J. Song, An Enhanced Solver for the Game of Amazons (MSc thesis, University of Alberta, 2012)](http://hdl.handle.net/10402/era.29646)
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
Martin Müller, the largest proof presented in detail in their 2015 IEEE TCIAIG
paper and Song's 2012 MSc thesis. The first player has 410 legal moves at the
5x6 start.

On the standard 4-amazon corner setup, 4x4 is a second-player win (easy by
brute force; Müller and Tegos, Berlekamp, around 2002). 5x5 is a first-player
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
