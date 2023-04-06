const { Router } = require('express');

const ProductController = require('../controller/productController');

const productRouter = Router();

productRouter.post('/', ProductController.createProduct);
productRouter.get('/', ProductController.getProductList);
productRouter.get('/:pid', ProductController.getProductById);
productRouter.patch('/:pid', ProductController.updateProduct)
productRouter.get('/productname/:productName', ProductController.getProductByName);
productRouter.delete('/:pid', ProductController.deleteProductById)
module.exports = productRouter;
