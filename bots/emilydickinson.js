const fetch = require('node-fetch');
const { shuffleTags } = require('../db/twitter/tools');

function yeats() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#americanTranscendentalism', 
            '#americanArt', 
            '#dickinson', 
            '#americanPoetry',
            '#americanLiterature',
            '#emilyDickinson'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        const post = [];
    
        fetch(`https://quotes.rest/quote/search?api_key=${ process.env.theySaidSo_API_token }&author=william%20butler%20yeats`)
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
                    rerun: yeats,
                    content: post.join("") + " " + tags[0] + " " + tags[1], 
                    name: "W.B. Yeats",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_yeats,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_yeats,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_yeats,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_yeats
                });
            })
            .catch(err => {
                console.log("WB YEATS error: ", err);
                reject(err);
            });  
    })
    return promise;    
}

module.exports = { yeats }