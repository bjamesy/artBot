const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function murakami() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#americanArt', 
            '#bobDylan', 
            '#americanFolk',
            '#dylan',
            '#robertZimmerman',
            '#bob',
            '#artBot'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        const post = [];
    
        fetch(`https://quotes.rest/quote/search?api_key=${ process.env.theySaidSo_API_token }&author=haruki%20murakami`)
            .then(result => result.json())
            .then(data => {
                post.push(data.contents.quotes[0].quote);

                resolve({ 
                    rerun: murakami,
                    content: post.join("") + " " + tags[0] + " " + tags[1], 
                    name: "Haruki Murakami",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_murakami,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_murakami,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_murakami,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_murakami
                });
            })
            .catch(err => {
                console.log("MURAKAMI ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { murakami }