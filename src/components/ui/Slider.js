import { Component } from 'react'
import FaLeft from 'react-icons/lib/fa/chevron-left'
import FaRight from 'react-icons/lib/fa/chevron-right'

class Slider extends Component {
  // This component takes an array of images {sliderImages} and image metadata in object format,
  // with the properties "id" and "url" the component renders this array in a content slider. 
  // Interval at which the content slider transitions is passed down in ms {sliderInterval}
  // -- could add media query to center images on mobile
  constructor(props) {
      super(props)
      this.state = {
        sliderPosition: 0,
        firstImage: "active",
        secondImage: "inactive",
        thirdImage: "inactive"
      }
  }

  componentDidMount() {
     var intervalId = setInterval(this.timer.bind(this), this.props.sliderInterval);
     // store intervalId in the state so it can be accessed later:
     this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
     // use intervalId from the state to clear the interval
     clearInterval(this.state.intervalId);
  }



  slideLeft() {
    clearInterval(this.state.intervalId);
    var intervalId = setInterval(this.timer.bind(this), this.props.sliderInterval);
    if (this.state.sliderPosition === 0) {
      this.setState({
        sliderPosition: this.props.sliderImages.length - 1,
        intervalId: intervalId
      }); 
    } else {
      this.setState({
        sliderPosition: this.state.sliderPosition - 1,
        intervalId: intervalId
      });  
    }

  }

  slideRight() {
    clearInterval(this.state.intervalId);
    var intervalId = setInterval(this.timer.bind(this), this.props.sliderInterval);
    if (this.state.sliderPosition === this.props.sliderImages.length - 1) {
      this.setState({
        sliderPosition: 0,
        intervalId: intervalId
      }); 
    } else {
      this.setState({
        sliderPosition: this.state.sliderPosition + 1,
        intervalId: intervalId
      });  
    }
  }

  timer() {
     this.slideRight();
  }


  render() {
    var images = this.props.sliderImages.map((item) => {
      return <img key={item.id} src={item.url} />
    });


    return (
    <div id="slider">
      <button onClick={() => this.slideLeft()} ><FaLeft /></button>
      <div id="sliderOuter">
        <div id="sliderInner">
         {
          this.props.sliderImages.map((item, i) => {
            var sliderActive = "inactive";
            if (i === this.state.sliderPosition) {
              sliderActive = "active";
            }
            return <a key={item.id} href={"#/recipes/" + item.id}><img src={item.url} className={sliderActive} /></a>
          })
         }

        </div>
      </div>
      <button onClick={() => this.slideRight()} ><FaRight /></button>
    </div>
  )
 }
}

export default Slider
