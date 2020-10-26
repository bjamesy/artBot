const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function romanticism() {    
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#germanRomanticism', 
            '#romanticArt', 
            '#casperDavidFrederich', 
            '#germanArt', 
            '#artBot'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d97edc2cb3880b4b0fc&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + "\n".concat(completitionYear);

                resolve({ 
                    rerun: romanticism,
                    content: post + " " + tags[0] + " " + tags[1], 
                    image: painting.image,
                    fileName: "romantic-art.jpg",
                    name: "Romanticism",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_romanticism,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_romanticism,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_romanticism,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_romanticism
                });
            })
            .catch(err => {
                console.log("Romanticism ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { romanticism }