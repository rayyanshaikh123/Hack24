const express = require("express");
const bcrypt = require("bcrypt");
const JWT_token = "securekey35*3%^";

var jwt = require("jsonwebtoken");
const Router = express.Router();
const User = require("../Models/User");
const Seller = require("../Models/Seller");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const fetchseller = require("../middleware/fetchseller");
Router.post("/", [body("email").isEmail(), body("phone_no").isLength({ min: 10 }),body("username").isLength({min:3}), body("password").isLength({ min: 7 })], async (req, res) => {
  try {
    // route 1validating the values first then accordingly inserting the data in db
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).errors.array();
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: secPass,
      phone_no: req.body.phone_no,
      shippingAddress:req.body.shippingAddress,
      images: req.body.images
    });
    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_token);

    await user.save();
    res.json({ authtoken });
    //res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

//  route 2  authentcate user login api/auth/login
Router.post("/login", [body("email").isEmail(), body("password").isLength({ min: 7 })], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_token);
    res.json({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
// route 3 get user data logged in 
Router.post('/getuser',  fetchuser ,async (req, res) => {

try{
   userid= req.user.id;
  const user = await User.findById(userid).select("-password")
  res.send(user);

}catch(error){
  console.error(error.message);
  res.status(500).send("Server Error");


}})




//route register seller 
Router.post("/sellerreg", [body("email").isEmail(),body("username").isLength({min:3}), body("phone_no").isLength({ min: 10 }), body("password").isLength({ min: 7 })], async (req, res) => {
  try {
    // route 1validating the values first then accordingly inserting the data in db
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).errors.array();
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    //create new user
    const seller = new Seller({
      username: req.body.username,
      email: req.body.email,
      password: secPass,
      phone_no: req.body.phone_no,
    });
    const data = {
      seller: {
        id: seller.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_token);

    await seller.save();
    res.json({ authtoken });
    //res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});
//route5 seller fetch 
Router.post('/getseller',  fetchseller ,async (req, res) => {

  try{
     sellerid= req.seller.id;
    const seller = await Seller.findById(sellerid).select("-password")
    res.send(seller);
  
  }catch(error){
    console.error(error.message);
    res.status(500).send("Server Error");
  
  
  }})

module.exports = Router;
