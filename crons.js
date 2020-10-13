const { tweet }         = require('./db/twitter/twitter');
const { whitmanQuotes } = require('./bots/waltWhitman');
const { hdThoreau }     = require('./bots/hdThoreau');
const { mannQuotes }    = require('./bots/thomasMann');
const { romanticism }   = require('./bots/romanticArt');
const { caravaggio }    = require('./bots/caravaggio');
const { emersonQuotes } = require('./bots/rwEmerson');
const { wyeth }         = require('./bots/andrewWyeth');
const { 
    blakeLines,
    blakeArt
} = require('./bots/williamBlake');

function tenThirtyAM() {
    tweet(mannQuotes());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
};
function elevenAM() {
    tweet(caravaggio());    
    tweet(blakeArt());
    tweet(romanticism());
    tweet(wyeth());
};
function threeThirtyPM() {
    tweet(mannQuotes());
    tweet(blakeLines());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
};
function fourPM() {
    tweet(caravaggio());
    tweet(romanticism());
    tweet(wyeth());
};
function sevenThirtyPM() {
    tweet(mannQuotes());
    tweet(emersonQuotes());
    tweet(whitmanQuotes());
    tweet(hdThoreau());
};
function eightPM() {
    tweet(caravaggio());
    tweet(blakeArt());
    tweet(romanticism());
    tweet(wyeth());
};

module.exports = { 
    tenThirtyAM,
    elevenAM,
    threeThirtyPM,
    fourPM,
    sevenThirtyPM,
    eightPM
}