const mongoose = require('mongoose');
require('dotenv').config();

const mode = process.env.NODE_ENV;

let uri;
if (mode === 'prod') {
    uri = process.env.MONGODB_URI_PROD;
    console.log('Running in production mode');
} else if (mode === 'atlas') {
    uri = process.env.MONGODB_URI_ATLAS;
    console.log('Running in Atlas mode');
} else {
    uri = process.env.MONGODB_URI_DEV;
    console.log('Running in development mode');
}

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
