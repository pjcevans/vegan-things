import MainMenu from './MainMenu'
import Slider from './Slider'
import myData from '../../testdata/recipes.json';
import RecipeFullPage from './RecipeFullPage'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import HomeShowRecipe from './HomeShowRecipe'


class Home extends Component {

  constructor(props) {
      super(props)
      this.state = {
        currentRecipe: 1
      }
  }

  scrollToBottom = () => {
    // Final item on page passed ref 'finalItem' in order to enable scrolling to that component
    const node = ReactDOM.findDOMNode(this.finalItem);
    node.scrollIntoView({behavior: "smooth"});
  }

  showAnotherRecipe() {
    // after a new recipe has been added scroll to the bottom
    if (this.state.currentRecipe < myData.items.length -1) {
      this.setState({
        currentRecipe: this.state.currentRecipe + 1
      }, () => {
        this.scrollToBottom();
      });
    } else {
    }
  }


  render() {
	var imageCount = 0;
	var sliderImages = [];
	// assumes a dataset of at least 8 items
	var sliderImages = myData.items.slice(0, 8).map((item) => {
		// selects the first image that has the type "banner" and adds it to the return object
		let images = item.images.filter((image) => {
			return image.type === "banner"
		});
		let url = require('../../images/' + images[0].url)
		return {id:item.id,url:url}
	});

	var contentItems = []
	// Adds a component for each recipe in myData up to the number of times 
	// Show another recipe has been clicked plus one. One recipe more should 
	// be present but hidden to allow more responsiveness.
	for (let i = 0; i <= this.state.currentRecipe; i++) {
		// When the last recipe to be currently shown has been reached
		if (i === this.state.currentRecipe) {
		  var visibleClass = "content-hidden";
		  // When that recipe is also the last recipe in the set
		  if (this.state.currentRecipe === myData.items.length -1) {
	      contentItems.push(<RecipeFullPage visibleClass={"content-shown"}
	                                        key={i}
	                                        recipeId={i + 1} />)
	    // When the recipe is the last to currently show but not the last in the set
      } else {
      	contentItems.push(<HomeShowRecipe key={i + "submit"}
	                                        showAnotherRecipe={this.showAnotherRecipe.bind(this)} />)
	      contentItems.push(<RecipeFullPage visibleClass={visibleClass}
	                                        key={i}
	                                        recipeId={i + 1} />)
      }
      // when the recipe to be shown is not the last to be shown or the last in the set
		} else {
      var visibleClass = "content-shown";
      contentItems.push(<RecipeFullPage visibleClass={visibleClass}
                                        key={i}
                                        recipeId={i + 1} />)
    }
	}

	return (
	    <div className="page">
	    	<div id="title-icon">
	    	Vegan <br /> Things
	    	</div>
	        <MainMenu />
	        <div>
	            <Slider sliderImages={sliderImages}
	            		sliderInterval={4000}/>
	        </div>
          <div className="content-list">
  	        {contentItems}
          </div>
          <div></div>
          <div style={ {height: "1px", width: "70%"} }
                ref={(a) => { this.finalItem = a; }}>
          </div>
	    </div>
    )
  }
}

export default Home
