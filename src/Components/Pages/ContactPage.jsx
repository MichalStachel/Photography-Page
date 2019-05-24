import React from 'react';
import '../Styles/Contact.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ContactPage extends React.Component {
  state = {
    copied: false,
    copied2: false,
  };

  removeCopied = () => {
    setTimeout(() => this.setState({ copied: false }), 3000)
  }
  removeCopied2 = () => {
    setTimeout(() => this.setState({ copied2: false }), 3000)
  }

  render() {
    const email = 'Wer.stepien@gmail.com';
    const phone = '516 221 055';
    return (
      <section className='contact mid'>
        <div>
          <p><i className="fas fa-phone"> </i><span>Phone: +48 516 221 055</span>
            <CopyToClipboard text={phone}
              onCopy={() => this.setState({ copied: true })}>
              <button id='btn-mail' onClick={this.removeCopied}>Copy</button>
            </CopyToClipboard>
            {this.state.copied ? <span id='copied'>Copied.</span> : null}
          </p>
          <p className='GM'><i className="fas fa-envelope-square"></i><span id='mail'>Mail:Wer.stepien@gmail.com</span>
            <CopyToClipboard text={email}
              onCopy={() => this.setState({ copied2: true })}>
              <button id='btn-mail' onClick={this.removeCopied2}>Copy</button>
            </CopyToClipboard>
            {this.state.copied2 ? <span id='copied'>Copied.</span> : null}</p>

          <p className='fb'><a href='https://www.facebook.com/weronika.stachel' target="blank"><i className="fab fa-facebook"></i>Facebook:Private message</a></p>
        </div>
      </section>
    );
  }
}


export default ContactPage;