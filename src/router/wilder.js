const express = require("express");
const wilderController = require("../controller/wilder");

const wilderRouter = express.Router();

wilderRouter.get("/api/wilder", wilderController.getAll);
wilderRouter.post("/api/wilder", wilderController.create);
wilderRouter.put("/api/wilder/:id", wilderController.update);
wilderRouter.delete("/api/wilder/:id", wilderController.delete);

module.exports = wilderRouter;