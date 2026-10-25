<!-- GENERATED from data/games/three-musketeers.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Three Musketeers

[Hunt & unequal forces](../families/hunt.md) · [all families](../README.md#families) · [data](../data/games/three-musketeers.yaml)

> **Not yet verified.** This record has not been checked against its primary source, so it is left out of the family tables and counts.

*Also known as: The Three Musketeers.*

Win for the enemy/blue pieces (Cardinal Richelieu's men) with perfect play. The musketeers move FIRST, so the winning enemy side is the SECOND player.

| | |
|---|---|
| Result | Second player wins |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2009 |
| Solved by | Johannes Laire (2009, strong solution by retrograde analysis, announced on rec.games.abstract) |
| Source | [Laire 2009](https://github.com/jlaire/3M) |
| Board | 5x5 square grid, 25 cells. Asymmetric ('unequal forces', Fox-and-Geese style): one player controls 3 musketeers (red/dark), the other controls 22 enemies (blue/light, 'Cardinal Richelieu's men'). Start: musketeers in two opposite corners and the centre; enemies fill the other 22 cells. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2009 | standard game | second player wins | Strong | Johannes Laire | [source](https://github.com/jlaire/3M) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Johannes Laire — 3M solver (retrograde analysis, database-generation instructions and standard-start enemy-win example)](https://github.com/jlaire/3M)
- [Johannes Laire — 'Three Musketeers solved' (rec.games.abstract, Google Groups, 2009) [original announcement of the strong solution]](https://groups.google.com/d/topic/rec.games.abstract/glKFUv2rEfY)
- [Ali Elabridi — Weakly Solving the Three Musketeers Game Using Artificial Intelligence and Game Theory (Capstone Project, Al Akhawayn University, Fall 2017) [conflicting, unvalidated weak-solve claim; PDF]](https://cdn.aui.ma/sse-capstone-repository/pdf/fall2017/WEAKLY%20SOLVING%20THE%20THREE%20MUSKETEERS%20GAME%20USING%20ARTIFICIAL%20INTELLIGENCE%20AND%20GAME%20THEORY%20Ali%20Elabridi.pdf)
- [alielabridi — Weakly-Solving-Three-Musketeers-Game (source code, GitHub)](https://github.com/alielabridi/Weakly-Solving-Three-Musketeers-Game)
- [Three Musketeers (game) — Wikipedia (secondary; states strong solve by Laire 2009, weak solve by Elabridi 2017, win for blue/enemy)](https://en.wikipedia.org/wiki/Three_Musketeers_(game))
- [Solved game — Wikipedia, list of solved games (secondary; 'Strongly solved by Johannes Laire in 2009, and weakly solved by Ali Elabridi in 2017. It is a win for the blue pieces')](https://en.wikipedia.org/wiki/Solved_game)
- [Three Musketeers — BoardGameGeek (secondary; rules and provenance)](https://boardgamegeek.com/boardgame/21861/three-musketeers)

## Notes

Three Musketeers is an asymmetric game of "unequal forces" in the
Fox-and-Geese family, designed by Haar Hoolim and popularised in Sid Sackson's
1969 book A Gamut of Games. It is played on a 5x5 board, 3 musketeers against
22 enemies. The musketeers move first and capture by stepping orthogonally
onto an adjacent enemy, removing it. An enemy piece moves to any orthogonally
adjacent empty cell and never captures. The enemy wins by forcing all three
musketeers onto a single row or column, and the musketeers win if, on their
turn, they have no legal move (no adjacent enemy to capture) while not
aligned.

Johannes Laire solved the game strongly in 2009, announced on the
rec.games.abstract newsgroup. His retrograde analysis built a database that
assigns a value to every reachable position and lets a program play optimally
from any state. The standard start is a win for the enemy (blue, Cardinal
Richelieu's men), who move second. This fits the game's long-documented
imbalance in the enemy's favour, and Laire noted that changing only the
starting position makes the game roughly even.

Ali Elabridi (Al Akhawayn University, Fall 2017 capstone) claimed a weak
solution with minimax search and alpha-beta pruning, aiming to confirm
Laire's result. His reported Musketeers win conflicts with Laire's enemy win
and remains unvalidated. His minimizing search returns immediately on a
Musketeers utility of +1, which can skip enemy refutations. The available
evidence does not establish that the contradiction is only a labelling error.

Laire's announcement is a newsgroup post with no peer-reviewed paper. His
solver survives in the public 3M repository, with instructions to generate
the database from source and a standard-start example showing an enemy win.
A precomputed database is not included. This catalog has not independently
regenerated it.
