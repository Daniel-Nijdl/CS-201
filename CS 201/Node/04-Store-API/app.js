const express = require("express");
const app = express();
require("express-async-errors");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const router = require("./routes/products");

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get("/", (req, res) => res.send("<h1>Store API </h1>"))
  .use("/api/v1/products", router)

  //error handlers
  .use(errorHandler)
  .use(notFound);

//You can define your port value on PC using:
// CLI => set PORT=#### && node app.js (command prompt)
// $env:PORT=#### (powershell)
// now the PORT is set on the computer .env

//on MAC use
// starter % PORT=####
// run node and work

const port = process.env.PORT || 3000;

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`listening @ ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startApp();
