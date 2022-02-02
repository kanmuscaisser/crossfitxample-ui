import React from 'react';
import wappLogo from '../../resources/img/whatsapp.png'
import gmailLogo from '../../resources/img/gmail.png'
import '../../styles/MainPage/Footer.scss'

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
