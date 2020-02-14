const routes = require("next-routes")();
const customRoutes = require("./custom-routes");

Object.values(customRoutes).forEach(route => {
	const { originalPath, customPath } = route;

	routes.add(originalPath, customPath);
});

module.exports = routes;
