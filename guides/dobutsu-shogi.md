# Dōbutsu shōgi, end to end

[Back to the index](../README.md) · [game page](../games/dobutsu-shogi.md)

Dōbutsu shōgi ("Let's Catch the Lion!") is a 3×4 children's shogi variant. It is small enough that every layer of this list fits in one game: a retrograde solution, a tablebase that stores it, a probe over it and an explorer on top.

- **The solution.** Tetsurō Tanaka strongly solved it by retrograde analysis in 2009 ([IPSJ report](https://ipsj.ixsq.nii.ac.jp/records/62415)): 246,803,167 reachable positions, and the second player (gote) wins in 78 plies from the start.
- **A reference tablebase and engine.** [clausecker/dobutsu](https://github.com/clausecker/dobutsu) (C, BSD-2-Clause) plays perfectly from any position.
- **A second implementation.** [brianhliou/dobutsu-shogi](https://github.com/brianhliou/dobutsu-shogi), by this list's maintainer, recomputes the retrograde analysis in Rust, stores the result as a 333 MB `.ctb` file through a minimal perfect hash, and checks it against the clausecker reference (50,000 positions, zero mismatches). It serves a probe API and an [explorer](https://dobutsu.brianhliou.com) over the positions, with a [write-up](https://brianhliou.com/posts/dobutsu-shogi/) that works from the primary sources.

The path to read is retrograde analysis ([guide](retrograde-analysis.md)) → a tablebase ([guide](tablebases.md)) → a probe ([guide](probe-apis.md)) → an explorer.
