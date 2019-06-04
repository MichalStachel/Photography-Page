import React, { Component } from 'react';
import '../Styles/KidsPhotos.css';
import Bigger_Baby from '../images/Bigger_BabyW.jpg';
import Baby from '../images/BabyW.jpg';
import Smaller from '../images/Smaller_BabyW.jpg';
import Woman from '../images/Pregnant_WomanW.jpg';
import Item from '../Pages/Item.jsx';
import ItemBaby from '../Pages/ItemBaby.jsx';
import ItemWedding from '../Pages/ItemWedding.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';


class KidsPhoto extends Component {

  state = {
    kids: [
      { name: Bigger_Baby, id: 0 },
      { name: Baby, id: 1 },
      { name: Smaller, id: 2 },
      { name: Woman, id: 3 },
      { name: Bigger_Baby, id: 4 },
      { name: Baby, id: 5 },
      { name: Smaller, id: 6 },
      { name: Woman, id: 7 }],
    baby: [
      { name: Smaller, id: 0 },
      { name: Bigger_Baby, id: 1 },
      { name: Woman, id: 2 },
      { name: Bigger_Baby, id: 3 },
      { name: Smaller, id: 4 },
      { name: Baby, id: 5 },
      { name: Baby, id: 6 },
      { name: Woman, id: 7 }],
    wedding: [
      { name: Bigger_Baby, id: 0 },
      { name: Baby, id: 1 },
      { name: Smaller, id: 2 },
      { name: Woman, id: 3, key: 3 },
      { name: Bigger_Baby, id: 4 },
      { name: Baby, id: 5 },
      { name: Smaller, id: 6 },
      { name: Woman, id: 7 }],
    showAll: false,
    showAllBaby: false,
    showAllWedding: false,
    showPhoto: false,
    showPhotoBaby: false,
    showPhotoWedding: false,
    index: 1,
    indexBaby: 1,
    indexWedding: 1
  }


  handleArrayChange = () => {
    this.setState({
      showAll: !this.state.showAll,
    })
  }
  handleArrayChangeBaby = () => {
    this.setState({
      showAllBaby: !this.state.showAllBaby,
    })
  }
  handleArrayChangeWedding = () => {
    this.setState({
      showAllWedding: !this.state.showAllWedding,
    })
  }

  show = (id) => {
    console.log(id)
    this.setState({
      showPhoto: true,
      index: id
    })
  }
  showBaby = (id) => {
    console.log(id)
    this.setState({
      showPhotoBaby: true,
      indexBaby: id
    })
  }
  showWedding = (id) => {
    console.log(id)
    this.setState({
      showPhotoWedding: true,
      indexWedding: id
    })
  }
  showOff = () => {
    this.setState({
      showPhoto: false,
      showPhotoBaby: false,
      showPhotoWedding: false
    })
  }




  render() {
    const { showAll, showAllBaby, showAllWedding, showPhoto, kids, index, showPhotoBaby, baby, indexBaby, wedding, indexWedding, showPhotoWedding } = this.state
    const object = kids.map((photo) =>
      <Item key={photo.id} name={photo.name} id={photo.id} show={this.show} />
    );
    const objectBaby = baby.map((photo) =>
      <ItemBaby key={photo.id} name={photo.name} id={photo.id} showBaby={this.showBaby} />
    );
    const objectWedding = wedding.map((photo) =>
      <ItemWedding key={photo.id} name={photo.name} id={photo.id} showWedding={this.showWedding} />
    );



    return (


      <section className='column'>
        {showPhoto ?
          <><Element name='scrollToBigPicture'><div className="closeBtn" onClick={this.showOff}><div className='btnLine' /><div className='btnLineSec' /></div></Element> <img src={kids[index].name} alt='' className='show' /></>
          : <> <Element name='scrollToBigPicture'><div className="closeBtn" onClick={this.showOff}><div className={showPhoto ? 'btnLine' : 'btnLineHide'} /><div className={showPhoto ? 'btnLineSec' : 'btnLineSecHide'} /></div></Element><img src={kids[index].name} alt='' className='erase' /></>}

        <span className='wide kidText'><Element name='scrollToKids'>Sesje dziecięce</Element></span>
        <div className='kids'>
          {showAll ? object : object.slice(0, 4)}
        </div>
        <ScrollAnimation animateIn='slideInDown' animateOnce duration={0.4}>
          {showAll ? <button onClick={this.handleArrayChange} className='showBtn'>Pokaż mniej</button> : <button onClick={this.handleArrayChange} className='showBtn'>Pokaż więcej</button>}
        </ScrollAnimation>

        {/* Second Element */}
        {showPhotoBaby ?
          <><Element name='scrollToBigPictureBaby'><div className='closeBtn' onClick={this.showOff}><div className='btnLine' /><div className='btnLineSec' /></div></Element> <img src={baby[indexBaby].name} alt='' className='show' /></>
          : <> <Element name='scrollToBigPictureBaby'><div className="closeBtn" onClick={this.showOff}><div className={showPhotoBaby ? 'btnLine' : 'btnLineHide'} /><div className={showPhotoBaby ? 'btnLineSec' : 'btnLineSecHide'} /></div></Element><img src={baby[indexBaby].name} alt='' className='erase' /></>}

        <span className='wide kidText'><Element name='scrollToBaby'>Sesje noworodków</Element></span>
        <div className='kids'>
          {showAllBaby ? objectBaby : objectBaby.slice(0, 4)}
        </div>
        <ScrollAnimation animateIn='slideInDown' animateOnce duration={0.4}>
          {showAllBaby ? <button onClick={this.handleArrayChangeBaby} className='showBtn'>Pokaż mniej</button> : <button onClick={this.handleArrayChangeBaby} className='showBtn'>Pokaż więcej</button>}
        </ScrollAnimation>
        {/* Third Element */}
        {showPhotoWedding ?
          <><Element name='scrollToBigPictureWedding'><div className='closeBtn' onClick={this.showOff}><div className='btnLine' /><div className='btnLineSec' /></div></Element> <img src={wedding[indexWedding].name} alt='' className='show' /></>
          : <> <Element name='scrollToBigPictureWedding'><div className="closeBtn" onClick={this.showOff}><div className={showPhotoWedding ? 'btnLine' : 'btnLineHide'} /><div className={showPhotoWedding ? 'btnLineSec' : 'btnLineSecHide'} /></div></Element><img src={wedding[indexWedding].name} alt='' className='erase' /></>}

        <span className='wide kidText'><Element name='scrollToWedding'>Sesje ślubne</Element></span>
        <div className='kids'>
          {showAllWedding ? objectWedding : objectWedding.slice(0, 4)}
        </div>
        <ScrollAnimation animateIn='slideInDown' animateOnce duration={0.4}>
          {showAllWedding ? <button onClick={this.handleArrayChangeWedding} className='showBtn'>Pokaż mniej</button> : <button onClick={this.handleArrayChangeWedding} className='showBtn'>Pokaż więcej</button>}
        </ScrollAnimation>

      </section>
    );
  }
}

export default KidsPhoto;


