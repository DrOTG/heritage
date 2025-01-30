import React from 'react';
import { motion } from 'framer-motion';
import { DataView } from 'primereact/dataview';
import DriveFolders from '../components/DriveFolders';
import './Pricing.css';

const Pricing = () => {
  const tiers = [
    {
      name: "Student",
      price: "35",
      features: [
        "Core Resources Access",
        "Weekly Updates",
        "Basic Support"
      ]
    },
    {
      name: "Professional",
      price: "160",
      features: [
        "All Student Features",
        "Past Exam Papers",
        "Priority Support"
      ]
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Pricing</h1>
          <p className="pricing-intro">Explore our subscription plans and choose the one that works for you!</p>
        </motion.div>

        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              className="pricing-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{tier.name}</h3>
              <div className="price">
                ZMW {tier.price}<span>/month</span>
              </div>
              <ul className="features-list">
                {tier.features.map((feature, j) => (
                  <li key={j}>✓ {feature}</li>
                ))}
              </ul>
              <button className="subscribe-button">
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Keep existing DriveFolders component */}
      <DriveFolders />
    </div>
  );
};

export default Pricing;