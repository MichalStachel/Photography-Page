import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../Styles/Slider.css';
import Baby from '../images/BabyW.jpg';
import Bigger from '../images/Bigger_BabyW.jpg';
import Smaller from '../images/Smaller_BabyW.jpg';
import Woman from '../images/Pregnant_WomanW.jpg';
import arrL from '../images/arrowLeft.png';
import arrR from '../images/arrowRight.png';




const imgList = [
  Baby, Smaller, Bigger, Woman
]
let sliderImg = 'sliderImg';



class Slider extends Component {
  state = {
    counter: 0
  }

  componentDidMount = () => {
    this.myTimer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 4000);
  }

  componentDidUpdate = () => {
    if (this.state.counter === 1) {
      sliderImg = 'sliderImg2';
    } else if (this.state.counter === 3) {
      sliderImg = 'sliderImg2';
    } else if (this.state.counter === 0) {
      sliderImg = 'sliderImg';
    } else if (this.state.counter === 2) {
      sliderImg = 'sliderImg';
    }

    if (this.state.counter >= imgList.length) {
      this.setState({
        counter: 0
      })
    }
    if (this.state.counter < 0) {
      this.setState({
        counter: 3
      })
    }
  }


  nextS = () => {
    clearInterval(this.myTimer);
    this.setState({
      counter: this.state.counter + 1
    })
    this.myTimer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 4000);
  }

  previousS = () => {
    clearInterval(this.myTimer);
    this.setState({
      counter: this.state.counter - 1
    })
    this.myTimer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 4000);
  }

  dotClick = (index) => {
    this.setState({
      counter: index
    })
    clearInterval(this.myTimer);
    this.myTimer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 4000);
  }

  render() {
    const dots = ['dot', 'dot', 'dot', 'dot'];
    const objectDots = dots.map((dot, index) =>
      <div className={index === this.state.counter ? 'active-dot' : 'dot'} onClick={() => this.dotClick(index)} />
    )
    return (
      <div className='slider'>
        <ScrollAnimation animateIn='slideInDown' animateOut='slideOutUp'>
          <button className='nopadding btnSL' onClick={this.previousS}><img src={arrL} alt="arrow" className='arrImg' /></button>
          <div className='nopadding'>
            <img src={imgList[this.state.counter]} alt='' className={sliderImg} id='movingImg' />
          </div>
          <div className="dot-wrapper">
            {objectDots}
          </div>
          <button className='nopadding btnSR' onClick={this.nextS}><img src={arrR} alt="arrow" className='arrImg' /></button>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Slider;