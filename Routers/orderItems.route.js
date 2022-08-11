const express = require("express");
const router = express.Router();

const {
   getAllOrderItems,

} = require("../Controllers/OrdersItemsController")

router.get("/",getAllOrderItems)

module.exports = router;