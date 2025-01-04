// Supported_uni.jsx
import React from "react";
import logoUnilus from '../../assets/unilus.png'; // Unilus logo
import logoLmmu from '../../assets/lmmu.png'; // LMMU logo
import './Supported_uni.css'; 

const supported_uni = () => {
  return (            
            <section id="supported-universities" className="clients">
                <div className="container">
                    <div className="row client-logos">
                        <div className="client-logo">
                            <img
                                src={logoLmmu}
                                alt="LMMU"
                                onClick={() => navigate('/')}
                            />
                        </div>
                        <div className="client-logo">
                            <img
                                src={logoUnilus}
                                alt="UNILUS"
                                onClick={() => navigate('/')}
                            />
                        </div>
                    </div>
                </div>        
            </section>
 );
};

export default supported_uni;