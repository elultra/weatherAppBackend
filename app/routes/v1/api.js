const express = require('express')
const router = new express.Router();
const weatherController = require('../../controllers/weatherController')
const dotenv = require('dotenv');
dotenv.config()

router.get('/allweathers', weatherController.index);
router.get('/weathers/:country?', weatherController.getTimeMatchedWeather);
router.get('/:country', weatherController.getGeo);
// router.get('/weathers/:country', weatherController.cityWeather);

// router.delete('/weathers/:city', weatherController.delete);
// router.put('/weathers/:city', weatherController.update);
// router.post('/weathers', weatherController.store);

router.get('/healthcheck',(req,res)=>{
      res.send({
            status: 'online',
            node:process.env.NODE_ENV,
      })
})

module.exports = router;