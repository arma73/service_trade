const url = require("url");

const checkAccess = req => {
	const { pathname } = url.parse(req.url, true);

	return pathname;
};

module.exports = checkAccess;
