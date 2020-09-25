const fetch = require('node-fetch');

function blakeLines() {
    const promise = new Promise((resolve, reject) => {
        const post = [];
    
        fetch(`https://poetrydb.org/author/blake`)
            .then(result => result.json())
            .then(data => {
                let poem = data[Math.floor(Math.random() * data.length)];
                let index = Math.floor(Math.random() * poem.lines.length);
                
                post.push(poem.title.toUpperCase() + "\n \n");
    
                for (i = index; i < index + 3; i++) {
                    if (poem.lines[i] == "") {
                        continue;
                    }
                    if (poem.lines[i] === undefined) {
                        continue;
                    }
                    post.push(poem.lines[i].toString() + "\n");
                }            
                resolve({ 
                    rerun: blakeLines,
                    content: post.join(""), 
                    name: "William Blake",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_blake,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_blake,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_blake,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_blake
                });
            })
            .catch(err => {
                console.log("blakeLines ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

function blakeArt() {    
    const promise = new Promise((resolve, reject) => {
        fetch(`https://www.wikiart.org/en/api/2/PaintingsByArtist?id=57726d7eedc2cb3880b47f24`)
            .then(result => result.json())
            .then(data => {
                let painting = data.data[Math.floor(Math.random() * data.data.length)];

                let completitionYear = painting.completitionYear.toString();
                let post = painting.title + "\n".concat(completitionYear);

                resolve({ 
                    rerun: blakeArt,
                    content: post, 
                    image: painting.image,
                    fileName: "blake.jpg",
                    name: "William Blake",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_blake,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_blake,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_blake,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_blake
                });
            })
            .catch(err => {
                console.log("BLAKE Art ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}
    
module.exports = { 
    blakeArt,
    blakeLines
 };
