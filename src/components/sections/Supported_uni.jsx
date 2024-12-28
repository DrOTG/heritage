// Supported_uni.jsx
import React from "react";
import logoUnilus from '../../assets/unilus.png'; // Unilus logo
import logoLmmu from '../../assets/lmmu.png'; // LMMU logo
import './Supported_uni.css'; 

const supported_uni = () => {
  return (            
            <section id="supported-universities">
                <div className="universities-section">
                    <h2>Supported Universities</h2>
                    <div className="universities-logos">
                        <img
                            src={logoLmmu}
                            alt="LMMU"
                            className="supported-logo"
                            onClick={() => navigate('/')}
                        />
                        <img
                            src={logoUnilus}
                            alt="UNILUS"
                            className="supported-logo"
                            onClick={() => navigate('/')}
                        />
                    </div>
                    <p className="coming-soon">More Universities Coming Soon...</p>
                </div>
            </section>
 );
};

export default supported_uni;