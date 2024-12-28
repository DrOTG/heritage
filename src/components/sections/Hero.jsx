import React from "react";
import './Hero.css'; 

const Hero = () => {
  return (
            <section id="home">
              <div className='hero'>
                <div className="title-container">
                  <div className="hero-text">
                    <h1>WE GHAT YOU!!!</h1>
                    <p>Centralized Resources for MBChB Clinical Students(4,5&6)</p>
                    <button className="cta-button">Subscribe Now</button>
                  </div>
                </div>
              </div>
            </section>
  );
};

export default Hero;
