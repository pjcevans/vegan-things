import { Component } from 'react'
import TagCategoryRow from './TagCategoryRow'
import TagRow from './TagRow'

class TagMenu extends Component {
  constructor(props) {
      super(props)
  }



  render() {
    var rows = [];
    var tagTypes = [];
    var tagRows = {};
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
      console.log(tagRows)
    });

    for (var key in tagRows) {
      // For every menu header & item, populate components
      rows.push(<TagCategoryRow key={key} name={key} />);
      tagRows[key].forEach((item) => {
        rows.push(<TagRow key={key + item}
                          item={item}
                          tagClickFilter={this.props.tagClickFilter}
                          filterByTag={this.props.filterByTag} />);
      });
    }

    return (
      <div id="filterpane">
        <table>
          <thead>
            <tr>
              <th>Filter your results:</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>




        <p>Filter your results:</p>
        <p>Type of meal</p>
        <ul>
          <a onClick={() => this.props.tagClickFilter(this.props.filterByTag("size", "snack"))}>
            Snack ({this.props.filterByTag("size", "snack").length})
          </a>

          <li>Main ({this.props.filterByTag("size", "main").length})</li>
          <li>Side ({this.props.filterByTag("size", "side").length})</li>
        </ul>
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
