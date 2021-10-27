const express = require('express')
const app = express();
require('dotenv').config()
const connectDB = require("./db/connect")


app.get('/', (req, res) => {
  res.send("home")
})

