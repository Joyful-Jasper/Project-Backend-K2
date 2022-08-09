const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
  },
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  address: {
    type: String,
    required: true,
    maxlength: 500,
  },
  phone: {
    type: mongoose.SchemaTypes.Phone,
    maxlength: 14,
    minlength: 8,
  },
  avatar: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  order: [{ type: Schema.Types.ObjectId, ref: "orderModel" }],
});

const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;
