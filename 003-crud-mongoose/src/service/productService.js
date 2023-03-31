const Product = require('../model/product');

const createProduct = async ({ productPayload }) => {
  const product = new Product(productPayload);
  return await product.save();
};

const getProductList = async () => await Product.find().lean();

const getProductById = async (id) => await Product.findById(id).lean();

const updateProduct = async ({ id, payload }) => {
  await Product.findByIdAndUpdate({ _id: id }, payload);
  return await getProductById(id);
};

const deleteProductById = async (id) => await Product.deleteOne({ _id: id });

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProductById,
};
