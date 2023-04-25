const express = require("express");
const datasource = require("./utils").datasource;
const wilderController = require("./controller/wilder");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilders",wilderController.getAll);

app.post("/api/wilder", wilderController.create);

app.put("/api/wilder", wilderController.update);

app.delete("/api/wilder", wilderController.delete);

const start = async () => {
  await datasource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
}

//Start Server
start();
