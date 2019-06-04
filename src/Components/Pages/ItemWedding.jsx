import React from 'react';
import '../Styles/KidsPhotos.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-scroll';

const ItemWedding = (props) => {
  return (
    <section className='box mid'>
      <div className='imgBox row'>
        <Link to='scrollToBigPictureWedding' smooth={true} duration={500} ><ScrollAnimation animateIn='slideInDown' animateOnce duration={0.4}><img src={props.name} alt="" onClick={() => props.showWedding(props.id)} /></ScrollAnimation></Link>
      </div>
    </section>
  );
}

export default ItemWedding;