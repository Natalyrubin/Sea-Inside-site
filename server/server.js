// Require
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
console.log('Environment:', process.env.NODE_ENV);

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
        ],
        methods: ['GET', 'POST', 'PUT', 'OPTIONS'], // הוסף OPTIONS
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true, // תמיכה באימות אם נדרש
    })
);


// Routes
app.use('/api/leads', require('./routes/leadsRoutes'));


// Connect to MongoDB
const environment = process.env.NODE_ENV;
const mongoURI =
    environment === 'production'
        ? process.env.MONGODB_URI
        : process.env.MONGODB_URI_DEV;

if (!mongoURI) {
    console.error('MongoDB URI is not defined. Check your environment variables.');
    process.exit(1); // Exit the process with an error code
}

// Start server
const PORT = process.env.PORT || 3000;




connectDB(mongoURI)
    .then(() => {
        console.log(`[v] Connected to MongoDB (${environment} environment)`);

        app.listen(PORT, () =>
            console.log(`Server is running at ${process.env.BASE_URL}:${PORT}`)
        );
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with an error code
    });


console.log('MongoDB URI:', mongoURI);

module.exports = app;
