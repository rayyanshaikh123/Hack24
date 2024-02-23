// Import necessary modules
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const Order = require('../Models/Order');
const JWT_token = 'securekey35*3%^';

// Route to place a new order
router.post('/place-order', async (req, res) => {
    try {
        // Extract the auth token from the request headers
        const authToken = req.headers['auth-token'];

        // Verify and decode the token to access its payload
        const decodedToken = jwt.verify(authToken, JWT_token);

        // Extract user ID from the decoded token
        const userId = decodedToken.user.id;

        // Extract shipping address from the decoded token, fallback to a default address if not provided
        const shippingAddress = decodedToken.user.shippingAddress || "Default Shipping Address";

        // Extract other order details from the request body
        const { items, totalPrice} = req.body;

        // Create a new order instance
        const newOrder = new Order({
            items,
            totalPrice,
            shippingAddress,
           
            user: userId
        });

        // Save the new order to the database
        const savedOrder = await newOrder.save();

        // Respond with the newly created order
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Export the router
module.exports = router;
