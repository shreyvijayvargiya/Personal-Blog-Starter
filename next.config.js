const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = () => ({
	env: {
		// REACT_APP_FIREBASE_KEY: "AIzaSyAz-hjGhuQ4wczQMYOAMI9vR2gT7Sw9L6E",
		// REACT_APP_FIREBASE_DOMAIN: "ihatereading-4ba52.firebaseapp.com",
		// REACT_APP_FIREBASE_DATABASE:
		// 	"https://ihatereading-4ba52-default-rtdb.firebaseio.com",
		// REACT_APP_FIREBASE_PROJECT_ID: "ihatereading-4ba52",
		// REACT_APP_FIREBASE_STORAGE_BUCKET: "ihatereading-4ba52.appspot.com",
		// REACT_APP_ID: "1:229243106222:web:34a40331e72ac4b1234e3f",
		// REACT_APP_MEASUREMENT_ID: "G-6ZJX206V4Y",
	},
	experimental: {
		esmExternals: false,
	},
	images: {
		domains: ["firebasestorage.googleapis.com", "public-files.gumroad.com"],
	},
	webpack: (config, options) => {
		config.node = {
			fs: "empty",
			child_process: "empty",
			net: "empty",
			dns: "empty",
			tls: "empty",
		};
		return config;
	},
	...withBundleAnalyzer({}),
});
