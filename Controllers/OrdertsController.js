const { json } = require("body-parser");
const { OrdersModel, ProductsModel } = require("../Models");
// 3. buat get all Order
module.exports = {
  getAllOrders: async (req, res) => {
    const orders = await OrdersModel.find({});
    console.log(orders);

    try {
      res.json({
        message: "berhasil ambil data semua user",
        data: orders,
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
  // 4. buat get Order by ID
  getOrderByID: async (req, res) => {
    const { id } = req.params
    const orders = await OrdersModel.findById(id)
    res.json({
      data: orders
    })
  },
  addOrder: (req, res) => {
    const data = req.body
    const orders = new OrdersModel(data)
    orders.save()

    res.json("succes")





  }

}
