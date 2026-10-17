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
| State space | 9,000,000,000,000,000,000 |
| Distance to result | not reported as a single ply count; oracles are given as human-readable proof trees of variations from the start |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2013 | standard game | draw | Weak | Mehdi Mhalla and Frédéric Prost | [source](https://arxiv.org/abs/1307.7118) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Mhalla & Prost, "Gardner's Minichess Variant is solved" (arXiv:1307.7118)](https://arxiv.org/abs/1307.7118)
- [Mhalla & Prost, "Gardner's Minichess Variant is Solved", ICGA Journal vol. 36 no. 4 (2013)](https://content.iospress.com/articles/icga-journal/icg36404)
- [Gardner's Minichess Variant is solved - HAL open archive (hal-00944409)](https://hal.science/hal-00944409)
- [Minichess - Wikipedia (secondary)](https://en.wikipedia.org/wiki/Minichess)

## Resources

**Code**

- <http://membres-lig.imag.fr/prost/MiniChessResolution/>

**Write-ups**

- <http://membres-lig.imag.fr/prost/MiniChessResolution/>

## Notes

Gardner's minichess (Martin Gardner, 1969) is played on a 5x5 board with all the standard chess piece types set on the back rank (from Rook to King) and a full rank of pawns; it is the smallest board that holds every kind of chess piece in the start position. The solved ruleset (per the paper) REMOVES the pawn two-square advance, en passant, and castling — Mhalla & Prost state verbatim "the rules are the ones of classical chess without the two squares move for Pawns, en passant moves and castling." White is the first player.
Mhalla and Prost weakly solved the game in 2013, proving its game-theoretic value is a DRAW: they provide two "oracles" (proof trees of variations), one for White and one for Black, each forcing a draw against best play; the intersection yields flawless games. This is a weak solution (value from the standard start plus a strategy for both sides) — NOT a strong solution. There is no full tablebase mapping every reachable position to its value, so it does not qualify as "strong" despite the modest state space.
Method: a human-guided / semi-automated search using a Stockfish engine adapted to the 5x5 board (restricted movement, changed promotion ranks). The authors "pushed" lines whose exact distance-to-mate could be computed and backtracked from perfect-play leaves — described by the authors as a form of meta-negascout. Method tags above are approximate: closest fits are knowledge-based (human-guided proof-tree construction) and alpha-beta search with engine evaluation/endgame decision (alpha-beta+db); the asymmetric proof-tree construction is conceptually adjacent to proof-number search but the paper does not claim PNS. The proof is small enough to be checked by a human and required only consumer-grade laptops — sharply unlike the Checkers proof (Schaeffer et al. 2007), which used hundreds of computers over a decade despite comparable state-space/decision complexity.
Complexity: ~9 x 10^18 legal positions (reachable/legal positions, the figure the authors cite as comparable to checkers); recorded here as state_space. No game-tree-complexity figure is given (left null). For context the authors note strongly solved smaller variants (Kryukov): ~3 x 10^15 legal positions for the 4x4 chess variant, and 3x3 / 3x4 variants.
As a by-product, the analysis exposed positions where Stockfish's static evaluation is badly fooled (showing +6 "winning" for positions that are dead drawn), some of which also occur on the 8x8 board.
Primary source: arXiv:1307.7118 (also published in the ICGA Journal, vol. 36, no. 4, 2013, and on HAL as hal-00944409). These are the same paper by the same authors, so they count as ONE independent primary result, not three.
