// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://zenigata.github.io',
	base: '/lfi-carquefou-2026',
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
	integrations: [
		starlight({
			title: 'Carquefou 2026',
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/carquefou_insoumis.es/' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://www.instagram.com/carquefou_insoumis.es/' },
				{ icon: 'email', label: 'Email', href: 'mailto:contact@carquefou-insoumise.fr' }
			],
			logo: {
				src: './src/assets/logo-strasbourg.png',
			},
			sidebar: [
				{ slug: 'resume-synthetique' },
				{ slug: 'revolution-citoyenne' },
				{
					label: 'Révolution citoyenne',
					autogenerate: { directory: 'revolution-citoyenne' },
				},
				{
					label: 'Révolution citoyenne',
					autogenerate: { directory: 'revolution-citoyenne' },
				},
			],
			plugins: [
				catppuccin({
					dark: { flavor: "macchiato", accent: "sky" },
					light: { flavor: "latte", accent: "sky" },
				})
			],
		}),
	],
});
