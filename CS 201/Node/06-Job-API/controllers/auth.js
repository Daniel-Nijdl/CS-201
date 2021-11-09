const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  // // encrypting is storing your data behind a firewall
  // // hashing scrambles your data into a string of uniform size
  // const { name, password, email } = req.body;
  // console.log(password);

  // // salt - a random bit combination (1101010) that is included in the hash
  // //the salt is then added to the hash so the verifier can check even with randomness

  // // pepper - this adds a single letter [a-zA-Z] to the end of your password

  // const salt = await bcrypt.genSalt(10);
  // const hashpass = await bcrypt.hash(password, salt);
  // console.log(hashpass);
  // Hashpass Example: $2b$10$z3JZDz5LypIHOE21Elc/Duzt6eU/YU0FBwGasF/S/iqpCfYJ3tZF6

  const newUser = await User.create(req.body);

  res.json({ newUser });
};

const login = (req, res) => {
  res.send("login");
};

module.exports = { register, login };
