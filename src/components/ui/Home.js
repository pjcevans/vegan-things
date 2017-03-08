import MainMenu from './MainMenu'
import Slider from './Slider'
import myData from '../../testdata/recipes.json';
import { Component } from 'react'
import ReactDOM from 'react-dom'
import HomeContentItems from './HomeContentItems'


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
    if (this.state.currentRecipe < myData.items.length) {
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
	console.log()


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
  	        <HomeContentItems currentRecipe={this.state.currentRecipe}
  	        									showAnotherRecipe={this.showAnotherRecipe.bind(this)}
  	        									contentItems={myData.items.slice(0, this.state.currentRecipe + 1)} />
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
