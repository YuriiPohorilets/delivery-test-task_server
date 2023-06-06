const asyncHandler = require('express-async-handler');
const { createNewOrder } = require('../../services/orderService');
const { joiOrderSchema } = require('../../schemas');

const createOrder = asyncHandler(async (req, res) => {
  const { error } = joiOrderSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { _id: customer } = req.user;
  const { products, email, name, phone, address, shopId, amount } = req.body;

  const order = await createNewOrder({
    products,
    email,
    name,
    phone,
    address,
    shopId,
    customer,
    amount,
  });

  res.status(201).json(order);
});

module.exports = createOrder;
