const { getWeather, getGeo } = require("../services/openweathermapServiceAPI");
const { StatusCodes, getReasonPhrase } = require("http-status-codes");

const testweather = async (req, res) => {
    try {
        return res.status(StatusCodes.OK).json("test");
    } catch (error) {
        console.log(error);
    }
};

//  Get all weather
const getAllWeather = async (req, res) => {
    try {
        const response = await getWeather();
        const { data } = response;
        if (data) {
            return res.status(StatusCodes.OK).json(data);
        }
    } catch (error) {
        console.log(error);
    }
};

// Get weather based on location
const getWeatherByLocation = async (req, res) => {
    try {
        const geoData = await getGeo(req.params.country.toLowerCase());
        const country = { country: geoData.data[0].name };
        const latitude = geoData.data[0].lat.toFixed(2);
        const longtitude = geoData.data[0].lon.toFixed(2);
        const { data } = await getWeather(latitude, longtitude);
        const weather = [...data, country];
        return res.status(StatusCodes.OK).json(weather);
    } catch (error) {
        console.log(error);
    }
};

// Get weather based on location with matching data time with users time
const getWeatherByLocationMatchedTime = async (req, res) => {
    try {
        const date = new Date();
        const hours = date.getHours();
        let userHours = hours;

        function numToTimeThree(num) {
            return (num = Math.round(num / 3) * 3);
        }

        if (hours % 3 > 0 && numToTimeThree(hours) !== 24) {
            userHours = numToTimeThree(hours);
        } else {
            userHours = 0;
        }
        const geoData = await getGeo(req.params.country);
        const country = { country: geoData.data[0].name };
        const latitude = geoData.data[0].lat.toFixed(2);
        const longtitude = geoData.data[0].lon.toFixed(2);

        const { data } = await getWeather(latitude, longtitude);
        const currentWeather = [
            ...data.list.filter((item) =>
                item.dt_txt.includes(userHours + ":00:00")
            ),
            country,
        ];
        // currentWeather.push(country);
        return res.status(StatusCodes.OK).json(currentWeather);
    } catch (err) {
        console.log(err);
    }
};

// Get geo Location
const getGeoLocation = async (req, res) => {
    try {
        const { data } = await getGeo(req.params.country);
        console.log(data);
        const country = data[1].name;
        const latitude = data[0].lat.toFixed(2);
        const longtitude = data[0].lon.toFixed(2);
        const coordinate = [latitude, longtitude, country];
        return res.status(StatusCodes.OK).json(coordinate);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllWeather,
    getWeatherByLocationMatchedTime,
    getGeoLocation,
    testweather,
};
