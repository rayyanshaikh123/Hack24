const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,
        ref:'seller'

    },
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    stockQuantity: { type: Number, default: 0 },
    images: [String] 
    // other fields as needed
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;