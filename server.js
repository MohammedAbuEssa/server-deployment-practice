"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.get("/", homeEndPoint);
app.get("/endpoint", endPointTest);

function homeEndPoint(req, res) {
  res.send("Home Page");
}

function endPointTest(req, res) {
  res.send("Good job");
}

app.listen(PORT, () => {
  console.log(`Server runining on port: ${PORT}`);
});
