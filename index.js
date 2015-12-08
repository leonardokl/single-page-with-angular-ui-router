"use strict";

const path = require("path"),
	express = require("express"),
	app = express(),
	port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get("/:name", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
	console.log(port);
});
