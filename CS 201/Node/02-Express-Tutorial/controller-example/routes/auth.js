const express = require("express");
const router = express.Router();

const {loginPerson} = require("../controllers/auth")

router.route("/login").post(loginPerson)

module.exports = router;