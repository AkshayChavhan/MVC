const express = require('express');
const router = express.Router();
const UserControllerLogin = require('../controllers/Login');
const UserControllerSignUp = require('../controllers/SignUp');
const UserControllerUserData = require('../controllers/UserData');

router.post('/signup', UserControllerSignUp.signup);
router.post('/login', UserControllerLogin.login);
router.get('/userdata', UserControllerUserData.getUserData);

module.exports = router;