'use strict'

var mainRoutes = require('./main-routes')
var userRoutes = require('./user-routes')

exports = module.exports = function (router, passport) {
  // Project Routes
  router.get('/', mainRoutes.index)
  router.get('/profile', userRoutes.profile)

  // Facebook Routes
  router.get('/auth/facebook', userRoutes.authFacebook)
  router.get('/auth/facebook/callback', userRoutes.authCallbackFacebook)
  router.get('/logout', userRoutes.logout)
}
