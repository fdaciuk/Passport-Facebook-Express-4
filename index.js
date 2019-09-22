'use strict'

const express = require('express')
const session = require('express-session')
const passport = require('passport')

const router = express.Router()
const app = express()
const port = process.env.PORT || 8080

require('./config/passport')(passport)
require('./app/routes')(router, passport)

app.use(session({
  secret: 'lalalalalalalalalalalalalalalalalalalalalalalalalalalHEY',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(`${__dirname}/public`))
app.use('/', router)

app.listen(port)
console.log('The magic happens on http://localhost:%d', port)
