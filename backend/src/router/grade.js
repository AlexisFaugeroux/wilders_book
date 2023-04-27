const express = require("express");
const gradeController = require("../controller/grade");

const gradeRouter = express.Router();

gradeRouter.post("/api/grade", gradeController.create);


module.exports = gradeRouter;