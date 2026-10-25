<!-- GENERATED from data/games/fanorona.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Fanorona

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/fanorona.yaml)

*Also known as: Fanoron-Tsivy.*

Draw under optimal play from the standard starting position (White moves first)

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Proof-number search, Retrograde analysis, Alpha-beta + DB |
| Year | 2007 |
| Solved by | Maarten P. D. Schadd, Mark H. M. Winands, Jos W. H. M. Uiterwijk, H. Jaap van den Herik, Maurice H. J. Bergsma (MICC-IKAT Games and AI Group, Universiteit Maastricht) |
| Source | [Schadd et al. 2007](https://dke.maastrichtuniversity.nl/m.winands/documents/Fanorona.pdf) |
| Board | 5x9 (Fanoron-Tsivy), 45 intersections of lines; 22 pieces per side at start |
| State space | 1,000,000,000,000,000,000,000 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007 | standard game | draw | Weak | Maarten P. D. Schadd, Mark H. M. Winands, Jos W. H. M. Uiterwijk, H. Jaap van den Herik, Maurice H. J. Bergsma | [source](https://dke.maastrichtuniversity.nl/m.winands/documents/Fanorona.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [M.P.D. Schadd, M.H.M. Winands, J.W.H.M. Uiterwijk, H.J. van den Herik, M.H.J. Bergsma — Best Play in Fanorona Leads to Draw (New Mathematics and Natural Computation, 2008)](https://dke.maastrichtuniversity.nl/m.winands/documents/Fanorona.pdf)
- [M.P.D. Schadd et al. — Fanorona is a Draw (ICGA Journal, Vol. 30, No. 1, pp. 43-44, March 2007) [original announcement of the result]](https://dblp.org/db/journals/icga/icga30.html)
- [Fanorona — Wikipedia](https://en.wikipedia.org/wiki/Fanorona)

## Notes

Fanorona is the national board game of Madagascar, derived from Alquerque. The
solved rule set is the most common variant, Fanoron-Tsivy: a 5x9 grid of
intersections (5 rows, 9 columns) with 22 pieces a side. White moves first,
the goal is to capture every opposing piece, and the game is drawn if neither
side can.

The solution is weak. PN2 proof-number search, backed by retrograde endgame
databases that solve every position with 7 or fewer pieces, proved that the
initial position is a draw. The proof created 130,820,097,938 nodes and took
more than a week on an AMD Opteron 2.6 GHz with 32 GB of RAM, and it was
checked by an independent forward alpha-beta search and by database
consistency checks. The paper puts the state space at about 10^21 and the game
tree at about 10^46, comparable to checkers.

The authors note that the result covers the initial position only. Of the five
opening moves, two (f2-e3A and d3-e3A) were proved draws, e2-e3A appears to
lose for White, and the remaining two were left undetermined.

The paper (Table 4) also solves every smaller board. Each board with a side of
length 3 (3x3, 3x5, 5x3, 3x7, 7x3, 3x9, 9x3) is a White win, 5x5 is a draw,
5x7 is a Black (second-player) win and 7x5 is a White win. The named smaller
versions are Fanoron-Telo (3x3) and Fanoron-Dimy (5x5).
