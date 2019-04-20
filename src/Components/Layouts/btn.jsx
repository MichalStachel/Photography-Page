import React from 'react';
import '../Styles/btn.css';
import UP from '../images/UP.png';



class btn extends React.Component {
  state = {}

  handleUp() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <button onClick={this.handleUp} className='btnUp'><img src={UP} alt="iconUp" className='iconUp' /></button>
    );
  }
}

export default btn;