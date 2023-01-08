const axios = require("axios")
const openweathermapConfig = require('../config/openweathermap')

exports.getWeather = () => {
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=26dcf99603715a429cc62f807bb053ab`)
}