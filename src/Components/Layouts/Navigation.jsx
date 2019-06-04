import React from 'react';
import '../Styles/Navigation.css';
import ToggleButton from '../Layouts/ToggleButton.jsx';
import Menu from './menu.jsx';
import Logo from '../images/Logo.png';

const Navigation = (props) => {
  return (
    <div>
      <nav className='topBar'>
        <ToggleButton handleIsTrue={props.handleIsTrue} isTrue={props.isTrue} />
        <img src={Logo} className='logo' alt='' />
      </nav>
      <Menu isTrue={props.isTrue} isTrueBaby={props.isTrueBaby} isTrueWedding={props.isTrueWedding} handleChangeToFalse={props.handleChangeToFalse} />
    </div>
  );
}

export default Navigation;