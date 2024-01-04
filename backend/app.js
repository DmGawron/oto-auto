// import { v4 as uuidv4 } from "uuid";

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/cars", (req, res) => {
	const cars = fs.readFileSync("./available-cars.json", "utf8");
	res.json(JSON.parse(cars));
});
app.listen(3000);

app.post("/cars", (req, res) => {
	const newObj = req.body;
});

// app.post("/favorite", async (req, res) => {
// 	const favoriteData = req.body.favorite;

// 	const newFavorites = {
// 		...favoriteData,
// 		id: uuidv4(),
// 	};
// });
