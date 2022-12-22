const express = require('express');
// const cors = require('cors');
const apiRouter = require('../app/routes/v1/api');
const config = require('../app/config');
const startServer = () =>{
      // 1. init express
      // 2. listen to server
      // 3. return which can use later
      const app = express();
      app.listen(config.port, err=>{
            if(err){
                  process.exit(1);
            }
            console.log("server started at port: "+config.port)
      })
      return app;
}

module.exports = () =>{
      // 1.  call the function above
      // 2. cors
      // 3. return which can use later
      // 4. ln25. change to json
      const app = startServer();
      // app.use(cors());
      app.use(express.json());
      app.use(config.api.prefix, apiRouter);
      return app;
}