const axios = require("axios")
const openweathermapConfig = require('../config/openweathermap')
exports.getWeather = () => {
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${openweathermapConfig.apikey}`)
}

exports.getGeo = () =>{
      return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${openweathermapConfig.apikey}`)
}