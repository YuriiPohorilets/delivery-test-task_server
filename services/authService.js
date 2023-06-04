const User = require('../models/user');
const jwt = require('jsonwebtoken');

const findUserByEmail = async email => {
  const user = await User.findOne({ email });

  return user;
};

const registerUser = async credentials => {
  const newUser = await User.create(credentials);
  newUser.setPassword(credentials.password);

  return newUser;
};

const createToken = ({ _id }) => {
  const { SECRET_KEY } = process.env;
  const payload = { id: _id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

module.exports = {
  findUserByEmail,
  registerUser,
  createToken,
};
