process.env.NODE_ENV !== 'production' && require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')
const common = require('./common')
const router = require('./routes')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
    secret: process.env.SECRET || '12345687987',
    saveUninitialized: true,
    resave: false
}))
app.use(flash())

app.use(express.static(path.join(__dirname, 'public')))
app.use(common.middleware.debug)

app.use('/', router)

app.use(common.middleware.page404)
app.use(common.middleware.errorHandler)

module.exports = app

