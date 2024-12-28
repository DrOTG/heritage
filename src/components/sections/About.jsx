// About.jsx
import React from "react";
import GlogoBlack from '../../assets/g-drive_black.png'; // Google Drive Black logo
import './About.css'; 

const About = () => {
  return (
            <section id="about">
              <div className="about-content">
                <div className="about-left">
                  <img src={GlogoBlack} alt="Logo" className="about-img" />
                </div>
                <div className="about-right">
                  <h2>About Us</h2>
                  <p>
                    We centralize and provide readily accessible resources for MBChB clinical years 4, 5, and 6. 
                    Our mission is to simplify access to essential educational materials, enabling students to excel 
                    in their medical studies without the stress of finding scattered resources.
                  </p>

                  <h3>Our Mission</h3>
                  <p>
                    To empower medical students by providing a single, reliable source for all their academic needs, 
                    fostering academic excellence and saving time.
                  </p>

                  <h3>What We Offer</h3>
                  <div className="offerings">
                    <div className="offering-item">
                      <h4>📚 Past Papers</h4>
                      <p>
                        Access a rich archive of past examination papers to help you prepare effectively for your exams.
                      </p>
                    </div>
                    <div className="offering-item">
                      <h4>🗂️ HPCZ Past Papers</h4>
                      <p>
                        Historical exam papers from the Health Professions Council of Zambia for targeted practice.
                      </p>
                    </div>
                    <div className="offering-item">
                      <h4>📖 Books</h4>
                      <p>
                        Stay ahead with the latest editions of essential medical textbooks curated for your curriculum.
                      </p>
                    </div>
                    <div className="offering-item">
                      <h4>📝 Notes & Slides</h4>
                      <p>
                        Comprehensive lecture notes and slides to complement your studies and enhance understanding.
                      </p>
                    </div>
                    <div className="offering-item">
                      <h4>✅ OSCE Marking Keys</h4>
                      <p>
                        Essential marking guides and tips to prepare for your Objective Structured Clinical Examinations.
                      </p>
                    </div>
                    <div className="offering-item">
                      <h4>📜 Course Outlines</h4>
                      <p>
                        Detailed course outlines to help you plan and structure your academic year with ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Why Choose Us?</h3>
                  <p>
                    Our platform is tailored to the unique needs of Zambian medical students, providing resources that 
                    are updated in real time and centrally stored in the cloud. This ensures seamless access whenever 
                    and wherever you need it.
                  </p>
            </section>
  );
};

export default About;
