const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    maxLength: [10, 'name should contain at max 10 letters'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    min: [0, 'price cannot be negative'],
    max: [100000, 'price cannot be greater than 10000'],
  },
  quantity: { type: Number, default: 0 },
  unit: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
