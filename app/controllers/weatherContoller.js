const weatherapiService= require('../services/openweathermapServiceAPI');

//  Get all weather
exports.index = async(req,res) => {
      res.send(await weatherapiService.getWeather());
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
exports.deleteWeather = (req,res) =>{

}
