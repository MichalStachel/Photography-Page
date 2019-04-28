import React from 'react';
import '../Styles/menu.css';

const Menu = (props) => {


  const handleUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ul className={props.isTrue ? 'on' : 'off'} onClick={props.handleChangeToFalse}>
      <li onClick={handleUp}>Strona Główna</li>
      <li>Sesje Dziecięce</li>
      <li>Sesje Ciążowe</li>
      <li>Sesje Noworodków</li>
      <li>O mnie</li>
      <li>Kontakt</li>
    </ul>
  );
}

export default Menu;