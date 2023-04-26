const express = require('express');
const router = express.Router();

const wilderRouter = require("./wilder");
const skillRouter = require("./skill");
const gradeRouter = require("./grade");

router.use(wilderRouter, skillRouter, gradeRouter);

module.exports = router;