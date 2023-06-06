const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: { type: String },

  price: { type: Number },

  imgUrl: {
    type: String,
  },

  owner: { type: Schema.Types.ObjectId, ref: 'shop' },
});

const Product = model('products', productSchema);

module.exports = Product;
