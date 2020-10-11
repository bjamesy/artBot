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

function mann() {
    tweet(mannQuotes());
};
function thoreau() {
    tweet(hdThoreau());
};
function whitman() {
    tweet(whitmanQuotes());
};
function romanticArt() {
    tweet(romanticism());
};
function caravaggioArt() {
    tweet(caravaggio());
};
function blakePoem() {
    tweet(blakeLines());
};
function blakeImage() {
    tweet(blakeArt());
};
function emerson() {
    tweet(emersonQuotes());
};
function wyethArt() {
    tweet(wyeth());
};
module.exports = { 
    mann,
    whitman,
    thoreau,
    romanticArt,
    caravaggioArt,
    blakeImage,
    blakePoem,
    emerson,
    wyethArt
}