const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Make sure to replace with your actual secret

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get the token from the Authorization header

    if (!token) {
        return res.status(401).json({ error: 'Authentication required' }); // Unauthorized
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' }); // Invalid token
    }
};

module.exports = authMiddleware;
