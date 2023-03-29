const { Router } = require('express');

const productRouter = Router();

productRouter.post('/product', (req, res) => {
  res.status(201).send('Product created');
});

module.exports = productRouter;
