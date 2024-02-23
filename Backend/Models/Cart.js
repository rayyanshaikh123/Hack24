const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = new Schema({
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
    totalUniqueProducts: {
        type: Number,
        default: 0 // Default total unique products is 0
    },
    cartAmmount: {
        type: Number,
        default: 0 // Default total price is 0
    },
    shippingCharges:{
        type: Number,
        default:130
    }

}, { timestamps: true });

// Calculate cartAmmount before saving
cartSchema.pre('save', function (next) {
    let totalAmount = 0;
    this.items.forEach(item => {
        totalAmount += item.totalPrice;
    });
    this.cartAmmount = totalAmount + this.shippingCharges; // Add shipping charges to the total amount
    next();
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
