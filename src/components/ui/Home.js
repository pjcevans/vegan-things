import MainMenu from './MainMenu'
import Slider from './Slider'
import myData from '../../testdata/recipes.json';
import RecipeFullPage from './RecipeFullPage'
import { Component } from 'react'


class Home extends Component {

  constructor(props) {
      super(props)
      this.state = {
        currentRecipe: 1
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
		var visibleClass = "content-shown";
		if (i === this.state.currentRecipe) {
			visibleClass = "content-hidden";
		}
		contentItems.push(<RecipeFullPage visibleClass={visibleClass} key={i} recipeId={i + 1} />)
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
	        {contentItems}
	        hi
	    </div>
    )
  }
}

export default Home
