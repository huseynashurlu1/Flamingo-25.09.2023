const express = require('express');
const router = express.Router();
const { getCounts } = require('../controllers/statistics');

router.get('/all', getCounts);

module.exports = router;