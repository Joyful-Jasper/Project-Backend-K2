const express = require("express");
const router = express.Router();

const {getAllUser} = require("../Controllers/UserController");
 router.get("/",getAllUser)





module.exports = router;