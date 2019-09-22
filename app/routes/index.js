'use strict'

const mainRoutes = require('./main-routes')
const userRoutes = require('./user-routes')

module.exports = (router, passport) => {
  // Project Routes
  router.get('/', mainRoutes.index)
  router.get('/profile', userRoutes.profile)

  // Facebook Routes
  router.get('/auth/facebook', userRoutes.authFacebook)
  router.get('/auth/facebook/callback', userRoutes.authCallbackFacebook)
  router.get('/logout', userRoutes.logout)
}
