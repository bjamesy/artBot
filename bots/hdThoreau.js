const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function rimbaud() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#surrealism', 
            '#symbolism', 
            '#rimbaud', 
            '#poetry', 
            '#romantic',
            '#artBot'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);
    
        const post = [];
    
        fetch(`https://quotes.rest/quote/search?api_key=${ process.env.theySaidSo_API_token }&author=arthur%20rimbaud`)
            .then(result => result.json())
            .then(data => {
                // let poem = data[Math.floor(Math.random() * data.length)];
                // let index = Math.floor(Math.random() * poem.lines.length);
                
                // post.push(poem.title.toUpperCase() + "\n \n");
    
                // for (i = index; i < index + 3; i++) {
                //     if (poem.lines[i] == "") {
                //         continue;
                //     }
                //     if (poem.lines[i] === undefined) {
                //         continue;
                //     }
                //     post.push(poem.lines[i].toString() + "\n");
                // }            
                post.push(data.contents.quotes[0].quote);
                console.log(post[0])

                resolve({ 
                    rerun: rimbaud,
                    content: post.join("") + " " + tags[0] + " " + tags[1], 
                    name: "Arthur Rimbaud",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_rimbaud,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_rimbaud,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_rimbaud,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_rimbaud
                });
            })
            .catch(err => {
                console.log("RIMBAUD ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}
    
module.exports = { rimbaud };
