const ProductService = require('../service/productService');

const createProduct = async (req, res, next) => {
  try {
    res.status(201).json(
      await ProductService.createProduct({
        productPayload: req.body,
      })
    );
  } catch (error) {
    next(error);
  }
};

const getProductList = async (req, res, next) => {
  try {
    res.status(200).json(await ProductService.getProductList());
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    res.status(200).json(await ProductService.getProductById(req.params.id));
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    res.status(200).json(
      await ProductService.updateProduct({
        id: req.params.id,
        payload: req.body,
      })
    );
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    res.status(200).json(await ProductService.deleteProductById(req.params.id));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProductById,
};
