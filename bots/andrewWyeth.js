const fetch = require('node-fetch');

function wyeth() {    
    const promise = new Promise((resolve, reject) => {
        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d92edc2cb3880b4a829&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let post = '';
                // wyeth paintings under copyright so not all have titles and dates associated with them
                if(painting.completitionYear && painting.title) {
                    post = painting.title + "\n".concat(painting.completitionYear.toString());
                }

                resolve({ 
                    rerun: wyeth,
                    content: post, 
                    image: painting.image,
                    fileName: "wyeth-art.jpg",
                    name: "Wyeth",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_wyeth,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_wyeth,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_wyeth,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_wyeth
                });
            })
            .catch(err => {
                console.log("Wyeth ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
    }

module.exports = { wyeth }