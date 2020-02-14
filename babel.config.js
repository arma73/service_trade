module.exports = api => {
	api.cache(true);

	return {
		presets: [
			[
				"next/babel",
				{
					"preset-env": {
						modules: "commonjs"
					}
				}
			]
		],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./"]
				}
			],
			"@babel/plugin-proposal-export-default-from"
		]
	};
};
