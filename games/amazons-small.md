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

Amazons is a combinatorial board game (each turn: move an amazon like a chess queen, then shoot an arrow that blocks a square); the last player able to move wins, so there are no draws. The full 10x10, 4-amazons-per-side game is far from solved. Only small rectangular instances have been solved, all by exhaustive search backed by combinatorial-game-theory bounds — these are WEAK solutions (game-theoretic value of the start, with a winning strategy proven by the search tree), not strong solutions (no full tablebase of all reachable positions).
Headline instance is the 5x6 board (4 amazons per side, standard corner setup), proven a FIRST-PLAYER WIN by Jiaxing Song and Martin Müller — the largest proof presented in detail in the 2015 IEEE TCIAIG paper / Song's 2012 MSc thesis. The first player has 410 legal moves in the 5x6 start.
All solved instances (standard 4-amazons setup, corner starting points):
  - 4x4: second-player win (easy brute-force; Müller & Tegos / Berlekamp, ~2002)
  - 5x5: first-player win (Müller, GPW 2001, proven 4 Jan 2001)
  - 4x5, 5x4, 4x6, 4x7: first-player wins (Song & Müller, 2012/2015)
  - 5x6: first-player win (Song & Müller, 2012/2015) — headline
  - 6x4: SECOND-player win (Song & Müller, 2012/2015); took ~1 CPU day to
    refute all 256 starting moves. Note narrow-tall boards (e.g. 4x5) favor the
    first player via an early blocking move, while their transposes (e.g. 5x4,
    6x4) are harder and can flip the result.
The authors state no other board sizes / queen counts / starting configurations had published solutions as of 2015.
Method: combinatorial-game-theory bounds (thermographs, infinitesimals) to prune and to find wins early; endgame databases for territories and "blocker territories" built by retrograde analysis; a df-pn (depth-first proof-number) full-board solver. Generalized n x n Amazons from an arbitrary position is PSPACE-complete (Furtak, Kiyomi, Uno, Buro, 2005); deciding simple Amazons endgames is NP-equivalent (Buro, 2001) — context for why only tiny boards are solved. No citable single state-space figure for the 5x6 game; complexity fields left mostly null deliberately.
