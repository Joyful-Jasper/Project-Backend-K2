const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

const categoriesModel = mongoose.model("Categories", categoriesSchema);

module.exports = categoriesModel;
