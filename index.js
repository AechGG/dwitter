var Twitter = require('twitter');
require('dotenv').config({ path: './dev.env' });

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

console.log(process.env.TWITTER_ACCESS_TOKEN_KEY);

var params = {};
client.get('statuses/home_timeline', params, function (
  error,
  tweets,
  response
) {
  console.log(error);
  for (tweet in tweets) {
    if (tweet.user === 'aechgg') {
      console.log(tweet);
    }
  }
});
