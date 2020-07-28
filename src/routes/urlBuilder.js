import listRoutes from "./listRoutes";

const routesMap = {};

listRoutes.forEach(route => {
	if (Object.keys(route).some(item => item === "name")) {
		routesMap[route.name] = route.url;
	}
});

const urlBuilder = (name, params) => {
	if (!Object.keys(routesMap).some(item => item === name)) {
		return null;
	}
	let url = routesMap[name];

	Object.keys(params).forEach(key => (url = url.replace(`:${key}`, params[key])));
	return url;
};

export { routesMap, urlBuilder };
