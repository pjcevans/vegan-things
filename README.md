React Testing
=====================
Testing various things:
- React Router
- Props, State, all the react fun
- JSON API mocking

To run locally:
- requires npm / webpack
- npm install
- npm start

to test locally with heroku:
- requires heroku toolbelt / npm / webpack
- npm install
- heroku local web

local runs no longer hot reload as going through a node server, running with
nodemon hot reloads when file changes are detected - is this the best way to
test locally?

to test locally with nodemon:
- requires npm / webpack
- npm install
- nodemon app.js

To deploy, eg to heroku:
- npm run build
- commit
- push to heroku

Areas under development:
=====================
- Search / filter tool for filtering JSON data
- JSON schema / actual data for recipes
- Input page for prettily adding new records
- Pagination on demand for individual recipes

package.json run scripts for production: 
"build": "cross-env NODE_ENV=production webpack --config ./webpack.prod.config.js --progress --colors",
"start": "node app.js"
