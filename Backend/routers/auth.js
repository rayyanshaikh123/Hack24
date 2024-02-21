const express = require("express")
const Router = express.Router();
const User = require('../Models/User')

Router.post('/signup', async(req,res)=>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password : req.body.password
        

    })
    await user.save;
    console.log(user.json())
    res.send(user.json());
})
module.exports = Router;