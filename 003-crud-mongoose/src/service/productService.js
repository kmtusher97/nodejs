const Product = require("../model/product");

const createProduct = async ({ productPayload }) => {
  const product = new Product(productPayload);
  return await product.save();
};

const getProductList = async () => await Product.find().lean();

const getProductByName = async (productName) => {
  const newProduct = await Product.findOne({ name: productName });
  if (!newProduct) {
    throw new Error("Product not found!!!");
  }
  return newProduct;
};

const getProductById = async (pid) => await Product.findById(pid).lean();

const updateProduct = async (pid, payload) => await Product.findByIdAndUpdate(pid, payload);

const deleteProductById = async (pid) => await Product.deleteOne({ _id: pid });

module.exports = {
  createProduct,
  getProductList,
  getProductByName,
  updateProduct,
  getProductById,
  deleteProductById,
};
