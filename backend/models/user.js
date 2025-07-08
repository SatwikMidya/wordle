const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    score: { type: Number, default: 0 },
    guesses: [String]
});

module.exports = mongoose.model('User', userSchema);