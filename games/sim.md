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

Gustavus J. Simmons invented Sim in 1969 (Journal of Recreational Mathematics,
vol. 2, p. 66). It is played on the complete graph K6: two players take turns
colouring its 15 edges, each in their own colour, and whoever first completes
a triangle in their own colour loses. The Ramsey number R(3,3) = 6 means every
2-colouring of K6 contains a one-colour triangle, so one player is always
forced to make one and the game cannot be drawn. It is also called the R(3,3)
avoidance game, and the "Hales-Jewett game" after the founders of
positional-game theory, of which Sim is a classic example.

The second player wins. Mead, Rosa and Huang published the first explicit
winning strategy a person can follow in 1974 (Mathematics Magazine
47(5):243-247), backed by computer search, and noted that a simpler strategy
that is easier to memorize was still wanted. Wrzos-Kaminska gave one in 2020
(arXiv:2001.04024).

Wolfgang Slany's 1999 report "Graph Ramsey Games" (arXiv:cs/9911004) solved
Sim independently by exhaustive computation, finding optimal play for every
reachable position, which makes the solution strong (Slany calls it strong and
ultra-strong). He also proved the general class of graph Ramsey avoidance
games PSPACE-complete.

The state-space figure of 14,348,907 is 3^15, the number of ways to label the
15 edges as uncoloured or coloured by one player or the other. K6 has a large
automorphism group, so the number of reachable positions that differ up to
symmetry is far smaller.
