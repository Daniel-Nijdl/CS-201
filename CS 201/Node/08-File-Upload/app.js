require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

const connectDB = require("./DB/connect");
const productRouter = require("./routes/productsRouter");

const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.use(express.static("./public"));
app.use("/api/v1/products", productRouter);
app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});
app.use("/api/v1/products", productRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Listening @ ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
