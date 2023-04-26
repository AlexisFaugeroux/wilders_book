const express = require("express");
const gradeController = require("../controller/grade");

const gradeRouter = express.Router();

gradeRouter.get("/api/grade",gradeController.getAll);
gradeRouter.post("/api/grade", gradeController.create);
gradeRouter.put("/api/grade/:id", gradeController.update);
gradeRouter.delete("/api/grade/:id", gradeController.delete);

module.exports = gradeRouter;