const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user');

router.post('/signup', controllerUser.signup);
router.get('/login', controllerUser.login);

module.exports = router;