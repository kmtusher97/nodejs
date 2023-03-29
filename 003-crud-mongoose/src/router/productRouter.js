const { Router } = require('express');

const ProductController = require('../controller/productController');

const productRouter = Router();

productRouter.post('/product', ProductController.createProduct);

module.exports = productRouter;
