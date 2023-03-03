const express = require('express')
const router = new express.Router();
const weatherController = require('../../controllers/weatherController')

router.get('/weathers', weatherController.getAllCurrentWeather);

router.get('/geo', weatherController.getGeo);
router.get('/weathers/:city', weatherController.show);

router.delete('/weathers/:city', weatherController.delete);
router.put('/weathers/:city', weatherController.update);
router.post('/weathers', weatherController.store);

router.get('/healthcheck',(req,res)=>{
      res.send({
            status: 'online',
      })
})

module.exports = router;