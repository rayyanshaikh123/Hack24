const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no:{ type: Number,required:true},
    shippingAddress:{  type:String ,required:true}
    // images: [String]
    
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;