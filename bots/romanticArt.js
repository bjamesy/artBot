const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function romanticism() {    
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#moodyLandscapes', 
            '#lyricalArt', 
            '#lyricalLandscapes', 
            '#art', 
            '#artbot',
            '#artTwitter',
            '#romanticism',
            '#realism'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);
        const artists = [
            '57726d97edc2cb3880b4b0fc',  // CD friderich 
            '57726d88edc2cb3880b49573',  // William turner
            '57726d88edc2cb3880b494b3',  // Alexei Savrasov
            '57726d92edc2cb3880b4a829',  // Andrew wyeth
            '57726d7dedc2cb3880b47dd6',  // John constable
            '57726d80edc2cb3880b48228',  // Ivan Aivazovsky
            '57726d8fedc2cb3880b4a3a7'   // Albert Bierstadt
        ]
        const artistId = shuffleTags(artists);

        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=${ artistId[0] }&imageFormat=HD`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + ', ' + painting.artistName + "\n".concat(completitionYear);

                resolve({ 
                    rerun: romanticism,
                    content: post + " " + tags[0] + " " + tags[1], 
                    image: painting.image,
                    fileName: "romantic-art.jpg",
                    name: "Lyrical Landscapes",
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