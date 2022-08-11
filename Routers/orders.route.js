const express = require("express");
const router = express.Router();

const {
    getAllOrders,
    getOrderByID,
    addOrder
} = require("../Controllers/OrdertsController")

router.get("/", getAllOrders)
router.get("/:id", getOrderByID)
router.post("/", addOrder)

module.exports = router;