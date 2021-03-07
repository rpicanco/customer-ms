const Customer = require('../adapters/database/customerDataBaseSchema');

exports.createCustomer = async (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const birth_date = req.body.birth_date;
    const revenue = req.body.revenue;
    const phone_number = req.body.phone_number;

    const customer = new Customer({
        email: email,
        name: name,
        birth_date: birth_date,
        revenue: revenue,
        phone_number: phone_number
    });

    try {
        const customerSaved = await customer.save();

        res.status(201).json({
            email: customerSaved.email,
            name: customerSaved.name,
            birth_date: customerSaved.birth_date,
            revenue: customerSaved.revenue,
            phone_number: customerSaved.phone_number,
            status: customerSaved.status,
            created_at: customerSaved.created_at,
            updated_at: customerSaved.updated_at
        });
    } catch (err) {
        const error = new Error();
        if (err.code === 11000) {
            error.status_code = 422;
            error.code = "email-duplication-error";
            error.detail = err;
            next(error);
        }

        error.status_code = 500;
        error.code = "internal-server-error";
        error.detail = err
        next(error);
    }
}