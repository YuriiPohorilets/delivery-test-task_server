const asyncHandler = require('express-async-handler');
const { getAllShops } = require('../../services/shopService');

const getContacts = asyncHandler(async (req, res) => {
  const shops = await getAllShops();

  res.status(200).json(shops);
});

module.exports = getContacts;
