const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
// app.use(authMiddleware); // added this globally so no api call can be made without login.

// Routes
app.use('/api/users', userRoutes);
app.use('/api/passwords', authMiddleware, passwordRoutes);
// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
