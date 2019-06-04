import React from 'react';
import '../Styles/menu.css';
import { Link } from 'react-scroll';

const Menu = (props) => {


  const handleUp = () => {
    window.scrollTo(0, 0)
  }


  return (
    <ul className={props.isTrue ? 'on' : 'off'}>
      <li onClick={handleUp}>Strona Główna</li>
      <li onClick={props.handleChangeToFalse}><Link activeClass="active" to="scrollToKids" spy={true} smooth={true} duration={500} >Sesje Dziecięce</Link></li>
      <li onClick={props.handleChangeToFalse}><Link activeClass="active" to="scrollToBaby" spy={true} smooth={true} duration={500} >Sesje Noworodków</Link></li>
      <li onClick={props.handleChangeToFalse}><Link activeClass="active" to="scrollToWedding" spy={true} smooth={true} duration={500} >Sesje ślubne</Link></li>
      <li onClick={props.handleChangeToFalse}><Link activeClass="active" to="scrollToAbout" spy={true} smooth={true} duration={500} >O mnie</Link></li>
      <li onClick={props.handleChangeToFalse}><Link activeClass="active" to="scrollToContact" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
    </ul>
  );
}

export default Menu;