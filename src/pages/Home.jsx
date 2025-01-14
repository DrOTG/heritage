import React from 'react';

// Sections of Home page
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import SupportedUni from '../components/sections/Supported_uni';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className="page-wrapper">
        <div className="sections-container">
            <Hero />
            <About />
            <SupportedUni />
            <Contact />
          </div>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>
  )
}