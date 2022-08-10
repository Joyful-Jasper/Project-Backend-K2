const { userModel } = require("../Models");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

module.exports = {
    getAllUser: async (req, res) => {
        const users = await userModel.find({})
        console.log(users)

        try {
            res.json({
                massage: "berhasil ambil data semua user",
                data: users,
            });
        } catch (err) {
            console.log(err);
            res.status(404)
        }
    },

    getUserByID: async (req, res) => {
        const { id } = req.params
        const user = await userModel.findById(id)

        res.json({
            massage: "success",
            data: user
        })
    },
    updateUserByID: (req, res) => {
        const { id } = req.params
        const user = await userModel.updateOne(id)
        res.json({
            data: user
        })
    },
    deleteUserByID: (req, res) => {
        const { id } = req.params
        const user = await userModel.deleteOne(id)
        req.json({
            data: user
        })
    },
};