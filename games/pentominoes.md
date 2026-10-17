<!-- GENERATED from data/games/pentominoes.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Pentominoes (two-player)

[Combinatorial game theory](../families/cgt.md) · [all families](../README.md#families) · [data](../data/games/pentominoes.yaml)

*Also known as: Pentominoes (Golomb), Golomb's Pentominoes game, Competitive Pentominoes.*

First player wins with perfect play (the player who cannot move loses).

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Brute-force enumeration, Alpha-beta + DB |
| Year | 1996 |
| Solved by | Hilarie K. Orman |
| Source | [Orman 1996](https://library.slmath.org/books/Book29/files/orman.pdf) |
| Board | 8×8 board, 12 distinct (free) pentomino pieces |
| State space | 1,000,000,000,000 |
| Game tree | 1,000,000,000,000,000,000 |
| Distance to result | A typical game lasts ~10 plies; the minimum is 5 placements and the maximum is 12 (a full pack of all twelve pentominoes). No single principal-variation length is published; the forced win is established from the start position, not as a per-position ply count. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1996 | standard game | first player wins | Weak | Hilarie K. Orman | [source](https://library.slmath.org/books/Book29/files/orman.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Orman — "Pentominoes: A First Player Win", in Games of No Chance (R. J. Nowakowski, ed.), MSRI Publications 29, pp. 339–344 (Cambridge Univ. Press, 1996)](https://library.slmath.org/books/Book29/files/orman.pdf)
- [Orman — "Pentominoes: A First Player Win" (Cambridge Core book-chapter record, Games of No Chance)](https://www.cambridge.org/core/books/abs/games-of-no-chance/pentominoes-a-first-player-win/6A28F05FD8B9AE9AFE650BE1ED78B3D1)
- [van den Herik, Uiterwijk & van Rijswijck — "Games solved: Now and in the future", Artificial Intelligence 134, pp. 277–311 (2002) (secondary; classifies as weakly solved, gives complexity estimates)](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [Solved game — Wikipedia (secondary; lists Pentominoes as weakly solved first-player win by Orman)](https://en.wikipedia.org/wiki/Solved_game)

## Resources

**Write-ups**

- [Orman 1996 paper (full PDF, MSRI / SLMath)](https://library.slmath.org/books/Book29/files/orman.pdf)

## Notes

This is the TWO-PLAYER competitive Pentominoes placement game, NOT the one-player solitaire tiling puzzle (fitting all twelve pentominoes into a rectangle). The game was proposed by Solomon W. Golomb in the mid-1950s and popularized by Martin Gardner (1959). Two players alternately choose one of the twelve free pentomino pieces and place it on an 8×8 board; pieces may not overlap or extend past the boundary and need not be adjacent. It is a normal-play game: the player who cannot make a (legal) move loses — i.e. the last player to place a piece wins. The smallest possible game is 5 placements, the largest is 12 (the whole pack), and a typical game is about 10 plies.
PRIMARY SOURCE: Hilarie K. Orman, "Pentominoes: A First Player Win", in Games of No Chance, MSRI Publications vol. 29, Cambridge University Press, 1996, pp. 339–344. Orman reports a search-based computer proof that the game is a first-player win. The solving program is written in C and uses a simple depth-first backtracking (boolean win/loss) search with bit-vector board and move representation; on the 64-bit DEC Alpha a move test takes a single instruction. Moves were ordered by number of available replies (one-ply lookahead) for the first few plies to accelerate the search. From the empty board there are 2308 possible first moves (296 once symmetry is removed). Orman exhaustively examined the subtrees of two specific opening moves: the most restrictive opening (long "L", 1181 replies) turned out to be a SECOND-player win — exactly two of the 1181 replies refute it (the straight piece being key) — while a second, slightly less restrictive opening (1197 replies, Figure 3) is a first-player WIN. A third winning opening (suggested by Golomb, dividing the board nearly symmetrically) also survived checking. Overall the solving program examined about 22 billion board positions; the winning move took roughly two weeks on a 175 MHz 64-bit DEC Alpha (earlier work on the losing move ran ~two months across an Intel Paragon, six HP 720s and four DEC Alpha machines).
INDEPENDENT VERIFICATION: Richard Schroeppel wrote a completely separate checking program using a different (fixed piece-then-location) search order; it re-confirmed the first-player win for the Figure-3 opening, running about five days on a Sun IPC SparcStation, and notably examined FEWER positions than the solving program. This is an independent verification of the same result rather than a separate solving effort; counted here as one independent primary result (the Orman paper), independently checked.
STRENGTH = WEAK, not strong. Orman established a winning strategy for the first player from the standard start (via specific winning opening moves) — she did NOT compute a game-theoretic value for every reachable position (no full tablebase). The authoritative survey van den Herik, Uiterwijk & van Rijswijck, "Games solved: Now and in the future", Artificial Intelligence 134 (2002), 277–311, explicitly states the two-player Pentominoes game "has been weakly solved by Orman" and notes that determining how many of all opening moves are first-player wins (i.e. the full advantage) still remains to be done. Orman herself frames the open problems the same way.
COMPLEXITY: the AI-134 survey estimates, for Pentominoes, a game-tree complexity of O(10^18) and a state-space complexity of O(10^12), derived from an average game length of 10 and an average branching factor of 75 (the branching figure attributed to Orman). These are order-of-magnitude estimates, not exact reachable-vs-total counts; the state_space (10^12) and game_tree (10^18) fields store those magnitudes written out as integers. The survey places Pentominoes in solution category 2 (state-space complexity much smaller than game-tree complexity) and notes it was solvable by brute-force methods.
ATTRIBUTION/YEAR: headline year 1996 = the Games of No Chance publication; the underlying search work was carried out in the early-to-mid 1990s on then-current workstations (Orman first attempted a solution as far back as 1975 on a PDP-11/45, when it was infeasible). Solver = Hilarie K. Orman. Orman closes by posing the analogous but far harder open problem of solving the 35-hexomino game on a 15×15 board.
