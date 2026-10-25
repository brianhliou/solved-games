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
| Year | 1994 |
| Solved by | Hilarie K. Orman |
| Source | [Orman 1994](https://library.slmath.org/books/Book29/files/orman.pdf) |
| Board | 8×8 board, 12 distinct (free) pentomino pieces |
| State space | 1,000,000,000,000 |
| Game tree | 10¹⁸ |
| Distance to result | A typical game lasts ~10 plies; the minimum is 5 placements and the maximum is 12 (a full pack of all twelve pentominoes). No single principal-variation length is published; the forced win is established from the start position, not as a per-position ply count. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1994 | standard game | first player wins | Weak | Hilarie K. Orman | [source](https://library.slmath.org/books/Book29/files/orman.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Orman — "Pentominoes: A First Player Win", in Games of No Chance (R. J. Nowakowski, ed.), MSRI Publications 29, pp. 339–344 (Cambridge Univ. Press, 1996)](https://library.slmath.org/books/Book29/files/orman.pdf)
- [Orman — "Pentominoes: A First Player Win" (Cambridge Core book-chapter record, Games of No Chance)](https://www.cambridge.org/core/books/abs/games-of-no-chance/pentominoes-a-first-player-win/6A28F05FD8B9AE9AFE650BE1ED78B3D1)
- [Golomb, Polyominoes, p. 9 (dates Orman's solution to 1994)](https://www.degruyterbrill.com/document/doi/10.1515/9780691215051-002/pdf?licenseType=free)
- [van den Herik, Uiterwijk & van Rijswijck — "Games solved: Now and in the future", Artificial Intelligence 134, pp. 277–311 (2002) (secondary; classifies as weakly solved, gives complexity estimates)](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [Solved game — Wikipedia (secondary; lists Pentominoes as weakly solved first-player win by Orman)](https://en.wikipedia.org/wiki/Solved_game)

## Resources

**Write-ups**

- [Orman 1996 paper (full PDF, MSRI / SLMath)](https://library.slmath.org/books/Book29/files/orman.pdf)

## Notes

This is the two-player Pentominoes placement game, distinct from the
one-player puzzle of tiling a rectangle with all twelve pentominoes. Solomon
W. Golomb proposed it in the mid-1950s and Martin Gardner popularized it
(1959). Two players take turns choosing one of the twelve free pentomino
pieces and placing it on an 8×8 board; pieces may not overlap or extend past
the edge and need not touch. The player who cannot make a legal move loses, so
the last player to place a piece wins. The shortest possible game is 5
placements and the longest 12 (the whole pack), and a typical game is about 10
plies.

Hilarie K. Orman proved the game a first-player win by computer search in
1994, published in "Pentominoes: A First Player Win" in Games of No Chance
(Cambridge University Press, 1996). Her C program uses a simple depth-first
backtracking search over boolean win/loss values, with bit-vector board and
move representations; on the 64-bit DEC Alpha a move test takes a single
instruction. For the first few plies, moves were ordered by how many replies
they allow (one-ply lookahead) to speed the search.

From the empty board there are 2308 possible first moves, 296 once symmetry is
removed. Orman searched the subtrees of two openings exhaustively. The most
restrictive opening, the long "L" with 1181 replies, turned out to be a
second-player win: exactly two of the 1181 replies refute it, with the
straight piece the key. A slightly less restrictive opening with 1197 replies
(Figure 3 in the paper) is a first-player win. Another winning opening,
suggested by Golomb, divides the board nearly symmetrically and also survived
checking.

The solving program examined about 22 billion board positions in all. The
winning move took roughly two weeks on a 175 MHz 64-bit DEC Alpha, and earlier
work on the losing move ran ~two months across an Intel Paragon, six HP 720s
and four DEC Alpha machines. Orman had first tried in 1975 on a PDP-11/45,
when the search was infeasible; the solving work itself was done in the
early-to-mid 1990s.

Richard Schroeppel wrote a separate checking program with a different search
order (fix the piece, then the location). It re-confirmed the first-player win
for the Figure 3 opening in about five days on a Sun IPC SparcStation, and
examined fewer positions than the solving program.

The solution is weak: Orman found a winning strategy for the first player from
the start, through specific winning openings, and computed no value for every
reachable position. The survey by van den Herik, Uiterwijk and van Rijswijck
("Games solved: Now and in the future," Artificial Intelligence 134, 2002,
277–311) says the game "has been weakly solved by Orman," and notes that
finding how many opening moves are first-player wins remains to be done; Orman
frames the open problems the same way.

The same survey estimates a game-tree complexity of O(10^18) and a state-space
complexity of O(10^12) for reachable positions, from an average game length
of 10 and an average branching factor of 75 (attributed to Orman), and notes
the game was solvable by brute force. Orman closes by posing a far harder open
problem: the 35-hexomino game on a 15×15 board.
