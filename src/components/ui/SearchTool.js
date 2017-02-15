import { Component } from 'react'
import RecipeList from './RecipeList'
import TagMenu from './TagMenu'
import myData from '../../testdata/recipes.json';



class SearchTool extends Component {
  constructor(props) {
      super(props)
      this.state = {
        filteredRecipes: myData.items,
        filterTags: [],
        filterSearchTerm: ""
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

  toggleTagFilter(tag) {
    // Remove tag from list if already present on click
    var index = this.state.filterTags.indexOf(tag)
    if (index > -1) { // if tag is in tag list already
      var newTagData = this.state.filterTags.slice()
      newTagData.splice(index, 1);
    } else {
      var newTagData = this.state.filterTags.slice()
      newTagData.push(tag)
    }
    this.setState({filterTags: newTagData});
  }

  tagClickFilter(filteredByTag) {
    this.setState({
      filteredRecipes: filteredByTag
    });
  }






  render() {

    return (
    <div id="searchbox">


      <TagMenu tagClickFilter={this.tagClickFilter.bind(this)}
               filterByTag={this.filterByTag.bind(this)}
               recipes={this.state.filteredRecipes}
               filterTags={this.state.filterTags}
               toggleTagFilter={this.toggleTagFilter.bind(this)} />
      <div>
        <input type="text"
               onChange={this.searchFilter.bind(this)} />
        <RecipeList recipes={this.state.filteredRecipes}
                    filterTags={this.state.filterTags} />
      </div>

    </div>
  )
 }
}

export default SearchTool


        // for (var prop in obj) {
        //   console.log('obj.' + prop, '=', obj[prop]);
        // }
