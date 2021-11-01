const Product = require("../models/Product");

const getAllProductsStatic = async (req, res) => {
  // throw new Error("Testing Async Errors");
  const products = await Product.find({}).select("name price");
  res.json({ status: 200, msg: "static", results: products });
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
const getAllProducts = async (req, res) => {
  const { featured, company, name, numericFilters } = req.query;
  let queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
    // if (featured === "true") true else false
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numericFilters) {
    const options = ["price", "rating"];
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<=": "$lte",
      "<": "$lt",
    };
    const re = /\b(<|>|<=|=|>=)\b/g;

    //price < 50
    let filters = numerticFilters.replace(
      re,
      (match) => `-${operatorMap[match]}-`
    );
  }

  let results = await Product.find(queryObject);
  res.json({ status: 200, msg: "success", results });
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { getAllProducts, getAllProductsStatic };
