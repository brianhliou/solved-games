<!-- GENERATED from data/games/three-mens-morris.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Three men's morris

[Morris / mill family](../families/morris.md) · [all families](../README.md#families) · [data](../data/games/three-mens-morris.yaml)

*Also known as: Smaller merels, Nine holes, Tapatan, Tant fant, Achi, Alquerque de tres, Tic-tac-toe with movement.*

First player wins with perfect play, and only by opening in the centre: the centre is the unique winning first move; the four corners draw and the four edges lose. With the centre opening banned the game is a draw.

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Retrograde analysis, Brute-force enumeration |
| Year | — |
| Solved by | Classical result (folklore). The first-player centre win is documented by H. J. R. Murray, A History of Board-Games Other Than Chess (1952), and the game is small enough to verify exhaustively. |
| Source | [folklore](https://en.wikipedia.org/wiki/Three_men's_morris) |
| Board | 3×3 grid of 9 points (3 horizontal + 3 vertical + 2 diagonal lines), 3 pieces per side |
| Distance to result | At most 9 plies total; 8 further after the central opening; 7 after the opponent's first reply. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| — | standard game | first player wins | Strong | Classical result | [source](https://en.wikipedia.org/wiki/Three_men's_morris) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Three men's morris (Wikipedia) — a winning strategy for the first player unless barred from the centre](https://en.wikipedia.org/wiki/Three_men's_morris)
- [Three Men's Morris (Cyningstan) — history, rules, and Murray's classification as the 'smaller merels'](http://www.cyningstan.com/game/106/three-mens-morris)
- [Enigmatic Code — Headscratcher #245: a Python solver of the centre line (New Scientist, 2023)](https://enigmaticcode.wordpress.com/2023/10/28/headscratcher-245-three-mens-morris/)

## Resources

**Code**

- [game-solver (the game-solver repository) — an open retrograde solver that reproduces the result and the full opening classification](https://github.com/brianhliou/game-solver)

## Notes

Three men's morris adds movement to three-in-a-row: it is to tic-tac-toe what
nine men's morris is to a placement-only mill game. Each player places three
pieces and then slides them along the lines. A player wins by getting all
three on a line, or by leaving the opponent with no move.

The first player wins, and only by opening in the centre. With the centre
opening banned the game is a draw, which is why most informal rule sets ban
it. With well under 10^4 positions the game can be solved by inspection, so,
like tic-tac-toe, it has a classically known result and no solver to credit.

The win has been folklore for centuries. The board appears in the 1283 Libro
de los juegos and in far older carvings, and Murray (1952) is the classical
reference. The open solver listed under Resources (Tapatan rules) reproduces
the result and the full opening classification: the centre wins, the corners
draw and the edges lose.
