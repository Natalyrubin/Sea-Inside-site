const connectDB = require('./config/db');
const { leads } = require('./data/data');
const Lead = require('./models/Lead');
require('dotenv').config();

const seedAll = async () => {
    console.log('\nDatabase seeding started...');

    try {
        await Lead.deleteMany();
        const insertedLeads = await Lead.insertMany(leads);
        console.log(`[i] Inserted ${insertedLeads.length} leads`);
        console.log('[v] Completed successfully');
        process.exit(0);
    } catch (e) {
        console.log('[x] Seeding error');
        console.log(e.message);
        process.exit(1);
    }
};

const environment = process.env.NODE_ENV || 'development';
const mongoURI =
    environment === 'production'
        ? process.env.MONGODB_URI_PROD
        : process.env.MONGODB_URI_DEV;

connectDB(mongoURI).then(() => seedAll());
