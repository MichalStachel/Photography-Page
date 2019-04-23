import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import Btn from './Components/Layouts/btn.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import './Components/Styles/App.css';
import "animate.css/animate.min.css";
import Navigation from './Components/Layouts/Navigation.jsx';
import Slider from './Components/Pages/Slider.jsx';


ReallySmoothScroll.shim();


class App extends Component {

  state = {
    isTrue: false,
  }

  handleIsTrue = () => {
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

  handleChangeToFalse = () => {
    this.setState({
      isTrue: false
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation className='navig' isTrue={this.state.isTrue} handleIsTrue={this.handleIsTrue} handleChangeToFalse={this.handleChangeToFalse} />
        <div className='container col-md-12 nopadding' onClick={this.handleChangeToFalse}>
          <Slider />
          <ScrollAnimation animateIn="fadeIn">
            <div className='spacer' />
            <div className='spacer' />
            <Btn />
            <ScrollAnimation animateIn='bounceInRight' animateOnce duration={1.5}
              animateOut='bounceOutLeft'>
              <div className='spacer' />
            </ScrollAnimation>
            <div className='spacer' />
            <div className='spacer' />
            <div className='spacer' />
            <section className='col-md-8'>Lorem ipsum dolor sit, amet  adipisicing elit. Nisi rem pariatur sapiente fugiat enim at, magnam commodi doloribus modi iste quidem aliquid vero quasi veniam totam saepe corporis, adipisci ratione.</section>
            <div className='spacer' />
          </ScrollAnimation>


        </div>
      </div>
    );
  }
}

export default App;