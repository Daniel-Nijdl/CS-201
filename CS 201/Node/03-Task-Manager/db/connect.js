const mongoose = require("mongoose");

// mongoose
//   .connect(mongo_url)
//   .then(() => console.log("connected to DB..."))
//   .catch((err) => console.log(err));

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("connect to DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

/*

* How to visualize Mongo DB *

Cluster => whole library => NYC library
  DATABASE 1 => Books in the library => Books
    COLLECTION 1 => Fiction
      DOCUMENT 1 => Harry Potter
      DOCUMENT 2 => Eragon
    COLLECTION 2 => Non-Fiction
      DOCUMENT 1 => Presidents in History
      DOCUMENT 2 => Cook Books
  DATABASE 2 => Videos in the library => Videos
    ...
  DATABASE 3 => People with lib. cards => Patrons
    ...


*/