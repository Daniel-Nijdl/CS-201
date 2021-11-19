# Heroku:

## Sign Up:

- You need to sign up using your email

## Update your package.json
- Find out what version of node you are using `node-v`
- Add `”engines”: { “node”: “16.x”}`
- Add `”scripts”: {“start”: “node app.js”}`

## Create a Procfile:
- This is used by heroku to know what you are doing when someone logs in
- `web: node app.js`

## creating a heroku project

- `heroku login` to log into the site
- `heroku create [name]` to create a new project on the site