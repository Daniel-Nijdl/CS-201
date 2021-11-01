//create two routes
//  1 for /dashboard GET
//  1 for /login POST

const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/login");

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
