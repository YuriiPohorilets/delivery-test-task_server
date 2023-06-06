const asyncHandler = require('express-async-handler');
const { joiLoginSchema } = require('../../schemas');
const { findUserByEmail, loginUser, createToken } = require('../../services/authService');

const login = asyncHandler(async (req, res) => {
  const { error } = joiLoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({ message: 'Email or password is wrong' });
  }

  const token = createToken(user);

  await loginUser(user._id, token);

  res.status(200).json({
    token,
    user: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
    },
  });
});

module.exports = login;
