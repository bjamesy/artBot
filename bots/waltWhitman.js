const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function whitmanQuotes() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#americanTranscendentalism', 
            '#americanArt', 
            '#whitman', 
            '#americanPoetry',
            '#americanLiterature',
            '#americanRomanticism'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        const post = [];
    
        fetch(`https://poetrydb.org/author/Whitman`)
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
                    rerun: whitmanQuotes,
                    content: post.join("") + " " + tags[0] + " " + tags[1], 
                    name: "Walt Whitman",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_walt_whitman,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_walt_whitman,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_walt_whitman,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_walt_whitman
                });
            })
            .catch(err => {
                console.log("WALT WHITMAN ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { whitmanQuotes }