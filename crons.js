const { tweet }         = require('./db/twitter');
const walt = require('./seed/waltWhitman');
const henry     = require('./seed/hdThoreau');
const thomas    = require('./seed/thomasMann');
// const { romanticism }   = require('./seed/romanticArt');

const cron = {
    whitman: tweet(walt.whitmanQuotes),
    mann: tweet(thomas.mannQuotes),
    thoreau: tweet(henry.hdThoreau),
    // romantics: tweet(romanticism)
}

module.exports = { cron }