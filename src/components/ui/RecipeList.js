// import { Component } from 'react'
import Recipe from './Recipe'


const RecipeList = (props) =>

            <div>
            { (props.recipes) ? (
                <div id="gallerybox">
                  {props.recipes.map( item =>
                    <Recipe key={item.id} item={item} />
                  )}
                </div>
            ) : (
                <h1>No recipes found!</h1>
            )}
            </div>


export default RecipeList
