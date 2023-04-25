const express = require('express');
const router = express.Router();

const wilderRouter = require("./wilder");
const skillRouter = require("./skill");

router.use(wilderRouter, skillRouter);

module.exports = router;