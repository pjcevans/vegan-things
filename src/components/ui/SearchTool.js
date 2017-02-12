import { Component } from 'react'
import RecipeList from './RecipeList'
import myData from '../../testdata/recipes.json';



class SearchTool extends Component {
  constructor(props) {
      super(props)
      this.state = {
        filteredRecipes: myData.items,
        typeSnack: this.filterByTag("recipesize", "snack"),
        typeMain: this.filterByTag("recipesize", "main"),
        typeSide: this.filterByTag("recipesize", "side")
        // Solve the problem of manually setting these tag counts,
        // they should update when a search is performed to show
        // the narrowed down items. When they are clicked they should
        // then further sort the searched items by which tag is clicked.
      }
  }

  filterByTag(type, tag) {
    // if filtering by just type (no tag provided) use [this code] instead
    let filteredRecipes = myData.items.filter(
      (recipe) => {
        return recipe.tags[type].indexOf(tag) > -1
      }
    )
    return filteredRecipes
  }

  updateSearch(event) {
    let newFilteredRecipes = myData.items.filter(
      // this searches amongst the whole dataset every search
      // whereas it should actually search based on which tags
      // are selected. doh. Though actually many sites will reset
      // tags on a new search anyway, so maybe leave it for now
      (recipe) => {
        return recipe.name.toLowerCase().indexOf(
          event.target.value.substr(0,20).toLowerCase()) !== -1;
        }
    )
    this.setState({
      filteredRecipes: newFilteredRecipes
    });
  }

  render() {

    return (
    <div id="searchbox">

      <div id="filterpane">
        <p>Filter your results:</p>
        <p>Type of meal</p>
        <ul>
          <li>Snack ({this.state.typeSnack.length})</li>
          <li>Main ({this.state.typeMain.length})</li>
          <li>Side ({this.state.typeSide.length})</li>
        </ul>
      </div>

      <div>
        <input type="text"
               value={this.state.search}
               onChange={this.updateSearch.bind(this)}/>
        <RecipeList recipes={this.state.filteredRecipes}/>
      </div>

    </div>
  )
 }
}

export default SearchTool
