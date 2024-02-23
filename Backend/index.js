const express = require('express');
const connectTOMongo = require('./db');
const cors = require('cors');
const app = express();

connectTOMongo();
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000',
    method:["GET","POST"]
  };
  
  app.use(cors(corsOptions));
//routes

app.use('/user' , require('./routers/auth'))
app.use('/api/product',require('./routers/product'))
app.use('/api/cart',require('./routers/cart'))
app.use('/api/cartr',require('./routers/cartRoutes'))

app.get('/', (req,res)=>{
    res.send("Hey");
})
app.listen(5000,()=>{
    console.log("Listening to port 5000")
})