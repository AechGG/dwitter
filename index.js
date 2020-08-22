var Twitter = require('twitter');
require('dotenv').config({ path: './dev.env' });

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function getTweets(client, callback) {
  var params = { count: 200, include_rts: false };
  client.get('statuses/user_timeline', params, function (
    error,
    tweets,
    response
  ) {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.log(
      `${tweets.count} tweets with params: ${params} have been collected`
    );
    callback(client, tweets);
  });
}

function deleteTweet(client, tweets) {
  client.post('statuses/destroy', { id: tweets[1].id_str }, function (
    error,
    tweet,
    response
  ) {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.log(`Tweet with id: ${tweet.id_str} was destroyed`);
  });
}

getTweets(client, deleteTweet);
