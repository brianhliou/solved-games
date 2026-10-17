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

Fanorona is the national board game of Madagascar, derived from Alquerque. The ruleset solved is the most common variant of Fanoron-Tsivy, played on a 5x9 grid of intersections (5 rows, 9 columns) with 22 pieces per side; White (the first player) moves first and the goal is to capture all opposing pieces, with a draw if neither side can. The 5x9 game was WEAKLY solved (not strongly): a combination of PN2 proof-number search and pre-computed endgame databases proved the game-theoretic value of the initial position is a DRAW. Retrograde analysis generated databases solving every position with 7 or fewer pieces. Proving the draw created 130,820,097,938 nodes and took more than a week on an AMD Opteron 2.6 GHz with 32 GB RAM (verified by independent forward / alpha-beta search and database consistency checks). The paper reports state-space complexity ~10^21 and game-tree complexity ~10^46 (some secondary write-ups cite ~10^40); complexity is comparable to checkers. The authors note the result is for the initial position only and that two of the five opening moves (f2-e3A, d3-e3A) were proved to draw, e2-e3A appears to lose for White (win for Black), and the remaining two openings were undetermined — so this is a weak, not strong, solution. All smaller boards were also solved (Table 4): every board with a side of length 3 (3x3, 3x5, 5x3, 3x7, 7x3, 3x9, 9x3) is a White win; 5x5 is a draw; 5x7 is a Black (second-player) win; 7x5 is a White win; 5x9 (full Fanorona) is a draw. The two cited publications (2007 ICGA Journal note and the 2008 journal article) are by the same Maastricht research group and report the same result, so they are one independent primary line, not two. Wikipedia is the secondary corroborator. The 3x3 (Fanoron-Telo) and 5x5 (Fanoron-Dimy) are the named smaller standard versions; Fanoron-Tsivy is the 5x9 headline game.
