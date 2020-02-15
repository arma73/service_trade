require("custom-env").env(process.env.NODE_ENV);

const MobileDetect = require("mobile-detect");
const next = require("next");
const cookiesMiddleware = require("universal-cookie-express");
const compression = require("compression");
const proxy = require("http-proxy-middleware");
const modifyResponse = require("node-http-proxy-json");
const cors = require("cors");
const camelCase = require("lodash/fp/camelCase");
const mapKeysDeep = require("map-keys-deep-lodash");

const express = require("express");
const routes = require("../routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

const getSizesFallback = userAgent => {
	const md = new MobileDetect(userAgent);
	if (md.mobile()) {
		return {
			fallbackWidth: 600,
			fallbackHeight: 1000
		};
	}

	if (md.tablet()) {
		return {
			fallbackWidth: 768,
			fallbackHeight: 1024
		};
	}

	return {
		fallbackWidth: 1200,
		fallbackHeight: 700
	};
};

app.prepare().then(() => {
	express()
		.use(cors())
		.use(
			"/api",
			proxy({
				changeOrigin: true,
				secure: false,
				target: process.env.REACT_APP_PROXY_TARGET,
				onProxyRes(proxyRes, req, res) {
					modifyResponse(res, proxyRes, body => {
						let data = body;
						if (data) {
							data = mapKeysDeep(data, (value, key) => camelCase(key));
						}
						return data;
					});
				}
			})
		)
		.use(cookiesMiddleware())
		.use(compression())
		.use((req, ...rest) => {
			const userAgent = req.headers["user-agent"];
			req.sizesFallback = getSizesFallback(userAgent);
			return handler(req, ...rest);
		})
		.listen(3000);
});
