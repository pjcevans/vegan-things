import { Component } from 'react'
import TagCategoryRow from './TagCategoryRow'
import TagRow from './TagRow'
import TagFilterItem from './TagFilterItem'
import TagClearAll from './TagClearAll'
import TagClearSearch from './TagClearSearch'




class TagMenu extends Component {
  constructor(props) {
      super(props)
  }



  render() {
    var rows = [];
    var tagTypes = [];
    var tagRows = {};
    var selectedTags = [];
    this.props.recipes.forEach((recipe) => {
      // Populate a list of tag types
      for (var tag in recipe.tags) {
        if (tagTypes.indexOf(tag) === -1) {
          tagTypes.push(tag);
        }
      }
    });

    tagTypes.forEach((tag) => {
      // For each type of tag, populate unique list of tags
      tagRows[tag] = [];
      this.props.recipes.forEach((recipe) => {
        recipe.tags[tag].forEach((tagname) => {
          if (tagRows[tag].indexOf(tagname) === -1) {
            tagRows[tag].push(tagname);
          }
        });
      });
    });

    for (var key in tagRows) {
      // For every menu header & item, populate components
      rows.push(<TagCategoryRow key={key} name={key} />);
      tagRows[key].forEach((item) => {
        var status = "normal";
        if (this.props.filterTags.indexOf(item) > -1) {
          var status = "clicked";
        }
        rows.push(<TagRow key={key + item}
                          category={key}
                          item={item}
                          clicked={status}
                          tagClickFilter={this.props.tagClickFilter}
                          filterByTag={this.props.filterByTag}
                          toggleTagFilter={this.props.toggleTagFilter} />);
      });
    }

    this.props.filterTags.forEach((tag) =>  {
      selectedTags.push(<TagFilterItem key={tag}
                                       item={tag}
                                       toggleTagFilter={this.props.toggleTagFilter} />);
    });
    return (
      <div id="filterpane">

        { (this.props.filterTags.length > 0 ||
          this.props.searchTerm) ? (
            <TagClearAll clearAllTagsAndSearch={this.props.clearAllTagsAndSearch}/>
        ) : (
            <div></div>
        )}

        { (this.props.searchTerm) ? (
            <TagClearSearch clearSearch={this.props.clearSearch}
                            searchTerm={this.props.searchTerm} />
        ) : (
            <div></div>
        )}

        <div className="filtertagsbox">
        {selectedTags}
        </div>
        <table>
          <thead>
            <tr>
              <th>Filter your results:</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default TagMenu


      // {
      // props.recipes.forEach((recipe) => {
      //   <p>{recipe.name}</p>
      //   <ul>
      //   for (var tag in recipe.tags) {
      //     recipe.tags[tag].forEach((item) => {
      //       <li>{item}</li>
      //     });
      //   };
      //   </ul>
      // });
      // }
