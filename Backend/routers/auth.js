const express = require("express");
const Router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
Router.post("/", [body("email").isEmail(),
 body("password").isLength({ min: 7 })

  
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).errors.array();
    }
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

module.exports = Router;
