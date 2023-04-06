const { json } = require("body-parser");
const ProductService = require("../service/productService");

const createProduct = async (req, res, next) => {
  try {
    const product = await ProductService.createProduct({
      productPayload: req.body,
    });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const getProductList = async (req, res) =>
  res.status(200).json(await ProductService.getProductList());

const getProductByName = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProductService.getProductByName(req.params.productName));
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res) => {
  try {
    res.status(200).json(await ProductService.getProductById(req.params.pid));
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProductService.updateProduct(req.params.pid, req.body));
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProductService.deleteProductById(req.params.pid));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  getProductByName,
  updateProduct,
  deleteProductById,
};
