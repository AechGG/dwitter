var Twitter = require('twitter');
require('dotenv').config({ path: './dev.env' });

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var params = { count: 200 };
client.get('statuses/user_timeline', params, function (
  error,
  tweets,
  response
) {
  console.log(error);
  console.log(Object.keys(tweets[0]));
  console.log(JSON.stringify(tweets[0]));
  for (tweetN in tweets) {
    let tweet = tweets[tweetN];
    if (tweet.retweeted == false) {
      console.log(tweet);
    }
  }
});
