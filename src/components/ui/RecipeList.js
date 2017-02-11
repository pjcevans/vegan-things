import { Component } from 'react'
import myData from '../../testdata/recipes.json';
import Recipe from './Recipe'


const data = myData.items

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
        // const { dataa } = this.state
        return (
            <div>
            { (data) ? (
                <div id="gallerybox">
                  {data.map( item =>
                    <Recipe key={item.id} item={item} />
                  )}
                </div>
            ) : (
                <h1>No data currently loaded</h1>
            )}
            </div>

        )
   }
}

export default RecipeList
