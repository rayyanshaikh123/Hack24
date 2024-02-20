const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productschema = new Schema({
    name:{
        type: String,
        required:true
    },
    image:{
        type: [],
        required:true
    },
    title:{
        type: String,
        required:true
       
    },
    desc:{
        type: String,
        required:true
       
    },
    date:{
        type:Date,
        default: Date.now
    }
});
const Product = mongoose.model('product', productschema);
module.exports = Product;
