'use strict'

exports.validateFacebookUser = (token, refreshToken, profile, done) => {
  return done(null, profile)
}
