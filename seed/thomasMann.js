const https = require('https');

const mannQuotes = new Promise((resolve, reject) => {
    https.get(`https://www.goodreads.com/author/show/19405?format=xml&key=${process.env.GOOD_READS_key}`, res => {
        
    })
})

module.exports = { mannQuotes }

// fetch(`https://www.goodreads.com/author/show/19405?format=xml&key=${process.env.GOOD_READS_key}`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Accept': 'application/xml'
//     }
// })
//     .then(result => result.json())
//     .then(data => {
//         console.log("Thomas Mann: ", data);
//         resolve(data);
//     })
//     .catch(err => {
//         console.log("Thomas Mann ERROR: ", err);
//         reject(err);
//     });  
