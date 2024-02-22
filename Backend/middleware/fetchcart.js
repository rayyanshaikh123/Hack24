const Cart = require('../Models/Cart');

const fetchcart = async (req, res, next) => {
    try {
        // Fetch the cart associated with the user
        const cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            return res.status(404).json({ error: "Cart not found for this user" });
        }

        req.cart = cart;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = fetchcart;
