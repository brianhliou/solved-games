<!-- GENERATED from data/engines/katago.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# KataGo

[All engines](../pages/engines.md) · [data](../data/engines/katago.yaml)

- **Kind:** engine (searches)
- **Games in this list:** [Go (5×5)](../games/go-5x5.md), [Go (6×6)](../games/go-5x5.md#open-go-6x6)
- **Other games:** Go on other square and rectangular boards, including 9×9, 13×13 and 19×19
- **Author:** David J. Wu and contributors
- **License:** MIT, except separately licensed third-party components identified in LICENSE.
- **Project:** <https://github.com/lightvector/KataGo>
- **Last checked:** 2026-10-25

## Strength

Rating. The Go AI Ratings list assigns KataGo g170 b40c256x2-s5095420928 a rating of 5274 from 650 games under its 19×19 Tromp–Taylor settings. ([source](https://github.com/breakwa11/GoAIRatings))

## Notes

The cited rating concerns a historical model on 19×19, not measured strength or perfect play on 5×5 or 6×6. Small-board support is established by the [GTP implementation](https://github.com/lightvector/KataGo/blob/master/cpp/command/gtp.cpp), which accepts board dimensions from 2 upward subject to engine and model limits. The official [extra networks page](https://katagotraining.org/extra_networks/) supplies a Rect15 model trained on varied small rectangular boards; board-size support alone does not establish small-board accuracy. Executables and models are linked from the README. Author credit and license exceptions appear in [CONTRIBUTORS](https://github.com/lightvector/KataGo/blob/master/CONTRIBUTORS) and [LICENSE](https://github.com/lightvector/KataGo/blob/master/LICENSE).
