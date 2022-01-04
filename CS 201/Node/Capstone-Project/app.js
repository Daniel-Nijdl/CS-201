//Environment Setup
require("express-async-errors");
require("dotenv").config();

//App Cores
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

// const { sendEmail, resetEmail } = require("./controller/emailController")
const stripeController = require("./controllers/stripeCon");

//Extra Security
//TODO const rateLimiter = require("express-rate-limit")
//TODO const helmet = require("helmet");
//TODO const cors = require("cors");
//TODO const css = require("xss-clean");

//Routes
// const productRouter = require("./routes/addProducts");
//TODO const cartRouter = require("./routes/store");
//TODO const purchaseRouter = require("./routes/purchase");
const uploadRouter = require("./routes/uploadRouter");
const productsRouter = require("./routes/productsRouter")

//Middleware
//TODO const notFoundMiddleware = require("./middleware/not-found")
//TODO const errorHandlerMiddleware = require("./middleware/error-handler")
const cloudinary = require("cloudinary").v2;

//SwaggerUI
//TODO const swaggerUI = require("swagger-ui-express");
//TODO const YAML = require("yamljs")

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

//Variable Declarations
const port = process.env.PORT || 3000;
const minutes = 1000 * 60;



app






  // .set("trust proxy", 1)
  // .use(
  //   rateLimiter({
  //     windowMs: 15 * minutes,
  //     max: 100,
  //   })
  // )
  .use([express.urlencoded({ extended: false }), express.json()])
  .use(fileUpload({ useTempFiles: true }))
  // .use(helmet())
  // .use(cors())
  // .use(xss())
  .use(express.static("./public/store"))
  .get("/", (req, res) => {
    res.send('<h1 style="text-align: center">Web Store</h1>');
  })

  // .use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
  .use("/cart", express.static("./public/cart"))
  .post("/stripe", stripeController)
  .use("/purchase", express.static("./public/purchase"))
  .use("/create", express.static("./public/addProducts"))
  .use('/api/v1/products/uploads', uploadRouter)
  // .use("/api/v1/cart/upload", productsRouter)
  .use('/api/v1/products', productsRouter)
  // .use('/api/v1/cart', cartRouter)
// .use(notFoundMiddleware)
// .use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server listening @ ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
