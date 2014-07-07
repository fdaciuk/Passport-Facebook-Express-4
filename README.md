# Boilerplate to authenticate Passport Facebook + Express 4

Rename `config/auth_example.js` file to `config/auth.js` and fill `clientID` and `clientSecret` of your Facebook App.

## Validating if user is logged in

Add the following method in `app/routes/user-routes.js` (just below `$public.profile`):

```javascript
$public.isLoggedIn = function( req, res, next ) {
  if( req.isAuthenticated() ) {
    return next();
  }

  res.redirect( '/' );
}
```

On `app/routes/index.js` file, change the following line from:

```javascript
router.get( '/profile', userRoutes.profile );
```

to:

```javascript
router.get( '/profile', userRoutes.isLoggedIn, userRoutes.profile );
```

Enjoy! ;)