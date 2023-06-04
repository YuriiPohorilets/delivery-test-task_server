const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  productId: {
    type: String,
    required: [true, 'Product is required'],
  },

  shopId: {
    type: String,
    required: [true, 'Shop is required'],
  },

  customer: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Customer is required'],
  },

  totalValue: {
    type: Number,
    required: [true, 'Total value is required'],
  },

  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },

  address: {
    type: String,
    required: [true, 'Address is required'],
  },

  phone: {
    type: String,
    required: [true, 'Phone is required'],
  },
});

const Order = model('orders', orderSchema);

module.exports = Order;
