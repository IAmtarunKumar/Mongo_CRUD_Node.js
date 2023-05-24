const express = require("express");

//.env
require("dotenv").config();
//connection
const { connection } = require("./config/db");
//DataModel
const { DataModel } = require("./model/data.model");
//router
const {DataRouter} = require("./route/data.route")



//call the express
const app = express();
//convert post data in json format this middleware
app.use(express.json());

//router use
app.use("/data",DataRouter)


app.listen(process.env.port, async () => {
  await connection;
  console.log("MongoDB is connected");
  console.log(`${process.env.port} is working`);
});
