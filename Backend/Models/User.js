const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userschema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true

    },
    password:{
        type: String,
        required:true
       
    },
    date:{
        type:Date,
        default: Date.now
    }
});
const User = mongoose.model('user', userschema);

module.exports = User;