"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get("/", homeEndPoint);

function homeEndPoint(req, res) {
  res.send("Home Page");
}

app.listen(port, () => {
  console.log(`Server runining on port: ${port}`);
});
