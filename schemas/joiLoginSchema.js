const Joi = require('joi');

const joiLoginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(2).max(32).required(),
});

module.exports = joiLoginSchema;
