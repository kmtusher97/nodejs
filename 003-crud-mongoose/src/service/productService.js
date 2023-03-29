const Product = require("../model/product");

const createProduct = async ({ productPayload }) => {
  const product = new Product(productPayload);
  return await product.save();
};

const getProductList = async () => await Product.find().lean();

const getProductByName = async ({ productName }) => {
  const newProduct = await Product.findOne({ name: productName });
  if (!newProduct) {
    throw new Error("Product not found!!!");
  }
  return newProduct;
};


module.exports = {
  createProduct,
  getProductList,
  getProductByName,
};
