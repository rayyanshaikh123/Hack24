const mongoose = require('mongoose');
const connectTOMongo = async() =>{
    
    try{

        await   mongoose.connect('mongodb+srv://chiteshvarunvarun:Hackathon123@cluster0.bnyt92q.mongodb.net/hack');
      
        console.log("Connected to mongoose successfully");
    }catch(error){
       

        console.log(error.message);
    }

}       
module.exports = connectTOMongo;
