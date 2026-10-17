<!-- GENERATED from data/open/*.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Open problems

A game or board size earns an entry here when a published partial result exists and the next step is named. A game that is merely unsolved stays out. Each problem links its page, which carries the full history and sources.

5 open, 37 solved.

| Problem | Status | Solved so far | Next target | Barrier | Latest result | Last checked |
|---|---|---|---|---|---|---|
| [Go (6×6)](../games/go-5x5.md#open-go-6x6) | Smaller board solved | 5×5 (weak): first player wins the whole board under Japanese rules (2002) and under positional superko (2024); rectangular boards up to 5×6 | 6×6 under positional superko | compute, algorithmic | [Randall et al. 2024](https://www.ijcai.org/proceedings/2024/774) (2024) | 2026-10-17 |
| [Hex (10×10, remaining openings)](../games/hex-9x9.md#open-hex-10x10) | Partially solved (unverified) | 9×9 all openings (weak); 10×10 one opening, f5 | The current table of solved 10×10 opening cells from Hayward's group | compute | [Pawlewicz & Hayward 2013](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) (2013) | 2026-10-17 |
| [Kōnane (8×7 and 8×8)](../games/konane.md) | Smaller board solved | All boards up to 7×7 weakly solved; all boards up to 6×6 strongly solved | 8×7 | compute | [Siefke 2025](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) (2025-11-10) | 2026-10-17 |
| [Tak (4×4)](../games/tak-4x4.md) | Smaller board solved | 3×3: first player (White) forced win | 4×4 | storage | [Marrow 2025](https://arxiv.org/abs/2509.05844) (2025-09-06) | 2026-10-17 |
| [Y (side 7)](../games/y.md#open-y-side-7) | Smaller board solved | Sides 1-6 strongly solved; first player wins at every size | Side 7 (28 cells), slice by slice | memory, storage | [Liou 2026](https://github.com/brianhliou/game-solver) (2026-06-19)\* | 2026-10-17 |

- **Hex (10×10, remaining openings), unverified:** Which 10×10 cells beyond f5 are solved. A Hayward talk (slides undated, probably BIRS 2022) lists more cells with the goal of all 50, but its PDF could not be read as text on 2026-10-17, so no cell beyond f5 is claimed here.

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

Every entry is re-checked against its sources at least every 90 days; `npm run check` fails past that, and the row is marked stale.
