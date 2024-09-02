const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    supplierID: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    imageURL: String
});

module.exports = mongoose.model('Product', ProductSchema);
