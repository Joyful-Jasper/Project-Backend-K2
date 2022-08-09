const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
  },
  category: [{ type: Schema.Types.ObjectId, ref: 'categoryModel' }],
  img_url: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  }
});

const productsModel = mongoose.model("Products", productsSchema);

module.exports = productsModel;
