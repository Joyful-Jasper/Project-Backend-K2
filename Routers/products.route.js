const { Router } = require("express");
const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductsByID,
    addProducts,
    updateProductsByID,
    deleteProductByID


} = require("../Controllers/ProductsController");

router.get("/", getAllProducts)
router.get("/:id", getProductsByID)
router.post("/", addProducts)
router.put("/:id", updateProductsByID)
router.delete("/:id", deleteProductByID)


module.exports = router;