const express = require("express");
const router = express.Router();

const {
    getAllCategorie,
} = require("../Controllers/CategoriesController")

router.get("/", getAllCategorie)


module.exports = router;