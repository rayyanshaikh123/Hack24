const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    stockQuantity: { type: Number, default: 0 },
    // other fields as needed
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;