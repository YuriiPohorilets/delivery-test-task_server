const asyncHandler = require('express-async-handler');
const { findUserByEmail } = require('../../services/authService');

const refresh = asyncHandler(async (req, res) => {
  const { token, email } = req.user;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ message: 'Not authorized' });
  }

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

module.exports = refresh;
