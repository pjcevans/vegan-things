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
        searchTerm: ""
      }
  }



  filterByTag(tag, data = this.state.filteredRecipes) {
    // - If filtering by just type (no tag provided) use [this code] instead
    let filteredRecipes = data.filter(
      (recipe) => {
        for (var key in recipe.tags) {
          return recipe.tags[key].indexOf(tag);
          // recipe.tags[key].forEach((type) => {
          //   return indexOf(tag) > -1
          // });
        }
    });
    return filteredRecipes
  }

  searchFilter(event) {
    this.setState({
      searchTerm: event.target.value.substr(0,20).toLowerCase(),
    }, () => {
      this.updateGallery();
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
    this.updateGallery(newTagData);
    // this.setState({
    //   filterTags: newTagData
    // }, () => {
    //   this.updateGallery();
    // });
  }

  updateGallery(newTagData = this.state.filterTags) {
    // Filter based on search
    var newSeachedRecipes = myData.items;

    if (this.state.searchTerm) {
      console.log(this.state.searchTerm)
      console.log("AAAAH WE'RE SEARCHING ON FIRE")
      newSeachedRecipes = newSeachedRecipes.filter(
        (recipe) => {
          return recipe.name.toLowerCase().indexOf(
              this.state.searchTerm) !== -1;
          }
      )
    }
    // solve the problem that after searching is finished, we dont get the full list

    // Further filter the current dataset based on each tag
    // If updateGallery is called with updated tag data
    if (newTagData.length !== 0) {
      newTagData.forEach((tag) => {
        newSeachedRecipes = this.filterByTag(tag, newSeachedRecipes);
      });
    }
    // else { // Or using existing selected tags if not called with updated tag data
    //   if (this.state.filterTags.length !== 0) {
    //     this.state.filterTags.forEach((tag) => {
    //       newSeachedRecipes = this.filterByTag(tag, newSeachedRecipes);
    //     });
    //   }
    // }


    this.setState({
      filterTags: newTagData,
      filteredRecipes: newSeachedRecipes
    });
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
                    filterTags={this.state.filterTags}
                    searchTerm={this.state.searchTerm} />
      </div>

    </div>
  )
 }
}

export default SearchTool


        // for (var prop in obj) {
        //   console.log('obj.' + prop, '=', obj[prop]);
        // }
