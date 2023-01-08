const weatherapiService = require('../services/openweathermapServiceAPI')

//  Get all weather
exports.index = async(req,res) => {
      const data = await weatherapiService.getWeather();
      res.send(data.data)
}
//  Post: create weather
exports.store = (req,res) =>{

}
//  Put: update weather
exports.update = (req,res) =>{

}
//  Get one: get one city weather
exports.show = (req,res) =>{

}
//  Delete: delete weather
exports.delete = (req,res) =>{

}
