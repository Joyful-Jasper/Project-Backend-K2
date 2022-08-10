const express = require("express");
const router = express.Router();

const {
    getAllUser,
    getUserByID,
    updateUserByID,
    deleteUserByID,
} = require("../Controllers/UsersController");
// PANGGIL DATA 
router.get("/", getAllUser);
// PANGGIL DATA MENURUT ID
router.get("/:id", getUserByID);
// UPDATE DATA MENURUT ID
router.put("/:id", updateUserByID);
// DELETE DATA MENURUT ID
router.delete("/:id", deleteUserByID);

module.exports = router;
