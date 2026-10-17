<!-- GENERATED from data/games/quarto.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Quarto!

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/quarto.yaml)

*Also known as: Quarto.*

Both players can force a draw with perfect play; like tic-tac-toe, perfect play always draws. The deepest forced win against imperfect play occurs at level 4+1 (5th piece placed, 6th piece gifted).

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Alpha-beta + DB, Retrograde analysis, Brute-force enumeration, Strategy-stealing |
| Year | 2023 |
| Solved by | Luc Goossens (weak solve, 1998; independently corroborated 2026) and Cameron Cheung / GamesCrafters, UC Berkeley (strong solve / full tablebase, 2023) |
| Source | [Goossens 2023](https://doi.org/10.5281/zenodo.20425801) |
| Board | 4×4 board, 16 distinct pieces (each a unique combination of 4 binary attributes; standard line-win ruleset — rows, columns, two diagonals) |
| State space | 11,000,000,000,000,000 |
| Game tree | 438,000,000,000,000,000,000,000,000 |
| Distance to result | Game value (draw) holds from the start (0+1). Deepest non-trivial forced win is at level 4+1; no non-trivial win exists above level 4+1 (i.e. from level 2+1 onward it does not matter what you play, and from 3+1 it suffices to look for a draw). |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2023 | standard game | draw | Strong | Luc Goossens | [source](https://doi.org/10.5281/zenodo.20425801) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Luc Goossens, "Solving Quarto! (again)," Zenodo, May 2026 (DOI 10.5281/zenodo.20425801) — second fully independent solve corroborating the 1998 result](https://doi.org/10.5281/zenodo.20425801)
- [Robert Shi, "Parallel Solving of Two-Player Tierable Abstract Strategy Games," UC Berkeley EECS Tech Report EECS-2024-87 (documents Cameron Cheung / GamesCrafters strong solve of Quarto, 2023)](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2024/EECS-2024-87.pdf)
- [Luc Goossens, "Quarto (strategy)," Vrije Universiteit Brussel, 2000 (original 1998 solve writeup; original site removed, Wayback archive)](https://web.archive.org/web/20041012023358/http://ssel.vub.ac.be/Members/LucGoossens/quarto/quartotext.htm)
- [M. Kerner & D. Angluin, "An exploration of Gameplay in Quarto," 2001 (independent symmetry/configuration analysis; cites Goossens for the draw result)](https://www.slideshare.net/MatthewKerner2/quarto-55043713)
- [Quarto (board game) — Wikipedia](https://en.wikipedia.org/wiki/Quarto_(board_game))

## Resources

**Tablebases**

- [GamesmanUni — Quarto (playable strong-solve interface, GamesCrafters)](https://gamescrafters.berkeley.edu/games.php?game=quarto)

**Write-ups**

- [Steven Morse, "Quarto, Part 1 (Theory)" (independent explainer)](https://stmorse.github.io/journal/quarto-part1.html)

## Notes

Quarto! (designed by Blaise Müller, ~1985) is, in Goossens' framing, a generalised 4×4 variation of tic-tac-toe with the signature twist that you do NOT choose your own piece — your opponent hands you the piece you must place, then you hand them theirs. These records cover the STANDARD ruleset (a winning "quarto" is four-in-a-line sharing any one of the four binary attributes, on a row, column, or one of the two diagonals). The popular ADVANCED variant that also counts four matching pieces in any 2×2 square is a DIFFERENT game and is NOT covered here; its game value is not established in these sources.
Two layers of solve exist and both return the same value — DRAW:
(1) WEAK solve — Luc Goossens. In summer 1998 Goossens solved the game by alpha-beta search plus exhaustive symmetry reduction, establishing the value (draw) from the start and that the deepest forced win is at level 4+1; the original web writeup [Wayback link above] was later removed and the result, though widely cited (Wikipedia), was never independently corroborated until Goossens himself re-solved it in 2026 with three completely independent C solvers (one hand-coded; two generated respectively by Anthropic's Claude and Google's Gemini 3.1 Pro), all reporting identical results. The 2026 paper exploits the game's full symmetry group: each board has up to 32·16·24 = 12,288 equivalents (32 board transforms × 16 attribute-inversions × 24 attribute-permutations), reducing the naive (16!)² ≈ 4.38×10^26 game tree to a feasible brute-force depth-first evaluation. Checking all 148 unique 2+1 configurations (all draws) proves both players can force a draw; all 3382 unique 3+1 configurations are draws or trivial wins, so there are no non-trivial wins above level 4+1. Of 91,746 unique 4+1 configurations, 2,959 are non-trivial wins (~3%). Symmetry counts match Kerner & Angluin 2001 for 2+1/3+1; their 4+1 count of 91,558 differs from Goossens' 91,746 by exactly the 188 configurations already forming a quarto with the four pieces placed.
(2) STRONG solve — Cameron Cheung / GamesCrafters (UC Berkeley), 2023. Under Dan Garcia's GAMESMAN architecture, Quarto was strongly solved as a full tablebase (a game value for every reachable position) via tier-based retrograde analysis, running 3.51 days on a single 12-core CPU. Documented in Shi's 2024 EECS tech report, which reports Quarto as having "over 11 quadrillion positions" (~1.1×10^16). NOTE on state_space: this GamesCrafters figure is a POSITION count in their representation (board occupancy plus the piece-currently-gifted state), and it is NOT symmetry-reduced, which is why it dwarfs the ~10^3–10^5 unique-configuration counts Goossens reports per level — those are symmetry-reduced unique configs at fixed depth, a different measure. The game_tree figure (16!)² ≈ 4.38×10^26 is Goossens' naive full game-tree size before any pruning or symmetry reduction.
Headline fields use the STRONG solve for strength (full tablebase exists, GamesCrafters 2023) and report the agreed value of DRAW. The 2023 strong solve is the canonical "solved" year; 1998 is the original weak determination of the value, and 2026 is its first independent corroboration.
