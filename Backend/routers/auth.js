const express = require("express")
const Router = express.Router();
const User = require('../Models/User')

Router.post('/', async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    console.log(req.body)
    res.send(req.body);
})
module.exports = Router;