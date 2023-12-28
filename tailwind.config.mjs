/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"background": "#FBFBFB",
				'primary': '#7341F2',
				'secondary': '#855BFA',
				"tertiary": "#AA85FE",
				"card": "#1B1B1E",
				"accent": "#262626",
				"border": "#EAEAEA",
				"foreground": "#151419",
				"muted": "#B6B6B7",
			},
		},
	},
	plugins: [],
}
