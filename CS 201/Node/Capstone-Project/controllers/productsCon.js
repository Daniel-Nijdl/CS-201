const Prod = require("../models/Product");
const CartItem = require("../models/CartItem")
const { StatusCodes } = require("http-status-codes");
const { BadRequest, NotFound } = require("../errors");
const path = require("path");
const fs = require("fs");

const getAllProducts = async (req, res) => {
  const products = await Prod.find({ });
  res.json({ products, count: products.length });
};


const addToCart = async (req, res, id) => {

  const{name, price, image, id} = req.body
  // const prod = await Prod.create(req.body);
  const item = await CartItem.create({ name, price, image })

  // document.createElement("")
  res.json({ item });
};

// const getProduct = async (req, res) => {
//   const { id: prodID } = req.params;

//   const prod = await Prod.findOne({
//     _id: prodID
//   })

//   console.log(prod);
// }


// const addToCart = async (req, res) => {
//   const {name, price, image, id} = req.body
//   // const prod = await Prod.create(req.body);
//   const cartItem = await Cart.create({ name, price, image })

//   // document.createElement("")
//   res.json({ prod });
// };

// const getComp = async (req, res) => {
//   const { userID } = req.user;
//   const { id: compID } = req.params;

//   const comp = await Comp.findOne({
//     _id: compID,
//     createdBy: userID,
//   });

//   if (!comp) {
//     throw new NotFound(`No computer with id ${compID}`);
//   }

//   res.status(StatusCodes.OK).json({ comp });
// };



// const getProduct = async (req ,res) => {
//   const { id: prodID } = req.params;

//   const prod = await Product.findOne({
//     _id: prodID
//   });

// if(!prod) {
//   throw new NotFound(`No product with id ${prodID}`)
// }
// res.status(StatusCodes.OK).json({ prod })

//   res.json({ prod })
// }

// const getProduct = async (req, res) => {
//   const { id: productID } = req.params;
// }

// getAllProducts,
// getProduct,
// addToCart,

module.exports = { getAllProducts, addToCart };
