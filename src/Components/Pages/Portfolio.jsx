import React from 'react';
import '../Styles/Portfolio.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Portfolio = () => {
  return (
    <div class="portfolio display-container -opacity-min">
      <div class="display-middle">
        <ScrollAnimation animateIn='zoomIn' animateOnce><span class="wide">PORTFOLIO</span></ScrollAnimation>
      </div>
    </div>
  );
}

export default Portfolio;