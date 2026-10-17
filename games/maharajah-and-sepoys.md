<!-- GENERATED from data/games/maharajah-and-sepoys.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Maharajah and the Sepoys

[Hunt & unequal forces](../families/hunt.md) · [all families](../README.md#families) · [data](../data/games/maharajah-and-sepoys.yaml)

*Also known as: Shatranj Diwana Shah, Mad King's Game, Maharajah chess, Sarvatobhadra, The Maharaja and the Sepoys.*

The Sepoys (Black, the player with the full army) win with correct play

| | |
|---|---|
| Result | Second player wins |
| Strength | Weak |
| Method | Knowledge-based |
| Year | 1892 |
| Solved by | Edward Falkener (first published Western analysis of the Sepoys' winning method, 1892); the forced-win strategy is further documented by Hans L. Bodlaender (The Chess Variant Pages) and D. B. Pritchard (Encyclopedia of Chess Variants) |
| Source | [Falkener 1892](https://archive.org/details/gamesancientorie00falkuoft) |
| Board | Standard 8x8 chessboard. Black ("sepoys") has the full orthodox 16-piece army in the normal starting position; White has a single piece, the maharajah, starting on e1, that moves on its turn as either a queen or a knight (the "amazon" compound). The maharajah is royal (must escape check); Black's pawns cannot promote in the usual rendering. No castling for the lone maharajah. |
| Distance to result | A documented forced line mates the maharajah by Black's 24th move; analyses describe winning the game in at most ~25 moves largely independent of White's replies. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1892 | standard game | second player wins | Weak | Edward Falkener | [source](https://archive.org/details/gamesancientorie00falkuoft) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Edward Falkener, Games Ancient and Oriental, and how to Play Them, Longmans, Green and Co. (1892), 'The Game of the Maharajah and the Sepoys', pp. 217-224 (full text, Internet Archive)](https://archive.org/details/gamesancientorie00falkuoft)
- [Hans L. Bodlaender, 'The Maharaja and the Sepoys', The Chess Variant Pages](https://www.chessvariants.com/unequal.dir/maharaja.html)
- [D. B. Pritchard, The Encyclopedia of Chess Variants (Games & Puzzles Publications, 1994), p. 183 (secondary)](https://en.wikipedia.org/wiki/The_Encyclopedia_of_Chess_Variants)
- [Maharajah and the Sepoys — Wikipedia (secondary)](https://en.wikipedia.org/wiki/Maharajah_and_the_Sepoys)
- [Solved game — Wikipedia, which lists Maharajah and the Sepoys among games with a weak solution (secondary)](https://en.wikipedia.org/wiki/Solved_game)
- [Chess Variants/Maharajah and the Sepoys — Wikibooks (secondary)](https://en.wikibooks.org/wiki/Chess_Variants/Maharajah_and_the_Sepoys)

## Resources

**Write-ups**

- <https://www.chessvariants.com/unequal.dir/maharaja.html>

## Notes

Asymmetric ("unequal armies") chess variant of Indian origin. Black commands the full orthodox chess army (the "sepoys"); White has a single royal piece, the maharajah, which moves as a queen OR a knight on each turn (equivalent to the fairy "amazon"). Each side wins by checkmating the opponent's royal piece. The game traces to a 12th-century antecedent (described in the Mānasollāsa), was revived in the 1871 Indian games encyclopedia Kridakaushalya, and was first described to Western readers by Edward Falkener in 1892.
This is a WEAK solution, and it is human/strategy-derived, NOT a computer tablebase. The "solution" is a memorizable winning algorithm for the Sepoys proven from the start position, not a value assigned to every reachable position; calling it "strong" would be wrong. Wikipedia's "Solved game" article lists it under games with a weak solution and characterizes that solution as "an easily memorable series of moves that guarantees victory to the 'sepoys' player." Method is best classified as knowledge-based / mathematical (strategic) proof rather than retrograde analysis or proof-number search — no exhaustive solver, tablebase, or search-tree artifact establishes this result. The crux of the proof: the maharajah is royal, so it can never capture a defended Black piece (doing so would expose it to recapture, which is illegal for a royal man). The Sepoys therefore keep every piece mutually protected while steadily removing the maharajah's flight squares, then deliver mate; a widely circulated forced line reaches mate by Black's move 24, and analyses note a win in at most ~25 moves largely regardless of White's play.
Attribution caveat: there is no single peer-reviewed "solving" paper and no named computer solver. The forced Sepoys win is folklore of the variant, documented in Falkener (1892), Bodlaender's Chess Variant Pages writeup, and Pritchard's Encyclopedia of Chess Variants; some web sources additionally credit a "William E. Rudge" with an early winning-strategy outline, but this attribution could not be confirmed in a primary source and should be treated as unverified. Ruleset note: a common rendering makes Black's pawns "weak" pawns that cannot promote (so the Sepoys cannot trivially make a second queen); the forced-win result is reported for the 8x8 board. Complexity figures (state-space, game-tree) are not meaningfully published for this variant and are left null.
