const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    date: { type: String, unique: true },
    word: { type: String, required: true }
});




module.exports = mongoose.model('Word', wordSchema);
