const Joi = require('joi');
const { phonePattern } = require('../helpers/patterns');

const joiRegisterSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(2).max(32).required(),
  name: Joi.string().min(2).max(64).required(),
  phone: Joi.string().pattern(phonePattern).required(),
  address: Joi.string().min(2).required(),
});

module.exports = joiRegisterSchema;
