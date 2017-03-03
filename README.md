React Testing
=====================
Testing various things:
- React Router
- Props, State, all the react fun
- JSON API mocking

To run locally with hot reloading + auto page reload:
- requires npm / webpack-dev-server
- npm install
- npm run dev

to test locally with heroku:
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

Development Notes:
=====================
- As in this thread, using both hot module replacement and -hot switch of webpack dev server causes recursive updates & stack overflow. Opted to use the plugin over the -hot switch http://stackoverflow.com/questions/32716885/maximum-call-stack-exceeded-error-in-reactjs-can-someone-help-explain-whats-go