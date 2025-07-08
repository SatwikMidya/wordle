const User = require('../models/user');

exports.dashboard = async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
};

exports.leaderboard = async (req, res) => {
    const users = await User.find().sort({ score: -1 }).limit(10).select('name score');
    res.json(users);
};
