//  This read the var in the .env file,
//  if can't find value then get a default value
const dotenv = require('dotenv')
dotenv.config();
// find .env for the value, if no value provided set default value to 'dev'
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

module.exports = {
      port: process.env.PORT || 8080,
      api: {
            prefix: process.env.API_PREFIX || '/api/v1'
      }
}

