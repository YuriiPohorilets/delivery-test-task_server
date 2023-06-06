const express = require('express');
const router = express.Router();
const { shop: ctrl } = require('../../controllers');

router.get('/', ctrl.getShops);

router.get('/:shopId', ctrl.getProducts);

module.exports = router;
