import React from "react";
import { motion } from "framer-motion";
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" aria-labelledby="about-title" className="about-section">
      <motion.div 
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 variants={itemVariants} className="section-subtitle">
          Our Mission
        </motion.h3>
        
        <motion.p variants={itemVariants} className="about-text">
          We are dedicated to fostering academic excellence for Zambian medical students. Our platform offers a single, reliable source for all your academic needs, empowering you to excel in your studies and save valuable time.
        </motion.p>

        <motion.h3 variants={itemVariants} className="section-subtitle">
          Why Choose Us?
        </motion.h3>
        
        <motion.p variants={itemVariants} className="about-text">
          Our platform is built specifically for the needs of Zambian medical students. We offer a curated selection of resources, including:
        </motion.p>

        <motion.ul className="benefits-list" variants={containerVariants}>
          {[
            "Up-to-date past examination papers",
            "HPCZ past papers for targeted practice",
            "Latest editions of essential medical textbooks",
            "Comprehensive lecture notes and slides",
            "OSCE marking guides and tips",
            "Detailed course outlines for easy planning"
          ].map((item, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants} className="about-text">
          All resources are centrally stored in the cloud, ensuring seamless access from anywhere, anytime. Let us be your partner in achieving your academic goals.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;