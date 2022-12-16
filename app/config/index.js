//  This read the var in the .env file,
//  if can't find value then get a default value
const dotenv = require('dotenv');
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

module.exports = {
      port: process.env.Port || 8000,
      api:{
            prefix: process.env.API_PREFIX || 'api/v1'
      }
}

