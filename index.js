'use strict';

var express = require( 'express' );
var session = require( 'express-session' );
var passport = require( 'passport' );

var router = express.Router();
var app = express();
var port = process.env.PORT || 8080;

require( './config/passport' )( passport );
require( './app/routes' )( router, passport );

app.use( session({
    secret: 'lalalalalalalalalalalalalalalalalalalalalalalalalalalHEY',
    resave: true,
    saveUninitialized: true
}));
app.use( passport.initialize() );
app.use( passport.session() );
app.use( express.static( __dirname + '/public' ) );
app.use( '/', router );

app.listen( port );
console.log( 'The magic happens on http://localhost:%d', port );