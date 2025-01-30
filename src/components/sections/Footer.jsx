// Footer.jsx
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="footer-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="footer-content">
        <div className="brand-block">
          <h3 className="logo">Heritage.zm</h3>
          <p>Empowering Zambia's Medical Future</p>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="legal-block">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <div className="legal-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;