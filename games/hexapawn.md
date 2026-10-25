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

Martin Gardner invented Hexapawn for his March 1962 "Mathematical Games"
column in Scientific American. He used its tiny game tree to demonstrate a
learning machine built from matchboxes and beads, the Hexapawn Educable Robot
(HER), modelled on Donald Michie's MENACE for noughts and crosses.

The standard game is played on a 3x3 board with three pawns a side. Pawns move
and capture as in chess (one square straight forward, capturing one square
diagonally forward), with no two-square first move, no promotion and no en
passant. A player wins by reaching the far rank, by capturing every enemy
pawn, or by leaving the opponent with no legal move. With perfect play Black,
the second player, wins: White loses in 3 of its own moves, for example 1.b2
axb2 2.cxb2 c2 3.a2 c1#.

The game is small enough that Gardner enumerated it completely, so the value
of every reachable position is known and the solution is strong. The learning
machine needs only 24 matchboxes, and about 19 distinct positions can face the
second player.

The 4x4 version, octopawn, is a forced win for the first player (White), and
larger n x m boards have their own results, which this record does not cover.
