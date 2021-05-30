const chalk = require ('chalk');

const express = require('express');
const router = express.Router();

const path = require ('path');
const productsController = require(path.resolve(__dirname, '../controllers/productsController'));

router.get('/listProducts', productsController.listProducts);

module.exports = router;
