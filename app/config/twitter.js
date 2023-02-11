const dotenv = require('dotenv')
dotenv.config()

module.exports = {
      apikey: process.env.TWITTER_APIKEY,
      bearer_token: process.env.TWITTER_BEARER_TOKEN,
      secret:process.env.TWITTER_SECRET
}