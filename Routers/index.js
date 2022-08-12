const express = require("express");
const router = express.Router();

// const userRoutes = require('./user')
const usersRoutes = require("./users.route");
const productsRoutes = require("./products.route");
const ordersRoutes = require("./orders.route");
const orderItemsRoutes = require("./orderItems.route");
const categoriesRoutes = require("./categories.route");
const registerRoutes = require("./register.router");
const loginRoutes = require("./login.router");
const { authenticateJWT } = require("../Controllers/authJwt");

router.get("/", (req, res) => {
	res.json("Welcome to Terra Petshop");
});

// router.use("/users", userRoutes)
router.use("/users", authenticateJWT, usersRoutes);
router.use("/products", authenticateJWT, productsRoutes);
router.use("/orders", authenticateJWT, ordersRoutes);
router.use("/orderItems", authenticateJWT, orderItemsRoutes);
router.use("/categories", authenticateJWT, categoriesRoutes);
router.use("/register", registerRoutes);
router.use("/login", loginRoutes);

module.exports = router;
