/* eslint-disable max-lines */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { "parsed": localEnv } = require("dotenv").config();

const copyFiles = {
	"patterns": [
		{ "from": path.resolve(__dirname, "public", "assets", "images"), "to": "./images" },
		{ "from": path.resolve(__dirname, "public", "assets", "fonts"), "to": "./fonts" },
		{ "from": path.resolve(__dirname, "public", "assets", "webfonts"), "to": "./webfonts" }
	]
};

const config = {
	"entry": ["@babel/polyfill", path.resolve(__dirname, "src", "app")],
	"output": {
		"path": path.resolve(__dirname, "dist"),
		"filename": "[name].[contenthash].js"
	},
	"module": {
		"rules": [
			{
				"test": /\.(js|jsx)$/,
				"use": "babel-loader",
				"exclude": /node_modules/
			},
			{
				"test": /\.css$/,
				"use": [
					MiniCssExtractPlugin.loader,
					{
						"loader": "css-loader",
						"options": {
							"importLoaders": 1
						}
					},
					"postcss-loader"
				]
			},
			{
				"test": /\.scss$/,
				"use": [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				"test": /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				"loader": "file-loader",
				"options": {
					"name": "[name].[ext]"
				}
			},
			{
				"test": /\.jpe?g$|\.gif$|\.png$|\.svg$/,
				"use": "file-loader"
			}
		]
	},
	"resolve": {
		"extensions": [".js", ".jsx"],
		"alias": {
			"images": path.resolve("public", "assets", "images"),
			"fonts": path.resolve("public", "assets", "fonts"),
			"assets": path.resolve("public", "assets"),
			"containers": path.resolve("src", "containers"),
			"components": path.resolve("src", "components"),
			"pages": path.resolve("src", "pages"),
			"utils": path.resolve("src", "utils"),
			"theme": path.resolve("src", "theme"),
			"store": path.resolve("src", "store"),
			"services": path.resolve("src", "services")
		}
	},
	"node": {
		"fs": "empty"
	},
	"devServer": {
		"contentBase": "./dist",
		"historyApiFallback": true,
		"port": process.env.PORT || 3001
	},
	"plugins": [
		new CleanWebpackPlugin({
			"cleanAfterEveryBuildPatterns": ["dist"]
		}),
		new HtmlWebpackPlugin({
			"appMountId": "app",
			"title": "T1",
			"template": "public/static/html/index.html"
		}),
		new webpack.ProvidePlugin({
			"React": "react"
		}),
		new MiniCssExtractPlugin(),
		// new webpack.EnvironmentPlugin(localEnv),
		new CopyWebpackPlugin(copyFiles)
	],
	"optimization": {
		"runtimeChunk": "single",
		"splitChunks": {
			"cacheGroups": {
				"vendor": {
					"test": /[\\/]node_modules[\\/]/,
					"name": "vendors",
					"chunks": "all"
				}
			}
		}
	}
};

module.exports = (env, argv) => {
	const isProduction = env === "production";
	if (argv.hot) {
		// Cannot use 'contenthash' when hot reloading is enabled.
		config.output.filename = "[name].[hash].js";
	}
	return { ...config, "devtool": isProduction ? "source-map" : "inline-source-map" };
};
