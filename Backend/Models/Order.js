const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user model
        required: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product' // Reference to the product model
        },
        quantity: {
            type: Number,
            default: 1 // Default quantity is 1
        },
        totalPrice: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    paymentMode: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'Net Banking', 'UPI', 'Wallet'], // Payment mode options
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    // Add other fields as needed
}, { timestamps: true });


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;