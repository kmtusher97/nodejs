const createProduct = async (req, res) => {
  console.log(req.body);
  res.send('product created');
};

module.exports = {
  createProduct,
};
