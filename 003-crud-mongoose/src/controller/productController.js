const { json } = require("body-parser");
const ProductService = require("../service/productService");

const createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct({
      productPayload: req.body,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getProductList = async (req, res) =>
  res.status(200).json(await ProductService.getProductList());

const getProductByName = async (req, res) => {
  try {
    const product = await ProductService.getProductByName({
      productName: req.params.productName,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
module.exports = {
  createProduct,
  getProductList,
  getProductByName,
};
