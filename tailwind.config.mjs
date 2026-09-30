/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				sello: {
					50: '#fdf3ee', 100: '#fbe3d6', 200: '#f6c5ab', 300: '#f0a37c', 400: '#ea7f4d', 500: '#c2410c', 600: '#a8380a', 700: '#872d08', 800: '#6b2508', 900: '#4f1c06',
				},
			},
		},
	},
	plugins: [],
}
