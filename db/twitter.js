const twitter           = require('twitter');
const { whitmanQuotes } = require('./seed');

const client = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    // bearer_token: process.env.TWITTER_BEARER_TOKEN
});

module.exports = {
    tweet() {
        whitmanQuotes
            .then(post => {
                console.log('POST: ', post); 

                client.post('statuses/update', { status: post.toString() },  function(err, tweet, response) {
                    if(err) {
                        console.log(err);
                    }
                    console.log('TWEET: ', tweet.text);  // Tweet body.
                })                       
            })
            .catch(err => {
                console.log('Whitman TWEET ERROR: ', err);
            })
    }
}