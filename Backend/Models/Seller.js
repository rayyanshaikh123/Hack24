const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no:{ type: Number,required:true},
    shippingAddress: String,
    billingInformation: String,
}, { timestamps: true });

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;