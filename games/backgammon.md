<!-- GENERATED from data/open/backgammon.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Backgammon

[Games of chance](../families/chance.md) · [open problems](../pages/open-problems.md) · [data](../data/open/backgammon.yaml)

<a id="open-backgammon"></a>

## Open problem: Backgammon

| | |
|---|---|
| Status | Partially solved (unverified) |
| Solved so far | every bearoff with up to 15 checkers a side in the home board; Hypergammon (3 checkers a side) completely |
| Next target | every race with up to 15 checkers a side anywhere on the first 12 points, in all four cube states (Sconyers, 2014) |
| Barrier | compute, storage: Sconyers' published home-board database already occupies 47 GB for approximately 3 billion positions, with equities for four cube cases. He describes the extended databases reported in 2014 as having huge storage requirements. Extending coverage requires calculating and storing values for combinations of both players' positions. |
| Latest result | [Sconyers 2014](https://www.bgonline.org/forums/webbbs_config.pl?noframes%3Bread=166254) (2014-09-03)\* |
| Last checked | 2026-10-25 |
| Record | [data/open/backgammon.yaml](../data/open/backgammon.yaml) |

**Unverified:** Sconyers' extended race tables and four- and five-checker solutions are documented here by his statement reproduced with permission in 2014; their data, implementation and numerical error bounds were not inspected. No strength label is assigned to those reports. The 1995 history dates establish documented availability, not original completion dates. The 2003 date follows Fang, Glenn and Kruskal's bibliographic citation; the original dated announcement was not recovered.

Searches for newer work:

- 2026-10-25: looked for Results after the 2014 report extending exact race coverage or solving standard Backgammon. Searches included "Hugh Sconyers 12 points database", "backgammon solving bearoff database 2024 2025 2026", "backgammon exact race database 2025", and "backgammon solved 2026".; found No later exact coverage extension or full-game solution located. Benjamin, Heinrich and Chotichurangkul's 2026 paper develops practical race estimates, rather than establishing the proposed database's completion. blunderDB's 2026 documentation describes GNU Backgammon two-sided tables covering six or eleven checkers per side..

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1995 | home-board bearoffs, Sconyers Volumes 1–3; documented by December 1995 | equities and best moves for up to 10 checkers per side on six points, and up to 15 per side on the first four points, in all four cube cases | — | Hugh Sconyers | [source](https://www.bkgm.com/articles/Damish/backgammon-faq.html) |
| 1995 | Hypergammon, three checkers per side; documented by December 1995 | complete position-equity database and a program described by Kit Woolsey as playing perfectly | — | Hugh Sconyers | [source](https://www.bkgm.com/articles/Damish/backgammon-faq.html) |
| 2003 | all home-board bearoffs, up to 15 checkers per side | equities for cubeless play, a centered cube and either player's ownership of the cube, with a best-move lookup | — | Hugh Sconyers; date cited by Fang, Glenn and Kruskal (2008) | [source](https://back-gammon.info/sconyers/support.html) |
| 2014-09-03 | extended races: each side has 1–3 checkers on points 7–12 and 1–12 on points 1–6 | Sconyers reports a solution covering four cube cases | — | Hugh Sconyers | [source](https://www.bgonline.org/forums/webbbs_config.pl?noframes%3Bread=166254) |
| 2014-09-03 | four- and five-checker variants extending Hypergammon's starting arrangement | Sconyers reports solutions, adding starting checkers on the 21- and 20-points | — | Hugh Sconyers | [source](https://www.bgonline.org/forums/webbbs_config.pl?noframes%3Bread=166254) |

_Superseded rows stay in the table._

## Engines

- [BGBlitz](../engines/bgblitz.md) (engine): competition result, [source](https://www.bgblitz.com/olympiad_2016.html)
- [eXtreme Gammon](../engines/extreme-gammon.md) (engine): rating, [source](https://www.extremegammon.com/studies.aspx)
- [GNU Backgammon](../engines/gnu-backgammon.md) (engine): competition result, [source](https://www.bgblitz.com/olympiad_2006.html)

## References

- [Hugh Sconyers, email reproduced with permission by Phil Simborg: extended race databases and further targets](https://www.bgonline.org/forums/webbbs_config.pl?noframes%3Bread=166254) (2014-09-03)
- [Hugh Sconyers, Bearoff 15x15 product description](https://back-gammon.info/sconyers/index.html)
- [Hugh Sconyers, database documentation: BearOff 15x15 and HyperBackgammon](https://back-gammon.info/sconyers/support.html)
- [Mark Damish, Backgammon FAQ: Sconyers' database documentation and Kit Woolsey's Hyper-Backgammon review](https://www.bkgm.com/articles/Damish/backgammon-faq.html) (1995-12-18)
- [Haw-ren Fang, James Glenn and Clyde P. Kruskal, Retrograde Approximation Algorithms for Jeopardy Stochastic Games, ICGA Journal 31(2), 2008; author-uploaded text](https://www.researchgate.net/publication/220174525_RETROGRADE_APPROXIMATION_ALGORITHMS_FOR_JEOPARDY_STOCHASTIC_GAMES1) (2008)
- [Arthur Benjamin and Andrew M. Ross, Enumerating Backgammon Positions: The Perfect Hash](https://bkgm.com/articles/BenjaminRoss/EnumeratingBackgammonPositions.pdf) (1996)
- [Arthur T. Benjamin, Hal Heinrich and May Chotichurangkul, Solving The Race in Backgammon, Scatterplot](https://www.tandfonline.com/doi/full/10.1080/29932955.2026.2663696) (2026)
- [blunderDB version history: GNU Backgammon two-sided bearoff databases](https://kevung.github.io/blunderDB/en/historique.html)

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Notes

Backgammon is a dice-driven race in which each player moves fifteen checkers around a board of twenty-four points and then removes them. The doubling cube lets players raise the stakes. Once both players' remaining checkers are in their home boards, play reduces to a bearoff race without further contact. Working backward from finished positions, a database can evaluate legal moves against the possible dice rolls and store the resulting equities, or expected payoffs. Two-sided tables account for both players' positions and support checker and cube decisions. These endgames provide published partial solutions within the standard game. Longer races require broader tables, while positions with contact also allow hitting and return checkers to earlier parts of the board. Hypergammon keeps the board and uses three checkers per side; its complete equity database provides a smaller-game milestone.
