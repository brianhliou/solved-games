<!-- GENERATED from data/open/international-draughts-10x10.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# International draughts (10×10)

[Capture & board control](../families/capture.md) · [open problems](../pages/open-problems.md) · [data](../data/open/international-draughts-10x10.yaml)

<a id="open-international-draughts-10x10"></a>

## Open problem: International draughts (10×10)

| | |
|---|---|
| Status | Partially solved (unverified) |
| Solved so far | every ending with up to 7 pieces (2007); 8-piece endings split 4–4 or 5–3 (2009); every 8-piece ending and part of 9 and 10 (self-reported, 2026) |
| Next target | every 10-piece ending with five pieces a side; 18.9% of its non-capture positions are resolved |
| Barrier | compute, storage: Grimminck reports 171 GB for the partial 10-piece database and identifies further prerequisite subdatabases as the next work. Gilbert's 2009 4-versus-4 and 5-versus-3 build covered 16.5 trillion positions, used 365 GB for WLD data, and took 2.65 CPU years to build plus 2.91 CPU years to verify. These historical costs are not an estimate for completing the current target. |
| Latest result | [Grimminck 2026](https://damforum.nl/viewtopic.php?t=8907) (2026-10-19)\* |
| Last checked | 2026-10-25 |
| Record | [data/open/international-draughts-10x10.yaml](../data/open/international-draughts-10x10.yaml) |

**Unverified:** The newest statistics explicitly say WDL correctness is not independently verified. Grimminck also reports a full 1–8-piece build, but its coverage of imbalanced material distributions was not established from a detailed inventory. Coverage of tournament move-count draw rules is not documented in the cited database descriptions. Gilbert's earlier 9-piece descriptions do not establish complete 9-piece coverage.

Searches for newer work:

- 2026-10-25: looked for "international draughts 8 piece endgame database 9 pieces 2025", "Gilbert 9-piece draughts 2010", and "international draughts endgame database 2025 2026"; checked Kingsrow documentation and the Dragon author's October 2026 thread and statistics.; found Found Grimminck's 2026-10-19 partial 10-piece announcement and 2026-10-21 follow-up. No later completion, complete 9-piece database, or proof of the starting position's value was located. Kingsrow's September 2026 12-piece announcement concerns English checkers..

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007-12-05 | every ending with 2 to 7 pieces | Kingsrow databases completed | — | Ed Gilbert | [source](https://edgilbert.org/InternationalDraughts/Culemborg2007.htm) |
| 2009-07-06 | 8-piece endings with 4 versus 4 or 5 versus 3 pieces | WLD values for 16.5 trillion positions; conversion distances retained from 10 plies onward | — | Ed Gilbert | [source](https://edgilbert.org/InternationalDraughts/8_piece_international_draughts_db.htm) |
| 2010 | distributed Kingsrow database, including a five-men-versus-four-men subset | version 1 distributed from 2010 to 2014; distribution dates do not establish a full 9-piece solve | — | Ed Gilbert | [source](https://github.com/eygilbert/egdb_intl) |
| 2026-10-19 | every ending with up to 8 pieces; partial 5-versus-4 and 5-versus-5 endings | full 1–8-piece build (about 120 hours); exact WLD for 48.6% (5 v 4) and 18.9% (5 v 5) of non-capture positions; not independently verified | — | Michel Grimminck | [source](https://damforum.nl/viewtopic.php?t=8907) |

_Superseded rows stay in the table._

## References

- [Michel Grimminck (MichelG), 10 piece endgame databases, World Draughts Forum](https://damforum.nl/viewtopic.php?t=8907) (2026-10-19)
- [Michel Grimminck, Dragon partial 5050 database statistics](https://www.mdgsoftware.nl/draughts/stats/partial-details-5050.html)
- [Michel Grimminck, Dragon partial 5040 database statistics](https://www.mdgsoftware.nl/draughts/stats/partial-details-5040.html)
- [Ed Gilbert, Kingsrow International: Culemborg 2007 and endgame databases](https://edgilbert.org/InternationalDraughts/Culemborg2007.htm) (2007-12-05)
- [Ed Gilbert, 8 Piece International Draughts Database](https://edgilbert.org/InternationalDraughts/8_piece_international_draughts_db.htm) (2009-07-06)
- [Ed Gilbert, egdb_intl: database coverage and distribution history](https://github.com/eygilbert/egdb_intl)
- [Ed Gilbert, Kingsrow news: September 2026 English-checkers announcement](https://edgilbert.org/Checkers/KingsRow.htm)
- [Michel Grimminck, MDG Software author page](https://www.mdgsoftware.nl/about.html)

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Notes

International draughts is played on a 10×10 board with twenty pieces per
side. Men can capture backward as well as forward, and kings can travel
along a diagonal. Its endgame results concern a different ruleset from
English checkers.

Endgame databases assign values by working backward through smaller
endings. Kingsrow's documented coverage limits each side to five pieces.
Gilbert's eight-piece result covers the four-versus-four and
five-versus-three splits, without establishing every eight-piece
distribution.

In October 2026 Michel Grimminck reported building every ending up to
eight pieces on a single 24-core machine, then partial nine- and ten-piece
tables, which he describes as generated "for fun" and too large (171 GB) to
distribute. The partial ten-piece table distinguishes exact wins, draws and
losses from bounds and unresolved positions. Its 18.9% coverage counts
positions where the player to move has no capture, counting both sides
to move. Including capture positions raises exact coverage to 58.1%.
Resolving more king-containing dependencies may settle further positions.
These results do not provide a proof from the starting position.
