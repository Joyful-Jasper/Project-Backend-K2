const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  payment_status: {
    type: Boolean,
  },
  payment_method: {
    type: String,
  },
  order_items: {
    type: Array
  },
  users: {
    // type: ObjectId
    type: ObjectId, ref: "users"
  },
  //  product: { type: Schema.Types.ObjectId, ref: "productModel" },
});

const ordersModel = mongoose.model("Orders", ordersSchema);

module.exports = ordersModel;
