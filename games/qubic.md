<!-- GENERATED from data/games/qubic.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Qubic

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/qubic.yaml)

*Also known as: 4×4×4 Tic-Tac-Toe, 3-D Tic-Tac-Toe, Three-dimensional Tic-Tac-Toe, Parker Brothers Qubic.*

First player wins

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Knowledge-based, Brute-force enumeration, Threat-space search, Proof-number search |
| Year | 1980 |
| Solved by | Oren Patashnik |
| Source | [Patashnik 1980](https://www.jstor.org/stable/2689613) |
| Board | 4×4×4 cube (64 cells, 76 winning lines) |
| State space | 1,000,000,000,000,000,000,000,000,000,000 |
| Game tree | 10,000,000,000,000,000,000,000,000,000,000,000 |
| Distance to result | first player can force a win well before the board fills; Patashnik's strategy needed move choices for 2929 'strategic' positions, the rest finished by forcing-move sequences |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1980 | standard game | first player wins | Weak | Oren Patashnik | [source](https://www.jstor.org/stable/2689613) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Patashnik — "Qubic: 4×4×4 Tic-Tac-Toe", Mathematics Magazine 53(4), pp. 202–216 (Sep. 1980)](https://www.jstor.org/stable/2689613)
- [Patashnik — "Qubic: 4×4×4 Tic-Tac-Toe" (full PDF copy, Mathematics Magazine 1980)](https://ranger.uta.edu/~weems/NOTES6319/PAPERSONE/patashnik.pdf)
- [Allis & Schoo — "Qubic solved again", in Heuristic Programming in AI 3: The Third Computer Olympiad, Ellis Horwood, pp. 192–204 (1992)](https://research.tilburguniversity.edu/en/publications/qubic-solved-again)
- [Allis — "Searching for Solutions in Games and Artificial Intelligence", PhD thesis, Univ. of Limburg (1994)](https://cris.maastrichtuniversity.nl/en/publications/searching-for-solutions-in-games-and-artificial-intelligence/)
- [van den Herik, Uiterwijk & van Rijswijck — "Games solved: Now and in the future", Artificial Intelligence 134, pp. 277–311 (2002) (secondary; complexity table + strength classification)](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [3D tic-tac-toe (Wikipedia) (secondary)](https://en.wikipedia.org/wiki/3D_tic-tac-toe)

## Resources

**Write-ups**

- [Patashnik 1980 paper (PDF)](https://ranger.uta.edu/~weems/NOTES6319/PAPERSONE/patashnik.pdf)

## Notes

Qubic is 3-D tic-tac-toe on a 4×4×4 cube, marketed by Parker Brothers under
that name. A player wins by completing any straight line of four of their own
marks. There are 76 winning lines: 48 parallel to a cube edge, 24 face
diagonals and 4 body diagonals.

Oren Patashnik (Bell Laboratories) published the proof that the first player
can always win in "Qubic: 4×4×4 Tic-Tac-Toe" (Mathematics Magazine 53(4), Sep.
1980), one of the earliest computer-assisted proofs. He combined depth-first
game-tree search with his own expert knowledge for move ordering and
forced-win detection, using about 1500 hours of computer time. The solution is
encoded as move choices for 2929 difficult "strategic" positions, and every
other reachable position is shown to be winnable by a sequence made entirely
of forcing moves. Eugene Mahalko claimed a first-player win earlier, in 1976,
but left it unpublished and gave no verifiable strategy.

In the early 1990s L. V. Allis and P. N. A. Schoo wrote the program QBIG and
re-solved Qubic ("Qubic solved again," 1992; written up most fully in Allis's
1994 PhD thesis). They were at first unaware of Patashnik's result, and kept
going to test two new methods, threat-space search and proof-number search.
They confirmed the first-player win by a completely different route, an
independent second solution.

Both solutions are weak: each is a winning strategy from the empty board, with
no value computed for every reachable position. The survey by van den Herik,
Uiterwijk and van Rijswijck (2002) says Patashnik "weakly solved the game" and
that Allis and Schoo "weakly solved Qubic again."

The same survey, citing Allis (1994), gives a state-space complexity of ~10^30
and a game-tree complexity of ~10^34, both order-of-magnitude estimates. It
notes that Qubic was solvable by both brute-force and knowledge-based methods
because both figures are relatively low.
