const { Router } = require('express');

const ProductController = require('../controller/productController');

const productRouter = Router();

productRouter.post('/products', ProductController.createProduct);
productRouter.get('/products', ProductController.getProductList);

module.exports = productRouter;
