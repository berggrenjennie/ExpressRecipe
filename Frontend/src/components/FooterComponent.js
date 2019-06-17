//core functionality from React & Bootstrap
import React, {Component} from 'react';

//CSS imports
import '../styles/Footer.css'

class FooterComponent extends Component {
  
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <h4>Sociala Medier</h4>
          <div id="sm-tags">
            <i className="fa fa-facebook-f"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
        <h4 className="copyright">copyright@2019FEJ</h4>
        <div className="kontakt">
          <h4>Kontakta oss</h4>
          <p>0470-72 33 00</p>
          <p>info.FEJ@gmail.com</p>
          <p>Framtidsvägen 12A | 352 57 | Växjö</p>
        </div>
      </footer>
    );
  }
}
export default FooterComponent;