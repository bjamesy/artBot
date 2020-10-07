const fetch = require('node-fetch');

function caravaggio() {    
    const promise = new Promise((resolve, reject) => {
        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d7cedc2cb3880b47b1a&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + "\n".concat(completitionYear);
                
                resolve({ 
                    rerun: caravaggio,
                    content: post, 
                    image: painting.image,
                    fileName: "caravaggio-art.jpg",
                    name: "caravaggio",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_caravaggio,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_caravaggio,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_caravaggio,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_caravaggio
                });
            })
            .catch(err => {
                console.log("caravaggio ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { caravaggio }