import React from 'react';
import '../Styles/menu.css';

const Menu = (props) => {

  return (
    <ul className={props.isTrue ? 'on col-md-2' : 'off'}>
      <li>Strona Główna</li>
      <li>Sesje Dziecięce</li>
      <li>Sesje Ciążowe</li>
      <li>Sesje Noworodków</li>
      <li>O mnie</li>
      <li>Kontakt</li>
    </ul>
  );
}

export default Menu;