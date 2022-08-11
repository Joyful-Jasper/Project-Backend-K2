const { Router } = require("express");
const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductsByID,
    addProducts,
    updateProductsByID,


} = require("../Controllers/ProductsController");

router.get("/", getAllProducts)
router.get("/:id", getProductsByID)
router.post("/:id", addProducts)
router.put("/", updateProductsByID)




module.exports = router;