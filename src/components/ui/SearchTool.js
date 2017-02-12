import { Component } from 'react'
import RecipeList from './RecipeList'
import myData from '../../testdata/recipes.json';



class SearchTool extends Component {
  constructor(props) {
      super(props)
      this.state = {
        search: "",
        typeSnack: this.filterByTag("recipesize", "snack"),
        typeMain: this.filterByTag("recipesize", "main"),
        typeSide: this.filterByTag("recipesize", "side")
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
    this.setState({
      search: event.target.value.substr(0,20)

    });
  }

  render() {
    let filteredRecipes = myData.items.filter(
      (recipe) => {
        return recipe.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    )

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
        <RecipeList recipes={filteredRecipes}/>
      </div>

    </div>
  )
 }
}

export default SearchTool
