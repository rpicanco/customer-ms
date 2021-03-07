const customerDomain = require('../domain/customer');

module.exports = (req, res, next) => {

    const _validationOptions = {
        abortEarly: false
    };

    const input = req.body;

    const { error } = customerDomain.validate(input, _validationOptions);

    if (error) {
        const err = new Error();
        err.status_code = 400;
        err.code = "input-validation",
        err.detail = error.details
        throw err;
    }
    next()
};

