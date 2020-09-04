const fetch = require('node-fetch');

const romanticism = new Promise((resolve, reject) => {
    fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d87edc2cb3880b49321`)
        .then(result => result.json())
        .then(data => {
            console.log('Romanticism: ', data);
            // console.log('Romanticism: ', data.data[0]);

            resolve({ 
                rerun: romanticism,
                content: data, 
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

module.exports = { romanticism }