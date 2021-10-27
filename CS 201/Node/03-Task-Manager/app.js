const connect = require("./db/connect");
const express = require("express");
const app = express();
require('dotenv').config()

const taskRoute = require("./routes/tasksRoute");


app
  //decalring the html/css directory
  .use(express.static("./public"))

  //middleware
  .use([express.urlencoded({ extended: false }), express.json()])

  //routes
  .use("/api/v1/tasks", taskRoute)

  //Connect to the Database
  //then spin up the server if DB connects
const startServer = async () => {
  try{
    await connect(process.env.MONGO_URL)
    app.listen(3000, () => console.log("listening @ 3000..."));
  } catch (err) {
    console.log(err);
  }
};
startServer()

  // //listen
  // .listen(3000, () => console.log("listening @ 3000..."));

