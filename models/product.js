const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
  },

  price: {
    type: Number,
  },

  description: {
    type: String,
  },

  imgUrl: {
    type: String,
  },

  shop: {
    type: Schema.Types.ObjectId,
    ref: 'shop',
  },
});

const Product = model('products', productSchema);

module.exports = Product;
