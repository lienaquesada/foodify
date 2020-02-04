const express = require("express");
const dotenv=require("dotenv").config();

const keys=require("./keys");

// const mysql = require("mysql");
// const path= require("path");



//-----------------------------------------------------


//-------------------------------------------------
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//----------------------------------------orm
const routes = require("./routes/apiRoutes.js");
//require('./routes/html-routes')(app);
app.use(routes);

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
;

