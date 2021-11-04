//basic middleware

//an app that listens on port 3000 || .env

//routes to /api/v1

require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const routes = require("./routes/login");
const connectDB = require("./db/connect");
const notFoundMiddlware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .use(express.static("./public"))
  .use("/api/v1", routes)

  .use(errorHandlerMiddleware)
  .use(notFoundMiddlware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server listening at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
