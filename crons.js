const { tweet }         = require('./db/twitter/twitter');
const { whitmanQuotes } = require('./bots/waltWhitman');
const { hdThoreau }     = require('./bots/hdThoreau');
const { mannQuotes }    = require('./bots/thomasMann');
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
    tweet(mannQuotes());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
    tweet(dickinson());
};
function elevenAM() {
    tweet(caravaggio());    
    tweet(blakeArt());
    tweet(romanticism());
    tweet(wyeth());
    tweet(hopper());
};
function threeThirtyPM() {
    tweet(mannQuotes());
    tweet(blakeLines());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
    tweet(dickinson());
};
function fourPM() {
    tweet(caravaggio());
    tweet(romanticism());
    tweet(wyeth());
    tweet(hopper());
};
function sevenThirtyPM() {
    tweet(mannQuotes());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
    tweet(dickinson());
};
function eightPM() {
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