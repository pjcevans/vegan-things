import { Component } from 'react'
import FaLeft from 'react-icons/lib/fa/chevron-left'
import FaRight from 'react-icons/lib/fa/chevron-right'
// This component renders an array of images into a content slider and transitions between
// them in order of `id` at a given interval.
//
// The component takes 2 props:
// - An array of objects containing image paths and image metadata - sliderImages - each 
// image object has an `id` and a `url`.
// - An interval passed in as ms - sliderInterval
//
// CSS Notes:
// - Media queries could be used to position image content more logically on different screens
//
// Dev Notes:
// - The slider was built to support the most recent release of Chrome and littler account
// has been taken of other browsers or other versions, for example the most recent release 
// of Firefox struggled with using padding as part of animating the slider's transition.


class Slider extends Component {

  constructor(props) {
      super(props)
      this.state = {
        sliderPosition: 0
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
    var images = this.props.sliderImages.map((item, i) => {
      var sliderActive = "inactive";
      if (i === this.state.sliderPosition) {
        sliderActive = "active";
      }
      return <a key={item.id} href={"#/recipes/" + item.id} className={sliderActive}><img src={item.url} className={sliderActive} /></a>
    })


    return (
    <div id="slider">
      <div id="sliderOuter">
        <button onClick={() => this.slideLeft()} ><FaLeft /></button>
        <div id="sliderInner">
          { images }
        </div>
        <button onClick={() => this.slideRight()} ><FaRight /></button>
      </div>
    </div>
  )
 }
}

export default Slider
