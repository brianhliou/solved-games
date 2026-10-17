<!-- GENERATED from data/games/sim.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Sim

[Combinatorial game theory](../families/cgt.md) · [all families](../README.md#families) · [data](../data/games/sim.yaml)

*Also known as: Hales-Jewett game, R(3,3) avoidance game, Game of Sim.*

Second player wins with perfect play (misère/avoidance: completing a monochromatic triangle in your own color loses)

| | |
|---|---|
| Result | Second player wins |
| Strength | Strong |
| Method | Brute-force enumeration, Mathematical proof |
| Year | 1974 |
| Solved by | Ernest Mead, Alexander Rosa & Charlotte Huang (explicit second-player strategy); independently and strongly/ultra-strongly solved by Wolfgang Slany (1999) |
| Source | [Mead et al. 1974](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1974.11976415) |
| Board | Complete graph K6 (6 vertices, 15 edges); each player colors edges in their own color |
| State space | 14,348,907 |
| Distance to result | at most 15 plies (the 15 edges of K6); a monochromatic triangle is forced by move 15 at the latest since R(3,3)=6 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1974 | standard game | second player wins | Strong | Ernest Mead, Alexander Rosa & Charlotte Huang | [source](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1974.11976415) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Mead, Rosa & Huang, 'The Game of Sim: A Winning Strategy for the Second Player', Mathematics Magazine 47(5):243-247 (1974)](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1974.11976415)
- [Wolfgang Slany, 'Graph Ramsey Games' (1999), arXiv:cs/9911004 - strongly/ultra-strongly solves Sim (Sections 7.1-7.2)](https://arxiv.org/abs/cs/9911004)
- [Weronika Wrzos-Kaminska, 'A simpler winning strategy for Sim' (2020), arXiv:2001.04024](https://arxiv.org/abs/2001.04024)
- [Sim (game) - Wikipedia](https://en.wikipedia.org/wiki/Sim_(game))

## Resources

**Write-ups**

- <https://ar5iv.labs.arxiv.org/html/2001.04024>

## Notes

Sim was invented by Gustavus J. Simmons in 1969 (Journal of Recreational Mathematics, vol. 2, p. 66). It is a misere (avoidance) positional game on the complete graph K6: two players alternately color the 15 edges, each in their own color, and the player who first completes a triangle entirely in their own color loses. Because the Ramsey number R(3,3) = 6, every 2-coloring of K6 contains a monochromatic triangle, so a draw is impossible -- exactly one player is forced to complete a triangle. The game is named the "Hales-Jewett game" after the founders of positional-game theory (Hales & Jewett), of which Sim is a classic example, and is also called the R(3,3) avoidance game.
Result: the SECOND player wins with perfect play. The first explicit, human-readable winning strategy was published by Mead, Rosa & Huang in 1974 (Mathematics Magazine 47(5):243-247), backed by computer search; they themselves noted that a simpler, easier-to-memorize strategy was still desirable. Wolfgang Slany's 1999 report "Graph Ramsey Games" (arXiv:cs/9911004) independently "strongly" and "ultra-strongly" solved Sim by exhaustive computation -- computing optimal play (the game-theoretic value) for all reachable positions, i.e. a full database, which is why this record is classified as STRONG rather than merely weak. Slany also proved the general class of graph Ramsey avoidance games PSPACE-complete. A simpler human-playable winning strategy was given by Wrzos-Kaminska in 2020 (arXiv:2001.04024).
State-space figure 14,348,907 = 3^15 is the TOTAL upper bound on edge labelings (each of the 15 edges is uncolored / first-player-colored / second-player-colored); the number of reachable, non-isomorphic positions is far smaller after symmetry reduction (K6 has a large automorphism group). The "year" field uses 1974 (first established winning strategy / second-player-win determination); the strong/ultra-strong full solution dates to Slany 1999. distance_to_result is bounded by the 15 edges; the game cannot last beyond move 15.
