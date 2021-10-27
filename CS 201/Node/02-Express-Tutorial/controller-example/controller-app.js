const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

app
  .use(express.static("../public"))
  .use([express.urlencoded({ extended: false }), express.json()])

  .use("/login", auth)
  .use("/api/people", people)

  .listen(3000, () => console.log("listening @ 3000"));
