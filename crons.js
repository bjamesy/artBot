const { tweet }         = require('./db/twitter/twitter');
const { whitmanQuotes } = require('./seed/waltWhitman');
const { hdThoreau }     = require('./seed/hdThoreau');
const { mannQuotes }    = require('./seed/thomasMann');
const { romanticism }   = require('./seed/romanticArt');
const { caravaggio }    = require('./seed/caravaggio');

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

module.exports = { 
    mann,
    whitman,
    thoreau,
    romanticArt,
    caravaggioArt
}