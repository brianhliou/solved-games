# Data

The structured records behind the list. Every solved game is one file in
`games/`, and the README index, the game and family pages (`../games/`,
`../families/`, `../pages/`) and the site generate from these records, not the
other way around.

- `schema.md` — the fields each record carries.
- `games/<id>.yaml` — one record per game.
- `open/<id>.yaml` — one record per open problem: the partial result, the next
  target, and when it was last checked.
- `engines/<id>.yaml` — one record per engine or solver, with the source for
  its strength claim.
- `progress.yaml` — the dated, credited log of new results and corrections.

Edit the data, not the rendered pages. The pages are output.
