const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  payment: {
    type: Boolean,
  },
});

const ordersModel = mongoose.model("Orders", ordersSchema);

module.exports = ordersModel;
