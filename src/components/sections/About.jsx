// About.jsx
import React from "react";
import GlogoBlack from '../../assets/g-drive_black.png';
import './About.css';

const About = () => {

  return (
    <section id="about" aria-labelledby="about-title">
      <div className="about-content">
        <h3>Our Mission</h3>
        <p>
          We are dedicated to fostering academic excellence for Zambian medical students. Our platform offers a single, reliable source for all your academic needs, empowering you to excel in your studies and save valuable time. We strive to reduce the stress associated with finding scattered resources, allowing you to focus on what matters most – becoming a world-class medical professional.
        </p>
        <h3>Why Choose Us?</h3>
        <p>
          Our platform is built specifically for the needs of Zambian medical students. We offer a curated selection of resources, including:
        </p>
        <ul className="benefits-list">
          <li>Up-to-date past examination papers</li>
          <li>HPCZ past papers for targeted practice</li>
          <li>Latest editions of essential medical textbooks</li>
          <li>Comprehensive lecture notes and slides</li>
          <li>OSCE marking guides and tips</li>
          <li>Detailed course outlines for easy planning</li>
        </ul>
        <p>
          All resources are centrally stored in the cloud, ensuring seamless access from anywhere, anytime. Let us be your partner in achieving your academic goals.
        </p>
      </div>
    </section>
  );
};

export default About;