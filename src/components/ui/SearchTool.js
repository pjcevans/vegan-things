import { Component } from 'react'
import RecipeList from './RecipeList'
import myData from '../../testdata/recipes.json';



class SearchTool extends Component {
  constructor(props) {
      super(props)
      this.state = {
        search: ""
      }
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
          <li>Snack (4)</li>
          <li>Main (16)</li>
          <li>Side (24)</li>
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
