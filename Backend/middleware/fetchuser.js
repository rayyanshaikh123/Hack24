// ./middleware/fetchuser.js

const jwt = require("jsonwebtoken");
const JWT_token = 'securekey35*3%^';
const Cart = require('../Models/Cart');

const fetchuser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_token);
        req.user = data.user;

        // Check if the user has a cart, and create one if it doesn't exist
        let cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            cart = new Cart({
                user: req.user.id,
                items: [],
                totalUniqueProducts: 0,
                totalPrice: 0
            });
            await cart.save();
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(401).send({ error: "Please authenticate using valid credentials" });
    }
};

module.exports = fetchuser;
