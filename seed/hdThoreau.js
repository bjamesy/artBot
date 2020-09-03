const fetch = require('node-fetch');

const hdThoreau = new Promise((resolve, reject) => {
    const post = [];

    fetch(`https://poetrydb.org/author/thoreau`)
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
                content: post.join(""), 
                name: "Henry David Thoreau",
                consumer_key: process.env.TWITTER_CONSUMER_KEY_hd_thoreau,
                consumer_secret: process.env.TWITTER_CONSUMER_SECRET_hd_thoreau,
                access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_hd_thoreau,
                access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_hd_thoreau
            });
        })
        .catch(err => {
            console.log("THOREAU ERROR: ", err);
            reject(err);
        });  
})
    
module.exports = { hdThoreau };
