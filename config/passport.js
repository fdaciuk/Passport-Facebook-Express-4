'use strict'

var FacebookStrategy = require('passport-facebook').Strategy
var ControllerUser = require('../app/controllers/user')
var configAuth = require('./auth')

exports = module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    done(null, id)
  })

  passport.use('facebook',
    new FacebookStrategy(
      configAuth.facebookAuth,
      ControllerUser.validateFacebookUser
    ))
}
