// ./routers/cart.js

const express = require('express');
const router = express.Router();
const Cart = require('../Models/Cart');
const Product = require('../Models/Product');
const fetchuser = require('../middleware/fetchuser');

// Route to add items to the cart
router.post('/add-to-cart', fetchuser, async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Calculate the total price for this item
        const itemTotalPrice = product.price * quantity;

        // Get the user's cart or create a new one if it doesn't exist
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            cart = new Cart({
                user: req.user.id,
                items: [],
                totalUniqueProducts: 0,
                totalPrice: 0
            });
        }

        // Check if the product is already in the cart
        const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (existingItemIndex !== -1) {
            // Update quantity and total price if the product is already in the cart
            cart.items[existingItemIndex].quantity += quantity;
            cart.items[existingItemIndex].totalPrice += itemTotalPrice;
        } else {
            // Add the product to the cart if it's not already there
            cart.items.push({
                product: productId,
                quantity: quantity,
                totalPrice: itemTotalPrice
            });
            cart.totalUniqueProducts += 1; // Increment total unique products
        }

        // Update total price of the cart
        cart.totalPrice += itemTotalPrice;

        // Save the cart to the database
        await cart.save();

        // Send the updated cart as response
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

// Route to update the cart (if needed)

module.exports = router;
