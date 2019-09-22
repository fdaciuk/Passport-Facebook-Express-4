# Boilerplate to authenticate Passport Facebook + Express 4

## Installation

Clone this repository and run:

```sh
npm i
```

## Usage

Rename `config/auth_example.js` file to `config/auth.js` and fill `clientID` and `clientSecret` of your Facebook App.

## Validating if user is logged in

Add the following method in `app/routes/user-routes.js` (just below `exports.profile`):

```js
exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next()
  }

  res.redirect('/')
}
```

On `app/routes/index.js` file, change the following line from:

```js
router.get('/profile', userRoutes.profile)
```

to:

```js
router.get('/profile', userRoutes.isLoggedIn, userRoutes.profile)
```

Then, just run:

```
npm start
```

Enjoy! ;)
