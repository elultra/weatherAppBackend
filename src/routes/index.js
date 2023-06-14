const express = require("express");
const weatherRouter = require("./weather");
const geoLocationRouter = require("./geoLocation");

const v1Router = express.Router();

v1Router.use("/weathers", weatherRouter);
v1Router.use("", geoLocationRouter);

module.exports = v1Router;
