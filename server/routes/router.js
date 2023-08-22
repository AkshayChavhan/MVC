const express = require('express');
const router = express.Router();
const UserControllerLogin = require('../controllers/Login');
const UserControllerSignUp = require('../controllers/SignUp');
const UserControllerUserData = require('../controllers/UserData');
const UserControllerUpdateUserData = require('../controllers/UpdateUserData');

router.post('/signup', UserControllerSignUp.signup);
router.post('/validate-token', UserControllerLogin.login);
router.get('/userdata', UserControllerUserData.getUserData);
router.post('/update-profile', UserControllerUpdateUserData.updateUserData);


module.exports = router;