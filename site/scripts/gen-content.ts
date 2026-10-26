// Generate the site's pages from the structured data in ../data/.
// The pages are the repo's own generated pages (scripts/pages.ts, the same
// renderer behind games/*.md, families/*.md and pages/*.md on GitHub), with
// their repo-relative links rewritten to site routes. Regenerated on every
// build (predev/prebuild), gitignored, never hand-edited.
//
//   node scripts/gen-content.ts
//
// Output (under src/content/docs/):
//   games/<genre>/<id>.md     one page per game, and per open problem with no game page
//   open-problems.md, engines.md
//   ../generated/home.json    the home page's table: every verified game by family, and the open problems
//
// The repo's per-family pages (families/<genre>.md) have no site page since
// 2026-10-25: the home table holds the same rows, so a family link goes to the
// family's heading there (/#<genre>).

import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, posix } from "node:path";
import { GENRE_ORDER, citeLabel, loadData, openPath, render } from "../../scripts/pages.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const DOCS = join(ROOT, "site", "src", "content", "docs");
const HOME = join(ROOT, "site", "src", "generated", "home.json");
const REPO = "https://github.com/brianhliou/solved-games/blob/main";
const GENERATED_DIRS = ["games", "genres"];
const GENERATED_FILES = ["open-problems.md", "engines.md"];

const RESULT_LABEL: Record<string, string> = {
  "first-player-win": "First player wins",
  "second-player-win": "Second player wins",
  draw: "Draw",
};

// Cross-links from a game page up to its family hub (a hand-written page with an explorer).
const FAMILY_BY_ID: Record<string, { label: string; href: string }> = {
  y: { label: "the Y connection family", href: "/families/y/" },
};
const FAMILY_BY_GENRE: Record<string, { label: string; href: string }> = {
  morris: { label: "the morris (mill) family", href: "/families/morris/" },
};

const data = loadData(ROOT);
const { pages } = render(data, new Date().toISOString().slice(0, 10));

const genreOf = new Map<string, string>();
for (const g of data.games) genreOf.set(g.id, g.genre);
for (const e of data.open) if (!e.related_game) genreOf.set(e.id, e.genre);
// A family with no verified game has no heading in the home table (Games of
// chance holds only Backgammon's open entry), so its links go to Open problems.
const tableGenres = new Set(data.games.filter((g) => g.verified).map((g) => g.genre));
const genreTitle = (slug: string) =>
  (GENRE_ORDER.find((g) => g.slug === slug)?.title ?? "Other").replace(/\*/g, "");

/** Site route for a repo path, or undefined when the path has no page on the site. */
function routeOf(repoPath: string): string | undefined {
  if (repoPath === "README.md") return "/";
  let m = repoPath.match(/^games\/([^/]+)\.md$/);
  if (m) return genreOf.has(m[1]) ? `/games/${genreOf.get(m[1])}/${m[1]}/` : undefined;
  m = repoPath.match(/^families\/([^/]+)\.md$/);
  if (m) return tableGenres.has(m[1]) ? `/#${m[1]}` : "/#open-problems";
  m = repoPath.match(/^pages\/([^/]+)\.md$/);
  if (m) return `/${m[1]}/`;
  return undefined;
}

/** Rewrite each relative Markdown link in a page written at `from` (a repo path). */
function relink(md: string, from: string): string {
  return md.replace(/\]\(([^)\s]+)\)/g, (whole, target: string) => {
    if (/^(https?:|mailto:|#|\/)/.test(target)) return whole;
    const [path, anchor] = target.split("#");
    const repoPath = posix.normalize(posix.join(posix.dirname(from), path));
    // The README's family index is the site's home table.
    if (repoPath === "README.md" && anchor === "families") return "](/)";
    const route = routeOf(repoPath);
    if (route) return `](${route}${anchor ? `#${anchor}` : ""})`;
    return `](${REPO}/${repoPath}${anchor ? `#${anchor}` : ""})`;
  });
}

/** A repo page as a site page: front matter for the title, no generated-by comment or H1. */
function sitePage(md: string, from: string, description: string, after?: string): string {
  const lines = md.split("\n");
  if (lines[0].startsWith("<!-- GENERATED")) lines.splice(0, 1);
  while (lines[0] === "") lines.shift();
  const title = lines.shift()!.replace(/^# /, "").replace(/\*/g, "");
  while (lines[0] === "") lines.shift();
  // The breadcrumb line stays first; anything extra goes right under it.
  if (after) lines.splice(1, 0, "", after);
  const front = ["---", `title: ${JSON.stringify(title)}`, `description: ${JSON.stringify(description)}`, "---", ""];
  return front.join("\n") + relink(lines.join("\n"), from);
}

function gameDescription(id: string): string {
  const g = data.games.find((x) => x.id === id);
  if (!g) {
    const e = data.open.find((x) => x.id === id)!;
    return `${e.name}: an open problem. Solved so far: ${e.solved_up_to}`;
  }
  const result = RESULT_LABEL[g.result] ?? g.result;
  return `${g.name}: ${result.toLowerCase()} — ${g.strength}${g.approximate ? ", approximate" : ""} solution${g.year ? ` (${g.year})` : ""}.`;
}

// --- generate ---
for (const d of GENERATED_DIRS) rmSync(join(DOCS, d), { recursive: true, force: true });
for (const f of GENERATED_FILES) rmSync(join(DOCS, f), { force: true });

const write = (rel: string, body: string) => {
  mkdirSync(dirname(join(DOCS, rel)), { recursive: true });
  writeFileSync(join(DOCS, rel), body);
};

let count = 0;
for (const [repoPath, md] of pages) {
  if (repoPath.startsWith("families/")) continue;
  const route = routeOf(repoPath);
  if (!route) throw new Error(`no site route for generated page ${repoPath}`);
  const rel = `${route.replace(/^\/|\/$/g, "")}.md`;
  let description: string;
  let after: string | undefined;
  const game = repoPath.match(/^games\/([^/]+)\.md$/)?.[1];
  if (game) {
    description = gameDescription(game);
    const fam = FAMILY_BY_ID[game] ?? FAMILY_BY_GENRE[genreOf.get(game)!];
    if (fam) after = `Part of [${fam.label}](${fam.href}) — see the family page for the scaling table and a playable explorer.`;
    count++;
  } else if (repoPath === "pages/open-problems.md") {
    description = "Games and board sizes with a published partial result and a named next step.";
  } else {
    description = "Programs that play or solve the games listed here, each with the evidence for its strength.";
  }
  write(rel, sitePage(md, repoPath, description, after));
}

// The home table: every verified game, grouped by family in the repo's order and
// sorted by year inside a family (as the README's index is), then the open problems.
const STRENGTH = { "ultra-weak": "Ultra-weak", weak: "Weak", strong: "Strong" } as const;
const verified = data.games.filter((g) => g.verified);
const families = GENRE_ORDER.filter((f) => verified.some((g) => g.genre === f.slug)).map((f) => ({
  title: genreTitle(f.slug),
  slug: f.slug,
  games: verified
    .filter((g) => g.genre === f.slug)
    .sort((a, b) => (a.year ?? 0) - (b.year ?? 0) || a.name.localeCompare(b.name))
    .map((g) => ({
      name: g.name,
      href: routeOf(`games/${g.id}.md`)!,
      result: RESULT_LABEL[g.result] ?? g.result,
      strength: STRENGTH[g.strength] + (g.approximate ? " (approximate)" : ""),
      cite: citeLabel(g),
      selfArchived: g.evidence === "self-archived",
    })),
}));
const open = data.open.map((e) => {
  const [path, anchor] = openPath(e, 0).split("#");
  return { name: e.name, href: routeOf(path)! + (anchor ? `#${anchor}` : ""), solvedUpTo: e.solved_up_to };
});
mkdirSync(dirname(HOME), { recursive: true });
writeFileSync(HOME, JSON.stringify({ families, open, games: verified.length }, null, 2));

console.log(`[gen-content] ${count} game pages, ${GENERATED_FILES.length} other pages → ${DOCS}`);
