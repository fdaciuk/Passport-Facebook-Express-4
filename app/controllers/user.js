'use strict';

var ControllerUser = function() {
    var $public = {};
    var $private = {};

    $public.validateFacebookUser = function( token, refreshToken, profile, done ) {
        return done( null, profile );
    };

    return $public;
};

exports = module.exports = ControllerUser();