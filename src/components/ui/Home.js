import MainMenu from './MainMenu'
import Slider from './Slider'
import myData from '../../testdata/recipes.json';

const Home = () => {
	var imageCount = 0;
	var sliderImages = [];
	// assumes a dataset of at least 8 items
	var sliderImages = myData.items.slice(0, 8).map((item) => {
		// selects the first image that has the type "banner" and adds it to the return object
		let images = item.images.filter((image) => {
			return image.type === "banner"
		});
		return {id:item.id,url:images[0].url}
	});



	// var sliderImages = [{id:1,url:"http://www.detox-diet.london/wp-content/uploads/2015/02/Vegan-food-plans-in-london.jpg"},
	//             					   {id:2,url:"http://www.gojicafe.co.uk/uploads/images/Gallery/Food/burger.jpg"},
	//             					   {id:3,url:"http://www.foodintour.com/wp-content/uploads/2016/01/tumblr_myktv7HLhY1svn89to1_1280.jpg"}]
	return (
	    <div className="page">
	        <MainMenu />
	        <div>
	            <h1>React testing zone</h1>
	            <Slider sliderImages={sliderImages}
	            		sliderInterval={7000}/>
	        </div>
	    </div>
    )
}

export default Home
