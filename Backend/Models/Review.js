const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no:{ type: Number,required:true},
    shippingAddress:{  type:String ,required:true},
    images: [String]
    
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;