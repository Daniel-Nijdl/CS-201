const express = require("express");
const router = express.Router();

const { calcTotal, completePayment } = require("../controllers/stripeCon");

router.route("/purchase").put(calcTotal).post(completePayment);

module.exports = router;
