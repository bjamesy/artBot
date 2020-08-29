const fetch = require('node-fetch');

const whitmanQuotes = new Promise((resolve, reject) => {
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
                post.push(poem.lines[i].toString() + '\n');
            }
            resolve(post.join(""));
        })
        .catch(err => {
            console.log("WALT WHITMAN ERROR: ", err);
            reject(err);
        });  
})

module.exports = { whitmanQuotes }