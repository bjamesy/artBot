const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function rublev() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#andreiRublev', 
            '#byzantineArt', 
            '#artBot', 
            '#iconPainting', 
            '#icon',
            '#religiousArt'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);
        
        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d85edc2cb3880b48e4d&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + "\n".concat(completitionYear);

                resolve({ 
                    rerun: rublev,
                    content: post + " " + tags[0] + " " + tags[1], 
                    image: painting.image,
                    fileName: "rublev-art.jpg",
                    name: "rublev",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_rublev,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_rublev,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_rublev,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_rublev
                });
            })
            .catch(err => {
                console.log('RUBLEV error: ', err);
                reject(err);
            })        
    });    
    return promise;
}

module.exports = { rublev };