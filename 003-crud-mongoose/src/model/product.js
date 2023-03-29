const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  unit: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
