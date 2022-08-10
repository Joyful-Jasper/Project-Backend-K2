const { OrderItemModel } = require("../model");

module.exports = {
    getAllOrder: async (req, res) => {
        const users = await OrderItemModel.find({});
        console.log(users);

        try {
            res.json({
                message: "berhasil ambil data semua user",
                data: users,
            });
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    //  Post 
    //  Get Orders item by id
}
