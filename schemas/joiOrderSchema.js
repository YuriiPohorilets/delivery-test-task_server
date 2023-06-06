const Joi = require('joi');
const { phonePattern } = require('../helpers/patterns');

const joiOrderSchema = Joi.object({
  products: Joi.array().items(Joi.object()).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  name: Joi.string().min(2).max(64).required(),
  phone: Joi.string().pattern(phonePattern).required(),
  address: Joi.string().min(2).required(),
  amount: Joi.number().required(),
  shopId: Joi.string().required(),
});

module.exports = joiOrderSchema;
