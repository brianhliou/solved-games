// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// One sidebar group per genre, generated from data/games/*.yaml by
// scripts/gen-content.ts (runs on predev/prebuild).
import gamesSidebar from './src/generated/sidebar.json' with { type: 'json' };

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
	integrations: [
		starlight({
			title: 'Solved Games',
			// GA4, the same property as brianhliou.com (filter by hostname). The loader
			// is brianhliou.com's, with its ?notrack owner opt-out.
			head: [
				{ tag: 'script', attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XX833SP2K2' } },
				{ tag: 'script', attrs: { src: '/google-analytics.js', defer: true, 'data-ga-id': 'G-XX833SP2K2' } },
			],
			description:
				'A structured record of which games are solved — by whom, how strongly, and what is left. Maintained, with open problems and the engines that play them.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/brianhliou/solved-games' },
			],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'Open frontier', link: '/frontier/' },
					],
				},
				{
					label: 'Families',
					items: [
						{ label: 'Y (connection)', link: '/families/y/' },
						{ label: 'Morris (mill games)', link: '/families/morris/' },
					],
				},
				...gamesSidebar,
			],
		}),
	],
});
