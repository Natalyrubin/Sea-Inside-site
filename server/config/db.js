// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('MongoDB URI is not defined. Check your environment variables.');
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('[v] Successfully connected to MongoDB');
    } catch (err) {
        console.error('[x] Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
