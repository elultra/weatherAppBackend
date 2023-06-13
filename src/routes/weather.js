const { Router } = require("express");

const weatherRouter = Router();
const {
    getAllWeather,
    getTimeMatchedWeather,
} = require("../controllers/weatherController");

weatherRouter.get("/", getAllWeather);
weatherRouter.get("/:country?", getTimeMatchedWeather);

// router.get('/weathers/:country', weatherController.cityWeather);

// router.delete('/weathers/:city', weatherController.delete);
// router.put('/weathers/:city', weatherController.update);
// router.post('/weathers', weatherController.store);

module.exports = weatherRouter;
