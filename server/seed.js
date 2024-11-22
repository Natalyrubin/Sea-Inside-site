const connectDB = require('./config/db')
const { leads } = require('./data/data')
const Lead = require('./models/Lead')



const seedAll = async () => {

    console.log('\nDatabase seeding started...');

    try {
        await Lead.deleteMany();
        const insertedUsers = await Lead.insertMany(leads);
        console.log(`  [i] Inserted ${insertedUsers.length} leads`);
        console.log('[v] Completed successfully');
        process.exit(0);


    } catch (e) {
        console.log('[x] Seeding error')
        console.log(e.message)
        process.exit(1);

    }
}


connectDB().then(() => {
    seedAll()
});