const { Shop, Product } = require('../models');

const getAllShops = async () => {
  const shops = await Shop.find({});

  return shops;
};

const getShopProducts = async (shopId, page, limit) => {
  const skip = (page - 1) * limit;

  const products = await Product.find({ owner: shopId }, ' ', {
    skip,
    limit: Number(limit),
  }).populate({
    path: 'shops',
    model: 'Shop',
    localField: '_id',
    strictPopulate: false,
  });

  return products;
};

module.exports = {
  getAllShops,
  getShopProducts,
};
