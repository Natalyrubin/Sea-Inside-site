const mongoose = require('mongoose');
require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';

let uri;
if (mode === 'production') {
    uri = process.env.MONGODB_URI_PROD;
    console.log('[i] Running in production mode');
} else if (mode === 'atlas') {
    uri = process.env.MONGODB_URI_ATLAS;
    console.log('[i] Running in Atlas mode');
} else {
    uri = process.env.MONGODB_URI_DEV;
    console.log('[i] Running in development mode');
}

console.log('[i] Environment Mode:', mode); // בדיקת המצב המוגדר
console.log('[i] MongoDB URI:', uri);       // הדפסת ה-URI שנבחר

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('[v] Successfully connected to MongoDB');
    } catch (err) {
        console.error('[x] Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
