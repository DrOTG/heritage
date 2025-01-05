import React from 'react';

// Sections of Home page
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import SupportedUni from '../components/sections/Supported_uni';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div>
      <div className="css-1xzeski">
        <div className="main css-1ylu0bo">
          <div className="css-klr5dl">
            <Hero />
            <About />
            <SupportedUni />
            <Contact />
          </div>
        </div>
        <div className="css-1xzeski">
          <Footer />
        </div>
      </div>
    </div>
  )
}