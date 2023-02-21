const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
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
