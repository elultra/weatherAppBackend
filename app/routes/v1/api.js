const express  = require('express');
const router = new express.Router();
const weatherController = require('../../controllers/weatherContoller')

router.get('/weathers', weatherController.index)
router.get('/weathers/:city', weatherController.show)

router.put('/weathers/:city', weatherController.update)
router.post('/weathers/:city', weatherController.store)
router.delete('/weathers', weatherController.deleteWeather)

module.exports = router;