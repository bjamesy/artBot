const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function henryJames() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#psychologicalRealism', 
            '#realism', 
            '#americanArt', 
            '#Jamesian', 
            '#henryJames',
            '#americanLiterature',
            '#themaster' 
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        const post = [];
    
        fetch(`https://quotes.rest/quote/search?api_key=${ process.env.theySaidSo_API_token }&author=henry%20james`)
            .then(result => result.json())
            .then(data => {
                // ** logic for handling datat from poetryDB API **
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
                    rerun: henryJames,
                    content: post.join("") + " " + tags[0] + " " + tags[1], 
                    name: "Henry James",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_james,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_james,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_james,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_james
                });
            })
            .catch(err => {
                console.log("JAMES ERROR: ", err);
                reject(err);
            });  
    })
    return promise;    
}
    
module.exports = { henryJames };
