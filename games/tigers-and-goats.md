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
| Source | [Jin et al. 2007](https://web.archive.org/web/20090325093223if_/http://www.yewjin.com/papers/PhDThesisLimYewJin.pdf) |
| Board | 5x5 grid of 25 points connected by horizontal, vertical and diagonal lines (Bagh-Chal board). Asymmetric: 4 tigers (start on the 4 corner points) face up to 20 goats. Goat moves first. |
| Game tree | 10⁴¹ |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007 | standard game | draw | Weak | Lim Yew Jin and Jürg Nievergelt | [source](https://web.archive.org/web/20090325093223if_/http://www.yewjin.com/papers/PhDThesisLimYewJin.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Lim Yew Jin — On Forward Pruning in Game-Tree Search (PhD thesis, National University of Singapore, 2007), Chapters 4–5 and §5.3.3](https://web.archive.org/web/20090325093223if_/http://www.yewjin.com/papers/PhDThesisLimYewJin.pdf)
- [Lim Yew Jin & Jürg Nievergelt — Tigers and Goats is a Draw (Games of No Chance 3, MSRI Publications Vol. 56, 2009, pp. 163-176) [published solution chapter]](https://library.slmath.org/books/Book56/files/22jin.pdf)
- [Tigers and Goats is a draw — Cambridge University Press (Games of No Chance 3, chapter page)](https://www.cambridge.org/core/books/abs/games-of-no-chance-3/tigers-and-goats-is-a-draw/7D77BD950DEBA74032F6B3EF69A60E63)
- [Lim Yew Jin & J. Nievergelt — Computing Tigers and Goats (ICGA Journal, Vol. 27, No. 3, September 2004, pp. 131-141) [earlier paper by same authors: endgame database + partial placement-phase analysis]](https://static1.1.sqspcdn.com/static/f/520053/5799272/1266424058887/Computing_Tigers_And_Goats.pdf)
- [Bagh-chal — Wikipedia (lists the game as solved: a draw under optimal play)](https://en.wikipedia.org/wiki/Bagh-chal)

## Notes

Tigers and Goats (Bagh-Chal, "Moving Tiger") is an ancient Nepali asymmetric
hunt game, in the same family as Aadu Puli Aatam and Lambs and Tigers. It is
played on a 5x5 grid of 25 points joined by horizontal, vertical and diagonal
lines. Four tigers start on the corners, and Goat moves first.

The game has two phases. Unless play ends earlier, placement lasts 39 plies: Goat
drops his 20 goats one per move while Tiger slides or jumps, a tiger jumping
over an adjacent goat in a straight line to the empty point beyond and killing
it. The sliding phase that follows can last forever, with Goat sliding an
existing goat each turn. Tiger wins by capturing 5 goats and loses if no tiger
can move; otherwise the game is drawn by repetition. Five captured goats is
the standard criterion, and the paper shows the value distribution is well
balanced around that number.

Lim Yew Jin and Jürg Nievergelt proved the game a draw in two parts. They
solved the sliding phase exhaustively by retrograde analysis: every position
in the sliding subspaces S1-S5 (4 tigers, 16-20 goats) has a value, a database
of 88,260,972 symmetry-inequivalent positions. The 39-ply placement phase
(subspace S0, ~33 billion positions or ~3.3 billion board images, with a
game-tree complexity of ~10^41 for the 5-goat criterion by a Knuth Monte-Carlo
sample) was attacked by forward search.

The key technique halved the effective search depth. A strong heuristic player
faced an exhaustive opponent, and a "halfway database" of positions at ply 19
(10 goats placed, Tiger to move) was built on the fly, so any root search ends
within ~20 plies in the halfway database, which in turn resolves into the
endgame database within ~20 more plies. One opening case was proved in 2004;
complete drawing strategies for both sides are documented in Lim's 2007
thesis. The published chapter followed in 2009.

Two separately coded C re-searches took about two months to check the root
search and halfway-database components of Tiger's drawing strategy. An
additional program re-proved both sides' drawing strategies: Goat's in
about seven hours and 7,735,443,119 searched nodes, and Tiger's in about
48 hours and 40,521,418,103 searched nodes.

The solution is weak. The sliding phase is a full tablebase, but the placement
phase is solved only for play from the standard start: one drawing strategy
for each side, with no value for every reachable placement position. The
halfway database deliberately stores only enough win-or-draw positions to trap
forward searches, and leaves out most of the S11-S15 space (~1.6 billion
positions).

The 2004 ICGA Journal paper reports the endgame database and a partial
opening proof. The complete solution appears in the 2007 thesis and the
2009 Games of No Chance 3 chapter. These are successive reports of one
project; the verification searches described here are the authors' own.
