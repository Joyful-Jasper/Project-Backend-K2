
const { UsersModel } = require("../Models");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");


module.exports = {
    getAllUser: async (req, res) => {
        const users = await UsersModel.find({})
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
        const user = await UsersModel.findById(id)

        res.json({
            massage: "success",
            data: user
        })
    },
    updateUserByID: async (req, res) => {
        const { id } = req.params
        const user = await UsersModel.updateOne({ id: id });
        res.json({
            massage: "success update users",
            data: user
        })
    },
    deleteUserByID: async (req, res) => {
        const { id } = req.params
        const user = await UsersModel.deleteOne({ id: id });
        res.json({
            massage: "success",
            data: user
        })
    },
};