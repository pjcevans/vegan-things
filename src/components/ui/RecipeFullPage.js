import { Component } from 'react'
import myData from '../../testdata/recipes.json';
// Using data imported from the file on each recipe page is fubar,
// this should be done by passing data to the component or by redux


class RecipeFullPage extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    // Picks the data for the current recipe id
    var thisRecipe = (this.props.hasOwnProperty("params")) ? this.props.params.recipeId : this.props.recipeId
    var recipe = myData.items.find(x => x.id === parseInt(thisRecipe))
    var visibleClass = (this.props.visibleClass) ? this.props.visibleClass : undefined

    return (
      <div className={visibleClass}>
        <h2>{recipe.name}<span className="postscript"> - added {recipe.date}</span></h2>
        <div id="recipefullpageblock">

          <div>
          {recipe.images.map( (image, id) =>
            (image.type === "main") ? (

            <img key={id} src={require("../../images/" + image.url)} />
          ) : undefined
          )}
          </div>

          <div className="recipe-fullpage-text">
            <h3>This recipe:</h3>
            <p>{recipe.blurb}</p>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map( (ingredient, id) =>
                <li key={id}>{ingredient.quantity + " " + ingredient.unit + " " + ingredient.type}</li>
              )}
            </ul>
            <h3>Method:</h3>
            <ul>
              {recipe.method.map( (step, id) =>
                <li key={id}>Step {id + 1}: {step}</li>
              )}
            </ul>

          </div>


        </div>
      </div>
    )
 }
}


export default RecipeFullPage
