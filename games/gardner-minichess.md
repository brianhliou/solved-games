<!-- GENERATED from data/games/gardner-minichess.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Gardner minichess

[Chess & chess variants](../families/chess.md) · [all families](../README.md#families) · [data](../data/games/gardner-minichess.yaml)

*Also known as: Gardner's Chess, Gardner's Minichess Variant, Minichess (5x5, Gardner setup).*

Draw with best play; both White and Black can force a draw

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Knowledge-based, Alpha-beta + DB, Proof-number search |
| Year | 2013 |
| Solved by | Mehdi Mhalla and Frédéric Prost |
| Source | [Mhalla et al. 2013](https://arxiv.org/abs/1307.7118) |
| Board | 5x5 (smallest board holding all standard chess piece types on the back rank) |
| State space | ≈ 9 × 10¹⁸ |
| Distance to result | not reported as a single ply count; oracles are given as human-readable proof trees of variations from the start |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2013 | standard game | draw | Weak | Mehdi Mhalla and Frédéric Prost | [source](https://arxiv.org/abs/1307.7118) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Fairy-Stockfish](../engines/fairy-stockfish.md) (engine): competition result, [source](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results)
- [Gardnerfish](../engines/gardnerfish.md) (engine): self-reported, [source](https://arxiv.org/html/1307.7118)

## References

- [Mhalla & Prost, "Gardner's Minichess Variant is solved" (arXiv:1307.7118)](https://arxiv.org/abs/1307.7118)
- [Mhalla & Prost, "Gardner's Minichess Variant is Solved", ICGA Journal vol. 36 no. 4 (2013)](https://content.iospress.com/articles/icga-journal/icg36404)
- [Gardner's Minichess Variant is solved - HAL open archive (hal-00944409)](https://hal.science/hal-00944409)
- [Minichess - Wikipedia (secondary)](https://en.wikipedia.org/wiki/Minichess)
- [Martin Gardner, A Matchbox Game-Learning Machine (collected chapter)](https://gwern.net/doc/reinforcement-learning/model-free/1991-gardner-ch8amatchboxgamelearningmachine.pdf)
- [Gardner index, March 1962 column and later book chapter](https://peterrowlett.net/gardner-index/1962-Mar.html)
- [Kirill Kryukov, 4x4 Chess (legal-position domain and tablebase coverage)](https://kirill-kryukov.com/chess/4x4-chess/)

## Resources

**Code**

- <http://membres-lig.imag.fr/prost/MiniChessResolution/>

**Write-ups**

- <http://membres-lig.imag.fr/prost/MiniChessResolution/>

## Notes

Martin Gardner presented this minichess variant in 1962; the column was
collected in his 1969 book. It is played on a 5x5 board with all
the standard chess piece types on the back rank (from Rook to King) and a full
rank of pawns. It is the smallest board that holds every kind of chess piece
in the start position. White moves first. The solved ruleset drops the pawn
two-square advance, en passant and castling; in Mhalla and Prost's words, "the
rules are the ones of classical chess without the two squares move for Pawns,
en passant moves and castling."

Mehdi Mhalla and Frédéric Prost weakly solved the game in 2013 and found it a
draw. They give two "oracles," proof trees of variations, one for White and
one for Black, each forcing a draw against best play; where the two meet are
the flawless games. No tablebase maps every reachable position to its value,
so the solution is weak despite the modest state space.

The search was human-guided and semi-automated, using a Stockfish engine
adapted to the 5x5 board (restricted movement, changed promotion ranks). The
authors "pushed" lines whose exact distance-to-mate could be computed and
backtracked from perfect-play leaves, which they describe as a form of
meta-negascout. The proof is small enough for a human to check and needed only
consumer-grade laptops. The checkers proof (Schaeffer et al., 2007), with
comparable state-space and decision complexity, used hundreds of computers
over a decade.

The game has an estimated ~9 x 10^18 legal positions, a figure the authors
cite as comparable to checkers; no game-tree size is given. Kryukov strongly
solved the 3x3 and 3x4 variants. For 4x4 chess, the 2013 paper cites solved
positions with at most nine pieces. Its estimate of ~3 x 10^15 legal
positions refers to the full domain, beyond that solved material subset.

As a by-product, the analysis exposed positions where Stockfish's static
evaluation is badly fooled, showing +6 "winning" for positions that are dead
drawn. Some of these also occur on the 8x8 board.
