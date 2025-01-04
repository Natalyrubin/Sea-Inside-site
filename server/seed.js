// seed.js
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
        console.error('[x] Seeding error');
        console.error(e.message);
        process.exit(1);
    }
};

const mongoURI = process.env.MONGODB_URI;

connectDB(mongoURI).then(() => seedAll());
