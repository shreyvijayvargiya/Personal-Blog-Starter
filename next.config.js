const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = () => ({
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
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "md", "mdx"],
});
