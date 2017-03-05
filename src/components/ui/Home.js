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
	for (let i = 0; i <= this.state.currentRecipe; i++) {
		if (i === this.state.currentRecipe) {
			var visibleClass = "content-hidden";
      contentItems.push(<HomeShowRecipe key={i + "submit"}
                                        showAnotherRecipe={this.showAnotherRecipe.bind(this)} />)
      // Final item on page passed ref in order to enable scrolling to that component
      contentItems.push(<RecipeFullPage visibleClass={visibleClass}
                                        key={i}
                                        recipeId={i + 1} />)
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
