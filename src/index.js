const express = require("express");
const datasource = require("./utils").datasource;

const router = require("./router");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(router);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

const start = async () => {
  await datasource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
}

//Start Server
start();
