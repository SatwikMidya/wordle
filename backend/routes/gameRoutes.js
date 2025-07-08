const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { submitGuess } = require('../controllers/gameController');

router.post('/guess', auth, submitGuess);

module.exports = router;
