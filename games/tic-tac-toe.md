<!-- GENERATED from data/games/tic-tac-toe.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Tic-tac-toe

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/tic-tac-toe.yaml)

*Also known as: Noughts and crosses, Xs and Os, Tick-tack-toe, Terni lapilli, (3,3,3)-game.*

Drawn under optimal play by both sides

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Brute-force enumeration, Mathematical proof, Strategy-stealing |
| Year | — |
| Solved by | folklore (no single originator); standard combinatorial-game-theory references — Hales & Jewett, Gardner, Steinhaus |
| Source | [folklore](https://mathworld.wolfram.com/Tic-Tac-Toe.html) |
| Board | 3×3 (m,n,k = 3,3,3) |
| State space | 5,478 |
| Game tree | 255,168 |
| Distance to result | at most 9 plies (the board fills after 9 moves) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| — | standard game | draw | Strong | folklore | [source](https://mathworld.wolfram.com/Tic-Tac-Toe.html) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Tic-Tac-Toe — Wolfram MathWorld (the 3×3 draw + exhaustive counts; primary reference for the result)](https://mathworld.wolfram.com/Tic-Tac-Toe.html)
- [Hales, A. W. & Jewett, R. I. — Regularity and positional games (Trans. AMS, 1963) — foundational positional-game theory & strategy-stealing; NOT the source of the 3×3 draw itself (that is trivial enumeration)](https://www.ams.org/journals/tran/1963-106-02/S0002-9947-1963-0143712-1/)
- [Tic-tac-toe (Wikipedia)](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Game complexity (Wikipedia) — state-space and game-tree figures](https://en.wikipedia.org/wiki/Game_complexity)
- [m,n,k-game (Wikipedia) — (3,3,3) is a draw; strategy-stealing precludes a 2nd-player win](https://en.wikipedia.org/wiki/M,n,k-game)

## Notes

Tic-tac-toe is the canonical "trivially solved" game and the m,n,k-game with (m,n,k) = (3,3,3). Under optimal play it is a draw: the first player cannot force a win and, by the standard strategy-stealing argument, the second player can never have a winning strategy in any m,n,k-game, so the second player can at best draw — which a simple pairing/blocking defense achieves on the 3×3 board. The result counts as STRONG: the game is small enough to enumerate exhaustively, giving an optimal value for every reachable position.
Complexity figures: there are 5,478 reachable legal positions (765 once rotations and reflections are identified; 3^9 = 19,683 is the illegal-inclusive upper bound, and ~138 terminal positions up to symmetry). Counting move sequences, there are 255,168 distinct games (131,184 won by player 1, 77,904 won by player 2, 46,080 drawn); 26,830 games once symmetry is collapsed. state_space here is reachable legal positions; game_tree is total games (move-order distinguished).
ATTRIBUTION: there is no primary "solver" paper. The draw has been known as folklore for millennia — the Roman terni lapilli (1st century BC) and ancient three-in-a-row board games predate any formal proof. The modern combinatorial -game-theory framing rests on Hales & Jewett (1963), who introduced positional -game / Hales–Jewett theory generalizing tic-tac-toe; the (3,3,3)-draw itself is a trivial special case and is not "credited" to them. Steinhaus (Mathematical Snapshots) and Gardner are the usual popular references; both are secondary. year/solved_by are intentionally null/folklore rather than guessed. No new modern solving work is required — it is verifiable by hand or by a few lines of exhaustive search.
