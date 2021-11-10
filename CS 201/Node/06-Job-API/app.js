const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const authRouter = require("./routes/auth")
const jobRouter = require("./routes/jobs")
require("dotenv").config();
const auth = require("./middleware/auth")

app
  .use([express.urlencoded({ extended: false }), express.json()])

  .use("/api/v1/auth", authRouter)
  .use("/api/v1/jobs", auth, jobRouter)

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