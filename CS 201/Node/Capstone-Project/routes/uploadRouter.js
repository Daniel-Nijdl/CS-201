const express = require("express");
const router = express.Router();

const {
  uploadProductImage,
  createProduct,
} = require("../controllers/uploadCon");

router.route("/").post(uploadProductImage);
router.route("/product").post(createProduct);

module.exports = router;
