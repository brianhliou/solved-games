<!-- GENERATED from data/games/morabaraba.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Morabaraba

[Morris / mill family](../families/morris.md) · [all families](../README.md#families) · [data](../data/games/morabaraba.yaml)

*Also known as: Twelve Men's Morris, Mlabalaba, Umlabalaba, Morabaraba (South African Morris).*

First-player win — the standard starting position is a win for the player to move first, with a game-theoretic value of win in 49 (moves). Most starting positions in which both players place an equal number of stones (including the standard one) are first-player wins, in contrast to Nine Men's Morris and Lasker Morris, which are draws.

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2015 |
| Solved by | Gábor E. Gévay (Eötvös Loránd University) & Gábor Danner (University of Szeged); arXiv:1408.0032 (2014), published IEEE Trans. on Computational Intelligence and AI in Games, 2016 |
| Source | [Gévay 2015](https://arxiv.org/abs/1408.0032) |
| Board | Nine Men's Morris board with the four diagonal lines added (24 points / intersections, all corners of the three nested squares connected by diagonals); 12 men per player |
| State space | 112,000,000,000 |
| Distance to result | Win in 49 (the game-theoretic value of the standard starting position, expressed as moves-to-win in the depth-to-win database) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2015 | standard game | first player wins | Strong | Gábor E. Gévay | [source](https://arxiv.org/abs/1408.0032) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Malom](../pages/engines.md#engine-malom) (solver): perfect play, [source](https://arxiv.org/abs/1408.0032)

## References

- [Gévay & Danner, "Calculating Ultra-Strong and Extended Solutions for Nine Men's Morris, Morabaraba, and Lasker Morris," IEEE Trans. CIAIG (DOI 10.1109/TCIAIG.2015.2420191); arXiv:1408.0032 (2014)](https://arxiv.org/abs/1408.0032)
- [Malom / Mills game solutions (Gábor Danner & Gábor E. Gévay) — Morabaraba ultra-strong database, project page](https://www.inf.u-szeged.hu/~danner/mills)
- [Morabaraba (Wikipedia)](https://en.wikipedia.org/wiki/Morabaraba)

## Resources

**Tablebases**

- [Ultra-strong solution databases for Nine Men's Morris, Morabaraba, and Lasker Morris (Gévay & Danner) — Morabaraba DB 41 GB compressed / 324 GB uncompressed](https://www.inf.u-szeged.hu/~danner/mills)

## Notes

Morabaraba is the southern-African form of Twelve Men's Morris. It is played
on the Nine Men's Morris board with the four diagonal lines added, which
connect each corner of the three nested squares through to the centre cross,
and each player places 12 stones ("cows") where Nine Men's Morris has 9.
Standard rules include flying: a player reduced to three stones may move a
stone to any empty point, not only along the lines.

Gábor E. Gévay and Gábor Danner solved the game strongly with a multi-valued
retrograde analysis over a partitioned state space, producing a complete
depth-to-win database with a value for every reachable position. The standard
start is a win in 49 for the first player, in contrast to Nine Men's Morris
(Gasser 1996) and Lasker Morris (Stahlhacke 2003), both draws, which the same
paper also re-solves. They report that most starting positions in which both
players place an equal number of stones, the standard one included, are
first-player wins: the extra diagonals make the game sharper and the first
move decisive.

The state space is roughly four times that of Nine Men's Morris: about 112
billion states in the standard solution database (their Table I), and about
284 billion across the solutions for other stone counts. The computation took
on the order of days on a single machine (about 3.2 GHz, 20 GB RAM).

The authors also computed an ultra-strong solution, which subclassifies drawn
and won positions to do better in practice against a fallible opponent. That
database is available for download (about 41 GB compressed, 324 GB
uncompressed).
