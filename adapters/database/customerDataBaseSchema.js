const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        birth_date: {
            type: String,
            required: true
        },
        revenue: {
            type: String,
            required: true
        },
        phone_number: {
            type: String,
            required: false
        },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Customer', customerSchema);