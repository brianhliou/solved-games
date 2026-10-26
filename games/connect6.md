<!-- GENERATED from data/open/connect6.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Connect6 (19×19)

[Alignment & m,n,k games](../families/alignment.md) · [open problems](../pages/open-problems.md) · [data](../data/open/connect6.yaml)

<a id="open-connect6"></a>

## Open problem: Connect6 (19×19)

| | |
|---|---|
| Status | Partially solved (unverified) |
| Solved so far | some named openings proven wins, including Mickey Mouse (2010–2013) |
| Next target | the value of the game from Black's first stone at the centre, covering every White reply |
| Barrier | branching, compute, algorithmic: Placing two stones per turn creates many candidate pairs. Relevance-zone proofs reduce the replies that need searching, but the published proofs cover selected openings. Wu and Lin's 2010 account still left tens of common openings unresolved. |
| Latest result | [Wu & Lin 2010](https://doi.org/10.1109/TCIAIG.2010.2060262) (2010) |
| Last checked | 2026-10-25 |
| Record | [data/open/connect6.yaml](../data/open/connect6.yaml) |

**Unverified:** Paywalled full texts (IEEE, Springer) could not be retrieved, so the exact number of positions and openings each paper proves is not stated here, and neither is the winner of each opening beyond Mickey Mouse. The 2013 journal paper was checked through its institutional abstract only. No source names the next target; it is this catalog's framing of what solving the game requires.

Searches for newer work:

- 2026-10-25: looked for New opening proofs or a complete 19×19 solution after 2013. Searches included 'Connect6 solved openings 2024 2025 2026', 'Connect6 solved openings 2017 2020 2023', and later relevance-zone and opening-book research.; found No newer extension of the 19×19 solved-opening set was verified. The 2016 7×7 paper could not be checked beyond its abstract. The 2021 paper evaluates an opening book through playing strength. The 2026 engine archive explicitly describes its current Connect6 findings as model predictions rather than solved-game proofs..

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2010 | 19×19, selected openings | relevance-zone proof search proves winning strategies for several openings, including Mickey Mouse | Weak | I-Chen Wu and Ping-Hung Lin | [source](https://doi.org/10.1109/TCIAIG.2010.2060262) |
| 2010 | 19×19, a benchmark of opening positions | job-level proof-number search on a desktop grid solves openings automatically | Weak | I-Chen Wu, Hung-Hsuan Lin, Ping-Hung Lin, Der-Johng Sun, Yi-Chih Chan and Bo-Ting Chen | [source](https://www.researchgate.net/publication/220962568_Job-Level_Proof-Number_Search_for_Connect6) |
| 2013 | 19×19, selected openings | journal account of job-level proof-number search, including openings hard for earlier solvers | — | I-Chen Wu, Hung-Hsuan Lin, Der-Johng Sun, Kuo-Yuan Kao, Ping-Hung Lin, Yi-Chih Chan and Po-Ting Chen | [source](https://scholar.nycu.edu.tw/en/publications/job-level-proof-number-search/) |

_Superseded rows stay in the table._

## Engines

- [Cloudict](../engines/cloudict.md) (engine): competition result, [source](https://www.game-ai-forum.org/icga-tournaments/tournament.php?id=244)
- [Galvanise Zero (gzero)](../engines/galvanise-zero.md) (engine): competition result, [source](https://github.com/richemslie/galvanise_zero)
- [KataConnect6](../engines/kataconnect6.md) (engine): self-reported, [source](https://github.com/hzyhhzy/KataGomo/blob/master/README_old.md)

## References

- [I-Chen Wu and Ping-Hung Lin, Relevance-Zone-Oriented Proof Search for Connect6, IEEE Transactions on Computational Intelligence and AI in Games 2(3) (2010)](https://doi.org/10.1109/TCIAIG.2010.2060262) (2010)
- [I-Chen Wu et al., Job-Level Proof Number Search, IEEE Transactions on Computational Intelligence and AI in Games 5(1), 44–56 (2013); institutional abstract](https://scholar.nycu.edu.tw/en/publications/job-level-proof-number-search/) (2013)
- [I-Chen Wu et al., Job-Level Proof-Number Search for Connect6, Computers and Games 2010](https://www.researchgate.net/publication/220962568_Job-Level_Proof-Number_Search_for_Connect6) (2010)
- [Qiang Gao and Xinhe Xu, A solving strategy of connect6 based on K-in-a-row types (2016); abstract only](https://www.researchgate.net/publication/306115634_A_solving_strategy_of_connect6_based_on_K-in-a-row_types) (2016)
- [Shao-Xiong Zheng et al., Connect6 Opening Leveraging AlphaZero Algorithm and Job-Level Computing (2021)](https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_4N4IS1c05/_pdf/-char/ja) (2021)
- [hzyhhzy, board-game AI archive: Connect6 model findings distinguished from proofs](https://hzyhhzy.github.io/boardgames/games.html)

## Notes

Connect6 is a six-in-a-row game: Black places one stone to start, then each player places two stones per turn. Relevance-zone search identifies where a defender must interfere with a threat; proof-number search combines the resulting cases, with jobs distributed to workers. The opening lists overlap, so their counts cannot be added. Determining the value from the centre-stone start requires handling the remaining White replies.
