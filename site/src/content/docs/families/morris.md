---
title: "Morris: the mill family"
description: The morris (mill) games, from trivial three men's up to the ~10^11-position Lasker and Morabaraba. All five are strongly solved.
---

The morris, or *mill*, family is a line of placement-and-movement games: each
player places stones, then slides them along the board's lines; completing a
**mill** (three in a row) lets you capture an opponent's stone, and you lose
when reduced below three men or left without a legal move. The family scales from
a trivial 9-point board up to the 24-point boards of nine men's, Lasker, and
Morabaraba, whose solution databases run to ~10¹¹ positions.

A clean pattern runs through it: the **diagonal-free** morrises (six men's,
nine men's, Lasker) are all **draws** under perfect play; **adding diagonal
mills** (Morabaraba, the twelve men's morris) tips the game to a **first-player
win**. The tiny three men's board, which has diagonals, is also a first-player
win.

## The family

| Game | Men | Board | Positions | Result | Solved by |
|------|----:|-------|----------:|--------|-----------|
| [Three men's morris](/games/morris/three-mens-morris/) | 3 | 9 pts (diagonals) | trivial | First player wins | folklore (Murray, 1952) |
| [Six men's morris](/games/morris/six-mens-morris/) | 6 | 16 pts | 42,372,745 | Draw | Liou (2026) |
| [Nine Men's Morris](/games/morris/nine-mens-morris/) | 9 | 24 pts | 7,673,759,269 | Draw | Gasser (1993); Gévay & Danner (2014) |
| [Lasker Morris](/games/morris/lasker-morris/) | 10 | 24 pts | 136,476,472,674 | Draw | Stahlhacke (2003) |
| [Morabaraba](/games/morris/morabaraba/) | 12 | 24 pts + diagonals | ~112,000,000,000 | First player wins | Gévay & Danner (2014) |

All five are **strongly** solved. The counts are not one quantity: six men's is
the reachable positions of this solve, nine men's the midgame and endgame
states Gasser's databases hold, and Lasker's and Morabaraba's the solvers'
indexed database entries, which include unreachable positions. Gasser solved
nine men's moving phase and proved the starting draw in 1993; Gévay and Danner
completed the strong solution in 2014.

## Play the solver

The explorer plays **four, five, or six men's morris** on the 16-point board
(switch with the toggle) from a precomputed perfect-play tablebase. Every move is labelled win, loss, or draw under perfect
play.

<iframe src="https://tablebase.brianhliou.com/" title="Morris perfect-play tablebase explorer" loading="lazy"></iframe>

## More

- [Six men's morris data sheet](/games/morris/six-mens-morris/): result, method, validation, prior art.
