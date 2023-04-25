const express = require("express");
const skillController = require("../controller/skill");

const skillRouter = express.Router();

skillRouter.get("/api/skill",skillController.getAll);
skillRouter.post("/api/skill", skillController.create);
skillRouter.put("/api/skill/:id", skillController.update);
skillRouter.delete("/api/skill/:id", skillController.delete);

module.exports = skillRouter;