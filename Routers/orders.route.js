const express = require("express");
const router = express.Router();

const {
    getAllOrders,
    getOrderByID,
    addOrder,
    updateOrderByID,
    deleteOrderByID
} = require("../Controllers/OrdertsController")

router.get("/", getAllOrders)
router.get("/:id", getOrderByID)
router.post("/", addOrder)
router.put("/:id", updateOrderByID)
router.delete("/:id", deleteOrderByID)

module.exports = router;