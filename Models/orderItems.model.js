const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderItemsSchema = new mongoose.Schema({
  product: [{ type: Schema.Types.ObjectId, ref: "productModel" }],
  quantity: {
    type: Number,
    required: true,
    maxlength: 5,
  },
  sub_total: {
    type: Number,
    required: true,
  },
  order: [{ type: Schema.Types.ObjectId, ref: "orderModel" }],
});

const orderItemsModel = mongoose.model("Order-Items", orderItemsSchema);

module.exports = orderItemsModel;
