<!-- GENERATED from data/games/hexapawn.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Hexapawn

[Chess & chess variants](../families/chess.md) · [all families](../README.md#families) · [data](../data/games/hexapawn.yaml)

*Also known as: Hexapawn (3x3).*

Black (second player) wins with perfect play

| | |
|---|---|
| Result | Second player wins |
| Strength | Strong |
| Method | Brute-force enumeration, Mathematical proof |
| Year | 1962 |
| Solved by | Martin Gardner |
| Source | [Gardner 1962](https://people.csail.mit.edu/brooks/idocs/GardnerHexapawn.pdf) |
| Board | 3x3 (standard); generalizes to n x m rectangular boards (e.g. 4x4 'octopawn') |
| State space | 19 |
| Distance to result | White is mated in 3 of its own moves; principal variation 1.b2 axb2 2.cxb2 c2 3.a2 c1# (about 5-6 plies) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1962 | standard game | second player wins | Strong | Martin Gardner | [source](https://people.csail.mit.edu/brooks/idocs/GardnerHexapawn.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Martin Gardner, 'Mathematical Games: How to build a game-learning machine and teach it to play and to win', Scientific American, March 1962 (Hexapawn / HER matchbox robot)](https://people.csail.mit.edu/brooks/idocs/GardnerHexapawn.pdf)
- [Hexapawn — Wikipedia](https://en.wikipedia.org/wiki/Hexapawn)

## Notes

Hexapawn was invented by Martin Gardner and introduced in his March 1962 Scientific American "Mathematical Games" column, where he used its tiny game tree to demonstrate a matchbox-and-bead reinforcement-learning machine (the Hexapawn Educable Robot, HER, an analogue of Donald Michie's MENACE for noughts-and-crosses). The headline result is for the standard 3x3 board with three pawns per side: pawns move and capture exactly like chess pawns (one square straight forward, capture one square diagonally forward; no two-square first move, no promotion, no en passant). A player wins by advancing a pawn to the far rank, by capturing all enemy pawns, or by leaving the opponent with no legal move. With perfect play the second player (Black) has a forced win; equivalently the first player (White) loses in 3 of its own moves, e.g. 1.b2 axb2 2.cxb2 c2 3.a2 c1#.
Strength is "strong": the 3x3 game tree is extremely small (Gardner's analysis enumerated it fully, and the learning machine needs only 24 matchboxes; there are about 19 distinct positions that can face the second player), so the result is backed by a complete enumeration with a value known for every reachable position, not merely an ultra-weak/weak existence proof. The state_space figure (19) is the count of distinct non-terminal positions facing player two as commonly cited; total reachable positions including symmetric variants are slightly higher, and a full game-tree node count is not given a single canonical figure in the primary source (left null).
The primary source is Gardner's 1962 column itself, which states the second player's forced win and the construction. Wikipedia is a secondary source that restates the result and the explicit mating line. Note the 4x4 generalization ("octopawn") is a first-player (White) forced win, and larger n x m boards have their own results; those are outside this 3x3 record.
