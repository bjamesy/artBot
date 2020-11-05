const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function hopper() {    
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#realism', 
            '#newRealism',
            '#modernArt',
            '#hopper', 
            '#edwardHopper', 
            '#americanArt', 
            '#americanRealism',
            '#artBot'
        ]
        // function taken from twitter/tools directory to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d87edc2cb3880b49321&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + "\n".concat(completitionYear);

                resolve({ 
                    rerun: hopper,
                    content: post + " " + tags[0] + " " + tags[1], 
                    image: painting.image,
                    fileName: "hopper.jpg",
                    name: "hopper",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_edward_hopper,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_edward_hopper,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_edward_hopper,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_edward_hopper
                });
            })
            .catch(err => {
                console.log("HOPPER ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { hopper }