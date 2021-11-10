const User = require("../models/User");
const bcrypt = require("bcrypt");
const { BadRequestError, UnAuthError } = require("../errors");

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
  const token = newUser.createJWT();
  res.json({ user: { name: newUser.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide an email and password");
  }

  const userLogin = await User.findOne({ email });

  if (!userLogin) {
    throw new UnAuthError("Invalid Credentials");
  }

  const isPasswordCorrect = await userLogin.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthError("Invalid Credentials");
  }

  const token = userLogin.createJWT();
  res.json({ user: { name: userLogin.name }, token });
};

module.exports = { register, login };
