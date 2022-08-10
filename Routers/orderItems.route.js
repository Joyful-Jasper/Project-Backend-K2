const express = require("express");
const router = express.Router();

const {
    getAllOrderItem,
} = require("../Controllers/OrdersItemsController")

router.get("/", getAllOrderItem)

module.exports = router;