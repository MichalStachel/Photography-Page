import React from 'react';
import '../Styles/about.css';
import Bigger_Baby from '../images/Bigger_BabyW.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

const about = () => {
  return (
    <>
      <div class="portfolio display-container">
        <div class="display-middle">
          <ScrollAnimation animateIn='zoomIn' animateOnce> <span class="wide">O MNIE</span></ScrollAnimation>
        </div>
      </div>
      <section class='row mid'>
        <div class='column'>
          <img src={Bigger_Baby} alt="" className='aboutImg' />
        </div>
        <div class='column'>
          <div class='aboutText nopadding'>
            <p className='art nopadding'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat voluptatum quo qui. Soluta molestiae harum sequi reiciendis aperiam totam dignissimos non consequuntur inventore ea! Optio debitis aliquid dolorum quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda cum minus deserunt debitis exercitationem recusandae veritatis. Cupiditate magnam corrupti, voluptatum minus unde ex velit ullam optio consectetur corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo error delectus molestias, ipsa modi sit ea eaque sint ex quidem distinctio neque. Qui necessitatibus esse, assumenda dicta laborum odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem, provident atque blanditiis, distinctio eveniet doloremque molestiae doloribus adipisci, temporibus ab? Deleniti exercitationem perferendis tenetur modi. Recusandae veniam mollitia iure Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione dolorum cum, molestiae, magni rerum nihil voluptate minima assumenda dignissimos, omnis possimus at ex. Repellendus dolores vero eveniet alias a?</p>
          </div>
        </div>
        <p className='aboutText2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reiciendis reprehenderit aspernatur ullam magnam maiores ducimus repudiandae voluptas eaque ipsum, quo mollitia laudantium nihil, minus, perferendis cupiditate molestiae architecto Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque eaque dolore ab ullam suscipit beatae distinctio nesciunt delectus aut. Ullam esse dolorum hic fuga architecto porro debitis doloribus ipsum reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minima tempore voluptates vitae, odio voluptatum et quam nobis dolorem facere ad eos est impedit nihil! Delectus blanditiis ab debitis voluptates.</p>
      </section>
    </>
  );
}

export default about;