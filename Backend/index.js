const express = require('express');
const connectTOMongo = require('./db');
const app = express();
connectTOMongo();
//routes
// app.use('/user' , './routers/auth')

app.get('/', (req,res)=>{
    res.send("Hey");
})
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})