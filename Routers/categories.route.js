const express = require("express");
const router = express.Router();

const {
     getAllCategories,
     getCategoriesByID,
     addCategories,
     updateCategoriesByID,
} = require("../Controllers/CategoriesController")

router.get("/", getAllCategories)
router.get("/:id", getCategoriesByID)
router.post("/", addCategories)
router.put("/:id", updateCategoriesByID)


module.exports = router;