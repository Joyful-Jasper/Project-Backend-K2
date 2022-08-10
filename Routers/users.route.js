const express = require("express");

const UsersController = require("../Controllers/UserController");

const router = express.Router();

router.post("/", UsersController.CreateNewUser)



module.exports = router;