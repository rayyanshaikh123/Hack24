const express= require('express');
const router =express.Router();
const Product = require("../Models/Product");
const fetchseller = require('../middleware/fetchseller');
const { body, validationResult } = require("express-validator");
//route 1 gett all products seller
router.get('/productsfetch', fetchseller, async (req,res )=>{
    try{
        const products= await Product.find({seller: req.id});//replace user with seller 
    res.json(products)
    }catch(error){
        res.status(500).send("internal server error")
    }
    
    
})
// add product
router.post('/productsadd', fetchseller, [
   
    body("title").isLength({min:3}),
    body("description").isLength({min:10}),
    body("category").isLength({min:3}),
    body("price").isNumeric(),
    body("stockQuantity").isNumeric(),
    body("images").isArray({ min: 1 })
    

 ],async (req,res )=>{
    try{
     // Check for validation errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }
     //const{title,description,category,price,stockQuantity,images}=req.body;
     const product = new Product({
        user: req.seller.id, // Assuming you set req.seller in fetchseller middleware
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        stockQuantity: req.body.stockQuantity,
        images: req.body.images
    });
    // Save the product to the database
     const savedproduct=await product.save();
    res.json(savedproduct)
}catch(error){
    res.status(500).send("internal server error")

}
    
})

module.exports=router