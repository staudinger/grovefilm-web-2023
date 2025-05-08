import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"latienne-pro": ["latienne-pro", "serif"],
			},
			colors: {
				// secondary: "#ba9467",
				// primary: "#0f172a",
				red: "#D11E06",
				orange: "#ffa128",
				yellow: "#fdf995",
				blue: "#6FB2D9",
			},
		},
	},
};
export default config;
