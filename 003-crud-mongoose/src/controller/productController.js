const ProductService = require('../service/productService');

const createProduct = async (req, res) => {
  const productPayload = req.body;

  // validation
  if (!productPayload.name || !productPayload.price) {
    res.status(400).json('invalid payload');
    return;
  }

  try {
    const product = await ProductService.createProduct({
      productPayload,
    });
    res.status(201).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createProduct,
};
