const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            default: 1
        },
        totalPrice: {
            type: Number,
            required: true
        },
        productName: String, // Add productName field
        productImg: String    // Add productImg field
    }],
    totalUniqueProducts: {
        type: Number,
        default: 0
    },
    cartAmount: {
        type: Number,
        default: 0
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
