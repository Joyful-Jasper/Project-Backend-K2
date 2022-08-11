const { OrderItemModel } = require("../Models");

module.exports = {
    getAllOrderItems: async(req, res) => {
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
    //  AddAllOlder

    //  Get Orders item by id
}
