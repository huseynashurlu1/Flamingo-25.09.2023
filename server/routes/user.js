const express = require('express')
const router = express.Router()
const { createUser, loginUser, checkLogin } = require('../controllers/auth');

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/check-login', checkLogin)

module.exports = router;

