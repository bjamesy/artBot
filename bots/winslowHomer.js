const fetch           = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function winslow() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#winslowHomer', 
            '#americanArt', 
            '#americanRealism', 
            '#winslow', 
            '#artBot', 
            '#realism'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d8aedc2cb3880b498a3&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + "\n".concat(completitionYear);

                resolve({
                    rerun: winslow,
                    content: post + " " + tags[0] + " " + tags[1], 
                    image: painting.image,
                    fileName: "winslow.jpg",
                    name: "winslow",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_winslow_homer,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_winslow_homer,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_winslow_homer,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_winslow_homer
                });
            })
            .catch(err => {
                console.log('WINSLOW error: ', err);
                reject(err);
            })
    });    
    return promise;
}

module.exports = { winslow };
