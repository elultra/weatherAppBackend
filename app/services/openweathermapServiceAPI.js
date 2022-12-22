const axios = require('axios');
const openweathermapConfig = require ('../config/openweathermap');

exports.getWeather = () =>{
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${openweathermapConfig.apikey}`);
}

