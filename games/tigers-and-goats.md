<!-- GENERATED from data/games/tigers-and-goats.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Tigers and Goats

[Hunt & unequal forces](../families/hunt.md) · [all families](../README.md#families) · [data](../data/games/tigers-and-goats.yaml)

*Also known as: Bagh-Chal, Bagha Chal, Bagh-chal, Moving Tiger, Lambs and Tigers, Aadu Puli Aatam, Aadu Puli.*

Draw under optimal play from the standard start (4 tigers on the corners, Goat to play first). Both 'Goat can at least draw' and 'Tiger can at least draw' were proved, so the game-theoretic value of the initial position is a draw.

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Retrograde analysis, Alpha-beta + DB |
| Year | 2007 |
| Solved by | Lim Yew Jin and Jürg Nievergelt (National University of Singapore; ETH Zurich) |
| Source | [Jin et al. 2007](https://library.slmath.org/books/Book56/files/22jin.pdf) |
| Board | 5x5 grid of 25 points connected by horizontal, vertical and diagonal lines (Bagh-Chal board). Asymmetric: 4 tigers (start on the 4 corner points) face up to 20 goats. Goat moves first. |
| Game tree | 100,000,000,000,000,000,000,000,000,000,000,000,000,000 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007 | standard game | draw | Weak | Lim Yew Jin and Jürg Nievergelt | [source](https://library.slmath.org/books/Book56/files/22jin.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Lim Yew Jin & Jürg Nievergelt — Tigers and Goats is a Draw (Games of No Chance 3, MSRI Publications Vol. 56, 2007/2009, pp. 163-176) [primary solution paper]](https://library.slmath.org/books/Book56/files/22jin.pdf)
- [Tigers and Goats is a draw — Cambridge University Press (Games of No Chance 3, chapter page)](https://www.cambridge.org/core/books/abs/games-of-no-chance-3/tigers-and-goats-is-a-draw/7D77BD950DEBA74032F6B3EF69A60E63)
- [Lim Yew Jin & J. Nievergelt — Computing Tigers and Goats (ICGA Journal, Vol. 27, No. 3, September 2004, pp. 131-141) [earlier paper by same authors: endgame database + partial placement-phase analysis]](https://www.semanticscholar.org/paper/Tigers-and-Goats-is-a-draw-Jin-Nievergelt/a56c599d9db48dbb66ea5e680ec6bea7e574880b)
- [Bagh-chal — Wikipedia (lists the game as solved: a draw under optimal play)](https://en.wikipedia.org/wiki/Bagh-chal)

## Notes

Tigers and Goats (Bagh-Chal, "Moving Tiger") is an ancient Nepali asymmetric hunt game in the same family as Aadu Puli Aatam / Lambs and Tigers (Wikipedia's solved-games list names it "Lambs and Tigers"). Played on a 5x5 grid of 25 points joined by horizontal, vertical and diagonal lines. Four tigers start on the corners; Goat moves first. The game has two phases: a PLACEMENT phase lasting exactly 39 plies, in which Goat drops his 20 goats one per move while Tiger slides or jumps (a tiger jumps over an adjacent goat in a straight line to the empty point beyond, killing it); followed by a SLIDING phase that can last forever, in which Goat must slide an existing goat each turn. Tiger wins by capturing 5 goats; Tiger loses if no tiger can move; otherwise the outcome is a draw by repetition.
RESULT = DRAW under optimal play, proved by Lim Yew Jin and Jürg Nievergelt. The proof has two parts. (1) The SLIDING (endgame) phase was solved EXHAUSTIVELY by retrograde analysis: every position in the sliding subspaces S1-S5 (4 tigers, 16-20 goats) was assigned a game-theoretic value, a database of 88,260,972 symmetry-inequivalent positions. (2) The 39-ply PLACEMENT phase (subspace S0, ~33 billion positions / ~3.3 billion board images; game-tree complexity ~10^41 for the 5-goat criterion, by a Knuth/Monte-Carlo sample) was attacked by forward search. The key technique was to halve the effective search depth: confront a strong heuristic player with an exhaustive opponent, and store a "halfway database" of positions at ply 19 (10 goats placed, Tiger to move) built on the fly, so any root search terminates within ~20 plies into the halfway database, which itself resolves into the endgame database within ~20 more plies. Using this, the authors first proved (Computing Tigers and Goats, 2004) that "Goat can at least draw," then (this 2007 paper) that "Tiger can at least draw." Together these give value = draw. Two independent re-searches, separately coded in C, took ~2 months and confirmed both components ("Goat can at least draw" in ~7 hours / 7.7e9 nodes; "Tiger can at least draw" in ~48 hours / 4.05e10 nodes).
STRENGTH = WEAK (not strong). The sliding phase is a full tablebase, but the placement phase is solved only for the actual line of play from the standard start: the result establishes one drawing strategy for each side from the initial position, not a value for every reachable placement position. Indeed the halfway database deliberately stores only enough win-or-draw positions to trap forward searches (Table 4), not the full S11-S15 space (~1.6 billion positions). So this is a weak solution of the initial position, not a strong solution of the whole game.
RULESET NOTES. "Five goats captured = Tiger wins" is the standard criterion the paper analyzes (Table 2 shows the value distribution is well balanced around this number). The board is the diagonal-line Bagh-Chal board; the related Indian game Aadu Puli Aatam uses a different board, so "also known as" here groups the hunt-game family loosely. method=alpha-beta+db denotes the database-backed forward (alpha-beta-style) placement search combined with the retrograde endgame and halfway databases.
COMPLEXITY FIELDS. game_tree = ~10^41 is the placement-phase game-tree-complexity estimate (5-goat winning criterion, post-symmetry, 100,000 Monte-Carlo path samples; the paper's Table 3 gives 1.28e24 / 4.23e36 / 8.92e38 / 3.09e40 / 4.88e41 for the 1-,2-,3-,4-,5-goat criteria respectively). state_space is left null because the paper reports component sizes (88,260,972 solved sliding positions; ~33 billion placement positions; ~3.3 billion placement board images) rather than a single whole-game state-space count.
ATTRIBUTION. Independent primary line: ONE research effort (Lim Yew Jin & Nievergelt). The 2004 ICGA Journal paper ("Computing Tigers and Goats") and the 2007 Games of No Chance 3 chapter are the same authors' progressive write-ups of the same project (the 2004 paper has the endgame DB and "Goats may catch up"; the 2007 paper completes the draw proof), so they count as one independent primary source, not two. Wikipedia is a secondary corroborator. No independent re-solve by a separate group is known, though the authors' own two re-searches in separately coded C programs provide internal verification. Headline year 2007 is the completing paper (Games of No Chance 3); some catalogs date the volume to 2009.
