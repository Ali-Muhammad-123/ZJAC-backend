var express = require("express");
var router = express.Router();
const axios = require("axios");
const API_KEY = require("../config");
/* GET home page. */
router.get("/", async function (req, res, next) {
	var promises = [];
	promises.push(
		await axios({
			url: "https://api.nytimes.com/svc/topstories/v2/arts.json",
			params: {
				"api-key": API_KEY,
			},
			method: "get",
		}).catch((err) => console.log(err))
	);
	promises.push(
		await axios({
			url: "https://api.nytimes.com/svc/topstories/v2/home.json",
			params: {
				"api-key": API_KEY,
			},
			method: "get",
		}).catch((err) => console.log(err))
	);
	promises.push(
		await axios({
			url: "https://api.nytimes.com/svc/topstories/v2/science.json",
			params: {
				"api-key": API_KEY,
			},
			method: "get",
		}).catch((err) => console.log(err))
	);
	promises.push(
		await axios({
			url: "https://api.nytimes.com/svc/topstories/v2/us.json",
			params: {
				"api-key": API_KEY,
			},
			method: "get",
		}).catch((err) => console.log(err))
	);
	promises.push(
		await axios({
			url: "https://api.nytimes.com/svc/topstories/v2/world.json",
			params: {
				"api-key": API_KEY,
			},
			method: "get",
		}).catch((err) => console.log(err))
	);
	console.log(promises);
	var data = promises.map((el) => el?.data?.results).flat();
	res.send(data);
});
module.exports = router;
