const chalk = require('chalk');

const express = require('express');
const router = express.Router();

const path =  require('path');
const userController = require(path.resolve(__dirname,"../controllers/usersController"));

router.get('/listUsers', userController.listUsers);

module.exports = router;