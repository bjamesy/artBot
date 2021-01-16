const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function baldwin() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#americanArt', 
            '#jamesBaldwin', 
            '#africanAmericanLiterature',
            '#blackLiterature',
            '#americanLiterature',
            '#gayLiterature',
            '#artBot'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        const post = [];
    
        fetch(`https://quotes.rest/quote/search?api_key=${ process.env.theySaidSo_API_token }&author=james%20baldwin`)
            .then(result => result.json())
            .then(data => {
                post.push(data.contents.quotes[0].quote);

                resolve({ 
                    rerun: baldwin,
                    content: post.join("") + " " + tags[0] + " " + tags[1], 
                    name: "James Baldwin",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_james_baldwin,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_james_baldwin,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_james_baldwin,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_james_baldwin
                });
            })
            .catch(err => {
                console.log("JAMES BALDWIIN ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { baldwin }