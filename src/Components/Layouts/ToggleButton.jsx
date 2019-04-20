import React from 'react';
import '../Styles/ToggleButton.css';

const ToggleButton = (props) => {

  return (
    <button className='toggle-button' onClick={props.handleIsTrue} >
      <div className={props.isTrue ? 'toggle-button_line aniLeft' : 'toggle-button_line backLeft'} />
      <div className={props.isTrue ? 'toggle-button_line midHide' : 'toggle-button_line midShow'} />
      <div className={props.isTrue ? 'toggle-button_line aniRight' : 'toggle-button_line backRight'} />
    </button >
  );
}

export default ToggleButton;