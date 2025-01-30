// Supported_uni.jsx
import { motion } from 'framer-motion';
import logoUnilus from '../../assets/unilus.png';
import logoLmmu from '../../assets/lmmu.png';
import './Supported_uni.css';

const SupportedUni = () => {
  const universities = [
    { logo: logoLmmu, alt: "LMMU" },
    { logo: logoUnilus, alt: "UNILUS" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 }
    },
    hover: { scale: 1.1, y: -5 }
  };

  return (
    <section id="supported-universities" className="supported-uni">
      <motion.div 
        className="uni-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h3 className="section-subtitle">Supported Institutions</h3>
        
        <div className="logo-grid">
          {universities.map((uni, index) => (
            <motion.div 
              key={index}
              className="logo-wrapper"
              variants={logoVariants}
              whileHover="hover"
            >
              <img
                src={uni.logo}
                alt={uni.alt}
                className="uni-logo"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SupportedUni;