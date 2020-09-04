const twitter = require('twitter');

function tweet(seed) {
    const promise = new Promise((resolve, reject) => {        
        seed
            .then(post => {
                const client = new twitter({
                    consumer_key: post.consumer_key,
                    consumer_secret: post.consumer_secret,
                    access_token_key: post.access_token_key,
                    access_token_secret: post.access_token_secret
                });
        
                client.post('statuses/update', { status: post.content }, function(err, tweet, response) {
                    if(err) {
                        let error = err[0].message;

                        if(error.includes('Tweet needs to be a bit shorter')) {
                            console.log(`error rerun ${ post.name }`, error);
                            return rerun;
                        }
                        if(error.includes('Status is a duplicate')) {
                            console.log(`error rerun ${ post.name }`, error);
                            return rerun;
                        }

                        console.log(`TwITTER ${ post.name } error: `, err);
                    }
                    console.log(`${ post.name } TWEET: `, tweet.text);  // Tweet body.
                    resolve();
                })                       
            })
            .catch(err => {
                console.log(`${ post.name } TWEET ERROR: `, err);
                reject(err);
            })
    })    
    return promise;
} 

module.exports = { tweet }