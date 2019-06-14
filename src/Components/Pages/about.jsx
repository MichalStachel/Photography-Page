import React from 'react';
import '../Styles/about.css';
import Weronika from '../images/Weronika.jpg';
import PersonIcon from '../images/person_icon.png';
import ScrollAnimation from 'react-animate-on-scroll';

const about = () => {
  return (
    <>
      <div className="portfolio display-container">
        <div className="display-middle">
          <ScrollAnimation animateIn='zoomIn' animateOnce> <span className="wide">O MNIE</span></ScrollAnimation>
        </div>
      </div>


      <section className='mid'>
        <div className='about mid'>
          <div className='column'>
            <p className='name'> <img src={PersonIcon} height='20vh' alt="" />  Weronika Stępień</p>
            <img src={Weronika} alt="" className='aboutImg mid' />
          </div>
          <div className='nopadding'>
            <p className='art nopadding aboutText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat voluptatum quo qui. Soluta molestiae harum sequi reiciendis aperiam totam dignissimos non consequuntur inventore ea! Optio debitis aliquid dolorum quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda cum minus deserunt debitis exercitationem recusandae veritatis. Cupiditate magnam corrupti, voluptatum minus unde ex velit ullam optio consectetur corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo error delectus molestias, ipsa modi sit ea eaque sint ex quidem distinctio neque. Qui necessitatibus esse, assumenda dicta laborum odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem, provident atque blanditiis, distinctio eveniet doloremque molestiae doloribus adipisci, temporibus ab? Deleniti exercitationem perferendis tenetur modi. Recusandae veniam mollitia iure Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione dolorum cum, molestiae, magni rerum nihil voluptate minima assumenda dignissimos, omnis possimus at ex. Repellendus dolores vero eveniet alias a?</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
