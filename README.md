React Testing
=====================
Testing various things:
- React Router
- Props, State, all the react fun
- JSON API mocking

To run locally:
- delete existing bundle.js from public folder (enables hot-reloading for some reason!)
- requires npm / webpack
- npm install
- npm start

to test locally with heroku:
- delete existing bundle.js from public folder (enables hot-reloading for some reason!)
- requires heroku toolbelt / npm / webpack
- npm install
- heroku local web

To deploy, eg to heroku:
- npm run build
- commit
- push to heroku

Areas under development:
=====================
- Search / filter tool for filtering JSON data - https://vegan-things.herokuapp.com/#/search
- JSON schema / actual data for recipes
- Input page for prettily adding new records - https://vegan-things.herokuapp.com/#/input
- Pagination on demand for individual recipes - eg https://vegan-things.herokuapp.com/#/recipes/3
