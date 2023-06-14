const express = require("express");
const app = express();

app.get("/about", (request, response) => {
  response.sand("About Page");
});

app.get("./", (request, response) => {
  response.sand("Home Page");
});

module.exports = app;
