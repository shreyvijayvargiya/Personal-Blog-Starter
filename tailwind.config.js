const colors = require("tailwindcss/colors");

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"./pages/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
			"./modules/**/*.{js,ts,jsx,tsx}",
			"./utils/**/*.{js,ts,jsx,tsx}",
		],
	},
	darkMode: "class", // or 'media' or 'class'
	mode: "jit",
	theme: {
		colors: {
			yellow: colors.yellow,
			red: colors.red,
			green: colors.green,
			white: colors.white,
			pink: colors.pink,
			blue: colors.blue,
			indigo: colors.indigo,
			orange: colors.orange,
			gray: colors.gray,
		},
		screens: {
			xsm: "200px",
			// => @media (min-width:  280px) { ... }

			xxs: "320px",
			// => @media (min-width: 320px) { ... }

			xs: { max: "575px" },
			// => @media (min-width: 420px) { ... }

			sm: { min: "576px", max: "897px" },
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			xxl: "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		minWidth: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
	},
	variants: {
		extend: {
			backgroundColor: ["dark"],
			textColor: ["dark"],
		},
	},
	plugins: [],
};
