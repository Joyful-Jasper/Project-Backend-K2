const express = require("express");
const router = express.Router();

const {
    getAllOrders,
    getOrderByID
} = require("../Controllers/OrdertsController")

router.get("/", getAllOrders)
router.get("/", getOrderByID)

module.exports = router;