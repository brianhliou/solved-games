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
| Solved by | folklore (no single originator) |
| Source | [folklore](https://web.archive.org/web/20130628112339/http://www.mathrec.org/old/2002jan/solutions.html) |
| Board | 3×3 (m,n,k = 3,3,3) |
| State space | 5,478 |
| Game tree | 255,168 |
| Distance to result | at most 9 plies (the board fills after 9 moves) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| — | standard game | draw | Strong | folklore | [source](https://web.archive.org/web/20130628112339/http://www.mathrec.org/old/2002jan/solutions.html) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [MathRec — Solutions to Tic-Tac-Toe (reachable positions, completed games and the two symmetry conventions)](https://web.archive.org/web/20130628112339/http://www.mathrec.org/old/2002jan/solutions.html)
- [Tic-Tac-Toe — Wolfram MathWorld (the 3×3 draw + exhaustive counts; primary reference for the result)](https://mathworld.wolfram.com/Tic-Tac-Toe.html)
- [Hales, A. W. & Jewett, R. I. — Regularity and positional games (Trans. AMS, 1963) — foundational positional-game theory & strategy-stealing; NOT the source of the 3×3 draw itself (that is trivial enumeration)](https://www.ams.org/journals/tran/1963-106-02/S0002-9947-1963-0143712-1/)
- [Tic-tac-toe (Wikipedia)](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Game complexity (Wikipedia) — state-space and game-tree figures](https://en.wikipedia.org/wiki/Game_complexity)
- [m,n,k-game (Wikipedia) — (3,3,3) is a draw; strategy-stealing precludes a 2nd-player win](https://en.wikipedia.org/wiki/M,n,k-game)

## Notes

Tic-tac-toe is the m,n,k-game with (m,n,k) = (3,3,3), and the standard example
of a trivially solved game. With best play it is a draw. The first player
cannot force a win, and the strategy-stealing argument shows the second player
never has a winning strategy in any m,n,k-game, so the second player can at
best draw, which a simple pairing or blocking defence achieves on the 3×3
board. The game is small enough to enumerate, which gives a value for every
reachable position: a strong solution, checkable by hand or with a few lines
of exhaustive search.

There are 5,478 reachable legal positions, or 765 once rotations and
reflections are identified; 3^9 = 19,683 is the upper bound that includes
illegal positions, and there are 138 terminal positions up to symmetry.
Counting move sequences gives 255,168 distinct games (131,184 won by player 1,
77,904 by player 2, 46,080 drawn), or 31,896 under whole-game rotations and
reflections. Merging equivalent choices at successive positions gives
26,830 paths, a different equivalence from applying one symmetry to an
entire move sequence.

The draw is classically known; its original solution date is unknown. The
Roman terni lapilli (1st century BC) is a movement-game ancestor; its age
does not establish when the modern draw was known.
