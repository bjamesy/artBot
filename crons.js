const { tweet }         = require('./db/twitter/twitter');
const { whitmanQuotes } = require('./bots/waltWhitman');
const { hdThoreau }     = require('./bots/hdThoreau');
const { winslow }       = require('./bots/winslowHomer');
const { romanticism }   = require('./bots/romanticArt');
const { caravaggio }    = require('./bots/caravaggio');
const { emersonQuotes } = require('./bots/rwEmerson');
const { wyeth }         = require('./bots/andrewWyeth');
const { dickinson }     = require('./bots/emilydickinson');
const { hopper }        = require('./bots/edwardHopper')
const { 
    blakeLines,
    blakeArt
} = require('./bots/williamBlake');

function tenThirtyAM() {
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
    tweet(dickinson());
};
function elevenAM() {
    tweet(winslow());
    tweet(caravaggio());    
    tweet(blakeArt());
    tweet(romanticism());
    tweet(wyeth());
    tweet(hopper());
};
function threeThirtyPM() {
    tweet(blakeLines());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
    tweet(dickinson());
};
function fourPM() {
    tweet(winslow());
    tweet(caravaggio());
    tweet(romanticism());
    tweet(wyeth());
    tweet(hopper());
};
function sevenThirtyPM() {
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
    tweet(dickinson());
};
function eightPM() {
    tweet(winslow());
    tweet(caravaggio());
    tweet(blakeArt());
    tweet(romanticism());
    tweet(wyeth());
    tweet(hopper());
};

module.exports = { 
    tenThirtyAM,
    elevenAM,
    threeThirtyPM,
    fourPM,
    sevenThirtyPM,
    eightPM
}