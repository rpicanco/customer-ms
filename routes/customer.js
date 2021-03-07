const express = require('express');

const isvalidSchema = require('../middlewares/schemaValidator');
const customerService = require('../services/customerService');

const router = express.Router();

router.post('/customers', isvalidSchema, customerService.createCustomer);

module.exports = router;