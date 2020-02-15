const webpack = require("webpack");
const path = require("path");
const aliasJSON = require("./alias");
const { parsed: localEnv } = require("dotenv").config();
const withSourceMaps = require("@zeit/next-source-maps");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

const plugins = [
	withSourceMaps,
	[
		withOptimizedImages,
		{
			imagesFolder: "assets/images"
		}
	],
	[withSass],
	/*
	 * TODO: Pass `ignoreOrder` option to MiniCssExtractPlugin in @zeit/next-css
	 */
	[withCss],
	[withFonts],
	[
		withBundleAnalyzer,
		{
			analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
			analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
			bundleAnalyzerConfig: {
				server: {
					analyzerMode: "static",
					reportFilename: "../server-analyze.html"
				},
				browser: {
					analyzerMode: "static",
					reportFilename: "client-analyze.html"
				}
			}
		}
	]
];

const MakeAlias = ({ alias }) => {
	const CopyAlias = { ...alias };

	Object.keys(aliasJSON).forEach(item => (CopyAlias[item] = path.resolve(__dirname, ...aliasJSON[item])));
	return CopyAlias;
};

module.exports = withPlugins([...plugins], {
	webpack: config => {
		const conf = config;

		conf.node = {
			fs: "empty"
		};

		conf.plugins.push(
			new webpack.EnvironmentPlugin(localEnv),
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
			})
		);

		conf.resolve.alias = MakeAlias(conf.resolve);

		return conf;
	}
});
