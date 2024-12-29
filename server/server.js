// Require
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

// Initialize express
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use(
    cors({
        origin: [
            'https://www.sea-inside.co.il',
            'https://sea-inside.co.il',
            'https://sea-inside.co.il/api/leads',
        ],
        methods: ['GET', 'POST', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// Routes
app.use('/api/leads', require('./routes/leadsRoutes'));


// Connect to MongoDB
const environment = process.env.NODE_ENV || 'development';
const mongoURI =
    environment === 'production'
        ? process.env.MONGODB_URI_PROD
        : process.env.MONGODB_URI_DEV;

if (!mongoURI) {
    console.error('MongoDB URI is not defined. Check your environment variables.');
    process.exit(1); // Exit the process with an error code
}

// Start server
const PORT = process.env;


connectDB(mongoURI)
    .then(() => {
        console.log(`[v] Connected to MongoDB (${environment} environment)`);

        app.listen(PORT, () =>
            console.log(`Server is running at ${process.env.BASE_URL}`)
        );
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with an error code
    });

console.log('MongoDB URI:', mongoURI);

module.exports = app;
