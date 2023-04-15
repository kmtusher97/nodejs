const asyncHandler = require('express-async-handler');
const ProductService = require('../service/productService');

const createProduct = asyncHandler(async (req, res) => {
  res.status(201).json(
    await ProductService.createProduct({
      productPayload: req.body,
    })
  );
});

const getProductList = asyncHandler(async (req, res) => {
  res.status(200).json(await ProductService.getProductList());
});

const getProductById = asyncHandler(async (req, res) => {
  res.status(200).json(await ProductService.getProductById(req.params.id));
});

const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json(
    await ProductService.updateProduct({
      id: req.params.id,
      payload: req.body,
    })
  );
});

const deleteProductById = asyncHandler(async (req, res) => {
  res.status(200).json(await ProductService.deleteProductById(req.params.id));
});

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProductById,
};
