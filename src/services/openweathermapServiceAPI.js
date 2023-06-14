const axios = require("axios");
require("dotenv").config();

const openweathermapServiceAPI = process.env.OPEN_WEATHER_MAP_APIKEY;

const getWeather = async (lat = -33.87, lon = 151.21) => {
    try {
        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${openweathermapServiceAPI}`
        );
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch weather data");
    }
};

const getGeo = async (geo = "sydney") => {
    try {
        const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${geo}&limit=5&appid=${openweathermapServiceAPI}`
        );
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch geo data");
    }
};

module.exports = {
    getWeather,
    getGeo,
};
