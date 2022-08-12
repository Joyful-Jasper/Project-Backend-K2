const express = require("express");
const router = express.Router();

const { postLogin } = require("../Controllers/LoginController");

router.post("/", postLogin);

module.exports = router;
