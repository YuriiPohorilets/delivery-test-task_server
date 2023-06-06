const { model, Schema } = require('mongoose');

const orderSchema = new Schema(
  {
    products: {
      type: [
        {
          _id: { type: Schema.Types.ObjectId, ref: 'product' },
          name: { type: String },
          price: { type: Number },
          imgUrl: { type: String },
          quantity: { type: Number },
          owner: { type: Schema.Types.ObjectId, ref: 'shop' },
        },
      ],

      required: [true, 'Product id is required'],
    },

    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'shop',
      required: [true, 'Shop id is required'],
    },

    customer: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Customer is required'],
    },

    amount: { type: Number, required: [true, 'Amount is required'] },

    address: { type: String, required: [true, 'Address is required'] },

    name: { type: String, required: [true, 'Name is required'] },

    email: { type: String, required: [true, 'Email is required'] },

    phone: { type: String, required: [true, 'Phone is required'] },
  },

  { versionKey: false, timestamps: true }
);

const Order = model('orders', orderSchema);

module.exports = Order;
