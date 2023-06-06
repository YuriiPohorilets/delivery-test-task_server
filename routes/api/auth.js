const express = require('express');
const router = express.Router();
const { auth: ctrl } = require('../../controllers');
const { auth } = require('../../middlewares');

router.post('/register', ctrl.register);

router.post('/login', ctrl.login);

router.get('/logout', auth, ctrl.logout);

router.get('/refresh', auth, ctrl.refresh);

module.exports = router;
