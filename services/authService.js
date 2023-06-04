const User = require('../models/user');
const jwt = require('jsonwebtoken');

const findUserByEmail = async email => {
  const user = await User.findOne({ email });

  return user;
};

const findUserById = async id => {
  const user = await User.findById(id);

  return user;
};

const registerUser = async credentials => {
  const newUser = await User.create(credentials);
  newUser.setPassword(credentials.password);

  await newUser.save();

  return newUser;
};

const loginUser = async (id, token) => {
  await User.findByIdAndUpdate(id, token);
};

const createToken = ({ _id }) => {
  const { SECRET_KEY } = process.env;
  const payload = { id: _id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

const verifyToken = (token, secretKey) => {
  const { id } = jwt.verify(token, secretKey);

  return id;
};

module.exports = {
  findUserByEmail,
  findUserById,
  registerUser,
  loginUser,
  createToken,
  verifyToken,
};
