const weatherapiService = require('../services/openweathermapServiceAPI')

//  Get all weather
exports.index = async (req, res) => {
      try {
            const { data } = await weatherapiService.getWeather();
            res.send(data.list)
      } catch (error) {
            console.log(error)
      }
};
//  Get weather matching data time with users time
exports.getTimeMatchedWeather = async (req, res) => {
      try{
            const date = new Date();
            const hours = date.getHours();
            let userHours = hours;
      
            function numToTimeThree(num) {
                  return num = Math.round(num / 3) * 3;
            }
      
            if (hours % 3 > 0 && numToTimeThree(hours) !== 24) {
                  userHours = numToTimeThree(hours);
            } else {
                  userHours = 0;
            }
            const geoData = await weatherapiService.getGeo(req.params.country);
            const latitude = geoData.data[0].lat.toFixed(2);
            const longtitude = geoData.data[0].lon.toFixed(2);
            
            const {data} = await weatherapiService.getWeather(latitude,longtitude);
            const currentWeather = data.list.filter(item=>item.dt_txt.includes((userHours)+":00:00"))
            res.send(currentWeather);
      }catch(err){
            console.log(err)
      }
};
// Get: geo coding
exports.getGeo = async (req, res) => {
      try {
            const { data } = await weatherapiService.getGeo(req.params.country);
            const latitude = data[0].lat.toFixed(2);
            const longtitude = data[0].lon.toFixed(2);
            const coordinate = [latitude, longtitude];
            res.send(coordinate);
      } catch (error) {
            console.log(error)
      }
};

//  Post: create weather
exports.store = (req, res) => {

}
//  Put: update weather
exports.update = (req, res) => {

}
//  Delete: delete weather
exports.delete = (req, res) => {

}
