'use strict'

const FacebookStrategy = require('passport-facebook').Strategy
const ControllerUser = require('../app/controllers/user')
const configAuth = require('./auth')

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    done(null, id)
  })

  passport.use(
    'facebook',
    new FacebookStrategy(
      configAuth.facebookAuth,
      ControllerUser.validateFacebookUser
    )
  )
}
