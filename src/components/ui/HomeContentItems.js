import HomeShowRecipe from './HomeShowRecipe'
import { Component } from 'react'
import RecipeFullPage from './RecipeFullPage'


class HomeContentItems extends Component {
  constructor(props) {
      super(props)
  }

  render() {
 	var contentItems = []
 	// If no data is passed
 	if (this.props.contentItems.length === 0) {
 		console.log("Whoops, no data provided.")
 	// If a single datum is passed
 	} else if (this.props.contentItems.length === 1) {
	 		contentItems.push(<RecipeFullPage visibleClass={"content-shown"}
                                      key={1}
                                      recipeId={this.props.contentItems[0].id} />)
    // If more than one datum is passed
 	} else if (this.props.contentItems.length > 1) {
 		// FOR
 		// Loop through each datum and display or not according to position in set and current recipe variable
 		for (let i = 1; i <= this.props.contentItems.length; i++) {
 			// If current item is before the latest item to display just draw it
 			if (i < this.props.currentRecipe ) {
		 		contentItems.push(<RecipeFullPage visibleClass={"content-shown"}
	                                      key={i}
	                                      recipeId={this.props.contentItems[i - 1].id} />)
 			// If the current item is the latest item to display draw it as well as a "show more" button
 			// unless it's also the last item in the dataset.
 			} else if (i === this.props.currentRecipe && this.props.currentRecipe !== this.props.contentItems.length) {
			 		contentItems.push(<RecipeFullPage visibleClass={"content-shown"}
		                                      key={i}
		                                      recipeId={this.props.contentItems[i - 1].id} />);
	      	contentItems.push(<HomeShowRecipe key={i + "submit"}
		                                        showAnotherRecipe={this.props.showAnotherRecipe} />)                          
 			// If the current item is the latest item to display and the last in the dataset, 
 			// then just display it without a button
 			} else if (i === this.props.currentRecipe && this.props.currentRecipe === this.props.contentItems.length) {
			 		contentItems.push(<RecipeFullPage visibleClass={"content-shown"}
		                                      key={i}
		                                      recipeId={this.props.contentItems[i - 1].id} />)
 			// If there is another item in the dataset after the current item, draw it as a hidden item, so that
 			// when it is re-drawn as visible later a transition effect can be applied
 			} else if (i === this.props.currentRecipe +1 && this.props.currentRecipe !== this.props.contentItems.length) {
			 		contentItems.push(<RecipeFullPage visibleClass={"content-hidden"}
		                                      key={i}
		                                      recipeId={this.props.contentItems[i - 1].id} />)
 			} 
 		}
 		// END OF FOR
 		//
 	}

    return (
      <div>
      	{contentItems}
      </div>
    )
 }
}


export default HomeContentItems

