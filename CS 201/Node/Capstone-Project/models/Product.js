const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a product name"],
    unique: true,
  },
  price: {
    type: String,
    required: [true, "Must provide a product price"],
  },
  image: {
    type: String,
    required: [true, "Must provide a product image"],
  },
});

module.exports = mongoose.model("Product", productSchema);
