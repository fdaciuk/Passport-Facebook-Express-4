'use strict';

var passport = require( 'passport' );

var UserRoutes = function() {
    var $public = {};
    var $private = {};

    $public.profile = function( req, res ) {
        res.render( 'profile.ejs', {
            user: req.user
        });
    };

    $public.logout = function( req, res ) {
        req.logout();
        res.redirect( '/' );
    };

    $public.authFacebook = passport.authenticate( 'facebook', { scope : 'email' });

    $public.authCallbackFacebook = passport.authenticate( 'facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    });

    return $public;
};

exports = module.exports = UserRoutes();