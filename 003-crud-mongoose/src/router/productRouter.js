const { Router } = require('express');

const ProductController = require('../controller/productController');

const productRouter = Router();

productRouter.post('/', ProductController.createProduct);
productRouter.get('/', ProductController.getProductList);
productRouter.get('/:id', ProductController.getProductById);
productRouter.patch('/:id', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProductById);

module.exports = productRouter;
