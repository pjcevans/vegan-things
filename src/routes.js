import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import SearchPage from './components/ui/SearchPage'
import Gallery from './components/ui/Gallery'
import AddRecipe from './components/ui/AddRecipe'
import RecipeFullPage from './components/ui/RecipeFullPage'

import  { Main, Whoops404  } from './components'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />

        <Route path="/" component={Main}>
          <Route path="search" component={SearchPage} />
          <Route path="gallery" component={Gallery} />
          <Route path="input" component={AddRecipe} />
          <Route path="/recipes/:recipeId" component={RecipeFullPage}/>
        </Route>


        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes
