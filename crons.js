const { tweet }         = require('./db/twitter');
const { whitmanQuotes } = require('./seed/waltWhitman');
const { hdThoreau }     = require('./seed/hdThoreau');
const { mannQuotes }    = require('./seed/thomasMann');

const cron = {
    whitman: tweet(whitmanQuotes),
    mann: tweet(mannQuotes),
    thoreau: tweet(hdThoreau)
}

module.exports = { cron }
