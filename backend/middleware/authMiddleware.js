// middleware/authMiddleware.js
require('dotenv').config();

const protectRoute = (req, res, next) => {
    const password = req.header('x-password');

    if (!password) {
        return res.status(401).json({ error: 'Password is required' });
    }

    if (password !== process.env.PROTECT_PASSWORD) {
        return res.status(403).json({ error: 'Invalid password' });
    }

    next();
};

module.exports = protectRoute;
