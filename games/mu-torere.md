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

Mū tōrere is a traditional Māori game from New Zealand that predates European
contact (by most accounts it developed in response to draughts). The game is
tiny: once rotations and reflections are collapsed, the whole game graph holds
only 46 distinct positions, each in a Black-to-move and a White-to-move form,
with six terminal positions. Every position has a proven value (win, loss or
draw), so the solution is strong, and GamesCrafters also provides a full
tablebase with remoteness for every position.

The naive rules let the first player win at once, so the game is played with a
restriction, and the literature records five variants (Browne 2022). The draw
holds for the two authentic, playable rulesets. Under Ruleset D, the most
common in the historical literature, the mover cannot win during the first two
rounds. Its 46 positions split 6 win, 25 draw and 15 loss (24/74/32 over
transitions), and greedy random playouts show a strong first-move advantage
(White 54.4%, Black 37.9%, draws 7.7%). Under Ruleset E, used by Bell and
Jelliss, a piece moved to the centre must be adjacent to an enemy piece; the
split is 5 win, 31 draw and 10 loss (14/94/16 over transitions).

Browne discarded the other three rulesets as degenerate. With no restriction
(Ruleset A), White wins in 1 move. If White may not win on the first move
(Ruleset B), Black wins, forced in 4 moves. If every moved piece must be
adjacent to an enemy piece (Ruleset C), every game becomes an infinite
perpetual cycle and no result is possible.

Other counts appear in the literature. Jelliss's more compact encoding gives
26 labelled positions, each with a colour-inversion flag, and some secondary
sources count ~86 board states without full symmetry reduction, or 1,180
reachable states (Wikipedia, from GamesCrafters) with no symmetry collapse.
Optimal lines in the playable rulesets can cycle forever, since the game ends
only when a player cannot move or by mutual consent to a draw.

The draw has several independent confirmations: Marcia Ascher (1987, with
Philip Straffin's game-tree expansion), Straffin's own position-graph papers
(1995/1996), Cameron Browne's full game-graph solve of all rulesets (2022),
and GamesCrafters' separate computational solve.
