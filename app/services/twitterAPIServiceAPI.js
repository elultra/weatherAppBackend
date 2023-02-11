const axios = require("axios");
const twitterConfig = require('../config/twitter');

exports.getTwitter = () => {
      return axios.get(`https://api.twitter.com/2/tweets/search/recent?query=from:twitterdev' --header 'Authorization: Bearer ${bearer_token}'`)
}