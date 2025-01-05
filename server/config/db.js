const mongoose = require('mongoose');
require('dotenv').config();

const mode = process.env.NODE_ENV || 'production'; // development
console.log(`The mode is: ${mode}`);


let uri;
if (mode === 'production') {
    uri = process.env.MONGODB_URI;
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


const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = async () => {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log("Successfully connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
