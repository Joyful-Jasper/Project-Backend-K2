const { userModel } = requere("../Model");
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

    gerUserByID: async (req, res) => {
        const { id } = req.param
        const user = await userModel.findById(id)

        res.json({
            massage: "success",
            data: user
        })
    },

    addUser: (req, res) => {
        const data = req.body
        const user = new userModel(data)
        user.save()

        res.json("success add data user")
    },
    updateUserByID: (req, res) => { },
    deleteUserByID: (req, res) => { },
};