const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new customer
router.post('/register', async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
        const customer = new Customer({ name, email, password, phoneNumber });
        await customer.save();
        res.status(201).json(customer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Customer login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await Customer.findOne({ email });
        if (!customer || !(await bcrypt.compare(password, customer.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ customerId: customer._id }, 'your_jwt_secret');
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
