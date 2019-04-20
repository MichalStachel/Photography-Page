import React from 'react';
import '../Styles/Navigation.css';
import ToggleButton from '../Layouts/ToggleButton.jsx';
import Menu from './menu.jsx';

const Navigation = (props) => {
  return (
    <nav className='topBar'>
      <ToggleButton isTrue={props.handleIsTrue} />
      <img src="" alt="" />
      <Menu isTrue={props.isTrue} />
    </nav>
  );
}

export default Navigation;