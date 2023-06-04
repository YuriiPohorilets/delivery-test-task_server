const asyncHandler = require('express-async-handler');
const { findUserById, verifyToken } = require('../services/authService');

const auth = asyncHandler(async (req, res, next) => {
  const { SECRET_KEY } = process.env;
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (!token || bearer !== 'Bearer') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const id = verifyToken(token, SECRET_KEY);
    const user = await findUserById(id);

    if (!user || !user.token) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = auth;
