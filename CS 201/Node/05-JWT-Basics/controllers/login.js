// const CustomAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken")
require("dotenv").config();

//login function returns a json with success
const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // res.send("temp login/register/signup route")

  //there are 3 big wyas to verify username/password
  //-mongoose validation
  //-JOI
  //Controller checking

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //this is just an example, in the future this will come from MongoDB
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // res.json({ status: 200, msg: "Success", results: [] });
  //Token = header, payload, signature(make complicated)
  
  console.log(token);
  res.status(200).json({ status: 200, msg: "success - User Created", token });
};

//dashboard function returns a json with success

const dashboard = (req, res) => {
  // throw new CustomAPIError('testing API', 504);
  res.json({
    status: 200,
    msg: req.user.username,
    // results: [],
    secret: req.headers.authorization,
  });
};

module.exports = { login, dashboard };
