# Dwitter

Dwitter is a quick Node.js app to delete tweets from your Twitter account.
Made due to just seeing how easy it is to do and make sure people don't pay for a service.

## Installation

This is a [Node.js](https://nodejs.org/en/) application, so ensure you have it installed.

```javascript
npm install
```

## Usage

To use the application you will need to apply for a [Twitter Dev Account](https://developer.twitter.com/en). This will be so you can have access to your consumer public and secret key as well as your access token and secret.

Once you have access to this you will need to create a file called **dev.env**. With the following contents:

```bash
TWITTER_CONSUMER_KEY=your_consumer_key
TWITTER_CONSUMER_SECRET=your_consumer_secret_key
TWITTER_ACCESS_TOKEN_KEY=your_access_token_key
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
```
To run the application use: 
```javascript
npm run start
```

## To Do

Add some better error handling for keys etc

Find a way around the limitations on the Twitter API that will limit requests, and amount of tweets to access.

Add a time argument

Add a CLI to make it easier to access

Create a script

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
