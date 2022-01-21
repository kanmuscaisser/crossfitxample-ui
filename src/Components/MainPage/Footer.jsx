import React from 'react';
import wappLogo from '../../Resources/img/whatsapp.png'
import gmailLogo from '../../Resources/img/gmail.png'
import '../../Styles/MainPage/Footer.scss'

const Footer = () => {
  return  <footer className="borrador-Footer">
                <p className="contact-title">CONTACT US!</p>
                <div className="contacto-container">            
                    <a className="wapp-ref" href=""><img className="wapp-img" src={wappLogo} alt="imgWapp"/></a> 
                    <a className="gmail-ref" href=""><img className="gmail-img" src={gmailLogo} alt="imgMail"/></a>
                </div>
            </footer>
};

export default Footer;
