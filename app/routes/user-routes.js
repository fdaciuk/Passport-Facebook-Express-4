'use strict'

const passport = require('passport')

exports.profile = (req, res) => {
  res.render('profile.ejs', {
    user: req.user
  })
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

exports.authFacebook = passport.authenticate('facebook', { scope: 'email' })

exports.authCallbackFacebook = passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/'
})
