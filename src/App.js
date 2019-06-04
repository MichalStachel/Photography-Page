import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import Btn from './Components/Layouts/btn.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import Navigation from './Components/Layouts/Navigation.jsx';
import Slider from './Components/Pages/Slider.jsx';
import Portfolio from './Components/Pages/Portfolio.jsx';
import KidsPhotos from './Components/Pages/KidsPhotos.jsx';
import About from './Components/Pages/about.jsx';
import Contact from './Components/Pages/Contact.jsx';
// import ContactPage from './Components/Pages/ContactPage.jsx';
import './Components/Styles/App.css';
import "animate.css/animate.min.css";
import { Element } from 'react-scroll';




ReallySmoothScroll.shim();


class App extends Component {

  state = {
    isTrue: false,
    isTrueBaby: false,
    isTrueWedding: false,
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
        <Navigation isTrue={this.state.isTrue} isTrueBaby={this.state.isTrueBaby} isTrueWedding={this.state.isTrueWedding} handleIsTrue={this.handleIsTrue} handleChangeToFalse={this.handleChangeToFalse} />
        <main className='container col-md-12 nopadding' onClick={this.handleChangeToFalse}>
          <Slider />
          <Portfolio />
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <KidsPhotos />
            <Element name="scrollToAbout"><About /></Element>
            <Element name="scrollToContact"><Contact /></Element>
            {/* <ContactPage /> */}
            <Btn />
          </ScrollAnimation>
        </main>
      </div>
    );
  }
}

export default App;