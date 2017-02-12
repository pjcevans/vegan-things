import { Component } from 'react'
import RecipeList from './RecipeList'
import TagMenu from './TagMenu'
import myData from '../../testdata/recipes.json';



class SearchTool extends Component {
  constructor(props) {
      super(props)
      this.state = {
        filteredRecipes: myData.items
      }
  }

  filterByTag(type, tag, data) {
    // - takes tag details and a dataset to work with, uses the full
    // dataset as a default value (for initial display of values
    // - If filtering by just type (no tag provided) use [this code] instead
    let filteredRecipes = this.state.filteredRecipes.filter(
      (recipe) => {
        return recipe.tags[type].indexOf(tag) > -1
      }
    )
    return filteredRecipes
  }

  searchFilter(event) {
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

  tagFilter(filteredByTag) {
    console.log("hi")
    this.setState({
      filteredRecipes: filteredByTag
    });
  }

  render() {

    return (
    <div id="searchbox">


      <TagMenu tagF={this.tagFilter.bind(this)}
               fTag={this.filterByTag.bind(this)} />
      <div>
        <input type="text"
               onChange={this.searchFilter.bind(this)}/>
        <RecipeList recipes={this.state.filteredRecipes} func={this.searchFilter.bind(this)}/>
      </div>

    </div>
  )
 }
}

export default SearchTool


        // for (var prop in obj) {
        //   console.log('obj.' + prop, '=', obj[prop]);
        // }
