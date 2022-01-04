const express = require("express");
const router = express.Router();

const {
  getAllItems
  // editQuantity,
  // checkout,
} = require("../controllers/cartCon");


// router.route("/").get(getAllItems)
// router.route("/cart/:id").put(editQuantity);

module.exports = router;