const middleware = require('./middleware')
const props = require('./props')
const emitterBus = require('./emitterbus')

const common = {
    middleware,
    props,
    emitterBus
}

module.exports = common
