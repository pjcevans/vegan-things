import { Component } from 'react'
import Recipe from './Recipe'


class RecipeList extends Component {
    constructor(props) {
        super(props)
        // this.state = {}
    }

    componentDidMount() {
      // this.setState({
      //   data: myData.items
      // })
    }


    render() {
        // const { data } = this.state

        return (
            <div>
              <p> Filtering by: {JSON.stringify(this.props.filterTags)} </p>
            { (this.props.recipes) ? (
                <div id="gallerybox">
                  {this.props.recipes.map( item =>
                    <Recipe key={item.id} item={item} />
                  )}
                </div>
            ) : (
                <h1>No recipes found!</h1>
            )}
            </div>

        )
   }
}

export default RecipeList
