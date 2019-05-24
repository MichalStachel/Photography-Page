import React, { Component } from 'react';
import '../Styles/KidsPhotos.css';
import Bigger_Baby from '../images/Bigger_BabyW.jpg';
import Baby from '../images/BabyW.jpg';
import Smaller from '../images/Smaller_BabyW.jpg';
import Woman from '../images/Pregnant_WomanW.jpg';
import Item from '../Pages/Item.jsx';

class KidsPhoto extends Component {

  state = {
    kids: [
      { name: Bigger_Baby, id: 0 },
      { name: Baby, id: 1 },
      { name: Smaller, id: 2 },
      { name: Woman, id: 3, key: 3 },
      { name: Bigger_Baby, id: 4 },
      { name: Baby, id: 5 },
      { name: Smaller, id: 6 },
      { name: Woman, id: 7 }],
    showAll: false,
    showPhoto: false,
    index: 1
  }


  handleArrayChange = () => {
    this.setState({
      showAll: !this.state.showAll,
    })
  }

  show = (id) => {
    console.log(id)
    this.setState({
      showPhoto: true,
      index: id
    })
    window.scrollTo(0, 1450)
  }
  showOff = () => {
    this.setState({
      showPhoto: false
    })
  }




  render() {

    const { id } = this.state.kids;

    const object = this.state.kids.map((photo, index) =>
      <Item key={id} name={photo.name} id={photo.id} show={this.show} />
    );



    return (
      <section className='mid column'>
        {this.state.showPhoto ? <><div className='closeBtn' onClick={this.showOff}><div className='btnLine' /><div className='btnLineSec' /></div> <img src={this.state.kids[this.state.index].name} alt='' className='show' /></> : <img src={this.state.kids[this.state.index].name} alt='' className='erase' />}
        <span className='wide kidText'>Sesje dziecięce</span>
        <div className='kids'>
          {this.state.showAll ? object : object.slice(0, 4)}
        </div>
        {this.state.showAll ? <button onClick={this.handleArrayChange} className='showBtn'>Pokaż mniej</button> : <button onClick={this.handleArrayChange} className='showBtn'>Pokaż więcej</button>}

        <span className='wide kidText'>Sesje noworodków</span>
        <div className='kids'>
          {object}
        </div>

        <span className='wide kidText'>Sesje ślubne</span>
        <div className='kids'>
          {object}
        </div>
      </section>
    );
  }
}

export default KidsPhoto;


