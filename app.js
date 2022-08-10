const express = require("express");
const dbConnection = require("./Helpers/db");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 8000;
const router = require("./Routers");

dbConnection.then(() => console.log("Berhasil Connect")).catch((err) => console.log("Error:", err));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log("Running on port", PORT);
});
