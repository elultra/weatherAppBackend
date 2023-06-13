const { Router } = require("express");
const { getGeoLocation } = require("../controllers/weatherController");
const geoLocationRouter = Router();

geoLocationRouter.get("/:country", getGeoLocation);

module.exports = geoLocationRouter;
