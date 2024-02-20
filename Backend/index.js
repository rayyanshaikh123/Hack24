const express = require('express');
const connectTOMongo = require('./db');
const app = express();
connectTOMongo();
//routes


app.get('/', (req,res)=>{
    res.send("Hey");
})
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})