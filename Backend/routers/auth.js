const express = require("express");
const bcrypt = require("bcrypt");
const Router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
Router.post("/", [body("email").isEmail(), body("password").isLength({ min: 7 })], async (req, res) => {
  try {
    //validating the values first then accordingly inserting the data in db
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).errors.array();
    }

    const salt =  await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: secPass,
    });

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

module.exports = Router;
