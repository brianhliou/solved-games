<!-- GENERATED from data/games/dobutsu-shogi.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Dōbutsu shōgi

[Shogi variants](../families/shogi.md) · [all families](../README.md#families) · [data](../data/games/dobutsu-shogi.yaml)

*Also known as: Let's Catch the Lion!, Doubutsu Shogi, どうぶつしょうぎ.*

Gote (the second player, 'white') wins

| | |
|---|---|
| Result | Second player wins |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2009 |
| Solved by | Tetsurō Tanaka (田中 哲朗), University of Tokyo |
| Source | [Tanaka 2009](https://ipsj.ixsq.nii.ac.jp/records/62415) |
| Board | 3×4 (3 files × 4 ranks) |
| State space | 246,803,167 |
| Distance to result | 78 plies from the start (the theoretical win takes 78 moves) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2009 | standard game | second player wins | Strong | Tetsurō Tanaka | [source](https://ipsj.ixsq.nii.ac.jp/records/62415) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [dobutsu (Clausecker)](../pages/engines.md#engine-clausecker-dobutsu) (engine): perfect play, [source](https://github.com/clausecker/dobutsu)

## References

- [Tetsuro Tanaka, 「どうぶつしょうぎ」の完全解析 (An Analysis of a Board Game "Doubutsu Shogi"), IPSJ SIG Technical Reports 2009-GI-22(3), pp. 1–8, 2009](https://ipsj.ixsq.nii.ac.jp/records/62415)
- [Tanaka original paper PDF (author's University of Tokyo page)](https://www.tanaka.ecc.u-tokyo.ac.jp/ktanaka/dobutsushogi/animal-private.pdf)
- [Dōbutsu shōgi (Wikipedia)](https://en.wikipedia.org/wiki/D%C5%8Dbutsu_sh%C5%8Dgi)
- [clausecker/dobutsu — independent C tablebase and engine (perfect play from any position)](https://github.com/clausecker/dobutsu)

## Resources

**Tablebases**

- [brianhliou/dobutsu-shogi — from-scratch Rust tablebase (333 MB .ctb via MPH)](https://github.com/brianhliou/dobutsu-shogi)
- [clausecker/dobutsu — C reference tablebase](https://github.com/clausecker/dobutsu)

**Explorers**

- [Live lichess-style explorer over the full solution](https://dobutsu.brianhliou.com)

**Write-ups**

- [From-scratch solution writeup](https://brianhliou.com/posts/dobutsu-shogi/)

## Notes

Dōbutsu shōgi is a shogi variant on a 3×4 board, invented in 2008 by the
professional shogi player Madoka Kitao. Tetsurō Tanaka solved it strongly in
June 2009 and published the result as a non-refereed IPSJ SIG Game Informatics
technical report (2009-GI-22, No. 3). His retrograde analysis computed the
value of every position reachable from the start. The second player (gote,
"white") wins: 後手必勝.

Perfect play takes 78 plies. If the first player captures the opponent's chick
on move 1, the loss comes sooner, at 76 plies; every other first move holds
out for the full 78. The computation ran on a 2.6 GHz Opteron with 16 GB of
RAM, and enumerating the reachable positions took about 19 minutes.

The game has 246,803,167 reachable positions. The often-cited 1,567,925,964 is
an upper bound on all piece configurations, ignoring reachability, after
folding left-right symmetry.

The clausecker/dobutsu repository is an independent C tablebase that plays
perfectly from any position. This list's maintainer rebuilt the whole pipeline
(retrograde analysis, tablebase, probe, explorer) in brianhliou/dobutsu-shogi
and checked it against the clausecker reference: 50,000 positions, zero
mismatches.
