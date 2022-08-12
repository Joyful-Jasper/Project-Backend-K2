const express = require("express");
const router = express.Router();

const { postRegister } = require("../Controllers/RegisterController");

router.post("/", postRegister);

module.exports = router;
