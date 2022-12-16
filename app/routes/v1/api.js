const express  = require('express');
const router = new express.Router();

router.get('/abc', (req,res)=>{
      res.send('OK');
})

module.exports = router;