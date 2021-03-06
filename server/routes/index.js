'use strict'
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const translateController = require('../controllers/translateController')
const twitterController = require('../controllers/twitterController');
require('dotenv').config()
const translate = require('yandex-translate')(process.env.YANDEX_KEY);

router.get('/', userController.signin);
router.get('/register', userController.signupPage);
router.post('/register', userController.signup);
router.get('/login', userController.signinPage);
router.post('/login', userController.signin);
router.post('/api/translate', translateController.translate);
router.get('/logout', userController.logout);
router.get('/dashboard', userController.auth , translateController.getByUserId);
router.post('/dashboard', userController.auth, translateController.translate);
router.get('/save', translateController.create);
router.get('/api/translate/:user_id', translateController.getByUserId);
router.get('/delete/:id', translateController.deleteById)
router.get('/share/:id', userController.auth, translateController.share);
router.get('/tweet/:id', userController.auth, twitterController.twitImage)

// 'login', {error: null}


module.exports = router
