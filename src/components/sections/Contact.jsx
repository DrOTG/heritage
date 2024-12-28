// Contact.jsx
import React from "react";
import './Contact.css'; 

const Contact = () => {
  return (
            <section id="contact" style={{ backgroundColor: "white", padding: "50px 20px" }}>
              <div className="contact-section">
                <div className="contact-col left-col">
                  <h2>Get in touch</h2>
                  <p>
                    Feel free to reach out through our contact form. Your feedback, queries,
                    and suggestions are important to us as we strive to provide exceptional
                    service.
                  </p>
                  <ul>
                    <li>Email: x.anonymous.x11x@gmail.com</li>
                    <li>Phone: +260-951500934</li>
                    <li>Location: Lusaka, Zambia</li>
                  </ul>
                </div>
                <div className="contact-col right-col">
                  <form onSubmit={onsubmit}>
                    <input type="text" placeholder="Name" required />
                    <input type="tel" placeholder="Contact Number" />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows="6" required></textarea>
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </section>
  );
};

export default Contact;
