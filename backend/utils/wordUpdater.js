const Word = require('../models/word');
const fs = require('fs');
const path = require('path');

const wordList = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf-8').split('\n');

async function updateDailyWord() {
    const today = new Date().toISOString().split('T')[0];
    const existing = await Word.findOne({ date: today });
    if (existing) return;

    const word = wordList[Math.floor(Math.random() * wordList.length)].trim().toLowerCase();
    await Word.create({ date: today, word });
}

module.exports = updateDailyWord;
