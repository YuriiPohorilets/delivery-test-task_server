const { Order } = require('../models');

const createNewOrder = async order => {
  const newOrder = await Order.create(order);
  await newOrder.save();

  return newOrder;
};

module.exports = {
  createNewOrder,
};
