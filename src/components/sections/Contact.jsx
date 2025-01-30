import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    { icon: faFacebookF, href: "https://www.facebook.com/" },
    { icon: faTwitter, href: "https://twitter.com/" },
    { icon: faInstagram, href: "https://www.instagram.com/" },
    { icon: faYoutube, href: "https://www.youtube.com/" },
    { icon: faLinkedin, href: "https://www.linkedin.com/" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const socialHover = {
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.4 }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="contact-content" variants={containerVariants}>
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect & Collaborate
            </motion.h2>
            
            <motion.div className="contact-details" variants={containerVariants}>
              <motion.p variants={itemVariants}>
                <span className="detail-label">Email:</span>
                <a href="mailto:x.anonymous.x11x@gmail.com">x.anonymous.x11x@gmail.com</a>
              </motion.p>
              <motion.p variants={itemVariants}>
                <span className="detail-label">Phone:</span>
                <a href="tel:+260-951500934">+260-951500934</a>
              </motion.p>
              <motion.p variants={itemVariants}>
                <span className="detail-label">Location:</span>
                Lusaka, Zambia
              </motion.p>
            </motion.div>

            <motion.div className="social-links" variants={containerVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  variants={itemVariants}
                  whileHover={socialHover}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="input-group">
              <input type="text" required />
              <label>Full Name</label>
              <span className="input-border"></span>
            </div>
            
            <div className="input-group">
              <input type="email" required />
              <label>Email Address</label>
              <span className="input-border"></span>
            </div>
            
            <div className="input-group">
              <input type="tel" />
              <label>Phone Number (optional)</label>
              <span className="input-border"></span>
            </div>
            
            <div className="input-group">
              <textarea required rows="4"></textarea>
              <label>Your Message</label>
              <span className="input-border"></span>
            </div>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;