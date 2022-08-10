const express = require("express");
const router = express.Router();

const {
    getAllOrders,
} = require("../Controllers/OrdertsController")

router.get("/", getAllOrders)

module.exports = router;