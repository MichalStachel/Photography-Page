import React from 'react';
import '../Styles/Contact.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FB from '../images/fb.png';
import INST from '../images/inst.png';
import GM from '../images/gm.png';
import TWT from '../images/twt.png';

class ContactPage extends React.Component {
  state = {
    copied: false,
  };

  removeCopied = () => {
    setTimeout(() => this.setState({ copied: false }), 3000)
  }

  render() {
    const email = 'Wer.stepien@gmail.com';
    return (
      <section className='mid'>
        <div className='mid contact '>
          <CopyToClipboard text={email}
            onCopy={() => this.setState({ copied: true })}>
            <div onClick={this.removeCopied}>   <div className='iconBox'> <img src={GM} alt="" />
              <div className='details'><p className='details GM'><strong> {this.state.copied ? <span id='copied'>skopiowano</span> : 'Kliknij by skopiować'}</strong></p></div>
            </div></div>
          </CopyToClipboard>

          <div className='iconBox'><a href="https://www.facebook.com/weronika.stachel"><img src={FB} alt="" /></a>
            <div className='details'><p className='details'><strong>Kliknij by otworzyć</strong></p></div>
          </div>

          <div className='iconBox'> <img src={TWT} alt="" />
            <div className='details'><p className='details TWT'><strong>Kliknij by otworzyć</strong></p></div>
          </div>

          <div className='iconBox'> <img src={INST} alt="" />
            <div className='details'><p className='details'><strong>Kliknij by otworzyć</strong></p></div>
          </div>
        </div>
      </section>
    );
  }
}


export default ContactPage;