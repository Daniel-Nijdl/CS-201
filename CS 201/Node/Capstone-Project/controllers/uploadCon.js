const path = require("path");
const Prod = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, NotFound } = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");



const uploadProductImage = async (req, res) => {
  const response = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  console.log(response.secure_url);
  return res.status(200).json({ image: { src: response.secure_url } });
};




const createProduct = async (req, res) => {

  const{name, price, image} = req.body
  // const prod = await Prod.create(req.body);
  const prod = await Prod.create({ name, price, image })

  // document.createElement("")
  res.json({ prod });
};


module.exports = {
  uploadProductImage,
  createProduct
};