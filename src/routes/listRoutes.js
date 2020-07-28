import Home from "pages/public/home";
import Page404 from "pages/errors/page404";

export const mapRoutes = [
	{
		"name": "home",
		"url": "/",
		"component": Home,
		"exact": true
	},
	{
		"name": "favorite",
		"url": "/favorite",
		"component": Favorite,
		"exact": true
	},
	{
		"name": "search",
		"url": "/search",
		"component": Search,
		"exact": true
	}
];

export const authorizationRoutes = [
	{
		"name": "logIn",
		"url": "/logIn",
		"component": LogIn,
		"exact": false
	},
	{
		"url": "/**",
		"component": Page404
	}
];
