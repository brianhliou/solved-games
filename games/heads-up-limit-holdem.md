<!-- GENERATED from data/games/heads-up-limit-holdem.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Heads-up Limit Texas Hold'em (HULHE)

[Imperfect information](../families/imperfect-info.md) · [all families](../README.md#families) · [data](../data/games/heads-up-limit-holdem.yaml)

*Also known as: HULHE, Heads-up limit hold'em, Cepheus.*

Essentially weakly solved (NOT exactly solved): an epsilon-Nash equilibrium with exploitability 0.986 mbb/g (milli-big-blinds per game), below the 1 mbb/g threshold at which a human lifetime of play cannot statistically distinguish it from an exact solution at 95% confidence. The game is a win for the first player (the dealer/button): the strategy bounds the game-theoretic value at between 87.7 and 89.7 mbb/g in the dealer's favor, formally proving the dealer holds a substantial advantage. "first-player-win" here reflects the sign of the (real-valued, in-expectation) game value, not a discrete win.

| | |
|---|---|
| Result | First player wins (ε-Nash) |
| Strength | Weak, approximate (0.986 mbb/g (exploitability; below the ~1 mbb/g 'essentially solved' threshold)) |
| Method | Monte-Carlo CFR |
| Year | 2015 |
| Solved by | Michael Bowling, Neil Burch, Michael Johanson, Oskari Tammelin (University of Alberta Computer Poker Research Group; Cepheus project) |
| Source | [Bowling et al. 2015](https://www.science.org/doi/10.1126/science.1259433) |
| Board | Two-player limit Texas hold'em; 52-card deck, four betting rounds (preflop/flop/turn/river), fixed bet sizes, capped raises per round, alternating dealer/button |
| State space | 316,000,000,000,000,000 |
| Distance to result | Computed strategy reached exploitability 0.986 mbb/g after 1579 CFR+ iterations (900 core-years). Game value bounded to dealer +87.7 to +89.7 mbb/g. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2015 | standard game | first player wins (ε-Nash) | Weak | Michael Bowling, Neil Burch, Michael Johanson, Oskari Tammelin | [source](https://www.science.org/doi/10.1126/science.1259433) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Heads-up Limit Hold'em Poker Is Solved — M. Bowling, N. Burch, M. Johanson, O. Tammelin, Science 347(6218):145-149 (2015)](https://www.science.org/doi/10.1126/science.1259433)
- [Heads-up Limit Hold'em Poker Is Solved (full text PDF, Science 2015)](https://webdocs.cs.ualberta.ca/~bowling/papers/15science.pdf)
- [Solving Heads-up Limit Texas Hold'em — O. Tammelin, N. Burch, M. Johanson, M. Bowling, IJCAI 2015 (CFR+ engineering, soundness proof, confirms 4800 CPUs / 68 days / 0.986 mbb/g)](https://poker.cs.ualberta.ca/publications/2015-ijcai-cfrplus.pdf)
- [Author publications entry (Michael Bowling, University of Alberta) — bibliographic record](https://webdocs.cs.ualberta.ca/~bowling/publications/b2hd-15science.html)
- [ADS bibliographic record (2015Sci...347..145B)](https://ui.adsabs.harvard.edu/abs/2015Sci...347..145B/abstract)

## Resources

**Explorers**

- <http://cepheus.cs.ualberta.ca/>

**Write-ups**

- <https://webdocs.cs.ualberta.ca/~bowling/papers/15science.pdf>

## Notes

Heads-up (two-player) limit Texas hold'em: fixed bet sizes and a fixed maximum number of raises per betting round, with the dealer/button alternating. It is the smallest variant of poker played competitively by humans. Solved in January 2015 by the University of Alberta Computer Poker Research Group; the resulting program is called Cepheus (cepheus.cs.ualberta.ca).
IMPERFECT-INFORMATION CAVEAT ON "strength". This is an "essentially weakly solved" result, an epsilon-Nash equilibrium, NOT an exact solution. The perfect-information strong/weak/ultra-weak ladder does not map cleanly: Allis's "strongly solved" is not even well defined for imperfect-information games because the game-theoretic value of positions beyond the initial one is not unique, and values are real-valued (expected mbb/g) rather than discrete win/loss/draw. The schema enum offers only ultra-weak | weak | strong; we record strength: weak because a near-optimal strategy for the initial position was computed for both players, but it is approximate, not exact, and not a full tablebase. Exact game value is unknown; it is bounded, not pinned down.
The "essentially solved" threshold: a strategy with exploitability < 1 mbb/g cannot be distinguished from an exact Nash equilibrium with 95% confidence even by a human playing 200 hands/hour, 12 hours/day, for 70 years against the maximally exploitive opponent. Cepheus's current CFR+ strategy reaches 0.986 mbb/g, just under that bar.
RESULT SIGN. Because this is a zero-sum imperfect-information game with a real-valued in-expectation value (not a discrete outcome), "first-player-win" encodes the sign of the value: the dealer/button is the first player and has positive expectation, bounded to +87.7 to +89.7 mbb/g. The paper "formally proves the common wisdom that the dealer holds a substantial advantage."
COMPLEXITY FIGURES (per the Science paper, easy to conflate): - 3.16 x 10^17 = number of distinct game states the game can reach (state_space stored
  here; YAML holds the rounded 3.16e17). Larger than Connect Four, smaller than checkers.
- 3.19 x 10^14 = decision points / information sets in the full game (states a player
  cannot distinguish are merged; the paper also reports 3.19e14 information sets).
- 1.38 x 10^13 = information sets after removing strategically identical suit
  isomorphisms (the figure most often quoted as the "solved game size"), ~1000x larger
  than any previously solved imperfect-information game. game_tree left null: no single
  citable game-tree-size figure distinct from these is given.

ALGORITHM. CFR+ (a variant of Counterfactual Regret Minimization using regret-matching+, with non-negative regrets and exhaustive rather than sampled iterations) due to Oskari Tammelin. Recorded under method monte-carlo-cfr (the CFR / CFR+ family). Note CFR+ as used here does exhaustive iterations over the whole game tree rather than Monte-Carlo sampling; the "monte-carlo-cfr" method tag is the schema's bucket for the CFR family.
COMPUTE. Run on a cluster of 200 nodes (24 x 2.1-GHz AMD cores each = 4800 cores), 1579 CFR+ iterations averaging 61 minutes each, ~68.5 days wall-clock, 900 core-years, 10.9 TB disk (strategy + regrets stored compressed on disk, ~13:1 on regrets and ~28:1 on strategy, reducing a 262 TB requirement to <11 TB regrets + 6 TB strategy).
INDEPENDENT CONFIRMATION. Two independent peer-reviewed primary publications report the result with matching figures: (1) the Science 2015 paper, and (2) the IJCAI 2015 paper "Solving Heads-up Limit Texas Hold'em" (Tammelin/Burch/Johanson/Bowling), which gives the CFR+ soundness proof and engineering details and independently states 4800 CPUs, 68 days, 900 core-years, and 0.986 mbb/g exploitability. Both are from the same research group. Exploitability was computed with an accelerated best-response technique verified on small games and against independent exploitability calculations. The public Cepheus website (cepheus.cs.ualberta.ca) was unreachable (connection refused) at verification time; it is retained as a resource link but was not directly confirmed.
