const express = require("express");
const router = express.Router();

const {
     getAllCategories,
     getCategoriesByID,
     addCategories,
     updateCategoriesByID,
     deleteCategoriesByID
} = require("../Controllers/CategoriesController")

router.get("/", getAllCategories)
router.get("/:id", getCategoriesByID)
router.post("/", addCategories)
router.put("/:id", updateCategoriesByID)
router.delete("/:id", deleteCategoriesByID)


module.exports = router;