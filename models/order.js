const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderDate: { type: Date, default: Date.now },
    customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    shippingAddressID: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    billingAddressID: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', OrderSchema);
