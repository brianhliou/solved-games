// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The single place the deploy target is set: the solvedgames.brianhliou.com
// subdomain on Vercel, served from the root (was the GitHub Pages project path
// '/solved-games' until 2026-10-25, when the rehype pass that prefixed content
// links with that path was removed).
const SITE = 'https://solvedgames.brianhliou.com';
const BASE = '';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [sitemap()],
	// The family index and the per-family pages moved onto the home table on
	// 2026-10-25 (the Starlight layout was replaced with one plain page, after
	// Tao's optimization-constants site); each old family page goes to its heading.
	redirects: {
		'/games/': '/',
		...Object.fromEntries(
			['alignment', 'morris', 'connection', 'mancala', 'capture', 'chess', 'hunt', 'cgt', 'shogi', 'go', 'imperfect-info'].map(
				(g) => [`/genres/${g}/`, `/#${g}`],
			),
		),
	},
});
