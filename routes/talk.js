'use strict';

module.exports = function (req, res) {
	let search = req.body.search || req.query.search;
	res.send(search);
};
