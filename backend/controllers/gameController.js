const Word = require('../models/word');
const User = require('../models/user');

exports.submitGuess = async (req, res) => {
    const { word } = req.body;
    console.log(`your word is ${word}`);
    const today = new Date().toISOString().split('T')[0];
    const wordData = await Word.findOne({ date: today });
    console.log(`today's word is ${wordData.word}`)

    if (!wordData) return res.status(500).json({ msg: 'No word found' });

    const correct = word.toLowerCase() === wordData.word.toLowerCase();
    console.log(correct);
    const user = await User.findById(req.user.id);

    user.guesses.push(word);
    if (correct) user.score += 1;
    await user.save();

    res.json({ msg: correct });
};
