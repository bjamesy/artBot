const { shuffleTags } = require('../db/twitter/tools');
const rp              = require('request-promise');
const cheerio         = require('cheerio');

function meyerowitz() {
    const promise = new Promise((resolve, reject) => {
        const hashtags = [
            '#meyerowitz', 
            '#americanArt', 
            '#artBot', 
            '#capeLight', 
            '#photography',
            '#colorOnFilm'
        ]
        // function taken from twitter/tools to shuffle hashtags array 
        const tags = shuffleTags(hashtags);

        const options = {
            uri: 'http://www.artnet.com/artists/joel-meyerowitz/8',
            transform: function (body) {
                return cheerio.load(body);
            }
        };
        
        rp(options)
            .then(($) => {
                // div encasing works divs
                const arr1 = $('.artworks');
                // array of works
                const works = $(arr1).find('.artwork').toArray();
                // randomly generate number between 0 and array length
                let i = Math.floor(Math.random() * works.length);
                // scrape work, of the index i, from array
                const image = $(works[i]).find('.details-link').children('img').attr('src');
                // scrape description and date of work
                const post = $(works[i]).find('.details-link').children('img').attr('alt');

                resolve ({
                    rerun: meyerowitz,
                    content: post + " " + tags[0] + " " + tags[1], 
                    image: image,
                    fileName: "meyerowitz.jpg",
                    name: "meyerowitz",
                    consumer_key: process.env.TWITTER_CONSUMER_KEY_joel_meyerowitz,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_joel_meyerowitz,
                    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY_joel_meyerowitz,
                    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_joel_meyerowitz
                })
            })
            .catch(err => {
                console.log('MEYEROWITZ error: ', err);
                reject(err);
            })        
    });    
    return promise;
}

module.exports = { meyerowitz };