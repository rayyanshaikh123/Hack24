const mongoose = require('mongoose');
const connectTOMongo = async() =>{
    try{
        await   mongoose.connect('mongodb://localhost:27017/inotebook');
        console.log("Connected to mongoose successfully");
    }catch(error){
        console.log(error.message);
    }

}       
module.exports = connectTOMongo;