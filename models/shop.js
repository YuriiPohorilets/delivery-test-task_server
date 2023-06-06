const { model, Schema } = require('mongoose');

const shopSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  location: {
    type: String,
  },

  imgUrl: {
    type: String,
  },
});

const Shop = model('shop', shopSchema);

module.exports = Shop;
