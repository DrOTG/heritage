// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const profileLinks = [
        { name: "Company", href: "/company" },
        { name: "Careers", href: "/careers" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "News", href: "/news" },
        { name: "Contact Us", href: "/contact" }, //Added contact us
        { name: "FAQ", href: "/faq" }, //Added FAQ
    ];

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    const linkVariants = {
        hover: { scale: 1.1, color: "#999" },
        rest: { scale: 1, color: "#fff" },
    };

    return (
        <motion.footer className="footer" variants={footerVariants} initial="hidden" animate="visible">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <p className="copyright">© {year} Heritage Hub. All rights reserved.</p>
                    </div>
                    <div className="footer-section">
                        <ul className="profile-links">
                            {profileLinks.map((link) => (
                                <motion.li key={link.name} whileHover="hover" variants={linkVariants}>
                                    <Link to={link.href}>{link.name}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;