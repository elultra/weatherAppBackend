const axios = require("axios")
const openweathermapConfig = require('../config/openweathermap')
console.log(openweathermapConfig.apikey)
exports.getWeather = () => {
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${openweathermapConfig.apikey}`)
}