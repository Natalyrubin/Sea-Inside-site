// Require
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

// Initialize express
const app = express();


// Enable CORS
app.use(cors({
    origin: 'https://www.sea-inside.co.il', // דומיין מותר
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // מתודות מותרות
    allowedHeaders: ['Content-Type', 'Authorization'], // כותרות מותרות
}));

// Custom Middleware for OPTIONS Requests
app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://www.sea-inside.co.il');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200); // Return 200 for OPTIONS
});


// Middlewares
/* app.use(cors()); */
app.use(express.json());
app.use(morgan('dev'));



// Connect to MongoDB
const environment = process.env.NODE_ENV || 'development';
const mongoURI =
    environment === 'production'
        ? process.env.MONGODB_URI_PROD
        : process.env.MONGODB_URI_DEV;

connectDB(mongoURI).then(() => {
    console.log(`[v] Connected to MongoDB (${environment} environment)`);

    // Routes
    app.use('/api/leads', require('./routes/leadsRoutes'));

    // Start server
    const PORT = process.env.PORT || 443;
    app.listen(PORT, () =>
        console.log(`Server is running at ${process.env.BASE_URL}:${PORT}`)
    );
});




module.exports = app;