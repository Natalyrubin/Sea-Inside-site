// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

console.log('Environment:', process.env.NODE_ENV);

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use(
    cors({
        origin: [
            'https://www.sea-inside.co.il',
            'https://sea-inside.co.il',
        ],
        methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);

// Routes
app.use('/api/leads', require('./routes/leadsRoutes'));

// MongoDB URI
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error('MongoDB URI is not defined. Check your environment variables.');
    process.exit(1);
}

// Start server
const PORT = process.env.PORT || 3000;

connectDB(mongoURI)
    .then(() => {
        console.log(`[v] Connected to MongoDB (${process.env.NODE_ENV} environment), ${mongoURI}`);

        app.listen(PORT, () =>
            console.log(`Server is running at ${process.env.BASE_URL}:${PORT}`)
        );
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    });

module.exports = app;
