// import { Component } from 'react'
import myData from '../../testdata/recipes.json';

const data = myData.items

import RecipeList from './RecipeList'

const Gallery = () =>
  <div>
    <h3>Recipes:</h3>
    <RecipeList recipes={data}/>
  </div>







export default Gallery
