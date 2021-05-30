//darle color a los console log de consola
const chalk = require("chalk");

const express = require("express");
const router = express.Router();

const path = require("path");
const mainController = require(path.resolve(__dirname,"../controllers/mainController"));

router.get("/", mainController.index);

module.exports = router;
