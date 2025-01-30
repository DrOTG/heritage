// Hero.jsx
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span>MBChB</span>
            <span>Curated Resources</span>
          </h1>
          <p className="subtitle">Pre-clinical & clinical years · Updated regularly · Expert-Organized</p>
          
          <div className="cta-container">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="cta-button"
            >
              Explore Library
            </motion.button>
          </div>
        </motion.div>

        <div className="book-animation">
          <div className="book-stack">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="book"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;