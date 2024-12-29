const mongoose = require('mongoose');
require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';

let uri;

// בודק את מצב הסביבה ומגדיר את ה-URI המתאים
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

// הדפסת המצב הנוכחי של הסביבה וה-URI שנבחר
console.log('Environment Mode:', mode);
console.log('MongoDB URI:', uri);

const connectDB = async () => {
    try {
        // ניסיון להתחבר ל- MongoDB
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // סיום התהליך במידה ויש שגיאה
    }
};

module.exports = connectDB;
