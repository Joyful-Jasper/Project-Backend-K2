const express = require("express");
const router = express.Router();

const {
    getAllProducts,

} = require("../Controllers/ProductsController");

router.get("/",getAllProducts)




module.exports = router;