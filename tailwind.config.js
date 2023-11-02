module.exports = {
	important: true,
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			height: {
				'auto': 'auto',
			},
			opacity: {
				'0': '0',
				'25': '0.25',
				'50': '0.5',
				'75': '0.75',
				'100': '1',
			},
		},
	},
	variants: {
		extend: {
			opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	]
}
