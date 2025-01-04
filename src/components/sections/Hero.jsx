import React from "react";
import './Hero.css'; 
import { motion } from "framer-motion"; // Import Framer Motion
import heroImage from '../../assets/hero.jpg'; // Replace with your hero image


const Hero = () => {
  const HeroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
            <section id="home">
              <motion.div variants={HeroVariants} initial="hidden" animate="visible" transition={{ duration: 1 }}>
              <div className="hero">
                <img src={heroImage} alt="Medical students focused on learning" className="hero-image" />
                <div className="hero-text-wrapper">
                  <h1 id="hero-title">Empowering the Next Generation of Zambian Medical Professionals</h1>
                  <p>
                    We provide a centralized hub of essential resources specifically designed to support your success in MBChB clinical years 4, 5, and 6.
                  </p>
                </div>
              </div>
            </motion.div>
            </section>
  );
};

export default Hero;
