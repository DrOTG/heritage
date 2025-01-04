// Contact.jsx
import React from "react";
import { Link } from "react-router-dom";
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

  const linkVariants = {
    hover: { scale: 1.1, color: "#999" },
    rest: { scale: 1, color: "#fff" },
};
  return (
            <section id="contact" style={{ backgroundColor: "white", padding: "50px 20px" }}>
              <div className="contact-section">
                <div className="contact-col left-col">
                  <h2>Get in touch</h2>
                  <p>
                    Feel free to reach out through our contact form. Your feedback, queries,
                    and suggestions are important to us as we strive to provide exceptional
                    service.
                  </p>
                  <ul>
                    <li>Email: x.anonymous.x11x@gmail.com</li>
                    <li>Phone: +260-951500934</li>
                    <li>Location: Lusaka, Zambia</li>
                  </ul>
                  <ul className="social-links">
                        {socialLinks.map((link) => (
                            <motion.li key={link.icon} whileHover="hover" variants={linkVariants}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer"> {/* Added target="_blank" */}
                                    <FontAwesomeIcon icon={link.icon} />
                                    <i className={link.icon}></i>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="contact-col right-col">
                  <form onSubmit={onsubmit}>
                    <input type="text" placeholder="Name" required />
                    <input type="tel" placeholder="Contact Number" />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows="6" required></textarea>
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </section>
  );
};

export default Contact;
