const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const passwordRoutes = require('./routes/passwordRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/passwords', passwordRoutes);
// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
