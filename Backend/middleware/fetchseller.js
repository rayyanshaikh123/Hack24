const jwt = require("jsonwebtoken");
const JWT_token = 'securekey35*3%^';

const fetchseller = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_token);
        req.seller = data.seller; // Ensure the payload contains 'seller' property
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).send({ error: "Invalid token" });
    }
}

module.exports = fetchseller;
