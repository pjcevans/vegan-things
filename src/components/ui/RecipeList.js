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
            { (this.props.recipes) ? (
                <div id="gallerybox">
                  {this.props.recipes.map( item =>
                    <Recipe key={item.id} item={item} />
                  )}
                </div>
            ) : (
                <h1>No recipes found!</h1>
            )}
            <input type="text"
                   onChange={this.props.func}/>
            </div>

        )
   }
}

export default RecipeList
