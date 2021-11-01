//login function returns a json with success
const login = (req, res) => {
  res.json({ status: 200, msg: "Success", results: [] });
};

//dashboard function returns a json with success

const dashboard = (req, res) => {
  res.json({ status: 200, msg: "Success", results: [] });
};

module.exports = { login, dashboard };
