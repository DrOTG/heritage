import React from "react";
import GlogoWhite from '../../assets/g-drive_white.jpg'; // Google Drive White logo
import './Footer.css'; 

const Footer = () => {
  return (
      <footer className="footer">
          <img src={GlogoWhite} alt="Logo" className="footer-logo" />
          <p className="footer-copyright">&copy; 2024 by Dr.OTG. All rights reserved.</p>
      </footer>
  );
};

export default Footer;
