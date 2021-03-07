const Joi = require('joi');

const customerDomain = Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().optional(),
    birth_date: Joi.date().iso().required(),
    revenue: Joi.number().positive().greater(0).required(),    
    phone_number: Joi.string().regex(/(\(\d{2}\)\s)(\d{4,5}\-\d{4})$/).optional()
});

module.exports = customerDomain 