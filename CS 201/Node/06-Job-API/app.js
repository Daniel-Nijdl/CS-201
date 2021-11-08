require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectDB = require("./db/connect");
const app = express();
// const routes = require("./routes/jobs")

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get("/", (req, res) => res.send("<h1>Job API</h1>"))
  // .use("/api/v1/jobs", routes)
  // .use("/api/v1/auth", routes)

  // .use(errorHandlerMiddleware)
  // .use(notFoundMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server listening @ ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()