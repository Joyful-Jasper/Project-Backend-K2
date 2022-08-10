const express = require("express");
const router = express.Router();

// const userRoutes = require('./user')
const usersRoutes = require("./users.route");
const productsRoutes = require("./products.route");
const ordersRoutes = require("./orders.route");
const orderItemsRoutes = require("./orderItems.route");
const categoriesRoutes = require("./categories.route");

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

// router.use("/users", userRoutes)
router.use("/users", usersRoutes);
router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes);
router.use("/orderItems", orderItemsRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
