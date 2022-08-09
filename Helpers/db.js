require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URL || "localhost";

const dbConnection = mongoose.connect(url);

module.exports = dbConnection;
