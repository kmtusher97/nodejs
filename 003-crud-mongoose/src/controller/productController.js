const ProductService = require('../service/productService');

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

const getProductById = async (req, res) => {
  try {
    res.status(200).json(await ProductService.getProductById(req.params.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    res.status(200).json(
      await ProductService.updateProduct({
        id: req.params.id,
        payload: req.body,
      })
    );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteProductById = async (req, res) => {
  try {
    res.status(200).json(await ProductService.deleteProductById(req.params.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProductById,
};
