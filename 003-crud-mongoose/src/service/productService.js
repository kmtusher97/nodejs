const Product = require('../model/product');

const createProduct = async ({ productPayload }) => {
  const product = new Product(productPayload);
  return await product.save();
};

module.exports = {
  createProduct,
};
