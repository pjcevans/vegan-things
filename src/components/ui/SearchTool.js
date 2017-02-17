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
    // Having each component call this function to see how many recipes
    // exist within each tag is remarkably slow as we have to filter data each
    // time, it would be much faster if this information was computed as data
    // in the containing component as standard and simply passed down as data
    // to display - otherwise a component lower in the heirarchy is throwing
    // data back up the chain, instead of the top level component passing down
    // all required data.
    //
    // - If filtering by just type (no tag provided) use [this code] instead
    let filteredRecipes = data.filter(
      (recipe) => {
        let match = false;
        for (var key in recipe.tags) {

          if (recipe.tags[key].indexOf(tag) > -1) {
            match = true;
          }
          // recipe.tags[key].forEach((type) => {
          //   return indexOf(tag) > -1
          // });
        }
        return match;
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
    // Heavy on resources, reloading full data here each call,
    // regardless of whether we're using filtered data
    var newSeachedRecipes = myData.items;

    if (this.state.searchTerm) {
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

  clearAllTagsAndSearch() {
    // Currently default searchbox input text is set based on state
    // We should instead be using redux to make the processes more repeatable
    // instead of defining per-item behaviour using state
    this.setState({
      filterTags: [],
      searchTerm: ""
    }, () => {
      this.updateGallery();
    });  }

  clearSearch() {
    this.setState({
      searchTerm: ""
    }, () => {
      this.updateGallery();
    });
  }




  render() {

    return (
    <div id="searchbox">
      <TagMenu tagClickFilter={this.tagClickFilter.bind(this)}
               filterByTag={this.filterByTag.bind(this)}
               recipes={this.state.filteredRecipes}
               filterTags={this.state.filterTags}
               searchTerm={this.state.searchTerm}
               toggleTagFilter={this.toggleTagFilter.bind(this)}
               clearSearch={this.clearSearch.bind(this)}
               clearAllTagsAndSearch={this.clearAllTagsAndSearch.bind(this)} />
      <div id="rightcontent">
        <input type="text"
               id="searchbar"
               value={this.state.searchTerm}
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
