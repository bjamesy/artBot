const { tweet }         = require('./db/twitter');
const { whitmanQuotes } = require('./seed/waltWhitman');
const { hdThoreau }     = require('./seed/hdThoreau');
const { mannQuotes }    = require('./seed/thomasMann');
const { romanticism }   = require('./seed/romanticArt');

function mann() {
    tweet(mannQuotes());
};
function thoreau() {
    tweet(hdThoreau());
};
function whitman() {
    tweet(whitmanQuotes());
};
function romanticism() {
    tweet(romanticism());
};

module.exports = { 
    mann,
    whitman,
    thoreau,
    romanticism
}