const fetch           = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function winslow() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#winslowHomer', 
            '#americanRealism', 
            '#TileClub', 
            '#winslow', 
            '#americanArt', 
            '#realism'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        fetch(`https://www.stands4.com/services/v2/quotes.php?uid=${process.env.QUOTES_API_id}&tokenid=${process.env.QUOTES_API_token}&searchtype=AUTHOR&query=Thomas+Mann&format=json`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                let content = data.result[Math.floor(Math.random() * data.result.length)];

                resolve({
                    rerun: mannQuotes,
                    content: content.quote + " " + tags[0] + " " + tags[1],
                    name: "Thomas Mann",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_thomas_mann,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_thomas_mann,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_thomas_mann,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_thomas_mann
                });
            })
            .catch(err => {
                console.log('MANN error: ', err);
                reject(err);
            })
    });    
    return promise;
}

module.exports = { winslow };
