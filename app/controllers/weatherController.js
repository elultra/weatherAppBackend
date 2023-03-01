const weatherapiService = require('../services/openweathermapServiceAPI')

//  Get all weather
exports.index = async(req,res) => {
      const data = await weatherapiService.getWeather();
      res.send(data.data)
}
//  Get current all weather
exports.getAllCurrentWeather= async(req,res)=>{
      //get user current hours
      const date = new Date();
      let hours = date.getHours();
      //hours is a multiple of 3
      function modulusThree(hours){
            for(let i=0; i<3; i++){
                  if(hours%3 > 0){
                        let hoursTimesthree = hours + 1;
                        return hoursTimesthree
                  }else{
                        return hours;
                  }
            }
      }
      const data = await weatherapiService.getWeather();
      const currentWeather = data.data.list.filter((item)=>{
            return item.dt_txt.includes(modulusThree(hours)+":00:00")
      })
      res.send(currentWeather);
}
// Get: geo coding
exports.getGeo = async(req,res)=>{
      const data = await weatherapiService.getGeo();
      res.send(data);
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

