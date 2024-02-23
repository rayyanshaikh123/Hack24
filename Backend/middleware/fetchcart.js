const Cart = require('../Models/Cart');

const fetchcart = async (req, res, next) => {
    try {
        // Find the cart associated with the user
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');

        // Populate productName and productImg for each item in the cart
        const populatedItems = await Promise.all(cart.items.map(async (item) => {
            const product = item.product;
            return {
                ...item.toObject(),
                productName: product.title, // Assuming the title field contains the product name
                productImg: product.images[0] // Assuming images is an array and we take the first image
            };
        }));

        // Replace the items in the cart with the populated items
        cart.items = populatedItems;

        // Set the populated cart in the request object
        req.cart = cart;

        // Call next middleware
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = fetchcart;
