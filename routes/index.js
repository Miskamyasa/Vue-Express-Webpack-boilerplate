const cors = require('cors')
const router = require('express').Router()
const reception = require('./reception')

router.get('/', reception.homepage)

module.exports = router
