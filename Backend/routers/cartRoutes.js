// cartRoutes.js

const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const fetchcart = require('../middleware/fetchcart');
const Cart = require('../Models/Cart');

// Route to fetch the user's cart
router.get('/getcart', fetchuser, fetchcart, async (req, res) => {
    try {
        // Send the cart associated with the user as response
        res.json(req.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

// Route to remove item from cart
router.post('/remove-from-cart', fetchuser, fetchcart, async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cart = req.cart;

        // Find index of the item in the cart
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex === -1) {
            return res.status(404).json({ error: "Product not found in cart" });
        }

        const item = cart.items[itemIndex];

        if (item.quantity <= quantity) {
            // If requested quantity is greater than or equal to item quantity, remove the entire item
            cart.items.splice(itemIndex, 1);
            cart.totalUniqueProducts--;
            cart.cartAmmount -= item.totalPrice;
        } else {
            // Otherwise, decrement the quantity
            item.quantity -= quantity;
            item.totalPrice -= item.product.price * quantity; // Adjust total price
            cart.cartAmmount -= item.product.price * quantity;
        }

        // Ensure totalPrice and cartAmmount are valid numbers
        cart.totalPrice = cart.items.reduce((total, item) => total + item.totalPrice, 0);
        cart.cartAmmount = cart.totalPrice; // Assuming cartAmmount should be the same as totalPrice

        // Save the updated cart
        await cart.save();

        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});



module.exports = router;
