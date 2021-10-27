const express = require("express");
const morgan = require("morgan");
const auth = require("./middleware/auth");
const app = express();
//logger middleware
const logger = require("./middleware/logger");

app
  .use([morgan("tiny"), auth])
  .get("/", (req, res) => {
    res.send("home page");
  })
  .get("/about", (req, res) => {
    res.send("about page");
  })
  .listen(3000, () => console.log("server listening at 3000..."));
