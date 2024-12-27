// Require
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

// Initialize express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/leads', require('./routes/leadsRoutes'));



const PORT = process.env.PORT;

// Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(PORT, () =>
        console.log(`Server is running at ${process.env.BASE_URL}:${PORT}`)
    );
});


module.exports = app;