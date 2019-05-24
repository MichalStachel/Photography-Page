import React from 'react';
import '../Styles/Portfolio.css';
import ScrollAnimation from 'react-animate-on-scroll';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div class="portfolio display-container">
      <div class="display-middle">
        <ScrollAnimation animateIn='zoomIn' animateOnce><span class="wide">CONTACT</span></ScrollAnimation>
      </div>
    </div>
  );
}

export default Contact;