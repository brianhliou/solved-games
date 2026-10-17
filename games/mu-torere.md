<!-- GENERATED from data/games/mu-torere.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Mū tōrere

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/mu-torere.yaml)

*Also known as: Mu Torere, Mu-torere.*

Draw under optimal play from the standard start (authentic Rulesets D and E); no experienced player should ever lose. The first move belongs to White.

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Brute-force enumeration, Mathematical proof, Retrograde analysis |
| Year | 1987 |
| Solved by | Marcia Ascher (1987) with Philip Straffin's game-tree expansion; position graphs by Philip D. Straffin (1995, corrected 1996); full game-graph solve of all rulesets by Cameron Browne (2022); independent computational strong solve by GamesCrafters (UC Berkeley) |
| Source | [Ascher 1987](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1987.11977283) |
| Board | Eight-pointed star: 8 outer points (kewai) arranged in a ring, each joined to its two neighbours and to a central point (pūtahi); 9 cells total. Four pieces per player, placed on the eight outer points (the centre starts empty). |
| State space | 46 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1987 | standard game | draw | Strong | Marcia Ascher | [source](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1987.11977283) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Marcia Ascher — Mu Torere: An Analysis of a Maori Game (Mathematics Magazine 60(2), 90-100, 1987) [foundational analysis; Straffin's full game-tree expansion shows the correct starting rule is what prevents a forced first-move win]](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1987.11977283)
- [Philip D. Straffin — Position Graphs for Pong Hau K'i and Mu Torere (Mathematics Magazine 68(5), 382-386, 1995; corrected figure 69(1), 65, 1996) [position-graph solution]](https://www.tandfonline.com/doi/abs/10.1080/0025570X.1995.11996361)
- [Cameron Browne — Which Rules for Mu Torere? (Computers and Games, CG 2022, Springer LNCS 13865, 2022) [full game-graph expansion of all five rulesets; 46 distinct positions with W/L/D value per node]](https://link.springer.com/chapter/10.1007/978-3-031-34017-8_10)
- [GamesCrafters (UC Berkeley) — Mu Torere solver (full tablebase: value + remoteness for every position)](https://gamescrafters.berkeley.edu/games.php?game=mutorere)
- [Mū tōrere — Wikipedia](https://en.wikipedia.org/wiki/M%C5%AB_t%C5%8Drere)

## Resources

**Explorers**

- <https://gamescrafters.berkeley.edu/games.php?game=mutorere>

**Write-ups**

- <http://ludeme.eu/outputs/mu-torere-2.pdf>

## Notes

Mū tōrere is a traditional Māori game from New Zealand, predating European contact (developed, by most accounts, in response to draughts/checkers). It is a tiny, fully-solved game: collapsing rotations and reflections, the entire game graph contains only 46 distinct positions (each occurring in Black-to-move and White-to-move forms), with six terminal positions. Each position has a proven game-theoretic value (Win / Loss / Draw), so the solve is STRONG (a value for every reachable position), not merely weak. GamesCrafters additionally provides a full tablebase with remoteness for every position. Methods are best described as brute-force enumeration of the small state space plus mathematical/graph-theoretic proof (and, for the GamesCrafters version, retrograde-style backward induction over the graph) rather than any search-heavy technique.
RULESET CAVEAT (load-bearing). The naive rules let the first player win immediately, so the game is played with a restriction; the literature records five variants (Browne 2022). Headline RESULT = DRAW applies to the two authentic, playable rulesets:
  - Ruleset D (the most prevalent in the historical literature: the mover
    cannot win during the first two rounds) — DRAW under optimal play.
    Distribution over the 46 positions: 6 Win / 25 Draw / 15 Loss
    (24/74/32 over transitions). Shows a strong first-move advantage in greedy
    random playouts (White 54.4% vs Black 37.9%, draws 7.7%).
  - Ruleset E (a piece moved to the centre must be adjacent to an enemy piece;
    used by Bell and Jelliss) — DRAW under optimal play.
    Distribution: 5 Win / 31 Draw / 10 Loss (14/94/16 over transitions).
The other three rulesets are degenerate and were discarded by Browne:
  - Ruleset A (no restriction) — FIRST-PLAYER (White) WIN in 1 move.
  - Ruleset B (White may not win on the first move) — SECOND-PLAYER (Black)
    WIN, forced in 4 moves.
  - Ruleset C (a moved piece must be adjacent to an enemy piece) — always a
    DRAW: the restriction makes every game an infinite perpetual cycle, so no
    result is possible at all.

COMPLEXITY: state_space = 46 is the count of distinct positions after symmetry reduction (rotations + reflections), per Browne and Straffin. Jelliss's more compact encoding yields 26 labelled positions (each with a colour-inversion flag); some secondary sources count differently (e.g. ~86 board-states without full symmetry reduction, or Wikipedia's GamesCrafters-derived 1,180 reachable states without symmetry collapse). Game-tree complexity is not meaningfully finite for the playable rulesets because optimal lines can cycle forever (the game ends only by a player being unable to move, or by mutual-consent draw), so it is left null.
ATTRIBUTION: independent primary confirmations of the draw — Marcia Ascher (1987, with Philip Straffin's game-tree expansion), Straffin's standalone position-graph papers (1995/1996), Cameron Browne's full game-graph solve of all rulesets (2022), and GamesCrafters' independent computational solve. Browne reproduces and extends Ascher/Straffin, but the GamesCrafters solve and Browne's enumeration are separate computational lines, so the result is multiply and independently confirmed. The headline year (1987) is Ascher's foundational analysis; the complete modern enumeration is Browne (2022).
