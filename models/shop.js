const { model, Schema } = require('mongoose');

const shopSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  location: {
    type: String,
  },

  description: {
    type: String,
  },
});

const Shop = model('shops', shopSchema);

module.exports = Shop;
