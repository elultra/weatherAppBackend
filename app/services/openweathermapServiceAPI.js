const axios = require("axios")
const openweathermapConfig = require('../config/openweathermap')
exports.getWeather = (lat=-33.87,lon=151.21) => {
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${openweathermapConfig.apikey}`)
}

exports.getGeo = (geo="sydney") =>{
      return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${geo}&limit=5&appid=${openweathermapConfig.apikey}`)
}