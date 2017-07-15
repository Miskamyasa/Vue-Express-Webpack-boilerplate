const debug = require('debug')('agents:middleware')

module.exports = {
    debug: (req, res, next) => {
        debug(`${new Date().toLocaleString()}: ${req.method} - ${req.url}`)
        next()
    },

    page404: (req, res, next) => {
        let err = new Error('Страница не найдена')
        err.status = 404
        err.addText = 'Извините, но страница, которую Вы запрашиваете, не найдена.'
        next(err)
    },

    errorHandler: (err, req, res, next) => {
        debug(err)
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === 'development' ? err : {}
        res.status(err.status || 500)
        res.render('error', { title: err.message, text: err.addText })
        next()
    }
}
