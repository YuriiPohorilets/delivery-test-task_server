const asyncHandler = require('express-async-handler');
const { registerUser, findUserByEmail } = require('../../services/authService');
const { joiRegisterSchema } = require('../../schemas');

const register = asyncHandler(async (req, res) => {
  const { error } = joiRegisterSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { email, password, name, phone, address } = req.body;

  const user = await findUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: 'Email in use' });
  }

  await registerUser({ email, password, name, phone, address });

  res.status(201).json({
    user: {
      email,
      name,
      phone,
      address,
    },
  });
});

module.exports = register;
