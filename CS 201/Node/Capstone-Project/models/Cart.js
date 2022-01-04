const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product: {
    type: String,
  },
  total: {
    type: Number,
    default: 0
  },
});

module.exports = mongoose.model("Cart", cartSchema);
