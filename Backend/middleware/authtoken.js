// Middleware to verify user authentication token
const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    // Get the token from the request header
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // Verify token
        const decoded = jwt.verify(token.split(' ')[1], config.get('jwtSecret'));

        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;
