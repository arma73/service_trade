const fs = require("fs");
const CheckAccessName = require("./checkAccessName");

const handleError = (err, res) => {
	res.writeHead(404, { "Content-Type": "application/json" });
	res.end(
		JSON.stringify({
			message: err.message,
			status: 404
		})
	);
};

export default (req, res) => {
	const pathname = CheckAccessName(req);
	const path = `pages${pathname}.json`;
	fs.access(path, fs.F_OK, err => {
		if (err) return handleError(err, res);
		return fs.readFile(path, (err, data) => {
			if (err) return handleError(err, res);
			res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
			return res.end(data.toString());
		});
	});
};
