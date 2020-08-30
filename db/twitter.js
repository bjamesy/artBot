const twitter = require('twitter');

const client = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    // bearer_token: process.env.TWITTER_BEARER_TOKEN
});

module.exports = {
    tweet(seed) {
        seed
            .then(post => {
                client.post('statuses/update', { status: post.content },  function(err, tweet, response) {
                    if(err) {
                        console.log(err);
                    }
                    console.log(`${ post.name } TWEET: `, tweet.text);  // Tweet body.
                })                       
            })
            .catch(err => {
                console.log(`${ post.name } TWEET ERROR: `, err);
            })
    }
}