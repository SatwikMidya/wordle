const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { dashboard, leaderboard } = require('../controllers/userController');

router.get('/dashboard', auth, dashboard);
router.get('/leaderboard', leaderboard);

module.exports = router;
