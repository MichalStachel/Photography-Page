import React, { Component } from 'react';
import '../Styles/KidsPhotos.css';
import Item from '../Pages/Item.jsx';
import ItemBaby from '../Pages/ItemBaby.jsx';
import ItemWedding from '../Pages/ItemWedding.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
// Photos Kids
import a from '../images/kids/a.jpg';
import b from '../images/kids/b.jpg';
import c from '../images/kids/c.jpg';
import d from '../images/kids/d.jpg';
import e from '../images/kids/e.jpg';
import f from '../images/kids/f.jpg';
import g from '../images/kids/g.jpg';
import h from '../images/kids/h.jpg';
// Photos Baby
import i from '../images/Baby/i.jpg';
import j from '../images/Baby/j.jpg';
import k from '../images/Baby/k.jpg';
import l from '../images/Baby/l.jpg';
import m from '../images/Baby/m.jpg';
import n from '../images/Baby/n.jpg';
import o from '../images/Baby/o.jpg';
import p from '../images/Baby/p.jpg';
// Photo Pregnant
import q from '../images/Pregnant/q.jpg';
import r from '../images/Pregnant/r.jpg';
import s from '../images/Pregnant/s.jpg';
import t from '../images/Pregnant/t.jpg';
import u from '../images/Pregnant/u.jpg';
import v from '../images/Pregnant/v.jpg';
import w from '../images/Pregnant/w.jpg';
import x from '../images/Pregnant/x.jpg';




class KidsPhoto extends Component {

  state = {
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
    const kids = [
      { name: a, id: 0 },
      { name: b, id: 1 },
      { name: c, id: 2 },
      { name: d, id: 3 },
      { name: e, id: 4 },
      { name: f, id: 5 },
      { name: g, id: 6 },
      { name: h, id: 7 }];
    const baby = [
      { name: i, id: 0 },
      { name: j, id: 1 },
      { name: k, id: 2 },
      { name: l, id: 3 },
      { name: m, id: 4 },
      { name: n, id: 5 },
      { name: o, id: 6 },
      { name: p, id: 7 }];
    const pregnant = [
      { name: q, id: 0 },
      { name: r, id: 1 },
      { name: s, id: 2 },
      { name: t, id: 3 },
      { name: u, id: 4 },
      { name: v, id: 5 },
      { name: w, id: 6 },
      { name: x, id: 7 }];
    const { showAll, showAllBaby, showAllWedding, showPhoto, index, showPhotoBaby, indexBaby, indexWedding, showPhotoWedding } = this.state
    const object = kids.map((photo) =>
      <Item key={photo.id} name={photo.name} id={photo.id} show={this.show} />
    );
    const objectBaby = baby.map((photo) =>
      <ItemBaby key={photo.id} name={photo.name} id={photo.id} showBaby={this.showBaby} />
    );
    const objectWedding = pregnant.map((photo) =>
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
          <><Element name='scrollToBigPictureWedding'><div className='closeBtn' onClick={this.showOff}><div className='btnLine' /><div className='btnLineSec' /></div></Element> <img src={pregnant[indexWedding].name} alt='' className='show' /></>
          : <> <Element name='scrollToBigPictureWedding'><div className="closeBtn" onClick={this.showOff}><div className={showPhotoWedding ? 'btnLine' : 'btnLineHide'} /><div className={showPhotoWedding ? 'btnLineSec' : 'btnLineSecHide'} /></div></Element><img src={pregnant[indexWedding].name} alt='' className='erase' /></>}

        <span className='wide kidText'><Element name='scrollToWedding'>Sesje ciążowe</Element></span>
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


