const { OrdersModel } = require("../Models");

module.exports = {
  getAllOrders: async (req, res) => {
    const users = await OrdersModel.find({});
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
  // Order 
}
