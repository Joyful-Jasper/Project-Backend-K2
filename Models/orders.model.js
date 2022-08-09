const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  date: {
    type: date,
    required: true,
  },
  payment: {
    type: boolean,
  },
});

const ordersModel = mongoose.model("Orders", ordersSchema);

module.exports = ordersModel;
