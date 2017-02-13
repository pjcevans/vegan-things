import { Component } from 'react'
import RecipeList from './RecipeList'
import TagMenu from './TagMenu'
import myData from '../../testdata/recipes.json';



class SearchTool extends Component {
  constructor(props) {
      super(props)
      this.previousState = myData.items;
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

  tagClickFilter(filteredByTag = this.previousState) {
    this.previousState = this.state.filteredRecipes;
    this.setState({
      filteredRecipes: filteredByTag
    });
  }

  render() {

    return (
    <div id="searchbox">


      <TagMenu tagClickFilter={this.tagClickFilter.bind(this)}
               filterByTag={this.filterByTag.bind(this)}
               recipes={this.state.filteredRecipes} />
      <div>
        <input type="text"
               onChange={this.searchFilter.bind(this)} />
        <RecipeList recipes={this.state.filteredRecipes} />
      </div>

    </div>
  )
 }
}

export default SearchTool


        // for (var prop in obj) {
        //   console.log('obj.' + prop, '=', obj[prop]);
        // }
