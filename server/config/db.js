const mongoose = require('mongoose');
require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';

let uri;
if (mode === 'production') {
    uri = process.env.MONGODB_URI_PROD;
    console.log('Running in production mode');
} else if (mode === 'atlas') {
    uri = process.env.MONGODB_URI_ATLAS;
    console.log('Running in Atlas mode');
} else {
    uri = process.env.MONGODB_URI_DEV;
    console.log('Running in development mode');
}

console.log('Environment Mode:', mode); // בדקי איזה מצב מוגדר
console.log('MongoDB URI:', uri);       // הדפיסי את ה-URI שנבחר


const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
