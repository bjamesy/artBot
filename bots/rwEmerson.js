const fetch = require('node-fetch');

function emersonQuotes() {
    const promise = new Promise((resolve, reject) => {
        const post = [];
    
        fetch(`https://poetrydb.org/author/emerson`)
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
                    rerun: emersonQuotes,
                    content: post.join(""), 
                    name: "Ralph Waldo Emerson",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_emerson,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_emerson,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_emerson,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_emerson
                });
            })
            .catch(err => {
                console.log("EMERSON ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}
    
module.exports = { emersonQuotes };
