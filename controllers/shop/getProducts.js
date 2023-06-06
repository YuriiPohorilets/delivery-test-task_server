const asyncHandler = require('express-async-handler');
const { getShopProducts } = require('../../services/shopService');

const getProducts = asyncHandler(async (req, res) => {
  const { shopId } = req.params;
  const { page = 1, limit = 12 } = req.query;

  const products = await getShopProducts(shopId, page, limit);

  res.status(200).json(products);
});

module.exports = getProducts;
