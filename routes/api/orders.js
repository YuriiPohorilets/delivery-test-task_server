const express = require('express');
const router = express.Router();
const { order: ctrl } = require('../../controllers');
const { auth } = require('../../middlewares');

router.post('/', auth, ctrl.createOrder);

module.exports = router;
