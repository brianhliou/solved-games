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
| State space | ≈ 3.16 × 10¹⁷ |
| Distance to result | Computed strategy reached exploitability 0.986 mbb/g after 1579 CFR+ iterations (900 core-years). Game value bounded to dealer +87.7 to +89.7 mbb/g. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2015 | standard game | first player wins (ε-Nash) | Weak | Michael Bowling, Neil Burch, Michael Johanson, Oskari Tammelin | [source](https://www.science.org/doi/10.1126/science.1259433) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Cepheus / CFR+](../engines/cepheus.md) (solver): match result, [source](https://www.idi.ntnu.no/emner/it3105/materials/poker/poker-solved-2017.pdf)
- [Slumbot](../engines/slumbot.md) (engine): competition result, [source](https://poker.cs.ualberta.ca/news.html)

## References

- [Heads-up Limit Hold'em Poker Is Solved — M. Bowling, N. Burch, M. Johanson, O. Tammelin, Science 347(6218):145-149 (2015)](https://www.science.org/doi/10.1126/science.1259433)
- [Heads-up Limit Hold'em Poker Is Solved (full text PDF, Science 2015)](https://johanson.ca/publications/poker/2015-science-hulhe/2015-science-hulhe.pdf)
- [Solving Heads-up Limit Texas Hold'em — O. Tammelin, N. Burch, M. Johanson, M. Bowling, IJCAI 2015 (CFR+ engineering, soundness proof, confirms 4800 CPUs / 68 days / 0.986 mbb/g)](https://poker.cs.ualberta.ca/publications/2015-ijcai-cfrplus.pdf)
- [ADS bibliographic record (2015Sci...347..145B)](https://ui.adsabs.harvard.edu/abs/2015Sci...347..145B/abstract)

## Resources

**Explorers**

- <http://cepheus.cs.ualberta.ca/>

**Write-ups**

- <https://johanson.ca/publications/poker/2015-science-hulhe/2015-science-hulhe.pdf>

## Notes

Heads-up limit Texas hold'em is two-player poker with fixed bet sizes, a fixed
maximum number of raises per betting round, and the dealer button alternating.
It is the smallest variant of poker played competitively by humans. The
University of Alberta Computer Poker Research Group solved it in January 2015,
and the resulting program is called Cepheus.

The result is "essentially weakly solved," an epsilon-Nash equilibrium short
of an exact solution. The strong/weak/ultra-weak ladder of perfect-information
games does not map cleanly onto poker. Allis's "strongly solved" is not even
well defined for imperfect-information games, because the value of positions
beyond the initial one is not unique, and values are real-valued (expected
mbb/g, milli-big-blinds per game) instead of a discrete win, loss or draw.
Cepheus is a near-optimal strategy for both players from the start,
approximate and with no full tablebase, and the exact game value is bounded
but not pinned down.

A strategy with exploitability below 1 mbb/g cannot be told apart from an
exact Nash equilibrium with 95% confidence even by a human playing 200
hands/hour, 12 hours/day, for 70 years against the maximally exploitive
opponent. Cepheus's CFR+ strategy reaches 0.986 mbb/g, just under that bar.

In this zero-sum game the first player's "win" means the sign of the expected
value. The dealer, who acts first, has positive expectation, bounded at +87.7
to +89.7 mbb/g. In the paper's words, this "formally proves the common wisdom
that the dealer holds a substantial advantage."

The Science paper gives three sizes that are easy to conflate. The game can
reach 3.16 x 10^17 distinct states, more than Connect Four and fewer than
checkers. It has 3.19 x 10^14 decision points (information sets), where states
a player cannot distinguish are merged. Removing strategically identical suit
isomorphisms leaves 1.38 x 10^13 information sets, the figure most often
quoted as the size of the solved game, ~1000x larger than any previously
solved imperfect-information game.

The algorithm is CFR+, Oskari Tammelin's variant of Counterfactual Regret
Minimization, which uses regret-matching+ with non-negative regrets and runs
exhaustive iterations over the whole game tree instead of Monte-Carlo
sampling. It ran on a cluster of 200 nodes (24 x 2.1-GHz AMD cores each, 4800
cores): 1579 CFR+ iterations averaging 61 minutes each, ~68.5 days wall-clock
and 900 core-years. The IJCAI paper reports 262 TiB uncompressed and 10.9 TiB
for the computation after compression. The run used the current strategy and
omitted storage of the average strategy. The Science paper reports compression
of about 13:1 for regrets and 28:1 for the optional average strategy; its
estimate of another 6 TB for that strategy is separate from the run's storage.

Two peer-reviewed papers from the same research group report the result with
matching figures: the Science 2015 paper and the IJCAI 2015 paper "Solving
Heads-up Limit Texas Hold'em" (Tammelin, Burch, Johanson, Bowling). The second
gives the CFR+ soundness proof and engineering details and states 4800 CPUs,
68 days, 900 core-years and 0.986 mbb/g exploitability. Exploitability was
computed with an accelerated best-response technique, verified on small games
and against independent exploitability calculations.
