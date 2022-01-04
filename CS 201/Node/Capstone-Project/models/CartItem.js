const mongoose = require("mongoose");

const cartItem = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("CartItem", cartItem);