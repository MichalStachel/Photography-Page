import React from 'react';
import '../Styles/KidsPhotos.css';

const Item = (props) => {
  return (
    <div className='box'>
      <div className='imgBox row'>
        <img src={props.name} alt="" key={props.id} onClick={() => props.show(props.id)} />
      </div>
    </div>
  );
}

export default Item;