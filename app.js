const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");

const dbConnection = require("./Helpers/db");
const router = require("./Routers");

const app = express();
const PORT = process.env.PORT || 8000;

dbConnection.then(() => console.log("Berhasil Connect")).catch((err) => console.log("Error:", err));

app.use(cors());
app.use(express.json());
app.use(bodyParse.json());
app.use(router);

app.listen(PORT, () => {
	console.log("Running on port: ", PORT);
});
