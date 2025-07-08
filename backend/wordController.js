const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Word = require('./models/word');

console.log(process.env.Mongo_URI);

dotenv.config();



const setWordForToday = async (word) => {
    try {
        await connectDB();

        const today = new Date().toISOString().slice(0, 10);

        const result = await Word.findOneAndUpdate(
            { date: today },
            { word: word },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        console.log(`Word for ${today} set to:`, result.word);
    } catch (error) {
        console.error('Error setting word:', error.message);
    } finally {
        await require('mongoose').disconnect();
    }
};

setWordForToday('apple'); 
