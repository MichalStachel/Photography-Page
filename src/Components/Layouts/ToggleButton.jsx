import React from 'react';
import '../Styles/ToggleButton.css';

const ToggleButton = (props) => {

  return ( 
  <button className='toggle-button' onClick={props.isTrue}>
  <div className='toggle-button_line' />
  <div className='toggle-button_line' />
  <div className='toggle-button_line' />
</button> 
 );
}
 
export default ToggleButton;